import { HttpBackend, HttpEvent, HttpHeaders, HttpRequest, HttpResponse, HttpXhrBackend, XhrFactory } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { InMemoryBackendConfigArgs, InMemoryDbService, ResponseOptions } from './interfaces';
import { BackendService } from './backend.service';
/**
 * For Angular `HttpClient` simulate the behavior of a RESTy web api
 * backed by the simple in-memory data store provided by the injected `InMemoryDbService`.
 * Conforms mostly to behavior described here:
 * http://www.restapitutorial.com/lessons/httpmethods.html
 *
 * ### Usage
 *
 * Create an in-memory data store class that implements `InMemoryDbService`.
 * Call `config` static method with this service class and optional configuration object:
 * ```
 * // other imports
 * import { HttpClientModule } from '@angular/common/http';
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
export declare class HttpClientBackendService extends BackendService implements HttpBackend {
    private xhrFactory;
    constructor(inMemDbService: InMemoryDbService, config: InMemoryBackendConfigArgs, xhrFactory: XhrFactory);
    handle(req: HttpRequest<any>): Observable<HttpEvent<any>>;
    protected getJsonBody(req: HttpRequest<any>): any;
    protected getRequestMethod(req: HttpRequest<any>): string;
    protected createHeaders(headers: {
        [index: string]: string;
    }): HttpHeaders;
    protected createQueryMap(search: string): Map<string, string[]>;
    protected createResponse$fromResponseOptions$(resOptions$: Observable<ResponseOptions>): Observable<HttpResponse<any>>;
    protected createPassThruBackend(): HttpXhrBackend;
}
