export * from './http-status-codes';
export * from './in-memory-backend.service';
import { ModuleWithProviders } from '@angular/core';
export declare class InMemoryWebApiModule {
    static forRoot(seedData: any): ModuleWithProviders;
}
