"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var in_memory_backend_service_1 = require('./in-memory-backend.service');
// AoT requires factory to be exported
function inMemoryBackendServiceFactory(injector, dbService, options) {
    var backend = new in_memory_backend_service_1.InMemoryBackendService(injector, dbService, options);
    return backend;
}
exports.inMemoryBackendServiceFactory = inMemoryBackendServiceFactory;
var InMemoryWebApiModule = (function () {
    function InMemoryWebApiModule() {
    }
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
    InMemoryWebApiModule.forRoot = function (dbCreator, options) {
        return {
            ngModule: InMemoryWebApiModule,
            providers: [
                { provide: in_memory_backend_service_1.InMemoryDbService, useClass: dbCreator },
                { provide: in_memory_backend_service_1.InMemoryBackendConfig, useValue: options },
            ]
        };
    };
    InMemoryWebApiModule = __decorate([
        core_1.NgModule({
            // Must useFactory for AoT
            // https://github.com/angular/angular/issues/11178
            providers: [{ provide: http_1.XHRBackend,
                    useFactory: inMemoryBackendServiceFactory,
                    deps: [core_1.Injector, in_memory_backend_service_1.InMemoryDbService, in_memory_backend_service_1.InMemoryBackendConfig] }]
        }), 
        __metadata('design:paramtypes', [])
    ], InMemoryWebApiModule);
    return InMemoryWebApiModule;
}());
exports.InMemoryWebApiModule = InMemoryWebApiModule;
//# sourceMappingURL=in-memory-web-api.module.js.map