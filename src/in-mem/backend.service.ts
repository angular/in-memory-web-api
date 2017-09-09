import { Observable } from 'rxjs/Observable';
import { Observer }   from 'rxjs/Observer';
import 'rxjs/add/operator/delay';

import { getStatusText, isSuccess, STATUS } from './http-status-codes';

import {
  HeadersCore,
  RequestInfoUtilities,
  InMemoryDbService,
  InMemoryBackendConfig,
  InMemoryBackendConfigArgs,
  ParsedRequestUrl,
  parseUri,
  PassThruBackend,
  removeTrailingSlash,
  RequestCore,
  RequestInfo,
  ResponseOptions,
  UriInfo
} from './interfaces';

/**
 * Base class for in-memory web api back-ends
 * Simulate the behavior of a RESTy web api
 * backed by the simple in-memory data store provided by the injected `InMemoryDbService` service.
 * Conforms mostly to behavior described here:
 * http://www.restapitutorial.com/lessons/httpmethods.html
 */
export abstract class BackendService {
  protected passThruBackend: PassThruBackend;
  protected config: InMemoryBackendConfigArgs = new InMemoryBackendConfig();
  protected db: Object;
  private _firstTime = true;

  constructor(
    protected inMemDbService: InMemoryDbService,
    config: InMemoryBackendConfigArgs = {}
  ) {
    const loc = this.getLocation('/');
    this.config.host = loc.host;     // default to app web server host
    this.config.rootPath = loc.path; // default to path when app is served (e.g.'/')
    Object.assign(this.config, config);
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
   *     `inMemDbService.get(requestInfo)`
   *     which must return either an Observable of the response type
   *     for this http library or null|undefined (which means "keep processing").
   */
  protected handleRequest(req: RequestCore): Observable<any> {

    if (this.firstTime) {
      this.initialize();
      this._firstTime = false;
    }

    const url = req.url;

    // Try override parser
    // If no override parser or it returns nothing, use default parser
    const parser = this.bind('parseRequestUrl');
    const parsed: ParsedRequestUrl =
      ( parser && parser(url, this.requestInfoUtils)) ||
      this.parseRequestUrl(url);

    const collectionName = parsed.collectionName;
    const collection = this.db[collectionName];
    const reqInfo: RequestInfo = {
      req: req,
      apiBase: parsed.apiBase,
      collection: collection,
      collectionName: collectionName,
      headers: this.createHeaders({ 'Content-Type': 'application/json' }),
      id: this.parseId(collection, parsed.id),
      method: this.getRequestMethod(req),
      query: parsed.query,
      resourceUrl: parsed.resourceUrl,
      url: url,
      utils: this.requestInfoUtils
    };

    let resOptions: ResponseOptions;

    if (/commands\/?$/i.test(reqInfo.apiBase)) {
      return this.commands(reqInfo);
    }

    const methodInterceptor = this.bind(reqInfo.method);
    if (methodInterceptor) {
      // Call the InMemoryDbService interceptor for this HTTP method.
      // if interceptor produced a response, return it.
      // else InMemoryDbService chose not to intercept; continue processing.
      const interceptorResponse = methodInterceptor(reqInfo);
      if (interceptorResponse) { return interceptorResponse; };
    }

    if (reqInfo.collection) {
      // request is for a collection created by the InMemoryDbService
      return this.createResponse$(() => this.collectionHandler(reqInfo));

    } else if (this.config.passThruUnknownUrl) {
      // Passes request thru to a "real" backend.
      if (!this.passThruBackend) { this.setPassThruBackend(); }
      return this.passThruBackend.handle(req);

    } else {
      // can't handle this request
      resOptions = this.createErrorResponseOptions(url, STATUS.NOT_FOUND, `Collection '${collectionName}' not found`);
      return this.createResponse$(() => resOptions);
    }
  }

  /**
   * Add configured delay to response observable unless delay === 0
   */
  protected addDelay(response: Observable<any>): Observable<any> {
    const delay = this.config.delay;
    return delay === 0 ? response : response.delay(delay || 500);
  }

  /**
   * Apply query/search parameters as a filter over the collection
   * This impl only supports RegExp queries on string properties of the collection
   * ANDs the conditions together
   */
  protected applyQuery(collection: any[], query: Map<string, string[]>): any[] {
    // extract filtering conditions - {propertyName, RegExps) - from query/search parameters
    const conditions: { name: string, rx: RegExp }[] = [];
    const caseSensitive = this.config.caseSensitiveSearch ? undefined : 'i';
    query.forEach((value: string[], name: string) => {
      value.forEach(v => conditions.push({ name, rx: new RegExp(decodeURI(v), caseSensitive) }));
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

  /**
   * Get a method from the `InMemoryDbService` (if it exists), bound to that service
   */
  protected bind<T extends Function>(methodName: string) {
    const fn = this.inMemDbService[methodName] as T;
    return fn ? <T> fn.bind(this.inMemDbService) : undefined;
  }

  protected bodify(data: any) {
    const body = this.clone(data);
    return this.config.dataEncapsulation ? { data: body } : body;
  }

  protected clone(data: any) {
    return JSON.parse(JSON.stringify(data));
  }

  protected collectionHandler(reqInfo: RequestInfo): ResponseOptions {
    // const req = reqInfo.req;
      let resOptions: ResponseOptions;
      switch (reqInfo.method) {
        case 'get':
          resOptions = this.get(reqInfo);
          break;
        case 'post':
          resOptions = this.post(reqInfo);
          break;
        case 'put':
          resOptions = this.put(reqInfo);
          break;
        case 'delete':
          resOptions = this.delete(reqInfo);
          break;
        default:
          resOptions = this.createErrorResponseOptions(reqInfo.url, STATUS.METHOD_NOT_ALLOWED, 'Method not allowed');
          break;
      }

      // If `inMemDbService.responseInterceptor` exists, let it morph the response options
      const interceptor = this.bind('responseInterceptor');
      return interceptor ? interceptor(resOptions, reqInfo) : resOptions;
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
  protected commands(reqInfo: RequestInfo): Observable<any> {
    const command = reqInfo.collectionName.toLowerCase();
    const method = reqInfo.method;
    let resOptions: ResponseOptions;

    switch (command) {
      case 'resetdb':
        this.resetDb(reqInfo);
        resOptions = { status: STATUS.OK };
        break;
      case 'config':
        if (method === 'get') {
          resOptions = {
            body: this.clone(this.config),
            status: STATUS.OK
          };
        } else {
          // any other HTTP method is assumed to be a config update
          const body = this.getJsonBody(reqInfo.req);
          Object.assign(this.config, body);
          this.setPassThruBackend();
          resOptions = { status: STATUS.NO_CONTENT };
        }
        break;
      default:
        resOptions = this.createErrorResponseOptions(reqInfo.url, STATUS.INTERNAL_SERVER_ERROR, `Unknown command "${command}"`);
    }

    resOptions.url = reqInfo.url;

    return this.createResponse$(() => resOptions, false /* no delay */);
  }

  protected createErrorResponseOptions(url: string, status: number, message: string): ResponseOptions {
    return {
      body: { error: `${message}` },
      url: url,
      headers: this.createHeaders({ 'Content-Type': 'application/json' }),
      status: status
    };
  }

  /**
   * Create standard HTTP headers object from hash map of header strings
   * @param headers
   */
  protected abstract createHeaders(headers: {[index: string]: string}): HeadersCore;

  /**
   * return a search map from a location query/search string
   */
  protected abstract createQueryMap(search: string): Map<string, string[]>;

  /**
   * Create a cold response Observable from a factory for ResponseOptions
   * @param resOptionsFactory - creates ResponseOptions when observable is subscribed
   * @param withDelay - if true (default), add simulated latency delay from configuration
   */
  protected createResponse$(resOptionsFactory: () => ResponseOptions, withDelay = true): Observable<any> {
    const resOptions$ = this.createResponseOptions$(resOptionsFactory);
    let resp$ = this.createResponse$fromResponseOptions$(resOptions$);
    return withDelay ? this.addDelay(resp$) : resp$;
  }

  /**
   * Create a Response observable from ResponseOptions observable.
   */
  protected abstract createResponse$fromResponseOptions$(resOptions$: Observable<ResponseOptions>): Observable<any>;

  /**
   * Create a cold Observable of ResponseOptions.
   * @param resOptionsFactory - creates ResponseOptions when observable is subscribed
   */
  protected createResponseOptions$(resOptionsFactory: () => ResponseOptions): Observable<ResponseOptions> {

    return new Observable<ResponseOptions>((responseObserver: Observer<ResponseOptions>) => {
      const resOptions = resOptionsFactory();
      const status = resOptions.status;
      try {
        resOptions.statusText = getStatusText(status);
      } catch (e) { /* ignore failure */}
      if (isSuccess(status)) {
        responseObserver.next(resOptions);
        responseObserver.complete();
      } else {
        responseObserver.error(resOptions);
      }
      return () => { }; // unsubscribe function
    });
  }

  protected delete({id, collection, collectionName, headers, url}: RequestInfo): ResponseOptions {
    // tslint:disable-next-line:triple-equals
    if (id == undefined) {
      return this.createErrorResponseOptions(url, STATUS.NOT_FOUND, `Missing "${collectionName}" id`);
    }
    const exists = this.removeById(collection, id);
    return {
      headers: headers,
      status: (exists || !this.config.delete404) ? STATUS.NO_CONTENT : STATUS.NOT_FOUND
    };
  }

  /**
   * Find first instance of item in collection by `item.id`
   * @param collection
   * @param id
   */
  protected findById<T extends { id: any }>(collection: T[], id: any): T {
    return collection.find((item: T) => item.id === id);
  }

  /** true when `handleRequest` called for the first time */
  protected get firstTime() { return this._firstTime; }

  /**
   * Generate the next available id for item in this collection
   * @param collection - collection of items with `id` key property
   * Use method from `inMemDbService` if it exists and returns a value,
   * else delegates to genIdDefault
   */
  protected genId<T extends { id: any }>(collection: T[]): any {
    const genId = this.bind('genId');
    if (genId) {
      const id = genId(collection);
      // tslint:disable-next-line:triple-equals
      if (id != undefined) { return id; }
    }
    return this.genIdDefault(collection);
  }

  /**
   * Default generator of the next available id for item in this collection
   * @param collection - collection of items with `id` key property
   * This default implementation assumes integer ids; returns `1` otherwise
   */
  protected genIdDefault<T extends { id: any }>(collection: T[]): any {
    let maxId = 0;
    collection.reduce((prev: any, item: any) => {
      maxId = Math.max(maxId, typeof item.id === 'number' ? item.id : maxId);
    }, undefined);
    return maxId + 1;
  }

  protected get({ id, query, collection, collectionName, headers, url }: RequestInfo): ResponseOptions {
    let data = collection;

    // tslint:disable-next-line:triple-equals
    if (id != undefined && id !== '') {
      data = this.findById(collection, id);
    } else if (query) {
      data = this.applyQuery(collection, query);
    }

    if (!data) {
      return this.createErrorResponseOptions(url, STATUS.NOT_FOUND, `'${collectionName}' with id='${id}' not found`);
    }
    return {
      body: this.bodify(data),
      headers: headers,
      status: STATUS.OK
    };
  }

  /** Get JSON body from the request object */
  protected abstract getJsonBody(req: any): any;

  /**
   * Get location info from a url, even on server where `document` is not defined
   */
  protected getLocation(url: string): UriInfo {
    if (!url.startsWith('http')) {
      // get the document iff running in browser
      const doc: Document = (typeof document === 'undefined') ? undefined : document;
      // add host info to url before parsing.  Use a fake host when not in browser.
      const base = doc ? doc.location.protocol + '//' + doc.location.host : 'http://fake';
      url = url.startsWith('/') ? base + url : base + '/' + url;
    }
    return parseUri(url);
  };

  /**
   * return canonical HTTP method name (lowercase) from the request object
   * e.g. (req.method || 'get').toLowerCase();
   * @param req - request object from the http call
   *
   */
  protected abstract getRequestMethod(req: any): string;

  protected indexOf(collection: any[], id: number) {
    return collection.findIndex((item: any) => item.id === id);
  }

  /**
   * Initialize the service
   * Initializes the in-mem database.
   * Complete your preparation of that database before the first `Http`/`HttpClient` call.
   **/
  protected initialize() {
    this.resetDb();
  }

  // tries to parse id as number if collection item.id is a number.
  // returns the original param id otherwise.
  protected parseId(collection: { id: any }[], id: string): any {
   if (collection && collection[0] && typeof collection[0].id === 'number') {
      const idNum = parseFloat(id);
      return isNaN(idNum) ? id : idNum;
    }
    return id;
  }

  /**
   * Parses the request URL into a `ParsedRequestUrl` object.
   * Parsing depends upon certain values of `config`: `apiBase`, `host`, and `urlRoot`.
   *
   * Configuring the `apiBase` yields the most interesting changes to `parseRequestUrl` behavior:
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
   * To replace this default method, assign your alternative to your InMemDbService['parseRequestUrl']
   */
  protected parseRequestUrl(url: string): ParsedRequestUrl {
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
      const path = loc.path.substring(drop);
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
      apiBase += '/';

      let collectionName = pathSegments[segmentIx++];
      // ignore anything after a '.' (e.g.,the "json" in "customers.json")
      collectionName = collectionName && collectionName.split('.')[0];

      const id = pathSegments[segmentIx++];
      const query = this.createQueryMap(loc.query);
      const resourceUrl = urlRoot + apiBase + collectionName + '/';
      return { apiBase, collectionName, id, query, resourceUrl };

    } catch (err) {
      const msg = `unable to parse url '${url}'; original error: ${err.message}`;
      throw new Error(msg);
    }
  }

  // Create entity
  // Can update an existing entity too if post409 is false.
  protected post({ collection, /* collectionName, */ headers, id, req, resourceUrl, url }: RequestInfo): ResponseOptions {
    const item = this.getJsonBody(req);

    // tslint:disable-next-line:triple-equals
    if (item.id == undefined) {
      item.id = id || this.genId(collection);
    }
    if (id && id !== item.id) {
      return this.createErrorResponseOptions(url, STATUS.BAD_REQUEST, `Request id does not match item.id`);
    } else {
      id = item.id;
    }
    const existingIx = this.indexOf(collection, id);
    const body = this.bodify(item);

    if (existingIx === -1) {
      collection.push(item);
      headers.set('Location', resourceUrl + '/' + id);
      return { headers, body, status: STATUS.CREATED };
    } else if (this.config.post409) {
      return this.createErrorResponseOptions(url, STATUS.CONFLICT,
        `item with id='${id} exists and may not be updated with PUT; use POST instead.`);
    } else {
      collection[existingIx] = item;
      return this.config.post204 ?
          { headers, status: STATUS.NO_CONTENT } : // successful; no content
          { headers, body, status: STATUS.OK }; // successful; return entity
    }
  }

  // Update existing entity
  // Can create an entity too if put404 is false.
  protected put({ id, collection, collectionName, headers, req, url }: RequestInfo): ResponseOptions {
    const item = this.getJsonBody(req);
    // tslint:disable-next-line:triple-equals
    if (item.id == undefined) {
      return this.createErrorResponseOptions(url, STATUS.NOT_FOUND, `Missing '${collectionName}' id`);
    }
    if (id && id !== item.id) {
      return this.createErrorResponseOptions(url, STATUS.BAD_REQUEST, `Request id does not match item.id`);
    } else {
      id = item.id;
    }
    const existingIx = this.indexOf(collection, id);
    const body = this.bodify(item);

    if (existingIx > -1) {
      collection[existingIx] = item;
      return this.config.put204 ?
          { headers, status: STATUS.NO_CONTENT } : // successful; no content
          { headers, body, status: STATUS.OK }; // successful; return entity
    } else if (this.config.put404) {
      // item to update not found; use POST to create new item for this id.
      return this.createErrorResponseOptions(url, STATUS.NOT_FOUND, `id='${id} not found`);
    } else {
      // create new item for id not found
      collection.push(item);
      return { headers, body, status: STATUS.CREATED };
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

  protected get requestInfoUtils(): RequestInfoUtilities {
    return {
      config: this.config,
      createResponse$: this.createResponse$.bind(this),
      findById: this.findById.bind(this),
      getJsonBody: this.getJsonBody.bind(this),
      getLocation: this.getLocation.bind(this),
      parseRequestUrl: this.parseRequestUrl.bind(this),
      passThruBackend: this.passThruBackend
    };
  }

  /**
   * Reset the "database" to its original state
   */
  protected resetDb(reqInfo?: RequestInfo) {
    this.db = this.inMemDbService.createDb(reqInfo);
  }

  /**
   * Sets the function that passes unhandled requests
   * through to the "real" backend if
   * config.passThruUnknownUrl is true.
   */
  protected abstract setPassThruBackend(): void;

}
