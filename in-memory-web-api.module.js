import { Injector, NgModule } from '@angular/core';
import { XHRBackend } from '@angular/http';
import { HttpBackend, XhrFactory } from '@angular/common/http';
import { InMemoryBackendConfig, InMemoryDbService } from './interfaces';
import { HttpBackendService } from './http-backend.service';
import { HttpClientBackendService } from './http-client-backend.service';
// Internal - Creates the in-mem backend for the Http module
// AoT requires factory to be exported
export function httpInMemBackendServiceFactory(injector, dbService, options) {
    var backend = new HttpBackendService(injector, dbService, options);
    return backend;
}
// Internal - Creates the in-mem backend for the HttpClient module
// AoT requires factory to be exported
export function httpClientInMemBackendServiceFactory(dbService, options, xhrFactory) {
    var backend = new HttpClientBackendService(dbService, options, xhrFactory);
    return backend;
}
var InMemoryWebApiModule = (function () {
    function InMemoryWebApiModule() {
    }
    /**
    *  Redirect both Angular `Http` and `HttpClient` XHR calls
    *  to in-memory data store that implements `InMemoryDbService`.
    *  with class that implements InMemoryDbService and creates an in-memory database.
    *
    *  Usually imported in the root application module.
    *  Can import in a lazy feature module too, which will shadow modules loaded earlier
    *
    * @param {Type} dbCreator - Class that creates seed data for in-memory database. Must implement InMemoryDbService.
    * @param {InMemoryBackendConfigArgs} [options]
    *
    * @example
    * InMemoryWebApiModule.forRoot(dbCreator);
    * InMemoryWebApiModule.forRoot(dbCreator, {useValue: {delay:600}});
    */
    InMemoryWebApiModule.forRoot = function (dbCreator, options) {
        return {
            ngModule: InMemoryWebApiModule,
            providers: [
                { provide: InMemoryDbService, useClass: dbCreator },
                { provide: InMemoryBackendConfig, useValue: options },
                { provide: XHRBackend,
                    useFactory: httpInMemBackendServiceFactory,
                    deps: [Injector, InMemoryDbService, InMemoryBackendConfig] },
                { provide: HttpBackend,
                    useFactory: httpClientInMemBackendServiceFactory,
                    deps: [InMemoryDbService, InMemoryBackendConfig, XhrFactory] }
            ]
        };
    };
    /**
     *
     * Enable and configure the in-memory web api in a lazy-loaded feature module.
     * Same as `forRoot`.
     * This is a feel-good method so you can follow the Angular style guide for lazy-loaded modules.
     */
    InMemoryWebApiModule.forFeature = function (dbCreator, options) {
        return InMemoryWebApiModule.forRoot(dbCreator, options);
    };
    return InMemoryWebApiModule;
}());
export { InMemoryWebApiModule };
InMemoryWebApiModule.decorators = [
    { type: NgModule, args: [{},] },
];
/** @nocollapse */
InMemoryWebApiModule.ctorParameters = function () { return []; };
//# sourceMappingURL=in-memory-web-api.module.js.map