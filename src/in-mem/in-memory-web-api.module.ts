import { Injector, NgModule, ModuleWithProviders, Type } from '@angular/core';
import { XHRBackend } from '@angular/http';

import {
  InMemoryBackendConfigArgs,
  InMemoryBackendConfig,
  InMemoryBackendService,
  InMemoryDbService
} from './in-memory-backend.service';

// AoT requires factory to be exported
export function inMemoryBackendServiceFactory(
  injector: Injector,
  dbService: InMemoryDbService,
  options: InMemoryBackendConfig
): XHRBackend {
  let backend: any = new InMemoryBackendService(injector, dbService, options);
  return (<XHRBackend>backend);
}

@NgModule({
  // Must useFactory for AoT
  // https://github.com/angular/angular/issues/11178
  providers: [ { provide: XHRBackend,
                 useFactory: inMemoryBackendServiceFactory,
                 deps: [Injector, InMemoryDbService, InMemoryBackendConfig]} ]
})
export class InMemoryWebApiModule {
  /**
  *  Prepare in-memory-web-api in the root/boot application module
  *  with class that implements InMemoryDbService and creates an in-memory database.
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
      ]
    };
  }
}
