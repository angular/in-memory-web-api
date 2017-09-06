import { Inject, Injectable, Injector, Optional } from '@angular/core';

import { BrowserXhr, Connection,
         Headers, ReadyState, Request, RequestMethod,
         Response,
         ResponseOptions as HttpResponseOptions,
         ResponseOptionsArgs,
         URLSearchParams,
         XHRBackend, XSRFStrategy } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { STATUS } from './http-status-codes';

import {
  InMemoryBackendConfig,
  InMemoryBackendConfigArgs,
  InMemoryDbService,
  ResponseOptions
} from './interfaces';

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
@Injectable()
export class InMemoryBackendService extends BackendService {

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
      const resOptions$ = this.createResponseOptions$(() => resOptions);
      response = this.createResponse$(this.addDelay(resOptions$));
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
      return {};
    }
  }

  protected getRequestMethod(req: Request): string {
    return RequestMethod[req.method || 0].toLowerCase();
  }

  protected createHeaders(headers: { [index: string]: string; }): Headers {
    return new Headers(headers);
  }

  protected createQuery(search: string): Map<string, string[]> {
    return search ? new URLSearchParams(search).paramsMap : new Map<string, string[]>();
  }

  protected createResponse$(resOptions$: Observable<ResponseOptions>): Observable<Response> {
    return resOptions$.map(opts => {
      const options = opts as ResponseOptionsArgs;
      return new Response(new HttpResponseOptions(options));
    });
  }

  protected setPassThruBackend() {
    this.passThruBackend = undefined;
    if (this.config.passThruUnknownUrl) {
      try {
        // copied from @angular/http/backends/xhr_backend
        const browserXhr = this.injector.get(BrowserXhr);
        const baseResponseOptions = this.injector.get(HttpResponseOptions);
        const xsrfStrategy = this.injector.get(XSRFStrategy);
        const xhrBackend = new XHRBackend(browserXhr, baseResponseOptions, xsrfStrategy);

        this.passThruBackend = {
          handle: (req: Request) => xhrBackend.createConnection(req).response
        };

      } catch (ex) {
        ex.message = 'Cannot create passThru404 backend; ' + (ex.message || '');
        throw ex;
      }
    }
  }
}
