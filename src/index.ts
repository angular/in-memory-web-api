export * from './http-status-codes';
export * from './in-memory-backend.service';

import { NgModule, ModuleWithProviders, Type } from '@angular/core';
import { HttpModule, XHRBackend }              from '@angular/http';

import {
  InMemoryBackendConfigArgs,
  InMemoryBackendConfig,
  InMemoryBackendService,
  InMemoryDbService,
  SEED_DATA
} from './in-memory-backend.service';

@NgModule({})
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

    let providers: any[] = [
        { provide: XHRBackend, useClass: InMemoryBackendService },
        { provide: SEED_DATA,  useClass: dbCreator }
    ];

    if (options) {
      providers.push({provide: InMemoryBackendConfig, useValue: options})
    }

    return {
      ngModule: InMemoryWebApiModule,
      providers: providers
    };
  }
}
