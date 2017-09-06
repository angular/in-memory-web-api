var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Inject, Injectable, Injector, Optional } from '@angular/core';
import { BrowserXhr, Headers, ReadyState, RequestMethod, Response, ResponseOptions as HttpResponseOptions, URLSearchParams, XHRBackend, XSRFStrategy } from '@angular/http';
import 'rxjs/add/operator/map';
import { STATUS } from './http-status-codes';
import { InMemoryBackendConfig, InMemoryBackendConfigArgs, InMemoryDbService } from './interfaces';
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
var InMemoryBackendService = (function (_super) {
    __extends(InMemoryBackendService, _super);
    function InMemoryBackendService(injector, inMemDbService, config) {
        var _this = _super.call(this, inMemDbService, config) || this;
        _this.injector = injector;
        return _this;
    }
    InMemoryBackendService.prototype.createConnection = function (req) {
        var response;
        try {
            response = this.handleRequest(req);
        }
        catch (error) {
            var err = error.message || error;
            var resOptions_1 = this.createErrorResponseOptions(req.url, STATUS.INTERNAL_SERVER_ERROR, "" + err);
            var resOptions$ = this.createResponseOptions$(function () { return resOptions_1; });
            response = this.createResponse$(this.addDelay(resOptions$));
        }
        return {
            readyState: ReadyState.Done,
            request: req,
            response: response
        };
    };
    ////  protected overrides /////
    InMemoryBackendService.prototype.getJsonBody = function (req) {
        try {
            return req.json();
        }
        catch (e) {
            return {};
        }
    };
    InMemoryBackendService.prototype.getRequestMethod = function (req) {
        return RequestMethod[req.method || 0].toLowerCase();
    };
    InMemoryBackendService.prototype.createHeaders = function (headers) {
        return new Headers(headers);
    };
    InMemoryBackendService.prototype.createQuery = function (search) {
        return search ? new URLSearchParams(search).paramsMap : new Map();
    };
    InMemoryBackendService.prototype.createResponse$ = function (resOptions$) {
        return resOptions$.map(function (opts) {
            var options = opts;
            return new Response(new HttpResponseOptions(options));
        });
    };
    InMemoryBackendService.prototype.setPassThruBackend = function () {
        this.passThruBackend = undefined;
        if (this.config.passThruUnknownUrl) {
            try {
                // copied from @angular/http/backends/xhr_backend
                var browserXhr = this.injector.get(BrowserXhr);
                var baseResponseOptions = this.injector.get(HttpResponseOptions);
                var xsrfStrategy = this.injector.get(XSRFStrategy);
                var xhrBackend_1 = new XHRBackend(browserXhr, baseResponseOptions, xsrfStrategy);
                this.passThruBackend = {
                    handle: function (req) { return xhrBackend_1.createConnection(req).response; }
                };
            }
            catch (ex) {
                ex.message = 'Cannot create passThru404 backend; ' + (ex.message || '');
                throw ex;
            }
        }
    };
    return InMemoryBackendService;
}(BackendService));
export { InMemoryBackendService };
InMemoryBackendService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
InMemoryBackendService.ctorParameters = function () { return [
    { type: Injector, },
    { type: InMemoryDbService, },
    { type: InMemoryBackendConfigArgs, decorators: [{ type: Inject, args: [InMemoryBackendConfig,] }, { type: Optional },] },
]; };
//# sourceMappingURL=http-backend.service.js.map