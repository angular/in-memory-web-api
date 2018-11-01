////// Http-Only version ////
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injector, NgModule } from '@angular/core';
import { XHRBackend } from '@angular/http';
import { InMemoryBackendConfig, InMemoryDbService } from './interfaces';
import { HttpBackendService } from './http-backend.service';
// Internal - Creates the in-mem backend for the Http module
// AoT requires factory to be exported
export function httpInMemBackendServiceFactory(injector, dbService, options) {
    var backend = new HttpBackendService(injector, dbService, options);
    return backend;
}
var HttpInMemoryWebApiModule = /** @class */ (function () {
    function HttpInMemoryWebApiModule() {
    }
    HttpInMemoryWebApiModule_1 = HttpInMemoryWebApiModule;
    /**
    *  Redirect the Angular `Http` XHR calls
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
    * HttpInMemoryWebApiModule.forRoot(dbCreator);
    * HttpInMemoryWebApiModule.forRoot(dbCreator, {useValue: {delay:600}});
    */
    HttpInMemoryWebApiModule.forRoot = function (dbCreator, options) {
        return {
            ngModule: HttpInMemoryWebApiModule_1,
            providers: [
                { provide: InMemoryDbService, useClass: dbCreator },
                { provide: InMemoryBackendConfig, useValue: options },
                { provide: XHRBackend,
                    useFactory: httpInMemBackendServiceFactory,
                    deps: [Injector, InMemoryDbService, InMemoryBackendConfig] }
            ]
        };
    };
    /**
   *
   * Enable and configure the in-memory web api in a lazy-loaded feature module.
   * Same as `forRoot`.
   * This is a feel-good method so you can follow the Angular style guide for lazy-loaded modules.
   */
    HttpInMemoryWebApiModule.forFeature = function (dbCreator, options) {
        return HttpInMemoryWebApiModule_1.forRoot(dbCreator, options);
    };
    var HttpInMemoryWebApiModule_1;
    HttpInMemoryWebApiModule = HttpInMemoryWebApiModule_1 = __decorate([
        NgModule({})
    ], HttpInMemoryWebApiModule);
    return HttpInMemoryWebApiModule;
}());
export { HttpInMemoryWebApiModule };
//# sourceMappingURL=http-in-memory-web-api.module.js.map