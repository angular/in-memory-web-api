import { Observable } from 'rxjs/Observable';
/**
 *  Minimum definition needed by base class
 */
export interface HeadersCore {
    set(name: string, value: string): void | any;
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
export declare abstract class InMemoryDbService {
    /**
    * Creates an in-memory "database" hash whose keys are collection names
    * and whose values are arrays of collection objects to return or update.
    *
    * returns Observable of the database because could have to create it asynchronously.
    *
    * This method must be safe to call repeatedly.
    * Each time it should return a new object with new arrays containing new item objects.
    * This condition allows the in-memory backend service to mutate the collections
    * and their items without touching the original source data.
    *
    * The in-mem backend service calls this method without a value the first time.
    * The service calls it with the `RequestInfo` when it receives a POST `commands/resetDb` request.
    * Your InMemoryDbService can adjust its behavior accordingly.
    */
    abstract createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}>;
}
/**
* Interface for InMemoryBackend configuration options
*/
export declare abstract class InMemoryBackendConfigArgs {
    /**
     * The base path to the api, e.g, 'api/'.
     * If not specified than `parseRequestUrl` assumes it is the first path segment in the request.
     */
    apiBase?: string;
    /**
     * false (default) if search match should be case insensitive
     */
    caseSensitiveSearch?: boolean;
    /**
     * false (default) put content directly inside the response body.
     * true: encapsulate content in a `data` property inside the response body, `{ data: ... }`.
     */
    dataEncapsulation?: boolean;
    /**
     * delay (in ms) to simulate latency
     */
    delay?: number;
    /**
     * false (default) should 204 when object-to-delete not found; true: 404
     */
    delete404?: boolean;
    /**
     * host for this service, e.g., 'localhost'
     */
    host?: string;
    /**
     * false (default) should pass unrecognized request URL through to original backend; true: 404
     */
    passThruUnknownUrl?: boolean;
    /**
     * true (default) should NOT return the item (204) after a POST. false: return the item (200).
     */
    post204?: boolean;
    /**
    * false (default) should NOT update existing item with POST. false: OK to update.
    */
    post409?: boolean;
    /**
    * true (default) should NOT return the item (204) after a POST. false: return the item (200).
    */
    put204?: boolean;
    /**
     * false (default) if item not found, create as new item; false: should 404.
     */
    put404?: boolean;
    /**
     * root path _before_ any API call, e.g., ''
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
export declare class InMemoryBackendConfig implements InMemoryBackendConfigArgs {
    constructor(config?: InMemoryBackendConfigArgs);
}
/** Return information (UriInfo) about a URI  */
export declare function parseUri(str: string): UriInfo;
/**
 *
 * Interface for the result of the `parseRequestUrl` method:
 *   Given URL "http://localhost:8080/api/customers/42?foo=1 the default implementation returns
 *     base: 'api/'
 *     collectionName: 'customers'
 *     id: '42'
 *     query: this.createQuery('foo=1')
 *     resourceUrl: 'http://localhost/api/customers/'
 */
export interface ParsedRequestUrl {
    apiBase: string;
    collectionName: string;
    id: string;
    query: Map<string, string[]>;
    resourceUrl: string;
}
export interface PassThruBackend {
    /**
     * Handle an HTTP request and return an Observable of HTTP response
     * Both the request type and the response type are determined by the supporting HTTP library.
     */
    handle(req: any): Observable<any>;
}
export declare function removeTrailingSlash(path: string): string;
/**
 *  Minimum definition needed by base class
 */
export interface RequestCore {
    url: string;
}
/**
* Interface for object w/ info about the current request url
* extracted from an Http Request.
* Also holds utility methods and configuration data from this service
*/
export interface RequestInfo {
    req: RequestCore;
    apiBase: string;
    collectionName: string;
    collection: any;
    headers: HeadersCore;
    method: string;
    id: any;
    query: Map<string, string[]>;
    resourceUrl: string;
    url: string;
    utils: RequestInfoUtilities;
}
/**
 * Interface for utility methods from this service instance.
 * Useful within an HTTP method override
 */
export interface RequestInfoUtilities {
    /**
     * Create a cold response Observable from a factory for ResponseOptions
     * the same way that the in-mem backend service does.
     * @param resOptionsFactory - creates ResponseOptions when observable is subscribed
     * @param withDelay - if true (default), add simulated latency delay from configuration
     */
    createResponse$: (resOptionsFactory: () => ResponseOptions) => Observable<any>;
    /**
     * Find first instance of item in collection by `item.id`
     * @param collection
     * @param id
     */
    findById<T extends {
        id: any;
    }>(collection: T[], id: any): T;
    /** return the current, active configuration which is a blend of defaults and overrides */
    getConfig(): InMemoryBackendConfigArgs;
    /** Get the in-mem service's copy of the "database" */
    getDb(): {};
    /** Get JSON body from the request object */
    getJsonBody(req: any): any;
    /** Get location info from a url, even on server where `document` is not defined */
    getLocation(url: string): UriInfo;
    /** Get (or create) the "real" backend */
    getPassThruBackend(): PassThruBackend;
    /**
     * return true if can determine that the collection's `item.id` is a number
     * */
    isCollectionIdNumeric<T extends {
        id: any;
    }>(collection: T[], collectionName: string): boolean;
    /**
     * Parses the request URL into a `ParsedRequestUrl` object.
     * Parsing depends upon certain values of `config`: `apiBase`, `host`, and `urlRoot`.
     */
    parseRequestUrl(url: string): ParsedRequestUrl;
}
/**
 * Provide a `responseInterceptor` method of this type in your `inMemDbService` to
 * morph the response options created in the `collectionHandler`.
 */
export declare type ResponseInterceptor = (res: ResponseOptions, ri: RequestInfo) => ResponseOptions;
export interface ResponseOptions {
    /**
     * String, Object, ArrayBuffer or Blob representing the body of the {@link Response}.
     */
    body?: string | Object | ArrayBuffer | Blob;
    /**
     * Response headers
     */
    headers?: HeadersCore;
    /**
     * Http {@link http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html status code}
     * associated with the response.
     */
    status?: number;
    /**
     * Status text for the status code
     */
    statusText?: string;
    /**
     * request url
     */
    url?: string;
}
/** Interface of information about a Uri  */
export interface UriInfo {
    source: string;
    protocol: string;
    authority: string;
    userInfo: string;
    user: string;
    password: string;
    host: string;
    port: string;
    relative: string;
    path: string;
    directory: string;
    file: string;
    query: string;
    anchor: string;
}
