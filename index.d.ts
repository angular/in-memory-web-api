export * from './http-status-codes';
export * from './in-memory-backend.service';
import { ModuleWithProviders } from '@angular/core';
import { InMemoryBackendConfigArgs, InMemoryDbService } from './in-memory-backend.service';
export declare class InMemoryWebApiModule {
    /**
    *  Prepare in-memory-web-api in the root/boot application module
    *  with seed data and options.
    * @param {InMemoryDbService} seedData - service that provides data to populate the in-mem "database"
    * @param {InMemoryBackendConfigArgs} [options]
    * @example
    * InMemoryWebApiModule.forRoot(seedData);
    * InMemoryWebApiModule.forRoot(seedData, {useValue: {delay:600}});
    */
    static forRoot(seedData: InMemoryDbService, options?: InMemoryBackendConfigArgs): ModuleWithProviders;
}
