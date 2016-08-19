export * from './http-status-codes';
export * from './in-memory-backend.service';

import { NgModule, ModuleWithProviders, ProviderBuilder } from '@angular/core';
import { HttpModule, XHRBackend }        from '@angular/http';

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
  *  with seed data and options.
  * @param {InMemoryDbService} seedData - service that provides data to populate the in-mem "database"
  * @param {InMemoryBackendConfigArgs} [options]
  * @example
  * InMemoryWebApiModule.forRoot(seedData);
  * InMemoryWebApiModule.forRoot(seedData, {useValue: {delay:600}});
  */
  static forRoot(seedData: InMemoryDbService, options?: InMemoryBackendConfigArgs): ModuleWithProviders {

    let providers: any[] = [
        { provide: XHRBackend, useClass: InMemoryBackendService },
        { provide: SEED_DATA, useClass: seedData }
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
