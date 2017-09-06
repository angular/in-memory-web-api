import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import { HeadersCore, RequestInfoUtilities, InMemoryDbService, InMemoryBackendConfigArgs, ParsedRequestUrl, PassThruBackend, RequestCore, RequestInfo, ResponseOptions, UriInfo } from './interfaces';
/**
 * Base class for in-memory web api back-ends
 * Simulate the behavior of a RESTy web api
 * backed by the simple in-memory data store provided by the injected `InMemoryDbService` service.
 * Conforms mostly to behavior described here:
 * http://www.restapitutorial.com/lessons/httpmethods.html
 */
export declare abstract class BackendService {
    protected inMemDbService: InMemoryDbService;
    protected passThruBackend: PassThruBackend;
    protected config: InMemoryBackendConfigArgs;
    protected db: Object;
    constructor(inMemDbService: InMemoryDbService, config?: InMemoryBackendConfigArgs);
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
    protected handleRequest(req: RequestCore): Observable<any>;
    /**
     * Add configured delay to response observable unless delay === 0
     */
    protected addDelay(response: Observable<any>): Observable<any>;
    /**
     * Apply query/search parameters as a filter over the collection
     * This impl only supports RegExp queries on string properties of the collection
     * ANDs the conditions together
     */
    protected applyQuery(collection: any[], query: Map<string, string[]>): any[];
    /**
     * Get a method from the `InMemoryDbService` (if it exists), bound to that service
     */
    protected bind<T extends Function>(methodName: string): T;
    protected bodify(data: any): any;
    protected clone(data: any): any;
    protected collectionHandler(reqInfo: RequestInfo): ResponseOptions;
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
    protected commands(reqInfo: RequestInfo): Observable<any>;
    protected createErrorResponseOptions(url: string, status: number, message: string): ResponseOptions;
    /**
     * Create standard HTTP headers object from hash map of header strings
     * @param headers
     */
    protected abstract createHeaders(headers: {
        [index: string]: string;
    }): HeadersCore;
    /**
     * return a search map from a location query/search string
     */
    protected abstract createQueryMap(search: string): Map<string, string[]>;
    /**
     * Create a cold response Observable from a factory for ResponseOptions
     * @param resOptionsFactory - creates ResponseOptions when observable is subscribed
     * @param withDelay - if true (default), add simulated latency delay from configuration
     */
    protected createResponse$(resOptionsFactory: () => ResponseOptions, withDelay?: boolean): Observable<any>;
    /**
     * Create a Response observable from ResponseOptions observable.
     */
    protected abstract createResponse$fromResponseOptions$(resOptions$: Observable<ResponseOptions>): Observable<any>;
    /**
     * Create a cold Observable of ResponseOptions.
     * @param resOptionsFactory - creates ResponseOptions when observable is subscribed
     */
    protected createResponseOptions$(resOptionsFactory: () => ResponseOptions): Observable<ResponseOptions>;
    protected delete({id, collection, collectionName, headers, url}: RequestInfo): ResponseOptions;
    /**
     * Find first instance of item in collection by `item.id`
     * @param collection
     * @param id
     */
    protected findById<T extends {
        id: any;
    }>(collection: T[], id: any): T;
    /**
     * Generate the next available id for item in this collection
     * @param collection - collection of items with `id` key property
     * Use method from `inMemDbService` if it exists and returns a value,
     * else delegates to genIdDefault
     */
    protected genId<T extends {
        id: any;
    }>(collection: T[]): any;
    /**
     * Default generator of the next available id for item in this collection
     * @param collection - collection of items with `id` key property
     * This default implementation assumes integer ids; returns `1` otherwise
     */
    protected genIdDefault<T extends {
        id: any;
    }>(collection: T[]): any;
    protected get({id, query, collection, collectionName, headers, url}: RequestInfo): ResponseOptions;
    /** Get JSON body from the request object */
    protected abstract getJsonBody(req: any): any;
    /**
     * Get location info from a url, even on server where `document` is not defined
     */
    protected getLocation(url: string): UriInfo;
    /**
     * return canonical HTTP method name (lowercase) from the request object
     * e.g. (req.method || 'get').toLowerCase();
     * @param req - request object from the http call
     *
     */
    protected abstract getRequestMethod(req: any): string;
    protected indexOf(collection: any[], id: number): number;
    protected parseId(collection: {
        id: any;
    }[], id: string): any;
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
    protected parseRequestUrl(url: string): ParsedRequestUrl;
    protected post({collection, headers, id, req, resourceUrl, url}: RequestInfo): ResponseOptions;
    protected put({id, collection, collectionName, headers, req, url}: RequestInfo): ResponseOptions;
    protected removeById(collection: any[], id: number): boolean;
    protected readonly requestInfoUtils: RequestInfoUtilities;
    /**
     * Reset the "database" to its original state
     */
    protected resetDb(reqInfo?: RequestInfo): void;
    /**
     * Sets the function that passes unhandled requests
     * through to the "real" backend if
     * config.passThruUnknownUrl is true.
     */
    protected abstract setPassThruBackend(): void;
}
