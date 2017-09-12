import { Inject, Injectable, Optional } from '@angular/core';
import {
  HttpBackend,
  HttpHeaders,
  HttpParams,
  HttpRequest,
  HttpResponse, HttpResponseBase,
  HttpXhrBackend,
  XhrFactory
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operator/map';

import { STATUS } from './http-status-codes';

import {
  InMemoryBackendConfig,
  InMemoryBackendConfigArgs,
  InMemoryDbService,
  ResponseOptions
} from './interfaces';

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
@Injectable()
export class HttpClientBackendService extends BackendService implements HttpBackend {

  constructor(
    inMemDbService: InMemoryDbService,
    @Inject(InMemoryBackendConfig) @Optional() config: InMemoryBackendConfigArgs,
    private xhrFactory: XhrFactory
    ) {
    super(inMemDbService, config);
  }

  handle(req: HttpRequest<any>): Observable<HttpResponse<any>> {
    try {
      return this.handleRequest(req);

    } catch (error) {
      const err = error.message || error;
      const resOptions = this.createErrorResponseOptions(req.url, STATUS.INTERNAL_SERVER_ERROR, `${err}`);
      return this.createResponse$(() => resOptions);
    }
  }

  ////  protected overrides /////

  protected getJsonBody(req: HttpRequest<any>): any {
    return req.body;
  }

  protected getRequestMethod(req: HttpRequest<any>): string {
    return (req.method || 'get').toLowerCase();
  }

  protected createHeaders(headers: { [index: string]: string; }): HttpHeaders {
    return new HttpHeaders(headers);
  }

  protected createQueryMap(search: string): Map<string, string[]> {
    const map = new Map<string, string[]>();
    if (search) {
      const params = new HttpParams({fromString: search});
      params.keys().forEach(p => map.set(p, params.getAll(p)));
    }
    return map;
  }

  protected createResponse$fromResponseOptions$(resOptions$: Observable<ResponseOptions>): Observable<HttpResponse<any>> {
    return map.call(resOptions$,
      (opts: HttpResponseBase) => new HttpResponse<any>(opts));
  }

  protected createPassThruBackend() {
    try {
      return new HttpXhrBackend(this.xhrFactory);
    } catch (ex) {
      ex.message = 'Cannot create passThru404 backend; ' + (ex.message || '');
      throw ex;
    }
  }
}
