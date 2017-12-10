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
            dataEncapsulation: false,
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
        return this.config.dataEncapsulation ? { data: data } : data;
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
            body: this.bodify(this.clone(data)),
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
        var item = this.clone(this.getJsonBody(req));
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
        var item = this.clone(this.getJsonBody(req));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LXdlYi1hcGkudW1kLmpzIiwic291cmNlcyI6WyIuLi9zcmMvaW4tbWVtL2h0dHAtc3RhdHVzLWNvZGVzLmpzIiwiLi4vc3JjL2luLW1lbS9pbnRlcmZhY2VzLmpzIiwiLi4vc3JjL2luLW1lbS9iYWNrZW5kLnNlcnZpY2UuanMiLCIuLi9zcmMvaW4tbWVtL2h0dHAtYmFja2VuZC5zZXJ2aWNlLmpzIiwiLi4vc3JjL2luLW1lbS9odHRwLWNsaWVudC1iYWNrZW5kLnNlcnZpY2UuanMiLCIuLi9zcmMvaW4tbWVtL2h0dHAtaW4tbWVtb3J5LXdlYi1hcGkubW9kdWxlLmpzIiwiLi4vc3JjL2luLW1lbS9odHRwLWNsaWVudC1pbi1tZW1vcnktd2ViLWFwaS5tb2R1bGUuanMiLCIuLi9zcmMvaW4tbWVtL2luLW1lbW9yeS13ZWItYXBpLm1vZHVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIFNUQVRVUyA9IHtcbiAgICBDT05USU5VRTogMTAwLFxuICAgIFNXSVRDSElOR19QUk9UT0NPTFM6IDEwMSxcbiAgICBPSzogMjAwLFxuICAgIENSRUFURUQ6IDIwMSxcbiAgICBBQ0NFUFRFRDogMjAyLFxuICAgIE5PTl9BVVRIT1JJVEFUSVZFX0lORk9STUFUSU9OOiAyMDMsXG4gICAgTk9fQ09OVEVOVDogMjA0LFxuICAgIFJFU0VUX0NPTlRFTlQ6IDIwNSxcbiAgICBQQVJUSUFMX0NPTlRFTlQ6IDIwNixcbiAgICBNVUxUSVBMRV9DSE9JQ0VTOiAzMDAsXG4gICAgTU9WRURfUEVSTUFOVEVOVExZOiAzMDEsXG4gICAgRk9VTkQ6IDMwMixcbiAgICBTRUVfT1RIRVI6IDMwMyxcbiAgICBOT1RfTU9ESUZJRUQ6IDMwNCxcbiAgICBVU0VfUFJPWFk6IDMwNSxcbiAgICBURU1QT1JBUllfUkVESVJFQ1Q6IDMwNyxcbiAgICBCQURfUkVRVUVTVDogNDAwLFxuICAgIFVOQVVUSE9SSVpFRDogNDAxLFxuICAgIFBBWU1FTlRfUkVRVUlSRUQ6IDQwMixcbiAgICBGT1JCSURERU46IDQwMyxcbiAgICBOT1RfRk9VTkQ6IDQwNCxcbiAgICBNRVRIT0RfTk9UX0FMTE9XRUQ6IDQwNSxcbiAgICBOT1RfQUNDRVBUQUJMRTogNDA2LFxuICAgIFBST1hZX0FVVEhFTlRJQ0FUSU9OX1JFUVVJUkVEOiA0MDcsXG4gICAgUkVRVUVTVF9USU1FT1VUOiA0MDgsXG4gICAgQ09ORkxJQ1Q6IDQwOSxcbiAgICBHT05FOiA0MTAsXG4gICAgTEVOR1RIX1JFUVVJUkVEOiA0MTEsXG4gICAgUFJFQ09ORElUSU9OX0ZBSUxFRDogNDEyLFxuICAgIFBBWUxPQURfVE9fTEFSR0U6IDQxMyxcbiAgICBVUklfVE9PX0xPTkc6IDQxNCxcbiAgICBVTlNVUFBPUlRFRF9NRURJQV9UWVBFOiA0MTUsXG4gICAgUkFOR0VfTk9UX1NBVElTRklBQkxFOiA0MTYsXG4gICAgRVhQRUNUQVRJT05fRkFJTEVEOiA0MTcsXG4gICAgSU1fQV9URUFQT1Q6IDQxOCxcbiAgICBVUEdSQURFX1JFUVVJUkVEOiA0MjYsXG4gICAgSU5URVJOQUxfU0VSVkVSX0VSUk9SOiA1MDAsXG4gICAgTk9UX0lNUExFTUVOVEVEOiA1MDEsXG4gICAgQkFEX0dBVEVXQVk6IDUwMixcbiAgICBTRVJWSUNFX1VOQVZBSUxBQkxFOiA1MDMsXG4gICAgR0FURVdBWV9USU1FT1VUOiA1MDQsXG4gICAgSFRUUF9WRVJTSU9OX05PVF9TVVBQT1JURUQ6IDUwNSxcbiAgICBQUk9DRVNTSU5HOiAxMDIsXG4gICAgTVVMVElfU1RBVFVTOiAyMDcsXG4gICAgSU1fVVNFRDogMjI2LFxuICAgIFBFUk1BTkVOVF9SRURJUkVDVDogMzA4LFxuICAgIFVOUFJPQ0VTU0FCTEVfRU5UUlk6IDQyMixcbiAgICBMT0NLRUQ6IDQyMyxcbiAgICBGQUlMRURfREVQRU5ERU5DWTogNDI0LFxuICAgIFBSRUNPTkRJVElPTl9SRVFVSVJFRDogNDI4LFxuICAgIFRPT19NQU5ZX1JFUVVFU1RTOiA0MjksXG4gICAgUkVRVUVTVF9IRUFERVJfRklFTERTX1RPT19MQVJHRTogNDMxLFxuICAgIFVOQVZBSUxBQkxFX0ZPUl9MRUdBTF9SRUFTT05TOiA0NTEsXG4gICAgVkFSSUFOVF9BTFNPX05FR09USUFURVM6IDUwNixcbiAgICBJTlNVRkZJQ0lFTlRfU1RPUkFHRTogNTA3LFxuICAgIE5FVFdPUktfQVVUSEVOVElDQVRJT05fUkVRVUlSRUQ6IDUxMVxufTtcbi8qdHNsaW50OmRpc2FibGU6cXVvdGVtYXJrIG1heC1saW5lLWxlbmd0aCBvbmUtbGluZSAqL1xuZXhwb3J0IHZhciBTVEFUVVNfQ09ERV9JTkZPID0ge1xuICAgICcxMDAnOiB7XG4gICAgICAgICdjb2RlJzogMTAwLFxuICAgICAgICAndGV4dCc6ICdDb250aW51ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIGluaXRpYWwgcGFydCBvZiBhIHJlcXVlc3QgaGFzIGJlZW4gcmVjZWl2ZWQgYW5kIGhhcyBub3QgeWV0IGJlZW4gcmVqZWN0ZWQgYnkgdGhlIHNlcnZlci5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjIuMScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMi4xJ1xuICAgIH0sXG4gICAgJzEwMSc6IHtcbiAgICAgICAgJ2NvZGUnOiAxMDEsXG4gICAgICAgICd0ZXh0JzogJ1N3aXRjaGluZyBQcm90b2NvbHMnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgdW5kZXJzdGFuZHMgYW5kIGlzIHdpbGxpbmcgdG8gY29tcGx5IHdpdGggdGhlIGNsaWVudFxcJ3MgcmVxdWVzdCwgdmlhIHRoZSBVcGdyYWRlIGhlYWRlciBmaWVsZCwgZm9yIGEgY2hhbmdlIGluIHRoZSBhcHBsaWNhdGlvbiBwcm90b2NvbCBiZWluZyB1c2VkIG9uIHRoaXMgY29ubmVjdGlvbi5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjIuMicsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMi4yJ1xuICAgIH0sXG4gICAgJzIwMCc6IHtcbiAgICAgICAgJ2NvZGUnOiAyMDAsXG4gICAgICAgICd0ZXh0JzogJ09LJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgcmVxdWVzdCBoYXMgc3VjY2VlZGVkLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuMy4xJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjEnXG4gICAgfSxcbiAgICAnMjAxJzoge1xuICAgICAgICAnY29kZSc6IDIwMSxcbiAgICAgICAgJ3RleHQnOiAnQ3JlYXRlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHJlcXVlc3QgaGFzIGJlZW4gZnVsZmlsbGVkIGFuZCBoYXMgcmVzdWx0ZWQgaW4gb25lIG9yIG1vcmUgbmV3IHJlc291cmNlcyBiZWluZyBjcmVhdGVkLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuMy4yJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjInXG4gICAgfSxcbiAgICAnMjAyJzoge1xuICAgICAgICAnY29kZSc6IDIwMixcbiAgICAgICAgJ3RleHQnOiAnQWNjZXB0ZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSByZXF1ZXN0IGhhcyBiZWVuIGFjY2VwdGVkIGZvciBwcm9jZXNzaW5nLCBidXQgdGhlIHByb2Nlc3NpbmcgaGFzIG5vdCBiZWVuIGNvbXBsZXRlZC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjMuMycsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMy4zJ1xuICAgIH0sXG4gICAgJzIwMyc6IHtcbiAgICAgICAgJ2NvZGUnOiAyMDMsXG4gICAgICAgICd0ZXh0JzogJ05vbi1BdXRob3JpdGF0aXZlIEluZm9ybWF0aW9uJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgcmVxdWVzdCB3YXMgc3VjY2Vzc2Z1bCBidXQgdGhlIGVuY2xvc2VkIHBheWxvYWQgaGFzIGJlZW4gbW9kaWZpZWQgZnJvbSB0aGF0IG9mIHRoZSBvcmlnaW4gc2VydmVyXFwncyAyMDAgKE9LKSByZXNwb25zZSBieSBhIHRyYW5zZm9ybWluZyBwcm94eS5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjMuNCcsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMy40J1xuICAgIH0sXG4gICAgJzIwNCc6IHtcbiAgICAgICAgJ2NvZGUnOiAyMDQsXG4gICAgICAgICd0ZXh0JzogJ05vIENvbnRlbnQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgaGFzIHN1Y2Nlc3NmdWxseSBmdWxmaWxsZWQgdGhlIHJlcXVlc3QgYW5kIHRoYXQgdGhlcmUgaXMgbm8gYWRkaXRpb25hbCBjb250ZW50IHRvIHNlbmQgaW4gdGhlIHJlc3BvbnNlIHBheWxvYWQgYm9keS5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjMuNScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMy41J1xuICAgIH0sXG4gICAgJzIwNSc6IHtcbiAgICAgICAgJ2NvZGUnOiAyMDUsXG4gICAgICAgICd0ZXh0JzogJ1Jlc2V0IENvbnRlbnQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgaGFzIGZ1bGZpbGxlZCB0aGUgcmVxdWVzdCBhbmQgZGVzaXJlcyB0aGF0IHRoZSB1c2VyIGFnZW50IHJlc2V0IHRoZSBcXFwiZG9jdW1lbnQgdmlld1xcXCIsIHdoaWNoIGNhdXNlZCB0aGUgcmVxdWVzdCB0byBiZSBzZW50LCB0byBpdHMgb3JpZ2luYWwgc3RhdGUgYXMgcmVjZWl2ZWQgZnJvbSB0aGUgb3JpZ2luIHNlcnZlci5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjMuNicsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMy42J1xuICAgIH0sXG4gICAgJzIwNic6IHtcbiAgICAgICAgJ2NvZGUnOiAyMDYsXG4gICAgICAgICd0ZXh0JzogJ1BhcnRpYWwgQ29udGVudCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBpcyBzdWNjZXNzZnVsbHkgZnVsZmlsbGluZyBhIHJhbmdlIHJlcXVlc3QgZm9yIHRoZSB0YXJnZXQgcmVzb3VyY2UgYnkgdHJhbnNmZXJyaW5nIG9uZSBvciBtb3JlIHBhcnRzIG9mIHRoZSBzZWxlY3RlZCByZXByZXNlbnRhdGlvbiB0aGF0IGNvcnJlc3BvbmQgdG8gdGhlIHNhdGlzZmlhYmxlIHJhbmdlcyBmb3VuZCBpbiB0aGUgcmVxdWVzdHNcXCdzIFJhbmdlIGhlYWRlciBmaWVsZC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMyM0LjEnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzMjc2VjdGlvbi00LjEnXG4gICAgfSxcbiAgICAnMzAwJzoge1xuICAgICAgICAnY29kZSc6IDMwMCxcbiAgICAgICAgJ3RleHQnOiAnTXVsdGlwbGUgQ2hvaWNlcycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHRhcmdldCByZXNvdXJjZSBoYXMgbW9yZSB0aGFuIG9uZSByZXByZXNlbnRhdGlvbiwgZWFjaCB3aXRoIGl0cyBvd24gbW9yZSBzcGVjaWZpYyBpZGVudGlmaWVyLCBhbmQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGFsdGVybmF0aXZlcyBpcyBiZWluZyBwcm92aWRlZCBzbyB0aGF0IHRoZSB1c2VyIChvciB1c2VyIGFnZW50KSBjYW4gc2VsZWN0IGEgcHJlZmVycmVkIHJlcHJlc2VudGF0aW9uIGJ5IHJlZGlyZWN0aW5nIGl0cyByZXF1ZXN0IHRvIG9uZSBvciBtb3JlIG9mIHRob3NlIGlkZW50aWZpZXJzLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNC4xJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi40LjEnXG4gICAgfSxcbiAgICAnMzAxJzoge1xuICAgICAgICAnY29kZSc6IDMwMSxcbiAgICAgICAgJ3RleHQnOiAnTW92ZWQgUGVybWFuZW50bHknLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSB0YXJnZXQgcmVzb3VyY2UgaGFzIGJlZW4gYXNzaWduZWQgYSBuZXcgcGVybWFuZW50IFVSSSBhbmQgYW55IGZ1dHVyZSByZWZlcmVuY2VzIHRvIHRoaXMgcmVzb3VyY2Ugb3VnaHQgdG8gdXNlIG9uZSBvZiB0aGUgZW5jbG9zZWQgVVJJcy5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjQuMicsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNC4yJ1xuICAgIH0sXG4gICAgJzMwMic6IHtcbiAgICAgICAgJ2NvZGUnOiAzMDIsXG4gICAgICAgICd0ZXh0JzogJ0ZvdW5kJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgdGFyZ2V0IHJlc291cmNlIHJlc2lkZXMgdGVtcG9yYXJpbHkgdW5kZXIgYSBkaWZmZXJlbnQgVVJJLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNC4zJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi40LjMnXG4gICAgfSxcbiAgICAnMzAzJzoge1xuICAgICAgICAnY29kZSc6IDMwMyxcbiAgICAgICAgJ3RleHQnOiAnU2VlIE90aGVyJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGlzIHJlZGlyZWN0aW5nIHRoZSB1c2VyIGFnZW50IHRvIGEgZGlmZmVyZW50IHJlc291cmNlLCBhcyBpbmRpY2F0ZWQgYnkgYSBVUkkgaW4gdGhlIExvY2F0aW9uIGhlYWRlciBmaWVsZCwgdGhhdCBpcyBpbnRlbmRlZCB0byBwcm92aWRlIGFuIGluZGlyZWN0IHJlc3BvbnNlIHRvIHRoZSBvcmlnaW5hbCByZXF1ZXN0LlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNC40JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi40LjQnXG4gICAgfSxcbiAgICAnMzA0Jzoge1xuICAgICAgICAnY29kZSc6IDMwNCxcbiAgICAgICAgJ3RleHQnOiAnTm90IE1vZGlmaWVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJBIGNvbmRpdGlvbmFsIEdFVCByZXF1ZXN0IGhhcyBiZWVuIHJlY2VpdmVkIGFuZCB3b3VsZCBoYXZlIHJlc3VsdGVkIGluIGEgMjAwIChPSykgcmVzcG9uc2UgaWYgaXQgd2VyZSBub3QgZm9yIHRoZSBmYWN0IHRoYXQgdGhlIGNvbmRpdGlvbiBoYXMgZXZhbHVhdGVkIHRvIGZhbHNlLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMyIzQuMScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMiNzZWN0aW9uLTQuMSdcbiAgICB9LFxuICAgICczMDUnOiB7XG4gICAgICAgICdjb2RlJzogMzA1LFxuICAgICAgICAndGV4dCc6ICdVc2UgUHJveHknLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnKmRlcHJlY2F0ZWQqJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjQuNScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNC41J1xuICAgIH0sXG4gICAgJzMwNyc6IHtcbiAgICAgICAgJ2NvZGUnOiAzMDcsXG4gICAgICAgICd0ZXh0JzogJ1RlbXBvcmFyeSBSZWRpcmVjdCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHRhcmdldCByZXNvdXJjZSByZXNpZGVzIHRlbXBvcmFyaWx5IHVuZGVyIGEgZGlmZmVyZW50IFVSSSBhbmQgdGhlIHVzZXIgYWdlbnQgTVVTVCBOT1QgY2hhbmdlIHRoZSByZXF1ZXN0IG1ldGhvZCBpZiBpdCBwZXJmb3JtcyBhbiBhdXRvbWF0aWMgcmVkaXJlY3Rpb24gdG8gdGhhdCBVUkkuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi40LjcnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjQuNydcbiAgICB9LFxuICAgICc0MDAnOiB7XG4gICAgICAgICdjb2RlJzogNDAwLFxuICAgICAgICAndGV4dCc6ICdCYWQgUmVxdWVzdCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBjYW5ub3Qgb3Igd2lsbCBub3QgcHJvY2VzcyB0aGUgcmVxdWVzdCBiZWNhdXNlIHRoZSByZWNlaXZlZCBzeW50YXggaXMgaW52YWxpZCwgbm9uc2Vuc2ljYWwsIG9yIGV4Y2VlZHMgc29tZSBsaW1pdGF0aW9uIG9uIHdoYXQgdGhlIHNlcnZlciBpcyB3aWxsaW5nIHRvIHByb2Nlc3MuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjEnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMSdcbiAgICB9LFxuICAgICc0MDEnOiB7XG4gICAgICAgICdjb2RlJzogNDAxLFxuICAgICAgICAndGV4dCc6ICdVbmF1dGhvcml6ZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSByZXF1ZXN0IGhhcyBub3QgYmVlbiBhcHBsaWVkIGJlY2F1c2UgaXQgbGFja3MgdmFsaWQgYXV0aGVudGljYXRpb24gY3JlZGVudGlhbHMgZm9yIHRoZSB0YXJnZXQgcmVzb3VyY2UuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzUjNi4zLjEnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzUjc2VjdGlvbi0zLjEnXG4gICAgfSxcbiAgICAnNDAyJzoge1xuICAgICAgICAnY29kZSc6IDQwMixcbiAgICAgICAgJ3RleHQnOiAnUGF5bWVudCBSZXF1aXJlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICcqcmVzZXJ2ZWQqJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMicsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4yJ1xuICAgIH0sXG4gICAgJzQwMyc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MDMsXG4gICAgICAgICd0ZXh0JzogJ0ZvcmJpZGRlbicsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciB1bmRlcnN0b29kIHRoZSByZXF1ZXN0IGJ1dCByZWZ1c2VzIHRvIGF1dGhvcml6ZSBpdC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMycsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4zJ1xuICAgIH0sXG4gICAgJzQwNCc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MDQsXG4gICAgICAgICd0ZXh0JzogJ05vdCBGb3VuZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIG9yaWdpbiBzZXJ2ZXIgZGlkIG5vdCBmaW5kIGEgY3VycmVudCByZXByZXNlbnRhdGlvbiBmb3IgdGhlIHRhcmdldCByZXNvdXJjZSBvciBpcyBub3Qgd2lsbGluZyB0byBkaXNjbG9zZSB0aGF0IG9uZSBleGlzdHMuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjQnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuNCdcbiAgICB9LFxuICAgICc0MDUnOiB7XG4gICAgICAgICdjb2RlJzogNDA1LFxuICAgICAgICAndGV4dCc6ICdNZXRob2QgTm90IEFsbG93ZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBtZXRob2Qgc3BlY2lmaWVkIGluIHRoZSByZXF1ZXN0LWxpbmUgaXMga25vd24gYnkgdGhlIG9yaWdpbiBzZXJ2ZXIgYnV0IG5vdCBzdXBwb3J0ZWQgYnkgdGhlIHRhcmdldCByZXNvdXJjZS5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuNScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS41J1xuICAgIH0sXG4gICAgJzQwNic6IHtcbiAgICAgICAgJ2NvZGUnOiA0MDYsXG4gICAgICAgICd0ZXh0JzogJ05vdCBBY2NlcHRhYmxlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgdGFyZ2V0IHJlc291cmNlIGRvZXMgbm90IGhhdmUgYSBjdXJyZW50IHJlcHJlc2VudGF0aW9uIHRoYXQgd291bGQgYmUgYWNjZXB0YWJsZSB0byB0aGUgdXNlciBhZ2VudCwgYWNjb3JkaW5nIHRvIHRoZSBwcm9hY3RpdmUgbmVnb3RpYXRpb24gaGVhZGVyIGZpZWxkcyByZWNlaXZlZCBpbiB0aGUgcmVxdWVzdCwgYW5kIHRoZSBzZXJ2ZXIgaXMgdW53aWxsaW5nIHRvIHN1cHBseSBhIGRlZmF1bHQgcmVwcmVzZW50YXRpb24uXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjYnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuNidcbiAgICB9LFxuICAgICc0MDcnOiB7XG4gICAgICAgICdjb2RlJzogNDA3LFxuICAgICAgICAndGV4dCc6ICdQcm94eSBBdXRoZW50aWNhdGlvbiBSZXF1aXJlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIGNsaWVudCBuZWVkcyB0byBhdXRoZW50aWNhdGUgaXRzZWxmIGluIG9yZGVyIHRvIHVzZSBhIHByb3h5LlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuMy4yJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjInXG4gICAgfSxcbiAgICAnNDA4Jzoge1xuICAgICAgICAnY29kZSc6IDQwOCxcbiAgICAgICAgJ3RleHQnOiAnUmVxdWVzdCBUaW1lb3V0JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGRpZCBub3QgcmVjZWl2ZSBhIGNvbXBsZXRlIHJlcXVlc3QgbWVzc2FnZSB3aXRoaW4gdGhlIHRpbWUgdGhhdCBpdCB3YXMgcHJlcGFyZWQgdG8gd2FpdC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuNycsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS43J1xuICAgIH0sXG4gICAgJzQwOSc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MDksXG4gICAgICAgICd0ZXh0JzogJ0NvbmZsaWN0JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgcmVxdWVzdCBjb3VsZCBub3QgYmUgY29tcGxldGVkIGR1ZSB0byBhIGNvbmZsaWN0IHdpdGggdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHJlc291cmNlLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS44JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjgnXG4gICAgfSxcbiAgICAnNDEwJzoge1xuICAgICAgICAnY29kZSc6IDQxMCxcbiAgICAgICAgJ3RleHQnOiAnR29uZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiQWNjZXNzIHRvIHRoZSB0YXJnZXQgcmVzb3VyY2UgaXMgbm8gbG9uZ2VyIGF2YWlsYWJsZSBhdCB0aGUgb3JpZ2luIHNlcnZlciBhbmQgdGhhdCB0aGlzIGNvbmRpdGlvbiBpcyBsaWtlbHkgdG8gYmUgcGVybWFuZW50LlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS45JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjknXG4gICAgfSxcbiAgICAnNDExJzoge1xuICAgICAgICAnY29kZSc6IDQxMSxcbiAgICAgICAgJ3RleHQnOiAnTGVuZ3RoIFJlcXVpcmVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIHJlZnVzZXMgdG8gYWNjZXB0IHRoZSByZXF1ZXN0IHdpdGhvdXQgYSBkZWZpbmVkIENvbnRlbnQtTGVuZ3RoLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS4xMCcsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4xMCdcbiAgICB9LFxuICAgICc0MTInOiB7XG4gICAgICAgICdjb2RlJzogNDEyLFxuICAgICAgICAndGV4dCc6ICdQcmVjb25kaXRpb24gRmFpbGVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJPbmUgb3IgbW9yZSBwcmVjb25kaXRpb25zIGdpdmVuIGluIHRoZSByZXF1ZXN0IGhlYWRlciBmaWVsZHMgZXZhbHVhdGVkIHRvIGZhbHNlIHdoZW4gdGVzdGVkIG9uIHRoZSBzZXJ2ZXIuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzIjNC4yJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMyI3NlY3Rpb24tNC4yJ1xuICAgIH0sXG4gICAgJzQxMyc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MTMsXG4gICAgICAgICd0ZXh0JzogJ1BheWxvYWQgVG9vIExhcmdlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGlzIHJlZnVzaW5nIHRvIHByb2Nlc3MgYSByZXF1ZXN0IGJlY2F1c2UgdGhlIHJlcXVlc3QgcGF5bG9hZCBpcyBsYXJnZXIgdGhhbiB0aGUgc2VydmVyIGlzIHdpbGxpbmcgb3IgYWJsZSB0byBwcm9jZXNzLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS4xMScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4xMSdcbiAgICB9LFxuICAgICc0MTQnOiB7XG4gICAgICAgICdjb2RlJzogNDE0LFxuICAgICAgICAndGV4dCc6ICdVUkkgVG9vIExvbmcnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgaXMgcmVmdXNpbmcgdG8gc2VydmljZSB0aGUgcmVxdWVzdCBiZWNhdXNlIHRoZSByZXF1ZXN0LXRhcmdldCBpcyBsb25nZXIgdGhhbiB0aGUgc2VydmVyIGlzIHdpbGxpbmcgdG8gaW50ZXJwcmV0LlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS4xMicsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4xMidcbiAgICB9LFxuICAgICc0MTUnOiB7XG4gICAgICAgICdjb2RlJzogNDE1LFxuICAgICAgICAndGV4dCc6ICdVbnN1cHBvcnRlZCBNZWRpYSBUeXBlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgb3JpZ2luIHNlcnZlciBpcyByZWZ1c2luZyB0byBzZXJ2aWNlIHRoZSByZXF1ZXN0IGJlY2F1c2UgdGhlIHBheWxvYWQgaXMgaW4gYSBmb3JtYXQgbm90IHN1cHBvcnRlZCBieSB0aGUgdGFyZ2V0IHJlc291cmNlIGZvciB0aGlzIG1ldGhvZC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMTMnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMTMnXG4gICAgfSxcbiAgICAnNDE2Jzoge1xuICAgICAgICAnY29kZSc6IDQxNixcbiAgICAgICAgJ3RleHQnOiAnUmFuZ2UgTm90IFNhdGlzZmlhYmxlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJOb25lIG9mIHRoZSByYW5nZXMgaW4gdGhlIHJlcXVlc3RcXCdzIFJhbmdlIGhlYWRlciBmaWVsZCBvdmVybGFwIHRoZSBjdXJyZW50IGV4dGVudCBvZiB0aGUgc2VsZWN0ZWQgcmVzb3VyY2Ugb3IgdGhhdCB0aGUgc2V0IG9mIHJhbmdlcyByZXF1ZXN0ZWQgaGFzIGJlZW4gcmVqZWN0ZWQgZHVlIHRvIGludmFsaWQgcmFuZ2VzIG9yIGFuIGV4Y2Vzc2l2ZSByZXF1ZXN0IG9mIHNtYWxsIG9yIG92ZXJsYXBwaW5nIHJhbmdlcy5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMyM0LjQnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzMjc2VjdGlvbi00LjQnXG4gICAgfSxcbiAgICAnNDE3Jzoge1xuICAgICAgICAnY29kZSc6IDQxNyxcbiAgICAgICAgJ3RleHQnOiAnRXhwZWN0YXRpb24gRmFpbGVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgZXhwZWN0YXRpb24gZ2l2ZW4gaW4gdGhlIHJlcXVlc3RcXCdzIEV4cGVjdCBoZWFkZXIgZmllbGQgY291bGQgbm90IGJlIG1ldCBieSBhdCBsZWFzdCBvbmUgb2YgdGhlIGluYm91bmQgc2VydmVycy5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMTQnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMTQnXG4gICAgfSxcbiAgICAnNDE4Jzoge1xuICAgICAgICAnY29kZSc6IDQxOCxcbiAgICAgICAgJ3RleHQnOiAnSVxcJ20gYSB0ZWFwb3QnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIjE5ODggQXByaWwgRm9vbHMgSm9rZS4gUmV0dXJuZWQgYnkgdGVhIHBvdHMgcmVxdWVzdGVkIHRvIGJyZXcgY29mZmVlLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkMgMjMyNCcsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzIzMjQnXG4gICAgfSxcbiAgICAnNDI2Jzoge1xuICAgICAgICAnY29kZSc6IDQyNixcbiAgICAgICAgJ3RleHQnOiAnVXBncmFkZSBSZXF1aXJlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciByZWZ1c2VzIHRvIHBlcmZvcm0gdGhlIHJlcXVlc3QgdXNpbmcgdGhlIGN1cnJlbnQgcHJvdG9jb2wgYnV0IG1pZ2h0IGJlIHdpbGxpbmcgdG8gZG8gc28gYWZ0ZXIgdGhlIGNsaWVudCB1cGdyYWRlcyB0byBhIGRpZmZlcmVudCBwcm90b2NvbC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMTUnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMTUnXG4gICAgfSxcbiAgICAnNTAwJzoge1xuICAgICAgICAnY29kZSc6IDUwMCxcbiAgICAgICAgJ3RleHQnOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGVuY291bnRlcmVkIGFuIHVuZXhwZWN0ZWQgY29uZGl0aW9uIHRoYXQgcHJldmVudGVkIGl0IGZyb20gZnVsZmlsbGluZyB0aGUgcmVxdWVzdC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjYuMScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNi4xJ1xuICAgIH0sXG4gICAgJzUwMSc6IHtcbiAgICAgICAgJ2NvZGUnOiA1MDEsXG4gICAgICAgICd0ZXh0JzogJ05vdCBJbXBsZW1lbnRlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSBmdW5jdGlvbmFsaXR5IHJlcXVpcmVkIHRvIGZ1bGZpbGwgdGhlIHJlcXVlc3QuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi42LjInLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjYuMidcbiAgICB9LFxuICAgICc1MDInOiB7XG4gICAgICAgICdjb2RlJzogNTAyLFxuICAgICAgICAndGV4dCc6ICdCYWQgR2F0ZXdheScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciwgd2hpbGUgYWN0aW5nIGFzIGEgZ2F0ZXdheSBvciBwcm94eSwgcmVjZWl2ZWQgYW4gaW52YWxpZCByZXNwb25zZSBmcm9tIGFuIGluYm91bmQgc2VydmVyIGl0IGFjY2Vzc2VkIHdoaWxlIGF0dGVtcHRpbmcgdG8gZnVsZmlsbCB0aGUgcmVxdWVzdC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjYuMycsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNi4zJ1xuICAgIH0sXG4gICAgJzUwMyc6IHtcbiAgICAgICAgJ2NvZGUnOiA1MDMsXG4gICAgICAgICd0ZXh0JzogJ1NlcnZpY2UgVW5hdmFpbGFibGUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgaXMgY3VycmVudGx5IHVuYWJsZSB0byBoYW5kbGUgdGhlIHJlcXVlc3QgZHVlIHRvIGEgdGVtcG9yYXJ5IG92ZXJsb2FkIG9yIHNjaGVkdWxlZCBtYWludGVuYW5jZSwgd2hpY2ggd2lsbCBsaWtlbHkgYmUgYWxsZXZpYXRlZCBhZnRlciBzb21lIGRlbGF5LlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNi40JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi42LjQnXG4gICAgfSxcbiAgICAnNTA0Jzoge1xuICAgICAgICAnY29kZSc6IDUwNCxcbiAgICAgICAgJ3RleHQnOiAnR2F0ZXdheSBUaW1lLW91dCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciwgd2hpbGUgYWN0aW5nIGFzIGEgZ2F0ZXdheSBvciBwcm94eSwgZGlkIG5vdCByZWNlaXZlIGEgdGltZWx5IHJlc3BvbnNlIGZyb20gYW4gdXBzdHJlYW0gc2VydmVyIGl0IG5lZWRlZCB0byBhY2Nlc3MgaW4gb3JkZXIgdG8gY29tcGxldGUgdGhlIHJlcXVlc3QuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi42LjUnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjYuNSdcbiAgICB9LFxuICAgICc1MDUnOiB7XG4gICAgICAgICdjb2RlJzogNTA1LFxuICAgICAgICAndGV4dCc6ICdIVFRQIFZlcnNpb24gTm90IFN1cHBvcnRlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBkb2VzIG5vdCBzdXBwb3J0LCBvciByZWZ1c2VzIHRvIHN1cHBvcnQsIHRoZSBwcm90b2NvbCB2ZXJzaW9uIHRoYXQgd2FzIHVzZWQgaW4gdGhlIHJlcXVlc3QgbWVzc2FnZS5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjYuNicsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNi42J1xuICAgIH0sXG4gICAgJzEwMic6IHtcbiAgICAgICAgJ2NvZGUnOiAxMDIsXG4gICAgICAgICd0ZXh0JzogJ1Byb2Nlc3NpbmcnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIkFuIGludGVyaW0gcmVzcG9uc2UgdG8gaW5mb3JtIHRoZSBjbGllbnQgdGhhdCB0aGUgc2VydmVyIGhhcyBhY2NlcHRlZCB0aGUgY29tcGxldGUgcmVxdWVzdCwgYnV0IGhhcyBub3QgeWV0IGNvbXBsZXRlZCBpdC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNTIxOCMxMC4xJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNTE4I3NlY3Rpb24tMTAuMSdcbiAgICB9LFxuICAgICcyMDcnOiB7XG4gICAgICAgICdjb2RlJzogMjA3LFxuICAgICAgICAndGV4dCc6ICdNdWx0aS1TdGF0dXMnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlN0YXR1cyBmb3IgbXVsdGlwbGUgaW5kZXBlbmRlbnQgb3BlcmF0aW9ucy5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNTIxOCMxMC4yJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNTE4I3NlY3Rpb24tMTAuMidcbiAgICB9LFxuICAgICcyMjYnOiB7XG4gICAgICAgICdjb2RlJzogMjI2LFxuICAgICAgICAndGV4dCc6ICdJTSBVc2VkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGhhcyBmdWxmaWxsZWQgYSBHRVQgcmVxdWVzdCBmb3IgdGhlIHJlc291cmNlLCBhbmQgdGhlIHJlc3BvbnNlIGlzIGEgcmVwcmVzZW50YXRpb24gb2YgdGhlIHJlc3VsdCBvZiBvbmUgb3IgbW9yZSBpbnN0YW5jZS1tYW5pcHVsYXRpb25zIGFwcGxpZWQgdG8gdGhlIGN1cnJlbnQgaW5zdGFuY2UuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzMyMjkjMTAuNC4xJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzMjI5I3NlY3Rpb24tMTAuNC4xJ1xuICAgIH0sXG4gICAgJzMwOCc6IHtcbiAgICAgICAgJ2NvZGUnOiAzMDgsXG4gICAgICAgICd0ZXh0JzogJ1Blcm1hbmVudCBSZWRpcmVjdCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHRhcmdldCByZXNvdXJjZSBoYXMgYmVlbiBhc3NpZ25lZCBhIG5ldyBwZXJtYW5lbnQgVVJJIGFuZCBhbnkgZnV0dXJlIHJlZmVyZW5jZXMgdG8gdGhpcyByZXNvdXJjZSBTSE9VTEQgdXNlIG9uZSBvZiB0aGUgcmV0dXJuZWQgVVJJcy4gWy4uLl0gVGhpcyBzdGF0dXMgY29kZSBpcyBzaW1pbGFyIHRvIDMwMSBNb3ZlZCBQZXJtYW5lbnRseSAoU2VjdGlvbiA3LjMuMiBvZiByZmM3MjMxKSwgZXhjZXB0IHRoYXQgaXQgZG9lcyBub3QgYWxsb3cgcmV3cml0aW5nIHRoZSByZXF1ZXN0IG1ldGhvZCBmcm9tIFBPU1QgdG8gR0VULlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjM4JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjM4J1xuICAgIH0sXG4gICAgJzQyMic6IHtcbiAgICAgICAgJ2NvZGUnOiA0MjIsXG4gICAgICAgICd0ZXh0JzogJ1VucHJvY2Vzc2FibGUgRW50aXR5JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIHVuZGVyc3RhbmRzIHRoZSBjb250ZW50IHR5cGUgb2YgdGhlIHJlcXVlc3QgZW50aXR5IChoZW5jZSBhIDQxNShVbnN1cHBvcnRlZCBNZWRpYSBUeXBlKSBzdGF0dXMgY29kZSBpcyBpbmFwcHJvcHJpYXRlKSwgYW5kIHRoZSBzeW50YXggb2YgdGhlIHJlcXVlc3QgZW50aXR5IGlzIGNvcnJlY3QgKHRodXMgYSA0MDAgKEJhZCBSZXF1ZXN0KSBzdGF0dXMgY29kZSBpcyBpbmFwcHJvcHJpYXRlKSBidXQgd2FzIHVuYWJsZSB0byBwcm9jZXNzIHRoZSBjb250YWluZWQgaW5zdHJ1Y3Rpb25zLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM1MjE4IzEwLjMnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzI1MTgjc2VjdGlvbi0xMC4zJ1xuICAgIH0sXG4gICAgJzQyMyc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MjMsXG4gICAgICAgICd0ZXh0JzogJ0xvY2tlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNvdXJjZSBvciBkZXN0aW5hdGlvbiByZXNvdXJjZSBvZiBhIG1ldGhvZCBpcyBsb2NrZWQuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzUyMTgjMTAuNCcsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjUxOCNzZWN0aW9uLTEwLjQnXG4gICAgfSxcbiAgICAnNDI0Jzoge1xuICAgICAgICAnY29kZSc6IDQyNCxcbiAgICAgICAgJ3RleHQnOiAnRmFpbGVkIERlcGVuZGVuY3knLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBtZXRob2QgY291bGQgbm90IGJlIHBlcmZvcm1lZCBvbiB0aGUgcmVzb3VyY2UgYmVjYXVzZSB0aGUgcmVxdWVzdGVkIGFjdGlvbiBkZXBlbmRlZCBvbiBhbm90aGVyIGFjdGlvbiBhbmQgdGhhdCBhY3Rpb24gZmFpbGVkLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM1MjE4IzEwLjUnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzI1MTgjc2VjdGlvbi0xMC41J1xuICAgIH0sXG4gICAgJzQyOCc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MjgsXG4gICAgICAgICd0ZXh0JzogJ1ByZWNvbmRpdGlvbiBSZXF1aXJlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIG9yaWdpbiBzZXJ2ZXIgcmVxdWlyZXMgdGhlIHJlcXVlc3QgdG8gYmUgY29uZGl0aW9uYWwuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzY1ODUjMycsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjU4NSNzZWN0aW9uLTMnXG4gICAgfSxcbiAgICAnNDI5Jzoge1xuICAgICAgICAnY29kZSc6IDQyOSxcbiAgICAgICAgJ3RleHQnOiAnVG9vIE1hbnkgUmVxdWVzdHMnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSB1c2VyIGhhcyBzZW50IHRvbyBtYW55IHJlcXVlc3RzIGluIGEgZ2l2ZW4gYW1vdW50IG9mIHRpbWUgKFxcXCJyYXRlIGxpbWl0aW5nXFxcIikuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzY1ODUjNCcsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjU4NSNzZWN0aW9uLTQnXG4gICAgfSxcbiAgICAnNDMxJzoge1xuICAgICAgICAnY29kZSc6IDQzMSxcbiAgICAgICAgJ3RleHQnOiAnUmVxdWVzdCBIZWFkZXIgRmllbGRzIFRvbyBMYXJnZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBpcyB1bndpbGxpbmcgdG8gcHJvY2VzcyB0aGUgcmVxdWVzdCBiZWNhdXNlIGl0cyBoZWFkZXIgZmllbGRzIGFyZSB0b28gbGFyZ2UuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzY1ODUjNScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjU4NSNzZWN0aW9uLTUnXG4gICAgfSxcbiAgICAnNDUxJzoge1xuICAgICAgICAnY29kZSc6IDQ1MSxcbiAgICAgICAgJ3RleHQnOiAnVW5hdmFpbGFibGUgRm9yIExlZ2FsIFJlYXNvbnMnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgaXMgZGVueWluZyBhY2Nlc3MgdG8gdGhlIHJlc291cmNlIGluIHJlc3BvbnNlIHRvIGEgbGVnYWwgZGVtYW5kLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdkcmFmdC1pZXRmLWh0dHBiaXMtbGVnYWxseS1yZXN0cmljdGVkLXN0YXR1cycsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvZHJhZnQtaWV0Zi1odHRwYmlzLWxlZ2FsbHktcmVzdHJpY3RlZC1zdGF0dXMnXG4gICAgfSxcbiAgICAnNTA2Jzoge1xuICAgICAgICAnY29kZSc6IDUwNixcbiAgICAgICAgJ3RleHQnOiAnVmFyaWFudCBBbHNvIE5lZ290aWF0ZXMnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgaGFzIGFuIGludGVybmFsIGNvbmZpZ3VyYXRpb24gZXJyb3I6IHRoZSBjaG9zZW4gdmFyaWFudCByZXNvdXJjZSBpcyBjb25maWd1cmVkIHRvIGVuZ2FnZSBpbiB0cmFuc3BhcmVudCBjb250ZW50IG5lZ290aWF0aW9uIGl0c2VsZiwgYW5kIGlzIHRoZXJlZm9yZSBub3QgYSBwcm9wZXIgZW5kIHBvaW50IGluIHRoZSBuZWdvdGlhdGlvbiBwcm9jZXNzLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkMyMjk1IzguMScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjI5NSNzZWN0aW9uLTguMSdcbiAgICB9LFxuICAgICc1MDcnOiB7XG4gICAgICAgICdjb2RlJzogNTA3LFxuICAgICAgICAndGV4dCc6ICdJbnN1ZmZpY2llbnQgU3RvcmFnZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFRoZSBtZXRob2QgY291bGQgbm90IGJlIHBlcmZvcm1lZCBvbiB0aGUgcmVzb3VyY2UgYmVjYXVzZSB0aGUgc2VydmVyIGlzIHVuYWJsZSB0byBzdG9yZSB0aGUgcmVwcmVzZW50YXRpb24gbmVlZGVkIHRvIHN1Y2Nlc3NmdWxseSBjb21wbGV0ZSB0aGUgcmVxdWVzdC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNTIxOCMxMC42JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNTE4I3NlY3Rpb24tMTAuNidcbiAgICB9LFxuICAgICc1MTEnOiB7XG4gICAgICAgICdjb2RlJzogNTExLFxuICAgICAgICAndGV4dCc6ICdOZXR3b3JrIEF1dGhlbnRpY2F0aW9uIFJlcXVpcmVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgY2xpZW50IG5lZWRzIHRvIGF1dGhlbnRpY2F0ZSB0byBnYWluIG5ldHdvcmsgYWNjZXNzLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM2NTg1IzYnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzY1ODUjc2VjdGlvbi02J1xuICAgIH1cbn07XG4vKipcbiAqIGdldCB0aGUgc3RhdHVzIHRleHQgZnJvbSBTdGF0dXNDb2RlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0dXNUZXh0KHN0YXR1cykge1xuICAgIHJldHVybiBTVEFUVVNfQ09ERV9JTkZPW3N0YXR1c10udGV4dCB8fCAnVW5rbm93biBTdGF0dXMnO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHRoZSBIdHRwIFN0YXR1cyBDb2RlIGlzIDIwMC0yOTkgKHN1Y2Nlc3MpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1N1Y2Nlc3Moc3RhdHVzKSB7IHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDsgfVxuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHR0cC1zdGF0dXMtY29kZXMuanMubWFwIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLyoqXG4qIEludGVyZmFjZSBmb3IgYSBjbGFzcyB0aGF0IGNyZWF0ZXMgYW4gaW4tbWVtb3J5IGRhdGFiYXNlXG4qXG4qIEl0cyBgY3JlYXRlRGJgIG1ldGhvZCBjcmVhdGVzIGEgaGFzaCBvZiBuYW1lZCBjb2xsZWN0aW9ucyB0aGF0IHJlcHJlc2VudHMgdGhlIGRhdGFiYXNlXG4qXG4qIEZvciBtYXhpbXVtIGZsZXhpYmlsaXR5LCB0aGUgc2VydmljZSBtYXkgZGVmaW5lIEhUVFAgbWV0aG9kIG92ZXJyaWRlcy5cbiogU3VjaCBtZXRob2RzIG11c3QgbWF0Y2ggdGhlIHNwZWxsaW5nIG9mIGFuIEhUVFAgbWV0aG9kIGluIGxvd2VyIGNhc2UgKGUuZywgXCJnZXRcIikuXG4qIElmIGEgcmVxdWVzdCBoYXMgYSBtYXRjaGluZyBtZXRob2QsIGl0IHdpbGwgYmUgY2FsbGVkIGFzIGluXG4qIGBnZXQoaW5mbzogcmVxdWVzdEluZm8sIGRiOiB7fSlgIHdoZXJlIGBkYmAgaXMgdGhlIGRhdGFiYXNlIG9iamVjdCBkZXNjcmliZWQgYWJvdmUuXG4qL1xudmFyIEluTWVtb3J5RGJTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBJbk1lbW9yeURiU2VydmljZSgpIHtcbiAgICB9XG4gICAgcmV0dXJuIEluTWVtb3J5RGJTZXJ2aWNlO1xufSgpKTtcbmV4cG9ydCB7IEluTWVtb3J5RGJTZXJ2aWNlIH07XG4vKipcbiogSW50ZXJmYWNlIGZvciBJbk1lbW9yeUJhY2tlbmQgY29uZmlndXJhdGlvbiBvcHRpb25zXG4qL1xudmFyIEluTWVtb3J5QmFja2VuZENvbmZpZ0FyZ3MgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEluTWVtb3J5QmFja2VuZENvbmZpZ0FyZ3MoKSB7XG4gICAgfVxuICAgIHJldHVybiBJbk1lbW9yeUJhY2tlbmRDb25maWdBcmdzO1xufSgpKTtcbmV4cG9ydCB7IEluTWVtb3J5QmFja2VuZENvbmZpZ0FyZ3MgfTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLyoqXG4qICBJbk1lbW9yeUJhY2tlbmRTZXJ2aWNlIGNvbmZpZ3VyYXRpb24gb3B0aW9uc1xuKiAgVXNhZ2U6XG4qICAgIEluTWVtb3J5V2ViQXBpTW9kdWxlLmZvclJvb3QoSW5NZW1IZXJvU2VydmljZSwge2RlbGF5OiA2MDB9KVxuKlxuKiAgb3IgaWYgcHJvdmlkaW5nIHNlcGFyYXRlbHk6XG4qICAgIHByb3ZpZGUoSW5NZW1vcnlCYWNrZW5kQ29uZmlnLCB7dXNlVmFsdWU6IHtkZWxheTogNjAwfX0pLFxuKi9cbnZhciBJbk1lbW9yeUJhY2tlbmRDb25maWcgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEluTWVtb3J5QmFja2VuZENvbmZpZyhjb25maWcpIHtcbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gdm9pZCAwKSB7IGNvbmZpZyA9IHt9OyB9XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xuICAgICAgICAgICAgLy8gZGVmYXVsdCBjb25maWc6XG4gICAgICAgICAgICBjYXNlU2Vuc2l0aXZlU2VhcmNoOiBmYWxzZSxcbiAgICAgICAgICAgIGRhdGFFbmNhcHN1bGF0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgIGRlbGF5OiA1MDAsXG4gICAgICAgICAgICBkZWxldGU0MDQ6IGZhbHNlLFxuICAgICAgICAgICAgcGFzc1RocnVVbmtub3duVXJsOiBmYWxzZSxcbiAgICAgICAgICAgIHBvc3QyMDQ6IHRydWUsXG4gICAgICAgICAgICBwb3N0NDA5OiBmYWxzZSxcbiAgICAgICAgICAgIHB1dDIwNDogdHJ1ZSxcbiAgICAgICAgICAgIHB1dDQwNDogZmFsc2UsXG4gICAgICAgICAgICBhcGlCYXNlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBob3N0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICByb290UGF0aDogdW5kZWZpbmVkIC8vIGRlZmF1bHQgdmFsdWUgaXMgYWN0dWFsbHkgc2V0IGluIEluTWVtb3J5QmFja2VuZFNlcnZpY2UgY3RvclxuICAgICAgICB9LCBjb25maWcpO1xuICAgIH1cbiAgICByZXR1cm4gSW5NZW1vcnlCYWNrZW5kQ29uZmlnO1xufSgpKTtcbmV4cG9ydCB7IEluTWVtb3J5QmFja2VuZENvbmZpZyB9O1xuSW5NZW1vcnlCYWNrZW5kQ29uZmlnLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBJbmplY3RhYmxlIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5Jbk1lbW9yeUJhY2tlbmRDb25maWcuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgeyB0eXBlOiBJbk1lbW9yeUJhY2tlbmRDb25maWdBcmdzLCB9LFxuXTsgfTtcbi8qKiBSZXR1cm4gaW5mb3JtYXRpb24gKFVyaUluZm8pIGFib3V0IGEgVVJJICAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVXJpKHN0cikge1xuICAgIC8vIEFkYXB0ZWQgZnJvbSBwYXJzZXVyaSBwYWNrYWdlIC0gaHR0cDovL2Jsb2cuc3RldmVubGV2aXRoYW4uY29tL2FyY2hpdmVzL3BhcnNldXJpXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgIHZhciBVUkxfUkVHRVggPSAvXig/Oig/IVteOkBdKzpbXjpAXFwvXSpAKShbXjpcXC8/Iy5dKyk6KT8oPzpcXC9cXC8pPygoPzooKFteOkBdKikoPzo6KFteOkBdKikpPyk/QCk/KFteOlxcLz8jXSopKD86OihcXGQqKSk/KSgoKFxcLyg/OltePyNdKD8hW14/I1xcL10qXFwuW14/I1xcLy5dKyg/Ols/I118JCkpKSpcXC8/KT8oW14/I1xcL10qKSkoPzpcXD8oW14jXSopKT8oPzojKC4qKSk/KS87XG4gICAgdmFyIG0gPSBVUkxfUkVHRVguZXhlYyhzdHIpO1xuICAgIHZhciB1cmkgPSB7XG4gICAgICAgIHNvdXJjZTogJycsXG4gICAgICAgIHByb3RvY29sOiAnJyxcbiAgICAgICAgYXV0aG9yaXR5OiAnJyxcbiAgICAgICAgdXNlckluZm86ICcnLFxuICAgICAgICB1c2VyOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICBob3N0OiAnJyxcbiAgICAgICAgcG9ydDogJycsXG4gICAgICAgIHJlbGF0aXZlOiAnJyxcbiAgICAgICAgcGF0aDogJycsXG4gICAgICAgIGRpcmVjdG9yeTogJycsXG4gICAgICAgIGZpbGU6ICcnLFxuICAgICAgICBxdWVyeTogJycsXG4gICAgICAgIGFuY2hvcjogJydcbiAgICB9O1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModXJpKTtcbiAgICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgdXJpW2tleXNbaV1dID0gbVtpXSB8fCAnJztcbiAgICB9XG4gICAgcmV0dXJuIHVyaTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUcmFpbGluZ1NsYXNoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW50ZXJmYWNlcy5qcy5tYXAiLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMvQmVoYXZpb3JTdWJqZWN0JztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcy9vYnNlcnZhYmxlL29mJztcbmltcG9ydCB7IGZyb21Qcm9taXNlIH0gZnJvbSAncnhqcy9vYnNlcnZhYmxlL2Zyb21Qcm9taXNlJztcbmltcG9ydCB7IGlzUHJvbWlzZSB9IGZyb20gJ3J4anMvdXRpbC9pc1Byb21pc2UnO1xuaW1wb3J0IHsgY29uY2F0TWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvci9jb25jYXRNYXAnO1xuaW1wb3J0IHsgZGVsYXkgfSBmcm9tICdyeGpzL29wZXJhdG9yL2RlbGF5JztcbmltcG9ydCB7IGZpcnN0IH0gZnJvbSAncnhqcy9vcGVyYXRvci9maXJzdCc7XG5pbXBvcnQgeyBnZXRTdGF0dXNUZXh0LCBpc1N1Y2Nlc3MsIFNUQVRVUyB9IGZyb20gJy4vaHR0cC1zdGF0dXMtY29kZXMnO1xuaW1wb3J0IHsgSW5NZW1vcnlCYWNrZW5kQ29uZmlnLCBwYXJzZVVyaSwgcmVtb3ZlVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIGluLW1lbW9yeSB3ZWIgYXBpIGJhY2stZW5kc1xuICogU2ltdWxhdGUgdGhlIGJlaGF2aW9yIG9mIGEgUkVTVHkgd2ViIGFwaVxuICogYmFja2VkIGJ5IHRoZSBzaW1wbGUgaW4tbWVtb3J5IGRhdGEgc3RvcmUgcHJvdmlkZWQgYnkgdGhlIGluamVjdGVkIGBJbk1lbW9yeURiU2VydmljZWAgc2VydmljZS5cbiAqIENvbmZvcm1zIG1vc3RseSB0byBiZWhhdmlvciBkZXNjcmliZWQgaGVyZTpcbiAqIGh0dHA6Ly93d3cucmVzdGFwaXR1dG9yaWFsLmNvbS9sZXNzb25zL2h0dHBtZXRob2RzLmh0bWxcbiAqL1xudmFyIEJhY2tlbmRTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCYWNrZW5kU2VydmljZShpbk1lbURiU2VydmljZSwgY29uZmlnKSB7XG4gICAgICAgIGlmIChjb25maWcgPT09IHZvaWQgMCkgeyBjb25maWcgPSB7fTsgfVxuICAgICAgICB0aGlzLmluTWVtRGJTZXJ2aWNlID0gaW5NZW1EYlNlcnZpY2U7XG4gICAgICAgIHRoaXMuY29uZmlnID0gbmV3IEluTWVtb3J5QmFja2VuZENvbmZpZygpO1xuICAgICAgICB0aGlzLnJlcXVlc3RJbmZvVXRpbHMgPSB0aGlzLmdldFJlcXVlc3RJbmZvVXRpbHMoKTtcbiAgICAgICAgdmFyIGxvYyA9IHRoaXMuZ2V0TG9jYXRpb24oJy8nKTtcbiAgICAgICAgdGhpcy5jb25maWcuaG9zdCA9IGxvYy5ob3N0OyAvLyBkZWZhdWx0IHRvIGFwcCB3ZWIgc2VydmVyIGhvc3RcbiAgICAgICAgdGhpcy5jb25maWcucm9vdFBhdGggPSBsb2MucGF0aDsgLy8gZGVmYXVsdCB0byBwYXRoIHdoZW4gYXBwIGlzIHNlcnZlZCAoZS5nLicvJylcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmNvbmZpZywgY29uZmlnKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZSwgXCJkYlJlYWR5XCIsIHtcbiAgICAgICAgLy8vLyAgcHJvdGVjdGVkIC8vLy8vXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRiUmVhZHlTdWJqZWN0KSB7XG4gICAgICAgICAgICAgICAgLy8gZmlyc3QgdGltZSB0aGUgc2VydmljZSBpcyBjYWxsZWQuXG4gICAgICAgICAgICAgICAgdGhpcy5kYlJlYWR5U3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXREYigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZpcnN0LmNhbGwodGhpcy5kYlJlYWR5U3ViamVjdC5hc09ic2VydmFibGUoKSwgZnVuY3Rpb24gKHIpIHsgcmV0dXJuIHI7IH0pO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBQcm9jZXNzIFJlcXVlc3QgYW5kIHJldHVybiBhbiBPYnNlcnZhYmxlIG9mIEh0dHAgUmVzcG9uc2Ugb2JqZWN0XG4gICAgICogaW4gdGhlIG1hbm5lciBvZiBhIFJFU1R5IHdlYiBhcGkuXG4gICAgICpcbiAgICAgKiBFeHBlY3QgVVJJIHBhdHRlcm4gaW4gdGhlIGZvcm0gOmJhc2UvOmNvbGxlY3Rpb25OYW1lLzppZD9cbiAgICAgKiBFeGFtcGxlczpcbiAgICAgKiAgIC8vIGZvciBzdG9yZSB3aXRoIGEgJ2N1c3RvbWVycycgY29sbGVjdGlvblxuICAgICAqICAgR0VUIGFwaS9jdXN0b21lcnMgICAgICAgICAgLy8gYWxsIGN1c3RvbWVyc1xuICAgICAqICAgR0VUIGFwaS9jdXN0b21lcnMvNDIgICAgICAgLy8gdGhlIGNoYXJhY3RlciB3aXRoIGlkPTQyXG4gICAgICogICBHRVQgYXBpL2N1c3RvbWVycz9uYW1lPV5qICAvLyAnaicgaXMgYSByZWdleDsgcmV0dXJucyBjdXN0b21lcnMgd2hvc2UgbmFtZSBzdGFydHMgd2l0aCAnaicgb3IgJ0onXG4gICAgICogICBHRVQgYXBpL2N1c3RvbWVycy5qc29uLzQyICAvLyBpZ25vcmVzIHRoZSBcIi5qc29uXCJcbiAgICAgKlxuICAgICAqIEFsc28gYWNjZXB0cyBkaXJlY3QgY29tbWFuZHMgdG8gdGhlIHNlcnZpY2UgaW4gd2hpY2ggdGhlIGxhc3Qgc2VnbWVudCBvZiB0aGUgYXBpQmFzZSBpcyB0aGUgd29yZCBcImNvbW1hbmRzXCJcbiAgICAgKiBFeGFtcGxlczpcbiAgICAgKiAgICAgUE9TVCBjb21tYW5kcy9yZXNldERiLFxuICAgICAqICAgICBHRVQvUE9TVCBjb21tYW5kcy9jb25maWcgLSBnZXQgb3IgKHJlKXNldCB0aGUgY29uZmlnXG4gICAgICpcbiAgICAgKiAgIEhUVFAgb3ZlcnJpZGVzOlxuICAgICAqICAgICBJZiB0aGUgaW5qZWN0ZWQgaW5NZW1EYlNlcnZpY2UgZGVmaW5lcyBhbiBIVFRQIG1ldGhvZCAobG93ZXJjYXNlKVxuICAgICAqICAgICBUaGUgcmVxdWVzdCBpcyBmb3J3YXJkZWQgdG8gdGhhdCBtZXRob2QgYXMgaW5cbiAgICAgKiAgICAgYGluTWVtRGJTZXJ2aWNlLmdldChyZXF1ZXN0SW5mbylgXG4gICAgICogICAgIHdoaWNoIG11c3QgcmV0dXJuIGVpdGhlciBhbiBPYnNlcnZhYmxlIG9mIHRoZSByZXNwb25zZSB0eXBlXG4gICAgICogICAgIGZvciB0aGlzIGh0dHAgbGlicmFyeSBvciBudWxsfHVuZGVmaW5lZCAod2hpY2ggbWVhbnMgXCJrZWVwIHByb2Nlc3NpbmdcIikuXG4gICAgICovXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmhhbmRsZVJlcXVlc3QgPSBmdW5jdGlvbiAocmVxKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vICBoYW5kbGUgdGhlIHJlcXVlc3Qgd2hlbiB0aGVyZSBpcyBhbiBpbi1tZW1vcnkgZGF0YWJhc2VcbiAgICAgICAgcmV0dXJuIGNvbmNhdE1hcC5jYWxsKHRoaXMuZGJSZWFkeSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlUmVxdWVzdF8ocmVxKTsgfSk7XG4gICAgfTtcbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuaGFuZGxlUmVxdWVzdF8gPSBmdW5jdGlvbiAocmVxKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciB1cmwgPSByZXEudXJsO1xuICAgICAgICAvLyBUcnkgb3ZlcnJpZGUgcGFyc2VyXG4gICAgICAgIC8vIElmIG5vIG92ZXJyaWRlIHBhcnNlciBvciBpdCByZXR1cm5zIG5vdGhpbmcsIHVzZSBkZWZhdWx0IHBhcnNlclxuICAgICAgICB2YXIgcGFyc2VyID0gdGhpcy5iaW5kKCdwYXJzZVJlcXVlc3RVcmwnKTtcbiAgICAgICAgdmFyIHBhcnNlZCA9IChwYXJzZXIgJiYgcGFyc2VyKHVybCwgdGhpcy5yZXF1ZXN0SW5mb1V0aWxzKSkgfHxcbiAgICAgICAgICAgIHRoaXMucGFyc2VSZXF1ZXN0VXJsKHVybCk7XG4gICAgICAgIHZhciBjb2xsZWN0aW9uTmFtZSA9IHBhcnNlZC5jb2xsZWN0aW9uTmFtZTtcbiAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSB0aGlzLmRiW2NvbGxlY3Rpb25OYW1lXTtcbiAgICAgICAgdmFyIHJlcUluZm8gPSB7XG4gICAgICAgICAgICByZXE6IHJlcSxcbiAgICAgICAgICAgIGFwaUJhc2U6IHBhcnNlZC5hcGlCYXNlLFxuICAgICAgICAgICAgY29sbGVjdGlvbjogY29sbGVjdGlvbixcbiAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lOiBjb2xsZWN0aW9uTmFtZSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuY3JlYXRlSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSksXG4gICAgICAgICAgICBpZDogdGhpcy5wYXJzZUlkKGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lLCBwYXJzZWQuaWQpLFxuICAgICAgICAgICAgbWV0aG9kOiB0aGlzLmdldFJlcXVlc3RNZXRob2QocmVxKSxcbiAgICAgICAgICAgIHF1ZXJ5OiBwYXJzZWQucXVlcnksXG4gICAgICAgICAgICByZXNvdXJjZVVybDogcGFyc2VkLnJlc291cmNlVXJsLFxuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICB1dGlsczogdGhpcy5yZXF1ZXN0SW5mb1V0aWxzXG4gICAgICAgIH07XG4gICAgICAgIHZhciByZXNPcHRpb25zO1xuICAgICAgICBpZiAoL2NvbW1hbmRzXFwvPyQvaS50ZXN0KHJlcUluZm8uYXBpQmFzZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbW1hbmRzKHJlcUluZm8pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtZXRob2RJbnRlcmNlcHRvciA9IHRoaXMuYmluZChyZXFJbmZvLm1ldGhvZCk7XG4gICAgICAgIGlmIChtZXRob2RJbnRlcmNlcHRvcikge1xuICAgICAgICAgICAgLy8gSW5NZW1vcnlEYlNlcnZpY2UgaW50ZXJjZXB0cyB0aGlzIEhUVFAgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaWYgaW50ZXJjZXB0b3IgcHJvZHVjZWQgYSByZXNwb25zZSwgcmV0dXJuIGl0LlxuICAgICAgICAgICAgLy8gZWxzZSBJbk1lbW9yeURiU2VydmljZSBjaG9zZSBub3QgdG8gaW50ZXJjZXB0OyBjb250aW51ZSBwcm9jZXNzaW5nLlxuICAgICAgICAgICAgdmFyIGludGVyY2VwdG9yUmVzcG9uc2UgPSBtZXRob2RJbnRlcmNlcHRvcihyZXFJbmZvKTtcbiAgICAgICAgICAgIGlmIChpbnRlcmNlcHRvclJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGludGVyY2VwdG9yUmVzcG9uc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGJbY29sbGVjdGlvbk5hbWVdKSB7XG4gICAgICAgICAgICAvLyByZXF1ZXN0IGlzIGZvciBhIGtub3duIGNvbGxlY3Rpb24gb2YgdGhlIEluTWVtb3J5RGJTZXJ2aWNlXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVSZXNwb25zZSQoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuY29sbGVjdGlvbkhhbmRsZXIocmVxSW5mbyk7IH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5wYXNzVGhydVVua25vd25VcmwpIHtcbiAgICAgICAgICAgIC8vIHVua25vd24gY29sbGVjdGlvbjsgcGFzcyByZXF1ZXN0IHRocnUgdG8gYSBcInJlYWxcIiBiYWNrZW5kLlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UGFzc1RocnVCYWNrZW5kKCkuaGFuZGxlKHJlcSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNDA0IC0gY2FuJ3QgaGFuZGxlIHRoaXMgcmVxdWVzdFxuICAgICAgICByZXNPcHRpb25zID0gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5OT1RfRk9VTkQsIFwiQ29sbGVjdGlvbiAnXCIgKyBjb2xsZWN0aW9uTmFtZSArIFwiJyBub3QgZm91bmRcIik7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVJlc3BvbnNlJChmdW5jdGlvbiAoKSB7IHJldHVybiByZXNPcHRpb25zOyB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZCBjb25maWd1cmVkIGRlbGF5IHRvIHJlc3BvbnNlIG9ic2VydmFibGUgdW5sZXNzIGRlbGF5ID09PSAwXG4gICAgICovXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmFkZERlbGF5ID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIHZhciBkID0gdGhpcy5jb25maWcuZGVsYXk7XG4gICAgICAgIHJldHVybiBkID09PSAwID8gcmVzcG9uc2UgOiBkZWxheS5jYWxsKHJlc3BvbnNlLCBkIHx8IDUwMCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBcHBseSBxdWVyeS9zZWFyY2ggcGFyYW1ldGVycyBhcyBhIGZpbHRlciBvdmVyIHRoZSBjb2xsZWN0aW9uXG4gICAgICogVGhpcyBpbXBsIG9ubHkgc3VwcG9ydHMgUmVnRXhwIHF1ZXJpZXMgb24gc3RyaW5nIHByb3BlcnRpZXMgb2YgdGhlIGNvbGxlY3Rpb25cbiAgICAgKiBBTkRzIHRoZSBjb25kaXRpb25zIHRvZ2V0aGVyXG4gICAgICovXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmFwcGx5UXVlcnkgPSBmdW5jdGlvbiAoY29sbGVjdGlvbiwgcXVlcnkpIHtcbiAgICAgICAgLy8gZXh0cmFjdCBmaWx0ZXJpbmcgY29uZGl0aW9ucyAtIHtwcm9wZXJ0eU5hbWUsIFJlZ0V4cHMpIC0gZnJvbSBxdWVyeS9zZWFyY2ggcGFyYW1ldGVyc1xuICAgICAgICB2YXIgY29uZGl0aW9ucyA9IFtdO1xuICAgICAgICB2YXIgY2FzZVNlbnNpdGl2ZSA9IHRoaXMuY29uZmlnLmNhc2VTZW5zaXRpdmVTZWFyY2ggPyB1bmRlZmluZWQgOiAnaSc7XG4gICAgICAgIHF1ZXJ5LmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7IHJldHVybiBjb25kaXRpb25zLnB1c2goeyBuYW1lOiBuYW1lLCByeDogbmV3IFJlZ0V4cChkZWNvZGVVUkkodiksIGNhc2VTZW5zaXRpdmUpIH0pOyB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBsZW4gPSBjb25kaXRpb25zLmxlbmd0aDtcbiAgICAgICAgaWYgKCFsZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFORCB0aGUgUmVnRXhwIGNvbmRpdGlvbnNcbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb24uZmlsdGVyKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICAgIHZhciBvayA9IHRydWU7XG4gICAgICAgICAgICB2YXIgaSA9IGxlbjtcbiAgICAgICAgICAgIHdoaWxlIChvayAmJiBpKSB7XG4gICAgICAgICAgICAgICAgaSAtPSAxO1xuICAgICAgICAgICAgICAgIHZhciBjb25kID0gY29uZGl0aW9uc1tpXTtcbiAgICAgICAgICAgICAgICBvayA9IGNvbmQucngudGVzdChyb3dbY29uZC5uYW1lXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb2s7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IGEgbWV0aG9kIGZyb20gdGhlIGBJbk1lbW9yeURiU2VydmljZWAgKGlmIGl0IGV4aXN0cyksIGJvdW5kIHRvIHRoYXQgc2VydmljZVxuICAgICAqL1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUpIHtcbiAgICAgICAgdmFyIGZuID0gdGhpcy5pbk1lbURiU2VydmljZVttZXRob2ROYW1lXTtcbiAgICAgICAgcmV0dXJuIGZuID8gZm4uYmluZCh0aGlzLmluTWVtRGJTZXJ2aWNlKSA6IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5ib2RpZnkgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuZGF0YUVuY2Fwc3VsYXRpb24gPyB7IGRhdGE6IGRhdGEgfSA6IGRhdGE7XG4gICAgfTtcbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgfTtcbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuY29sbGVjdGlvbkhhbmRsZXIgPSBmdW5jdGlvbiAocmVxSW5mbykge1xuICAgICAgICAvLyBjb25zdCByZXEgPSByZXFJbmZvLnJlcTtcbiAgICAgICAgdmFyIHJlc09wdGlvbnM7XG4gICAgICAgIHN3aXRjaCAocmVxSW5mby5tZXRob2QpIHtcbiAgICAgICAgICAgIGNhc2UgJ2dldCc6XG4gICAgICAgICAgICAgICAgcmVzT3B0aW9ucyA9IHRoaXMuZ2V0KHJlcUluZm8pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncG9zdCc6XG4gICAgICAgICAgICAgICAgcmVzT3B0aW9ucyA9IHRoaXMucG9zdChyZXFJbmZvKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3B1dCc6XG4gICAgICAgICAgICAgICAgcmVzT3B0aW9ucyA9IHRoaXMucHV0KHJlcUluZm8pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZGVsZXRlJzpcbiAgICAgICAgICAgICAgICByZXNPcHRpb25zID0gdGhpcy5kZWxldGUocmVxSW5mbyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJlc09wdGlvbnMgPSB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHJlcUluZm8udXJsLCBTVEFUVVMuTUVUSE9EX05PVF9BTExPV0VELCAnTWV0aG9kIG5vdCBhbGxvd2VkJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgYGluTWVtRGJTZXJ2aWNlLnJlc3BvbnNlSW50ZXJjZXB0b3JgIGV4aXN0cywgbGV0IGl0IG1vcnBoIHRoZSByZXNwb25zZSBvcHRpb25zXG4gICAgICAgIHZhciBpbnRlcmNlcHRvciA9IHRoaXMuYmluZCgncmVzcG9uc2VJbnRlcmNlcHRvcicpO1xuICAgICAgICByZXR1cm4gaW50ZXJjZXB0b3IgPyBpbnRlcmNlcHRvcihyZXNPcHRpb25zLCByZXFJbmZvKSA6IHJlc09wdGlvbnM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDb21tYW5kcyByZWNvbmZpZ3VyZSB0aGUgaW4tbWVtb3J5IHdlYiBhcGkgc2VydmljZSBvciBleHRyYWN0IGluZm9ybWF0aW9uIGZyb20gaXQuXG4gICAgICogQ29tbWFuZHMgaWdub3JlIHRoZSBsYXRlbmN5IGRlbGF5IGFuZCByZXNwb25kIEFTQVAuXG4gICAgICpcbiAgICAgKiBXaGVuIHRoZSBsYXN0IHNlZ21lbnQgb2YgdGhlIGBhcGlCYXNlYCBwYXRoIGlzIFwiY29tbWFuZHNcIixcbiAgICAgKiB0aGUgYGNvbGxlY3Rpb25OYW1lYCBpcyB0aGUgY29tbWFuZC5cbiAgICAgKlxuICAgICAqIEV4YW1wbGUgVVJMczpcbiAgICAgKiAgIGNvbW1hbmRzL3Jlc2V0ZGIgKFBPU1QpIC8vIFJlc2V0IHRoZSBcImRhdGFiYXNlXCIgdG8gaXRzIG9yaWdpbmFsIHN0YXRlXG4gICAgICogICBjb21tYW5kcy9jb25maWcgKEdFVCkgICAvLyBSZXR1cm4gdGhpcyBzZXJ2aWNlJ3MgY29uZmlnIG9iamVjdFxuICAgICAqICAgY29tbWFuZHMvY29uZmlnIChQT1NUKSAgLy8gVXBkYXRlIHRoZSBjb25maWcgKGUuZy4gdGhlIGRlbGF5KVxuICAgICAqXG4gICAgICogVXNhZ2U6XG4gICAgICogICBodHRwLnBvc3QoJ2NvbW1hbmRzL3Jlc2V0ZGInLCB1bmRlZmluZWQpO1xuICAgICAqICAgaHR0cC5nZXQoJ2NvbW1hbmRzL2NvbmZpZycpO1xuICAgICAqICAgaHR0cC5wb3N0KCdjb21tYW5kcy9jb25maWcnLCAne1wiZGVsYXlcIjoxMDAwfScpO1xuICAgICAqL1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5jb21tYW5kcyA9IGZ1bmN0aW9uIChyZXFJbmZvKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBjb21tYW5kID0gcmVxSW5mby5jb2xsZWN0aW9uTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB2YXIgbWV0aG9kID0gcmVxSW5mby5tZXRob2Q7XG4gICAgICAgIHZhciByZXNPcHRpb25zID0ge1xuICAgICAgICAgICAgdXJsOiByZXFJbmZvLnVybFxuICAgICAgICB9O1xuICAgICAgICBzd2l0Y2ggKGNvbW1hbmQpIHtcbiAgICAgICAgICAgIGNhc2UgJ3Jlc2V0ZGInOlxuICAgICAgICAgICAgICAgIHJlc09wdGlvbnMuc3RhdHVzID0gU1RBVFVTLk5PX0NPTlRFTlQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbmNhdE1hcC5jYWxsKHRoaXMucmVzZXREYihyZXFJbmZvKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuY3JlYXRlUmVzcG9uc2UkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc09wdGlvbnM7IH0sIGZhbHNlIC8qIG5vIGxhdGVuY3kgZGVsYXkgKi8pOyB9KTtcbiAgICAgICAgICAgIGNhc2UgJ2NvbmZpZyc6XG4gICAgICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ2dldCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzT3B0aW9ucy5zdGF0dXMgPSBTVEFUVVMuT0s7XG4gICAgICAgICAgICAgICAgICAgIHJlc09wdGlvbnMuYm9keSA9IHRoaXMuY2xvbmUodGhpcy5jb25maWcpO1xuICAgICAgICAgICAgICAgICAgICAvLyBhbnkgb3RoZXIgSFRUUCBtZXRob2QgaXMgYXNzdW1lZCB0byBiZSBhIGNvbmZpZyB1cGRhdGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBib2R5ID0gdGhpcy5nZXRKc29uQm9keShyZXFJbmZvLnJlcSk7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5jb25maWcsIGJvZHkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhc3NUaHJ1QmFja2VuZCA9IHVuZGVmaW5lZDsgLy8gcmUtY3JlYXRlIHdoZW4gbmVlZGVkXG4gICAgICAgICAgICAgICAgICAgIHJlc09wdGlvbnMuc3RhdHVzID0gU1RBVFVTLk5PX0NPTlRFTlQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXNPcHRpb25zID0gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyhyZXFJbmZvLnVybCwgU1RBVFVTLklOVEVSTkFMX1NFUlZFUl9FUlJPUiwgXCJVbmtub3duIGNvbW1hbmQgXFxcIlwiICsgY29tbWFuZCArIFwiXFxcIlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVSZXNwb25zZSQoZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVzT3B0aW9uczsgfSwgZmFsc2UgLyogbm8gbGF0ZW5jeSBkZWxheSAqLyk7XG4gICAgfTtcbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnMgPSBmdW5jdGlvbiAodXJsLCBzdGF0dXMsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJvZHk6IHsgZXJyb3I6IFwiXCIgKyBtZXNzYWdlIH0sXG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuY3JlYXRlSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSksXG4gICAgICAgICAgICBzdGF0dXM6IHN0YXR1c1xuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgY29sZCByZXNwb25zZSBPYnNlcnZhYmxlIGZyb20gYSBmYWN0b3J5IGZvciBSZXNwb25zZU9wdGlvbnNcbiAgICAgKiBAcGFyYW0gcmVzT3B0aW9uc0ZhY3RvcnkgLSBjcmVhdGVzIFJlc3BvbnNlT3B0aW9ucyB3aGVuIG9ic2VydmFibGUgaXMgc3Vic2NyaWJlZFxuICAgICAqIEBwYXJhbSB3aXRoRGVsYXkgLSBpZiB0cnVlIChkZWZhdWx0KSwgYWRkIHNpbXVsYXRlZCBsYXRlbmN5IGRlbGF5IGZyb20gY29uZmlndXJhdGlvblxuICAgICAqL1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5jcmVhdGVSZXNwb25zZSQgPSBmdW5jdGlvbiAocmVzT3B0aW9uc0ZhY3RvcnksIHdpdGhEZWxheSkge1xuICAgICAgICBpZiAod2l0aERlbGF5ID09PSB2b2lkIDApIHsgd2l0aERlbGF5ID0gdHJ1ZTsgfVxuICAgICAgICB2YXIgcmVzT3B0aW9ucyQgPSB0aGlzLmNyZWF0ZVJlc3BvbnNlT3B0aW9ucyQocmVzT3B0aW9uc0ZhY3RvcnkpO1xuICAgICAgICB2YXIgcmVzcCQgPSB0aGlzLmNyZWF0ZVJlc3BvbnNlJGZyb21SZXNwb25zZU9wdGlvbnMkKHJlc09wdGlvbnMkKTtcbiAgICAgICAgcmV0dXJuIHdpdGhEZWxheSA/IHRoaXMuYWRkRGVsYXkocmVzcCQpIDogcmVzcCQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBjb2xkIE9ic2VydmFibGUgb2YgUmVzcG9uc2VPcHRpb25zLlxuICAgICAqIEBwYXJhbSByZXNPcHRpb25zRmFjdG9yeSAtIGNyZWF0ZXMgUmVzcG9uc2VPcHRpb25zIHdoZW4gb2JzZXJ2YWJsZSBpcyBzdWJzY3JpYmVkXG4gICAgICovXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmNyZWF0ZVJlc3BvbnNlT3B0aW9ucyQgPSBmdW5jdGlvbiAocmVzT3B0aW9uc0ZhY3RvcnkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChyZXNwb25zZU9ic2VydmVyKSB7XG4gICAgICAgICAgICB2YXIgcmVzT3B0aW9ucztcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzT3B0aW9ucyA9IHJlc09wdGlvbnNGYWN0b3J5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXJyID0gZXJyb3IubWVzc2FnZSB8fCBlcnJvcjtcbiAgICAgICAgICAgICAgICByZXNPcHRpb25zID0gX3RoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnMoJycsIFNUQVRVUy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsIFwiXCIgKyBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHN0YXR1cyA9IHJlc09wdGlvbnMuc3RhdHVzO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXNPcHRpb25zLnN0YXR1c1RleHQgPSBnZXRTdGF0dXNUZXh0KHN0YXR1cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkgeyB9XG4gICAgICAgICAgICBpZiAoaXNTdWNjZXNzKHN0YXR1cykpIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZU9ic2VydmVyLm5leHQocmVzT3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2VPYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2VPYnNlcnZlci5lcnJvcihyZXNPcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IH07IC8vIHVuc3Vic2NyaWJlIGZ1bmN0aW9uXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgY29sbGVjdGlvbiA9IF9hLmNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lID0gX2EuY29sbGVjdGlvbk5hbWUsIGhlYWRlcnMgPSBfYS5oZWFkZXJzLCBpZCA9IF9hLmlkLCB1cmwgPSBfYS51cmw7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzXG4gICAgICAgIGlmIChpZCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHVybCwgU1RBVFVTLk5PVF9GT1VORCwgXCJNaXNzaW5nIFxcXCJcIiArIGNvbGxlY3Rpb25OYW1lICsgXCJcXFwiIGlkXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBleGlzdHMgPSB0aGlzLnJlbW92ZUJ5SWQoY29sbGVjdGlvbiwgaWQpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgICAgIHN0YXR1czogKGV4aXN0cyB8fCAhdGhpcy5jb25maWcuZGVsZXRlNDA0KSA/IFNUQVRVUy5OT19DT05URU5UIDogU1RBVFVTLk5PVF9GT1VORFxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRmluZCBmaXJzdCBpbnN0YW5jZSBvZiBpdGVtIGluIGNvbGxlY3Rpb24gYnkgYGl0ZW0uaWRgXG4gICAgICogQHBhcmFtIGNvbGxlY3Rpb25cbiAgICAgKiBAcGFyYW0gaWRcbiAgICAgKi9cbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuZmluZEJ5SWQgPSBmdW5jdGlvbiAoY29sbGVjdGlvbiwgaWQpIHtcbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb24uZmluZChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS5pZCA9PT0gaWQ7IH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgdGhlIG5leHQgYXZhaWxhYmxlIGlkIGZvciBpdGVtIGluIHRoaXMgY29sbGVjdGlvblxuICAgICAqIFVzZSBtZXRob2QgZnJvbSBgaW5NZW1EYlNlcnZpY2VgIGlmIGl0IGV4aXN0cyBhbmQgcmV0dXJucyBhIHZhbHVlLFxuICAgICAqIGVsc2UgZGVsZWdhdGVzIHRvIGBnZW5JZERlZmF1bHRgLlxuICAgICAqIEBwYXJhbSBjb2xsZWN0aW9uIC0gY29sbGVjdGlvbiBvZiBpdGVtcyB3aXRoIGBpZGAga2V5IHByb3BlcnR5XG4gICAgICovXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmdlbklkID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lKSB7XG4gICAgICAgIHZhciBnZW5JZCA9IHRoaXMuYmluZCgnZ2VuSWQnKTtcbiAgICAgICAgaWYgKGdlbklkKSB7XG4gICAgICAgICAgICB2YXIgaWQgPSBnZW5JZChjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSk7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xuICAgICAgICAgICAgaWYgKGlkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5nZW5JZERlZmF1bHQoY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGVmYXVsdCBnZW5lcmF0b3Igb2YgdGhlIG5leHQgYXZhaWxhYmxlIGlkIGZvciBpdGVtIGluIHRoaXMgY29sbGVjdGlvblxuICAgICAqIFRoaXMgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiB3b3JrcyBvbmx5IGZvciBudW1lcmljIGlkcy5cbiAgICAgKiBAcGFyYW0gY29sbGVjdGlvbiAtIGNvbGxlY3Rpb24gb2YgaXRlbXMgd2l0aCBgaWRgIGtleSBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSBjb2xsZWN0aW9uTmFtZSAtIG5hbWUgb2YgdGhlIGNvbGxlY3Rpb25cbiAgICAgKi9cbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuZ2VuSWREZWZhdWx0ID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0NvbGxlY3Rpb25JZE51bWVyaWMoY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb2xsZWN0aW9uICdcIiArIGNvbGxlY3Rpb25OYW1lICsgXCInIGlkIHR5cGUgaXMgbm9uLW51bWVyaWMgb3IgdW5rbm93bi4gQ2FuIG9ubHkgZ2VuZXJhdGUgbnVtZXJpYyBpZHMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtYXhJZCA9IDA7XG4gICAgICAgIGNvbGxlY3Rpb24ucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBpdGVtKSB7XG4gICAgICAgICAgICBtYXhJZCA9IE1hdGgubWF4KG1heElkLCB0eXBlb2YgaXRlbS5pZCA9PT0gJ251bWJlcicgPyBpdGVtLmlkIDogbWF4SWQpO1xuICAgICAgICB9LCB1bmRlZmluZWQpO1xuICAgICAgICByZXR1cm4gbWF4SWQgKyAxO1xuICAgIH07XG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgY29sbGVjdGlvbiA9IF9hLmNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lID0gX2EuY29sbGVjdGlvbk5hbWUsIGhlYWRlcnMgPSBfYS5oZWFkZXJzLCBpZCA9IF9hLmlkLCBxdWVyeSA9IF9hLnF1ZXJ5LCB1cmwgPSBfYS51cmw7XG4gICAgICAgIHZhciBkYXRhID0gY29sbGVjdGlvbjtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcbiAgICAgICAgaWYgKGlkICE9IHVuZGVmaW5lZCAmJiBpZCAhPT0gJycpIHtcbiAgICAgICAgICAgIGRhdGEgPSB0aGlzLmZpbmRCeUlkKGNvbGxlY3Rpb24sIGlkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChxdWVyeSkge1xuICAgICAgICAgICAgZGF0YSA9IHRoaXMuYXBwbHlRdWVyeShjb2xsZWN0aW9uLCBxdWVyeSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5OT1RfRk9VTkQsIFwiJ1wiICsgY29sbGVjdGlvbk5hbWUgKyBcIicgd2l0aCBpZD0nXCIgKyBpZCArIFwiJyBub3QgZm91bmRcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJvZHk6IHRoaXMuYm9kaWZ5KHRoaXMuY2xvbmUoZGF0YSkpLFxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgICAgIHN0YXR1czogU1RBVFVTLk9LXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgbG9jYXRpb24gaW5mbyBmcm9tIGEgdXJsLCBldmVuIG9uIHNlcnZlciB3aGVyZSBgZG9jdW1lbnRgIGlzIG5vdCBkZWZpbmVkXG4gICAgICovXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmdldExvY2F0aW9uID0gZnVuY3Rpb24gKHVybCkge1xuICAgICAgICBpZiAoIXVybC5zdGFydHNXaXRoKCdodHRwJykpIHtcbiAgICAgICAgICAgIC8vIGdldCB0aGUgZG9jdW1lbnQgaWZmIHJ1bm5pbmcgaW4gYnJvd3NlclxuICAgICAgICAgICAgdmFyIGRvYyA9ICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSA/IHVuZGVmaW5lZCA6IGRvY3VtZW50O1xuICAgICAgICAgICAgLy8gYWRkIGhvc3QgaW5mbyB0byB1cmwgYmVmb3JlIHBhcnNpbmcuICBVc2UgYSBmYWtlIGhvc3Qgd2hlbiBub3QgaW4gYnJvd3Nlci5cbiAgICAgICAgICAgIHZhciBiYXNlID0gZG9jID8gZG9jLmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGRvYy5sb2NhdGlvbi5ob3N0IDogJ2h0dHA6Ly9mYWtlJztcbiAgICAgICAgICAgIHVybCA9IHVybC5zdGFydHNXaXRoKCcvJykgPyBiYXNlICsgdXJsIDogYmFzZSArICcvJyArIHVybDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFyc2VVcmkodXJsKTtcbiAgICB9O1xuICAgIDtcbiAgICAvKipcbiAgICAgKiBnZXQgb3IgY3JlYXRlIHRoZSBmdW5jdGlvbiB0aGF0IHBhc3NlcyB1bmhhbmRsZWQgcmVxdWVzdHNcbiAgICAgKiB0aHJvdWdoIHRvIHRoZSBcInJlYWxcIiBiYWNrZW5kLlxuICAgICAqL1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5nZXRQYXNzVGhydUJhY2tlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhc3NUaHJ1QmFja2VuZCA/XG4gICAgICAgICAgICB0aGlzLnBhc3NUaHJ1QmFja2VuZCA6XG4gICAgICAgICAgICB0aGlzLnBhc3NUaHJ1QmFja2VuZCA9IHRoaXMuY3JlYXRlUGFzc1RocnVCYWNrZW5kKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgdXRpbGl0eSBtZXRob2RzIGZyb20gdGhpcyBzZXJ2aWNlIGluc3RhbmNlLlxuICAgICAqIFVzZWZ1bCB3aXRoaW4gYW4gSFRUUCBtZXRob2Qgb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuZ2V0UmVxdWVzdEluZm9VdGlscyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNyZWF0ZVJlc3BvbnNlJDogdGhpcy5jcmVhdGVSZXNwb25zZSQuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGZpbmRCeUlkOiB0aGlzLmZpbmRCeUlkLmJpbmQodGhpcyksXG4gICAgICAgICAgICBpc0NvbGxlY3Rpb25JZE51bWVyaWM6IHRoaXMuaXNDb2xsZWN0aW9uSWROdW1lcmljLmJpbmQodGhpcyksXG4gICAgICAgICAgICBnZXRDb25maWc6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmNvbmZpZzsgfSxcbiAgICAgICAgICAgIGdldERiOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5kYjsgfSxcbiAgICAgICAgICAgIGdldEpzb25Cb2R5OiB0aGlzLmdldEpzb25Cb2R5LmJpbmQodGhpcyksXG4gICAgICAgICAgICBnZXRMb2NhdGlvbjogdGhpcy5nZXRMb2NhdGlvbi5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZ2V0UGFzc1RocnVCYWNrZW5kOiB0aGlzLmdldFBhc3NUaHJ1QmFja2VuZC5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgcGFyc2VSZXF1ZXN0VXJsOiB0aGlzLnBhcnNlUmVxdWVzdFVybC5iaW5kKHRoaXMpLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiAoY29sbGVjdGlvbiwgaWQpIHtcbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb24uZmluZEluZGV4KGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtLmlkID09PSBpZDsgfSk7XG4gICAgfTtcbiAgICAvKiogUGFyc2UgdGhlIGlkIGFzIGEgbnVtYmVyLiBSZXR1cm4gb3JpZ2luYWwgdmFsdWUgaWYgbm90IGEgbnVtYmVyLiAqL1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5wYXJzZUlkID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lLCBpZCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNDb2xsZWN0aW9uSWROdW1lcmljKGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lKSkge1xuICAgICAgICAgICAgLy8gQ2FuJ3QgY29uZmlybSB0aGF0IGBpZGAgaXMgYSBudW1lcmljIHR5cGU7IGRvbid0IHBhcnNlIGFzIGEgbnVtYmVyXG4gICAgICAgICAgICAvLyBvciBlbHNlIGAnNDInYCAtPiBgNDJgIGFuZCBfZ2V0IGJ5IGlkXyBmYWlscy5cbiAgICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaWROdW0gPSBwYXJzZUZsb2F0KGlkKTtcbiAgICAgICAgcmV0dXJuIGlzTmFOKGlkTnVtKSA/IGlkIDogaWROdW07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiByZXR1cm4gdHJ1ZSBpZiBjYW4gZGV0ZXJtaW5lIHRoYXQgdGhlIGNvbGxlY3Rpb24ncyBgaXRlbS5pZGAgaXMgYSBudW1iZXJcbiAgICAgKiBUaGlzIGltcGxlbWVudGF0aW9uIGNhbid0IHRlbGwgaWYgdGhlIGNvbGxlY3Rpb24gaXMgZW1wdHkgc28gaXQgYXNzdW1lcyBOT1xuICAgICAqICovXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmlzQ29sbGVjdGlvbklkTnVtZXJpYyA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSkge1xuICAgICAgICAvLyBjb2xsZWN0aW9uTmFtZSBub3QgdXNlZCBub3cgYnV0IG92ZXJyaWRlIG1pZ2h0IG1haW50YWluIGNvbGxlY3Rpb24gdHlwZSBpbmZvcm1hdGlvblxuICAgICAgICAvLyBzbyB0aGF0IGl0IGNvdWxkIGtub3cgdGhlIHR5cGUgb2YgdGhlIGBpZGAgZXZlbiB3aGVuIHRoZSBjb2xsZWN0aW9uIGlzIGVtcHR5LlxuICAgICAgICByZXR1cm4gISEoY29sbGVjdGlvbiAmJiBjb2xsZWN0aW9uWzBdKSAmJiB0eXBlb2YgY29sbGVjdGlvblswXS5pZCA9PT0gJ251bWJlcic7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQYXJzZXMgdGhlIHJlcXVlc3QgVVJMIGludG8gYSBgUGFyc2VkUmVxdWVzdFVybGAgb2JqZWN0LlxuICAgICAqIFBhcnNpbmcgZGVwZW5kcyB1cG9uIGNlcnRhaW4gdmFsdWVzIG9mIGBjb25maWdgOiBgYXBpQmFzZWAsIGBob3N0YCwgYW5kIGB1cmxSb290YC5cbiAgICAgKlxuICAgICAqIENvbmZpZ3VyaW5nIHRoZSBgYXBpQmFzZWAgeWllbGRzIHRoZSBtb3N0IGludGVyZXN0aW5nIGNoYW5nZXMgdG8gYHBhcnNlUmVxdWVzdFVybGAgYmVoYXZpb3I6XG4gICAgICogICBXaGVuIGFwaUJhc2U9dW5kZWZpbmVkIGFuZCB1cmw9J2h0dHA6Ly9sb2NhbGhvc3QvYXBpL2NvbGxlY3Rpb24vNDInXG4gICAgICogICAgIHtiYXNlOiAnYXBpLycsIGNvbGxlY3Rpb25OYW1lOiAnY29sbGVjdGlvbicsIGlkOiAnNDInLCAuLi59XG4gICAgICogICBXaGVuIGFwaUJhc2U9J3NvbWUvYXBpL3Jvb3QvJyBhbmQgdXJsPSdodHRwOi8vbG9jYWxob3N0L3NvbWUvYXBpL3Jvb3QvY29sbGVjdGlvbidcbiAgICAgKiAgICAge2Jhc2U6ICdzb21lL2FwaS9yb290LycsIGNvbGxlY3Rpb25OYW1lOiAnY29sbGVjdGlvbicsIGlkOiB1bmRlZmluZWQsIC4uLn1cbiAgICAgKiAgIFdoZW4gYXBpQmFzZT0nLycgYW5kIHVybD0naHR0cDovL2xvY2FsaG9zdC9jb2xsZWN0aW9uJ1xuICAgICAqICAgICB7YmFzZTogJy8nLCBjb2xsZWN0aW9uTmFtZTogJ2NvbGxlY3Rpb24nLCBpZDogdW5kZWZpbmVkLCAuLi59XG4gICAgICpcbiAgICAgKiBUaGUgYWN0dWFsIGFwaSBiYXNlIHNlZ21lbnQgdmFsdWVzIGFyZSBpZ25vcmVkLiBPbmx5IHRoZSBudW1iZXIgb2Ygc2VnbWVudHMgbWF0dGVycy5cbiAgICAgKiBUaGUgZm9sbG93aW5nIGFwaSBiYXNlIHN0cmluZ3MgYXJlIGNvbnNpZGVyZWQgaWRlbnRpY2FsOiAnYS9iJyB+ICdzb21lL2FwaS8nIH4gYHR3by9zZWdtZW50cydcbiAgICAgKlxuICAgICAqIFRvIHJlcGxhY2UgdGhpcyBkZWZhdWx0IG1ldGhvZCwgYXNzaWduIHlvdXIgYWx0ZXJuYXRpdmUgdG8geW91ciBJbk1lbURiU2VydmljZVsncGFyc2VSZXF1ZXN0VXJsJ11cbiAgICAgKi9cbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUucGFyc2VSZXF1ZXN0VXJsID0gZnVuY3Rpb24gKHVybCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGxvYyA9IHRoaXMuZ2V0TG9jYXRpb24odXJsKTtcbiAgICAgICAgICAgIHZhciBkcm9wID0gdGhpcy5jb25maWcucm9vdFBhdGgubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIHVybFJvb3QgPSAnJztcbiAgICAgICAgICAgIGlmIChsb2MuaG9zdCAhPT0gdGhpcy5jb25maWcuaG9zdCkge1xuICAgICAgICAgICAgICAgIC8vIHVybCBmb3IgYSBzZXJ2ZXIgb24gYSBkaWZmZXJlbnQgaG9zdCFcbiAgICAgICAgICAgICAgICAvLyBhc3N1bWUgaXQncyBjb2xsZWN0aW9uIGlzIGFjdHVhbGx5IGhlcmUgdG9vLlxuICAgICAgICAgICAgICAgIGRyb3AgPSAxOyAvLyB0aGUgbGVhZGluZyBzbGFzaFxuICAgICAgICAgICAgICAgIHVybFJvb3QgPSBsb2MucHJvdG9jb2wgKyAnLy8nICsgbG9jLmhvc3QgKyAnLyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcGF0aCA9IGxvYy5wYXRoLnN1YnN0cmluZyhkcm9wKTtcbiAgICAgICAgICAgIHZhciBwYXRoU2VnbWVudHMgPSBwYXRoLnNwbGl0KCcvJyk7XG4gICAgICAgICAgICB2YXIgc2VnbWVudEl4ID0gMDtcbiAgICAgICAgICAgIC8vIGFwaUJhc2U6IHRoZSBmcm9udCBwYXJ0IG9mIHRoZSBwYXRoIGRldm90ZWQgdG8gZ2V0dGluZyB0byB0aGUgYXBpIHJvdXRlXG4gICAgICAgICAgICAvLyBBc3N1bWVzIGZpcnN0IHBhdGggc2VnbWVudCBpZiBubyBjb25maWcuYXBpQmFzZVxuICAgICAgICAgICAgLy8gZWxzZSBpZ25vcmVzIGFzIG1hbnkgcGF0aCBzZWdtZW50cyBhcyBhcmUgaW4gY29uZmlnLmFwaUJhc2VcbiAgICAgICAgICAgIC8vIERvZXMgTk9UIGNhcmUgd2hhdCB0aGUgYXBpIGJhc2UgY2hhcnMgYWN0dWFsbHkgYXJlLlxuICAgICAgICAgICAgdmFyIGFwaUJhc2UgPSB2b2lkIDA7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLmFwaUJhc2UgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgYXBpQmFzZSA9IHBhdGhTZWdtZW50c1tzZWdtZW50SXgrK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhcGlCYXNlID0gcmVtb3ZlVHJhaWxpbmdTbGFzaCh0aGlzLmNvbmZpZy5hcGlCYXNlLnRyaW0oKSk7XG4gICAgICAgICAgICAgICAgaWYgKGFwaUJhc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudEl4ID0gYXBpQmFzZS5zcGxpdCgnLycpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnRJeCA9IDA7IC8vIG5vIGFwaSBiYXNlIGF0IGFsbDsgdW53aXNlIGJ1dCBhbGxvd2VkLlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFwaUJhc2UgKz0gJy8nO1xuICAgICAgICAgICAgdmFyIGNvbGxlY3Rpb25OYW1lID0gcGF0aFNlZ21lbnRzW3NlZ21lbnRJeCsrXTtcbiAgICAgICAgICAgIC8vIGlnbm9yZSBhbnl0aGluZyBhZnRlciBhICcuJyAoZS5nLix0aGUgXCJqc29uXCIgaW4gXCJjdXN0b21lcnMuanNvblwiKVxuICAgICAgICAgICAgY29sbGVjdGlvbk5hbWUgPSBjb2xsZWN0aW9uTmFtZSAmJiBjb2xsZWN0aW9uTmFtZS5zcGxpdCgnLicpWzBdO1xuICAgICAgICAgICAgdmFyIGlkID0gcGF0aFNlZ21lbnRzW3NlZ21lbnRJeCsrXTtcbiAgICAgICAgICAgIHZhciBxdWVyeSA9IHRoaXMuY3JlYXRlUXVlcnlNYXAobG9jLnF1ZXJ5KTtcbiAgICAgICAgICAgIHZhciByZXNvdXJjZVVybCA9IHVybFJvb3QgKyBhcGlCYXNlICsgY29sbGVjdGlvbk5hbWUgKyAnLyc7XG4gICAgICAgICAgICByZXR1cm4geyBhcGlCYXNlOiBhcGlCYXNlLCBjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbk5hbWUsIGlkOiBpZCwgcXVlcnk6IHF1ZXJ5LCByZXNvdXJjZVVybDogcmVzb3VyY2VVcmwgfTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB2YXIgbXNnID0gXCJ1bmFibGUgdG8gcGFyc2UgdXJsICdcIiArIHVybCArIFwiJzsgb3JpZ2luYWwgZXJyb3I6IFwiICsgZXJyLm1lc3NhZ2U7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gQ3JlYXRlIGVudGl0eVxuICAgIC8vIENhbiB1cGRhdGUgYW4gZXhpc3RpbmcgZW50aXR5IHRvbyBpZiBwb3N0NDA5IGlzIGZhbHNlLlxuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5wb3N0ID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBjb2xsZWN0aW9uID0gX2EuY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUgPSBfYS5jb2xsZWN0aW9uTmFtZSwgaGVhZGVycyA9IF9hLmhlYWRlcnMsIGlkID0gX2EuaWQsIHJlcSA9IF9hLnJlcSwgcmVzb3VyY2VVcmwgPSBfYS5yZXNvdXJjZVVybCwgdXJsID0gX2EudXJsO1xuICAgICAgICB2YXIgaXRlbSA9IHRoaXMuY2xvbmUodGhpcy5nZXRKc29uQm9keShyZXEpKTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcbiAgICAgICAgaWYgKGl0ZW0uaWQgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGl0ZW0uaWQgPSBpZCB8fCB0aGlzLmdlbklkKGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICB2YXIgZW1zZyA9IGVyci5tZXNzYWdlIHx8ICcnO1xuICAgICAgICAgICAgICAgIGlmICgvaWQgdHlwZSBpcyBub24tbnVtZXJpYy8udGVzdChlbXNnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5VTlBST0NFU1NBQkxFX0VOVFJZLCBlbXNnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnModXJsLCBTVEFUVVMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLCBcIkZhaWxlZCB0byBnZW5lcmF0ZSBuZXcgaWQgZm9yICdcIiArIGNvbGxlY3Rpb25OYW1lICsgXCInXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaWQgJiYgaWQgIT09IGl0ZW0uaWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHVybCwgU1RBVFVTLkJBRF9SRVFVRVNULCBcIlJlcXVlc3QgaWQgZG9lcyBub3QgbWF0Y2ggaXRlbS5pZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlkID0gaXRlbS5pZDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXhpc3RpbmdJeCA9IHRoaXMuaW5kZXhPZihjb2xsZWN0aW9uLCBpZCk7XG4gICAgICAgIHZhciBib2R5ID0gdGhpcy5ib2RpZnkoaXRlbSk7XG4gICAgICAgIGlmIChleGlzdGluZ0l4ID09PSAtMSkge1xuICAgICAgICAgICAgY29sbGVjdGlvbi5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgaGVhZGVycy5zZXQoJ0xvY2F0aW9uJywgcmVzb3VyY2VVcmwgKyAnLycgKyBpZCk7XG4gICAgICAgICAgICByZXR1cm4geyBoZWFkZXJzOiBoZWFkZXJzLCBib2R5OiBib2R5LCBzdGF0dXM6IFNUQVRVUy5DUkVBVEVEIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5jb25maWcucG9zdDQwOSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnModXJsLCBTVEFUVVMuQ09ORkxJQ1QsIFwiJ1wiICsgY29sbGVjdGlvbk5hbWUgKyBcIicgaXRlbSB3aXRoIGlkPSdcIiArIGlkICsgXCIgZXhpc3RzIGFuZCBtYXkgbm90IGJlIHVwZGF0ZWQgd2l0aCBQT1NUOyB1c2UgUFVUIGluc3RlYWQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29sbGVjdGlvbltleGlzdGluZ0l4XSA9IGl0ZW07XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25maWcucG9zdDIwNCA/XG4gICAgICAgICAgICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzLCBzdGF0dXM6IFNUQVRVUy5OT19DT05URU5UIH0gOlxuICAgICAgICAgICAgICAgIHsgaGVhZGVyczogaGVhZGVycywgYm9keTogYm9keSwgc3RhdHVzOiBTVEFUVVMuT0sgfTsgLy8gc3VjY2Vzc2Z1bDsgcmV0dXJuIGVudGl0eVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBVcGRhdGUgZXhpc3RpbmcgZW50aXR5XG4gICAgLy8gQ2FuIGNyZWF0ZSBhbiBlbnRpdHkgdG9vIGlmIHB1dDQwNCBpcyBmYWxzZS5cbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUucHV0ID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBjb2xsZWN0aW9uID0gX2EuY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUgPSBfYS5jb2xsZWN0aW9uTmFtZSwgaGVhZGVycyA9IF9hLmhlYWRlcnMsIGlkID0gX2EuaWQsIHJlcSA9IF9hLnJlcSwgdXJsID0gX2EudXJsO1xuICAgICAgICB2YXIgaXRlbSA9IHRoaXMuY2xvbmUodGhpcy5nZXRKc29uQm9keShyZXEpKTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcbiAgICAgICAgaWYgKGl0ZW0uaWQgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5OT1RfRk9VTkQsIFwiTWlzc2luZyAnXCIgKyBjb2xsZWN0aW9uTmFtZSArIFwiJyBpZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaWQgJiYgaWQgIT09IGl0ZW0uaWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHVybCwgU1RBVFVTLkJBRF9SRVFVRVNULCBcIlJlcXVlc3QgZm9yICdcIiArIGNvbGxlY3Rpb25OYW1lICsgXCInIGlkIGRvZXMgbm90IG1hdGNoIGl0ZW0uaWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZCA9IGl0ZW0uaWQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGV4aXN0aW5nSXggPSB0aGlzLmluZGV4T2YoY29sbGVjdGlvbiwgaWQpO1xuICAgICAgICB2YXIgYm9keSA9IHRoaXMuYm9kaWZ5KGl0ZW0pO1xuICAgICAgICBpZiAoZXhpc3RpbmdJeCA+IC0xKSB7XG4gICAgICAgICAgICBjb2xsZWN0aW9uW2V4aXN0aW5nSXhdID0gaXRlbTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5wdXQyMDQgP1xuICAgICAgICAgICAgICAgIHsgaGVhZGVyczogaGVhZGVycywgc3RhdHVzOiBTVEFUVVMuTk9fQ09OVEVOVCB9IDpcbiAgICAgICAgICAgICAgICB7IGhlYWRlcnM6IGhlYWRlcnMsIGJvZHk6IGJvZHksIHN0YXR1czogU1RBVFVTLk9LIH07IC8vIHN1Y2Nlc3NmdWw7IHJldHVybiBlbnRpdHlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmNvbmZpZy5wdXQ0MDQpIHtcbiAgICAgICAgICAgIC8vIGl0ZW0gdG8gdXBkYXRlIG5vdCBmb3VuZDsgdXNlIFBPU1QgdG8gY3JlYXRlIG5ldyBpdGVtIGZvciB0aGlzIGlkLlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnModXJsLCBTVEFUVVMuTk9UX0ZPVU5ELCBcIidcIiArIGNvbGxlY3Rpb25OYW1lICsgXCInIGl0ZW0gd2l0aCBpZD0nXCIgKyBpZCArIFwiIG5vdCBmb3VuZCBhbmQgbWF5IG5vdCBiZSBjcmVhdGVkIHdpdGggUFVUOyB1c2UgUE9TVCBpbnN0ZWFkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBuZXcgaXRlbSBmb3IgaWQgbm90IGZvdW5kXG4gICAgICAgICAgICBjb2xsZWN0aW9uLnB1c2goaXRlbSk7XG4gICAgICAgICAgICByZXR1cm4geyBoZWFkZXJzOiBoZWFkZXJzLCBib2R5OiBib2R5LCBzdGF0dXM6IFNUQVRVUy5DUkVBVEVEIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5yZW1vdmVCeUlkID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGlkKSB7XG4gICAgICAgIHZhciBpeCA9IHRoaXMuaW5kZXhPZihjb2xsZWN0aW9uLCBpZCk7XG4gICAgICAgIGlmIChpeCA+IC0xKSB7XG4gICAgICAgICAgICBjb2xsZWN0aW9uLnNwbGljZShpeCwgMSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUZWxsIHlvdXIgaW4tbWVtIFwiZGF0YWJhc2VcIiB0byByZXNldC5cbiAgICAgKiByZXR1cm5zIE9ic2VydmFibGUgb2YgdGhlIGRhdGFiYXNlIGJlY2F1c2UgcmVzZXR0aW5nIGl0IGNvdWxkIGJlIGFzeW5jXG4gICAgICovXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLnJlc2V0RGIgPSBmdW5jdGlvbiAocmVxSW5mbykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmRiUmVhZHlTdWJqZWN0Lm5leHQoZmFsc2UpO1xuICAgICAgICB2YXIgZGIgPSB0aGlzLmluTWVtRGJTZXJ2aWNlLmNyZWF0ZURiKHJlcUluZm8pO1xuICAgICAgICB2YXIgZGIkID0gZGIgaW5zdGFuY2VvZiBPYnNlcnZhYmxlID8gZGIgOlxuICAgICAgICAgICAgaXNQcm9taXNlKGRiKSA/IGZyb21Qcm9taXNlKGRiKSA6XG4gICAgICAgICAgICAgICAgb2YoZGIpO1xuICAgICAgICBmaXJzdC5jYWxsKGRiJCkuc3Vic2NyaWJlKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICBfdGhpcy5kYiA9IGQ7XG4gICAgICAgICAgICBfdGhpcy5kYlJlYWR5U3ViamVjdC5uZXh0KHRydWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGJSZWFkeTtcbiAgICB9O1xuICAgIHJldHVybiBCYWNrZW5kU2VydmljZTtcbn0oKSk7XG5leHBvcnQgeyBCYWNrZW5kU2VydmljZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmFja2VuZC5zZXJ2aWNlLmpzLm1hcCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJYaHIsIEhlYWRlcnMsIFJlYWR5U3RhdGUsIFJlcXVlc3RNZXRob2QsIFJlc3BvbnNlLCBSZXNwb25zZU9wdGlvbnMgYXMgSHR0cFJlc3BvbnNlT3B0aW9ucywgVVJMU2VhcmNoUGFyYW1zLCBYSFJCYWNrZW5kLCBYU1JGU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3IvbWFwJztcbmltcG9ydCB7IFNUQVRVUyB9IGZyb20gJy4vaHR0cC1zdGF0dXMtY29kZXMnO1xuaW1wb3J0IHsgSW5NZW1vcnlCYWNrZW5kQ29uZmlnLCBJbk1lbW9yeUJhY2tlbmRDb25maWdBcmdzLCBJbk1lbW9yeURiU2VydmljZSB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gJy4vYmFja2VuZC5zZXJ2aWNlJztcbi8qKlxuICogRm9yIEFuZ3VsYXIgYEh0dHBgIHNpbXVsYXRlIHRoZSBiZWhhdmlvciBvZiBhIFJFU1R5IHdlYiBhcGlcbiAqIGJhY2tlZCBieSB0aGUgc2ltcGxlIGluLW1lbW9yeSBkYXRhIHN0b3JlIHByb3ZpZGVkIGJ5IHRoZSBpbmplY3RlZCBgSW5NZW1vcnlEYlNlcnZpY2VgLlxuICogQ29uZm9ybXMgbW9zdGx5IHRvIGJlaGF2aW9yIGRlc2NyaWJlZCBoZXJlOlxuICogaHR0cDovL3d3dy5yZXN0YXBpdHV0b3JpYWwuY29tL2xlc3NvbnMvaHR0cG1ldGhvZHMuaHRtbFxuICpcbiAqICMjIyBVc2FnZVxuICpcbiAqIENyZWF0ZSBhbiBpbi1tZW1vcnkgZGF0YSBzdG9yZSBjbGFzcyB0aGF0IGltcGxlbWVudHMgYEluTWVtb3J5RGJTZXJ2aWNlYC5cbiAqIENhbGwgYGZvclJvb3RgIHN0YXRpYyBtZXRob2Qgd2l0aCB0aGlzIHNlcnZpY2UgY2xhc3MgYW5kIG9wdGlvbmFsIGNvbmZpZ3VyYXRpb24gb2JqZWN0OlxuICogYGBgXG4gKiAvLyBvdGhlciBpbXBvcnRzXG4gKiBpbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG4gKiBpbXBvcnQgeyBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUgfSBmcm9tICdhbmd1bGFyLWluLW1lbW9yeS13ZWItYXBpJztcbiAqXG4gKiBpbXBvcnQgeyBJbk1lbUhlcm9TZXJ2aWNlLCBpbk1lbUNvbmZpZyB9IGZyb20gJy4uL2FwaS9pbi1tZW1vcnktaGVyby5zZXJ2aWNlJztcbiAqIEBOZ01vZHVsZSh7XG4gKiAgaW1wb3J0czogW1xuICogICAgSHR0cE1vZHVsZSxcbiAqICAgIEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290KEluTWVtSGVyb1NlcnZpY2UsIGluTWVtQ29uZmlnKSxcbiAqICAgIC4uLlxuICogIF0sXG4gKiAgLi4uXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IC4uLiB9XG4gKiBgYGBcbiAqL1xudmFyIEh0dHBCYWNrZW5kU2VydmljZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEh0dHBCYWNrZW5kU2VydmljZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBIdHRwQmFja2VuZFNlcnZpY2UoaW5qZWN0b3IsIGluTWVtRGJTZXJ2aWNlLCBjb25maWcpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgaW5NZW1EYlNlcnZpY2UsIGNvbmZpZykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuaW5qZWN0b3IgPSBpbmplY3RvcjtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBIdHRwQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmNyZWF0ZUNvbm5lY3Rpb24gPSBmdW5jdGlvbiAocmVxKSB7XG4gICAgICAgIHZhciByZXNwb25zZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gdGhpcy5oYW5kbGVSZXF1ZXN0KHJlcSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gZXJyb3IubWVzc2FnZSB8fCBlcnJvcjtcbiAgICAgICAgICAgIHZhciByZXNPcHRpb25zXzEgPSB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHJlcS51cmwsIFNUQVRVUy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsIFwiXCIgKyBlcnIpO1xuICAgICAgICAgICAgcmVzcG9uc2UgPSB0aGlzLmNyZWF0ZVJlc3BvbnNlJChmdW5jdGlvbiAoKSB7IHJldHVybiByZXNPcHRpb25zXzE7IH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZWFkeVN0YXRlOiBSZWFkeVN0YXRlLkRvbmUsXG4gICAgICAgICAgICByZXF1ZXN0OiByZXEsXG4gICAgICAgICAgICByZXNwb25zZTogcmVzcG9uc2VcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8vLy8gIHByb3RlY3RlZCBvdmVycmlkZXMgLy8vLy9cbiAgICBIdHRwQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmdldEpzb25Cb2R5ID0gZnVuY3Rpb24gKHJlcSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcS5qc29uKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHZhciBtc2cgPSBcIidcIiArIHJlcS51cmwgKyBcIicgcmVxdWVzdCBib2R5LXRvLWpzb24gZXJyb3JcXG5cIiArIEpTT04uc3RyaW5naWZ5KGUpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEh0dHBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuZ2V0UmVxdWVzdE1ldGhvZCA9IGZ1bmN0aW9uIChyZXEpIHtcbiAgICAgICAgcmV0dXJuIFJlcXVlc3RNZXRob2RbcmVxLm1ldGhvZCB8fCAwXS50b0xvd2VyQ2FzZSgpO1xuICAgIH07XG4gICAgSHR0cEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5jcmVhdGVIZWFkZXJzID0gZnVuY3Rpb24gKGhlYWRlcnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBIZWFkZXJzKGhlYWRlcnMpO1xuICAgIH07XG4gICAgSHR0cEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5jcmVhdGVRdWVyeU1hcCA9IGZ1bmN0aW9uIChzZWFyY2gpIHtcbiAgICAgICAgcmV0dXJuIHNlYXJjaCA/IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoKS5wYXJhbXNNYXAgOiBuZXcgTWFwKCk7XG4gICAgfTtcbiAgICBIdHRwQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmNyZWF0ZVJlc3BvbnNlJGZyb21SZXNwb25zZU9wdGlvbnMkID0gZnVuY3Rpb24gKHJlc09wdGlvbnMkKSB7XG4gICAgICAgIHJldHVybiBtYXAuY2FsbChyZXNPcHRpb25zJCwgZnVuY3Rpb24gKG9wdHMpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UobmV3IEh0dHBSZXNwb25zZU9wdGlvbnMob3B0cykpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEh0dHBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuY3JlYXRlUGFzc1RocnVCYWNrZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gY29waWVkIGZyb20gQGFuZ3VsYXIvaHR0cC9iYWNrZW5kcy94aHJfYmFja2VuZFxuICAgICAgICAgICAgdmFyIGJyb3dzZXJYaHIgPSB0aGlzLmluamVjdG9yLmdldChCcm93c2VyWGhyKTtcbiAgICAgICAgICAgIHZhciBiYXNlUmVzcG9uc2VPcHRpb25zID0gdGhpcy5pbmplY3Rvci5nZXQoSHR0cFJlc3BvbnNlT3B0aW9ucyk7XG4gICAgICAgICAgICB2YXIgeHNyZlN0cmF0ZWd5ID0gdGhpcy5pbmplY3Rvci5nZXQoWFNSRlN0cmF0ZWd5KTtcbiAgICAgICAgICAgIHZhciB4aHJCYWNrZW5kXzEgPSBuZXcgWEhSQmFja2VuZChicm93c2VyWGhyLCBiYXNlUmVzcG9uc2VPcHRpb25zLCB4c3JmU3RyYXRlZ3kpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBoYW5kbGU6IGZ1bmN0aW9uIChyZXEpIHsgcmV0dXJuIHhockJhY2tlbmRfMS5jcmVhdGVDb25uZWN0aW9uKHJlcSkucmVzcG9uc2U7IH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGUubWVzc2FnZSA9ICdDYW5ub3QgY3JlYXRlIHBhc3NUaHJ1NDA0IGJhY2tlbmQ7ICcgKyAoZS5tZXNzYWdlIHx8ICcnKTtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBIdHRwQmFja2VuZFNlcnZpY2U7XG59KEJhY2tlbmRTZXJ2aWNlKSk7XG5leHBvcnQgeyBIdHRwQmFja2VuZFNlcnZpY2UgfTtcbkh0dHBCYWNrZW5kU2VydmljZS5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogSW5qZWN0YWJsZSB9LFxuXTtcbi8qKiBAbm9jb2xsYXBzZSAqL1xuSHR0cEJhY2tlbmRTZXJ2aWNlLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgIHsgdHlwZTogSW5qZWN0b3IsIH0sXG4gICAgeyB0eXBlOiBJbk1lbW9yeURiU2VydmljZSwgfSxcbiAgICB7IHR5cGU6IEluTWVtb3J5QmFja2VuZENvbmZpZ0FyZ3MsIGRlY29yYXRvcnM6IFt7IHR5cGU6IEluamVjdCwgYXJnczogW0luTWVtb3J5QmFja2VuZENvbmZpZyxdIH0sIHsgdHlwZTogT3B0aW9uYWwgfSxdIH0sXG5dOyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHR0cC1iYWNrZW5kLnNlcnZpY2UuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cFBhcmFtcywgSHR0cFJlc3BvbnNlLCBIdHRwWGhyQmFja2VuZCwgWGhyRmFjdG9yeSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3IvbWFwJztcbmltcG9ydCB7IFNUQVRVUyB9IGZyb20gJy4vaHR0cC1zdGF0dXMtY29kZXMnO1xuaW1wb3J0IHsgSW5NZW1vcnlCYWNrZW5kQ29uZmlnLCBJbk1lbW9yeUJhY2tlbmRDb25maWdBcmdzLCBJbk1lbW9yeURiU2VydmljZSB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gJy4vYmFja2VuZC5zZXJ2aWNlJztcbi8qKlxuICogRm9yIEFuZ3VsYXIgYEh0dHBDbGllbnRgIHNpbXVsYXRlIHRoZSBiZWhhdmlvciBvZiBhIFJFU1R5IHdlYiBhcGlcbiAqIGJhY2tlZCBieSB0aGUgc2ltcGxlIGluLW1lbW9yeSBkYXRhIHN0b3JlIHByb3ZpZGVkIGJ5IHRoZSBpbmplY3RlZCBgSW5NZW1vcnlEYlNlcnZpY2VgLlxuICogQ29uZm9ybXMgbW9zdGx5IHRvIGJlaGF2aW9yIGRlc2NyaWJlZCBoZXJlOlxuICogaHR0cDovL3d3dy5yZXN0YXBpdHV0b3JpYWwuY29tL2xlc3NvbnMvaHR0cG1ldGhvZHMuaHRtbFxuICpcbiAqICMjIyBVc2FnZVxuICpcbiAqIENyZWF0ZSBhbiBpbi1tZW1vcnkgZGF0YSBzdG9yZSBjbGFzcyB0aGF0IGltcGxlbWVudHMgYEluTWVtb3J5RGJTZXJ2aWNlYC5cbiAqIENhbGwgYGNvbmZpZ2Agc3RhdGljIG1ldGhvZCB3aXRoIHRoaXMgc2VydmljZSBjbGFzcyBhbmQgb3B0aW9uYWwgY29uZmlndXJhdGlvbiBvYmplY3Q6XG4gKiBgYGBcbiAqIC8vIG90aGVyIGltcG9ydHNcbiAqIGltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG4gKiBpbXBvcnQgeyBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUgfSBmcm9tICdhbmd1bGFyLWluLW1lbW9yeS13ZWItYXBpJztcbiAqXG4gKiBpbXBvcnQgeyBJbk1lbUhlcm9TZXJ2aWNlLCBpbk1lbUNvbmZpZyB9IGZyb20gJy4uL2FwaS9pbi1tZW1vcnktaGVyby5zZXJ2aWNlJztcbiAqIEBOZ01vZHVsZSh7XG4gKiAgaW1wb3J0czogW1xuICogICAgSHR0cE1vZHVsZSxcbiAqICAgIEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290KEluTWVtSGVyb1NlcnZpY2UsIGluTWVtQ29uZmlnKSxcbiAqICAgIC4uLlxuICogIF0sXG4gKiAgLi4uXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IC4uLiB9XG4gKiBgYGBcbiAqL1xudmFyIEh0dHBDbGllbnRCYWNrZW5kU2VydmljZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEh0dHBDbGllbnRCYWNrZW5kU2VydmljZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UoaW5NZW1EYlNlcnZpY2UsIGNvbmZpZywgeGhyRmFjdG9yeSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBpbk1lbURiU2VydmljZSwgY29uZmlnKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy54aHJGYWN0b3J5ID0geGhyRmFjdG9yeTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmhhbmRsZSA9IGZ1bmN0aW9uIChyZXEpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJlcXVlc3QocmVxKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBlcnJvci5tZXNzYWdlIHx8IGVycm9yO1xuICAgICAgICAgICAgdmFyIHJlc09wdGlvbnNfMSA9IHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnMocmVxLnVybCwgU1RBVFVTLklOVEVSTkFMX1NFUlZFUl9FUlJPUiwgXCJcIiArIGVycik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVSZXNwb25zZSQoZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVzT3B0aW9uc18xOyB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8vLyAgcHJvdGVjdGVkIG92ZXJyaWRlcyAvLy8vL1xuICAgIEh0dHBDbGllbnRCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuZ2V0SnNvbkJvZHkgPSBmdW5jdGlvbiAocmVxKSB7XG4gICAgICAgIHJldHVybiByZXEuYm9keTtcbiAgICB9O1xuICAgIEh0dHBDbGllbnRCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuZ2V0UmVxdWVzdE1ldGhvZCA9IGZ1bmN0aW9uIChyZXEpIHtcbiAgICAgICAgcmV0dXJuIChyZXEubWV0aG9kIHx8ICdnZXQnKS50b0xvd2VyQ2FzZSgpO1xuICAgIH07XG4gICAgSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5jcmVhdGVIZWFkZXJzID0gZnVuY3Rpb24gKGhlYWRlcnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBIdHRwSGVhZGVycyhoZWFkZXJzKTtcbiAgICB9O1xuICAgIEh0dHBDbGllbnRCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuY3JlYXRlUXVlcnlNYXAgPSBmdW5jdGlvbiAoc2VhcmNoKSB7XG4gICAgICAgIHZhciBtYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIGlmIChzZWFyY2gpIHtcbiAgICAgICAgICAgIHZhciBwYXJhbXNfMSA9IG5ldyBIdHRwUGFyYW1zKHsgZnJvbVN0cmluZzogc2VhcmNoIH0pO1xuICAgICAgICAgICAgcGFyYW1zXzEua2V5cygpLmZvckVhY2goZnVuY3Rpb24gKHApIHsgcmV0dXJuIG1hcC5zZXQocCwgcGFyYW1zXzEuZ2V0QWxsKHApKTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hcDtcbiAgICB9O1xuICAgIEh0dHBDbGllbnRCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuY3JlYXRlUmVzcG9uc2UkZnJvbVJlc3BvbnNlT3B0aW9ucyQgPSBmdW5jdGlvbiAocmVzT3B0aW9ucyQpIHtcbiAgICAgICAgcmV0dXJuIG1hcC5jYWxsKHJlc09wdGlvbnMkLCBmdW5jdGlvbiAob3B0cykgeyByZXR1cm4gbmV3IEh0dHBSZXNwb25zZShvcHRzKTsgfSk7XG4gICAgfTtcbiAgICBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmNyZWF0ZVBhc3NUaHJ1QmFja2VuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgSHR0cFhockJhY2tlbmQodGhpcy54aHJGYWN0b3J5KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIGV4Lm1lc3NhZ2UgPSAnQ2Fubm90IGNyZWF0ZSBwYXNzVGhydTQwNCBiYWNrZW5kOyAnICsgKGV4Lm1lc3NhZ2UgfHwgJycpO1xuICAgICAgICAgICAgdGhyb3cgZXg7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2U7XG59KEJhY2tlbmRTZXJ2aWNlKSk7XG5leHBvcnQgeyBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UgfTtcbkh0dHBDbGllbnRCYWNrZW5kU2VydmljZS5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogSW5qZWN0YWJsZSB9LFxuXTtcbi8qKiBAbm9jb2xsYXBzZSAqL1xuSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgIHsgdHlwZTogSW5NZW1vcnlEYlNlcnZpY2UsIH0sXG4gICAgeyB0eXBlOiBJbk1lbW9yeUJhY2tlbmRDb25maWdBcmdzLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtJbk1lbW9yeUJhY2tlbmRDb25maWcsXSB9LCB7IHR5cGU6IE9wdGlvbmFsIH0sXSB9LFxuICAgIHsgdHlwZTogWGhyRmFjdG9yeSwgfSxcbl07IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1odHRwLWNsaWVudC1iYWNrZW5kLnNlcnZpY2UuanMubWFwIiwiLy8vLy8vIEh0dHAtT25seSB2ZXJzaW9uIC8vLy9cbmltcG9ydCB7IEluamVjdG9yLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgWEhSQmFja2VuZCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgSW5NZW1vcnlCYWNrZW5kQ29uZmlnLCBJbk1lbW9yeURiU2VydmljZSB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBIdHRwQmFja2VuZFNlcnZpY2UgfSBmcm9tICcuL2h0dHAtYmFja2VuZC5zZXJ2aWNlJztcbi8vIEludGVybmFsIC0gQ3JlYXRlcyB0aGUgaW4tbWVtIGJhY2tlbmQgZm9yIHRoZSBIdHRwIG1vZHVsZVxuLy8gQW9UIHJlcXVpcmVzIGZhY3RvcnkgdG8gYmUgZXhwb3J0ZWRcbmV4cG9ydCBmdW5jdGlvbiBodHRwSW5NZW1CYWNrZW5kU2VydmljZUZhY3RvcnkoaW5qZWN0b3IsIGRiU2VydmljZSwgb3B0aW9ucykge1xuICAgIHZhciBiYWNrZW5kID0gbmV3IEh0dHBCYWNrZW5kU2VydmljZShpbmplY3RvciwgZGJTZXJ2aWNlLCBvcHRpb25zKTtcbiAgICByZXR1cm4gYmFja2VuZDtcbn1cbnZhciBIdHRwSW5NZW1vcnlXZWJBcGlNb2R1bGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEh0dHBJbk1lbW9yeVdlYkFwaU1vZHVsZSgpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgKiAgUmVkaXJlY3QgdGhlIEFuZ3VsYXIgYEh0dHBgIFhIUiBjYWxsc1xuICAgICogIHRvIGluLW1lbW9yeSBkYXRhIHN0b3JlIHRoYXQgaW1wbGVtZW50cyBgSW5NZW1vcnlEYlNlcnZpY2VgLlxuICAgICogIHdpdGggY2xhc3MgdGhhdCBpbXBsZW1lbnRzIEluTWVtb3J5RGJTZXJ2aWNlIGFuZCBjcmVhdGVzIGFuIGluLW1lbW9yeSBkYXRhYmFzZS5cbiAgICAqXG4gICAgKiAgVXN1YWxseSBpbXBvcnRlZCBpbiB0aGUgcm9vdCBhcHBsaWNhdGlvbiBtb2R1bGUuXG4gICAgKiAgQ2FuIGltcG9ydCBpbiBhIGxhenkgZmVhdHVyZSBtb2R1bGUgdG9vLCB3aGljaCB3aWxsIHNoYWRvdyBtb2R1bGVzIGxvYWRlZCBlYXJsaWVyXG4gICAgKlxuICAgICogQHBhcmFtIHtUeXBlfSBkYkNyZWF0b3IgLSBDbGFzcyB0aGF0IGNyZWF0ZXMgc2VlZCBkYXRhIGZvciBpbi1tZW1vcnkgZGF0YWJhc2UuIE11c3QgaW1wbGVtZW50IEluTWVtb3J5RGJTZXJ2aWNlLlxuICAgICogQHBhcmFtIHtJbk1lbW9yeUJhY2tlbmRDb25maWdBcmdzfSBbb3B0aW9uc11cbiAgICAqXG4gICAgKiBAZXhhbXBsZVxuICAgICogSHR0cEluTWVtb3J5V2ViQXBpTW9kdWxlLmZvclJvb3QoZGJDcmVhdG9yKTtcbiAgICAqIEh0dHBJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290KGRiQ3JlYXRvciwge3VzZVZhbHVlOiB7ZGVsYXk6NjAwfX0pO1xuICAgICovXG4gICAgSHR0cEluTWVtb3J5V2ViQXBpTW9kdWxlLmZvclJvb3QgPSBmdW5jdGlvbiAoZGJDcmVhdG9yLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogSHR0cEluTWVtb3J5V2ViQXBpTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBJbk1lbW9yeURiU2VydmljZSwgdXNlQ2xhc3M6IGRiQ3JlYXRvciB9LFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogSW5NZW1vcnlCYWNrZW5kQ29uZmlnLCB1c2VWYWx1ZTogb3B0aW9ucyB9LFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogWEhSQmFja2VuZCxcbiAgICAgICAgICAgICAgICAgICAgdXNlRmFjdG9yeTogaHR0cEluTWVtQmFja2VuZFNlcnZpY2VGYWN0b3J5LFxuICAgICAgICAgICAgICAgICAgICBkZXBzOiBbSW5qZWN0b3IsIEluTWVtb3J5RGJTZXJ2aWNlLCBJbk1lbW9yeUJhY2tlbmRDb25maWddIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgKlxuICAgKiBFbmFibGUgYW5kIGNvbmZpZ3VyZSB0aGUgaW4tbWVtb3J5IHdlYiBhcGkgaW4gYSBsYXp5LWxvYWRlZCBmZWF0dXJlIG1vZHVsZS5cbiAgICogU2FtZSBhcyBgZm9yUm9vdGAuXG4gICAqIFRoaXMgaXMgYSBmZWVsLWdvb2QgbWV0aG9kIHNvIHlvdSBjYW4gZm9sbG93IHRoZSBBbmd1bGFyIHN0eWxlIGd1aWRlIGZvciBsYXp5LWxvYWRlZCBtb2R1bGVzLlxuICAgKi9cbiAgICBIdHRwSW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yRmVhdHVyZSA9IGZ1bmN0aW9uIChkYkNyZWF0b3IsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIEh0dHBJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290KGRiQ3JlYXRvciwgb3B0aW9ucyk7XG4gICAgfTtcbiAgICByZXR1cm4gSHR0cEluTWVtb3J5V2ViQXBpTW9kdWxlO1xufSgpKTtcbmV4cG9ydCB7IEh0dHBJbk1lbW9yeVdlYkFwaU1vZHVsZSB9O1xuSHR0cEluTWVtb3J5V2ViQXBpTW9kdWxlLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBOZ01vZHVsZSwgYXJnczogW3t9LF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbkh0dHBJbk1lbW9yeVdlYkFwaU1vZHVsZS5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHR0cC1pbi1tZW1vcnktd2ViLWFwaS5tb2R1bGUuanMubWFwIiwiLy8vLy8vIEh0dHBDbGllbnQtT25seSB2ZXJzaW9uIC8vLy9cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQmFja2VuZCwgWGhyRmFjdG9yeSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluTWVtb3J5QmFja2VuZENvbmZpZywgSW5NZW1vcnlEYlNlcnZpY2UgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSAnLi9odHRwLWNsaWVudC1iYWNrZW5kLnNlcnZpY2UnO1xuLy8gSW50ZXJuYWwgLSBDcmVhdGVzIHRoZSBpbi1tZW0gYmFja2VuZCBmb3IgdGhlIEh0dHBDbGllbnQgbW9kdWxlXG4vLyBBb1QgcmVxdWlyZXMgZmFjdG9yeSB0byBiZSBleHBvcnRlZFxuZXhwb3J0IGZ1bmN0aW9uIGh0dHBDbGllbnRJbk1lbUJhY2tlbmRTZXJ2aWNlRmFjdG9yeShkYlNlcnZpY2UsIG9wdGlvbnMsIHhockZhY3RvcnkpIHtcbiAgICB2YXIgYmFja2VuZCA9IG5ldyBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UoZGJTZXJ2aWNlLCBvcHRpb25zLCB4aHJGYWN0b3J5KTtcbiAgICByZXR1cm4gYmFja2VuZDtcbn1cbnZhciBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZSgpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgKiAgUmVkaXJlY3QgdGhlIEFuZ3VsYXIgYEh0dHBDbGllbnRgIFhIUiBjYWxsc1xuICAgICogIHRvIGluLW1lbW9yeSBkYXRhIHN0b3JlIHRoYXQgaW1wbGVtZW50cyBgSW5NZW1vcnlEYlNlcnZpY2VgLlxuICAgICogIHdpdGggY2xhc3MgdGhhdCBpbXBsZW1lbnRzIEluTWVtb3J5RGJTZXJ2aWNlIGFuZCBjcmVhdGVzIGFuIGluLW1lbW9yeSBkYXRhYmFzZS5cbiAgICAqXG4gICAgKiAgVXN1YWxseSBpbXBvcnRlZCBpbiB0aGUgcm9vdCBhcHBsaWNhdGlvbiBtb2R1bGUuXG4gICAgKiAgQ2FuIGltcG9ydCBpbiBhIGxhenkgZmVhdHVyZSBtb2R1bGUgdG9vLCB3aGljaCB3aWxsIHNoYWRvdyBtb2R1bGVzIGxvYWRlZCBlYXJsaWVyXG4gICAgKlxuICAgICogQHBhcmFtIHtUeXBlfSBkYkNyZWF0b3IgLSBDbGFzcyB0aGF0IGNyZWF0ZXMgc2VlZCBkYXRhIGZvciBpbi1tZW1vcnkgZGF0YWJhc2UuIE11c3QgaW1wbGVtZW50IEluTWVtb3J5RGJTZXJ2aWNlLlxuICAgICogQHBhcmFtIHtJbk1lbW9yeUJhY2tlbmRDb25maWdBcmdzfSBbb3B0aW9uc11cbiAgICAqXG4gICAgKiBAZXhhbXBsZVxuICAgICogSHR0cEluTWVtb3J5V2ViQXBpTW9kdWxlLmZvclJvb3QoZGJDcmVhdG9yKTtcbiAgICAqIEh0dHBJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290KGRiQ3JlYXRvciwge3VzZVZhbHVlOiB7ZGVsYXk6NjAwfX0pO1xuICAgICovXG4gICAgSHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlLmZvclJvb3QgPSBmdW5jdGlvbiAoZGJDcmVhdG9yLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogSHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBJbk1lbW9yeURiU2VydmljZSwgdXNlQ2xhc3M6IGRiQ3JlYXRvciB9LFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogSW5NZW1vcnlCYWNrZW5kQ29uZmlnLCB1c2VWYWx1ZTogb3B0aW9ucyB9LFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogSHR0cEJhY2tlbmQsXG4gICAgICAgICAgICAgICAgICAgIHVzZUZhY3Rvcnk6IGh0dHBDbGllbnRJbk1lbUJhY2tlbmRTZXJ2aWNlRmFjdG9yeSxcbiAgICAgICAgICAgICAgICAgICAgZGVwczogW0luTWVtb3J5RGJTZXJ2aWNlLCBJbk1lbW9yeUJhY2tlbmRDb25maWcsIFhockZhY3RvcnldIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgKlxuICAgKiBFbmFibGUgYW5kIGNvbmZpZ3VyZSB0aGUgaW4tbWVtb3J5IHdlYiBhcGkgaW4gYSBsYXp5LWxvYWRlZCBmZWF0dXJlIG1vZHVsZS5cbiAgICogU2FtZSBhcyBgZm9yUm9vdGAuXG4gICAqIFRoaXMgaXMgYSBmZWVsLWdvb2QgbWV0aG9kIHNvIHlvdSBjYW4gZm9sbG93IHRoZSBBbmd1bGFyIHN0eWxlIGd1aWRlIGZvciBsYXp5LWxvYWRlZCBtb2R1bGVzLlxuICAgKi9cbiAgICBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yRmVhdHVyZSA9IGZ1bmN0aW9uIChkYkNyZWF0b3IsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290KGRiQ3JlYXRvciwgb3B0aW9ucyk7XG4gICAgfTtcbiAgICByZXR1cm4gSHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlO1xufSgpKTtcbmV4cG9ydCB7IEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZSB9O1xuSHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBOZ01vZHVsZSwgYXJnczogW3t9LF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbkh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZS5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHR0cC1jbGllbnQtaW4tbWVtb3J5LXdlYi1hcGkubW9kdWxlLmpzLm1hcCIsIi8vLy8vLyBGb3IgYXBwcyB3aXRoIGJvdGggSHR0cCBhbmQgSHR0cENsaWVudCAvLy8vXG5pbXBvcnQgeyBJbmplY3RvciwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFhIUkJhY2tlbmQgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEh0dHBCYWNrZW5kLCBYaHJGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5NZW1vcnlCYWNrZW5kQ29uZmlnLCBJbk1lbW9yeURiU2VydmljZSB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBodHRwSW5NZW1CYWNrZW5kU2VydmljZUZhY3RvcnkgfSBmcm9tICcuL2h0dHAtaW4tbWVtb3J5LXdlYi1hcGkubW9kdWxlJztcbmltcG9ydCB7IGh0dHBDbGllbnRJbk1lbUJhY2tlbmRTZXJ2aWNlRmFjdG9yeSB9IGZyb20gJy4vaHR0cC1jbGllbnQtaW4tbWVtb3J5LXdlYi1hcGkubW9kdWxlJztcbnZhciBJbk1lbW9yeVdlYkFwaU1vZHVsZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSW5NZW1vcnlXZWJBcGlNb2R1bGUoKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICogIFJlZGlyZWN0IEJPVEggQW5ndWxhciBgSHR0cGAgYW5kIGBIdHRwQ2xpZW50YCBYSFIgY2FsbHNcbiAgICAqICB0byBpbi1tZW1vcnkgZGF0YSBzdG9yZSB0aGF0IGltcGxlbWVudHMgYEluTWVtb3J5RGJTZXJ2aWNlYC5cbiAgICAqICB3aXRoIGNsYXNzIHRoYXQgaW1wbGVtZW50cyBJbk1lbW9yeURiU2VydmljZSBhbmQgY3JlYXRlcyBhbiBpbi1tZW1vcnkgZGF0YWJhc2UuXG4gICAgKlxuICAgICogIFVzdWFsbHkgaW1wb3J0ZWQgaW4gdGhlIHJvb3QgYXBwbGljYXRpb24gbW9kdWxlLlxuICAgICogIENhbiBpbXBvcnQgaW4gYSBsYXp5IGZlYXR1cmUgbW9kdWxlIHRvbywgd2hpY2ggd2lsbCBzaGFkb3cgbW9kdWxlcyBsb2FkZWQgZWFybGllclxuICAgICpcbiAgICAqIEBwYXJhbSB7VHlwZX0gZGJDcmVhdG9yIC0gQ2xhc3MgdGhhdCBjcmVhdGVzIHNlZWQgZGF0YSBmb3IgaW4tbWVtb3J5IGRhdGFiYXNlLiBNdXN0IGltcGxlbWVudCBJbk1lbW9yeURiU2VydmljZS5cbiAgICAqIEBwYXJhbSB7SW5NZW1vcnlCYWNrZW5kQ29uZmlnQXJnc30gW29wdGlvbnNdXG4gICAgKlxuICAgICogQGV4YW1wbGVcbiAgICAqIEluTWVtb3J5V2ViQXBpTW9kdWxlLmZvclJvb3QoZGJDcmVhdG9yKTtcbiAgICAqIEluTWVtb3J5V2ViQXBpTW9kdWxlLmZvclJvb3QoZGJDcmVhdG9yLCB7dXNlVmFsdWU6IHtkZWxheTo2MDB9fSk7XG4gICAgKi9cbiAgICBJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290ID0gZnVuY3Rpb24gKGRiQ3JlYXRvciwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IEluTWVtb3J5V2ViQXBpTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBJbk1lbW9yeURiU2VydmljZSwgdXNlQ2xhc3M6IGRiQ3JlYXRvciB9LFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogSW5NZW1vcnlCYWNrZW5kQ29uZmlnLCB1c2VWYWx1ZTogb3B0aW9ucyB9LFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogWEhSQmFja2VuZCxcbiAgICAgICAgICAgICAgICAgICAgdXNlRmFjdG9yeTogaHR0cEluTWVtQmFja2VuZFNlcnZpY2VGYWN0b3J5LFxuICAgICAgICAgICAgICAgICAgICBkZXBzOiBbSW5qZWN0b3IsIEluTWVtb3J5RGJTZXJ2aWNlLCBJbk1lbW9yeUJhY2tlbmRDb25maWddIH0sXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBIdHRwQmFja2VuZCxcbiAgICAgICAgICAgICAgICAgICAgdXNlRmFjdG9yeTogaHR0cENsaWVudEluTWVtQmFja2VuZFNlcnZpY2VGYWN0b3J5LFxuICAgICAgICAgICAgICAgICAgICBkZXBzOiBbSW5NZW1vcnlEYlNlcnZpY2UsIEluTWVtb3J5QmFja2VuZENvbmZpZywgWGhyRmFjdG9yeV0gfVxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBFbmFibGUgYW5kIGNvbmZpZ3VyZSB0aGUgaW4tbWVtb3J5IHdlYiBhcGkgaW4gYSBsYXp5LWxvYWRlZCBmZWF0dXJlIG1vZHVsZS5cbiAgICAgKiBTYW1lIGFzIGBmb3JSb290YC5cbiAgICAgKiBUaGlzIGlzIGEgZmVlbC1nb29kIG1ldGhvZCBzbyB5b3UgY2FuIGZvbGxvdyB0aGUgQW5ndWxhciBzdHlsZSBndWlkZSBmb3IgbGF6eS1sb2FkZWQgbW9kdWxlcy5cbiAgICAgKi9cbiAgICBJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JGZWF0dXJlID0gZnVuY3Rpb24gKGRiQ3JlYXRvciwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gSW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yUm9vdChkYkNyZWF0b3IsIG9wdGlvbnMpO1xuICAgIH07XG4gICAgcmV0dXJuIEluTWVtb3J5V2ViQXBpTW9kdWxlO1xufSgpKTtcbmV4cG9ydCB7IEluTWVtb3J5V2ViQXBpTW9kdWxlIH07XG5Jbk1lbW9yeVdlYkFwaU1vZHVsZS5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogTmdNb2R1bGUsIGFyZ3M6IFt7fSxdIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5Jbk1lbW9yeVdlYkFwaU1vZHVsZS5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW4tbWVtb3J5LXdlYi1hcGkubW9kdWxlLmpzLm1hcCJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQmVoYXZpb3JTdWJqZWN0IiwiZmlyc3QiLCJjb25jYXRNYXAiLCJkZWxheSIsIk9ic2VydmFibGUiLCJpc1Byb21pc2UiLCJmcm9tUHJvbWlzZSIsIm9mIiwidGhpcyIsIlJlYWR5U3RhdGUiLCJSZXF1ZXN0TWV0aG9kIiwiSGVhZGVycyIsIlVSTFNlYXJjaFBhcmFtcyIsIm1hcCIsIlJlc3BvbnNlIiwiSHR0cFJlc3BvbnNlT3B0aW9ucyIsIkJyb3dzZXJYaHIiLCJYU1JGU3RyYXRlZ3kiLCJYSFJCYWNrZW5kIiwiSW5qZWN0b3IiLCJJbmplY3QiLCJPcHRpb25hbCIsIl9fZXh0ZW5kcyIsIkh0dHBIZWFkZXJzIiwiSHR0cFBhcmFtcyIsIkh0dHBSZXNwb25zZSIsIkh0dHBYaHJCYWNrZW5kIiwiWGhyRmFjdG9yeSIsIk5nTW9kdWxlIiwiSHR0cEJhY2tlbmQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLElBQUksTUFBTSxHQUFHO0lBQ2hCLFFBQVEsRUFBRSxHQUFHO0lBQ2IsbUJBQW1CLEVBQUUsR0FBRztJQUN4QixFQUFFLEVBQUUsR0FBRztJQUNQLE9BQU8sRUFBRSxHQUFHO0lBQ1osUUFBUSxFQUFFLEdBQUc7SUFDYiw2QkFBNkIsRUFBRSxHQUFHO0lBQ2xDLFVBQVUsRUFBRSxHQUFHO0lBQ2YsYUFBYSxFQUFFLEdBQUc7SUFDbEIsZUFBZSxFQUFFLEdBQUc7SUFDcEIsZ0JBQWdCLEVBQUUsR0FBRztJQUNyQixrQkFBa0IsRUFBRSxHQUFHO0lBQ3ZCLEtBQUssRUFBRSxHQUFHO0lBQ1YsU0FBUyxFQUFFLEdBQUc7SUFDZCxZQUFZLEVBQUUsR0FBRztJQUNqQixTQUFTLEVBQUUsR0FBRztJQUNkLGtCQUFrQixFQUFFLEdBQUc7SUFDdkIsV0FBVyxFQUFFLEdBQUc7SUFDaEIsWUFBWSxFQUFFLEdBQUc7SUFDakIsZ0JBQWdCLEVBQUUsR0FBRztJQUNyQixTQUFTLEVBQUUsR0FBRztJQUNkLFNBQVMsRUFBRSxHQUFHO0lBQ2Qsa0JBQWtCLEVBQUUsR0FBRztJQUN2QixjQUFjLEVBQUUsR0FB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