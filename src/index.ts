export * from './http-status-codes';
export * from './in-memory-backend.service';

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule, XHRBackend } from '@angular/http';

import {
  InMemoryBackendService,
  SEED_DATA
} from './in-memory-backend.service';

@NgModule({ exports: [ HttpModule ] })
export class InMemoryWebApiModule {
  static forRoot(seedData: any): ModuleWithProviders {
    return {
      ngModule: InMemoryWebApiModule,
      providers: [
        { provide: XHRBackend, useClass: InMemoryBackendService },
        { provide: SEED_DATA, useClass: seedData }
      ]
    };
  }
}
