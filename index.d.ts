export * from './http-status-codes';
export * from './in-memory-backend.service';
import { ModuleWithProviders, Type } from '@angular/core';
import { InMemoryBackendConfigArgs, InMemoryDbService } from './in-memory-backend.service';
export declare class InMemoryWebApiModule {
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
    static forRoot(dbCreator: Type<InMemoryDbService>, options?: InMemoryBackendConfigArgs): ModuleWithProviders;
}
