////// For apps with both Http and HttpClient ////

import { Injector, NgModule, ModuleWithProviders, Type } from '@angular/core';
import { HttpBackend, XhrFactory } from '@angular/common/http';

import {
  InMemoryBackendConfigArgs,
  InMemoryBackendConfig,
  InMemoryDbService
} from './interfaces';

import { httpClientInMemBackendServiceFactory } from './http-client-in-memory-web-api.module';

@NgModule({})
export class InMemoryWebApiModule {
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
  static forRoot(dbCreator: Type<InMemoryDbService>, options?: InMemoryBackendConfigArgs): ModuleWithProviders {
    return {
      ngModule: InMemoryWebApiModule,
      providers: [
        { provide: InMemoryDbService,  useClass: dbCreator },
        { provide: InMemoryBackendConfig, useValue: options },


        { provide: HttpBackend,
          useFactory: httpClientInMemBackendServiceFactory,
          deps: [InMemoryDbService, InMemoryBackendConfig, XhrFactory]}
      ]
    };
  }

  /**
   *
   * Enable and configure the in-memory web api in a lazy-loaded feature module.
   * Same as `forRoot`.
   * This is a feel-good method so you can follow the Angular style guide for lazy-loaded modules.
   */
  static forFeature(dbCreator: Type<InMemoryDbService>, options?: InMemoryBackendConfigArgs): ModuleWithProviders {
    return InMemoryWebApiModule.forRoot(dbCreator, options);
  }
}
