import { Injector } from '@angular/core';
import { Connection, ConnectionBackend, Headers, Request, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { InMemoryBackendConfigArgs, InMemoryDbService, ResponseOptions } from './interfaces';
import { BackendService } from './backend.service';
/**
 * For Angular `Http` simulate the behavior of a RESTy web api
 * backed by the simple in-memory data store provided by the injected `InMemoryDbService`.
 * Conforms mostly to behavior described here:
 * http://www.restapitutorial.com/lessons/httpmethods.html
 *
 * ### Usage
 *
 * Create an in-memory data store class that implements `InMemoryDbService`.
 * Call `forRoot` static method with this service class and optional configuration object:
 * ```
 * // other imports
 * import { HttpModule } from '@angular/http';
 * import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
 *
 * import { InMemHeroService, inMemConfig } from '../api/in-memory-hero.service';
 * @NgModule({
 *  imports: [
 *    HttpModule,
 *    HttpClientInMemoryWebApiModule.forRoot(InMemHeroService, inMemConfig),
 *    ...
 *  ],
 *  ...
 * })
 * export class AppModule { ... }
 * ```
 */
export declare class HttpBackendService extends BackendService implements ConnectionBackend {
    private injector;
    constructor(injector: Injector, inMemDbService: InMemoryDbService, config: InMemoryBackendConfigArgs);
    createConnection(req: Request): Connection;
    protected getJsonBody(req: Request): any;
    protected getRequestMethod(req: Request): string;
    protected createHeaders(headers: {
        [index: string]: string;
    }): Headers;
    protected createQueryMap(search: string): Map<string, string[]>;
    protected createResponse$fromResponseOptions$(resOptions$: Observable<ResponseOptions>): Observable<Response>;
    protected createPassThruBackend(): {
        handle: (req: Request) => Observable<Response>;
    };
}
