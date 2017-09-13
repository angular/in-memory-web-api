(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs/Observable'), require('rxjs/BehaviorSubject'), require('rxjs/observable/of'), require('rxjs/observable/fromPromise'), require('rxjs/util/isPromise'), require('rxjs/operator/concatMap'), require('rxjs/operator/delay'), require('rxjs/operator/first'), require('@angular/core'), require('@angular/http'), require('rxjs/operator/map'), require('@angular/common/http')) :
	typeof define === 'function' && define.amd ? define(['exports', 'rxjs/Observable', 'rxjs/BehaviorSubject', 'rxjs/observable/of', 'rxjs/observable/fromPromise', 'rxjs/util/isPromise', 'rxjs/operator/concatMap', 'rxjs/operator/delay', 'rxjs/operator/first', '@angular/core', '@angular/http', 'rxjs/operator/map', '@angular/common/http'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.inMemoryWebApi = {}),global.Rx,global.Rx,global.Rx,global.Rx,global.Rx,global.Rx,global.Rx,global.Rx,global.ng.core,global.ng.http,global.Rx,global.ng.common.http));
}(this, (function (exports,Observable,BehaviorSubject,of,fromPromise,isPromise,concatMap,delay,first,core,http,map,http$1) { 'use strict';

var STATUS = {
    CONTINUE: 100,
    SWITCHING_PROTOCOLS: 101,
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NON_AUTHORITATIVE_INFORMATION: 203,
    NO_CONTENT: 204,
    RESET_CONTENT: 205,
    PARTIAL_CONTENT: 206,
    MULTIPLE_CHOICES: 300,
    MOVED_PERMANTENTLY: 301,
    FOUND: 302,
    SEE_OTHER: 303,
    NOT_MODIFIED: 304,
    USE_PROXY: 305,
    TEMPORARY_REDIRECT: 307,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PAYMENT_REQUIRED: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    NOT_ACCEPTABLE: 406,
    PROXY_AUTHENTICATION_REQUIRED: 407,
    REQUEST_TIMEOUT: 408,
    CONFLICT: 409,
    GONE: 410,
    LENGTH_REQUIRED: 411,
    PRECONDITION_FAILED: 412,
    PAYLOAD_TO_LARGE: 413,
    URI_TOO_LONG: 414,
    UNSUPPORTED_MEDIA_TYPE: 415,
    RANGE_NOT_SATISFIABLE: 416,
    EXPECTATION_FAILED: 417,
    IM_A_TEAPOT: 418,
    UPGRADE_REQUIRED: 426,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
    HTTP_VERSION_NOT_SUPPORTED: 505,
    PROCESSING: 102,
    MULTI_STATUS: 207,
    IM_USED: 226,
    PERMANENT_REDIRECT: 308,
    UNPROCESSABLE_ENTRY: 422,
    LOCKED: 423,
    FAILED_DEPENDENCY: 424,
    PRECONDITION_REQUIRED: 428,
    TOO_MANY_REQUESTS: 429,
    REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
    UNAVAILABLE_FOR_LEGAL_REASONS: 451,
    VARIANT_ALSO_NEGOTIATES: 506,
    INSUFFICIENT_STORAGE: 507,
    NETWORK_AUTHENTICATION_REQUIRED: 511
};
/*tslint:disable:quotemark max-line-length one-line */
var STATUS_CODE_INFO = {
    '100': {
        'code': 100,
        'text': 'Continue',
        'description': '\"The initial part of a request has been received and has not yet been rejected by the server.\"',
        'spec_title': 'RFC7231#6.2.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.2.1'
    },
    '101': {
        'code': 101,
        'text': 'Switching Protocols',
        'description': '\"The server understands and is willing to comply with the client\'s request, via the Upgrade header field, for a change in the application protocol being used on this connection.\"',
        'spec_title': 'RFC7231#6.2.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.2.2'
    },
    '200': {
        'code': 200,
        'text': 'OK',
        'description': '\"The request has succeeded.\"',
        'spec_title': 'RFC7231#6.3.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.1'
    },
    '201': {
        'code': 201,
        'text': 'Created',
        'description': '\"The request has been fulfilled and has resulted in one or more new resources being created.\"',
        'spec_title': 'RFC7231#6.3.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.2'
    },
    '202': {
        'code': 202,
        'text': 'Accepted',
        'description': '\"The request has been accepted for processing, but the processing has not been completed.\"',
        'spec_title': 'RFC7231#6.3.3',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.3'
    },
    '203': {
        'code': 203,
        'text': 'Non-Authoritative Information',
        'description': '\"The request was successful but the enclosed payload has been modified from that of the origin server\'s 200 (OK) response by a transforming proxy.\"',
        'spec_title': 'RFC7231#6.3.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.4'
    },
    '204': {
        'code': 204,
        'text': 'No Content',
        'description': '\"The server has successfully fulfilled the request and that there is no additional content to send in the response payload body.\"',
        'spec_title': 'RFC7231#6.3.5',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.5'
    },
    '205': {
        'code': 205,
        'text': 'Reset Content',
        'description': '\"The server has fulfilled the request and desires that the user agent reset the \"document view\", which caused the request to be sent, to its original state as received from the origin server.\"',
        'spec_title': 'RFC7231#6.3.6',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.6'
    },
    '206': {
        'code': 206,
        'text': 'Partial Content',
        'description': '\"The server is successfully fulfilling a range request for the target resource by transferring one or more parts of the selected representation that correspond to the satisfiable ranges found in the requests\'s Range header field.\"',
        'spec_title': 'RFC7233#4.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7233#section-4.1'
    },
    '300': {
        'code': 300,
        'text': 'Multiple Choices',
        'description': '\"The target resource has more than one representation, each with its own more specific identifier, and information about the alternatives is being provided so that the user (or user agent) can select a preferred representation by redirecting its request to one or more of those identifiers.\"',
        'spec_title': 'RFC7231#6.4.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.1'
    },
    '301': {
        'code': 301,
        'text': 'Moved Permanently',
        'description': '\"The target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs.\"',
        'spec_title': 'RFC7231#6.4.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.2'
    },
    '302': {
        'code': 302,
        'text': 'Found',
        'description': '\"The target resource resides temporarily under a different URI.\"',
        'spec_title': 'RFC7231#6.4.3',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.3'
    },
    '303': {
        'code': 303,
        'text': 'See Other',
        'description': '\"The server is redirecting the user agent to a different resource, as indicated by a URI in the Location header field, that is intended to provide an indirect response to the original request.\"',
        'spec_title': 'RFC7231#6.4.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.4'
    },
    '304': {
        'code': 304,
        'text': 'Not Modified',
        'description': '\"A conditional GET request has been received and would have resulted in a 200 (OK) response if it were not for the fact that the condition has evaluated to false.\"',
        'spec_title': 'RFC7232#4.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7232#section-4.1'
    },
    '305': {
        'code': 305,
        'text': 'Use Proxy',
        'description': '*deprecated*',
        'spec_title': 'RFC7231#6.4.5',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.5'
    },
    '307': {
        'code': 307,
        'text': 'Temporary Redirect',
        'description': '\"The target resource resides temporarily under a different URI and the user agent MUST NOT change the request method if it performs an automatic redirection to that URI.\"',
        'spec_title': 'RFC7231#6.4.7',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.7'
    },
    '400': {
        'code': 400,
        'text': 'Bad Request',
        'description': '\"The server cannot or will not process the request because the received syntax is invalid, nonsensical, or exceeds some limitation on what the server is willing to process.\"',
        'spec_title': 'RFC7231#6.5.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.1'
    },
    '401': {
        'code': 401,
        'text': 'Unauthorized',
        'description': '\"The request has not been applied because it lacks valid authentication credentials for the target resource.\"',
        'spec_title': 'RFC7235#6.3.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7235#section-3.1'
    },
    '402': {
        'code': 402,
        'text': 'Payment Required',
        'description': '*reserved*',
        'spec_title': 'RFC7231#6.5.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.2'
    },
    '403': {
        'code': 403,
        'text': 'Forbidden',
        'description': '\"The server understood the request but refuses to authorize it.\"',
        'spec_title': 'RFC7231#6.5.3',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.3'
    },
    '404': {
        'code': 404,
        'text': 'Not Found',
        'description': '\"The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.\"',
        'spec_title': 'RFC7231#6.5.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.4'
    },
    '405': {
        'code': 405,
        'text': 'Method Not Allowed',
        'description': '\"The method specified in the request-line is known by the origin server but not supported by the target resource.\"',
        'spec_title': 'RFC7231#6.5.5',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.5'
    },
    '406': {
        'code': 406,
        'text': 'Not Acceptable',
        'description': '\"The target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request, and the server is unwilling to supply a default representation.\"',
        'spec_title': 'RFC7231#6.5.6',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.6'
    },
    '407': {
        'code': 407,
        'text': 'Proxy Authentication Required',
        'description': '\"The client needs to authenticate itself in order to use a proxy.\"',
        'spec_title': 'RFC7231#6.3.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.2'
    },
    '408': {
        'code': 408,
        'text': 'Request Timeout',
        'description': '\"The server did not receive a complete request message within the time that it was prepared to wait.\"',
        'spec_title': 'RFC7231#6.5.7',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.7'
    },
    '409': {
        'code': 409,
        'text': 'Conflict',
        'description': '\"The request could not be completed due to a conflict with the current state of the resource.\"',
        'spec_title': 'RFC7231#6.5.8',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.8'
    },
    '410': {
        'code': 410,
        'text': 'Gone',
        'description': '\"Access to the target resource is no longer available at the origin server and that this condition is likely to be permanent.\"',
        'spec_title': 'RFC7231#6.5.9',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.9'
    },
    '411': {
        'code': 411,
        'text': 'Length Required',
        'description': '\"The server refuses to accept the request without a defined Content-Length.\"',
        'spec_title': 'RFC7231#6.5.10',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.10'
    },
    '412': {
        'code': 412,
        'text': 'Precondition Failed',
        'description': '\"One or more preconditions given in the request header fields evaluated to false when tested on the server.\"',
        'spec_title': 'RFC7232#4.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7232#section-4.2'
    },
    '413': {
        'code': 413,
        'text': 'Payload Too Large',
        'description': '\"The server is refusing to process a request because the request payload is larger than the server is willing or able to process.\"',
        'spec_title': 'RFC7231#6.5.11',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.11'
    },
    '414': {
        'code': 414,
        'text': 'URI Too Long',
        'description': '\"The server is refusing to service the request because the request-target is longer than the server is willing to interpret.\"',
        'spec_title': 'RFC7231#6.5.12',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.12'
    },
    '415': {
        'code': 415,
        'text': 'Unsupported Media Type',
        'description': '\"The origin server is refusing to service the request because the payload is in a format not supported by the target resource for this method.\"',
        'spec_title': 'RFC7231#6.5.13',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.13'
    },
    '416': {
        'code': 416,
        'text': 'Range Not Satisfiable',
        'description': '\"None of the ranges in the request\'s Range header field overlap the current extent of the selected resource or that the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges.\"',
        'spec_title': 'RFC7233#4.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7233#section-4.4'
    },
    '417': {
        'code': 417,
        'text': 'Expectation Failed',
        'description': '\"The expectation given in the request\'s Expect header field could not be met by at least one of the inbound servers.\"',
        'spec_title': 'RFC7231#6.5.14',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.14'
    },
    '418': {
        'code': 418,
        'text': 'I\'m a teapot',
        'description': '\"1988 April Fools Joke. Returned by tea pots requested to brew coffee.\"',
        'spec_title': 'RFC 2324',
        'spec_href': 'https://tools.ietf.org/html/rfc2324'
    },
    '426': {
        'code': 426,
        'text': 'Upgrade Required',
        'description': '\"The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.\"',
        'spec_title': 'RFC7231#6.5.15',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.15'
    },
    '500': {
        'code': 500,
        'text': 'Internal Server Error',
        'description': '\"The server encountered an unexpected condition that prevented it from fulfilling the request.\"',
        'spec_title': 'RFC7231#6.6.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.1'
    },
    '501': {
        'code': 501,
        'text': 'Not Implemented',
        'description': '\"The server does not support the functionality required to fulfill the request.\"',
        'spec_title': 'RFC7231#6.6.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.2'
    },
    '502': {
        'code': 502,
        'text': 'Bad Gateway',
        'description': '\"The server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request.\"',
        'spec_title': 'RFC7231#6.6.3',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.3'
    },
    '503': {
        'code': 503,
        'text': 'Service Unavailable',
        'description': '\"The server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay.\"',
        'spec_title': 'RFC7231#6.6.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.4'
    },
    '504': {
        'code': 504,
        'text': 'Gateway Time-out',
        'description': '\"The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request.\"',
        'spec_title': 'RFC7231#6.6.5',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.5'
    },
    '505': {
        'code': 505,
        'text': 'HTTP Version Not Supported',
        'description': '\"The server does not support, or refuses to support, the protocol version that was used in the request message.\"',
        'spec_title': 'RFC7231#6.6.6',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.6'
    },
    '102': {
        'code': 102,
        'text': 'Processing',
        'description': '\"An interim response to inform the client that the server has accepted the complete request, but has not yet completed it.\"',
        'spec_title': 'RFC5218#10.1',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.1'
    },
    '207': {
        'code': 207,
        'text': 'Multi-Status',
        'description': '\"Status for multiple independent operations.\"',
        'spec_title': 'RFC5218#10.2',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.2'
    },
    '226': {
        'code': 226,
        'text': 'IM Used',
        'description': '\"The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.\"',
        'spec_title': 'RFC3229#10.4.1',
        'spec_href': 'http://tools.ietf.org/html/rfc3229#section-10.4.1'
    },
    '308': {
        'code': 308,
        'text': 'Permanent Redirect',
        'description': '\"The target resource has been assigned a new permanent URI and any future references to this resource SHOULD use one of the returned URIs. [...] This status code is similar to 301 Moved Permanently (Section 7.3.2 of rfc7231), except that it does not allow rewriting the request method from POST to GET.\"',
        'spec_title': 'RFC7238',
        'spec_href': 'http://tools.ietf.org/html/rfc7238'
    },
    '422': {
        'code': 422,
        'text': 'Unprocessable Entity',
        'description': '\"The server understands the content type of the request entity (hence a 415(Unsupported Media Type) status code is inappropriate), and the syntax of the request entity is correct (thus a 400 (Bad Request) status code is inappropriate) but was unable to process the contained instructions.\"',
        'spec_title': 'RFC5218#10.3',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.3'
    },
    '423': {
        'code': 423,
        'text': 'Locked',
        'description': '\"The source or destination resource of a method is locked.\"',
        'spec_title': 'RFC5218#10.4',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.4'
    },
    '424': {
        'code': 424,
        'text': 'Failed Dependency',
        'description': '\"The method could not be performed on the resource because the requested action depended on another action and that action failed.\"',
        'spec_title': 'RFC5218#10.5',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.5'
    },
    '428': {
        'code': 428,
        'text': 'Precondition Required',
        'description': '\"The origin server requires the request to be conditional.\"',
        'spec_title': 'RFC6585#3',
        'spec_href': 'http://tools.ietf.org/html/rfc6585#section-3'
    },
    '429': {
        'code': 429,
        'text': 'Too Many Requests',
        'description': '\"The user has sent too many requests in a given amount of time (\"rate limiting\").\"',
        'spec_title': 'RFC6585#4',
        'spec_href': 'http://tools.ietf.org/html/rfc6585#section-4'
    },
    '431': {
        'code': 431,
        'text': 'Request Header Fields Too Large',
        'description': '\"The server is unwilling to process the request because its header fields are too large.\"',
        'spec_title': 'RFC6585#5',
        'spec_href': 'http://tools.ietf.org/html/rfc6585#section-5'
    },
    '451': {
        'code': 451,
        'text': 'Unavailable For Legal Reasons',
        'description': '\"The server is denying access to the resource in response to a legal demand.\"',
        'spec_title': 'draft-ietf-httpbis-legally-restricted-status',
        'spec_href': 'http://tools.ietf.org/html/draft-ietf-httpbis-legally-restricted-status'
    },
    '506': {
        'code': 506,
        'text': 'Variant Also Negotiates',
        'description': '\"The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.\"',
        'spec_title': 'RFC2295#8.1',
        'spec_href': 'http://tools.ietf.org/html/rfc2295#section-8.1'
    },
    '507': {
        'code': 507,
        'text': 'Insufficient Storage',
        'description': '\The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.\"',
        'spec_title': 'RFC5218#10.6',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.6'
    },
    '511': {
        'code': 511,
        'text': 'Network Authentication Required',
        'description': '\"The client needs to authenticate to gain network access.\"',
        'spec_title': 'RFC6585#6',
        'spec_href': 'http://tools.ietf.org/html/rfc6585#section-6'
    }
};
/**
 * get the status text from StatusCode
 */
function getStatusText(status) {
    return STATUS_CODE_INFO[status].text || 'Unknown Status';
}
/**
 * Returns true if the the Http Status Code is 200-299 (success)
 */
function isSuccess(status) { return status >= 200 && status < 300; }

/**
* Interface for a class that creates an in-memory database
*
* Its `createDb` method creates a hash of named collections that represents the database
*
* For maximum flexibility, the service may define HTTP method overrides.
* Such methods must match the spelling of an HTTP method in lower case (e.g, "get").
* If a request has a matching method, it will be called as in
* `get(info: requestInfo, db: {})` where `db` is the database object described above.
*/
var InMemoryDbService = (function () {
    function InMemoryDbService() {
    }
    return InMemoryDbService;
}());
/**
* Interface for InMemoryBackend configuration options
*/
var InMemoryBackendConfigArgs = (function () {
    function InMemoryBackendConfigArgs() {
    }
    return InMemoryBackendConfigArgs;
}());
/////////////////////////////////
/**
*  InMemoryBackendService configuration options
*  Usage:
*    InMemoryWebApiModule.forRoot(InMemHeroService, {delay: 600})
*
*  or if providing separately:
*    provide(InMemoryBackendConfig, {useValue: {delay: 600}}),
*/
var InMemoryBackendConfig = (function () {
    function InMemoryBackendConfig(config) {
        if (config === void 0) { config = {}; }
        Object.assign(this, {
            // default config:
            caseSensitiveSearch: false,
            dataEncapsulation: true,
            delay: 500,
            delete404: false,
            passThruUnknownUrl: false,
            post204: true,
            post409: false,
            put204: true,
            put404: false,
            apiBase: undefined,
            host: undefined,
            rootPath: undefined // default value is actually set in InMemoryBackendService ctor
        }, config);
    }
    return InMemoryBackendConfig;
}());
InMemoryBackendConfig.decorators = [
    { type: core.Injectable },
];
/** @nocollapse */
InMemoryBackendConfig.ctorParameters = function () { return [
    { type: InMemoryBackendConfigArgs, },
]; };
/** Return information (UriInfo) about a URI  */
function parseUri(str) {
    // Adapted from parseuri package - http://blog.stevenlevithan.com/archives/parseuri
    // tslint:disable-next-line:max-line-length
    var URL_REGEX = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
    var m = URL_REGEX.exec(str);
    var uri = {
        source: '',
        protocol: '',
        authority: '',
        userInfo: '',
        user: '',
        password: '',
        host: '',
        port: '',
        relative: '',
        path: '',
        directory: '',
        file: '',
        query: '',
        anchor: ''
    };
    var keys = Object.keys(uri);
    var i = keys.length;
    while (i--) {
        uri[keys[i]] = m[i] || '';
    }
    return uri;
}
function removeTrailingSlash(path) {
    return path.replace(/\/$/, '');
}

/**
 * Base class for in-memory web api back-ends
 * Simulate the behavior of a RESTy web api
 * backed by the simple in-memory data store provided by the injected `InMemoryDbService` service.
 * Conforms mostly to behavior described here:
 * http://www.restapitutorial.com/lessons/httpmethods.html
 */
var BackendService = (function () {
    function BackendService(inMemDbService, config) {
        if (config === void 0) { config = {}; }
        this.inMemDbService = inMemDbService;
        this.config = new InMemoryBackendConfig();
        this.requestInfoUtils = this.getRequestInfoUtils();
        var loc = this.getLocation('/');
        this.config.host = loc.host; // default to app web server host
        this.config.rootPath = loc.path; // default to path when app is served (e.g.'/')
        Object.assign(this.config, config);
    }
    Object.defineProperty(BackendService.prototype, "dbReady", {
        ////  protected /////
        get: function () {
            if (!this.dbReadySubject) {
                // first time the service is called.
                this.dbReadySubject = new BehaviorSubject.BehaviorSubject(false);
                this.resetDb();
            }
            return first.first.call(this.dbReadySubject.asObservable(), function (r) { return r; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Process Request and return an Observable of Http Response object
     * in the manner of a RESTy web api.
     *
     * Expect URI pattern in the form :base/:collectionName/:id?
     * Examples:
     *   // for store with a 'customers' collection
     *   GET api/customers          // all customers
     *   GET api/customers/42       // the character with id=42
     *   GET api/customers?name=^j  // 'j' is a regex; returns customers whose name starts with 'j' or 'J'
     *   GET api/customers.json/42  // ignores the ".json"
     *
     * Also accepts direct commands to the service in which the last segment of the apiBase is the word "commands"
     * Examples:
     *     POST commands/resetDb,
     *     GET/POST commands/config - get or (re)set the config
     *
     *   HTTP overrides:
     *     If the injected inMemDbService defines an HTTP method (lowercase)
     *     The request is forwarded to that method as in
     *     `inMemDbService.get(requestInfo)`
     *     which must return either an Observable of the response type
     *     for this http library or null|undefined (which means "keep processing").
     */
    BackendService.prototype.handleRequest = function (req) {
        var _this = this;
        //  handle the request when there is an in-memory database
        return concatMap.concatMap.call(this.dbReady, function () { return _this.handleRequest_(req); });
    };
    BackendService.prototype.handleRequest_ = function (req) {
        var _this = this;
        var url = req.url;
        // Try override parser
        // If no override parser or it returns nothing, use default parser
        var parser = this.bind('parseRequestUrl');
        var parsed = (parser && parser(url, this.requestInfoUtils)) ||
            this.parseRequestUrl(url);
        var collectionName = parsed.collectionName;
        var collection = this.db[collectionName];
        var reqInfo = {
            req: req,
            apiBase: parsed.apiBase,
            collection: collection,
            collectionName: collectionName,
            headers: this.createHeaders({ 'Content-Type': 'application/json' }),
            id: this.parseId(collection, collectionName, parsed.id),
            method: this.getRequestMethod(req),
            query: parsed.query,
            resourceUrl: parsed.resourceUrl,
            url: url,
            utils: this.requestInfoUtils
        };
        var resOptions;
        if (/commands\/?$/i.test(reqInfo.apiBase)) {
            return this.commands(reqInfo);
        }
        var methodInterceptor = this.bind(reqInfo.method);
        if (methodInterceptor) {
            // InMemoryDbService intercepts this HTTP method.
            // if interceptor produced a response, return it.
            // else InMemoryDbService chose not to intercept; continue processing.
            var interceptorResponse = methodInterceptor(reqInfo);
            if (interceptorResponse) {
                return interceptorResponse;
            }
            
        }
        if (this.db[collectionName]) {
            // request is for a known collection of the InMemoryDbService
            return this.createResponse$(function () { return _this.collectionHandler(reqInfo); });
        }
        if (this.config.passThruUnknownUrl) {
            // unknown collection; pass request thru to a "real" backend.
            return this.getPassThruBackend().handle(req);
        }
        // 404 - can't handle this request
        resOptions = this.createErrorResponseOptions(url, STATUS.NOT_FOUND, "Collection '" + collectionName + "' not found");
        return this.createResponse$(function () { return resOptions; });
    };
    /**
     * Add configured delay to response observable unless delay === 0
     */
    BackendService.prototype.addDelay = function (response) {
        var d = this.config.delay;
        return d === 0 ? response : delay.delay.call(response, d || 500);
    };
    /**
     * Apply query/search parameters as a filter over the collection
     * This impl only supports RegExp queries on string properties of the collection
     * ANDs the conditions together
     */
    BackendService.prototype.applyQuery = function (collection, query) {
        // extract filtering conditions - {propertyName, RegExps) - from query/search parameters
        var conditions = [];
        var caseSensitive = this.config.caseSensitiveSearch ? undefined : 'i';
        query.forEach(function (value, name) {
            value.forEach(function (v) { return conditions.push({ name: name, rx: new RegExp(decodeURI(v), caseSensitive) }); });
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
    /**
     * Get a method from the `InMemoryDbService` (if it exists), bound to that service
     */
    BackendService.prototype.bind = function (methodName) {
        var fn = this.inMemDbService[methodName];
        return fn ? fn.bind(this.inMemDbService) : undefined;
    };
    BackendService.prototype.bodify = function (data) {
        var body = this.clone(data);
        return this.config.dataEncapsulation ? { data: body } : body;
    };
    BackendService.prototype.clone = function (data) {
        return JSON.parse(JSON.stringify(data));
    };
    BackendService.prototype.collectionHandler = function (reqInfo) {
        // const req = reqInfo.req;
        var resOptions;
        switch (reqInfo.method) {
            case 'get':
                resOptions = this.get(reqInfo);
                break;
            case 'post':
                resOptions = this.post(reqInfo);
                break;
            case 'put':
                resOptions = this.put(reqInfo);
                break;
            case 'delete':
                resOptions = this.delete(reqInfo);
                break;
            default:
                resOptions = this.createErrorResponseOptions(reqInfo.url, STATUS.METHOD_NOT_ALLOWED, 'Method not allowed');
                break;
        }
        // If `inMemDbService.responseInterceptor` exists, let it morph the response options
        var interceptor = this.bind('responseInterceptor');
        return interceptor ? interceptor(resOptions, reqInfo) : resOptions;
    };
    /**
     * Commands reconfigure the in-memory web api service or extract information from it.
     * Commands ignore the latency delay and respond ASAP.
     *
     * When the last segment of the `apiBase` path is "commands",
     * the `collectionName` is the command.
     *
     * Example URLs:
     *   commands/resetdb (POST) // Reset the "database" to its original state
     *   commands/config (GET)   // Return this service's config object
     *   commands/config (POST)  // Update the config (e.g. the delay)
     *
     * Usage:
     *   http.post('commands/resetdb', undefined);
     *   http.get('commands/config');
     *   http.post('commands/config', '{"delay":1000}');
     */
    BackendService.prototype.commands = function (reqInfo) {
        var _this = this;
        var command = reqInfo.collectionName.toLowerCase();
        var method = reqInfo.method;
        var resOptions = {
            url: reqInfo.url
        };
        switch (command) {
            case 'resetdb':
                resOptions.status = STATUS.NO_CONTENT;
                return concatMap.concatMap.call(this.resetDb(reqInfo), function () { return _this.createResponse$(function () { return resOptions; }, false /* no latency delay */); });
            case 'config':
                if (method === 'get') {
                    resOptions.status = STATUS.OK;
                    resOptions.body = this.clone(this.config);
                    // any other HTTP method is assumed to be a config update
                }
                else {
                    var body = this.getJsonBody(reqInfo.req);
                    Object.assign(this.config, body);
                    this.passThruBackend = undefined; // re-create when needed
                    resOptions.status = STATUS.NO_CONTENT;
                }
                break;
            default:
                resOptions = this.createErrorResponseOptions(reqInfo.url, STATUS.INTERNAL_SERVER_ERROR, "Unknown command \"" + command + "\"");
        }
        return this.createResponse$(function () { return resOptions; }, false /* no latency delay */);
    };
    BackendService.prototype.createErrorResponseOptions = function (url, status, message) {
        return {
            body: { error: "" + message },
            url: url,
            headers: this.createHeaders({ 'Content-Type': 'application/json' }),
            status: status
        };
    };
    /**
     * Create a cold response Observable from a factory for ResponseOptions
     * @param resOptionsFactory - creates ResponseOptions when observable is subscribed
     * @param withDelay - if true (default), add simulated latency delay from configuration
     */
    BackendService.prototype.createResponse$ = function (resOptionsFactory, withDelay) {
        if (withDelay === void 0) { withDelay = true; }
        var resOptions$ = this.createResponseOptions$(resOptionsFactory);
        var resp$ = this.createResponse$fromResponseOptions$(resOptions$);
        return withDelay ? this.addDelay(resp$) : resp$;
    };
    /**
     * Create a cold Observable of ResponseOptions.
     * @param resOptionsFactory - creates ResponseOptions when observable is subscribed
     */
    BackendService.prototype.createResponseOptions$ = function (resOptionsFactory) {
        var _this = this;
        return new Observable.Observable(function (responseObserver) {
            var resOptions;
            try {
                resOptions = resOptionsFactory();
            }
            catch (error) {
                var err = error.message || error;
                resOptions = _this.createErrorResponseOptions('', STATUS.INTERNAL_SERVER_ERROR, "" + err);
            }
            var status = resOptions.status;
            try {
                resOptions.statusText = getStatusText(status);
            }
            catch (e) { }
            if (isSuccess(status)) {
                responseObserver.next(resOptions);
                responseObserver.complete();
            }
            else {
                responseObserver.error(resOptions);
            }
            return function () { }; // unsubscribe function
        });
    };
    BackendService.prototype.delete = function (_a) {
        var collection = _a.collection, collectionName = _a.collectionName, headers = _a.headers, id = _a.id, url = _a.url;
        // tslint:disable-next-line:triple-equals
        if (id == undefined) {
            return this.createErrorResponseOptions(url, STATUS.NOT_FOUND, "Missing \"" + collectionName + "\" id");
        }
        var exists = this.removeById(collection, id);
        return {
            headers: headers,
            status: (exists || !this.config.delete404) ? STATUS.NO_CONTENT : STATUS.NOT_FOUND
        };
    };
    /**
     * Find first instance of item in collection by `item.id`
     * @param collection
     * @param id
     */
    BackendService.prototype.findById = function (collection, id) {
        return collection.find(function (item) { return item.id === id; });
    };
    /**
     * Generate the next available id for item in this collection
     * Use method from `inMemDbService` if it exists and returns a value,
     * else delegates to `genIdDefault`.
     * @param collection - collection of items with `id` key property
     */
    BackendService.prototype.genId = function (collection, collectionName) {
        var genId = this.bind('genId');
        if (genId) {
            var id = genId(collection, collectionName);
            // tslint:disable-next-line:triple-equals
            if (id != undefined) {
                return id;
            }
        }
        return this.genIdDefault(collection, collectionName);
    };
    /**
     * Default generator of the next available id for item in this collection
     * This default implementation works only for numeric ids.
     * @param collection - collection of items with `id` key property
     * @param collectionName - name of the collection
     */
    BackendService.prototype.genIdDefault = function (collection, collectionName) {
        if (!this.isCollectionIdNumeric(collection, collectionName)) {
            throw new Error("Collection '" + collectionName + "' id type is non-numeric or unknown. Can only generate numeric ids.");
        }
        var maxId = 0;
        collection.reduce(function (prev, item) {
            maxId = Math.max(maxId, typeof item.id === 'number' ? item.id : maxId);
        }, undefined);
        return maxId + 1;
    };
    BackendService.prototype.get = function (_a) {
        var collection = _a.collection, collectionName = _a.collectionName, headers = _a.headers, id = _a.id, query = _a.query, url = _a.url;
        var data = collection;
        // tslint:disable-next-line:triple-equals
        if (id != undefined && id !== '') {
            data = this.findById(collection, id);
        }
        else if (query) {
            data = this.applyQuery(collection, query);
        }
        if (!data) {
            return this.createErrorResponseOptions(url, STATUS.NOT_FOUND, "'" + collectionName + "' with id='" + id + "' not found");
        }
        return {
            body: this.bodify(data),
            headers: headers,
            status: STATUS.OK
        };
    };
    /**
     * Get location info from a url, even on server where `document` is not defined
     */
    BackendService.prototype.getLocation = function (url) {
        if (!url.startsWith('http')) {
            // get the document iff running in browser
            var doc = (typeof document === 'undefined') ? undefined : document;
            // add host info to url before parsing.  Use a fake host when not in browser.
            var base = doc ? doc.location.protocol + '//' + doc.location.host : 'http://fake';
            url = url.startsWith('/') ? base + url : base + '/' + url;
        }
        return parseUri(url);
    };
    
    /**
     * get or create the function that passes unhandled requests
     * through to the "real" backend.
     */
    BackendService.prototype.getPassThruBackend = function () {
        return this.passThruBackend ?
            this.passThruBackend :
            this.passThruBackend = this.createPassThruBackend();
    };
    /**
     * Get utility methods from this service instance.
     * Useful within an HTTP method override
     */
    BackendService.prototype.getRequestInfoUtils = function () {
        var _this = this;
        return {
            createResponse$: this.createResponse$.bind(this),
            findById: this.findById.bind(this),
            isCollectionIdNumeric: this.isCollectionIdNumeric.bind(this),
            getConfig: function () { return _this.config; },
            getDb: function () { return _this.db; },
            getJsonBody: this.getJsonBody.bind(this),
            getLocation: this.getLocation.bind(this),
            getPassThruBackend: this.getPassThruBackend.bind(this),
            parseRequestUrl: this.parseRequestUrl.bind(this),
        };
    };
    BackendService.prototype.indexOf = function (collection, id) {
        return collection.findIndex(function (item) { return item.id === id; });
    };
    /** Parse the id as a number. Return original value if not a number. */
    BackendService.prototype.parseId = function (collection, collectionName, id) {
        if (!this.isCollectionIdNumeric(collection, collectionName)) {
            // Can't confirm that `id` is a numeric type; don't parse as a number
            // or else `'42'` -> `42` and _get by id_ fails.
            return id;
        }
        var idNum = parseFloat(id);
        return isNaN(idNum) ? id : idNum;
    };
    /**
     * return true if can determine that the collection's `item.id` is a number
     * This implementation can't tell if the collection is empty so it assumes NO
     * */
    BackendService.prototype.isCollectionIdNumeric = function (collection, collectionName) {
        // collectionName not used now but override might maintain collection type information
        // so that it could know the type of the `id` even when the collection is empty.
        return !!(collection && collection[0]) && typeof collection[0].id === 'number';
    };
    /**
     * Parses the request URL into a `ParsedRequestUrl` object.
     * Parsing depends upon certain values of `config`: `apiBase`, `host`, and `urlRoot`.
     *
     * Configuring the `apiBase` yields the most interesting changes to `parseRequestUrl` behavior:
     *   When apiBase=undefined and url='http://localhost/api/collection/42'
     *     {base: 'api/', collectionName: 'collection', id: '42', ...}
     *   When apiBase='some/api/root/' and url='http://localhost/some/api/root/collection'
     *     {base: 'some/api/root/', collectionName: 'collection', id: undefined, ...}
     *   When apiBase='/' and url='http://localhost/collection'
     *     {base: '/', collectionName: 'collection', id: undefined, ...}
     *
     * The actual api base segment values are ignored. Only the number of segments matters.
     * The following api base strings are considered identical: 'a/b' ~ 'some/api/' ~ `two/segments'
     *
     * To replace this default method, assign your alternative to your InMemDbService['parseRequestUrl']
     */
    BackendService.prototype.parseRequestUrl = function (url) {
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
            var path = loc.path.substring(drop);
            var pathSegments = path.split('/');
            var segmentIx = 0;
            // apiBase: the front part of the path devoted to getting to the api route
            // Assumes first path segment if no config.apiBase
            // else ignores as many path segments as are in config.apiBase
            // Does NOT care what the api base chars actually are.
            var apiBase = void 0;
            // tslint:disable-next-line:triple-equals
            if (this.config.apiBase == undefined) {
                apiBase = pathSegments[segmentIx++];
            }
            else {
                apiBase = removeTrailingSlash(this.config.apiBase.trim());
                if (apiBase) {
                    segmentIx = apiBase.split('/').length;
                }
                else {
                    segmentIx = 0; // no api base at all; unwise but allowed.
                }
            }
            apiBase += '/';
            var collectionName = pathSegments[segmentIx++];
            // ignore anything after a '.' (e.g.,the "json" in "customers.json")
            collectionName = collectionName && collectionName.split('.')[0];
            var id = pathSegments[segmentIx++];
            var query = this.createQueryMap(loc.query);
            var resourceUrl = urlRoot + apiBase + collectionName + '/';
            return { apiBase: apiBase, collectionName: collectionName, id: id, query: query, resourceUrl: resourceUrl };
        }
        catch (err) {
            var msg = "unable to parse url '" + url + "'; original error: " + err.message;
            throw new Error(msg);
        }
    };
    // Create entity
    // Can update an existing entity too if post409 is false.
    BackendService.prototype.post = function (_a) {
        var collection = _a.collection, collectionName = _a.collectionName, headers = _a.headers, id = _a.id, req = _a.req, resourceUrl = _a.resourceUrl, url = _a.url;
        var item = this.getJsonBody(req);
        // tslint:disable-next-line:triple-equals
        if (item.id == undefined) {
            try {
                item.id = id || this.genId(collection, collectionName);
            }
            catch (err) {
                var emsg = err.message || '';
                if (/id type is non-numeric/.test(emsg)) {
                    return this.createErrorResponseOptions(url, STATUS.UNPROCESSABLE_ENTRY, emsg);
                }
                else {
                    console.error(err);
                    return this.createErrorResponseOptions(url, STATUS.INTERNAL_SERVER_ERROR, "Failed to generate new id for '" + collectionName + "'");
                }
            }
        }
        if (id && id !== item.id) {
            return this.createErrorResponseOptions(url, STATUS.BAD_REQUEST, "Request id does not match item.id");
        }
        else {
            id = item.id;
        }
        var existingIx = this.indexOf(collection, id);
        var body = this.bodify(item);
        if (existingIx === -1) {
            collection.push(item);
            headers.set('Location', resourceUrl + '/' + id);
            return { headers: headers, body: body, status: STATUS.CREATED };
        }
        else if (this.config.post409) {
            return this.createErrorResponseOptions(url, STATUS.CONFLICT, "'" + collectionName + "' item with id='" + id + " exists and may not be updated with POST; use PUT instead.");
        }
        else {
            collection[existingIx] = item;
            return this.config.post204 ?
                { headers: headers, status: STATUS.NO_CONTENT } :
                { headers: headers, body: body, status: STATUS.OK }; // successful; return entity
        }
    };
    // Update existing entity
    // Can create an entity too if put404 is false.
    BackendService.prototype.put = function (_a) {
        var collection = _a.collection, collectionName = _a.collectionName, headers = _a.headers, id = _a.id, req = _a.req, url = _a.url;
        var item = this.getJsonBody(req);
        // tslint:disable-next-line:triple-equals
        if (item.id == undefined) {
            return this.createErrorResponseOptions(url, STATUS.NOT_FOUND, "Missing '" + collectionName + "' id");
        }
        if (id && id !== item.id) {
            return this.createErrorResponseOptions(url, STATUS.BAD_REQUEST, "Request for '" + collectionName + "' id does not match item.id");
        }
        else {
            id = item.id;
        }
        var existingIx = this.indexOf(collection, id);
        var body = this.bodify(item);
        if (existingIx > -1) {
            collection[existingIx] = item;
            return this.config.put204 ?
                { headers: headers, status: STATUS.NO_CONTENT } :
                { headers: headers, body: body, status: STATUS.OK }; // successful; return entity
        }
        else if (this.config.put404) {
            // item to update not found; use POST to create new item for this id.
            return this.createErrorResponseOptions(url, STATUS.NOT_FOUND, "'" + collectionName + "' item with id='" + id + " not found and may not be created with PUT; use POST instead.");
        }
        else {
            // create new item for id not found
            collection.push(item);
            return { headers: headers, body: body, status: STATUS.CREATED };
        }
    };
    BackendService.prototype.removeById = function (collection, id) {
        var ix = this.indexOf(collection, id);
        if (ix > -1) {
            collection.splice(ix, 1);
            return true;
        }
        return false;
    };
    /**
     * Tell your in-mem "database" to reset.
     * returns Observable of the database because resetting it could be async
     */
    BackendService.prototype.resetDb = function (reqInfo) {
        var _this = this;
        this.dbReadySubject.next(false);
        var db = this.inMemDbService.createDb(reqInfo);
        var db$ = db instanceof Observable.Observable ? db :
            isPromise.isPromise(db) ? fromPromise.fromPromise(db) :
                of.of(db);
        first.first.call(db$).subscribe(function (d) {
            _this.db = d;
            _this.dbReadySubject.next(true);
        });
        return this.dbReady;
    };
    return BackendService;
}());

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * For Angular `Http` simulate the behavior of a RESTy web api
 * backed by the simple in-memory data store provided by the injected `InMemoryDbService`.
 * Conforms mostly to behavior described here:
 * http://www.restapitutorial.com/lessons/httpmethods.html
 *
 * ### Usage
 *
 * Create an in-memory data store class that implements `InMemoryDbService`.
 * Call `forRoot` static method with this service class and optional configuration object:
 * ```
 * // other imports
 * import { HttpModule } from '@angular/http';
 * import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
 *
 * import { InMemHeroService, inMemConfig } from '../api/in-memory-hero.service';
 * @NgModule({
 *  imports: [
 *    HttpModule,
 *    HttpClientInMemoryWebApiModule.forRoot(InMemHeroService, inMemConfig),
 *    ...
 *  ],
 *  ...
 * })
 * export class AppModule { ... }
 * ```
 */
var HttpBackendService = (function (_super) {
    __extends(HttpBackendService, _super);
    function HttpBackendService(injector, inMemDbService, config) {
        var _this = _super.call(this, inMemDbService, config) || this;
        _this.injector = injector;
        return _this;
    }
    HttpBackendService.prototype.createConnection = function (req) {
        var response;
        try {
            response = this.handleRequest(req);
        }
        catch (error) {
            var err = error.message || error;
            var resOptions_1 = this.createErrorResponseOptions(req.url, STATUS.INTERNAL_SERVER_ERROR, "" + err);
            response = this.createResponse$(function () { return resOptions_1; });
        }
        return {
            readyState: http.ReadyState.Done,
            request: req,
            response: response
        };
    };
    ////  protected overrides /////
    HttpBackendService.prototype.getJsonBody = function (req) {
        try {
            return req.json();
        }
        catch (e) {
            var msg = "'" + req.url + "' request body-to-json error\n" + JSON.stringify(e);
            throw new Error(msg);
        }
    };
    HttpBackendService.prototype.getRequestMethod = function (req) {
        return http.RequestMethod[req.method || 0].toLowerCase();
    };
    HttpBackendService.prototype.createHeaders = function (headers) {
        return new http.Headers(headers);
    };
    HttpBackendService.prototype.createQueryMap = function (search) {
        return search ? new http.URLSearchParams(search).paramsMap : new Map();
    };
    HttpBackendService.prototype.createResponse$fromResponseOptions$ = function (resOptions$) {
        return map.map.call(resOptions$, function (opts) {
            return new http.Response(new http.ResponseOptions(opts));
        });
    };
    HttpBackendService.prototype.createPassThruBackend = function () {
        try {
            // copied from @angular/http/backends/xhr_backend
            var browserXhr = this.injector.get(http.BrowserXhr);
            var baseResponseOptions = this.injector.get(http.ResponseOptions);
            var xsrfStrategy = this.injector.get(http.XSRFStrategy);
            var xhrBackend_1 = new http.XHRBackend(browserXhr, baseResponseOptions, xsrfStrategy);
            return {
                handle: function (req) { return xhrBackend_1.createConnection(req).response; }
            };
        }
        catch (e) {
            e.message = 'Cannot create passThru404 backend; ' + (e.message || '');
            throw e;
        }
    };
    return HttpBackendService;
}(BackendService));
HttpBackendService.decorators = [
    { type: core.Injectable },
];
/** @nocollapse */
HttpBackendService.ctorParameters = function () { return [
    { type: core.Injector, },
    { type: InMemoryDbService, },
    { type: InMemoryBackendConfigArgs, decorators: [{ type: core.Inject, args: [InMemoryBackendConfig,] }, { type: core.Optional },] },
]; };

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * For Angular `HttpClient` simulate the behavior of a RESTy web api
 * backed by the simple in-memory data store provided by the injected `InMemoryDbService`.
 * Conforms mostly to behavior described here:
 * http://www.restapitutorial.com/lessons/httpmethods.html
 *
 * ### Usage
 *
 * Create an in-memory data store class that implements `InMemoryDbService`.
 * Call `config` static method with this service class and optional configuration object:
 * ```
 * // other imports
 * import { HttpClientModule } from '@angular/common/http';
 * import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
 *
 * import { InMemHeroService, inMemConfig } from '../api/in-memory-hero.service';
 * @NgModule({
 *  imports: [
 *    HttpModule,
 *    HttpClientInMemoryWebApiModule.forRoot(InMemHeroService, inMemConfig),
 *    ...
 *  ],
 *  ...
 * })
 * export class AppModule { ... }
 * ```
 */
var HttpClientBackendService = (function (_super) {
    __extends$1(HttpClientBackendService, _super);
    function HttpClientBackendService(inMemDbService, config, xhrFactory) {
        var _this = _super.call(this, inMemDbService, config) || this;
        _this.xhrFactory = xhrFactory;
        return _this;
    }
    HttpClientBackendService.prototype.handle = function (req) {
        try {
            return this.handleRequest(req);
        }
        catch (error) {
            var err = error.message || error;
            var resOptions_1 = this.createErrorResponseOptions(req.url, STATUS.INTERNAL_SERVER_ERROR, "" + err);
            return this.createResponse$(function () { return resOptions_1; });
        }
    };
    ////  protected overrides /////
    HttpClientBackendService.prototype.getJsonBody = function (req) {
        return req.body;
    };
    HttpClientBackendService.prototype.getRequestMethod = function (req) {
        return (req.method || 'get').toLowerCase();
    };
    HttpClientBackendService.prototype.createHeaders = function (headers) {
        return new http$1.HttpHeaders(headers);
    };
    HttpClientBackendService.prototype.createQueryMap = function (search) {
        var map$$1 = new Map();
        if (search) {
            var params_1 = new http$1.HttpParams({ fromString: search });
            params_1.keys().forEach(function (p) { return map$$1.set(p, params_1.getAll(p)); });
        }
        return map$$1;
    };
    HttpClientBackendService.prototype.createResponse$fromResponseOptions$ = function (resOptions$) {
        return map.map.call(resOptions$, function (opts) { return new http$1.HttpResponse(opts); });
    };
    HttpClientBackendService.prototype.createPassThruBackend = function () {
        try {
            return new http$1.HttpXhrBackend(this.xhrFactory);
        }
        catch (ex) {
            ex.message = 'Cannot create passThru404 backend; ' + (ex.message || '');
            throw ex;
        }
    };
    return HttpClientBackendService;
}(BackendService));
HttpClientBackendService.decorators = [
    { type: core.Injectable },
];
/** @nocollapse */
HttpClientBackendService.ctorParameters = function () { return [
    { type: InMemoryDbService, },
    { type: InMemoryBackendConfigArgs, decorators: [{ type: core.Inject, args: [InMemoryBackendConfig,] }, { type: core.Optional },] },
    { type: http$1.XhrFactory, },
]; };

////// Http-Only version ////
// Internal - Creates the in-mem backend for the Http module
// AoT requires factory to be exported
function httpInMemBackendServiceFactory(injector, dbService, options) {
    var backend = new HttpBackendService(injector, dbService, options);
    return backend;
}
var HttpInMemoryWebApiModule = (function () {
    function HttpInMemoryWebApiModule() {
    }
    /**
    *  Redirect the Angular `Http` XHR calls
    *  to in-memory data store that implements `InMemoryDbService`.
    *  with class that implements InMemoryDbService and creates an in-memory database.
    *
    *  Usually imported in the root application module.
    *  Can import in a lazy feature module too, which will shadow modules loaded earlier
    *
    * @param {Type} dbCreator - Class that creates seed data for in-memory database. Must implement InMemoryDbService.
    * @param {InMemoryBackendConfigArgs} [options]
    *
    * @example
    * HttpInMemoryWebApiModule.forRoot(dbCreator);
    * HttpInMemoryWebApiModule.forRoot(dbCreator, {useValue: {delay:600}});
    */
    HttpInMemoryWebApiModule.forRoot = function (dbCreator, options) {
        return {
            ngModule: HttpInMemoryWebApiModule,
            providers: [
                { provide: InMemoryDbService, useClass: dbCreator },
                { provide: InMemoryBackendConfig, useValue: options },
                { provide: http.XHRBackend,
                    useFactory: httpInMemBackendServiceFactory,
                    deps: [core.Injector, InMemoryDbService, InMemoryBackendConfig] }
            ]
        };
    };
    /**
   *
   * Enable and configure the in-memory web api in a lazy-loaded feature module.
   * Same as `forRoot`.
   * This is a feel-good method so you can follow the Angular style guide for lazy-loaded modules.
   */
    HttpInMemoryWebApiModule.forFeature = function (dbCreator, options) {
        return HttpInMemoryWebApiModule.forRoot(dbCreator, options);
    };
    return HttpInMemoryWebApiModule;
}());
HttpInMemoryWebApiModule.decorators = [
    { type: core.NgModule, args: [{},] },
];
/** @nocollapse */
HttpInMemoryWebApiModule.ctorParameters = function () { return []; };

////// HttpClient-Only version ////
// Internal - Creates the in-mem backend for the HttpClient module
// AoT requires factory to be exported
function httpClientInMemBackendServiceFactory(dbService, options, xhrFactory) {
    var backend = new HttpClientBackendService(dbService, options, xhrFactory);
    return backend;
}
var HttpClientInMemoryWebApiModule = (function () {
    function HttpClientInMemoryWebApiModule() {
    }
    /**
    *  Redirect the Angular `HttpClient` XHR calls
    *  to in-memory data store that implements `InMemoryDbService`.
    *  with class that implements InMemoryDbService and creates an in-memory database.
    *
    *  Usually imported in the root application module.
    *  Can import in a lazy feature module too, which will shadow modules loaded earlier
    *
    * @param {Type} dbCreator - Class that creates seed data for in-memory database. Must implement InMemoryDbService.
    * @param {InMemoryBackendConfigArgs} [options]
    *
    * @example
    * HttpInMemoryWebApiModule.forRoot(dbCreator);
    * HttpInMemoryWebApiModule.forRoot(dbCreator, {useValue: {delay:600}});
    */
    HttpClientInMemoryWebApiModule.forRoot = function (dbCreator, options) {
        return {
            ngModule: HttpClientInMemoryWebApiModule,
            providers: [
                { provide: InMemoryDbService, useClass: dbCreator },
                { provide: InMemoryBackendConfig, useValue: options },
                { provide: http$1.HttpBackend,
                    useFactory: httpClientInMemBackendServiceFactory,
                    deps: [InMemoryDbService, InMemoryBackendConfig, http$1.XhrFactory] }
            ]
        };
    };
    /**
   *
   * Enable and configure the in-memory web api in a lazy-loaded feature module.
   * Same as `forRoot`.
   * This is a feel-good method so you can follow the Angular style guide for lazy-loaded modules.
   */
    HttpClientInMemoryWebApiModule.forFeature = function (dbCreator, options) {
        return HttpClientInMemoryWebApiModule.forRoot(dbCreator, options);
    };
    return HttpClientInMemoryWebApiModule;
}());
HttpClientInMemoryWebApiModule.decorators = [
    { type: core.NgModule, args: [{},] },
];
/** @nocollapse */
HttpClientInMemoryWebApiModule.ctorParameters = function () { return []; };

////// For apps with both Http and HttpClient ////
var InMemoryWebApiModule = (function () {
    function InMemoryWebApiModule() {
    }
    /**
    *  Redirect BOTH Angular `Http` and `HttpClient` XHR calls
    *  to in-memory data store that implements `InMemoryDbService`.
    *  with class that implements InMemoryDbService and creates an in-memory database.
    *
    *  Usually imported in the root application module.
    *  Can import in a lazy feature module too, which will shadow modules loaded earlier
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
                { provide: InMemoryDbService, useClass: dbCreator },
                { provide: InMemoryBackendConfig, useValue: options },
                { provide: http.XHRBackend,
                    useFactory: httpInMemBackendServiceFactory,
                    deps: [core.Injector, InMemoryDbService, InMemoryBackendConfig] },
                { provide: http$1.HttpBackend,
                    useFactory: httpClientInMemBackendServiceFactory,
                    deps: [InMemoryDbService, InMemoryBackendConfig, http$1.XhrFactory] }
            ]
        };
    };
    /**
     *
     * Enable and configure the in-memory web api in a lazy-loaded feature module.
     * Same as `forRoot`.
     * This is a feel-good method so you can follow the Angular style guide for lazy-loaded modules.
     */
    InMemoryWebApiModule.forFeature = function (dbCreator, options) {
        return InMemoryWebApiModule.forRoot(dbCreator, options);
    };
    return InMemoryWebApiModule;
}());
InMemoryWebApiModule.decorators = [
    { type: core.NgModule, args: [{},] },
];
/** @nocollapse */
InMemoryWebApiModule.ctorParameters = function () { return []; };

exports.BackendService = BackendService;
exports.STATUS = STATUS;
exports.STATUS_CODE_INFO = STATUS_CODE_INFO;
exports.getStatusText = getStatusText;
exports.isSuccess = isSuccess;
exports.HttpBackendService = HttpBackendService;
exports.HttpClientBackendService = HttpClientBackendService;
exports.InMemoryWebApiModule = InMemoryWebApiModule;
exports.httpInMemBackendServiceFactory = httpInMemBackendServiceFactory;
exports.HttpInMemoryWebApiModule = HttpInMemoryWebApiModule;
exports.httpClientInMemBackendServiceFactory = httpClientInMemBackendServiceFactory;
exports.HttpClientInMemoryWebApiModule = HttpClientInMemoryWebApiModule;
exports.InMemoryDbService = InMemoryDbService;
exports.InMemoryBackendConfigArgs = InMemoryBackendConfigArgs;
exports.InMemoryBackendConfig = InMemoryBackendConfig;
exports.parseUri = parseUri;
exports.removeTrailingSlash = removeTrailingSlash;

Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LXdlYi1hcGkudW1kLmpzIiwic291cmNlcyI6WyIuLi9zcmMvaW4tbWVtL2h0dHAtc3RhdHVzLWNvZGVzLmpzIiwiLi4vc3JjL2luLW1lbS9pbnRlcmZhY2VzLmpzIiwiLi4vc3JjL2luLW1lbS9iYWNrZW5kLnNlcnZpY2UuanMiLCIuLi9zcmMvaW4tbWVtL2h0dHAtYmFja2VuZC5zZXJ2aWNlLmpzIiwiLi4vc3JjL2luLW1lbS9odHRwLWNsaWVudC1iYWNrZW5kLnNlcnZpY2UuanMiLCIuLi9zcmMvaW4tbWVtL2h0dHAtaW4tbWVtb3J5LXdlYi1hcGkubW9kdWxlLmpzIiwiLi4vc3JjL2luLW1lbS9odHRwLWNsaWVudC1pbi1tZW1vcnktd2ViLWFwaS5tb2R1bGUuanMiLCIuLi9zcmMvaW4tbWVtL2luLW1lbW9yeS13ZWItYXBpLm1vZHVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIFNUQVRVUyA9IHtcbiAgICBDT05USU5VRTogMTAwLFxuICAgIFNXSVRDSElOR19QUk9UT0NPTFM6IDEwMSxcbiAgICBPSzogMjAwLFxuICAgIENSRUFURUQ6IDIwMSxcbiAgICBBQ0NFUFRFRDogMjAyLFxuICAgIE5PTl9BVVRIT1JJVEFUSVZFX0lORk9STUFUSU9OOiAyMDMsXG4gICAgTk9fQ09OVEVOVDogMjA0LFxuICAgIFJFU0VUX0NPTlRFTlQ6IDIwNSxcbiAgICBQQVJUSUFMX0NPTlRFTlQ6IDIwNixcbiAgICBNVUxUSVBMRV9DSE9JQ0VTOiAzMDAsXG4gICAgTU9WRURfUEVSTUFOVEVOVExZOiAzMDEsXG4gICAgRk9VTkQ6IDMwMixcbiAgICBTRUVfT1RIRVI6IDMwMyxcbiAgICBOT1RfTU9ESUZJRUQ6IDMwNCxcbiAgICBVU0VfUFJPWFk6IDMwNSxcbiAgICBURU1QT1JBUllfUkVESVJFQ1Q6IDMwNyxcbiAgICBCQURfUkVRVUVTVDogNDAwLFxuICAgIFVOQVVUSE9SSVpFRDogNDAxLFxuICAgIFBBWU1FTlRfUkVRVUlSRUQ6IDQwMixcbiAgICBGT1JCSURERU46IDQwMyxcbiAgICBOT1RfRk9VTkQ6IDQwNCxcbiAgICBNRVRIT0RfTk9UX0FMTE9XRUQ6IDQwNSxcbiAgICBOT1RfQUNDRVBUQUJMRTogNDA2LFxuICAgIFBST1hZX0FVVEhFTlRJQ0FUSU9OX1JFUVVJUkVEOiA0MDcsXG4gICAgUkVRVUVTVF9USU1FT1VUOiA0MDgsXG4gICAgQ09ORkxJQ1Q6IDQwOSxcbiAgICBHT05FOiA0MTAsXG4gICAgTEVOR1RIX1JFUVVJUkVEOiA0MTEsXG4gICAgUFJFQ09ORElUSU9OX0ZBSUxFRDogNDEyLFxuICAgIFBBWUxPQURfVE9fTEFSR0U6IDQxMyxcbiAgICBVUklfVE9PX0xPTkc6IDQxNCxcbiAgICBVTlNVUFBPUlRFRF9NRURJQV9UWVBFOiA0MTUsXG4gICAgUkFOR0VfTk9UX1NBVElTRklBQkxFOiA0MTYsXG4gICAgRVhQRUNUQVRJT05fRkFJTEVEOiA0MTcsXG4gICAgSU1fQV9URUFQT1Q6IDQxOCxcbiAgICBVUEdSQURFX1JFUVVJUkVEOiA0MjYsXG4gICAgSU5URVJOQUxfU0VSVkVSX0VSUk9SOiA1MDAsXG4gICAgTk9UX0lNUExFTUVOVEVEOiA1MDEsXG4gICAgQkFEX0dBVEVXQVk6IDUwMixcbiAgICBTRVJWSUNFX1VOQVZBSUxBQkxFOiA1MDMsXG4gICAgR0FURVdBWV9USU1FT1VUOiA1MDQsXG4gICAgSFRUUF9WRVJTSU9OX05PVF9TVVBQT1JURUQ6IDUwNSxcbiAgICBQUk9DRVNTSU5HOiAxMDIsXG4gICAgTVVMVElfU1RBVFVTOiAyMDcsXG4gICAgSU1fVVNFRDogMjI2LFxuICAgIFBFUk1BTkVOVF9SRURJUkVDVDogMzA4LFxuICAgIFVOUFJPQ0VTU0FCTEVfRU5UUlk6IDQyMixcbiAgICBMT0NLRUQ6IDQyMyxcbiAgICBGQUlMRURfREVQRU5ERU5DWTogNDI0LFxuICAgIFBSRUNPTkRJVElPTl9SRVFVSVJFRDogNDI4LFxuICAgIFRPT19NQU5ZX1JFUVVFU1RTOiA0MjksXG4gICAgUkVRVUVTVF9IRUFERVJfRklFTERTX1RPT19MQVJHRTogNDMxLFxuICAgIFVOQVZBSUxBQkxFX0ZPUl9MRUdBTF9SRUFTT05TOiA0NTEsXG4gICAgVkFSSUFOVF9BTFNPX05FR09USUFURVM6IDUwNixcbiAgICBJTlNVRkZJQ0lFTlRfU1RPUkFHRTogNTA3LFxuICAgIE5FVFdPUktfQVVUSEVOVElDQVRJT05fUkVRVUlSRUQ6IDUxMVxufTtcbi8qdHNsaW50OmRpc2FibGU6cXVvdGVtYXJrIG1heC1saW5lLWxlbmd0aCBvbmUtbGluZSAqL1xuZXhwb3J0IHZhciBTVEFUVVNfQ09ERV9JTkZPID0ge1xuICAgICcxMDAnOiB7XG4gICAgICAgICdjb2RlJzogMTAwLFxuICAgICAgICAndGV4dCc6ICdDb250aW51ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIGluaXRpYWwgcGFydCBvZiBhIHJlcXVlc3QgaGFzIGJlZW4gcmVjZWl2ZWQgYW5kIGhhcyBub3QgeWV0IGJlZW4gcmVqZWN0ZWQgYnkgdGhlIHNlcnZlci5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjIuMScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMi4xJ1xuICAgIH0sXG4gICAgJzEwMSc6IHtcbiAgICAgICAgJ2NvZGUnOiAxMDEsXG4gICAgICAgICd0ZXh0JzogJ1N3aXRjaGluZyBQcm90b2NvbHMnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgdW5kZXJzdGFuZHMgYW5kIGlzIHdpbGxpbmcgdG8gY29tcGx5IHdpdGggdGhlIGNsaWVudFxcJ3MgcmVxdWVzdCwgdmlhIHRoZSBVcGdyYWRlIGhlYWRlciBmaWVsZCwgZm9yIGEgY2hhbmdlIGluIHRoZSBhcHBsaWNhdGlvbiBwcm90b2NvbCBiZWluZyB1c2VkIG9uIHRoaXMgY29ubmVjdGlvbi5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjIuMicsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMi4yJ1xuICAgIH0sXG4gICAgJzIwMCc6IHtcbiAgICAgICAgJ2NvZGUnOiAyMDAsXG4gICAgICAgICd0ZXh0JzogJ09LJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgcmVxdWVzdCBoYXMgc3VjY2VlZGVkLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuMy4xJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjEnXG4gICAgfSxcbiAgICAnMjAxJzoge1xuICAgICAgICAnY29kZSc6IDIwMSxcbiAgICAgICAgJ3RleHQnOiAnQ3JlYXRlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHJlcXVlc3QgaGFzIGJlZW4gZnVsZmlsbGVkIGFuZCBoYXMgcmVzdWx0ZWQgaW4gb25lIG9yIG1vcmUgbmV3IHJlc291cmNlcyBiZWluZyBjcmVhdGVkLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuMy4yJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjInXG4gICAgfSxcbiAgICAnMjAyJzoge1xuICAgICAgICAnY29kZSc6IDIwMixcbiAgICAgICAgJ3RleHQnOiAnQWNjZXB0ZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSByZXF1ZXN0IGhhcyBiZWVuIGFjY2VwdGVkIGZvciBwcm9jZXNzaW5nLCBidXQgdGhlIHByb2Nlc3NpbmcgaGFzIG5vdCBiZWVuIGNvbXBsZXRlZC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjMuMycsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMy4zJ1xuICAgIH0sXG4gICAgJzIwMyc6IHtcbiAgICAgICAgJ2NvZGUnOiAyMDMsXG4gICAgICAgICd0ZXh0JzogJ05vbi1BdXRob3JpdGF0aXZlIEluZm9ybWF0aW9uJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgcmVxdWVzdCB3YXMgc3VjY2Vzc2Z1bCBidXQgdGhlIGVuY2xvc2VkIHBheWxvYWQgaGFzIGJlZW4gbW9kaWZpZWQgZnJvbSB0aGF0IG9mIHRoZSBvcmlnaW4gc2VydmVyXFwncyAyMDAgKE9LKSByZXNwb25zZSBieSBhIHRyYW5zZm9ybWluZyBwcm94eS5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjMuNCcsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMy40J1xuICAgIH0sXG4gICAgJzIwNCc6IHtcbiAgICAgICAgJ2NvZGUnOiAyMDQsXG4gICAgICAgICd0ZXh0JzogJ05vIENvbnRlbnQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgaGFzIHN1Y2Nlc3NmdWxseSBmdWxmaWxsZWQgdGhlIHJlcXVlc3QgYW5kIHRoYXQgdGhlcmUgaXMgbm8gYWRkaXRpb25hbCBjb250ZW50IHRvIHNlbmQgaW4gdGhlIHJlc3BvbnNlIHBheWxvYWQgYm9keS5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjMuNScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMy41J1xuICAgIH0sXG4gICAgJzIwNSc6IHtcbiAgICAgICAgJ2NvZGUnOiAyMDUsXG4gICAgICAgICd0ZXh0JzogJ1Jlc2V0IENvbnRlbnQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgaGFzIGZ1bGZpbGxlZCB0aGUgcmVxdWVzdCBhbmQgZGVzaXJlcyB0aGF0IHRoZSB1c2VyIGFnZW50IHJlc2V0IHRoZSBcXFwiZG9jdW1lbnQgdmlld1xcXCIsIHdoaWNoIGNhdXNlZCB0aGUgcmVxdWVzdCB0byBiZSBzZW50LCB0byBpdHMgb3JpZ2luYWwgc3RhdGUgYXMgcmVjZWl2ZWQgZnJvbSB0aGUgb3JpZ2luIHNlcnZlci5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjMuNicsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMy42J1xuICAgIH0sXG4gICAgJzIwNic6IHtcbiAgICAgICAgJ2NvZGUnOiAyMDYsXG4gICAgICAgICd0ZXh0JzogJ1BhcnRpYWwgQ29udGVudCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBpcyBzdWNjZXNzZnVsbHkgZnVsZmlsbGluZyBhIHJhbmdlIHJlcXVlc3QgZm9yIHRoZSB0YXJnZXQgcmVzb3VyY2UgYnkgdHJhbnNmZXJyaW5nIG9uZSBvciBtb3JlIHBhcnRzIG9mIHRoZSBzZWxlY3RlZCByZXByZXNlbnRhdGlvbiB0aGF0IGNvcnJlc3BvbmQgdG8gdGhlIHNhdGlzZmlhYmxlIHJhbmdlcyBmb3VuZCBpbiB0aGUgcmVxdWVzdHNcXCdzIFJhbmdlIGhlYWRlciBmaWVsZC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMyM0LjEnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzMjc2VjdGlvbi00LjEnXG4gICAgfSxcbiAgICAnMzAwJzoge1xuICAgICAgICAnY29kZSc6IDMwMCxcbiAgICAgICAgJ3RleHQnOiAnTXVsdGlwbGUgQ2hvaWNlcycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHRhcmdldCByZXNvdXJjZSBoYXMgbW9yZSB0aGFuIG9uZSByZXByZXNlbnRhdGlvbiwgZWFjaCB3aXRoIGl0cyBvd24gbW9yZSBzcGVjaWZpYyBpZGVudGlmaWVyLCBhbmQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGFsdGVybmF0aXZlcyBpcyBiZWluZyBwcm92aWRlZCBzbyB0aGF0IHRoZSB1c2VyIChvciB1c2VyIGFnZW50KSBjYW4gc2VsZWN0IGEgcHJlZmVycmVkIHJlcHJlc2VudGF0aW9uIGJ5IHJlZGlyZWN0aW5nIGl0cyByZXF1ZXN0IHRvIG9uZSBvciBtb3JlIG9mIHRob3NlIGlkZW50aWZpZXJzLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNC4xJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi40LjEnXG4gICAgfSxcbiAgICAnMzAxJzoge1xuICAgICAgICAnY29kZSc6IDMwMSxcbiAgICAgICAgJ3RleHQnOiAnTW92ZWQgUGVybWFuZW50bHknLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSB0YXJnZXQgcmVzb3VyY2UgaGFzIGJlZW4gYXNzaWduZWQgYSBuZXcgcGVybWFuZW50IFVSSSBhbmQgYW55IGZ1dHVyZSByZWZlcmVuY2VzIHRvIHRoaXMgcmVzb3VyY2Ugb3VnaHQgdG8gdXNlIG9uZSBvZiB0aGUgZW5jbG9zZWQgVVJJcy5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjQuMicsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNC4yJ1xuICAgIH0sXG4gICAgJzMwMic6IHtcbiAgICAgICAgJ2NvZGUnOiAzMDIsXG4gICAgICAgICd0ZXh0JzogJ0ZvdW5kJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgdGFyZ2V0IHJlc291cmNlIHJlc2lkZXMgdGVtcG9yYXJpbHkgdW5kZXIgYSBkaWZmZXJlbnQgVVJJLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNC4zJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi40LjMnXG4gICAgfSxcbiAgICAnMzAzJzoge1xuICAgICAgICAnY29kZSc6IDMwMyxcbiAgICAgICAgJ3RleHQnOiAnU2VlIE90aGVyJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGlzIHJlZGlyZWN0aW5nIHRoZSB1c2VyIGFnZW50IHRvIGEgZGlmZmVyZW50IHJlc291cmNlLCBhcyBpbmRpY2F0ZWQgYnkgYSBVUkkgaW4gdGhlIExvY2F0aW9uIGhlYWRlciBmaWVsZCwgdGhhdCBpcyBpbnRlbmRlZCB0byBwcm92aWRlIGFuIGluZGlyZWN0IHJlc3BvbnNlIHRvIHRoZSBvcmlnaW5hbCByZXF1ZXN0LlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNC40JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi40LjQnXG4gICAgfSxcbiAgICAnMzA0Jzoge1xuICAgICAgICAnY29kZSc6IDMwNCxcbiAgICAgICAgJ3RleHQnOiAnTm90IE1vZGlmaWVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJBIGNvbmRpdGlvbmFsIEdFVCByZXF1ZXN0IGhhcyBiZWVuIHJlY2VpdmVkIGFuZCB3b3VsZCBoYXZlIHJlc3VsdGVkIGluIGEgMjAwIChPSykgcmVzcG9uc2UgaWYgaXQgd2VyZSBub3QgZm9yIHRoZSBmYWN0IHRoYXQgdGhlIGNvbmRpdGlvbiBoYXMgZXZhbHVhdGVkIHRvIGZhbHNlLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMyIzQuMScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMiNzZWN0aW9uLTQuMSdcbiAgICB9LFxuICAgICczMDUnOiB7XG4gICAgICAgICdjb2RlJzogMzA1LFxuICAgICAgICAndGV4dCc6ICdVc2UgUHJveHknLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnKmRlcHJlY2F0ZWQqJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjQuNScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNC41J1xuICAgIH0sXG4gICAgJzMwNyc6IHtcbiAgICAgICAgJ2NvZGUnOiAzMDcsXG4gICAgICAgICd0ZXh0JzogJ1RlbXBvcmFyeSBSZWRpcmVjdCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHRhcmdldCByZXNvdXJjZSByZXNpZGVzIHRlbXBvcmFyaWx5IHVuZGVyIGEgZGlmZmVyZW50IFVSSSBhbmQgdGhlIHVzZXIgYWdlbnQgTVVTVCBOT1QgY2hhbmdlIHRoZSByZXF1ZXN0IG1ldGhvZCBpZiBpdCBwZXJmb3JtcyBhbiBhdXRvbWF0aWMgcmVkaXJlY3Rpb24gdG8gdGhhdCBVUkkuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi40LjcnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjQuNydcbiAgICB9LFxuICAgICc0MDAnOiB7XG4gICAgICAgICdjb2RlJzogNDAwLFxuICAgICAgICAndGV4dCc6ICdCYWQgUmVxdWVzdCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBjYW5ub3Qgb3Igd2lsbCBub3QgcHJvY2VzcyB0aGUgcmVxdWVzdCBiZWNhdXNlIHRoZSByZWNlaXZlZCBzeW50YXggaXMgaW52YWxpZCwgbm9uc2Vuc2ljYWwsIG9yIGV4Y2VlZHMgc29tZSBsaW1pdGF0aW9uIG9uIHdoYXQgdGhlIHNlcnZlciBpcyB3aWxsaW5nIHRvIHByb2Nlc3MuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjEnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMSdcbiAgICB9LFxuICAgICc0MDEnOiB7XG4gICAgICAgICdjb2RlJzogNDAxLFxuICAgICAgICAndGV4dCc6ICdVbmF1dGhvcml6ZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSByZXF1ZXN0IGhhcyBub3QgYmVlbiBhcHBsaWVkIGJlY2F1c2UgaXQgbGFja3MgdmFsaWQgYXV0aGVudGljYXRpb24gY3JlZGVudGlhbHMgZm9yIHRoZSB0YXJnZXQgcmVzb3VyY2UuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzUjNi4zLjEnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzUjc2VjdGlvbi0zLjEnXG4gICAgfSxcbiAgICAnNDAyJzoge1xuICAgICAgICAnY29kZSc6IDQwMixcbiAgICAgICAgJ3RleHQnOiAnUGF5bWVudCBSZXF1aXJlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICcqcmVzZXJ2ZWQqJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMicsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4yJ1xuICAgIH0sXG4gICAgJzQwMyc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MDMsXG4gICAgICAgICd0ZXh0JzogJ0ZvcmJpZGRlbicsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciB1bmRlcnN0b29kIHRoZSByZXF1ZXN0IGJ1dCByZWZ1c2VzIHRvIGF1dGhvcml6ZSBpdC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMycsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4zJ1xuICAgIH0sXG4gICAgJzQwNCc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MDQsXG4gICAgICAgICd0ZXh0JzogJ05vdCBGb3VuZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIG9yaWdpbiBzZXJ2ZXIgZGlkIG5vdCBmaW5kIGEgY3VycmVudCByZXByZXNlbnRhdGlvbiBmb3IgdGhlIHRhcmdldCByZXNvdXJjZSBvciBpcyBub3Qgd2lsbGluZyB0byBkaXNjbG9zZSB0aGF0IG9uZSBleGlzdHMuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjQnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuNCdcbiAgICB9LFxuICAgICc0MDUnOiB7XG4gICAgICAgICdjb2RlJzogNDA1LFxuICAgICAgICAndGV4dCc6ICdNZXRob2QgTm90IEFsbG93ZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBtZXRob2Qgc3BlY2lmaWVkIGluIHRoZSByZXF1ZXN0LWxpbmUgaXMga25vd24gYnkgdGhlIG9yaWdpbiBzZXJ2ZXIgYnV0IG5vdCBzdXBwb3J0ZWQgYnkgdGhlIHRhcmdldCByZXNvdXJjZS5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuNScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS41J1xuICAgIH0sXG4gICAgJzQwNic6IHtcbiAgICAgICAgJ2NvZGUnOiA0MDYsXG4gICAgICAgICd0ZXh0JzogJ05vdCBBY2NlcHRhYmxlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgdGFyZ2V0IHJlc291cmNlIGRvZXMgbm90IGhhdmUgYSBjdXJyZW50IHJlcHJlc2VudGF0aW9uIHRoYXQgd291bGQgYmUgYWNjZXB0YWJsZSB0byB0aGUgdXNlciBhZ2VudCwgYWNjb3JkaW5nIHRvIHRoZSBwcm9hY3RpdmUgbmVnb3RpYXRpb24gaGVhZGVyIGZpZWxkcyByZWNlaXZlZCBpbiB0aGUgcmVxdWVzdCwgYW5kIHRoZSBzZXJ2ZXIgaXMgdW53aWxsaW5nIHRvIHN1cHBseSBhIGRlZmF1bHQgcmVwcmVzZW50YXRpb24uXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjYnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuNidcbiAgICB9LFxuICAgICc0MDcnOiB7XG4gICAgICAgICdjb2RlJzogNDA3LFxuICAgICAgICAndGV4dCc6ICdQcm94eSBBdXRoZW50aWNhdGlvbiBSZXF1aXJlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIGNsaWVudCBuZWVkcyB0byBhdXRoZW50aWNhdGUgaXRzZWxmIGluIG9yZGVyIHRvIHVzZSBhIHByb3h5LlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuMy4yJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjInXG4gICAgfSxcbiAgICAnNDA4Jzoge1xuICAgICAgICAnY29kZSc6IDQwOCxcbiAgICAgICAgJ3RleHQnOiAnUmVxdWVzdCBUaW1lb3V0JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGRpZCBub3QgcmVjZWl2ZSBhIGNvbXBsZXRlIHJlcXVlc3QgbWVzc2FnZSB3aXRoaW4gdGhlIHRpbWUgdGhhdCBpdCB3YXMgcHJlcGFyZWQgdG8gd2FpdC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuNycsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS43J1xuICAgIH0sXG4gICAgJzQwOSc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MDksXG4gICAgICAgICd0ZXh0JzogJ0NvbmZsaWN0JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgcmVxdWVzdCBjb3VsZCBub3QgYmUgY29tcGxldGVkIGR1ZSB0byBhIGNvbmZsaWN0IHdpdGggdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHJlc291cmNlLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS44JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjgnXG4gICAgfSxcbiAgICAnNDEwJzoge1xuICAgICAgICAnY29kZSc6IDQxMCxcbiAgICAgICAgJ3RleHQnOiAnR29uZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiQWNjZXNzIHRvIHRoZSB0YXJnZXQgcmVzb3VyY2UgaXMgbm8gbG9uZ2VyIGF2YWlsYWJsZSBhdCB0aGUgb3JpZ2luIHNlcnZlciBhbmQgdGhhdCB0aGlzIGNvbmRpdGlvbiBpcyBsaWtlbHkgdG8gYmUgcGVybWFuZW50LlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS45JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjknXG4gICAgfSxcbiAgICAnNDExJzoge1xuICAgICAgICAnY29kZSc6IDQxMSxcbiAgICAgICAgJ3RleHQnOiAnTGVuZ3RoIFJlcXVpcmVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIHJlZnVzZXMgdG8gYWNjZXB0IHRoZSByZXF1ZXN0IHdpdGhvdXQgYSBkZWZpbmVkIENvbnRlbnQtTGVuZ3RoLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS4xMCcsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4xMCdcbiAgICB9LFxuICAgICc0MTInOiB7XG4gICAgICAgICdjb2RlJzogNDEyLFxuICAgICAgICAndGV4dCc6ICdQcmVjb25kaXRpb24gRmFpbGVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJPbmUgb3IgbW9yZSBwcmVjb25kaXRpb25zIGdpdmVuIGluIHRoZSByZXF1ZXN0IGhlYWRlciBmaWVsZHMgZXZhbHVhdGVkIHRvIGZhbHNlIHdoZW4gdGVzdGVkIG9uIHRoZSBzZXJ2ZXIuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzIjNC4yJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMyI3NlY3Rpb24tNC4yJ1xuICAgIH0sXG4gICAgJzQxMyc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MTMsXG4gICAgICAgICd0ZXh0JzogJ1BheWxvYWQgVG9vIExhcmdlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGlzIHJlZnVzaW5nIHRvIHByb2Nlc3MgYSByZXF1ZXN0IGJlY2F1c2UgdGhlIHJlcXVlc3QgcGF5bG9hZCBpcyBsYXJnZXIgdGhhbiB0aGUgc2VydmVyIGlzIHdpbGxpbmcgb3IgYWJsZSB0byBwcm9jZXNzLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS4xMScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4xMSdcbiAgICB9LFxuICAgICc0MTQnOiB7XG4gICAgICAgICdjb2RlJzogNDE0LFxuICAgICAgICAndGV4dCc6ICdVUkkgVG9vIExvbmcnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgaXMgcmVmdXNpbmcgdG8gc2VydmljZSB0aGUgcmVxdWVzdCBiZWNhdXNlIHRoZSByZXF1ZXN0LXRhcmdldCBpcyBsb25nZXIgdGhhbiB0aGUgc2VydmVyIGlzIHdpbGxpbmcgdG8gaW50ZXJwcmV0LlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS4xMicsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4xMidcbiAgICB9LFxuICAgICc0MTUnOiB7XG4gICAgICAgICdjb2RlJzogNDE1LFxuICAgICAgICAndGV4dCc6ICdVbnN1cHBvcnRlZCBNZWRpYSBUeXBlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgb3JpZ2luIHNlcnZlciBpcyByZWZ1c2luZyB0byBzZXJ2aWNlIHRoZSByZXF1ZXN0IGJlY2F1c2UgdGhlIHBheWxvYWQgaXMgaW4gYSBmb3JtYXQgbm90IHN1cHBvcnRlZCBieSB0aGUgdGFyZ2V0IHJlc291cmNlIGZvciB0aGlzIG1ldGhvZC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMTMnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMTMnXG4gICAgfSxcbiAgICAnNDE2Jzoge1xuICAgICAgICAnY29kZSc6IDQxNixcbiAgICAgICAgJ3RleHQnOiAnUmFuZ2UgTm90IFNhdGlzZmlhYmxlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJOb25lIG9mIHRoZSByYW5nZXMgaW4gdGhlIHJlcXVlc3RcXCdzIFJhbmdlIGhlYWRlciBmaWVsZCBvdmVybGFwIHRoZSBjdXJyZW50IGV4dGVudCBvZiB0aGUgc2VsZWN0ZWQgcmVzb3VyY2Ugb3IgdGhhdCB0aGUgc2V0IG9mIHJhbmdlcyByZXF1ZXN0ZWQgaGFzIGJlZW4gcmVqZWN0ZWQgZHVlIHRvIGludmFsaWQgcmFuZ2VzIG9yIGFuIGV4Y2Vzc2l2ZSByZXF1ZXN0IG9mIHNtYWxsIG9yIG92ZXJsYXBwaW5nIHJhbmdlcy5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMyM0LjQnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzMjc2VjdGlvbi00LjQnXG4gICAgfSxcbiAgICAnNDE3Jzoge1xuICAgICAgICAnY29kZSc6IDQxNyxcbiAgICAgICAgJ3RleHQnOiAnRXhwZWN0YXRpb24gRmFpbGVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgZXhwZWN0YXRpb24gZ2l2ZW4gaW4gdGhlIHJlcXVlc3RcXCdzIEV4cGVjdCBoZWFkZXIgZmllbGQgY291bGQgbm90IGJlIG1ldCBieSBhdCBsZWFzdCBvbmUgb2YgdGhlIGluYm91bmQgc2VydmVycy5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMTQnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMTQnXG4gICAgfSxcbiAgICAnNDE4Jzoge1xuICAgICAgICAnY29kZSc6IDQxOCxcbiAgICAgICAgJ3RleHQnOiAnSVxcJ20gYSB0ZWFwb3QnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIjE5ODggQXByaWwgRm9vbHMgSm9rZS4gUmV0dXJuZWQgYnkgdGVhIHBvdHMgcmVxdWVzdGVkIHRvIGJyZXcgY29mZmVlLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkMgMjMyNCcsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzIzMjQnXG4gICAgfSxcbiAgICAnNDI2Jzoge1xuICAgICAgICAnY29kZSc6IDQyNixcbiAgICAgICAgJ3RleHQnOiAnVXBncmFkZSBSZXF1aXJlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciByZWZ1c2VzIHRvIHBlcmZvcm0gdGhlIHJlcXVlc3QgdXNpbmcgdGhlIGN1cnJlbnQgcHJvdG9jb2wgYnV0IG1pZ2h0IGJlIHdpbGxpbmcgdG8gZG8gc28gYWZ0ZXIgdGhlIGNsaWVudCB1cGdyYWRlcyB0byBhIGRpZmZlcmVudCBwcm90b2NvbC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMTUnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMTUnXG4gICAgfSxcbiAgICAnNTAwJzoge1xuICAgICAgICAnY29kZSc6IDUwMCxcbiAgICAgICAgJ3RleHQnOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGVuY291bnRlcmVkIGFuIHVuZXhwZWN0ZWQgY29uZGl0aW9uIHRoYXQgcHJldmVudGVkIGl0IGZyb20gZnVsZmlsbGluZyB0aGUgcmVxdWVzdC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjYuMScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNi4xJ1xuICAgIH0sXG4gICAgJzUwMSc6IHtcbiAgICAgICAgJ2NvZGUnOiA1MDEsXG4gICAgICAgICd0ZXh0JzogJ05vdCBJbXBsZW1lbnRlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSBmdW5jdGlvbmFsaXR5IHJlcXVpcmVkIHRvIGZ1bGZpbGwgdGhlIHJlcXVlc3QuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi42LjInLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjYuMidcbiAgICB9LFxuICAgICc1MDInOiB7XG4gICAgICAgICdjb2RlJzogNTAyLFxuICAgICAgICAndGV4dCc6ICdCYWQgR2F0ZXdheScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciwgd2hpbGUgYWN0aW5nIGFzIGEgZ2F0ZXdheSBvciBwcm94eSwgcmVjZWl2ZWQgYW4gaW52YWxpZCByZXNwb25zZSBmcm9tIGFuIGluYm91bmQgc2VydmVyIGl0IGFjY2Vzc2VkIHdoaWxlIGF0dGVtcHRpbmcgdG8gZnVsZmlsbCB0aGUgcmVxdWVzdC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjYuMycsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNi4zJ1xuICAgIH0sXG4gICAgJzUwMyc6IHtcbiAgICAgICAgJ2NvZGUnOiA1MDMsXG4gICAgICAgICd0ZXh0JzogJ1NlcnZpY2UgVW5hdmFpbGFibGUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgaXMgY3VycmVudGx5IHVuYWJsZSB0byBoYW5kbGUgdGhlIHJlcXVlc3QgZHVlIHRvIGEgdGVtcG9yYXJ5IG92ZXJsb2FkIG9yIHNjaGVkdWxlZCBtYWludGVuYW5jZSwgd2hpY2ggd2lsbCBsaWtlbHkgYmUgYWxsZXZpYXRlZCBhZnRlciBzb21lIGRlbGF5LlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNi40JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi42LjQnXG4gICAgfSxcbiAgICAnNTA0Jzoge1xuICAgICAgICAnY29kZSc6IDUwNCxcbiAgICAgICAgJ3RleHQnOiAnR2F0ZXdheSBUaW1lLW91dCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciwgd2hpbGUgYWN0aW5nIGFzIGEgZ2F0ZXdheSBvciBwcm94eSwgZGlkIG5vdCByZWNlaXZlIGEgdGltZWx5IHJlc3BvbnNlIGZyb20gYW4gdXBzdHJlYW0gc2VydmVyIGl0IG5lZWRlZCB0byBhY2Nlc3MgaW4gb3JkZXIgdG8gY29tcGxldGUgdGhlIHJlcXVlc3QuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi42LjUnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjYuNSdcbiAgICB9LFxuICAgICc1MDUnOiB7XG4gICAgICAgICdjb2RlJzogNTA1LFxuICAgICAgICAndGV4dCc6ICdIVFRQIFZlcnNpb24gTm90IFN1cHBvcnRlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBkb2VzIG5vdCBzdXBwb3J0LCBvciByZWZ1c2VzIHRvIHN1cHBvcnQsIHRoZSBwcm90b2NvbCB2ZXJzaW9uIHRoYXQgd2FzIHVzZWQgaW4gdGhlIHJlcXVlc3QgbWVzc2FnZS5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjYuNicsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNi42J1xuICAgIH0sXG4gICAgJzEwMic6IHtcbiAgICAgICAgJ2NvZGUnOiAxMDIsXG4gICAgICAgICd0ZXh0JzogJ1Byb2Nlc3NpbmcnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIkFuIGludGVyaW0gcmVzcG9uc2UgdG8gaW5mb3JtIHRoZSBjbGllbnQgdGhhdCB0aGUgc2VydmVyIGhhcyBhY2NlcHRlZCB0aGUgY29tcGxldGUgcmVxdWVzdCwgYnV0IGhhcyBub3QgeWV0IGNvbXBsZXRlZCBpdC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNTIxOCMxMC4xJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNTE4I3NlY3Rpb24tMTAuMSdcbiAgICB9LFxuICAgICcyMDcnOiB7XG4gICAgICAgICdjb2RlJzogMjA3LFxuICAgICAgICAndGV4dCc6ICdNdWx0aS1TdGF0dXMnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlN0YXR1cyBmb3IgbXVsdGlwbGUgaW5kZXBlbmRlbnQgb3BlcmF0aW9ucy5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNTIxOCMxMC4yJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNTE4I3NlY3Rpb24tMTAuMidcbiAgICB9LFxuICAgICcyMjYnOiB7XG4gICAgICAgICdjb2RlJzogMjI2LFxuICAgICAgICAndGV4dCc6ICdJTSBVc2VkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGhhcyBmdWxmaWxsZWQgYSBHRVQgcmVxdWVzdCBmb3IgdGhlIHJlc291cmNlLCBhbmQgdGhlIHJlc3BvbnNlIGlzIGEgcmVwcmVzZW50YXRpb24gb2YgdGhlIHJlc3VsdCBvZiBvbmUgb3IgbW9yZSBpbnN0YW5jZS1tYW5pcHVsYXRpb25zIGFwcGxpZWQgdG8gdGhlIGN1cnJlbnQgaW5zdGFuY2UuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzMyMjkjMTAuNC4xJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzMjI5I3NlY3Rpb24tMTAuNC4xJ1xuICAgIH0sXG4gICAgJzMwOCc6IHtcbiAgICAgICAgJ2NvZGUnOiAzMDgsXG4gICAgICAgICd0ZXh0JzogJ1Blcm1hbmVudCBSZWRpcmVjdCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHRhcmdldCByZXNvdXJjZSBoYXMgYmVlbiBhc3NpZ25lZCBhIG5ldyBwZXJtYW5lbnQgVVJJIGFuZCBhbnkgZnV0dXJlIHJlZmVyZW5jZXMgdG8gdGhpcyByZXNvdXJjZSBTSE9VTEQgdXNlIG9uZSBvZiB0aGUgcmV0dXJuZWQgVVJJcy4gWy4uLl0gVGhpcyBzdGF0dXMgY29kZSBpcyBzaW1pbGFyIHRvIDMwMSBNb3ZlZCBQZXJtYW5lbnRseSAoU2VjdGlvbiA3LjMuMiBvZiByZmM3MjMxKSwgZXhjZXB0IHRoYXQgaXQgZG9lcyBub3QgYWxsb3cgcmV3cml0aW5nIHRoZSByZXF1ZXN0IG1ldGhvZCBmcm9tIFBPU1QgdG8gR0VULlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjM4JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjM4J1xuICAgIH0sXG4gICAgJzQyMic6IHtcbiAgICAgICAgJ2NvZGUnOiA0MjIsXG4gICAgICAgICd0ZXh0JzogJ1VucHJvY2Vzc2FibGUgRW50aXR5JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIHVuZGVyc3RhbmRzIHRoZSBjb250ZW50IHR5cGUgb2YgdGhlIHJlcXVlc3QgZW50aXR5IChoZW5jZSBhIDQxNShVbnN1cHBvcnRlZCBNZWRpYSBUeXBlKSBzdGF0dXMgY29kZSBpcyBpbmFwcHJvcHJpYXRlKSwgYW5kIHRoZSBzeW50YXggb2YgdGhlIHJlcXVlc3QgZW50aXR5IGlzIGNvcnJlY3QgKHRodXMgYSA0MDAgKEJhZCBSZXF1ZXN0KSBzdGF0dXMgY29kZSBpcyBpbmFwcHJvcHJpYXRlKSBidXQgd2FzIHVuYWJsZSB0byBwcm9jZXNzIHRoZSBjb250YWluZWQgaW5zdHJ1Y3Rpb25zLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM1MjE4IzEwLjMnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzI1MTgjc2VjdGlvbi0xMC4zJ1xuICAgIH0sXG4gICAgJzQyMyc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MjMsXG4gICAgICAgICd0ZXh0JzogJ0xvY2tlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNvdXJjZSBvciBkZXN0aW5hdGlvbiByZXNvdXJjZSBvZiBhIG1ldGhvZCBpcyBsb2NrZWQuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzUyMTgjMTAuNCcsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjUxOCNzZWN0aW9uLTEwLjQnXG4gICAgfSxcbiAgICAnNDI0Jzoge1xuICAgICAgICAnY29kZSc6IDQyNCxcbiAgICAgICAgJ3RleHQnOiAnRmFpbGVkIERlcGVuZGVuY3knLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBtZXRob2QgY291bGQgbm90IGJlIHBlcmZvcm1lZCBvbiB0aGUgcmVzb3VyY2UgYmVjYXVzZSB0aGUgcmVxdWVzdGVkIGFjdGlvbiBkZXBlbmRlZCBvbiBhbm90aGVyIGFjdGlvbiBhbmQgdGhhdCBhY3Rpb24gZmFpbGVkLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM1MjE4IzEwLjUnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzI1MTgjc2VjdGlvbi0xMC41J1xuICAgIH0sXG4gICAgJzQyOCc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MjgsXG4gICAgICAgICd0ZXh0JzogJ1ByZWNvbmRpdGlvbiBSZXF1aXJlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIG9yaWdpbiBzZXJ2ZXIgcmVxdWlyZXMgdGhlIHJlcXVlc3QgdG8gYmUgY29uZGl0aW9uYWwuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzY1ODUjMycsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjU4NSNzZWN0aW9uLTMnXG4gICAgfSxcbiAgICAnNDI5Jzoge1xuICAgICAgICAnY29kZSc6IDQyOSxcbiAgICAgICAgJ3RleHQnOiAnVG9vIE1hbnkgUmVxdWVzdHMnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSB1c2VyIGhhcyBzZW50IHRvbyBtYW55IHJlcXVlc3RzIGluIGEgZ2l2ZW4gYW1vdW50IG9mIHRpbWUgKFxcXCJyYXRlIGxpbWl0aW5nXFxcIikuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzY1ODUjNCcsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjU4NSNzZWN0aW9uLTQnXG4gICAgfSxcbiAgICAnNDMxJzoge1xuICAgICAgICAnY29kZSc6IDQzMSxcbiAgICAgICAgJ3RleHQnOiAnUmVxdWVzdCBIZWFkZXIgRmllbGRzIFRvbyBMYXJnZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBpcyB1bndpbGxpbmcgdG8gcHJvY2VzcyB0aGUgcmVxdWVzdCBiZWNhdXNlIGl0cyBoZWFkZXIgZmllbGRzIGFyZSB0b28gbGFyZ2UuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzY1ODUjNScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjU4NSNzZWN0aW9uLTUnXG4gICAgfSxcbiAgICAnNDUxJzoge1xuICAgICAgICAnY29kZSc6IDQ1MSxcbiAgICAgICAgJ3RleHQnOiAnVW5hdmFpbGFibGUgRm9yIExlZ2FsIFJlYXNvbnMnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgaXMgZGVueWluZyBhY2Nlc3MgdG8gdGhlIHJlc291cmNlIGluIHJlc3BvbnNlIHRvIGEgbGVnYWwgZGVtYW5kLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdkcmFmdC1pZXRmLWh0dHBiaXMtbGVnYWxseS1yZXN0cmljdGVkLXN0YXR1cycsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvZHJhZnQtaWV0Zi1odHRwYmlzLWxlZ2FsbHktcmVzdHJpY3RlZC1zdGF0dXMnXG4gICAgfSxcbiAgICAnNTA2Jzoge1xuICAgICAgICAnY29kZSc6IDUwNixcbiAgICAgICAgJ3RleHQnOiAnVmFyaWFudCBBbHNvIE5lZ290aWF0ZXMnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgaGFzIGFuIGludGVybmFsIGNvbmZpZ3VyYXRpb24gZXJyb3I6IHRoZSBjaG9zZW4gdmFyaWFudCByZXNvdXJjZSBpcyBjb25maWd1cmVkIHRvIGVuZ2FnZSBpbiB0cmFuc3BhcmVudCBjb250ZW50IG5lZ290aWF0aW9uIGl0c2VsZiwgYW5kIGlzIHRoZXJlZm9yZSBub3QgYSBwcm9wZXIgZW5kIHBvaW50IGluIHRoZSBuZWdvdGlhdGlvbiBwcm9jZXNzLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkMyMjk1IzguMScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjI5NSNzZWN0aW9uLTguMSdcbiAgICB9LFxuICAgICc1MDcnOiB7XG4gICAgICAgICdjb2RlJzogNTA3LFxuICAgICAgICAndGV4dCc6ICdJbnN1ZmZpY2llbnQgU3RvcmFnZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFRoZSBtZXRob2QgY291bGQgbm90IGJlIHBlcmZvcm1lZCBvbiB0aGUgcmVzb3VyY2UgYmVjYXVzZSB0aGUgc2VydmVyIGlzIHVuYWJsZSB0byBzdG9yZSB0aGUgcmVwcmVzZW50YXRpb24gbmVlZGVkIHRvIHN1Y2Nlc3NmdWxseSBjb21wbGV0ZSB0aGUgcmVxdWVzdC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNTIxOCMxMC42JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNTE4I3NlY3Rpb24tMTAuNidcbiAgICB9LFxuICAgICc1MTEnOiB7XG4gICAgICAgICdjb2RlJzogNTExLFxuICAgICAgICAndGV4dCc6ICdOZXR3b3JrIEF1dGhlbnRpY2F0aW9uIFJlcXVpcmVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgY2xpZW50IG5lZWRzIHRvIGF1dGhlbnRpY2F0ZSB0byBnYWluIG5ldHdvcmsgYWNjZXNzLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM2NTg1IzYnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzY1ODUjc2VjdGlvbi02J1xuICAgIH1cbn07XG4vKipcbiAqIGdldCB0aGUgc3RhdHVzIHRleHQgZnJvbSBTdGF0dXNDb2RlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0dXNUZXh0KHN0YXR1cykge1xuICAgIHJldHVybiBTVEFUVVNfQ09ERV9JTkZPW3N0YXR1c10udGV4dCB8fCAnVW5rbm93biBTdGF0dXMnO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHRoZSBIdHRwIFN0YXR1cyBDb2RlIGlzIDIwMC0yOTkgKHN1Y2Nlc3MpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1N1Y2Nlc3Moc3RhdHVzKSB7IHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDsgfVxuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHR0cC1zdGF0dXMtY29kZXMuanMubWFwIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLyoqXG4qIEludGVyZmFjZSBmb3IgYSBjbGFzcyB0aGF0IGNyZWF0ZXMgYW4gaW4tbWVtb3J5IGRhdGFiYXNlXG4qXG4qIEl0cyBgY3JlYXRlRGJgIG1ldGhvZCBjcmVhdGVzIGEgaGFzaCBvZiBuYW1lZCBjb2xsZWN0aW9ucyB0aGF0IHJlcHJlc2VudHMgdGhlIGRhdGFiYXNlXG4qXG4qIEZvciBtYXhpbXVtIGZsZXhpYmlsaXR5LCB0aGUgc2VydmljZSBtYXkgZGVmaW5lIEhUVFAgbWV0aG9kIG92ZXJyaWRlcy5cbiogU3VjaCBtZXRob2RzIG11c3QgbWF0Y2ggdGhlIHNwZWxsaW5nIG9mIGFuIEhUVFAgbWV0aG9kIGluIGxvd2VyIGNhc2UgKGUuZywgXCJnZXRcIikuXG4qIElmIGEgcmVxdWVzdCBoYXMgYSBtYXRjaGluZyBtZXRob2QsIGl0IHdpbGwgYmUgY2FsbGVkIGFzIGluXG4qIGBnZXQoaW5mbzogcmVxdWVzdEluZm8sIGRiOiB7fSlgIHdoZXJlIGBkYmAgaXMgdGhlIGRhdGFiYXNlIG9iamVjdCBkZXNjcmliZWQgYWJvdmUuXG4qL1xudmFyIEluTWVtb3J5RGJTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBJbk1lbW9yeURiU2VydmljZSgpIHtcbiAgICB9XG4gICAgcmV0dXJuIEluTWVtb3J5RGJTZXJ2aWNlO1xufSgpKTtcbmV4cG9ydCB7IEluTWVtb3J5RGJTZXJ2aWNlIH07XG4vKipcbiogSW50ZXJmYWNlIGZvciBJbk1lbW9yeUJhY2tlbmQgY29uZmlndXJhdGlvbiBvcHRpb25zXG4qL1xudmFyIEluTWVtb3J5QmFja2VuZENvbmZpZ0FyZ3MgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEluTWVtb3J5QmFja2VuZENvbmZpZ0FyZ3MoKSB7XG4gICAgfVxuICAgIHJldHVybiBJbk1lbW9yeUJhY2tlbmRDb25maWdBcmdzO1xufSgpKTtcbmV4cG9ydCB7IEluTWVtb3J5QmFja2VuZENvbmZpZ0FyZ3MgfTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLyoqXG4qICBJbk1lbW9yeUJhY2tlbmRTZXJ2aWNlIGNvbmZpZ3VyYXRpb24gb3B0aW9uc1xuKiAgVXNhZ2U6XG4qICAgIEluTWVtb3J5V2ViQXBpTW9kdWxlLmZvclJvb3QoSW5NZW1IZXJvU2VydmljZSwge2RlbGF5OiA2MDB9KVxuKlxuKiAgb3IgaWYgcHJvdmlkaW5nIHNlcGFyYXRlbHk6XG4qICAgIHByb3ZpZGUoSW5NZW1vcnlCYWNrZW5kQ29uZmlnLCB7dXNlVmFsdWU6IHtkZWxheTogNjAwfX0pLFxuKi9cbnZhciBJbk1lbW9yeUJhY2tlbmRDb25maWcgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEluTWVtb3J5QmFja2VuZENvbmZpZyhjb25maWcpIHtcbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gdm9pZCAwKSB7IGNvbmZpZyA9IHt9OyB9XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xuICAgICAgICAgICAgLy8gZGVmYXVsdCBjb25maWc6XG4gICAgICAgICAgICBjYXNlU2Vuc2l0aXZlU2VhcmNoOiBmYWxzZSxcbiAgICAgICAgICAgIGRhdGFFbmNhcHN1bGF0aW9uOiB0cnVlLFxuICAgICAgICAgICAgZGVsYXk6IDUwMCxcbiAgICAgICAgICAgIGRlbGV0ZTQwNDogZmFsc2UsXG4gICAgICAgICAgICBwYXNzVGhydVVua25vd25Vcmw6IGZhbHNlLFxuICAgICAgICAgICAgcG9zdDIwNDogdHJ1ZSxcbiAgICAgICAgICAgIHBvc3Q0MDk6IGZhbHNlLFxuICAgICAgICAgICAgcHV0MjA0OiB0cnVlLFxuICAgICAgICAgICAgcHV0NDA0OiBmYWxzZSxcbiAgICAgICAgICAgIGFwaUJhc2U6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGhvc3Q6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHJvb3RQYXRoOiB1bmRlZmluZWQgLy8gZGVmYXVsdCB2YWx1ZSBpcyBhY3R1YWxseSBzZXQgaW4gSW5NZW1vcnlCYWNrZW5kU2VydmljZSBjdG9yXG4gICAgICAgIH0sIGNvbmZpZyk7XG4gICAgfVxuICAgIHJldHVybiBJbk1lbW9yeUJhY2tlbmRDb25maWc7XG59KCkpO1xuZXhwb3J0IHsgSW5NZW1vcnlCYWNrZW5kQ29uZmlnIH07XG5Jbk1lbW9yeUJhY2tlbmRDb25maWcuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IEluamVjdGFibGUgfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbkluTWVtb3J5QmFja2VuZENvbmZpZy5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICB7IHR5cGU6IEluTWVtb3J5QmFja2VuZENvbmZpZ0FyZ3MsIH0sXG5dOyB9O1xuLyoqIFJldHVybiBpbmZvcm1hdGlvbiAoVXJpSW5mbykgYWJvdXQgYSBVUkkgICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VVcmkoc3RyKSB7XG4gICAgLy8gQWRhcHRlZCBmcm9tIHBhcnNldXJpIHBhY2thZ2UgLSBodHRwOi8vYmxvZy5zdGV2ZW5sZXZpdGhhbi5jb20vYXJjaGl2ZXMvcGFyc2V1cmlcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgdmFyIFVSTF9SRUdFWCA9IC9eKD86KD8hW146QF0rOlteOkBcXC9dKkApKFteOlxcLz8jLl0rKTopPyg/OlxcL1xcLyk/KCg/OigoW146QF0qKSg/OjooW146QF0qKSk/KT9AKT8oW146XFwvPyNdKikoPzo6KFxcZCopKT8pKCgoXFwvKD86W14/I10oPyFbXj8jXFwvXSpcXC5bXj8jXFwvLl0rKD86Wz8jXXwkKSkpKlxcLz8pPyhbXj8jXFwvXSopKSg/OlxcPyhbXiNdKikpPyg/OiMoLiopKT8pLztcbiAgICB2YXIgbSA9IFVSTF9SRUdFWC5leGVjKHN0cik7XG4gICAgdmFyIHVyaSA9IHtcbiAgICAgICAgc291cmNlOiAnJyxcbiAgICAgICAgcHJvdG9jb2w6ICcnLFxuICAgICAgICBhdXRob3JpdHk6ICcnLFxuICAgICAgICB1c2VySW5mbzogJycsXG4gICAgICAgIHVzZXI6ICcnLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgIGhvc3Q6ICcnLFxuICAgICAgICBwb3J0OiAnJyxcbiAgICAgICAgcmVsYXRpdmU6ICcnLFxuICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgZGlyZWN0b3J5OiAnJyxcbiAgICAgICAgZmlsZTogJycsXG4gICAgICAgIHF1ZXJ5OiAnJyxcbiAgICAgICAgYW5jaG9yOiAnJ1xuICAgIH07XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh1cmkpO1xuICAgIHZhciBpID0ga2V5cy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgICB1cmlba2V5c1tpXV0gPSBtW2ldIHx8ICcnO1xuICAgIH1cbiAgICByZXR1cm4gdXJpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRyYWlsaW5nU2xhc2gocGF0aCkge1xuICAgIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbnRlcmZhY2VzLmpzLm1hcCIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcy9CZWhhdmlvclN1YmplY3QnO1xuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzL29ic2VydmFibGUvb2YnO1xuaW1wb3J0IHsgZnJvbVByb21pc2UgfSBmcm9tICdyeGpzL29ic2VydmFibGUvZnJvbVByb21pc2UnO1xuaW1wb3J0IHsgaXNQcm9taXNlIH0gZnJvbSAncnhqcy91dGlsL2lzUHJvbWlzZSc7XG5pbXBvcnQgeyBjb25jYXRNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9yL2NvbmNhdE1hcCc7XG5pbXBvcnQgeyBkZWxheSB9IGZyb20gJ3J4anMvb3BlcmF0b3IvZGVsYXknO1xuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9yL2ZpcnN0JztcbmltcG9ydCB7IGdldFN0YXR1c1RleHQsIGlzU3VjY2VzcywgU1RBVFVTIH0gZnJvbSAnLi9odHRwLXN0YXR1cy1jb2Rlcyc7XG5pbXBvcnQgeyBJbk1lbW9yeUJhY2tlbmRDb25maWcsIHBhcnNlVXJpLCByZW1vdmVUcmFpbGluZ1NsYXNoIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgaW4tbWVtb3J5IHdlYiBhcGkgYmFjay1lbmRzXG4gKiBTaW11bGF0ZSB0aGUgYmVoYXZpb3Igb2YgYSBSRVNUeSB3ZWIgYXBpXG4gKiBiYWNrZWQgYnkgdGhlIHNpbXBsZSBpbi1tZW1vcnkgZGF0YSBzdG9yZSBwcm92aWRlZCBieSB0aGUgaW5qZWN0ZWQgYEluTWVtb3J5RGJTZXJ2aWNlYCBzZXJ2aWNlLlxuICogQ29uZm9ybXMgbW9zdGx5IHRvIGJlaGF2aW9yIGRlc2NyaWJlZCBoZXJlOlxuICogaHR0cDovL3d3dy5yZXN0YXBpdHV0b3JpYWwuY29tL2xlc3NvbnMvaHR0cG1ldGhvZHMuaHRtbFxuICovXG52YXIgQmFja2VuZFNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJhY2tlbmRTZXJ2aWNlKGluTWVtRGJTZXJ2aWNlLCBjb25maWcpIHtcbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gdm9pZCAwKSB7IGNvbmZpZyA9IHt9OyB9XG4gICAgICAgIHRoaXMuaW5NZW1EYlNlcnZpY2UgPSBpbk1lbURiU2VydmljZTtcbiAgICAgICAgdGhpcy5jb25maWcgPSBuZXcgSW5NZW1vcnlCYWNrZW5kQ29uZmlnKCk7XG4gICAgICAgIHRoaXMucmVxdWVzdEluZm9VdGlscyA9IHRoaXMuZ2V0UmVxdWVzdEluZm9VdGlscygpO1xuICAgICAgICB2YXIgbG9jID0gdGhpcy5nZXRMb2NhdGlvbignLycpO1xuICAgICAgICB0aGlzLmNvbmZpZy5ob3N0ID0gbG9jLmhvc3Q7IC8vIGRlZmF1bHQgdG8gYXBwIHdlYiBzZXJ2ZXIgaG9zdFxuICAgICAgICB0aGlzLmNvbmZpZy5yb290UGF0aCA9IGxvYy5wYXRoOyAvLyBkZWZhdWx0IHRvIHBhdGggd2hlbiBhcHAgaXMgc2VydmVkIChlLmcuJy8nKVxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuY29uZmlnLCBjb25maWcpO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLCBcImRiUmVhZHlcIiwge1xuICAgICAgICAvLy8vICBwcm90ZWN0ZWQgLy8vLy9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZGJSZWFkeVN1YmplY3QpIHtcbiAgICAgICAgICAgICAgICAvLyBmaXJzdCB0aW1lIHRoZSBzZXJ2aWNlIGlzIGNhbGxlZC5cbiAgICAgICAgICAgICAgICB0aGlzLmRiUmVhZHlTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldERiKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmlyc3QuY2FsbCh0aGlzLmRiUmVhZHlTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpLCBmdW5jdGlvbiAocikgeyByZXR1cm4gcjsgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIFByb2Nlc3MgUmVxdWVzdCBhbmQgcmV0dXJuIGFuIE9ic2VydmFibGUgb2YgSHR0cCBSZXNwb25zZSBvYmplY3RcbiAgICAgKiBpbiB0aGUgbWFubmVyIG9mIGEgUkVTVHkgd2ViIGFwaS5cbiAgICAgKlxuICAgICAqIEV4cGVjdCBVUkkgcGF0dGVybiBpbiB0aGUgZm9ybSA6YmFzZS86Y29sbGVjdGlvbk5hbWUvOmlkP1xuICAgICAqIEV4YW1wbGVzOlxuICAgICAqICAgLy8gZm9yIHN0b3JlIHdpdGggYSAnY3VzdG9tZXJzJyBjb2xsZWN0aW9uXG4gICAgICogICBHRVQgYXBpL2N1c3RvbWVycyAgICAgICAgICAvLyBhbGwgY3VzdG9tZXJzXG4gICAgICogICBHRVQgYXBpL2N1c3RvbWVycy80MiAgICAgICAvLyB0aGUgY2hhcmFjdGVyIHdpdGggaWQ9NDJcbiAgICAgKiAgIEdFVCBhcGkvY3VzdG9tZXJzP25hbWU9XmogIC8vICdqJyBpcyBhIHJlZ2V4OyByZXR1cm5zIGN1c3RvbWVycyB3aG9zZSBuYW1lIHN0YXJ0cyB3aXRoICdqJyBvciAnSidcbiAgICAgKiAgIEdFVCBhcGkvY3VzdG9tZXJzLmpzb24vNDIgIC8vIGlnbm9yZXMgdGhlIFwiLmpzb25cIlxuICAgICAqXG4gICAgICogQWxzbyBhY2NlcHRzIGRpcmVjdCBjb21tYW5kcyB0byB0aGUgc2VydmljZSBpbiB3aGljaCB0aGUgbGFzdCBzZWdtZW50IG9mIHRoZSBhcGlCYXNlIGlzIHRoZSB3b3JkIFwiY29tbWFuZHNcIlxuICAgICAqIEV4YW1wbGVzOlxuICAgICAqICAgICBQT1NUIGNvbW1hbmRzL3Jlc2V0RGIsXG4gICAgICogICAgIEdFVC9QT1NUIGNvbW1hbmRzL2NvbmZpZyAtIGdldCBvciAocmUpc2V0IHRoZSBjb25maWdcbiAgICAgKlxuICAgICAqICAgSFRUUCBvdmVycmlkZXM6XG4gICAgICogICAgIElmIHRoZSBpbmplY3RlZCBpbk1lbURiU2VydmljZSBkZWZpbmVzIGFuIEhUVFAgbWV0aG9kIChsb3dlcmNhc2UpXG4gICAgICogICAgIFRoZSByZXF1ZXN0IGlzIGZvcndhcmRlZCB0byB0aGF0IG1ldGhvZCBhcyBpblxuICAgICAqICAgICBgaW5NZW1EYlNlcnZpY2UuZ2V0KHJlcXVlc3RJbmZvKWBcbiAgICAgKiAgICAgd2hpY2ggbXVzdCByZXR1cm4gZWl0aGVyIGFuIE9ic2VydmFibGUgb2YgdGhlIHJlc3BvbnNlIHR5cGVcbiAgICAgKiAgICAgZm9yIHRoaXMgaHR0cCBsaWJyYXJ5IG9yIG51bGx8dW5kZWZpbmVkICh3aGljaCBtZWFucyBcImtlZXAgcHJvY2Vzc2luZ1wiKS5cbiAgICAgKi9cbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuaGFuZGxlUmVxdWVzdCA9IGZ1bmN0aW9uIChyZXEpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gIGhhbmRsZSB0aGUgcmVxdWVzdCB3aGVuIHRoZXJlIGlzIGFuIGluLW1lbW9yeSBkYXRhYmFzZVxuICAgICAgICByZXR1cm4gY29uY2F0TWFwLmNhbGwodGhpcy5kYlJlYWR5LCBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5oYW5kbGVSZXF1ZXN0XyhyZXEpOyB9KTtcbiAgICB9O1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5oYW5kbGVSZXF1ZXN0XyA9IGZ1bmN0aW9uIChyZXEpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHVybCA9IHJlcS51cmw7XG4gICAgICAgIC8vIFRyeSBvdmVycmlkZSBwYXJzZXJcbiAgICAgICAgLy8gSWYgbm8gb3ZlcnJpZGUgcGFyc2VyIG9yIGl0IHJldHVybnMgbm90aGluZywgdXNlIGRlZmF1bHQgcGFyc2VyXG4gICAgICAgIHZhciBwYXJzZXIgPSB0aGlzLmJpbmQoJ3BhcnNlUmVxdWVzdFVybCcpO1xuICAgICAgICB2YXIgcGFyc2VkID0gKHBhcnNlciAmJiBwYXJzZXIodXJsLCB0aGlzLnJlcXVlc3RJbmZvVXRpbHMpKSB8fFxuICAgICAgICAgICAgdGhpcy5wYXJzZVJlcXVlc3RVcmwodXJsKTtcbiAgICAgICAgdmFyIGNvbGxlY3Rpb25OYW1lID0gcGFyc2VkLmNvbGxlY3Rpb25OYW1lO1xuICAgICAgICB2YXIgY29sbGVjdGlvbiA9IHRoaXMuZGJbY29sbGVjdGlvbk5hbWVdO1xuICAgICAgICB2YXIgcmVxSW5mbyA9IHtcbiAgICAgICAgICAgIHJlcTogcmVxLFxuICAgICAgICAgICAgYXBpQmFzZTogcGFyc2VkLmFwaUJhc2UsXG4gICAgICAgICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uLFxuICAgICAgICAgICAgY29sbGVjdGlvbk5hbWU6IGNvbGxlY3Rpb25OYW1lLFxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5jcmVhdGVIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcbiAgICAgICAgICAgIGlkOiB0aGlzLnBhcnNlSWQoY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUsIHBhcnNlZC5pZCksXG4gICAgICAgICAgICBtZXRob2Q6IHRoaXMuZ2V0UmVxdWVzdE1ldGhvZChyZXEpLFxuICAgICAgICAgICAgcXVlcnk6IHBhcnNlZC5xdWVyeSxcbiAgICAgICAgICAgIHJlc291cmNlVXJsOiBwYXJzZWQucmVzb3VyY2VVcmwsXG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIHV0aWxzOiB0aGlzLnJlcXVlc3RJbmZvVXRpbHNcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHJlc09wdGlvbnM7XG4gICAgICAgIGlmICgvY29tbWFuZHNcXC8/JC9pLnRlc3QocmVxSW5mby5hcGlCYXNlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tbWFuZHMocmVxSW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1ldGhvZEludGVyY2VwdG9yID0gdGhpcy5iaW5kKHJlcUluZm8ubWV0aG9kKTtcbiAgICAgICAgaWYgKG1ldGhvZEludGVyY2VwdG9yKSB7XG4gICAgICAgICAgICAvLyBJbk1lbW9yeURiU2VydmljZSBpbnRlcmNlcHRzIHRoaXMgSFRUUCBtZXRob2QuXG4gICAgICAgICAgICAvLyBpZiBpbnRlcmNlcHRvciBwcm9kdWNlZCBhIHJlc3BvbnNlLCByZXR1cm4gaXQuXG4gICAgICAgICAgICAvLyBlbHNlIEluTWVtb3J5RGJTZXJ2aWNlIGNob3NlIG5vdCB0byBpbnRlcmNlcHQ7IGNvbnRpbnVlIHByb2Nlc3NpbmcuXG4gICAgICAgICAgICB2YXIgaW50ZXJjZXB0b3JSZXNwb25zZSA9IG1ldGhvZEludGVyY2VwdG9yKHJlcUluZm8pO1xuICAgICAgICAgICAgaWYgKGludGVyY2VwdG9yUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW50ZXJjZXB0b3JSZXNwb25zZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kYltjb2xsZWN0aW9uTmFtZV0pIHtcbiAgICAgICAgICAgIC8vIHJlcXVlc3QgaXMgZm9yIGEga25vd24gY29sbGVjdGlvbiBvZiB0aGUgSW5NZW1vcnlEYlNlcnZpY2VcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVJlc3BvbnNlJChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5jb2xsZWN0aW9uSGFuZGxlcihyZXFJbmZvKTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLnBhc3NUaHJ1VW5rbm93blVybCkge1xuICAgICAgICAgICAgLy8gdW5rbm93biBjb2xsZWN0aW9uOyBwYXNzIHJlcXVlc3QgdGhydSB0byBhIFwicmVhbFwiIGJhY2tlbmQuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRQYXNzVGhydUJhY2tlbmQoKS5oYW5kbGUocmVxKTtcbiAgICAgICAgfVxuICAgICAgICAvLyA0MDQgLSBjYW4ndCBoYW5kbGUgdGhpcyByZXF1ZXN0XG4gICAgICAgIHJlc09wdGlvbnMgPSB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHVybCwgU1RBVFVTLk5PVF9GT1VORCwgXCJDb2xsZWN0aW9uICdcIiArIGNvbGxlY3Rpb25OYW1lICsgXCInIG5vdCBmb3VuZFwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUmVzcG9uc2UkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc09wdGlvbnM7IH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQWRkIGNvbmZpZ3VyZWQgZGVsYXkgdG8gcmVzcG9uc2Ugb2JzZXJ2YWJsZSB1bmxlc3MgZGVsYXkgPT09IDBcbiAgICAgKi9cbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuYWRkRGVsYXkgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgdmFyIGQgPSB0aGlzLmNvbmZpZy5kZWxheTtcbiAgICAgICAgcmV0dXJuIGQgPT09IDAgPyByZXNwb25zZSA6IGRlbGF5LmNhbGwocmVzcG9uc2UsIGQgfHwgNTAwKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFwcGx5IHF1ZXJ5L3NlYXJjaCBwYXJhbWV0ZXJzIGFzIGEgZmlsdGVyIG92ZXIgdGhlIGNvbGxlY3Rpb25cbiAgICAgKiBUaGlzIGltcGwgb25seSBzdXBwb3J0cyBSZWdFeHAgcXVlcmllcyBvbiBzdHJpbmcgcHJvcGVydGllcyBvZiB0aGUgY29sbGVjdGlvblxuICAgICAqIEFORHMgdGhlIGNvbmRpdGlvbnMgdG9nZXRoZXJcbiAgICAgKi9cbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuYXBwbHlRdWVyeSA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBxdWVyeSkge1xuICAgICAgICAvLyBleHRyYWN0IGZpbHRlcmluZyBjb25kaXRpb25zIC0ge3Byb3BlcnR5TmFtZSwgUmVnRXhwcykgLSBmcm9tIHF1ZXJ5L3NlYXJjaCBwYXJhbWV0ZXJzXG4gICAgICAgIHZhciBjb25kaXRpb25zID0gW107XG4gICAgICAgIHZhciBjYXNlU2Vuc2l0aXZlID0gdGhpcy5jb25maWcuY2FzZVNlbnNpdGl2ZVNlYXJjaCA/IHVuZGVmaW5lZCA6ICdpJztcbiAgICAgICAgcXVlcnkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIG5hbWUpIHtcbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2goZnVuY3Rpb24gKHYpIHsgcmV0dXJuIGNvbmRpdGlvbnMucHVzaCh7IG5hbWU6IG5hbWUsIHJ4OiBuZXcgUmVnRXhwKGRlY29kZVVSSSh2KSwgY2FzZVNlbnNpdGl2ZSkgfSk7IH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGxlbiA9IGNvbmRpdGlvbnMubGVuZ3RoO1xuICAgICAgICBpZiAoIWxlbikge1xuICAgICAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gICAgICAgIH1cbiAgICAgICAgLy8gQU5EIHRoZSBSZWdFeHAgY29uZGl0aW9uc1xuICAgICAgICByZXR1cm4gY29sbGVjdGlvbi5maWx0ZXIoZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgICAgdmFyIG9rID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBpID0gbGVuO1xuICAgICAgICAgICAgd2hpbGUgKG9rICYmIGkpIHtcbiAgICAgICAgICAgICAgICBpIC09IDE7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmQgPSBjb25kaXRpb25zW2ldO1xuICAgICAgICAgICAgICAgIG9rID0gY29uZC5yeC50ZXN0KHJvd1tjb25kLm5hbWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvaztcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgYSBtZXRob2QgZnJvbSB0aGUgYEluTWVtb3J5RGJTZXJ2aWNlYCAoaWYgaXQgZXhpc3RzKSwgYm91bmQgdG8gdGhhdCBzZXJ2aWNlXG4gICAgICovXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAobWV0aG9kTmFtZSkge1xuICAgICAgICB2YXIgZm4gPSB0aGlzLmluTWVtRGJTZXJ2aWNlW21ldGhvZE5hbWVdO1xuICAgICAgICByZXR1cm4gZm4gPyBmbi5iaW5kKHRoaXMuaW5NZW1EYlNlcnZpY2UpIDogdW5kZWZpbmVkO1xuICAgIH07XG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmJvZGlmeSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBib2R5ID0gdGhpcy5jbG9uZShkYXRhKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmRhdGFFbmNhcHN1bGF0aW9uID8geyBkYXRhOiBib2R5IH0gOiBib2R5O1xuICAgIH07XG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIH07XG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmNvbGxlY3Rpb25IYW5kbGVyID0gZnVuY3Rpb24gKHJlcUluZm8pIHtcbiAgICAgICAgLy8gY29uc3QgcmVxID0gcmVxSW5mby5yZXE7XG4gICAgICAgIHZhciByZXNPcHRpb25zO1xuICAgICAgICBzd2l0Y2ggKHJlcUluZm8ubWV0aG9kKSB7XG4gICAgICAgICAgICBjYXNlICdnZXQnOlxuICAgICAgICAgICAgICAgIHJlc09wdGlvbnMgPSB0aGlzLmdldChyZXFJbmZvKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Bvc3QnOlxuICAgICAgICAgICAgICAgIHJlc09wdGlvbnMgPSB0aGlzLnBvc3QocmVxSW5mbyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwdXQnOlxuICAgICAgICAgICAgICAgIHJlc09wdGlvbnMgPSB0aGlzLnB1dChyZXFJbmZvKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICAgICAgICAgICAgcmVzT3B0aW9ucyA9IHRoaXMuZGVsZXRlKHJlcUluZm8pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXNPcHRpb25zID0gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyhyZXFJbmZvLnVybCwgU1RBVFVTLk1FVEhPRF9OT1RfQUxMT1dFRCwgJ01ldGhvZCBub3QgYWxsb3dlZCcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGBpbk1lbURiU2VydmljZS5yZXNwb25zZUludGVyY2VwdG9yYCBleGlzdHMsIGxldCBpdCBtb3JwaCB0aGUgcmVzcG9uc2Ugb3B0aW9uc1xuICAgICAgICB2YXIgaW50ZXJjZXB0b3IgPSB0aGlzLmJpbmQoJ3Jlc3BvbnNlSW50ZXJjZXB0b3InKTtcbiAgICAgICAgcmV0dXJuIGludGVyY2VwdG9yID8gaW50ZXJjZXB0b3IocmVzT3B0aW9ucywgcmVxSW5mbykgOiByZXNPcHRpb25zO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ29tbWFuZHMgcmVjb25maWd1cmUgdGhlIGluLW1lbW9yeSB3ZWIgYXBpIHNlcnZpY2Ugb3IgZXh0cmFjdCBpbmZvcm1hdGlvbiBmcm9tIGl0LlxuICAgICAqIENvbW1hbmRzIGlnbm9yZSB0aGUgbGF0ZW5jeSBkZWxheSBhbmQgcmVzcG9uZCBBU0FQLlxuICAgICAqXG4gICAgICogV2hlbiB0aGUgbGFzdCBzZWdtZW50IG9mIHRoZSBgYXBpQmFzZWAgcGF0aCBpcyBcImNvbW1hbmRzXCIsXG4gICAgICogdGhlIGBjb2xsZWN0aW9uTmFtZWAgaXMgdGhlIGNvbW1hbmQuXG4gICAgICpcbiAgICAgKiBFeGFtcGxlIFVSTHM6XG4gICAgICogICBjb21tYW5kcy9yZXNldGRiIChQT1NUKSAvLyBSZXNldCB0aGUgXCJkYXRhYmFzZVwiIHRvIGl0cyBvcmlnaW5hbCBzdGF0ZVxuICAgICAqICAgY29tbWFuZHMvY29uZmlnIChHRVQpICAgLy8gUmV0dXJuIHRoaXMgc2VydmljZSdzIGNvbmZpZyBvYmplY3RcbiAgICAgKiAgIGNvbW1hbmRzL2NvbmZpZyAoUE9TVCkgIC8vIFVwZGF0ZSB0aGUgY29uZmlnIChlLmcuIHRoZSBkZWxheSlcbiAgICAgKlxuICAgICAqIFVzYWdlOlxuICAgICAqICAgaHR0cC5wb3N0KCdjb21tYW5kcy9yZXNldGRiJywgdW5kZWZpbmVkKTtcbiAgICAgKiAgIGh0dHAuZ2V0KCdjb21tYW5kcy9jb25maWcnKTtcbiAgICAgKiAgIGh0dHAucG9zdCgnY29tbWFuZHMvY29uZmlnJywgJ3tcImRlbGF5XCI6MTAwMH0nKTtcbiAgICAgKi9cbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuY29tbWFuZHMgPSBmdW5jdGlvbiAocmVxSW5mbykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgY29tbWFuZCA9IHJlcUluZm8uY29sbGVjdGlvbk5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdmFyIG1ldGhvZCA9IHJlcUluZm8ubWV0aG9kO1xuICAgICAgICB2YXIgcmVzT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHVybDogcmVxSW5mby51cmxcbiAgICAgICAgfTtcbiAgICAgICAgc3dpdGNoIChjb21tYW5kKSB7XG4gICAgICAgICAgICBjYXNlICdyZXNldGRiJzpcbiAgICAgICAgICAgICAgICByZXNPcHRpb25zLnN0YXR1cyA9IFNUQVRVUy5OT19DT05URU5UO1xuICAgICAgICAgICAgICAgIHJldHVybiBjb25jYXRNYXAuY2FsbCh0aGlzLnJlc2V0RGIocmVxSW5mbyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmNyZWF0ZVJlc3BvbnNlJChmdW5jdGlvbiAoKSB7IHJldHVybiByZXNPcHRpb25zOyB9LCBmYWxzZSAvKiBubyBsYXRlbmN5IGRlbGF5ICovKTsgfSk7XG4gICAgICAgICAgICBjYXNlICdjb25maWcnOlxuICAgICAgICAgICAgICAgIGlmIChtZXRob2QgPT09ICdnZXQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc09wdGlvbnMuc3RhdHVzID0gU1RBVFVTLk9LO1xuICAgICAgICAgICAgICAgICAgICByZXNPcHRpb25zLmJvZHkgPSB0aGlzLmNsb25lKHRoaXMuY29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gYW55IG90aGVyIEhUVFAgbWV0aG9kIGlzIGFzc3VtZWQgdG8gYmUgYSBjb25maWcgdXBkYXRlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYm9keSA9IHRoaXMuZ2V0SnNvbkJvZHkocmVxSW5mby5yZXEpO1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuY29uZmlnLCBib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXNzVGhydUJhY2tlbmQgPSB1bmRlZmluZWQ7IC8vIHJlLWNyZWF0ZSB3aGVuIG5lZWRlZFxuICAgICAgICAgICAgICAgICAgICByZXNPcHRpb25zLnN0YXR1cyA9IFNUQVRVUy5OT19DT05URU5UO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmVzT3B0aW9ucyA9IHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnMocmVxSW5mby51cmwsIFNUQVRVUy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsIFwiVW5rbm93biBjb21tYW5kIFxcXCJcIiArIGNvbW1hbmQgKyBcIlxcXCJcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUmVzcG9uc2UkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc09wdGlvbnM7IH0sIGZhbHNlIC8qIG5vIGxhdGVuY3kgZGVsYXkgKi8pO1xuICAgIH07XG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zID0gZnVuY3Rpb24gKHVybCwgc3RhdHVzLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBib2R5OiB7IGVycm9yOiBcIlwiICsgbWVzc2FnZSB9LFxuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmNyZWF0ZUhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxuICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXNcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGNvbGQgcmVzcG9uc2UgT2JzZXJ2YWJsZSBmcm9tIGEgZmFjdG9yeSBmb3IgUmVzcG9uc2VPcHRpb25zXG4gICAgICogQHBhcmFtIHJlc09wdGlvbnNGYWN0b3J5IC0gY3JlYXRlcyBSZXNwb25zZU9wdGlvbnMgd2hlbiBvYnNlcnZhYmxlIGlzIHN1YnNjcmliZWRcbiAgICAgKiBAcGFyYW0gd2l0aERlbGF5IC0gaWYgdHJ1ZSAoZGVmYXVsdCksIGFkZCBzaW11bGF0ZWQgbGF0ZW5jeSBkZWxheSBmcm9tIGNvbmZpZ3VyYXRpb25cbiAgICAgKi9cbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuY3JlYXRlUmVzcG9uc2UkID0gZnVuY3Rpb24gKHJlc09wdGlvbnNGYWN0b3J5LCB3aXRoRGVsYXkpIHtcbiAgICAgICAgaWYgKHdpdGhEZWxheSA9PT0gdm9pZCAwKSB7IHdpdGhEZWxheSA9IHRydWU7IH1cbiAgICAgICAgdmFyIHJlc09wdGlvbnMkID0gdGhpcy5jcmVhdGVSZXNwb25zZU9wdGlvbnMkKHJlc09wdGlvbnNGYWN0b3J5KTtcbiAgICAgICAgdmFyIHJlc3AkID0gdGhpcy5jcmVhdGVSZXNwb25zZSRmcm9tUmVzcG9uc2VPcHRpb25zJChyZXNPcHRpb25zJCk7XG4gICAgICAgIHJldHVybiB3aXRoRGVsYXkgPyB0aGlzLmFkZERlbGF5KHJlc3AkKSA6IHJlc3AkO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgY29sZCBPYnNlcnZhYmxlIG9mIFJlc3BvbnNlT3B0aW9ucy5cbiAgICAgKiBAcGFyYW0gcmVzT3B0aW9uc0ZhY3RvcnkgLSBjcmVhdGVzIFJlc3BvbnNlT3B0aW9ucyB3aGVuIG9ic2VydmFibGUgaXMgc3Vic2NyaWJlZFxuICAgICAqL1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5jcmVhdGVSZXNwb25zZU9wdGlvbnMkID0gZnVuY3Rpb24gKHJlc09wdGlvbnNGYWN0b3J5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAocmVzcG9uc2VPYnNlcnZlcikge1xuICAgICAgICAgICAgdmFyIHJlc09wdGlvbnM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc09wdGlvbnMgPSByZXNPcHRpb25zRmFjdG9yeSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVyciA9IGVycm9yLm1lc3NhZ2UgfHwgZXJyb3I7XG4gICAgICAgICAgICAgICAgcmVzT3B0aW9ucyA9IF90aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKCcnLCBTVEFUVVMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLCBcIlwiICsgZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzdGF0dXMgPSByZXNPcHRpb25zLnN0YXR1cztcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzT3B0aW9ucy5zdGF0dXNUZXh0ID0gZ2V0U3RhdHVzVGV4dChzdGF0dXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHsgfVxuICAgICAgICAgICAgaWYgKGlzU3VjY2VzcyhzdGF0dXMpKSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2VPYnNlcnZlci5uZXh0KHJlc09wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlT2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlT2JzZXJ2ZXIuZXJyb3IocmVzT3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyB9OyAvLyB1bnN1YnNjcmliZSBmdW5jdGlvblxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSBfYS5jb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSA9IF9hLmNvbGxlY3Rpb25OYW1lLCBoZWFkZXJzID0gX2EuaGVhZGVycywgaWQgPSBfYS5pZCwgdXJsID0gX2EudXJsO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xuICAgICAgICBpZiAoaWQgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5OT1RfRk9VTkQsIFwiTWlzc2luZyBcXFwiXCIgKyBjb2xsZWN0aW9uTmFtZSArIFwiXFxcIiBpZFwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXhpc3RzID0gdGhpcy5yZW1vdmVCeUlkKGNvbGxlY3Rpb24sIGlkKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgICAgICBzdGF0dXM6IChleGlzdHMgfHwgIXRoaXMuY29uZmlnLmRlbGV0ZTQwNCkgPyBTVEFUVVMuTk9fQ09OVEVOVCA6IFNUQVRVUy5OT1RfRk9VTkRcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEZpbmQgZmlyc3QgaW5zdGFuY2Ugb2YgaXRlbSBpbiBjb2xsZWN0aW9uIGJ5IGBpdGVtLmlkYFxuICAgICAqIEBwYXJhbSBjb2xsZWN0aW9uXG4gICAgICogQHBhcmFtIGlkXG4gICAgICovXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmZpbmRCeUlkID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGlkKSB7XG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uLmZpbmQoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0uaWQgPT09IGlkOyB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIHRoZSBuZXh0IGF2YWlsYWJsZSBpZCBmb3IgaXRlbSBpbiB0aGlzIGNvbGxlY3Rpb25cbiAgICAgKiBVc2UgbWV0aG9kIGZyb20gYGluTWVtRGJTZXJ2aWNlYCBpZiBpdCBleGlzdHMgYW5kIHJldHVybnMgYSB2YWx1ZSxcbiAgICAgKiBlbHNlIGRlbGVnYXRlcyB0byBgZ2VuSWREZWZhdWx0YC5cbiAgICAgKiBAcGFyYW0gY29sbGVjdGlvbiAtIGNvbGxlY3Rpb24gb2YgaXRlbXMgd2l0aCBgaWRgIGtleSBwcm9wZXJ0eVxuICAgICAqL1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5nZW5JZCA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSkge1xuICAgICAgICB2YXIgZ2VuSWQgPSB0aGlzLmJpbmQoJ2dlbklkJyk7XG4gICAgICAgIGlmIChnZW5JZCkge1xuICAgICAgICAgICAgdmFyIGlkID0gZ2VuSWQoY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUpO1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcbiAgICAgICAgICAgIGlmIChpZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VuSWREZWZhdWx0KGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERlZmF1bHQgZ2VuZXJhdG9yIG9mIHRoZSBuZXh0IGF2YWlsYWJsZSBpZCBmb3IgaXRlbSBpbiB0aGlzIGNvbGxlY3Rpb25cbiAgICAgKiBUaGlzIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gd29ya3Mgb25seSBmb3IgbnVtZXJpYyBpZHMuXG4gICAgICogQHBhcmFtIGNvbGxlY3Rpb24gLSBjb2xsZWN0aW9uIG9mIGl0ZW1zIHdpdGggYGlkYCBrZXkgcHJvcGVydHlcbiAgICAgKiBAcGFyYW0gY29sbGVjdGlvbk5hbWUgLSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uXG4gICAgICovXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmdlbklkRGVmYXVsdCA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNDb2xsZWN0aW9uSWROdW1lcmljKGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ29sbGVjdGlvbiAnXCIgKyBjb2xsZWN0aW9uTmFtZSArIFwiJyBpZCB0eXBlIGlzIG5vbi1udW1lcmljIG9yIHVua25vd24uIENhbiBvbmx5IGdlbmVyYXRlIG51bWVyaWMgaWRzLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbWF4SWQgPSAwO1xuICAgICAgICBjb2xsZWN0aW9uLnJlZHVjZShmdW5jdGlvbiAocHJldiwgaXRlbSkge1xuICAgICAgICAgICAgbWF4SWQgPSBNYXRoLm1heChtYXhJZCwgdHlwZW9mIGl0ZW0uaWQgPT09ICdudW1iZXInID8gaXRlbS5pZCA6IG1heElkKTtcbiAgICAgICAgfSwgdW5kZWZpbmVkKTtcbiAgICAgICAgcmV0dXJuIG1heElkICsgMTtcbiAgICB9O1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSBfYS5jb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSA9IF9hLmNvbGxlY3Rpb25OYW1lLCBoZWFkZXJzID0gX2EuaGVhZGVycywgaWQgPSBfYS5pZCwgcXVlcnkgPSBfYS5xdWVyeSwgdXJsID0gX2EudXJsO1xuICAgICAgICB2YXIgZGF0YSA9IGNvbGxlY3Rpb247XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzXG4gICAgICAgIGlmIChpZCAhPSB1bmRlZmluZWQgJiYgaWQgIT09ICcnKSB7XG4gICAgICAgICAgICBkYXRhID0gdGhpcy5maW5kQnlJZChjb2xsZWN0aW9uLCBpZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocXVlcnkpIHtcbiAgICAgICAgICAgIGRhdGEgPSB0aGlzLmFwcGx5UXVlcnkoY29sbGVjdGlvbiwgcXVlcnkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnModXJsLCBTVEFUVVMuTk9UX0ZPVU5ELCBcIidcIiArIGNvbGxlY3Rpb25OYW1lICsgXCInIHdpdGggaWQ9J1wiICsgaWQgKyBcIicgbm90IGZvdW5kXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBib2R5OiB0aGlzLmJvZGlmeShkYXRhKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgICAgICBzdGF0dXM6IFNUQVRVUy5PS1xuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IGxvY2F0aW9uIGluZm8gZnJvbSBhIHVybCwgZXZlbiBvbiBzZXJ2ZXIgd2hlcmUgYGRvY3VtZW50YCBpcyBub3QgZGVmaW5lZFxuICAgICAqL1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5nZXRMb2NhdGlvbiA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgaWYgKCF1cmwuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgICAgICAgICAvLyBnZXQgdGhlIGRvY3VtZW50IGlmZiBydW5uaW5nIGluIGJyb3dzZXJcbiAgICAgICAgICAgIHZhciBkb2MgPSAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgPyB1bmRlZmluZWQgOiBkb2N1bWVudDtcbiAgICAgICAgICAgIC8vIGFkZCBob3N0IGluZm8gdG8gdXJsIGJlZm9yZSBwYXJzaW5nLiAgVXNlIGEgZmFrZSBob3N0IHdoZW4gbm90IGluIGJyb3dzZXIuXG4gICAgICAgICAgICB2YXIgYmFzZSA9IGRvYyA/IGRvYy5sb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBkb2MubG9jYXRpb24uaG9zdCA6ICdodHRwOi8vZmFrZSc7XG4gICAgICAgICAgICB1cmwgPSB1cmwuc3RhcnRzV2l0aCgnLycpID8gYmFzZSArIHVybCA6IGJhc2UgKyAnLycgKyB1cmw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcnNlVXJpKHVybCk7XG4gICAgfTtcbiAgICA7XG4gICAgLyoqXG4gICAgICogZ2V0IG9yIGNyZWF0ZSB0aGUgZnVuY3Rpb24gdGhhdCBwYXNzZXMgdW5oYW5kbGVkIHJlcXVlc3RzXG4gICAgICogdGhyb3VnaCB0byB0aGUgXCJyZWFsXCIgYmFja2VuZC5cbiAgICAgKi9cbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuZ2V0UGFzc1RocnVCYWNrZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXNzVGhydUJhY2tlbmQgP1xuICAgICAgICAgICAgdGhpcy5wYXNzVGhydUJhY2tlbmQgOlxuICAgICAgICAgICAgdGhpcy5wYXNzVGhydUJhY2tlbmQgPSB0aGlzLmNyZWF0ZVBhc3NUaHJ1QmFja2VuZCgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IHV0aWxpdHkgbWV0aG9kcyBmcm9tIHRoaXMgc2VydmljZSBpbnN0YW5jZS5cbiAgICAgKiBVc2VmdWwgd2l0aGluIGFuIEhUVFAgbWV0aG9kIG92ZXJyaWRlXG4gICAgICovXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmdldFJlcXVlc3RJbmZvVXRpbHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjcmVhdGVSZXNwb25zZSQ6IHRoaXMuY3JlYXRlUmVzcG9uc2UkLmJpbmQodGhpcyksXG4gICAgICAgICAgICBmaW5kQnlJZDogdGhpcy5maW5kQnlJZC5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgaXNDb2xsZWN0aW9uSWROdW1lcmljOiB0aGlzLmlzQ29sbGVjdGlvbklkTnVtZXJpYy5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZ2V0Q29uZmlnOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5jb25maWc7IH0sXG4gICAgICAgICAgICBnZXREYjogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZGI7IH0sXG4gICAgICAgICAgICBnZXRKc29uQm9keTogdGhpcy5nZXRKc29uQm9keS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZ2V0TG9jYXRpb246IHRoaXMuZ2V0TG9jYXRpb24uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGdldFBhc3NUaHJ1QmFja2VuZDogdGhpcy5nZXRQYXNzVGhydUJhY2tlbmQuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIHBhcnNlUmVxdWVzdFVybDogdGhpcy5wYXJzZVJlcXVlc3RVcmwuYmluZCh0aGlzKSxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGlkKSB7XG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uLmZpbmRJbmRleChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS5pZCA9PT0gaWQ7IH0pO1xuICAgIH07XG4gICAgLyoqIFBhcnNlIHRoZSBpZCBhcyBhIG51bWJlci4gUmV0dXJuIG9yaWdpbmFsIHZhbHVlIGlmIG5vdCBhIG51bWJlci4gKi9cbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUucGFyc2VJZCA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSwgaWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQ29sbGVjdGlvbklkTnVtZXJpYyhjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSkpIHtcbiAgICAgICAgICAgIC8vIENhbid0IGNvbmZpcm0gdGhhdCBgaWRgIGlzIGEgbnVtZXJpYyB0eXBlOyBkb24ndCBwYXJzZSBhcyBhIG51bWJlclxuICAgICAgICAgICAgLy8gb3IgZWxzZSBgJzQyJ2AgLT4gYDQyYCBhbmQgX2dldCBieSBpZF8gZmFpbHMuXG4gICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlkTnVtID0gcGFyc2VGbG9hdChpZCk7XG4gICAgICAgIHJldHVybiBpc05hTihpZE51bSkgPyBpZCA6IGlkTnVtO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogcmV0dXJuIHRydWUgaWYgY2FuIGRldGVybWluZSB0aGF0IHRoZSBjb2xsZWN0aW9uJ3MgYGl0ZW0uaWRgIGlzIGEgbnVtYmVyXG4gICAgICogVGhpcyBpbXBsZW1lbnRhdGlvbiBjYW4ndCB0ZWxsIGlmIHRoZSBjb2xsZWN0aW9uIGlzIGVtcHR5IHNvIGl0IGFzc3VtZXMgTk9cbiAgICAgKiAqL1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5pc0NvbGxlY3Rpb25JZE51bWVyaWMgPSBmdW5jdGlvbiAoY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUpIHtcbiAgICAgICAgLy8gY29sbGVjdGlvbk5hbWUgbm90IHVzZWQgbm93IGJ1dCBvdmVycmlkZSBtaWdodCBtYWludGFpbiBjb2xsZWN0aW9uIHR5cGUgaW5mb3JtYXRpb25cbiAgICAgICAgLy8gc28gdGhhdCBpdCBjb3VsZCBrbm93IHRoZSB0eXBlIG9mIHRoZSBgaWRgIGV2ZW4gd2hlbiB0aGUgY29sbGVjdGlvbiBpcyBlbXB0eS5cbiAgICAgICAgcmV0dXJuICEhKGNvbGxlY3Rpb24gJiYgY29sbGVjdGlvblswXSkgJiYgdHlwZW9mIGNvbGxlY3Rpb25bMF0uaWQgPT09ICdudW1iZXInO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSByZXF1ZXN0IFVSTCBpbnRvIGEgYFBhcnNlZFJlcXVlc3RVcmxgIG9iamVjdC5cbiAgICAgKiBQYXJzaW5nIGRlcGVuZHMgdXBvbiBjZXJ0YWluIHZhbHVlcyBvZiBgY29uZmlnYDogYGFwaUJhc2VgLCBgaG9zdGAsIGFuZCBgdXJsUm9vdGAuXG4gICAgICpcbiAgICAgKiBDb25maWd1cmluZyB0aGUgYGFwaUJhc2VgIHlpZWxkcyB0aGUgbW9zdCBpbnRlcmVzdGluZyBjaGFuZ2VzIHRvIGBwYXJzZVJlcXVlc3RVcmxgIGJlaGF2aW9yOlxuICAgICAqICAgV2hlbiBhcGlCYXNlPXVuZGVmaW5lZCBhbmQgdXJsPSdodHRwOi8vbG9jYWxob3N0L2FwaS9jb2xsZWN0aW9uLzQyJ1xuICAgICAqICAgICB7YmFzZTogJ2FwaS8nLCBjb2xsZWN0aW9uTmFtZTogJ2NvbGxlY3Rpb24nLCBpZDogJzQyJywgLi4ufVxuICAgICAqICAgV2hlbiBhcGlCYXNlPSdzb21lL2FwaS9yb290LycgYW5kIHVybD0naHR0cDovL2xvY2FsaG9zdC9zb21lL2FwaS9yb290L2NvbGxlY3Rpb24nXG4gICAgICogICAgIHtiYXNlOiAnc29tZS9hcGkvcm9vdC8nLCBjb2xsZWN0aW9uTmFtZTogJ2NvbGxlY3Rpb24nLCBpZDogdW5kZWZpbmVkLCAuLi59XG4gICAgICogICBXaGVuIGFwaUJhc2U9Jy8nIGFuZCB1cmw9J2h0dHA6Ly9sb2NhbGhvc3QvY29sbGVjdGlvbidcbiAgICAgKiAgICAge2Jhc2U6ICcvJywgY29sbGVjdGlvbk5hbWU6ICdjb2xsZWN0aW9uJywgaWQ6IHVuZGVmaW5lZCwgLi4ufVxuICAgICAqXG4gICAgICogVGhlIGFjdHVhbCBhcGkgYmFzZSBzZWdtZW50IHZhbHVlcyBhcmUgaWdub3JlZC4gT25seSB0aGUgbnVtYmVyIG9mIHNlZ21lbnRzIG1hdHRlcnMuXG4gICAgICogVGhlIGZvbGxvd2luZyBhcGkgYmFzZSBzdHJpbmdzIGFyZSBjb25zaWRlcmVkIGlkZW50aWNhbDogJ2EvYicgfiAnc29tZS9hcGkvJyB+IGB0d28vc2VnbWVudHMnXG4gICAgICpcbiAgICAgKiBUbyByZXBsYWNlIHRoaXMgZGVmYXVsdCBtZXRob2QsIGFzc2lnbiB5b3VyIGFsdGVybmF0aXZlIHRvIHlvdXIgSW5NZW1EYlNlcnZpY2VbJ3BhcnNlUmVxdWVzdFVybCddXG4gICAgICovXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLnBhcnNlUmVxdWVzdFVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBsb2MgPSB0aGlzLmdldExvY2F0aW9uKHVybCk7XG4gICAgICAgICAgICB2YXIgZHJvcCA9IHRoaXMuY29uZmlnLnJvb3RQYXRoLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciB1cmxSb290ID0gJyc7XG4gICAgICAgICAgICBpZiAobG9jLmhvc3QgIT09IHRoaXMuY29uZmlnLmhvc3QpIHtcbiAgICAgICAgICAgICAgICAvLyB1cmwgZm9yIGEgc2VydmVyIG9uIGEgZGlmZmVyZW50IGhvc3QhXG4gICAgICAgICAgICAgICAgLy8gYXNzdW1lIGl0J3MgY29sbGVjdGlvbiBpcyBhY3R1YWxseSBoZXJlIHRvby5cbiAgICAgICAgICAgICAgICBkcm9wID0gMTsgLy8gdGhlIGxlYWRpbmcgc2xhc2hcbiAgICAgICAgICAgICAgICB1cmxSb290ID0gbG9jLnByb3RvY29sICsgJy8vJyArIGxvYy5ob3N0ICsgJy8nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHBhdGggPSBsb2MucGF0aC5zdWJzdHJpbmcoZHJvcCk7XG4gICAgICAgICAgICB2YXIgcGF0aFNlZ21lbnRzID0gcGF0aC5zcGxpdCgnLycpO1xuICAgICAgICAgICAgdmFyIHNlZ21lbnRJeCA9IDA7XG4gICAgICAgICAgICAvLyBhcGlCYXNlOiB0aGUgZnJvbnQgcGFydCBvZiB0aGUgcGF0aCBkZXZvdGVkIHRvIGdldHRpbmcgdG8gdGhlIGFwaSByb3V0ZVxuICAgICAgICAgICAgLy8gQXNzdW1lcyBmaXJzdCBwYXRoIHNlZ21lbnQgaWYgbm8gY29uZmlnLmFwaUJhc2VcbiAgICAgICAgICAgIC8vIGVsc2UgaWdub3JlcyBhcyBtYW55IHBhdGggc2VnbWVudHMgYXMgYXJlIGluIGNvbmZpZy5hcGlCYXNlXG4gICAgICAgICAgICAvLyBEb2VzIE5PVCBjYXJlIHdoYXQgdGhlIGFwaSBiYXNlIGNoYXJzIGFjdHVhbGx5IGFyZS5cbiAgICAgICAgICAgIHZhciBhcGlCYXNlID0gdm9pZCAwO1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5hcGlCYXNlID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGFwaUJhc2UgPSBwYXRoU2VnbWVudHNbc2VnbWVudEl4KytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYXBpQmFzZSA9IHJlbW92ZVRyYWlsaW5nU2xhc2godGhpcy5jb25maWcuYXBpQmFzZS50cmltKCkpO1xuICAgICAgICAgICAgICAgIGlmIChhcGlCYXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnRJeCA9IGFwaUJhc2Uuc3BsaXQoJy8nKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWdtZW50SXggPSAwOyAvLyBubyBhcGkgYmFzZSBhdCBhbGw7IHVud2lzZSBidXQgYWxsb3dlZC5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcGlCYXNlICs9ICcvJztcbiAgICAgICAgICAgIHZhciBjb2xsZWN0aW9uTmFtZSA9IHBhdGhTZWdtZW50c1tzZWdtZW50SXgrK107XG4gICAgICAgICAgICAvLyBpZ25vcmUgYW55dGhpbmcgYWZ0ZXIgYSAnLicgKGUuZy4sdGhlIFwianNvblwiIGluIFwiY3VzdG9tZXJzLmpzb25cIilcbiAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvbk5hbWUgJiYgY29sbGVjdGlvbk5hbWUuc3BsaXQoJy4nKVswXTtcbiAgICAgICAgICAgIHZhciBpZCA9IHBhdGhTZWdtZW50c1tzZWdtZW50SXgrK107XG4gICAgICAgICAgICB2YXIgcXVlcnkgPSB0aGlzLmNyZWF0ZVF1ZXJ5TWFwKGxvYy5xdWVyeSk7XG4gICAgICAgICAgICB2YXIgcmVzb3VyY2VVcmwgPSB1cmxSb290ICsgYXBpQmFzZSArIGNvbGxlY3Rpb25OYW1lICsgJy8nO1xuICAgICAgICAgICAgcmV0dXJuIHsgYXBpQmFzZTogYXBpQmFzZSwgY29sbGVjdGlvbk5hbWU6IGNvbGxlY3Rpb25OYW1lLCBpZDogaWQsIHF1ZXJ5OiBxdWVyeSwgcmVzb3VyY2VVcmw6IHJlc291cmNlVXJsIH07XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdmFyIG1zZyA9IFwidW5hYmxlIHRvIHBhcnNlIHVybCAnXCIgKyB1cmwgKyBcIic7IG9yaWdpbmFsIGVycm9yOiBcIiArIGVyci5tZXNzYWdlO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIENyZWF0ZSBlbnRpdHlcbiAgICAvLyBDYW4gdXBkYXRlIGFuIGV4aXN0aW5nIGVudGl0eSB0b28gaWYgcG9zdDQwOSBpcyBmYWxzZS5cbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUucG9zdCA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgY29sbGVjdGlvbiA9IF9hLmNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lID0gX2EuY29sbGVjdGlvbk5hbWUsIGhlYWRlcnMgPSBfYS5oZWFkZXJzLCBpZCA9IF9hLmlkLCByZXEgPSBfYS5yZXEsIHJlc291cmNlVXJsID0gX2EucmVzb3VyY2VVcmwsIHVybCA9IF9hLnVybDtcbiAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmdldEpzb25Cb2R5KHJlcSk7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzXG4gICAgICAgIGlmIChpdGVtLmlkID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpdGVtLmlkID0gaWQgfHwgdGhpcy5nZW5JZChjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVtc2cgPSBlcnIubWVzc2FnZSB8fCAnJztcbiAgICAgICAgICAgICAgICBpZiAoL2lkIHR5cGUgaXMgbm9uLW51bWVyaWMvLnRlc3QoZW1zZykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnModXJsLCBTVEFUVVMuVU5QUk9DRVNTQUJMRV9FTlRSWSwgZW1zZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHVybCwgU1RBVFVTLklOVEVSTkFMX1NFUlZFUl9FUlJPUiwgXCJGYWlsZWQgdG8gZ2VuZXJhdGUgbmV3IGlkIGZvciAnXCIgKyBjb2xsZWN0aW9uTmFtZSArIFwiJ1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlkICYmIGlkICE9PSBpdGVtLmlkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5CQURfUkVRVUVTVCwgXCJSZXF1ZXN0IGlkIGRvZXMgbm90IG1hdGNoIGl0ZW0uaWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZCA9IGl0ZW0uaWQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGV4aXN0aW5nSXggPSB0aGlzLmluZGV4T2YoY29sbGVjdGlvbiwgaWQpO1xuICAgICAgICB2YXIgYm9keSA9IHRoaXMuYm9kaWZ5KGl0ZW0pO1xuICAgICAgICBpZiAoZXhpc3RpbmdJeCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb24ucHVzaChpdGVtKTtcbiAgICAgICAgICAgIGhlYWRlcnMuc2V0KCdMb2NhdGlvbicsIHJlc291cmNlVXJsICsgJy8nICsgaWQpO1xuICAgICAgICAgICAgcmV0dXJuIHsgaGVhZGVyczogaGVhZGVycywgYm9keTogYm9keSwgc3RhdHVzOiBTVEFUVVMuQ1JFQVRFRCB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY29uZmlnLnBvc3Q0MDkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHVybCwgU1RBVFVTLkNPTkZMSUNULCBcIidcIiArIGNvbGxlY3Rpb25OYW1lICsgXCInIGl0ZW0gd2l0aCBpZD0nXCIgKyBpZCArIFwiIGV4aXN0cyBhbmQgbWF5IG5vdCBiZSB1cGRhdGVkIHdpdGggUE9TVDsgdXNlIFBVVCBpbnN0ZWFkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb25bZXhpc3RpbmdJeF0gPSBpdGVtO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLnBvc3QyMDQgP1xuICAgICAgICAgICAgICAgIHsgaGVhZGVyczogaGVhZGVycywgc3RhdHVzOiBTVEFUVVMuTk9fQ09OVEVOVCB9IDpcbiAgICAgICAgICAgICAgICB7IGhlYWRlcnM6IGhlYWRlcnMsIGJvZHk6IGJvZHksIHN0YXR1czogU1RBVFVTLk9LIH07IC8vIHN1Y2Nlc3NmdWw7IHJldHVybiBlbnRpdHlcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gVXBkYXRlIGV4aXN0aW5nIGVudGl0eVxuICAgIC8vIENhbiBjcmVhdGUgYW4gZW50aXR5IHRvbyBpZiBwdXQ0MDQgaXMgZmFsc2UuXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLnB1dCA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgY29sbGVjdGlvbiA9IF9hLmNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lID0gX2EuY29sbGVjdGlvbk5hbWUsIGhlYWRlcnMgPSBfYS5oZWFkZXJzLCBpZCA9IF9hLmlkLCByZXEgPSBfYS5yZXEsIHVybCA9IF9hLnVybDtcbiAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmdldEpzb25Cb2R5KHJlcSk7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzXG4gICAgICAgIGlmIChpdGVtLmlkID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnModXJsLCBTVEFUVVMuTk9UX0ZPVU5ELCBcIk1pc3NpbmcgJ1wiICsgY29sbGVjdGlvbk5hbWUgKyBcIicgaWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlkICYmIGlkICE9PSBpdGVtLmlkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5CQURfUkVRVUVTVCwgXCJSZXF1ZXN0IGZvciAnXCIgKyBjb2xsZWN0aW9uTmFtZSArIFwiJyBpZCBkb2VzIG5vdCBtYXRjaCBpdGVtLmlkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWQgPSBpdGVtLmlkO1xuICAgICAgICB9XG4gICAgICAgIHZhciBleGlzdGluZ0l4ID0gdGhpcy5pbmRleE9mKGNvbGxlY3Rpb24sIGlkKTtcbiAgICAgICAgdmFyIGJvZHkgPSB0aGlzLmJvZGlmeShpdGVtKTtcbiAgICAgICAgaWYgKGV4aXN0aW5nSXggPiAtMSkge1xuICAgICAgICAgICAgY29sbGVjdGlvbltleGlzdGluZ0l4XSA9IGl0ZW07XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25maWcucHV0MjA0ID9cbiAgICAgICAgICAgICAgICB7IGhlYWRlcnM6IGhlYWRlcnMsIHN0YXR1czogU1RBVFVTLk5PX0NPTlRFTlQgfSA6XG4gICAgICAgICAgICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzLCBib2R5OiBib2R5LCBzdGF0dXM6IFNUQVRVUy5PSyB9OyAvLyBzdWNjZXNzZnVsOyByZXR1cm4gZW50aXR5XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5jb25maWcucHV0NDA0KSB7XG4gICAgICAgICAgICAvLyBpdGVtIHRvIHVwZGF0ZSBub3QgZm91bmQ7IHVzZSBQT1NUIHRvIGNyZWF0ZSBuZXcgaXRlbSBmb3IgdGhpcyBpZC5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHVybCwgU1RBVFVTLk5PVF9GT1VORCwgXCInXCIgKyBjb2xsZWN0aW9uTmFtZSArIFwiJyBpdGVtIHdpdGggaWQ9J1wiICsgaWQgKyBcIiBub3QgZm91bmQgYW5kIG1heSBub3QgYmUgY3JlYXRlZCB3aXRoIFBVVDsgdXNlIFBPU1QgaW5zdGVhZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBjcmVhdGUgbmV3IGl0ZW0gZm9yIGlkIG5vdCBmb3VuZFxuICAgICAgICAgICAgY29sbGVjdGlvbi5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgcmV0dXJuIHsgaGVhZGVyczogaGVhZGVycywgYm9keTogYm9keSwgc3RhdHVzOiBTVEFUVVMuQ1JFQVRFRCB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUucmVtb3ZlQnlJZCA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBpZCkge1xuICAgICAgICB2YXIgaXggPSB0aGlzLmluZGV4T2YoY29sbGVjdGlvbiwgaWQpO1xuICAgICAgICBpZiAoaXggPiAtMSkge1xuICAgICAgICAgICAgY29sbGVjdGlvbi5zcGxpY2UoaXgsIDEpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGVsbCB5b3VyIGluLW1lbSBcImRhdGFiYXNlXCIgdG8gcmVzZXQuXG4gICAgICogcmV0dXJucyBPYnNlcnZhYmxlIG9mIHRoZSBkYXRhYmFzZSBiZWNhdXNlIHJlc2V0dGluZyBpdCBjb3VsZCBiZSBhc3luY1xuICAgICAqL1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5yZXNldERiID0gZnVuY3Rpb24gKHJlcUluZm8pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5kYlJlYWR5U3ViamVjdC5uZXh0KGZhbHNlKTtcbiAgICAgICAgdmFyIGRiID0gdGhpcy5pbk1lbURiU2VydmljZS5jcmVhdGVEYihyZXFJbmZvKTtcbiAgICAgICAgdmFyIGRiJCA9IGRiIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSA/IGRiIDpcbiAgICAgICAgICAgIGlzUHJvbWlzZShkYikgPyBmcm9tUHJvbWlzZShkYikgOlxuICAgICAgICAgICAgICAgIG9mKGRiKTtcbiAgICAgICAgZmlyc3QuY2FsbChkYiQpLnN1YnNjcmliZShmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgX3RoaXMuZGIgPSBkO1xuICAgICAgICAgICAgX3RoaXMuZGJSZWFkeVN1YmplY3QubmV4dCh0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmRiUmVhZHk7XG4gICAgfTtcbiAgICByZXR1cm4gQmFja2VuZFNlcnZpY2U7XG59KCkpO1xuZXhwb3J0IHsgQmFja2VuZFNlcnZpY2UgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJhY2tlbmQuc2VydmljZS5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyWGhyLCBIZWFkZXJzLCBSZWFkeVN0YXRlLCBSZXF1ZXN0TWV0aG9kLCBSZXNwb25zZSwgUmVzcG9uc2VPcHRpb25zIGFzIEh0dHBSZXNwb25zZU9wdGlvbnMsIFVSTFNlYXJjaFBhcmFtcywgWEhSQmFja2VuZCwgWFNSRlN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgeyBTVEFUVVMgfSBmcm9tICcuL2h0dHAtc3RhdHVzLWNvZGVzJztcbmltcG9ydCB7IEluTWVtb3J5QmFja2VuZENvbmZpZywgSW5NZW1vcnlCYWNrZW5kQ29uZmlnQXJncywgSW5NZW1vcnlEYlNlcnZpY2UgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tICcuL2JhY2tlbmQuc2VydmljZSc7XG4vKipcbiAqIEZvciBBbmd1bGFyIGBIdHRwYCBzaW11bGF0ZSB0aGUgYmVoYXZpb3Igb2YgYSBSRVNUeSB3ZWIgYXBpXG4gKiBiYWNrZWQgYnkgdGhlIHNpbXBsZSBpbi1tZW1vcnkgZGF0YSBzdG9yZSBwcm92aWRlZCBieSB0aGUgaW5qZWN0ZWQgYEluTWVtb3J5RGJTZXJ2aWNlYC5cbiAqIENvbmZvcm1zIG1vc3RseSB0byBiZWhhdmlvciBkZXNjcmliZWQgaGVyZTpcbiAqIGh0dHA6Ly93d3cucmVzdGFwaXR1dG9yaWFsLmNvbS9sZXNzb25zL2h0dHBtZXRob2RzLmh0bWxcbiAqXG4gKiAjIyMgVXNhZ2VcbiAqXG4gKiBDcmVhdGUgYW4gaW4tbWVtb3J5IGRhdGEgc3RvcmUgY2xhc3MgdGhhdCBpbXBsZW1lbnRzIGBJbk1lbW9yeURiU2VydmljZWAuXG4gKiBDYWxsIGBmb3JSb290YCBzdGF0aWMgbWV0aG9kIHdpdGggdGhpcyBzZXJ2aWNlIGNsYXNzIGFuZCBvcHRpb25hbCBjb25maWd1cmF0aW9uIG9iamVjdDpcbiAqIGBgYFxuICogLy8gb3RoZXIgaW1wb3J0c1xuICogaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuICogaW1wb3J0IHsgSHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1pbi1tZW1vcnktd2ViLWFwaSc7XG4gKlxuICogaW1wb3J0IHsgSW5NZW1IZXJvU2VydmljZSwgaW5NZW1Db25maWcgfSBmcm9tICcuLi9hcGkvaW4tbWVtb3J5LWhlcm8uc2VydmljZSc7XG4gKiBATmdNb2R1bGUoe1xuICogIGltcG9ydHM6IFtcbiAqICAgIEh0dHBNb2R1bGUsXG4gKiAgICBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yUm9vdChJbk1lbUhlcm9TZXJ2aWNlLCBpbk1lbUNvbmZpZyksXG4gKiAgICAuLi5cbiAqICBdLFxuICogIC4uLlxuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyAuLi4gfVxuICogYGBgXG4gKi9cbnZhciBIdHRwQmFja2VuZFNlcnZpY2UgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhIdHRwQmFja2VuZFNlcnZpY2UsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSHR0cEJhY2tlbmRTZXJ2aWNlKGluamVjdG9yLCBpbk1lbURiU2VydmljZSwgY29uZmlnKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGluTWVtRGJTZXJ2aWNlLCBjb25maWcpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmluamVjdG9yID0gaW5qZWN0b3I7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgSHR0cEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5jcmVhdGVDb25uZWN0aW9uID0gZnVuY3Rpb24gKHJlcSkge1xuICAgICAgICB2YXIgcmVzcG9uc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXNwb25zZSA9IHRoaXMuaGFuZGxlUmVxdWVzdChyZXEpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdmFyIGVyciA9IGVycm9yLm1lc3NhZ2UgfHwgZXJyb3I7XG4gICAgICAgICAgICB2YXIgcmVzT3B0aW9uc18xID0gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyhyZXEudXJsLCBTVEFUVVMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLCBcIlwiICsgZXJyKTtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gdGhpcy5jcmVhdGVSZXNwb25zZSQoZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVzT3B0aW9uc18xOyB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVhZHlTdGF0ZTogUmVhZHlTdGF0ZS5Eb25lLFxuICAgICAgICAgICAgcmVxdWVzdDogcmVxLFxuICAgICAgICAgICAgcmVzcG9uc2U6IHJlc3BvbnNlXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvLy8vICBwcm90ZWN0ZWQgb3ZlcnJpZGVzIC8vLy8vXG4gICAgSHR0cEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5nZXRKc29uQm9keSA9IGZ1bmN0aW9uIChyZXEpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiByZXEuanNvbigpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICB2YXIgbXNnID0gXCInXCIgKyByZXEudXJsICsgXCInIHJlcXVlc3QgYm9keS10by1qc29uIGVycm9yXFxuXCIgKyBKU09OLnN0cmluZ2lmeShlKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBIdHRwQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmdldFJlcXVlc3RNZXRob2QgPSBmdW5jdGlvbiAocmVxKSB7XG4gICAgICAgIHJldHVybiBSZXF1ZXN0TWV0aG9kW3JlcS5tZXRob2QgfHwgMF0udG9Mb3dlckNhc2UoKTtcbiAgICB9O1xuICAgIEh0dHBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuY3JlYXRlSGVhZGVycyA9IGZ1bmN0aW9uIChoZWFkZXJzKSB7XG4gICAgICAgIHJldHVybiBuZXcgSGVhZGVycyhoZWFkZXJzKTtcbiAgICB9O1xuICAgIEh0dHBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuY3JlYXRlUXVlcnlNYXAgPSBmdW5jdGlvbiAoc2VhcmNoKSB7XG4gICAgICAgIHJldHVybiBzZWFyY2ggPyBuZXcgVVJMU2VhcmNoUGFyYW1zKHNlYXJjaCkucGFyYW1zTWFwIDogbmV3IE1hcCgpO1xuICAgIH07XG4gICAgSHR0cEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5jcmVhdGVSZXNwb25zZSRmcm9tUmVzcG9uc2VPcHRpb25zJCA9IGZ1bmN0aW9uIChyZXNPcHRpb25zJCkge1xuICAgICAgICByZXR1cm4gbWFwLmNhbGwocmVzT3B0aW9ucyQsIGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKG5ldyBIdHRwUmVzcG9uc2VPcHRpb25zKG9wdHMpKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBIdHRwQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmNyZWF0ZVBhc3NUaHJ1QmFja2VuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIGNvcGllZCBmcm9tIEBhbmd1bGFyL2h0dHAvYmFja2VuZHMveGhyX2JhY2tlbmRcbiAgICAgICAgICAgIHZhciBicm93c2VyWGhyID0gdGhpcy5pbmplY3Rvci5nZXQoQnJvd3Nlclhocik7XG4gICAgICAgICAgICB2YXIgYmFzZVJlc3BvbnNlT3B0aW9ucyA9IHRoaXMuaW5qZWN0b3IuZ2V0KEh0dHBSZXNwb25zZU9wdGlvbnMpO1xuICAgICAgICAgICAgdmFyIHhzcmZTdHJhdGVneSA9IHRoaXMuaW5qZWN0b3IuZ2V0KFhTUkZTdHJhdGVneSk7XG4gICAgICAgICAgICB2YXIgeGhyQmFja2VuZF8xID0gbmV3IFhIUkJhY2tlbmQoYnJvd3NlclhociwgYmFzZVJlc3BvbnNlT3B0aW9ucywgeHNyZlN0cmF0ZWd5KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlOiBmdW5jdGlvbiAocmVxKSB7IHJldHVybiB4aHJCYWNrZW5kXzEuY3JlYXRlQ29ubmVjdGlvbihyZXEpLnJlc3BvbnNlOyB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBlLm1lc3NhZ2UgPSAnQ2Fubm90IGNyZWF0ZSBwYXNzVGhydTQwNCBiYWNrZW5kOyAnICsgKGUubWVzc2FnZSB8fCAnJyk7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gSHR0cEJhY2tlbmRTZXJ2aWNlO1xufShCYWNrZW5kU2VydmljZSkpO1xuZXhwb3J0IHsgSHR0cEJhY2tlbmRTZXJ2aWNlIH07XG5IdHRwQmFja2VuZFNlcnZpY2UuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IEluamVjdGFibGUgfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbkh0dHBCYWNrZW5kU2VydmljZS5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICB7IHR5cGU6IEluamVjdG9yLCB9LFxuICAgIHsgdHlwZTogSW5NZW1vcnlEYlNlcnZpY2UsIH0sXG4gICAgeyB0eXBlOiBJbk1lbW9yeUJhY2tlbmRDb25maWdBcmdzLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtJbk1lbW9yeUJhY2tlbmRDb25maWcsXSB9LCB7IHR5cGU6IE9wdGlvbmFsIH0sXSB9LFxuXTsgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0dHAtYmFja2VuZC5zZXJ2aWNlLmpzLm1hcCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMsIEh0dHBSZXNwb25zZSwgSHR0cFhockJhY2tlbmQsIFhockZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgeyBTVEFUVVMgfSBmcm9tICcuL2h0dHAtc3RhdHVzLWNvZGVzJztcbmltcG9ydCB7IEluTWVtb3J5QmFja2VuZENvbmZpZywgSW5NZW1vcnlCYWNrZW5kQ29uZmlnQXJncywgSW5NZW1vcnlEYlNlcnZpY2UgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tICcuL2JhY2tlbmQuc2VydmljZSc7XG4vKipcbiAqIEZvciBBbmd1bGFyIGBIdHRwQ2xpZW50YCBzaW11bGF0ZSB0aGUgYmVoYXZpb3Igb2YgYSBSRVNUeSB3ZWIgYXBpXG4gKiBiYWNrZWQgYnkgdGhlIHNpbXBsZSBpbi1tZW1vcnkgZGF0YSBzdG9yZSBwcm92aWRlZCBieSB0aGUgaW5qZWN0ZWQgYEluTWVtb3J5RGJTZXJ2aWNlYC5cbiAqIENvbmZvcm1zIG1vc3RseSB0byBiZWhhdmlvciBkZXNjcmliZWQgaGVyZTpcbiAqIGh0dHA6Ly93d3cucmVzdGFwaXR1dG9yaWFsLmNvbS9sZXNzb25zL2h0dHBtZXRob2RzLmh0bWxcbiAqXG4gKiAjIyMgVXNhZ2VcbiAqXG4gKiBDcmVhdGUgYW4gaW4tbWVtb3J5IGRhdGEgc3RvcmUgY2xhc3MgdGhhdCBpbXBsZW1lbnRzIGBJbk1lbW9yeURiU2VydmljZWAuXG4gKiBDYWxsIGBjb25maWdgIHN0YXRpYyBtZXRob2Qgd2l0aCB0aGlzIHNlcnZpY2UgY2xhc3MgYW5kIG9wdGlvbmFsIGNvbmZpZ3VyYXRpb24gb2JqZWN0OlxuICogYGBgXG4gKiAvLyBvdGhlciBpbXBvcnRzXG4gKiBpbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuICogaW1wb3J0IHsgSHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1pbi1tZW1vcnktd2ViLWFwaSc7XG4gKlxuICogaW1wb3J0IHsgSW5NZW1IZXJvU2VydmljZSwgaW5NZW1Db25maWcgfSBmcm9tICcuLi9hcGkvaW4tbWVtb3J5LWhlcm8uc2VydmljZSc7XG4gKiBATmdNb2R1bGUoe1xuICogIGltcG9ydHM6IFtcbiAqICAgIEh0dHBNb2R1bGUsXG4gKiAgICBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yUm9vdChJbk1lbUhlcm9TZXJ2aWNlLCBpbk1lbUNvbmZpZyksXG4gKiAgICAuLi5cbiAqICBdLFxuICogIC4uLlxuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyAuLi4gfVxuICogYGBgXG4gKi9cbnZhciBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlKGluTWVtRGJTZXJ2aWNlLCBjb25maWcsIHhockZhY3RvcnkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgaW5NZW1EYlNlcnZpY2UsIGNvbmZpZykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMueGhyRmFjdG9yeSA9IHhockZhY3Rvcnk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5oYW5kbGUgPSBmdW5jdGlvbiAocmVxKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSZXF1ZXN0KHJlcSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gZXJyb3IubWVzc2FnZSB8fCBlcnJvcjtcbiAgICAgICAgICAgIHZhciByZXNPcHRpb25zXzEgPSB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHJlcS51cmwsIFNUQVRVUy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsIFwiXCIgKyBlcnIpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUmVzcG9uc2UkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc09wdGlvbnNfMTsgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vLy8gIHByb3RlY3RlZCBvdmVycmlkZXMgLy8vLy9cbiAgICBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmdldEpzb25Cb2R5ID0gZnVuY3Rpb24gKHJlcSkge1xuICAgICAgICByZXR1cm4gcmVxLmJvZHk7XG4gICAgfTtcbiAgICBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmdldFJlcXVlc3RNZXRob2QgPSBmdW5jdGlvbiAocmVxKSB7XG4gICAgICAgIHJldHVybiAocmVxLm1ldGhvZCB8fCAnZ2V0JykudG9Mb3dlckNhc2UoKTtcbiAgICB9O1xuICAgIEh0dHBDbGllbnRCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuY3JlYXRlSGVhZGVycyA9IGZ1bmN0aW9uIChoZWFkZXJzKSB7XG4gICAgICAgIHJldHVybiBuZXcgSHR0cEhlYWRlcnMoaGVhZGVycyk7XG4gICAgfTtcbiAgICBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmNyZWF0ZVF1ZXJ5TWFwID0gZnVuY3Rpb24gKHNlYXJjaCkge1xuICAgICAgICB2YXIgbWFwID0gbmV3IE1hcCgpO1xuICAgICAgICBpZiAoc2VhcmNoKSB7XG4gICAgICAgICAgICB2YXIgcGFyYW1zXzEgPSBuZXcgSHR0cFBhcmFtcyh7IGZyb21TdHJpbmc6IHNlYXJjaCB9KTtcbiAgICAgICAgICAgIHBhcmFtc18xLmtleXMoKS5mb3JFYWNoKGZ1bmN0aW9uIChwKSB7IHJldHVybiBtYXAuc2V0KHAsIHBhcmFtc18xLmdldEFsbChwKSk7IH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXA7XG4gICAgfTtcbiAgICBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmNyZWF0ZVJlc3BvbnNlJGZyb21SZXNwb25zZU9wdGlvbnMkID0gZnVuY3Rpb24gKHJlc09wdGlvbnMkKSB7XG4gICAgICAgIHJldHVybiBtYXAuY2FsbChyZXNPcHRpb25zJCwgZnVuY3Rpb24gKG9wdHMpIHsgcmV0dXJuIG5ldyBIdHRwUmVzcG9uc2Uob3B0cyk7IH0pO1xuICAgIH07XG4gICAgSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5jcmVhdGVQYXNzVGhydUJhY2tlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEh0dHBYaHJCYWNrZW5kKHRoaXMueGhyRmFjdG9yeSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICBleC5tZXNzYWdlID0gJ0Nhbm5vdCBjcmVhdGUgcGFzc1RocnU0MDQgYmFja2VuZDsgJyArIChleC5tZXNzYWdlIHx8ICcnKTtcbiAgICAgICAgICAgIHRocm93IGV4O1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlO1xufShCYWNrZW5kU2VydmljZSkpO1xuZXhwb3J0IHsgSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlIH07XG5IdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IEluamVjdGFibGUgfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbkh0dHBDbGllbnRCYWNrZW5kU2VydmljZS5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICB7IHR5cGU6IEluTWVtb3J5RGJTZXJ2aWNlLCB9LFxuICAgIHsgdHlwZTogSW5NZW1vcnlCYWNrZW5kQ29uZmlnQXJncywgZGVjb3JhdG9yczogW3sgdHlwZTogSW5qZWN0LCBhcmdzOiBbSW5NZW1vcnlCYWNrZW5kQ29uZmlnLF0gfSwgeyB0eXBlOiBPcHRpb25hbCB9LF0gfSxcbiAgICB7IHR5cGU6IFhockZhY3RvcnksIH0sXG5dOyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHR0cC1jbGllbnQtYmFja2VuZC5zZXJ2aWNlLmpzLm1hcCIsIi8vLy8vLyBIdHRwLU9ubHkgdmVyc2lvbiAvLy8vXG5pbXBvcnQgeyBJbmplY3RvciwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFhIUkJhY2tlbmQgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEluTWVtb3J5QmFja2VuZENvbmZpZywgSW5NZW1vcnlEYlNlcnZpY2UgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgSHR0cEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSAnLi9odHRwLWJhY2tlbmQuc2VydmljZSc7XG4vLyBJbnRlcm5hbCAtIENyZWF0ZXMgdGhlIGluLW1lbSBiYWNrZW5kIGZvciB0aGUgSHR0cCBtb2R1bGVcbi8vIEFvVCByZXF1aXJlcyBmYWN0b3J5IHRvIGJlIGV4cG9ydGVkXG5leHBvcnQgZnVuY3Rpb24gaHR0cEluTWVtQmFja2VuZFNlcnZpY2VGYWN0b3J5KGluamVjdG9yLCBkYlNlcnZpY2UsIG9wdGlvbnMpIHtcbiAgICB2YXIgYmFja2VuZCA9IG5ldyBIdHRwQmFja2VuZFNlcnZpY2UoaW5qZWN0b3IsIGRiU2VydmljZSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIGJhY2tlbmQ7XG59XG52YXIgSHR0cEluTWVtb3J5V2ViQXBpTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBIdHRwSW5NZW1vcnlXZWJBcGlNb2R1bGUoKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICogIFJlZGlyZWN0IHRoZSBBbmd1bGFyIGBIdHRwYCBYSFIgY2FsbHNcbiAgICAqICB0byBpbi1tZW1vcnkgZGF0YSBzdG9yZSB0aGF0IGltcGxlbWVudHMgYEluTWVtb3J5RGJTZXJ2aWNlYC5cbiAgICAqICB3aXRoIGNsYXNzIHRoYXQgaW1wbGVtZW50cyBJbk1lbW9yeURiU2VydmljZSBhbmQgY3JlYXRlcyBhbiBpbi1tZW1vcnkgZGF0YWJhc2UuXG4gICAgKlxuICAgICogIFVzdWFsbHkgaW1wb3J0ZWQgaW4gdGhlIHJvb3QgYXBwbGljYXRpb24gbW9kdWxlLlxuICAgICogIENhbiBpbXBvcnQgaW4gYSBsYXp5IGZlYXR1cmUgbW9kdWxlIHRvbywgd2hpY2ggd2lsbCBzaGFkb3cgbW9kdWxlcyBsb2FkZWQgZWFybGllclxuICAgICpcbiAgICAqIEBwYXJhbSB7VHlwZX0gZGJDcmVhdG9yIC0gQ2xhc3MgdGhhdCBjcmVhdGVzIHNlZWQgZGF0YSBmb3IgaW4tbWVtb3J5IGRhdGFiYXNlLiBNdXN0IGltcGxlbWVudCBJbk1lbW9yeURiU2VydmljZS5cbiAgICAqIEBwYXJhbSB7SW5NZW1vcnlCYWNrZW5kQ29uZmlnQXJnc30gW29wdGlvbnNdXG4gICAgKlxuICAgICogQGV4YW1wbGVcbiAgICAqIEh0dHBJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290KGRiQ3JlYXRvcik7XG4gICAgKiBIdHRwSW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yUm9vdChkYkNyZWF0b3IsIHt1c2VWYWx1ZToge2RlbGF5OjYwMH19KTtcbiAgICAqL1xuICAgIEh0dHBJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290ID0gZnVuY3Rpb24gKGRiQ3JlYXRvciwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IEh0dHBJbk1lbW9yeVdlYkFwaU1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogSW5NZW1vcnlEYlNlcnZpY2UsIHVzZUNsYXNzOiBkYkNyZWF0b3IgfSxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IEluTWVtb3J5QmFja2VuZENvbmZpZywgdXNlVmFsdWU6IG9wdGlvbnMgfSxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IFhIUkJhY2tlbmQsXG4gICAgICAgICAgICAgICAgICAgIHVzZUZhY3Rvcnk6IGh0dHBJbk1lbUJhY2tlbmRTZXJ2aWNlRmFjdG9yeSxcbiAgICAgICAgICAgICAgICAgICAgZGVwczogW0luamVjdG9yLCBJbk1lbW9yeURiU2VydmljZSwgSW5NZW1vcnlCYWNrZW5kQ29uZmlnXSB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICpcbiAgICogRW5hYmxlIGFuZCBjb25maWd1cmUgdGhlIGluLW1lbW9yeSB3ZWIgYXBpIGluIGEgbGF6eS1sb2FkZWQgZmVhdHVyZSBtb2R1bGUuXG4gICAqIFNhbWUgYXMgYGZvclJvb3RgLlxuICAgKiBUaGlzIGlzIGEgZmVlbC1nb29kIG1ldGhvZCBzbyB5b3UgY2FuIGZvbGxvdyB0aGUgQW5ndWxhciBzdHlsZSBndWlkZSBmb3IgbGF6eS1sb2FkZWQgbW9kdWxlcy5cbiAgICovXG4gICAgSHR0cEluTWVtb3J5V2ViQXBpTW9kdWxlLmZvckZlYXR1cmUgPSBmdW5jdGlvbiAoZGJDcmVhdG9yLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBIdHRwSW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yUm9vdChkYkNyZWF0b3IsIG9wdGlvbnMpO1xuICAgIH07XG4gICAgcmV0dXJuIEh0dHBJbk1lbW9yeVdlYkFwaU1vZHVsZTtcbn0oKSk7XG5leHBvcnQgeyBIdHRwSW5NZW1vcnlXZWJBcGlNb2R1bGUgfTtcbkh0dHBJbk1lbW9yeVdlYkFwaU1vZHVsZS5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogTmdNb2R1bGUsIGFyZ3M6IFt7fSxdIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5IdHRwSW5NZW1vcnlXZWJBcGlNb2R1bGUuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0dHAtaW4tbWVtb3J5LXdlYi1hcGkubW9kdWxlLmpzLm1hcCIsIi8vLy8vLyBIdHRwQ2xpZW50LU9ubHkgdmVyc2lvbiAvLy8vXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEJhY2tlbmQsIFhockZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbk1lbW9yeUJhY2tlbmRDb25maWcsIEluTWVtb3J5RGJTZXJ2aWNlIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEh0dHBDbGllbnRCYWNrZW5kU2VydmljZSB9IGZyb20gJy4vaHR0cC1jbGllbnQtYmFja2VuZC5zZXJ2aWNlJztcbi8vIEludGVybmFsIC0gQ3JlYXRlcyB0aGUgaW4tbWVtIGJhY2tlbmQgZm9yIHRoZSBIdHRwQ2xpZW50IG1vZHVsZVxuLy8gQW9UIHJlcXVpcmVzIGZhY3RvcnkgdG8gYmUgZXhwb3J0ZWRcbmV4cG9ydCBmdW5jdGlvbiBodHRwQ2xpZW50SW5NZW1CYWNrZW5kU2VydmljZUZhY3RvcnkoZGJTZXJ2aWNlLCBvcHRpb25zLCB4aHJGYWN0b3J5KSB7XG4gICAgdmFyIGJhY2tlbmQgPSBuZXcgSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlKGRiU2VydmljZSwgb3B0aW9ucywgeGhyRmFjdG9yeSk7XG4gICAgcmV0dXJuIGJhY2tlbmQ7XG59XG52YXIgSHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUoKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICogIFJlZGlyZWN0IHRoZSBBbmd1bGFyIGBIdHRwQ2xpZW50YCBYSFIgY2FsbHNcbiAgICAqICB0byBpbi1tZW1vcnkgZGF0YSBzdG9yZSB0aGF0IGltcGxlbWVudHMgYEluTWVtb3J5RGJTZXJ2aWNlYC5cbiAgICAqICB3aXRoIGNsYXNzIHRoYXQgaW1wbGVtZW50cyBJbk1lbW9yeURiU2VydmljZSBhbmQgY3JlYXRlcyBhbiBpbi1tZW1vcnkgZGF0YWJhc2UuXG4gICAgKlxuICAgICogIFVzdWFsbHkgaW1wb3J0ZWQgaW4gdGhlIHJvb3QgYXBwbGljYXRpb24gbW9kdWxlLlxuICAgICogIENhbiBpbXBvcnQgaW4gYSBsYXp5IGZlYXR1cmUgbW9kdWxlIHRvbywgd2hpY2ggd2lsbCBzaGFkb3cgbW9kdWxlcyBsb2FkZWQgZWFybGllclxuICAgICpcbiAgICAqIEBwYXJhbSB7VHlwZX0gZGJDcmVhdG9yIC0gQ2xhc3MgdGhhdCBjcmVhdGVzIHNlZWQgZGF0YSBmb3IgaW4tbWVtb3J5IGRhdGFiYXNlLiBNdXN0IGltcGxlbWVudCBJbk1lbW9yeURiU2VydmljZS5cbiAgICAqIEBwYXJhbSB7SW5NZW1vcnlCYWNrZW5kQ29uZmlnQXJnc30gW29wdGlvbnNdXG4gICAgKlxuICAgICogQGV4YW1wbGVcbiAgICAqIEh0dHBJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290KGRiQ3JlYXRvcik7XG4gICAgKiBIdHRwSW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yUm9vdChkYkNyZWF0b3IsIHt1c2VWYWx1ZToge2RlbGF5OjYwMH19KTtcbiAgICAqL1xuICAgIEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290ID0gZnVuY3Rpb24gKGRiQ3JlYXRvciwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogSW5NZW1vcnlEYlNlcnZpY2UsIHVzZUNsYXNzOiBkYkNyZWF0b3IgfSxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IEluTWVtb3J5QmFja2VuZENvbmZpZywgdXNlVmFsdWU6IG9wdGlvbnMgfSxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IEh0dHBCYWNrZW5kLFxuICAgICAgICAgICAgICAgICAgICB1c2VGYWN0b3J5OiBodHRwQ2xpZW50SW5NZW1CYWNrZW5kU2VydmljZUZhY3RvcnksXG4gICAgICAgICAgICAgICAgICAgIGRlcHM6IFtJbk1lbW9yeURiU2VydmljZSwgSW5NZW1vcnlCYWNrZW5kQ29uZmlnLCBYaHJGYWN0b3J5XSB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICpcbiAgICogRW5hYmxlIGFuZCBjb25maWd1cmUgdGhlIGluLW1lbW9yeSB3ZWIgYXBpIGluIGEgbGF6eS1sb2FkZWQgZmVhdHVyZSBtb2R1bGUuXG4gICAqIFNhbWUgYXMgYGZvclJvb3RgLlxuICAgKiBUaGlzIGlzIGEgZmVlbC1nb29kIG1ldGhvZCBzbyB5b3UgY2FuIGZvbGxvdyB0aGUgQW5ndWxhciBzdHlsZSBndWlkZSBmb3IgbGF6eS1sb2FkZWQgbW9kdWxlcy5cbiAgICovXG4gICAgSHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlLmZvckZlYXR1cmUgPSBmdW5jdGlvbiAoZGJDcmVhdG9yLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yUm9vdChkYkNyZWF0b3IsIG9wdGlvbnMpO1xuICAgIH07XG4gICAgcmV0dXJuIEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZTtcbn0oKSk7XG5leHBvcnQgeyBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUgfTtcbkh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZS5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogTmdNb2R1bGUsIGFyZ3M6IFt7fSxdIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5IdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0dHAtY2xpZW50LWluLW1lbW9yeS13ZWItYXBpLm1vZHVsZS5qcy5tYXAiLCIvLy8vLy8gRm9yIGFwcHMgd2l0aCBib3RoIEh0dHAgYW5kIEh0dHBDbGllbnQgLy8vL1xuaW1wb3J0IHsgSW5qZWN0b3IsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBYSFJCYWNrZW5kIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBIdHRwQmFja2VuZCwgWGhyRmFjdG9yeSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluTWVtb3J5QmFja2VuZENvbmZpZywgSW5NZW1vcnlEYlNlcnZpY2UgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgaHR0cEluTWVtQmFja2VuZFNlcnZpY2VGYWN0b3J5IH0gZnJvbSAnLi9odHRwLWluLW1lbW9yeS13ZWItYXBpLm1vZHVsZSc7XG5pbXBvcnQgeyBodHRwQ2xpZW50SW5NZW1CYWNrZW5kU2VydmljZUZhY3RvcnkgfSBmcm9tICcuL2h0dHAtY2xpZW50LWluLW1lbW9yeS13ZWItYXBpLm1vZHVsZSc7XG52YXIgSW5NZW1vcnlXZWJBcGlNb2R1bGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEluTWVtb3J5V2ViQXBpTW9kdWxlKCkge1xuICAgIH1cbiAgICAvKipcbiAgICAqICBSZWRpcmVjdCBCT1RIIEFuZ3VsYXIgYEh0dHBgIGFuZCBgSHR0cENsaWVudGAgWEhSIGNhbGxzXG4gICAgKiAgdG8gaW4tbWVtb3J5IGRhdGEgc3RvcmUgdGhhdCBpbXBsZW1lbnRzIGBJbk1lbW9yeURiU2VydmljZWAuXG4gICAgKiAgd2l0aCBjbGFzcyB0aGF0IGltcGxlbWVudHMgSW5NZW1vcnlEYlNlcnZpY2UgYW5kIGNyZWF0ZXMgYW4gaW4tbWVtb3J5IGRhdGFiYXNlLlxuICAgICpcbiAgICAqICBVc3VhbGx5IGltcG9ydGVkIGluIHRoZSByb290IGFwcGxpY2F0aW9uIG1vZHVsZS5cbiAgICAqICBDYW4gaW1wb3J0IGluIGEgbGF6eSBmZWF0dXJlIG1vZHVsZSB0b28sIHdoaWNoIHdpbGwgc2hhZG93IG1vZHVsZXMgbG9hZGVkIGVhcmxpZXJcbiAgICAqXG4gICAgKiBAcGFyYW0ge1R5cGV9IGRiQ3JlYXRvciAtIENsYXNzIHRoYXQgY3JlYXRlcyBzZWVkIGRhdGEgZm9yIGluLW1lbW9yeSBkYXRhYmFzZS4gTXVzdCBpbXBsZW1lbnQgSW5NZW1vcnlEYlNlcnZpY2UuXG4gICAgKiBAcGFyYW0ge0luTWVtb3J5QmFja2VuZENvbmZpZ0FyZ3N9IFtvcHRpb25zXVxuICAgICpcbiAgICAqIEBleGFtcGxlXG4gICAgKiBJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290KGRiQ3JlYXRvcik7XG4gICAgKiBJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290KGRiQ3JlYXRvciwge3VzZVZhbHVlOiB7ZGVsYXk6NjAwfX0pO1xuICAgICovXG4gICAgSW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yUm9vdCA9IGZ1bmN0aW9uIChkYkNyZWF0b3IsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBJbk1lbW9yeVdlYkFwaU1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogSW5NZW1vcnlEYlNlcnZpY2UsIHVzZUNsYXNzOiBkYkNyZWF0b3IgfSxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IEluTWVtb3J5QmFja2VuZENvbmZpZywgdXNlVmFsdWU6IG9wdGlvbnMgfSxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IFhIUkJhY2tlbmQsXG4gICAgICAgICAgICAgICAgICAgIHVzZUZhY3Rvcnk6IGh0dHBJbk1lbUJhY2tlbmRTZXJ2aWNlRmFjdG9yeSxcbiAgICAgICAgICAgICAgICAgICAgZGVwczogW0luamVjdG9yLCBJbk1lbW9yeURiU2VydmljZSwgSW5NZW1vcnlCYWNrZW5kQ29uZmlnXSB9LFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogSHR0cEJhY2tlbmQsXG4gICAgICAgICAgICAgICAgICAgIHVzZUZhY3Rvcnk6IGh0dHBDbGllbnRJbk1lbUJhY2tlbmRTZXJ2aWNlRmFjdG9yeSxcbiAgICAgICAgICAgICAgICAgICAgZGVwczogW0luTWVtb3J5RGJTZXJ2aWNlLCBJbk1lbW9yeUJhY2tlbmRDb25maWcsIFhockZhY3RvcnldIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqXG4gICAgICogRW5hYmxlIGFuZCBjb25maWd1cmUgdGhlIGluLW1lbW9yeSB3ZWIgYXBpIGluIGEgbGF6eS1sb2FkZWQgZmVhdHVyZSBtb2R1bGUuXG4gICAgICogU2FtZSBhcyBgZm9yUm9vdGAuXG4gICAgICogVGhpcyBpcyBhIGZlZWwtZ29vZCBtZXRob2Qgc28geW91IGNhbiBmb2xsb3cgdGhlIEFuZ3VsYXIgc3R5bGUgZ3VpZGUgZm9yIGxhenktbG9hZGVkIG1vZHVsZXMuXG4gICAgICovXG4gICAgSW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yRmVhdHVyZSA9IGZ1bmN0aW9uIChkYkNyZWF0b3IsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIEluTWVtb3J5V2ViQXBpTW9kdWxlLmZvclJvb3QoZGJDcmVhdG9yLCBvcHRpb25zKTtcbiAgICB9O1xuICAgIHJldHVybiBJbk1lbW9yeVdlYkFwaU1vZHVsZTtcbn0oKSk7XG5leHBvcnQgeyBJbk1lbW9yeVdlYkFwaU1vZHVsZSB9O1xuSW5NZW1vcnlXZWJBcGlNb2R1bGUuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IE5nTW9kdWxlLCBhcmdzOiBbe30sXSB9LFxuXTtcbi8qKiBAbm9jb2xsYXBzZSAqL1xuSW5NZW1vcnlXZWJBcGlNb2R1bGUuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluLW1lbW9yeS13ZWItYXBpLm1vZHVsZS5qcy5tYXAiXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkJlaGF2aW9yU3ViamVjdCIsImZpcnN0IiwiY29uY2F0TWFwIiwiZGVsYXkiLCJPYnNlcnZhYmxlIiwiaXNQcm9taXNlIiwiZnJvbVByb21pc2UiLCJvZiIsInRoaXMiLCJSZWFkeVN0YXRlIiwiUmVxdWVzdE1ldGhvZCIsIkhlYWRlcnMiLCJVUkxTZWFyY2hQYXJhbXMiLCJtYXAiLCJSZXNwb25zZSIsIkh0dHBSZXNwb25zZU9wdGlvbnMiLCJCcm93c2VyWGhyIiwiWFNSRlN0cmF0ZWd5IiwiWEhSQmFja2VuZCIsIkluamVjdG9yIiwiSW5qZWN0IiwiT3B0aW9uYWwiLCJfX2V4dGVuZHMiLCJIdHRwSGVhZGVycyIsIkh0dHBQYXJhbXMiLCJIdHRwUmVzcG9uc2UiLCJIdHRwWGhyQmFja2VuZCIsIlhockZhY3RvcnkiLCJOZ01vZHVsZSIsIkh0dHBCYWNrZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxJQUFJLE1BQU0sR0FBRztJQUNoQixRQUFRLEVBQUUsR0FBRztJQUNiLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIsRUFBRSxFQUFFLEdBQUc7SUFDUCxPQUFPLEVBQUUsR0FBRztJQUNaLFFBQVEsRUFBRSxHQUFHO0lBQ2IsNkJBQTZCLEVBQUUsR0FBRztJQUNsQyxVQUFVLEVBQUUsR0FBRztJQUNmLGFBQWEsRUFBRSxHQUFHO0lBQ2xCLGVBQWUsRUFBRSxHQUFHO0lBQ3BCLGdCQUFnQixFQUFFLEdBQUc7SUFDckIsa0JBQWtCLEVBQUUsR0FBRztJQUN2QixLQUFLLEVBQUUsR0FBRztJQUNWLFNBQVMsRUFBRSxHQUFHO0lBQ2QsWUFBWSxFQUFFLEdBQUc7SUFDakIsU0FBUyxFQUFFLEdBQUc7SUFDZCxrQkFBa0IsRUFBRSxHQUFHO0lBQ3ZCLFdBQVcsRUFBRSxHQUFHO0lBQ2hCLFlBQVksRUFBRSxHQUFHO0lBQ2pCLGdCQUFnQixFQUFFLEdBQUc7SUFDckIsU0FBUyxFQUFFLEdBQUc7SUFDZCxTQUFTLEVBQUUsR0FBRztJQUNkLGtCQUFrQixFQUFFLEdBQUc7SUFDdkIsY0FBYyxFQUFFLEdB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