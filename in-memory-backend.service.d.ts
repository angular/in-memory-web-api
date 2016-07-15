import { OpaqueToken } from '@angular/core';
import { Connection, Headers, Request, Response, ResponseOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/delay';
/**
* Class that creates seed data for in-memory database
* Must implement InMemoryDbService.
*/
export declare const SEED_DATA: OpaqueToken;
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
export declare class InMemoryBackendConfig implements InMemoryBackendConfigArgs {
    constructor(config?: InMemoryBackendConfigArgs);
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
export declare const isSuccess: (status: number) => boolean;
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
export declare class InMemoryBackendService {
    private seedData;
    protected config: InMemoryBackendConfigArgs;
    protected db: {};
    constructor(seedData: InMemoryDbService, config: InMemoryBackendConfigArgs);
    createConnection(req: Request): Connection;
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
    protected handleRequest(req: Request): Response;
    /**
     * Apply query/search parameters as a filter over the collection
     * This impl only supports RegExp queries on string properties of the collection
     * ANDs the conditions together
     */
    protected applyQuery(collection: any[], query: URLSearchParams): any[];
    protected clone(data: any): any;
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
    protected commands(reqInfo: ReqInfo): ResponseOptions;
    protected createErrorResponse(status: number, message: string): ResponseOptions;
    protected delete({id, collection, collectionName, headers}: ReqInfo): ResponseOptions;
    protected findById(collection: any[], id: number | string): any;
    protected genId(collection: any): any;
    protected get({id, query, collection, collectionName, headers}: ReqInfo): ResponseOptions;
    protected getLocation(href: string): HTMLAnchorElement;
    protected indexOf(collection: any[], id: number): number;
    protected parseId(collection: {
        id: any;
    }[], id: string): any;
    protected parseUrl(url: string): {
        base: string;
        id: string;
        collectionName: string;
        resourceUrl: string;
        query: URLSearchParams;
    };
    protected post({collection, headers, id, req, resourceUrl}: ReqInfo): ResponseOptions;
    protected put({id, collection, collectionName, headers, req}: ReqInfo): ResponseOptions;
    protected removeById(collection: any[], id: number): boolean;
    /**
     * Reset the "database" to its original state
     */
    protected resetDb(): void;
    protected setStatusText(options: ResponseOptions): ResponseOptions;
}
