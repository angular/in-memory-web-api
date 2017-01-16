import { Inject, Injectable, Injector, Optional } from '@angular/core';

import { BaseResponseOptions, BrowserXhr, Connection, ConnectionBackend,
         Headers, ReadyState, Request, RequestMethod,
         Response, ResponseOptions, URLSearchParams,
         XHRBackend, XSRFStrategy } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Observer }   from 'rxjs/Observer';
import 'rxjs/add/operator/delay';

import { STATUS, STATUS_CODE_INFO } from './http-status-codes';

////////////  HELPERS ///////////

/**
 * Create an error Response from an HTTP status code and error message
 */
export function createErrorResponse(req: Request, status: number, message: string): ResponseOptions {
  return new ResponseOptions({
    body: { 'error': `${message}` },
    url: req.url,
    headers: new Headers({ 'Content-Type': 'application/json' }),
    status: status
  });
}

/**
 * Create an Observable response from response options.
 */
export function createObservableResponse(req: Request, resOptions: ResponseOptions): Observable<Response> {
    return new Observable<Response>((responseObserver: Observer<Response>) => {
      emitResponse(responseObserver, req, resOptions);
      return () => { }; // unsubscribe function
    });
}

/**
 * Create a response from response options
 * and tell "ResponseObserver" (an `Observer<Response>`) to emit it.
 * The observer's observable is either completed or in error state after call.
 */
export function emitResponse(responseObserver: Observer<Response>, req: Request, resOptions: ResponseOptions) {
  resOptions.url = resOptions.url || req.url; // make sure url is set
  resOptions = setStatusText(resOptions);

  const res = new Response(resOptions);

  if (isSuccess(res.status)) {
    responseObserver.next(res);
    responseObserver.complete();
  } else {
    responseObserver.error(res);
  }
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
export abstract class InMemoryBackendConfigArgs {
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
   * true (default) should NOT return the entity (204) after a POST. false: return the entity (200).
   */
  post204?: boolean;
  /**
   * true (default) should NOT return the entity (204) after a PUT. false: return the entity (200).
   */
  put204?: boolean;
  /**
   * The base path to the api, e.g, 'api/'.
   * If not specified than `parseUrl` assumes it is the first path segment in the request.
   */
  apiBase?: string;
  /**
   * host for this service, e.g., 'localhost'
   */
  host?: string;
  /**
   * root path _before_ any API call, e.g., ''
   */
  rootPath?: string;
}

export function removeTrailingSlash(path: string) {
  return path.replace(/\/$/, '');
}

/////////////////////////////////
/**
*  InMemoryBackendService configuration options
*  Usage:
*    InMemoryWebApiModule.forRoot(InMemHeroService, {delay: 600})
*
*  or if providing separately:
*    provide(InMemoryBackendConfig, {useValue: {delay: 600}}),
*/
@Injectable()
export class InMemoryBackendConfig implements InMemoryBackendConfigArgs {
  constructor(config: InMemoryBackendConfigArgs = {}) {
    Object.assign(this, {
      // default config:
      caseSensitiveSearch: false,
      defaultResponseOptions: new BaseResponseOptions(),
      delay: 500, // simulate latency by delaying response
      delete404: false, // don't complain if can't find entity to delete
      passThruUnknownUrl: false, // 404 if can't process URL
      post204: true, // don't return the item after a POST
      put204: true,  // don't return the item after a PUT
      apiBase: undefined, // assumed to be the first path segment
      host: undefined,    // default value is actually set in InMemoryBackendService ctor
      rootPath: undefined // default value is actually set in InMemoryBackendService ctor
    }, config);
  }
}

/**
 * Returns true if the the Http Status Code is 200-299 (success)
 */
export function isSuccess(status: number): boolean { return status >= 200 && status < 300; };

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
 * Provide a `responseInterceptor` method of this type in your `inMemDbService` to
 * morph the response options created in the `collectionHandler`.
 */
export type ResponseInterceptor = (res: ResponseOptions, ri: RequestInfo) => ResponseOptions;

/**
 * Set the status text in a response:
 */
export function setStatusText(options: ResponseOptions) {
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

/**
 *
 * Interface for the result of the parseUrl method:
 *   Given URL "http://localhost:8080/api/customers/42?foo=1 the default implementation returns
 *     base: 'api/'
 *     collectionName: 'customers'
 *     id: '42'
 *     query: new URLSearchParams('foo=1')
 *     resourceUrl: 'http://localhost/api/customers/'
 */
export interface ParsedUrl {
  base: string;           // the slash-terminated "base" for api requests (e.g. `api/`)
  collectionName: string; // the name of the collection of data items (e.g.,`customers`)
  id: string;             // the (optional) id of the item in the collection (e.g., `42`)
  query: URLSearchParams; // the query as an Angular `Http` client request's URLSearchParams object
  resourceUrl: string;    // the effective URL for the resource (e.g., 'http://localhost/api/customers/')
}

////////////  InMemoryBackendService ///////////
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
@Injectable()
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
    this.config.host = loc.host;         // default to app web server host
    this.config.rootPath = loc.pathname; // default to path when app is served (e.g.'/')
    Object.assign(this.config, config || {});
    this.setPassThruBackend();
  }

  createConnection(req: Request): Connection {
    let response: Observable<Response>;
    try {
      response = this.handleRequest(req);
    } catch (error) {
      const err = error.message || error;
      const options = createErrorResponse(req, STATUS.INTERNAL_SERVER_ERROR, `${err}`);
      response = this.addDelay(createObservableResponse(req, options));
    }
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
   *   // for store with a 'customers' collection
   *   GET api/customers          // all customers
   *   GET api/customers/42       // the character with id=42
   *   GET api/customers?name=^j  // 'j' is a regex; returns customers whose name starts with 'j' or 'J'
   *   GET api/customers.json/42  // ignores the ".json"
   *
   * Also accepts direct commands to the service in which the last segment of the apiBase is the word "commands"
   * Examples:
   *     POST commands/resetDb,
   *     GET/POST commands/config - get or (re)set the config
   *
   *   HTTP overrides:
   *     If the injected inMemDbService defines an HTTP method (lowercase)
   *     The request is forwarded to that method as in
   *     `inMemDbService.get(httpMethodInterceptorArgs)`
   *     which must return an `Observable<Response>`
   */
  protected handleRequest(req: Request): Observable<Response> {

    const parsed = this.inMemDbService['parseUrl'] ?
      // parse with override method
      this.inMemDbService['parseUrl'](req.url) as ParsedUrl :
      // parse with default url parser
      this.parseUrl(req.url);

    const { base, collectionName, id, query, resourceUrl } = parsed;
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

    if (/commands\/$/i.test(reqInfo.base)) {
      return this.commands(reqInfo);

    } else if (this.inMemDbService[reqMethodName]) {
      // InMemoryDbService has an overriding interceptor for this HTTP method; call it
      // The interceptor result must be an Observable<Response>
      const interceptorArgs: HttpMethodInterceptorArgs = {
        requestInfo: reqInfo,
        db: this.db,
        config: this.config,
        passThruBackend: this.passThruBackend
      };
      const interceptorResponse = this.inMemDbService[reqMethodName](interceptorArgs) as Observable<Response>;
      return this.addDelay(interceptorResponse);

    } else if (reqInfo.collection) {
      // request is for a collection created by the InMemoryDbService
      return this.addDelay(this.collectionHandler(reqInfo));

    } else if (this.passThruBackend) {
      // Passes request thru to a "real" backend which returns an Observable<Response>
      // BAIL OUT with this Observable<Response>
      return this.passThruBackend.createConnection(req).response;

    } else {
      // can't handle this request
      resOptions = createErrorResponse(req, STATUS.NOT_FOUND, `Collection '${collectionName}' not found`);
      return this.addDelay(createObservableResponse(req, resOptions));
    }
  }

  /**
   * Add configured delay to response observable unless delay === 0
   */
  protected addDelay(response: Observable<Response>): Observable<Response> {
    const delay = this.config.delay;
    return delay === 0 ? response : response.delay(delay || 500);
  }

  /**
   * Apply query/search parameters as a filter over the collection
   * This impl only supports RegExp queries on string properties of the collection
   * ANDs the conditions together
   */
  protected applyQuery(collection: any[], query: URLSearchParams): any[] {
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
    return new Observable<Response>((responseObserver: Observer<Response>) => {
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
          resOptions = createErrorResponse(req, STATUS.METHOD_NOT_ALLOWED, 'Method not allowed');
          break;
      }

      // If `inMemDbService.responseInterceptor` exists, let it morph the response options
      if (this.inMemDbService['responseInterceptor']) {
        resOptions = (this.inMemDbService['responseInterceptor'] as ResponseInterceptor)(resOptions, reqInfo);
      }

      emitResponse(responseObserver,  reqInfo.req, resOptions);
      return () => { }; // unsubscribe function
    });
  }

  /**
   * When the last segment of the `base` path is "commands", the `collectionName` is the command
   * Example URLs:
   *   commands/resetdb   // Reset the "database" to its original state
   *   commands/config (GET) // Return this service's config object
   *   commands/config (!GET) // Update the config (e.g. delay)
   *
   * Commands are "hot", meaning they are always executed immediately
   * whether or not someone subscribes to the returned observable
   *
   * Usage:
   *   http.post('commands/resetdb', undefined);
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
        resOptions = createErrorResponse(reqInfo.req, STATUS.INTERNAL_SERVER_ERROR, `Unknown command "${command}"`);
    }

    return createObservableResponse(reqInfo.req, resOptions);
  }

  protected delete({id, collection, collectionName, headers, req}: RequestInfo) {
    if (!id) {
      return createErrorResponse(req, STATUS.NOT_FOUND, `Missing "${collectionName}" id`);
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
    }, undefined);
    return maxId + 1;
  }

  protected get({id, query, collection, collectionName, headers, req}: RequestInfo) {
    let data = collection;

    if (id) {
      data = this.findById(collection, id);
    } else if (query) {
      data = this.applyQuery(collection, query);
    }

    if (!data) {
      return createErrorResponse(req, STATUS.NOT_FOUND, `'${collectionName}' with id='${id}' not found`);
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
    // tslint:disable-next-line:triple-equals
    if (!collection || id == undefined) { return undefined; }
    const isNumberId =  collection[0] && typeof collection[0].id === 'number';
    if (isNumberId) {
      const idNum = parseFloat(id);
      return isNaN(idNum) ? id : idNum;
    }
    return id;
  }

  /**
   * Parses the request URL into a `ParsedUrl` object.
   * Parsing depends upon certain values of `config`: `apiBase`, `host`, and `urlRoot`.
   *
   * Configuring the `apiBase` yields the most interesting changes to `parseUrl` behavior:
   *   When apiBase=undefined and url='http://localhost/api/collection/42'
   *     {base: 'api/', collectionName: 'collection', id: '42', ...}
   *   When apiBase='some/api/root/' and url='http://localhost/some/api/root/collection'
   *     {base: 'some/api/root/', collectionName: 'collection', id: undefined, ...}
   *   When apiBase='/' and url='http://localhost/collection'
   *     {base: '/', collectionName: 'collection', id: undefined, ...}
   *
   * The actual api base segment values are ignored. Only the number of segments matters.
   * The following api base strings are considered identical: 'a/b' ~ 'some/api/' ~ `two/segments'
   *
   * To replace this default method, assign your alternative to your InMemDbService['parseUrl']
   */
  protected parseUrl(url: string): ParsedUrl {
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
      const pathSegments = path.split('/');
      let segmentIx = 0;

      // apiBase: the front part of the path devoted to getting to the api route
      // Assumes first path segment if no config.apiBase
      // else ignores as many path segments as are in config.apiBase
      // Does NOT care what the api base chars actually are.
      let apiBase: string;
      // tslint:disable-next-line:triple-equals
      if (this.config.apiBase == undefined) {
        apiBase = pathSegments[segmentIx++];
      } else {
        apiBase = removeTrailingSlash(this.config.apiBase.trim());
        if (apiBase) {
          segmentIx = apiBase.split('/').length;
        } else {
          segmentIx = 0; // no api base at all; unwise but allowed.
        }
      }
      apiBase = apiBase + '/';

      let collectionName = pathSegments[segmentIx++];
      // ignore anything after a '.' (e.g.,the "json" in "customers.json")
      collectionName = collectionName && collectionName.split('.')[0];

      const id = pathSegments[segmentIx++];
      const query = loc.search && new URLSearchParams(loc.search.substr(1));
      const resourceUrl = urlRoot + apiBase + collectionName + '/';
      return { base: apiBase, collectionName, id, query, resourceUrl };
    } catch (err) {
      const msg = `unable to parse url '${url}'; original error: ${err.message}`;
      throw new Error(msg);
    }
  }

  protected post({collection, /* collectionName, */ headers, id, req, resourceUrl}: RequestInfo) {
    const item = JSON.parse(<string>req.text());
    // tslint:disable-next-line:triple-equals
    if (item.id == undefined) {
      item.id = id || this.genId(collection);
    }
    // ignore the request id, if any. Alternatively,
    // could reject request if id differs from item.id
    id = item.id;
    const existingIx = this.indexOf(collection, id);
    const body = { data: this.clone(item) };

    if (existingIx > -1) {
      collection[existingIx] = item;
      const res =
        this.config.post204 ?
          {headers, status: STATUS.NO_CONTENT} : // successful; no content
          {headers, body, status: STATUS.OK }; // successful; return entity
      return new ResponseOptions(res);
    } else {
      collection.push(item);
      headers.set('Location', resourceUrl + '/' + id);
      return new ResponseOptions({ headers, body, status: STATUS.CREATED });
    }
  }

  protected put({id, collection, collectionName, headers, req}: RequestInfo) {
    const item = JSON.parse(<string>req.text());
    // tslint:disable-next-line:triple-equals
    if (item.id == undefined) {
      return createErrorResponse(req, STATUS.NOT_FOUND, `Missing '${collectionName}' id`);
    }
    // tslint:disable-next-line:triple-equals
    if (id != item.id) {
      return createErrorResponse(req, STATUS.BAD_REQUEST, `"${collectionName}" id does not match item.id`);
    }
    const existingIx = this.indexOf(collection, id);
    const body = { data: this.clone(item) };

    if (existingIx > -1) {
      collection[existingIx] = item;
      const res =
        this.config.put204 ?
          {headers, status: STATUS.NO_CONTENT} : // successful; no content
          {headers, body, status: STATUS.OK }; // successful; return entity
      return new ResponseOptions(res);
    } else {
      collection.push(item);
      return new ResponseOptions({ headers, body, status: STATUS.CREATED });
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

}
