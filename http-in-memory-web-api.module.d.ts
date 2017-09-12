import { Injector, ModuleWithProviders, Type } from '@angular/core';
import { XHRBackend } from '@angular/http';
import { InMemoryBackendConfigArgs, InMemoryBackendConfig, InMemoryDbService } from './interfaces';
export declare function httpInMemBackendServiceFactory(injector: Injector, dbService: InMemoryDbService, options: InMemoryBackendConfig): XHRBackend;
export declare class HttpInMemoryWebApiModule {
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
    static forRoot(dbCreator: Type<InMemoryDbService>, options?: InMemoryBackendConfigArgs): ModuleWithProviders;
    /**
   *
   * Enable and configure the in-memory web api in a lazy-loaded feature module.
   * Same as `forRoot`.
   * This is a feel-good method so you can follow the Angular style guide for lazy-loaded modules.
   */
    static forFeature(dbCreator: Type<InMemoryDbService>, options?: InMemoryBackendConfigArgs): ModuleWithProviders;
}
