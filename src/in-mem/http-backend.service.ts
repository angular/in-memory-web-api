import { Inject, Injectable, Injector, Optional } from '@angular/core';

import { BrowserXhr, Connection, ConnectionBackend,
         Headers, ReadyState, Request, RequestMethod,
         Response,
         ResponseOptions as HttpResponseOptions,
         ResponseOptionsArgs,
         URLSearchParams,
         XHRBackend, XSRFStrategy } from '@angular/http';

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
@Injectable()
export class HttpBackendService extends BackendService implements ConnectionBackend {

  constructor(
    private injector: Injector,
    inMemDbService: InMemoryDbService,
    @Inject(InMemoryBackendConfig) @Optional() config: InMemoryBackendConfigArgs
    ) {
    super(inMemDbService, config);
  }

  createConnection(req: Request): Connection {
    let response: Observable<Response>;
    try {
      response = this.handleRequest(req);

    } catch (error) {
      const err = error.message || error;
      const resOptions = this.createErrorResponseOptions(req.url, STATUS.INTERNAL_SERVER_ERROR, `${err}`);
      response = this.createResponse$(() => resOptions);
    }

    return {
      readyState: ReadyState.Done,
      request: req,
      response
    };
  }

  ////  protected overrides /////

  protected getJsonBody(req: Request): any {
    try {
      return req.json();
    } catch (e) {
      const msg = `'${req.url}' request body-to-json error\n${JSON.stringify(e)}`;
      throw new Error(msg);
    }
  }

  protected getRequestMethod(req: Request): string {
    return RequestMethod[req.method || 0].toLowerCase();
  }

  protected createHeaders(headers: { [index: string]: string; }): Headers {
    return new Headers(headers);
  }

  protected createQueryMap(search: string): Map<string, string[]> {
    return search ? new URLSearchParams(search).paramsMap : new Map<string, string[]>();
  }

  protected createResponse$fromResponseOptions$(resOptions$: Observable<ResponseOptions>): Observable<Response> {
    return map.call(resOptions$, (opts: ResponseOptionsArgs) => {
      return new Response(new HttpResponseOptions(opts));
    });
  }

  protected createPassThruBackend() {
    try {
      // copied from @angular/http/backends/xhr_backend
      const browserXhr = this.injector.get(BrowserXhr);
      const baseResponseOptions = this.injector.get(HttpResponseOptions);
      const xsrfStrategy = this.injector.get(XSRFStrategy);
      const xhrBackend = new XHRBackend(browserXhr, baseResponseOptions, xsrfStrategy);

      return {
        handle: (req: Request) => xhrBackend.createConnection(req).response
      };

    } catch (e) {
      e.message = 'Cannot create passThru404 backend; ' + (e.message || '');
      throw e;
    }
  }
}
