import { Injector } from '@angular/core';
import { Connection, Headers, Request, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { InMemoryBackendConfigArgs, InMemoryDbService, ResponseOptions } from './interfaces';
import { BackendService } from './backend.service';
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
export declare class InMemoryBackendService extends BackendService {
    private injector;
    constructor(injector: Injector, inMemDbService: InMemoryDbService, config: InMemoryBackendConfigArgs);
    createConnection(req: Request): Connection;
    protected getJsonBody(req: Request): any;
    protected getRequestMethod(req: Request): string;
    protected createHeaders(headers: {
        [index: string]: string;
    }): Headers;
    protected createQuery(search: string): Map<string, string[]>;
    protected createResponse$(resOptions$: Observable<ResponseOptions>): Observable<Response>;
    protected setPassThruBackend(): void;
}
