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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./http-status-codes'));
__export(require('./in-memory-backend.service'));
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var in_memory_backend_service_2 = require('./in-memory-backend.service');
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
        var providers = [
            { provide: http_1.XHRBackend, useClass: in_memory_backend_service_2.InMemoryBackendService },
            { provide: in_memory_backend_service_2.SEED_DATA, useClass: dbCreator }
        ];
        if (options) {
            providers.push({ provide: in_memory_backend_service_2.InMemoryBackendConfig, useValue: options });
        }
        return {
            ngModule: InMemoryWebApiModule,
            providers: providers
        };
    };
    InMemoryWebApiModule = __decorate([
        core_1.NgModule({}), 
        __metadata('design:paramtypes', [])
    ], InMemoryWebApiModule);
    return InMemoryWebApiModule;
}());
exports.InMemoryWebApiModule = InMemoryWebApiModule;
//# sourceMappingURL=index.js.map