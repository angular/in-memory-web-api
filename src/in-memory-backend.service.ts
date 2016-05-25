import { Inject, OpaqueToken, Optional } from '@angular/core';
import { BaseResponseOptions, Connection, Headers, ReadyState, Request, RequestMethod,
         Response, ResponseOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer }   from 'rxjs/Observer';
import 'rxjs/add/operator/delay';

import { STATUS, STATUS_CODE_INFO } from './http-status-codes';

/**
* Seed data for in-memory database
* Must implement InMemoryDbService.
*/
export const SEED_DATA = new OpaqueToken('seedData');

/**
* Interface for a class that creates an in-memory database
* Safe for consuming service to morph arrays and objects.
*/
export interface InMemoryDbService {
  /**
  * Creates "database" object hash whose keys are collection names
  * and whose values are arrays of the collection objects.
  *
  * It must be safe to call again and should return new arrays with new objects.
  * This condition allows InMemoryBackendService to morph the arrays and objects
  * without touching the original source data.
  */
  createDb(): {};
}

/**
* Interface for InMemoryBackend configuration options
*/
export interface InMemoryBackendConfigArgs {
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
*    provide(InMemoryBackendConfig, {useValue: {delay:600}}),
*/
export class InMemoryBackendConfig implements InMemoryBackendConfigArgs {
  constructor(config: InMemoryBackendConfigArgs = {}) {
    Object.assign(this, {
      defaultResponseOptions: new BaseResponseOptions(),
      delay: 500,
      delete404: false
    }, config);
  }
}

/**
* Interface for object w/ info about the current request url
* extracted from an Http Request
*/
export interface ReqInfo {
  req: Request;
  base: string;
  collection: any[];
  collectionName: string;
  headers: Headers;
  id: any;
  query: URLSearchParams;
  resourceUrl: string;
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
 * Create InMemoryDataService class the implements InMemoryDataService.
 * Register both this service and the seed data as in:
 * ```
 * // other imports
 * import { HTTPPROVIDERS, XHRBackend } from 'angular2/http';
 * import { InMemoryBackendConfig, InMemoryBackendService, SEEDDATA } from '../in-memory-backend/in-memory-backend.service';
 * import { InMemoryStoryService } from '../api/in-memory-story.service';
 *
 * @Component({
 *   selector: ...,
 *   templateUrl: ...,
 *   providers: [
 *     HTTPPROVIDERS,
 *     provide(XHRBackend, { useClass: InMemoryBackendService }),
 *     provide(SEEDDATA, { useClass: InMemoryStoryService }),
 *     provide(InMemoryBackendConfig, { useValue: { delay: 600 } }),
 *   ]
 * })
 * export class AppComponent { ... }
 * ```
 */

export class InMemoryBackendService {

  protected config: InMemoryBackendConfigArgs = new InMemoryBackendConfig();
  protected db: {};

  constructor(
    @Inject(SEED_DATA) private seedData: InMemoryDbService,
    @Inject(InMemoryBackendConfig) @Optional() config: InMemoryBackendConfigArgs) {
    this.resetDb();

    let loc = this.getLocation('./');
    this.config.host = loc.host;
    this.config.rootPath = loc.pathname;
    Object.assign(this.config, config);
  }

  createConnection(req: Request): Connection {
    let res = this.handleRequest(req);

    let response = new Observable<Response>((responseObserver: Observer<Response>) => {
      if (isSuccess(res.status)) {
        responseObserver.next(res);
        responseObserver.complete();
      } else {
        responseObserver.error(res);
      }
      return () => { }; // unsubscribe function
    });

    response = response.delay(this.config.delay || 500);
    return {
      readyState: ReadyState.Done,
      request: req,
      response
    };
  }

  ////  protected /////

  /**
   * Process Request and return an Http Response object
   * in the manner of a RESTy web api.
   *
   * Expect URI pattern in the form :base/:collectionName/:id?
   * Examples:
   *   // for store with a 'characters' collection
   *   GET api/characters          // all characters
   *   GET api/characters/42       // the character with id=42
   *   GET api/characters?name=^j  // 'j' is a regex; returns characters whose name contains 'j' or 'J'
   *   GET api/characters.json/42  // ignores the ".json"
   *
   *   POST commands/resetDb  // resets the "database"
   */
  protected handleRequest(req: Request) {
    let {base, collectionName, id, resourceUrl, query} = this.parseUrl(req.url);
    let collection = this.db[collectionName];
    let reqInfo: ReqInfo = {
      req: req,
      base: base,
      collection: collection,
      collectionName: collectionName,
      headers: new Headers({ 'Content-Type': 'application/json' }),
      id: this.parseId(collection, id),
      query: query,
      resourceUrl: resourceUrl
    };

    let options: ResponseOptions;

    try {
      if ('commands' === reqInfo.base.toLowerCase()) {
        options = this.commands(reqInfo);

      } else if (reqInfo.collection) {
        switch (req.method) {
          case RequestMethod.Get:
            options = this.get(reqInfo);
            break;
          case RequestMethod.Post:
            options = this.post(reqInfo);
            break;
          case RequestMethod.Put:
            options = this.put(reqInfo);
            break;
          case RequestMethod.Delete:
            options = this.delete(reqInfo);
            break;
          default:
            options = this.createErrorResponse(STATUS.METHOD_NOT_ALLOWED, 'Method not allowed');
            break;
        }

      } else {
        options = this.createErrorResponse(STATUS.NOT_FOUND, `Collection '${collectionName}' not found`);
      }

    } catch (error) {
      let err = error.message || error;
      options = this.createErrorResponse(STATUS.INTERNAL_SERVER_ERROR, `${err}`);
    }

    options = this.setStatusText(options);
    if (this.config.defaultResponseOptions) {
      options = this.config.defaultResponseOptions.merge(options);
    }

    return new Response(options);
  }

  /**
   * Apply query/search parameters as a filter over the collection
   * This impl only supports RegExp queries on string properties of the collection
   * ANDs the conditions together
   */
  protected applyQuery(collection: any[], query: URLSearchParams) {
    // extract filtering conditions - {propertyName, RegExps) - from query/search parameters
    let conditions: {name: string, rx: RegExp}[] = [];
    query.paramsMap.forEach((value: string[], name: string) => {
      value.forEach(v => conditions.push({name, rx: new RegExp(decodeURI(v), 'i')}));
    });

    let len = conditions.length;
    if (!len) { return collection; }

    // AND the RegExp conditions
    return collection.filter(row => {
      let ok = true;
      let i = len;
      while (ok && i) {
        i -= 1;
        let cond = conditions[i];
        ok = cond.rx.test(row[cond.name]);
      }
      return ok;
    });
  }

  protected clone(data: any) {
    return JSON.parse(JSON.stringify(data));
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
  protected commands(reqInfo: ReqInfo) {
    let command = reqInfo.collectionName.toLowerCase();
    let method = reqInfo.req.method;
    let options: ResponseOptions;

    switch (command) {
      case 'resetdb':
        this.resetDb();
        options = new ResponseOptions({ status: STATUS.OK });
        break;
      case 'config':
        if (method === RequestMethod.Get) {
          options = new ResponseOptions({
            body: this.clone(this.config),
            status: STATUS.OK
          });
        } else {
          // Be nice ... any other method is a config update
          let body = JSON.parse(<string>reqInfo.req.text() || '{}');
          Object.assign(this.config, body);
          options = new ResponseOptions({ status: STATUS.NO_CONTENT });
        }
        break;
      default:
        options = this.createErrorResponse(
          STATUS.INTERNAL_SERVER_ERROR, `Unknown command "${command}"`);
    }
    return options;
  }

  protected createErrorResponse(status: number, message: string) {
    return new ResponseOptions({
      body: { 'error': `${message}` },
      headers: new Headers({ 'Content-Type': 'application/json' }),
      status: status
    });
  }

  protected delete({id, collection, collectionName, headers /*, req */}: ReqInfo) {
    if (!id) {
      return this.createErrorResponse(STATUS.NOT_FOUND, `Missing "${collectionName}" id`);
    }
    let exists = this.removeById(collection, id);
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

  protected get({id, query, collection, collectionName, headers}: ReqInfo) {
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
    let l = document.createElement('a');
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
    let isNumberId =  collection[0] && typeof collection[0].id === 'number';
    if (isNumberId) {
      let idNum = parseFloat(id);
      return isNaN(idNum) ? id : idNum;
    }
    return id;
  }

  protected parseUrl(url: string) {
    try {
      let loc = this.getLocation(url);
      let drop = this.config.rootPath.length;
      let urlRoot = '';
      if (loc.host !== this.config.host) {
        // url for a server on a different host!
        // assume it's collection is actually here too.
        drop = 1; // the leading slash
        urlRoot = loc.protocol + '//' + loc.host + '/';
      }
      let path = loc.pathname.substring(drop);
      let [base, collectionName, id] = path.split('/');
      let resourceUrl = urlRoot + base + '/' + collectionName + '/';
      [collectionName] = collectionName.split('.'); // ignore anything after the '.', e.g., '.json'
      let query = loc.search && new URLSearchParams(loc.search.substr(1));
      return { base, id, collectionName, resourceUrl, query };
    } catch (err) {
      let msg = `unable to parse url '${url}'; original error: ${err.message}`;
      throw new Error(msg);
    }
  }

  protected post({collection, /* collectionName, */ headers, id, req, resourceUrl}: ReqInfo) {
    let item = JSON.parse(<string>req.text());
    if (!item.id) {
      item.id = id || this.genId(collection);
    }
    // ignore the request id, if any. Alternatively,
    // could reject request if id differs from item.id
    id = item.id;
    let existingIx = this.indexOf(collection, id);
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

  protected put({id, collection, collectionName, headers, req}: ReqInfo) {
    let item = JSON.parse(<string>req.text());
    if (!id) {
      return this.createErrorResponse(STATUS.NOT_FOUND, `Missing '${collectionName}' id`);
    }
    if (id !== item.id) {
      return this.createErrorResponse(STATUS.BAD_REQUEST,
        `"${collectionName}" id does not match item.id`);
    }
    let existingIx = this.indexOf(collection, id);
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
    let ix = this.indexOf(collection, id);
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
    this.db = this.seedData.createDb();
  }

  protected setStatusText(options: ResponseOptions) {
    try {
      let statusCode = STATUS_CODE_INFO[options.status];
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
