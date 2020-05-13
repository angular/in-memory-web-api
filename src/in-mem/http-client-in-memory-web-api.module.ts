////// HttpClient-Only version ////

import { NgModule, ModuleWithProviders, Type } from '@angular/core';
import { HttpBackend, XhrFactory } from '@angular/common/http';

import {
  InMemoryBackendConfigArgs,
  InMemoryBackendConfig,
  InMemoryDbService
} from './interfaces';

import { HttpClientBackendService } from './http-client-backend.service';

// Internal - Creates the in-mem backend for the HttpClient module
// AoT requires factory to be exported
export function httpClientInMemBackendServiceFactory(
  dbService: InMemoryDbService,
  options: InMemoryBackendConfig,
  xhrFactory: XhrFactory,
): HttpBackend {
  const backend: any = new HttpClientBackendService(dbService, options, xhrFactory);
  return backend;
}

@NgModule({})
export class HttpClientInMemoryWebApiModule {
  /**
  *  Redirect the Angular `HttpClient` XHR calls
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
  static forRoot(dbCreator: Type<InMemoryDbService>, options?: InMemoryBackendConfigArgs):
    ModuleWithProviders<HttpClientInMemoryWebApiModule> {
    return {
      ngModule: HttpClientInMemoryWebApiModule,
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
  static forFeature(dbCreator: Type<InMemoryDbService>, options?: InMemoryBackendConfigArgs):
    ModuleWithProviders<HttpClientInMemoryWebApiModule> {
    return HttpClientInMemoryWebApiModule.forRoot(dbCreator, options);
  }
}
