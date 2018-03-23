import { Injector, NgModule } from '@angular/core';
import { XHRBackend } from '@angular/http';
import { HttpBackend, XhrFactory } from '@angular/common/http';
import { InMemoryBackendConfig, InMemoryDbService } from './interfaces';
import { httpInMemBackendServiceFactory } from './http-in-memory-web-api.module';
import { httpClientInMemBackendServiceFactory } from './http-client-in-memory-web-api.module';
var InMemoryWebApiModule = /** @class */ (function () {
    function InMemoryWebApiModule() {
    }
    /**
    *  Redirect BOTH Angular `Http` and `HttpClient` XHR calls
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
    /**
      *  Redirect BOTH Angular `Http` and `HttpClient` XHR calls
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
    InMemoryWebApiModule.forRoot = /**
      *  Redirect BOTH Angular `Http` and `HttpClient` XHR calls
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
    function (dbCreator, options) {
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
    /**
       *
       * Enable and configure the in-memory web api in a lazy-loaded feature module.
       * Same as `forRoot`.
       * This is a feel-good method so you can follow the Angular style guide for lazy-loaded modules.
       */
    InMemoryWebApiModule.forFeature = /**
       *
       * Enable and configure the in-memory web api in a lazy-loaded feature module.
       * Same as `forRoot`.
       * This is a feel-good method so you can follow the Angular style guide for lazy-loaded modules.
       */
    function (dbCreator, options) {
        return InMemoryWebApiModule.forRoot(dbCreator, options);
    };
    InMemoryWebApiModule.decorators = [
        { type: NgModule, args: [{},] },
    ];
    /** @nocollapse */
    InMemoryWebApiModule.ctorParameters = function () { return []; };
    return InMemoryWebApiModule;
}());
export { InMemoryWebApiModule };
//# sourceMappingURL=in-memory-web-api.module.js.map