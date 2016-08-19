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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/delay');
var http_status_codes_1 = require('./http-status-codes');
/**
* Seed data for in-memory database
* Must implement InMemoryDbService.
*/
exports.SEED_DATA = new core_1.OpaqueToken('seedData');
/**
*  InMemoryBackendService configuration options
*  Usage:
*    provide(InMemoryBackendConfig, {useValue: {delay:600}}),
*/
var InMemoryBackendConfig = (function () {
    function InMemoryBackendConfig(config) {
        if (config === void 0) { config = {}; }
        Object.assign(this, {
            defaultResponseOptions: new http_1.BaseResponseOptions(),
            delay: 500,
            delete404: false
        }, config);
    }
    return InMemoryBackendConfig;
}());
exports.InMemoryBackendConfig = InMemoryBackendConfig;
exports.isSuccess = function (status) { return (status >= 200 && status < 300); };
/**
 * Simulate the behavior of a RESTy web api
 * backed by the simple in-memory data store provided by the injected InMemoryDataService service.
 * Conforms mostly to behavior described here:
 * http://www.restapitutorial.com/lessons/httpmethods.html
 *
 * ### Usage
 *
 * Create InMemoryDataService class the implements InMemoryDataService.
 * Register both this service and the seed data as in:
 * ```
 * // other imports
 * import { HTTPPROVIDERS, XHRBackend } from 'angular2/http';
 * import { InMemoryBackendConfig, InMemoryBackendService, SEEDDATA } from '../in-memory-backend/in-memory-backend.service';
 * import { InMemoryStoryService } from '../api/in-memory-story.service';
 *
 * @Component({
 *   selector: ...,
 *   templateUrl: ...,
 *   providers: [
 *     HTTPPROVIDERS,
 *     provide(XHRBackend, { useClass: InMemoryBackendService }),
 *     provide(SEEDDATA, { useClass: InMemoryStoryService }),
 *     provide(InMemoryBackendConfig, { useValue: { delay: 600 } }),
 *   ]
 * })
 * export class AppComponent { ... }
 * ```
 */
var InMemoryBackendService = (function () {
    function InMemoryBackendService(seedData, config) {
        this.seedData = seedData;
        this.config = new InMemoryBackendConfig();
        this.resetDb();
        var loc = this.getLocation('./');
        this.config.host = loc.host;
        this.config.rootPath = loc.pathname;
        Object.assign(this.config, config);
    }
    InMemoryBackendService.prototype.createConnection = function (req) {
        var res = this.handleRequest(req);
        var response = new Observable_1.Observable(function (responseObserver) {
            if (exports.isSuccess(res.status)) {
                responseObserver.next(res);
                responseObserver.complete();
            }
            else {
                responseObserver.error(res);
            }
            return function () { }; // unsubscribe function
        });
        response = response.delay(this.config.delay || 500);
        return {
            readyState: http_1.ReadyState.Done,
            request: req,
            response: response
        };
    };
    ////  protected /////
    /**
     * Process Request and return an Http Response object
     * in the manner of a RESTy web api.
     *
     * Expect URI pattern in the form :base/:collectionName/:id?
     * Examples:
     *   // for store with a 'characters' collection
     *   GET api/characters          // all characters
     *   GET api/characters/42       // the character with id=42
     *   GET api/characters?name=^j  // 'j' is a regex; returns characters whose name contains 'j' or 'J'
     *   GET api/characters.json/42  // ignores the ".json"
     *
     *   POST commands/resetDb  // resets the "database"
     */
    InMemoryBackendService.prototype.handleRequest = function (req) {
        var _a = this.parseUrl(req.url), base = _a.base, collectionName = _a.collectionName, id = _a.id, resourceUrl = _a.resourceUrl, query = _a.query;
        var collection = this.db[collectionName];
        var reqInfo = {
            req: req,
            base: base,
            collection: collection,
            collectionName: collectionName,
            headers: new http_1.Headers({ 'Content-Type': 'application/json' }),
            id: this.parseId(collection, id),
            query: query,
            resourceUrl: resourceUrl
        };
        var options;
        try {
            if ('commands' === reqInfo.base.toLowerCase()) {
                options = this.commands(reqInfo);
            }
            else if (reqInfo.collection) {
                switch (req.method) {
                    case http_1.RequestMethod.Get:
                        options = this.get(reqInfo);
                        break;
                    case http_1.RequestMethod.Post:
                        options = this.post(reqInfo);
                        break;
                    case http_1.RequestMethod.Put:
                        options = this.put(reqInfo);
                        break;
                    case http_1.RequestMethod.Delete:
                        options = this.delete(reqInfo);
                        break;
                    default:
                        options = this.createErrorResponse(http_status_codes_1.STATUS.METHOD_NOT_ALLOWED, 'Method not allowed');
                        break;
                }
            }
            else {
                options = this.createErrorResponse(http_status_codes_1.STATUS.NOT_FOUND, "Collection '" + collectionName + "' not found");
            }
        }
        catch (error) {
            var err = error.message || error;
            options = this.createErrorResponse(http_status_codes_1.STATUS.INTERNAL_SERVER_ERROR, "" + err);
        }
        options = this.setStatusText(options);
        if (this.config.defaultResponseOptions) {
            options = this.config.defaultResponseOptions.merge(options);
        }
        return new http_1.Response(options);
    };
    /**
     * Apply query/search parameters as a filter over the collection
     * This impl only supports RegExp queries on string properties of the collection
     * ANDs the conditions together
     */
    InMemoryBackendService.prototype.applyQuery = function (collection, query) {
        // extract filtering conditions - {propertyName, RegExps) - from query/search parameters
        var conditions = [];
        query.paramsMap.forEach(function (value, name) {
            value.forEach(function (v) { return conditions.push({ name: name, rx: new RegExp(decodeURI(v), 'i') }); });
        });
        var len = conditions.length;
        if (!len) {
            return collection;
        }
        // AND the RegExp conditions
        return collection.filter(function (row) {
            var ok = true;
            var i = len;
            while (ok && i) {
                i -= 1;
                var cond = conditions[i];
                ok = cond.rx.test(row[cond.name]);
            }
            return ok;
        });
    };
    InMemoryBackendService.prototype.clone = function (data) {
        return JSON.parse(JSON.stringify(data));
    };
    /**
     * When the `base`="commands", the `collectionName` is the command
     * Example URLs:
     *   commands/resetdb   // Reset the "database" to its original state
     *   commands/config (GET) // Return this service's config object
     *   commands/config (!GET) // Update the config (e.g. delay)
     *
     * Usage:
     *   http.post('commands/resetdb', null);
     *   http.get('commands/config');
     *   http.post('commands/config', '{"delay":1000}');
     */
    InMemoryBackendService.prototype.commands = function (reqInfo) {
        var command = reqInfo.collectionName.toLowerCase();
        var method = reqInfo.req.method;
        var options;
        switch (command) {
            case 'resetdb':
                this.resetDb();
                options = new http_1.ResponseOptions({ status: http_status_codes_1.STATUS.OK });
                break;
            case 'config':
                if (method === http_1.RequestMethod.Get) {
                    options = new http_1.ResponseOptions({
                        body: this.clone(this.config),
                        status: http_status_codes_1.STATUS.OK
                    });
                }
                else {
                    // Be nice ... any other method is a config update
                    var body = JSON.parse(reqInfo.req.text() || '{}');
                    Object.assign(this.config, body);
                    options = new http_1.ResponseOptions({ status: http_status_codes_1.STATUS.NO_CONTENT });
                }
                break;
            default:
                options = this.createErrorResponse(http_status_codes_1.STATUS.INTERNAL_SERVER_ERROR, "Unknown command \"" + command + "\"");
        }
        return options;
    };
    InMemoryBackendService.prototype.createErrorResponse = function (status, message) {
        return new http_1.ResponseOptions({
            body: { 'error': "" + message },
            headers: new http_1.Headers({ 'Content-Type': 'application/json' }),
            status: status
        });
    };
    InMemoryBackendService.prototype.delete = function (_a) {
        var id = _a.id, collection = _a.collection, collectionName = _a.collectionName, headers = _a.headers;
        if (!id) {
            return this.createErrorResponse(http_status_codes_1.STATUS.NOT_FOUND, "Missing \"" + collectionName + "\" id");
        }
        var exists = this.removeById(collection, id);
        return new http_1.ResponseOptions({
            headers: headers,
            status: (exists || !this.config.delete404) ? http_status_codes_1.STATUS.NO_CONTENT : http_status_codes_1.STATUS.NOT_FOUND
        });
    };
    InMemoryBackendService.prototype.findById = function (collection, id) {
        return collection.find(function (item) { return item.id === id; });
    };
    InMemoryBackendService.prototype.genId = function (collection) {
        // assumes numeric ids
        var maxId = 0;
        collection.reduce(function (prev, item) {
            maxId = Math.max(maxId, typeof item.id === 'number' ? item.id : maxId);
        }, null);
        return maxId + 1;
    };
    InMemoryBackendService.prototype.get = function (_a) {
        var id = _a.id, query = _a.query, collection = _a.collection, collectionName = _a.collectionName, headers = _a.headers;
        var data = collection;
        if (id) {
            data = this.findById(collection, id);
        }
        else if (query) {
            data = this.applyQuery(collection, query);
        }
        if (!data) {
            return this.createErrorResponse(http_status_codes_1.STATUS.NOT_FOUND, "'" + collectionName + "' with id='" + id + "' not found");
        }
        return new http_1.ResponseOptions({
            body: { data: this.clone(data) },
            headers: headers,
            status: http_status_codes_1.STATUS.OK
        });
    };
    InMemoryBackendService.prototype.getLocation = function (href) {
        var l = document.createElement('a');
        l.href = href;
        return l;
    };
    ;
    InMemoryBackendService.prototype.indexOf = function (collection, id) {
        return collection.findIndex(function (item) { return item.id === id; });
    };
    // tries to parse id as number if collection item.id is a number.
    // returns the original param id otherwise.
    InMemoryBackendService.prototype.parseId = function (collection, id) {
        if (!id) {
            return null;
        }
        var isNumberId = collection[0] && typeof collection[0].id === 'number';
        if (isNumberId) {
            var idNum = parseFloat(id);
            return isNaN(idNum) ? id : idNum;
        }
        return id;
    };
    InMemoryBackendService.prototype.parseUrl = function (url) {
        try {
            var loc = this.getLocation(url);
            var drop = this.config.rootPath.length;
            var urlRoot = '';
            if (loc.host !== this.config.host) {
                // url for a server on a different host!
                // assume it's collection is actually here too.
                drop = 1; // the leading slash
                urlRoot = loc.protocol + '//' + loc.host + '/';
            }
            var path = loc.pathname.substring(drop);
            var _a = path.split('/'), base = _a[0], collectionName = _a[1], id = _a[2];
            var resourceUrl = urlRoot + base + '/' + collectionName + '/';
            collectionName = collectionName.split('.')[0]; // ignore anything after the '.', e.g., '.json'
            var query = loc.search && new http_1.URLSearchParams(loc.search.substr(1));
            return { base: base, id: id, collectionName: collectionName, resourceUrl: resourceUrl, query: query };
        }
        catch (err) {
            var msg = "unable to parse url '" + url + "'; original error: " + err.message;
            throw new Error(msg);
        }
    };
    InMemoryBackendService.prototype.post = function (_a) {
        var collection = _a.collection, headers = _a.headers, id = _a.id, req = _a.req, resourceUrl = _a.resourceUrl;
        var item = JSON.parse(req.text());
        if (!item.id) {
            item.id = id || this.genId(collection);
        }
        // ignore the request id, if any. Alternatively,
        // could reject request if id differs from item.id
        id = item.id;
        var existingIx = this.indexOf(collection, id);
        if (existingIx > -1) {
            collection[existingIx] = item;
            return new http_1.ResponseOptions({
                headers: headers,
                status: http_status_codes_1.STATUS.NO_CONTENT
            });
        }
        else {
            collection.push(item);
            headers.set('Location', resourceUrl + '/' + id);
            return new http_1.ResponseOptions({
                headers: headers,
                body: { data: this.clone(item) },
                status: http_status_codes_1.STATUS.CREATED
            });
        }
    };
    InMemoryBackendService.prototype.put = function (_a) {
        var id = _a.id, collection = _a.collection, collectionName = _a.collectionName, headers = _a.headers, req = _a.req;
        var item = JSON.parse(req.text());
        if (!id) {
            return this.createErrorResponse(http_status_codes_1.STATUS.NOT_FOUND, "Missing '" + collectionName + "' id");
        }
        if (id !== item.id) {
            return this.createErrorResponse(http_status_codes_1.STATUS.BAD_REQUEST, "\"" + collectionName + "\" id does not match item.id");
        }
        var existingIx = this.indexOf(collection, id);
        if (existingIx > -1) {
            collection[existingIx] = item;
            return new http_1.ResponseOptions({
                headers: headers,
                status: http_status_codes_1.STATUS.NO_CONTENT // successful; no content
            });
        }
        else {
            collection.push(item);
            return new http_1.ResponseOptions({
                body: { data: this.clone(item) },
                headers: headers,
                status: http_status_codes_1.STATUS.CREATED
            });
        }
    };
    InMemoryBackendService.prototype.removeById = function (collection, id) {
        var ix = this.indexOf(collection, id);
        if (ix > -1) {
            collection.splice(ix, 1);
            return true;
        }
        return false;
    };
    /**
     * Reset the "database" to its original state
     */
    InMemoryBackendService.prototype.resetDb = function () {
        this.db = this.seedData.createDb();
    };
    InMemoryBackendService.prototype.setStatusText = function (options) {
        try {
            var statusCode = http_status_codes_1.STATUS_CODE_INFO[options.status];
            options['statusText'] = statusCode ? statusCode.text : 'Unknown Status';
            return options;
        }
        catch (err) {
            return new http_1.ResponseOptions({
                status: http_status_codes_1.STATUS.INTERNAL_SERVER_ERROR,
                statusText: 'Invalid Server Operation'
            });
        }
    };
    InMemoryBackendService = __decorate([
        __param(0, core_1.Inject(exports.SEED_DATA)),
        __param(1, core_1.Inject(InMemoryBackendConfig)),
        __param(1, core_1.Optional()), 
        __metadata('design:paramtypes', [Object, Object])
    ], InMemoryBackendService);
    return InMemoryBackendService;
}());
exports.InMemoryBackendService = InMemoryBackendService;
//# sourceMappingURL=in-memory-backend.service.js.map