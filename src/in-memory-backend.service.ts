import { Inject, Injector, Optional } from '@angular/core';
import { BaseResponseOptions, BrowserXhr, Connection, ConnectionBackend,
         Headers, ReadyState, Request, RequestMethod,
         Response, ResponseOptions, URLSearchParams,
         XHRBackend, XSRFStrategy } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer }   from 'rxjs/Observer';
import 'rxjs/add/operator/delay';

import { STATUS, STATUS_CODE_INFO } from './http-status-codes';

/**
* Interface for a class that creates an in-memory database
*
* Its `createDb` method creates a hash of named collections that represents the database
*
* For maximum flexibility, the service may define HTTP method overrides.
* Such methods must match the spelling of an HTTP method in lower case (e.g, "get").
* If a request has a matching method, it will be called as in
* `get(info: requestInfo, db: {})` where `db` is the database object described above.
*/
export abstract class InMemoryDbService {
  /**
  * Creates a "database" hash whose keys are collection names
  * and whose values are arrays of collection objects to return or update.
  *
  * This method must be safe to call repeatedly.
  * Each time it should return a new object with new arrays containing new item objects.
  * This condition allows InMemoryBackendService to morph the arrays and objects
  * without touching the original source data.
  */
  abstract createDb(): {};
}

/**
* Interface for InMemoryBackend configuration options
*/
export interface InMemoryBackendConfigArgs {
  /**
   * false (default) if search match should be case insensitive
   */
  caseSensitiveSearch?: boolean;
  /**
   * default response options
   */
  defaultResponseOptions?: ResponseOptions;
  /**
   * delay (in ms) to simulate latency
   */
  delay?: number;
  /**
   * false (default) if ok when object-to-delete not found; else 404
   */
  delete404?: boolean;
  /**
   * false (default) if should pass unrecognized request URL through to original backend; else 404
   */
  passThruUnknownUrl?: boolean;
  /**
   * host for this service
   */
  host?: string;
  /**
   * root path before any API call
   */
  rootPath?: string;
}

/**
*  InMemoryBackendService configuration options
*  Usage:
*    InMemoryWebApiModule.forRoot(InMemHeroService, {delay: 600})
*
*  or if providing separately:
*    provide(InMemoryBackendConfig, {useValue: {delay: 600}}),
*/
export class InMemoryBackendConfig implements InMemoryBackendConfigArgs {
  constructor(config: InMemoryBackendConfigArgs = {}) {
    Object.assign(this, {
      // default config:
      caseSensitiveSearch: false,
      defaultResponseOptions: new BaseResponseOptions(),
      delay: 500,
      delete404: false,
      passThruUnknownUrl: false,
      host: '',
      rootPath: ''
    }, config);
  }
}

/**
* Interface for object w/ info about the current request url
* extracted from an Http Request
*/
export interface RequestInfo {
  req: Request;
  base: string;
  collection: any[];
  collectionName: string;
  headers: Headers;
  id: any;
  query: URLSearchParams;
  resourceUrl: string;
}

/**
* Interface for object passed to an HTTP method override method
*/
export interface HttpMethodInterceptorArgs {
  requestInfo: RequestInfo;           // parsed request
  db: Object;                         // the current in-mem database collections
  config: InMemoryBackendConfigArgs;  // the current config
  passThruBackend: ConnectionBackend; // pass through backend, if it exists
}

export const isSuccess = (status: number): boolean => (status >= 200 && status < 300);

/**
 * Simulate the behavior of a RESTy web api
 * backed by the simple in-memory data store provided by the injected InMemoryDataService service.
 * Conforms mostly to behavior described here:
 * http://www.restapitutorial.com/lessons/httpmethods.html
 *
 * ### Usage
 *
 * Create `InMemoryDataService` class that implements `InMemoryDataService`.
 * Call `forRoot` static method with this service class and optional configuration object:
 * ```
 * // other imports
 * import { HttpModule }           from '@angular/http';
 * import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
 *
 * import { InMemHeroService, inMemConfig } from '../api/in-memory-hero.service';
 * @NgModule({
 *  imports: [
 *    HttpModule,
 *    InMemoryWebApiModule.forRoot(InMemHeroService, inMemConfig),
 *    ...
 *  ],
 *  ...
 * })
 * export class AppModule { ... }
 * ```
 */

export class InMemoryBackendService {
  protected passThruBackend: ConnectionBackend;
  protected config: InMemoryBackendConfigArgs = new InMemoryBackendConfig();
  protected db: Object;

  constructor(
    private injector: Injector,
    private inMemDbService: InMemoryDbService,
    @Inject(InMemoryBackendConfig) @Optional() config: InMemoryBackendConfigArgs
    ) {
    this.resetDb();

    const loc = this.getLocation('./');
    this.config.host = loc.host;
    this.config.rootPath = loc.pathname;
    Object.assign(this.config, config || {});

    this.setPassThruBackend();
  }


  createConnection(req: Request): Connection {
    const response = this.handleRequest(req);
    return {
      readyState: ReadyState.Done,
      request: req,
      response
    };
  }

  ////  protected /////

  /**
   * Process Request and return an Observable of Http Response object
   * in the manner of a RESTy web api.
   *
   * Expect URI pattern in the form :base/:collectionName/:id?
   * Examples:
   *   // for store with a 'characters' collection
   *   GET api/characters          // all characters
   *   GET api/characters/42       // the character with id=42
   *   GET api/characters?name=^j  // 'j' is a regex; returns characters whose name starts with 'j' or 'J'
   *   GET api/characters.json/42  // ignores the ".json"
   *
   * Also accepts
   *   "commands":
   *     POST "resetDb",
   *     GET/POST "config"" - get or (re)set the config
   *
   *   HTTP overrides:
   *     If the injected inMemDbService defines an HTTP method (lowercase)
   *     The request is forwarded to that method as in
   *     `inMemDbService.get(httpMethodInterceptorArgs)`
   *     which must return an `Observable<Response>`
   */
  protected handleRequest(req: Request): Observable<Response> {
    const {base, collectionName, id, resourceUrl, query} = this.parseUrl(req.url);
    const collection = this.db[collectionName];
    const reqInfo: RequestInfo = {
      req: req,
      base: base,
      collection: collection,
      collectionName: collectionName,
      headers: new Headers({ 'Content-Type': 'application/json' }),
      id: this.parseId(collection, id),
      query: query,
      resourceUrl: resourceUrl
    };

    const reqMethodName = RequestMethod[req.method || 0].toLowerCase();
    let resOptions: ResponseOptions;

    try {
      if ('commands' === reqInfo.base.toLowerCase()) {
        return this.commands(reqInfo);

      } else if (this.inMemDbService[reqMethodName]) {
        // If service has an interceptor for an HTTP method, call it
        const interceptorArgs: HttpMethodInterceptorArgs = {
          requestInfo: reqInfo,
          db: this.db,
          config: this.config,
          passThruBackend: this.passThruBackend
        };
        // The result which must be Observable<Response>
        return this.inMemDbService[reqMethodName](interceptorArgs);

      } else if (reqInfo.collection) {
        return this.collectionHandler(reqInfo);

      } else if (this.passThruBackend) {
        // Passes request thru to a "real" backend which returns an Observable<Response>
        // BAIL OUT with this Observable<Response>
        return this.passThruBackend.createConnection(req).response;

      } else {
        resOptions = this.createErrorResponse(STATUS.NOT_FOUND, `Collection '${collectionName}' not found`);
        return this.createObservableResponse(resOptions);
      }

    } catch (error) {
      const err = error.message || error;
      resOptions = this.createErrorResponse(STATUS.INTERNAL_SERVER_ERROR, `${err}`);
      return this.createObservableResponse(resOptions);
    }

  }

  /**
   * Apply query/search parameters as a filter over the collection
   * This impl only supports RegExp queries on string properties of the collection
   * ANDs the conditions together
   */
  protected applyQuery(collection: any[], query: URLSearchParams) {
    // extract filtering conditions - {propertyName, RegExps) - from query/search parameters
    const conditions: {name: string, rx: RegExp}[] = [];
    const caseSensitive = this.config.caseSensitiveSearch ? undefined : 'i';
    query.paramsMap.forEach((value: string[], name: string) => {
      value.forEach(v => conditions.push({name, rx: new RegExp(decodeURI(v), caseSensitive)}));
    });

    const len = conditions.length;
    if (!len) { return collection; }

    // AND the RegExp conditions
    return collection.filter(row => {
      let ok = true;
      let i = len;
      while (ok && i) {
        i -= 1;
        const cond = conditions[i];
        ok = cond.rx.test(row[cond.name]);
      }
      return ok;
    });
  }

  protected clone(data: any) {
    return JSON.parse(JSON.stringify(data));
  }

  protected collectionHandler(reqInfo: RequestInfo): Observable<Response> {
    const req = reqInfo.req;
    let resOptions: ResponseOptions;

    switch (req.method) {
      case RequestMethod.Get:
        resOptions = this.get(reqInfo);
        break;
      case RequestMethod.Post:
        resOptions = this.post(reqInfo);
        break;
      case RequestMethod.Put:
        resOptions = this.put(reqInfo);
        break;
      case RequestMethod.Delete:
        resOptions = this.delete(reqInfo);
        break;
      default:
        resOptions = this.createErrorResponse(STATUS.METHOD_NOT_ALLOWED, 'Method not allowed');
        break;
    }
    return this.createObservableResponse(resOptions);
  }

  /**
   * When the `base`="commands", the `collectionName` is the command
   * Example URLs:
   *   commands/resetdb   // Reset the "database" to its original state
   *   commands/config (GET) // Return this service's config object
   *   commands/config (!GET) // Update the config (e.g. delay)
   *
   * Usage:
   *   http.post('commands/resetdb', null);
   *   http.get('commands/config');
   *   http.post('commands/config', '{"delay":1000}');
   */
  protected commands(reqInfo: RequestInfo): Observable<Response> {
    const command = reqInfo.collectionName.toLowerCase();
    const method  = reqInfo.req.method;
    let resOptions: ResponseOptions;

    switch (command) {
      case 'resetdb':
        this.resetDb();
        resOptions = new ResponseOptions({ status: STATUS.OK });
        break;
      case 'config':
        if (method === RequestMethod.Get) {
          resOptions = new ResponseOptions({
            body: this.clone(this.config),
            status: STATUS.OK
          });
        } else {
          // Be nice ... any other method is a config update
          const body = JSON.parse(<string>reqInfo.req.text() || '{}');
          Object.assign(this.config, body);
          this.setPassThruBackend();
          resOptions = new ResponseOptions({ status: STATUS.NO_CONTENT });
        }
        break;
      default:
        resOptions = this.createErrorResponse(
          STATUS.INTERNAL_SERVER_ERROR, `Unknown command "${command}"`);
    }
    return this.createObservableResponse(resOptions);
  }

  protected createErrorResponse(status: number, message: string)  {
    return new ResponseOptions({
      body: { 'error': `${message}` },
      headers: new Headers({ 'Content-Type': 'application/json' }),
      status: status
    });
  }

  protected createObservableResponse(resOptions: ResponseOptions): Observable<Response> {
      resOptions = this.setStatusText(resOptions);
      if (this.config.defaultResponseOptions) {
        resOptions = this.config.defaultResponseOptions.merge(resOptions);
      }

      const res = new Response(resOptions);

      return new Observable<Response>((responseObserver: Observer<Response>) => {
        if (isSuccess(res.status)) {
          responseObserver.next(res);
          responseObserver.complete();
        } else {
          responseObserver.error(res);
        }
        return () => { }; // unsubscribe function
      })
      .delay(this.config.delay || 500);
  }

  protected delete({id, collection, collectionName, headers /*, req */}: RequestInfo) {
    if (!id) {
      return this.createErrorResponse(STATUS.NOT_FOUND, `Missing "${collectionName}" id`);
    }
    const exists = this.removeById(collection, id);
    return new ResponseOptions({
      headers: headers,
      status: (exists || !this.config.delete404) ? STATUS.NO_CONTENT : STATUS.NOT_FOUND
    });
  }

  protected findById(collection: any[], id: number | string) {
    return collection.find((item: any) => item.id === id);
  }

  protected genId(collection: any): any {
    // assumes numeric ids
    let maxId = 0;
    collection.reduce((prev: any, item: any) => {
      maxId = Math.max(maxId, typeof item.id === 'number' ? item.id : maxId);
    }, null);
    return maxId + 1;
  }

  protected get({id, query, collection, collectionName, headers}: RequestInfo) {
    let data = collection;

    if (id) {
      data = this.findById(collection, id);
    } else if (query) {
      data = this.applyQuery(collection, query);
    }

    if (!data) {
      return this.createErrorResponse(STATUS.NOT_FOUND,
        `'${collectionName}' with id='${id}' not found`);
    }
    return new ResponseOptions({
      body: { data: this.clone(data) },
      headers: headers,
      status: STATUS.OK
    });
  }

  protected getLocation(href: string) {
    const l = document.createElement('a');
    l.href = href;
    return l;
  };

  protected indexOf(collection: any[], id: number) {
    return collection.findIndex((item: any) => item.id === id);
  }

  // tries to parse id as number if collection item.id is a number.
  // returns the original param id otherwise.
  protected parseId(collection: {id: any}[], id: string): any {
    if (!id) { return null; }
    const isNumberId =  collection[0] && typeof collection[0].id === 'number';
    if (isNumberId) {
      const idNum = parseFloat(id);
      return isNaN(idNum) ? id : idNum;
    }
    return id;
  }

  protected parseUrl(url: string) {
    try {
      const loc = this.getLocation(url);
      let drop = this.config.rootPath.length;
      let urlRoot = '';
      if (loc.host !== this.config.host) {
        // url for a server on a different host!
        // assume it's collection is actually here too.
        drop = 1; // the leading slash
        urlRoot = loc.protocol + '//' + loc.host + '/';
      }
      const path = loc.pathname.substring(drop);
      let [base, collectionName, id] = path.split('/');
      const resourceUrl = urlRoot + base + '/' + collectionName + '/';
      [collectionName] = collectionName.split('.'); // ignore anything after the '.', e.g., '.json'
      const query = loc.search && new URLSearchParams(loc.search.substr(1));
      return { base, id, collectionName, resourceUrl, query };
    } catch (err) {
      const msg = `unable to parse url '${url}'; original error: ${err.message}`;
      throw new Error(msg);
    }
  }

  protected post({collection, /* collectionName, */ headers, id, req, resourceUrl}: RequestInfo) {
    const item = JSON.parse(<string>req.text());
    if (!item.id) {
      item.id = id || this.genId(collection);
    }
    // ignore the request id, if any. Alternatively,
    // could reject request if id differs from item.id
    id = item.id;
    const existingIx = this.indexOf(collection, id);
    if (existingIx > -1) {
      collection[existingIx] = item;
      return new ResponseOptions({
        headers: headers,
        status: STATUS.NO_CONTENT
      });
    } else {
      collection.push(item);
      headers.set('Location', resourceUrl + '/' + id);
      return new ResponseOptions({
        headers: headers,
        body: { data: this.clone(item) },
        status: STATUS.CREATED
      });
    }
  }

  protected put({id, collection, collectionName, headers, req}: RequestInfo) {
    const item = JSON.parse(<string>req.text());
    if (!id) {
      return this.createErrorResponse(STATUS.NOT_FOUND, `Missing '${collectionName}' id`);
    }
    if (id !== item.id) {
      return this.createErrorResponse(STATUS.BAD_REQUEST,
        `"${collectionName}" id does not match item.id`);
    }
    const existingIx = this.indexOf(collection, id);
    if (existingIx > -1) {
      collection[existingIx] = item;
      return new ResponseOptions({
        headers: headers,
        status: STATUS.NO_CONTENT // successful; no content
      });
    } else {
      collection.push(item);
      return new ResponseOptions({
        body: { data: this.clone(item) },
        headers: headers,
        status: STATUS.CREATED
      });
    }
  }

  protected removeById(collection: any[], id: number) {
    const ix = this.indexOf(collection, id);
    if (ix > -1) {
      collection.splice(ix, 1);
      return true;
    }
    return false;
  }

  /**
   * Reset the "database" to its original state
   */
  protected resetDb() {
    this.db = this.inMemDbService.createDb();
  }

  protected setPassThruBackend() {
    this.passThruBackend = undefined;
    if (this.config.passThruUnknownUrl) {
      try {
        // copied from @angular/http/backends/xhr_backend
        const browserXhr = this.injector.get(BrowserXhr);
        const baseResponseOptions = this.injector.get(ResponseOptions);
        const xsrfStrategy = this.injector.get(XSRFStrategy);
        this.passThruBackend = new XHRBackend(browserXhr, baseResponseOptions, xsrfStrategy);
      } catch (ex) {
        ex.message = 'Cannot create passThru404 backend; ' + (ex.message || '');
        throw ex;
      }
    }
  }

  protected setStatusText(options: ResponseOptions) {
    try {
      const statusCode = STATUS_CODE_INFO[options.status];
      options['statusText'] = statusCode ? statusCode.text : 'Unknown Status';
      return options;
    } catch (err) {
      return new ResponseOptions({
        status: STATUS.INTERNAL_SERVER_ERROR,
        statusText: 'Invalid Server Operation'
      });
    }
  }
}
