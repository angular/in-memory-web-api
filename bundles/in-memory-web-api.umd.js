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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LXdlYi1hcGkudW1kLmpzIiwic291cmNlcyI6WyIuLi9zcmMvaW4tbWVtL2h0dHAtc3RhdHVzLWNvZGVzLmpzIiwiLi4vc3JjL2luLW1lbS9pbnRlcmZhY2VzLmpzIiwiLi4vc3JjL2luLW1lbS9iYWNrZW5kLnNlcnZpY2UuanMiLCIuLi9zcmMvaW4tbWVtL2h0dHAtYmFja2VuZC5zZXJ2aWNlLmpzIiwiLi4vc3JjL2luLW1lbS9odHRwLWNsaWVudC1iYWNrZW5kLnNlcnZpY2UuanMiLCIuLi9zcmMvaW4tbWVtL2h0dHAtaW4tbWVtb3J5LXdlYi1hcGkubW9kdWxlLmpzIiwiLi4vc3JjL2luLW1lbS9odHRwLWNsaWVudC1pbi1tZW1vcnktd2ViLWFwaS5tb2R1bGUuanMiLCIuLi9zcmMvaW4tbWVtL2luLW1lbW9yeS13ZWItYXBpLm1vZHVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIFNUQVRVUyA9IHtcbiAgICBDT05USU5VRTogMTAwLFxuICAgIFNXSVRDSElOR19QUk9UT0NPTFM6IDEwMSxcbiAgICBPSzogMjAwLFxuICAgIENSRUFURUQ6IDIwMSxcbiAgICBBQ0NFUFRFRDogMjAyLFxuICAgIE5PTl9BVVRIT1JJVEFUSVZFX0lORk9STUFUSU9OOiAyMDMsXG4gICAgTk9fQ09OVEVOVDogMjA0LFxuICAgIFJFU0VUX0NPTlRFTlQ6IDIwNSxcbiAgICBQQVJUSUFMX0NPTlRFTlQ6IDIwNixcbiAgICBNVUxUSVBMRV9DSE9JQ0VTOiAzMDAsXG4gICAgTU9WRURfUEVSTUFOVEVOVExZOiAzMDEsXG4gICAgRk9VTkQ6IDMwMixcbiAgICBTRUVfT1RIRVI6IDMwMyxcbiAgICBOT1RfTU9ESUZJRUQ6IDMwNCxcbiAgICBVU0VfUFJPWFk6IDMwNSxcbiAgICBURU1QT1JBUllfUkVESVJFQ1Q6IDMwNyxcbiAgICBCQURfUkVRVUVTVDogNDAwLFxuICAgIFVOQVVUSE9SSVpFRDogNDAxLFxuICAgIFBBWU1FTlRfUkVRVUlSRUQ6IDQwMixcbiAgICBGT1JCSURERU46IDQwMyxcbiAgICBOT1RfRk9VTkQ6IDQwNCxcbiAgICBNRVRIT0RfTk9UX0FMTE9XRUQ6IDQwNSxcbiAgICBOT1RfQUNDRVBUQUJMRTogNDA2LFxuICAgIFBST1hZX0FVVEhFTlRJQ0FUSU9OX1JFUVVJUkVEOiA0MDcsXG4gICAgUkVRVUVTVF9USU1FT1VUOiA0MDgsXG4gICAgQ09ORkxJQ1Q6IDQwOSxcbiAgICBHT05FOiA0MTAsXG4gICAgTEVOR1RIX1JFUVVJUkVEOiA0MTEsXG4gICAgUFJFQ09ORElUSU9OX0ZBSUxFRDogNDEyLFxuICAgIFBBWUxPQURfVE9fTEFSR0U6IDQxMyxcbiAgICBVUklfVE9PX0xPTkc6IDQxNCxcbiAgICBVTlNVUFBPUlRFRF9NRURJQV9UWVBFOiA0MTUsXG4gICAgUkFOR0VfTk9UX1NBVElTRklBQkxFOiA0MTYsXG4gICAgRVhQRUNUQVRJT05fRkFJTEVEOiA0MTcsXG4gICAgSU1fQV9URUFQT1Q6IDQxOCxcbiAgICBVUEdSQURFX1JFUVVJUkVEOiA0MjYsXG4gICAgSU5URVJOQUxfU0VSVkVSX0VSUk9SOiA1MDAsXG4gICAgTk9UX0lNUExFTUVOVEVEOiA1MDEsXG4gICAgQkFEX0dBVEVXQVk6IDUwMixcbiAgICBTRVJWSUNFX1VOQVZBSUxBQkxFOiA1MDMsXG4gICAgR0FURVdBWV9USU1FT1VUOiA1MDQsXG4gICAgSFRUUF9WRVJTSU9OX05PVF9TVVBQT1JURUQ6IDUwNSxcbiAgICBQUk9DRVNTSU5HOiAxMDIsXG4gICAgTVVMVElfU1RBVFVTOiAyMDcsXG4gICAgSU1fVVNFRDogMjI2LFxuICAgIFBFUk1BTkVOVF9SRURJUkVDVDogMzA4LFxuICAgIFVOUFJPQ0VTU0FCTEVfRU5UUlk6IDQyMixcbiAgICBMT0NLRUQ6IDQyMyxcbiAgICBGQUlMRURfREVQRU5ERU5DWTogNDI0LFxuICAgIFBSRUNPTkRJVElPTl9SRVFVSVJFRDogNDI4LFxuICAgIFRPT19NQU5ZX1JFUVVFU1RTOiA0MjksXG4gICAgUkVRVUVTVF9IRUFERVJfRklFTERTX1RPT19MQVJHRTogNDMxLFxuICAgIFVOQVZBSUxBQkxFX0ZPUl9MRUdBTF9SRUFTT05TOiA0NTEsXG4gICAgVkFSSUFOVF9BTFNPX05FR09USUFURVM6IDUwNixcbiAgICBJTlNVRkZJQ0lFTlRfU1RPUkFHRTogNTA3LFxuICAgIE5FVFdPUktfQVVUSEVOVElDQVRJT05fUkVRVUlSRUQ6IDUxMVxufTtcbi8qdHNsaW50OmRpc2FibGU6cXVvdGVtYXJrIG1heC1saW5lLWxlbmd0aCBvbmUtbGluZSAqL1xuZXhwb3J0IHZhciBTVEFUVVNfQ09ERV9JTkZPID0ge1xuICAgICcxMDAnOiB7XG4gICAgICAgICdjb2RlJzogMTAwLFxuICAgICAgICAndGV4dCc6ICdDb250aW51ZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIGluaXRpYWwgcGFydCBvZiBhIHJlcXVlc3QgaGFzIGJlZW4gcmVjZWl2ZWQgYW5kIGhhcyBub3QgeWV0IGJlZW4gcmVqZWN0ZWQgYnkgdGhlIHNlcnZlci5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjIuMScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMi4xJ1xuICAgIH0sXG4gICAgJzEwMSc6IHtcbiAgICAgICAgJ2NvZGUnOiAxMDEsXG4gICAgICAgICd0ZXh0JzogJ1N3aXRjaGluZyBQcm90b2NvbHMnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgdW5kZXJzdGFuZHMgYW5kIGlzIHdpbGxpbmcgdG8gY29tcGx5IHdpdGggdGhlIGNsaWVudFxcJ3MgcmVxdWVzdCwgdmlhIHRoZSBVcGdyYWRlIGhlYWRlciBmaWVsZCwgZm9yIGEgY2hhbmdlIGluIHRoZSBhcHBsaWNhdGlvbiBwcm90b2NvbCBiZWluZyB1c2VkIG9uIHRoaXMgY29ubmVjdGlvbi5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjIuMicsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMi4yJ1xuICAgIH0sXG4gICAgJzIwMCc6IHtcbiAgICAgICAgJ2NvZGUnOiAyMDAsXG4gICAgICAgICd0ZXh0JzogJ09LJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgcmVxdWVzdCBoYXMgc3VjY2VlZGVkLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuMy4xJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjEnXG4gICAgfSxcbiAgICAnMjAxJzoge1xuICAgICAgICAnY29kZSc6IDIwMSxcbiAgICAgICAgJ3RleHQnOiAnQ3JlYXRlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHJlcXVlc3QgaGFzIGJlZW4gZnVsZmlsbGVkIGFuZCBoYXMgcmVzdWx0ZWQgaW4gb25lIG9yIG1vcmUgbmV3IHJlc291cmNlcyBiZWluZyBjcmVhdGVkLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuMy4yJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjInXG4gICAgfSxcbiAgICAnMjAyJzoge1xuICAgICAgICAnY29kZSc6IDIwMixcbiAgICAgICAgJ3RleHQnOiAnQWNjZXB0ZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSByZXF1ZXN0IGhhcyBiZWVuIGFjY2VwdGVkIGZvciBwcm9jZXNzaW5nLCBidXQgdGhlIHByb2Nlc3NpbmcgaGFzIG5vdCBiZWVuIGNvbXBsZXRlZC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjMuMycsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMy4zJ1xuICAgIH0sXG4gICAgJzIwMyc6IHtcbiAgICAgICAgJ2NvZGUnOiAyMDMsXG4gICAgICAgICd0ZXh0JzogJ05vbi1BdXRob3JpdGF0aXZlIEluZm9ybWF0aW9uJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgcmVxdWVzdCB3YXMgc3VjY2Vzc2Z1bCBidXQgdGhlIGVuY2xvc2VkIHBheWxvYWQgaGFzIGJlZW4gbW9kaWZpZWQgZnJvbSB0aGF0IG9mIHRoZSBvcmlnaW4gc2VydmVyXFwncyAyMDAgKE9LKSByZXNwb25zZSBieSBhIHRyYW5zZm9ybWluZyBwcm94eS5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjMuNCcsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMy40J1xuICAgIH0sXG4gICAgJzIwNCc6IHtcbiAgICAgICAgJ2NvZGUnOiAyMDQsXG4gICAgICAgICd0ZXh0JzogJ05vIENvbnRlbnQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgaGFzIHN1Y2Nlc3NmdWxseSBmdWxmaWxsZWQgdGhlIHJlcXVlc3QgYW5kIHRoYXQgdGhlcmUgaXMgbm8gYWRkaXRpb25hbCBjb250ZW50IHRvIHNlbmQgaW4gdGhlIHJlc3BvbnNlIHBheWxvYWQgYm9keS5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjMuNScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMy41J1xuICAgIH0sXG4gICAgJzIwNSc6IHtcbiAgICAgICAgJ2NvZGUnOiAyMDUsXG4gICAgICAgICd0ZXh0JzogJ1Jlc2V0IENvbnRlbnQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgaGFzIGZ1bGZpbGxlZCB0aGUgcmVxdWVzdCBhbmQgZGVzaXJlcyB0aGF0IHRoZSB1c2VyIGFnZW50IHJlc2V0IHRoZSBcXFwiZG9jdW1lbnQgdmlld1xcXCIsIHdoaWNoIGNhdXNlZCB0aGUgcmVxdWVzdCB0byBiZSBzZW50LCB0byBpdHMgb3JpZ2luYWwgc3RhdGUgYXMgcmVjZWl2ZWQgZnJvbSB0aGUgb3JpZ2luIHNlcnZlci5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjMuNicsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMy42J1xuICAgIH0sXG4gICAgJzIwNic6IHtcbiAgICAgICAgJ2NvZGUnOiAyMDYsXG4gICAgICAgICd0ZXh0JzogJ1BhcnRpYWwgQ29udGVudCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBpcyBzdWNjZXNzZnVsbHkgZnVsZmlsbGluZyBhIHJhbmdlIHJlcXVlc3QgZm9yIHRoZSB0YXJnZXQgcmVzb3VyY2UgYnkgdHJhbnNmZXJyaW5nIG9uZSBvciBtb3JlIHBhcnRzIG9mIHRoZSBzZWxlY3RlZCByZXByZXNlbnRhdGlvbiB0aGF0IGNvcnJlc3BvbmQgdG8gdGhlIHNhdGlzZmlhYmxlIHJhbmdlcyBmb3VuZCBpbiB0aGUgcmVxdWVzdHNcXCdzIFJhbmdlIGhlYWRlciBmaWVsZC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMyM0LjEnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzMjc2VjdGlvbi00LjEnXG4gICAgfSxcbiAgICAnMzAwJzoge1xuICAgICAgICAnY29kZSc6IDMwMCxcbiAgICAgICAgJ3RleHQnOiAnTXVsdGlwbGUgQ2hvaWNlcycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHRhcmdldCByZXNvdXJjZSBoYXMgbW9yZSB0aGFuIG9uZSByZXByZXNlbnRhdGlvbiwgZWFjaCB3aXRoIGl0cyBvd24gbW9yZSBzcGVjaWZpYyBpZGVudGlmaWVyLCBhbmQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGFsdGVybmF0aXZlcyBpcyBiZWluZyBwcm92aWRlZCBzbyB0aGF0IHRoZSB1c2VyIChvciB1c2VyIGFnZW50KSBjYW4gc2VsZWN0IGEgcHJlZmVycmVkIHJlcHJlc2VudGF0aW9uIGJ5IHJlZGlyZWN0aW5nIGl0cyByZXF1ZXN0IHRvIG9uZSBvciBtb3JlIG9mIHRob3NlIGlkZW50aWZpZXJzLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNC4xJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi40LjEnXG4gICAgfSxcbiAgICAnMzAxJzoge1xuICAgICAgICAnY29kZSc6IDMwMSxcbiAgICAgICAgJ3RleHQnOiAnTW92ZWQgUGVybWFuZW50bHknLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSB0YXJnZXQgcmVzb3VyY2UgaGFzIGJlZW4gYXNzaWduZWQgYSBuZXcgcGVybWFuZW50IFVSSSBhbmQgYW55IGZ1dHVyZSByZWZlcmVuY2VzIHRvIHRoaXMgcmVzb3VyY2Ugb3VnaHQgdG8gdXNlIG9uZSBvZiB0aGUgZW5jbG9zZWQgVVJJcy5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjQuMicsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNC4yJ1xuICAgIH0sXG4gICAgJzMwMic6IHtcbiAgICAgICAgJ2NvZGUnOiAzMDIsXG4gICAgICAgICd0ZXh0JzogJ0ZvdW5kJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgdGFyZ2V0IHJlc291cmNlIHJlc2lkZXMgdGVtcG9yYXJpbHkgdW5kZXIgYSBkaWZmZXJlbnQgVVJJLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNC4zJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi40LjMnXG4gICAgfSxcbiAgICAnMzAzJzoge1xuICAgICAgICAnY29kZSc6IDMwMyxcbiAgICAgICAgJ3RleHQnOiAnU2VlIE90aGVyJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGlzIHJlZGlyZWN0aW5nIHRoZSB1c2VyIGFnZW50IHRvIGEgZGlmZmVyZW50IHJlc291cmNlLCBhcyBpbmRpY2F0ZWQgYnkgYSBVUkkgaW4gdGhlIExvY2F0aW9uIGhlYWRlciBmaWVsZCwgdGhhdCBpcyBpbnRlbmRlZCB0byBwcm92aWRlIGFuIGluZGlyZWN0IHJlc3BvbnNlIHRvIHRoZSBvcmlnaW5hbCByZXF1ZXN0LlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNC40JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi40LjQnXG4gICAgfSxcbiAgICAnMzA0Jzoge1xuICAgICAgICAnY29kZSc6IDMwNCxcbiAgICAgICAgJ3RleHQnOiAnTm90IE1vZGlmaWVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJBIGNvbmRpdGlvbmFsIEdFVCByZXF1ZXN0IGhhcyBiZWVuIHJlY2VpdmVkIGFuZCB3b3VsZCBoYXZlIHJlc3VsdGVkIGluIGEgMjAwIChPSykgcmVzcG9uc2UgaWYgaXQgd2VyZSBub3QgZm9yIHRoZSBmYWN0IHRoYXQgdGhlIGNvbmRpdGlvbiBoYXMgZXZhbHVhdGVkIHRvIGZhbHNlLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMyIzQuMScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMiNzZWN0aW9uLTQuMSdcbiAgICB9LFxuICAgICczMDUnOiB7XG4gICAgICAgICdjb2RlJzogMzA1LFxuICAgICAgICAndGV4dCc6ICdVc2UgUHJveHknLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnKmRlcHJlY2F0ZWQqJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjQuNScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNC41J1xuICAgIH0sXG4gICAgJzMwNyc6IHtcbiAgICAgICAgJ2NvZGUnOiAzMDcsXG4gICAgICAgICd0ZXh0JzogJ1RlbXBvcmFyeSBSZWRpcmVjdCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHRhcmdldCByZXNvdXJjZSByZXNpZGVzIHRlbXBvcmFyaWx5IHVuZGVyIGEgZGlmZmVyZW50IFVSSSBhbmQgdGhlIHVzZXIgYWdlbnQgTVVTVCBOT1QgY2hhbmdlIHRoZSByZXF1ZXN0IG1ldGhvZCBpZiBpdCBwZXJmb3JtcyBhbiBhdXRvbWF0aWMgcmVkaXJlY3Rpb24gdG8gdGhhdCBVUkkuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi40LjcnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjQuNydcbiAgICB9LFxuICAgICc0MDAnOiB7XG4gICAgICAgICdjb2RlJzogNDAwLFxuICAgICAgICAndGV4dCc6ICdCYWQgUmVxdWVzdCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBjYW5ub3Qgb3Igd2lsbCBub3QgcHJvY2VzcyB0aGUgcmVxdWVzdCBiZWNhdXNlIHRoZSByZWNlaXZlZCBzeW50YXggaXMgaW52YWxpZCwgbm9uc2Vuc2ljYWwsIG9yIGV4Y2VlZHMgc29tZSBsaW1pdGF0aW9uIG9uIHdoYXQgdGhlIHNlcnZlciBpcyB3aWxsaW5nIHRvIHByb2Nlc3MuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjEnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMSdcbiAgICB9LFxuICAgICc0MDEnOiB7XG4gICAgICAgICdjb2RlJzogNDAxLFxuICAgICAgICAndGV4dCc6ICdVbmF1dGhvcml6ZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSByZXF1ZXN0IGhhcyBub3QgYmVlbiBhcHBsaWVkIGJlY2F1c2UgaXQgbGFja3MgdmFsaWQgYXV0aGVudGljYXRpb24gY3JlZGVudGlhbHMgZm9yIHRoZSB0YXJnZXQgcmVzb3VyY2UuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzUjNi4zLjEnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzUjc2VjdGlvbi0zLjEnXG4gICAgfSxcbiAgICAnNDAyJzoge1xuICAgICAgICAnY29kZSc6IDQwMixcbiAgICAgICAgJ3RleHQnOiAnUGF5bWVudCBSZXF1aXJlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICcqcmVzZXJ2ZWQqJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMicsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4yJ1xuICAgIH0sXG4gICAgJzQwMyc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MDMsXG4gICAgICAgICd0ZXh0JzogJ0ZvcmJpZGRlbicsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciB1bmRlcnN0b29kIHRoZSByZXF1ZXN0IGJ1dCByZWZ1c2VzIHRvIGF1dGhvcml6ZSBpdC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMycsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4zJ1xuICAgIH0sXG4gICAgJzQwNCc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MDQsXG4gICAgICAgICd0ZXh0JzogJ05vdCBGb3VuZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIG9yaWdpbiBzZXJ2ZXIgZGlkIG5vdCBmaW5kIGEgY3VycmVudCByZXByZXNlbnRhdGlvbiBmb3IgdGhlIHRhcmdldCByZXNvdXJjZSBvciBpcyBub3Qgd2lsbGluZyB0byBkaXNjbG9zZSB0aGF0IG9uZSBleGlzdHMuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjQnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuNCdcbiAgICB9LFxuICAgICc0MDUnOiB7XG4gICAgICAgICdjb2RlJzogNDA1LFxuICAgICAgICAndGV4dCc6ICdNZXRob2QgTm90IEFsbG93ZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBtZXRob2Qgc3BlY2lmaWVkIGluIHRoZSByZXF1ZXN0LWxpbmUgaXMga25vd24gYnkgdGhlIG9yaWdpbiBzZXJ2ZXIgYnV0IG5vdCBzdXBwb3J0ZWQgYnkgdGhlIHRhcmdldCByZXNvdXJjZS5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuNScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS41J1xuICAgIH0sXG4gICAgJzQwNic6IHtcbiAgICAgICAgJ2NvZGUnOiA0MDYsXG4gICAgICAgICd0ZXh0JzogJ05vdCBBY2NlcHRhYmxlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgdGFyZ2V0IHJlc291cmNlIGRvZXMgbm90IGhhdmUgYSBjdXJyZW50IHJlcHJlc2VudGF0aW9uIHRoYXQgd291bGQgYmUgYWNjZXB0YWJsZSB0byB0aGUgdXNlciBhZ2VudCwgYWNjb3JkaW5nIHRvIHRoZSBwcm9hY3RpdmUgbmVnb3RpYXRpb24gaGVhZGVyIGZpZWxkcyByZWNlaXZlZCBpbiB0aGUgcmVxdWVzdCwgYW5kIHRoZSBzZXJ2ZXIgaXMgdW53aWxsaW5nIHRvIHN1cHBseSBhIGRlZmF1bHQgcmVwcmVzZW50YXRpb24uXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjYnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuNidcbiAgICB9LFxuICAgICc0MDcnOiB7XG4gICAgICAgICdjb2RlJzogNDA3LFxuICAgICAgICAndGV4dCc6ICdQcm94eSBBdXRoZW50aWNhdGlvbiBSZXF1aXJlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIGNsaWVudCBuZWVkcyB0byBhdXRoZW50aWNhdGUgaXRzZWxmIGluIG9yZGVyIHRvIHVzZSBhIHByb3h5LlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuMy4yJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjInXG4gICAgfSxcbiAgICAnNDA4Jzoge1xuICAgICAgICAnY29kZSc6IDQwOCxcbiAgICAgICAgJ3RleHQnOiAnUmVxdWVzdCBUaW1lb3V0JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGRpZCBub3QgcmVjZWl2ZSBhIGNvbXBsZXRlIHJlcXVlc3QgbWVzc2FnZSB3aXRoaW4gdGhlIHRpbWUgdGhhdCBpdCB3YXMgcHJlcGFyZWQgdG8gd2FpdC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuNycsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS43J1xuICAgIH0sXG4gICAgJzQwOSc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MDksXG4gICAgICAgICd0ZXh0JzogJ0NvbmZsaWN0JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgcmVxdWVzdCBjb3VsZCBub3QgYmUgY29tcGxldGVkIGR1ZSB0byBhIGNvbmZsaWN0IHdpdGggdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHJlc291cmNlLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS44JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjgnXG4gICAgfSxcbiAgICAnNDEwJzoge1xuICAgICAgICAnY29kZSc6IDQxMCxcbiAgICAgICAgJ3RleHQnOiAnR29uZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiQWNjZXNzIHRvIHRoZSB0YXJnZXQgcmVzb3VyY2UgaXMgbm8gbG9uZ2VyIGF2YWlsYWJsZSBhdCB0aGUgb3JpZ2luIHNlcnZlciBhbmQgdGhhdCB0aGlzIGNvbmRpdGlvbiBpcyBsaWtlbHkgdG8gYmUgcGVybWFuZW50LlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS45JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjknXG4gICAgfSxcbiAgICAnNDExJzoge1xuICAgICAgICAnY29kZSc6IDQxMSxcbiAgICAgICAgJ3RleHQnOiAnTGVuZ3RoIFJlcXVpcmVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIHJlZnVzZXMgdG8gYWNjZXB0IHRoZSByZXF1ZXN0IHdpdGhvdXQgYSBkZWZpbmVkIENvbnRlbnQtTGVuZ3RoLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS4xMCcsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4xMCdcbiAgICB9LFxuICAgICc0MTInOiB7XG4gICAgICAgICdjb2RlJzogNDEyLFxuICAgICAgICAndGV4dCc6ICdQcmVjb25kaXRpb24gRmFpbGVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJPbmUgb3IgbW9yZSBwcmVjb25kaXRpb25zIGdpdmVuIGluIHRoZSByZXF1ZXN0IGhlYWRlciBmaWVsZHMgZXZhbHVhdGVkIHRvIGZhbHNlIHdoZW4gdGVzdGVkIG9uIHRoZSBzZXJ2ZXIuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzIjNC4yJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMyI3NlY3Rpb24tNC4yJ1xuICAgIH0sXG4gICAgJzQxMyc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MTMsXG4gICAgICAgICd0ZXh0JzogJ1BheWxvYWQgVG9vIExhcmdlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGlzIHJlZnVzaW5nIHRvIHByb2Nlc3MgYSByZXF1ZXN0IGJlY2F1c2UgdGhlIHJlcXVlc3QgcGF5bG9hZCBpcyBsYXJnZXIgdGhhbiB0aGUgc2VydmVyIGlzIHdpbGxpbmcgb3IgYWJsZSB0byBwcm9jZXNzLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS4xMScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4xMSdcbiAgICB9LFxuICAgICc0MTQnOiB7XG4gICAgICAgICdjb2RlJzogNDE0LFxuICAgICAgICAndGV4dCc6ICdVUkkgVG9vIExvbmcnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgaXMgcmVmdXNpbmcgdG8gc2VydmljZSB0aGUgcmVxdWVzdCBiZWNhdXNlIHRoZSByZXF1ZXN0LXRhcmdldCBpcyBsb25nZXIgdGhhbiB0aGUgc2VydmVyIGlzIHdpbGxpbmcgdG8gaW50ZXJwcmV0LlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS4xMicsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4xMidcbiAgICB9LFxuICAgICc0MTUnOiB7XG4gICAgICAgICdjb2RlJzogNDE1LFxuICAgICAgICAndGV4dCc6ICdVbnN1cHBvcnRlZCBNZWRpYSBUeXBlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgb3JpZ2luIHNlcnZlciBpcyByZWZ1c2luZyB0byBzZXJ2aWNlIHRoZSByZXF1ZXN0IGJlY2F1c2UgdGhlIHBheWxvYWQgaXMgaW4gYSBmb3JtYXQgbm90IHN1cHBvcnRlZCBieSB0aGUgdGFyZ2V0IHJlc291cmNlIGZvciB0aGlzIG1ldGhvZC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMTMnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMTMnXG4gICAgfSxcbiAgICAnNDE2Jzoge1xuICAgICAgICAnY29kZSc6IDQxNixcbiAgICAgICAgJ3RleHQnOiAnUmFuZ2UgTm90IFNhdGlzZmlhYmxlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJOb25lIG9mIHRoZSByYW5nZXMgaW4gdGhlIHJlcXVlc3RcXCdzIFJhbmdlIGhlYWRlciBmaWVsZCBvdmVybGFwIHRoZSBjdXJyZW50IGV4dGVudCBvZiB0aGUgc2VsZWN0ZWQgcmVzb3VyY2Ugb3IgdGhhdCB0aGUgc2V0IG9mIHJhbmdlcyByZXF1ZXN0ZWQgaGFzIGJlZW4gcmVqZWN0ZWQgZHVlIHRvIGludmFsaWQgcmFuZ2VzIG9yIGFuIGV4Y2Vzc2l2ZSByZXF1ZXN0IG9mIHNtYWxsIG9yIG92ZXJsYXBwaW5nIHJhbmdlcy5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMyM0LjQnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzMjc2VjdGlvbi00LjQnXG4gICAgfSxcbiAgICAnNDE3Jzoge1xuICAgICAgICAnY29kZSc6IDQxNyxcbiAgICAgICAgJ3RleHQnOiAnRXhwZWN0YXRpb24gRmFpbGVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgZXhwZWN0YXRpb24gZ2l2ZW4gaW4gdGhlIHJlcXVlc3RcXCdzIEV4cGVjdCBoZWFkZXIgZmllbGQgY291bGQgbm90IGJlIG1ldCBieSBhdCBsZWFzdCBvbmUgb2YgdGhlIGluYm91bmQgc2VydmVycy5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMTQnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMTQnXG4gICAgfSxcbiAgICAnNDE4Jzoge1xuICAgICAgICAnY29kZSc6IDQxOCxcbiAgICAgICAgJ3RleHQnOiAnSVxcJ20gYSB0ZWFwb3QnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIjE5ODggQXByaWwgRm9vbHMgSm9rZS4gUmV0dXJuZWQgYnkgdGVhIHBvdHMgcmVxdWVzdGVkIHRvIGJyZXcgY29mZmVlLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkMgMjMyNCcsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzIzMjQnXG4gICAgfSxcbiAgICAnNDI2Jzoge1xuICAgICAgICAnY29kZSc6IDQyNixcbiAgICAgICAgJ3RleHQnOiAnVXBncmFkZSBSZXF1aXJlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciByZWZ1c2VzIHRvIHBlcmZvcm0gdGhlIHJlcXVlc3QgdXNpbmcgdGhlIGN1cnJlbnQgcHJvdG9jb2wgYnV0IG1pZ2h0IGJlIHdpbGxpbmcgdG8gZG8gc28gYWZ0ZXIgdGhlIGNsaWVudCB1cGdyYWRlcyB0byBhIGRpZmZlcmVudCBwcm90b2NvbC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMTUnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMTUnXG4gICAgfSxcbiAgICAnNTAwJzoge1xuICAgICAgICAnY29kZSc6IDUwMCxcbiAgICAgICAgJ3RleHQnOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGVuY291bnRlcmVkIGFuIHVuZXhwZWN0ZWQgY29uZGl0aW9uIHRoYXQgcHJldmVudGVkIGl0IGZyb20gZnVsZmlsbGluZyB0aGUgcmVxdWVzdC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjYuMScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNi4xJ1xuICAgIH0sXG4gICAgJzUwMSc6IHtcbiAgICAgICAgJ2NvZGUnOiA1MDEsXG4gICAgICAgICd0ZXh0JzogJ05vdCBJbXBsZW1lbnRlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSBmdW5jdGlvbmFsaXR5IHJlcXVpcmVkIHRvIGZ1bGZpbGwgdGhlIHJlcXVlc3QuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi42LjInLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjYuMidcbiAgICB9LFxuICAgICc1MDInOiB7XG4gICAgICAgICdjb2RlJzogNTAyLFxuICAgICAgICAndGV4dCc6ICdCYWQgR2F0ZXdheScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciwgd2hpbGUgYWN0aW5nIGFzIGEgZ2F0ZXdheSBvciBwcm94eSwgcmVjZWl2ZWQgYW4gaW52YWxpZCByZXNwb25zZSBmcm9tIGFuIGluYm91bmQgc2VydmVyIGl0IGFjY2Vzc2VkIHdoaWxlIGF0dGVtcHRpbmcgdG8gZnVsZmlsbCB0aGUgcmVxdWVzdC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjYuMycsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNi4zJ1xuICAgIH0sXG4gICAgJzUwMyc6IHtcbiAgICAgICAgJ2NvZGUnOiA1MDMsXG4gICAgICAgICd0ZXh0JzogJ1NlcnZpY2UgVW5hdmFpbGFibGUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgaXMgY3VycmVudGx5IHVuYWJsZSB0byBoYW5kbGUgdGhlIHJlcXVlc3QgZHVlIHRvIGEgdGVtcG9yYXJ5IG92ZXJsb2FkIG9yIHNjaGVkdWxlZCBtYWludGVuYW5jZSwgd2hpY2ggd2lsbCBsaWtlbHkgYmUgYWxsZXZpYXRlZCBhZnRlciBzb21lIGRlbGF5LlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNi40JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi42LjQnXG4gICAgfSxcbiAgICAnNTA0Jzoge1xuICAgICAgICAnY29kZSc6IDUwNCxcbiAgICAgICAgJ3RleHQnOiAnR2F0ZXdheSBUaW1lLW91dCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciwgd2hpbGUgYWN0aW5nIGFzIGEgZ2F0ZXdheSBvciBwcm94eSwgZGlkIG5vdCByZWNlaXZlIGEgdGltZWx5IHJlc3BvbnNlIGZyb20gYW4gdXBzdHJlYW0gc2VydmVyIGl0IG5lZWRlZCB0byBhY2Nlc3MgaW4gb3JkZXIgdG8gY29tcGxldGUgdGhlIHJlcXVlc3QuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi42LjUnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjYuNSdcbiAgICB9LFxuICAgICc1MDUnOiB7XG4gICAgICAgICdjb2RlJzogNTA1LFxuICAgICAgICAndGV4dCc6ICdIVFRQIFZlcnNpb24gTm90IFN1cHBvcnRlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBkb2VzIG5vdCBzdXBwb3J0LCBvciByZWZ1c2VzIHRvIHN1cHBvcnQsIHRoZSBwcm90b2NvbCB2ZXJzaW9uIHRoYXQgd2FzIHVzZWQgaW4gdGhlIHJlcXVlc3QgbWVzc2FnZS5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjYuNicsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNi42J1xuICAgIH0sXG4gICAgJzEwMic6IHtcbiAgICAgICAgJ2NvZGUnOiAxMDIsXG4gICAgICAgICd0ZXh0JzogJ1Byb2Nlc3NpbmcnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIkFuIGludGVyaW0gcmVzcG9uc2UgdG8gaW5mb3JtIHRoZSBjbGllbnQgdGhhdCB0aGUgc2VydmVyIGhhcyBhY2NlcHRlZCB0aGUgY29tcGxldGUgcmVxdWVzdCwgYnV0IGhhcyBub3QgeWV0IGNvbXBsZXRlZCBpdC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNTIxOCMxMC4xJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNTE4I3NlY3Rpb24tMTAuMSdcbiAgICB9LFxuICAgICcyMDcnOiB7XG4gICAgICAgICdjb2RlJzogMjA3LFxuICAgICAgICAndGV4dCc6ICdNdWx0aS1TdGF0dXMnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlN0YXR1cyBmb3IgbXVsdGlwbGUgaW5kZXBlbmRlbnQgb3BlcmF0aW9ucy5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNTIxOCMxMC4yJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNTE4I3NlY3Rpb24tMTAuMidcbiAgICB9LFxuICAgICcyMjYnOiB7XG4gICAgICAgICdjb2RlJzogMjI2LFxuICAgICAgICAndGV4dCc6ICdJTSBVc2VkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGhhcyBmdWxmaWxsZWQgYSBHRVQgcmVxdWVzdCBmb3IgdGhlIHJlc291cmNlLCBhbmQgdGhlIHJlc3BvbnNlIGlzIGEgcmVwcmVzZW50YXRpb24gb2YgdGhlIHJlc3VsdCBvZiBvbmUgb3IgbW9yZSBpbnN0YW5jZS1tYW5pcHVsYXRpb25zIGFwcGxpZWQgdG8gdGhlIGN1cnJlbnQgaW5zdGFuY2UuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzMyMjkjMTAuNC4xJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzMjI5I3NlY3Rpb24tMTAuNC4xJ1xuICAgIH0sXG4gICAgJzMwOCc6IHtcbiAgICAgICAgJ2NvZGUnOiAzMDgsXG4gICAgICAgICd0ZXh0JzogJ1Blcm1hbmVudCBSZWRpcmVjdCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHRhcmdldCByZXNvdXJjZSBoYXMgYmVlbiBhc3NpZ25lZCBhIG5ldyBwZXJtYW5lbnQgVVJJIGFuZCBhbnkgZnV0dXJlIHJlZmVyZW5jZXMgdG8gdGhpcyByZXNvdXJjZSBTSE9VTEQgdXNlIG9uZSBvZiB0aGUgcmV0dXJuZWQgVVJJcy4gWy4uLl0gVGhpcyBzdGF0dXMgY29kZSBpcyBzaW1pbGFyIHRvIDMwMSBNb3ZlZCBQZXJtYW5lbnRseSAoU2VjdGlvbiA3LjMuMiBvZiByZmM3MjMxKSwgZXhjZXB0IHRoYXQgaXQgZG9lcyBub3QgYWxsb3cgcmV3cml0aW5nIHRoZSByZXF1ZXN0IG1ldGhvZCBmcm9tIFBPU1QgdG8gR0VULlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjM4JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjM4J1xuICAgIH0sXG4gICAgJzQyMic6IHtcbiAgICAgICAgJ2NvZGUnOiA0MjIsXG4gICAgICAgICd0ZXh0JzogJ1VucHJvY2Vzc2FibGUgRW50aXR5JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIHVuZGVyc3RhbmRzIHRoZSBjb250ZW50IHR5cGUgb2YgdGhlIHJlcXVlc3QgZW50aXR5IChoZW5jZSBhIDQxNShVbnN1cHBvcnRlZCBNZWRpYSBUeXBlKSBzdGF0dXMgY29kZSBpcyBpbmFwcHJvcHJpYXRlKSwgYW5kIHRoZSBzeW50YXggb2YgdGhlIHJlcXVlc3QgZW50aXR5IGlzIGNvcnJlY3QgKHRodXMgYSA0MDAgKEJhZCBSZXF1ZXN0KSBzdGF0dXMgY29kZSBpcyBpbmFwcHJvcHJpYXRlKSBidXQgd2FzIHVuYWJsZSB0byBwcm9jZXNzIHRoZSBjb250YWluZWQgaW5zdHJ1Y3Rpb25zLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM1MjE4IzEwLjMnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzI1MTgjc2VjdGlvbi0xMC4zJ1xuICAgIH0sXG4gICAgJzQyMyc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MjMsXG4gICAgICAgICd0ZXh0JzogJ0xvY2tlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNvdXJjZSBvciBkZXN0aW5hdGlvbiByZXNvdXJjZSBvZiBhIG1ldGhvZCBpcyBsb2NrZWQuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzUyMTgjMTAuNCcsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjUxOCNzZWN0aW9uLTEwLjQnXG4gICAgfSxcbiAgICAnNDI0Jzoge1xuICAgICAgICAnY29kZSc6IDQyNCxcbiAgICAgICAgJ3RleHQnOiAnRmFpbGVkIERlcGVuZGVuY3knLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBtZXRob2QgY291bGQgbm90IGJlIHBlcmZvcm1lZCBvbiB0aGUgcmVzb3VyY2UgYmVjYXVzZSB0aGUgcmVxdWVzdGVkIGFjdGlvbiBkZXBlbmRlZCBvbiBhbm90aGVyIGFjdGlvbiBhbmQgdGhhdCBhY3Rpb24gZmFpbGVkLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM1MjE4IzEwLjUnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzI1MTgjc2VjdGlvbi0xMC41J1xuICAgIH0sXG4gICAgJzQyOCc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MjgsXG4gICAgICAgICd0ZXh0JzogJ1ByZWNvbmRpdGlvbiBSZXF1aXJlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIG9yaWdpbiBzZXJ2ZXIgcmVxdWlyZXMgdGhlIHJlcXVlc3QgdG8gYmUgY29uZGl0aW9uYWwuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzY1ODUjMycsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjU4NSNzZWN0aW9uLTMnXG4gICAgfSxcbiAgICAnNDI5Jzoge1xuICAgICAgICAnY29kZSc6IDQyOSxcbiAgICAgICAgJ3RleHQnOiAnVG9vIE1hbnkgUmVxdWVzdHMnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSB1c2VyIGhhcyBzZW50IHRvbyBtYW55IHJlcXVlc3RzIGluIGEgZ2l2ZW4gYW1vdW50IG9mIHRpbWUgKFxcXCJyYXRlIGxpbWl0aW5nXFxcIikuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzY1ODUjNCcsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjU4NSNzZWN0aW9uLTQnXG4gICAgfSxcbiAgICAnNDMxJzoge1xuICAgICAgICAnY29kZSc6IDQzMSxcbiAgICAgICAgJ3RleHQnOiAnUmVxdWVzdCBIZWFkZXIgRmllbGRzIFRvbyBMYXJnZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBpcyB1bndpbGxpbmcgdG8gcHJvY2VzcyB0aGUgcmVxdWVzdCBiZWNhdXNlIGl0cyBoZWFkZXIgZmllbGRzIGFyZSB0b28gbGFyZ2UuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzY1ODUjNScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjU4NSNzZWN0aW9uLTUnXG4gICAgfSxcbiAgICAnNDUxJzoge1xuICAgICAgICAnY29kZSc6IDQ1MSxcbiAgICAgICAgJ3RleHQnOiAnVW5hdmFpbGFibGUgRm9yIExlZ2FsIFJlYXNvbnMnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgaXMgZGVueWluZyBhY2Nlc3MgdG8gdGhlIHJlc291cmNlIGluIHJlc3BvbnNlIHRvIGEgbGVnYWwgZGVtYW5kLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdkcmFmdC1pZXRmLWh0dHBiaXMtbGVnYWxseS1yZXN0cmljdGVkLXN0YXR1cycsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvZHJhZnQtaWV0Zi1odHRwYmlzLWxlZ2FsbHktcmVzdHJpY3RlZC1zdGF0dXMnXG4gICAgfSxcbiAgICAnNTA2Jzoge1xuICAgICAgICAnY29kZSc6IDUwNixcbiAgICAgICAgJ3RleHQnOiAnVmFyaWFudCBBbHNvIE5lZ290aWF0ZXMnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgaGFzIGFuIGludGVybmFsIGNvbmZpZ3VyYXRpb24gZXJyb3I6IHRoZSBjaG9zZW4gdmFyaWFudCByZXNvdXJjZSBpcyBjb25maWd1cmVkIHRvIGVuZ2FnZSBpbiB0cmFuc3BhcmVudCBjb250ZW50IG5lZ290aWF0aW9uIGl0c2VsZiwgYW5kIGlzIHRoZXJlZm9yZSBub3QgYSBwcm9wZXIgZW5kIHBvaW50IGluIHRoZSBuZWdvdGlhdGlvbiBwcm9jZXNzLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkMyMjk1IzguMScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjI5NSNzZWN0aW9uLTguMSdcbiAgICB9LFxuICAgICc1MDcnOiB7XG4gICAgICAgICdjb2RlJzogNTA3LFxuICAgICAgICAndGV4dCc6ICdJbnN1ZmZpY2llbnQgU3RvcmFnZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFRoZSBtZXRob2QgY291bGQgbm90IGJlIHBlcmZvcm1lZCBvbiB0aGUgcmVzb3VyY2UgYmVjYXVzZSB0aGUgc2VydmVyIGlzIHVuYWJsZSB0byBzdG9yZSB0aGUgcmVwcmVzZW50YXRpb24gbmVlZGVkIHRvIHN1Y2Nlc3NmdWxseSBjb21wbGV0ZSB0aGUgcmVxdWVzdC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNTIxOCMxMC42JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNTE4I3NlY3Rpb24tMTAuNidcbiAgICB9LFxuICAgICc1MTEnOiB7XG4gICAgICAgICdjb2RlJzogNTExLFxuICAgICAgICAndGV4dCc6ICdOZXR3b3JrIEF1dGhlbnRpY2F0aW9uIFJlcXVpcmVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgY2xpZW50IG5lZWRzIHRvIGF1dGhlbnRpY2F0ZSB0byBnYWluIG5ldHdvcmsgYWNjZXNzLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM2NTg1IzYnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzY1ODUjc2VjdGlvbi02J1xuICAgIH1cbn07XG4vKipcbiAqIGdldCB0aGUgc3RhdHVzIHRleHQgZnJvbSBTdGF0dXNDb2RlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0dXNUZXh0KHN0YXR1cykge1xuICAgIHJldHVybiBTVEFUVVNfQ09ERV9JTkZPW3N0YXR1c10udGV4dCB8fCAnVW5rbm93biBTdGF0dXMnO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHRoZSBIdHRwIFN0YXR1cyBDb2RlIGlzIDIwMC0yOTkgKHN1Y2Nlc3MpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1N1Y2Nlc3Moc3RhdHVzKSB7IHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDsgfVxuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHR0cC1zdGF0dXMtY29kZXMuanMubWFwIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLyoqXG4qIEludGVyZmFjZSBmb3IgYSBjbGFzcyB0aGF0IGNyZWF0ZXMgYW4gaW4tbWVtb3J5IGRhdGFiYXNlXG4qXG4qIEl0cyBgY3JlYXRlRGJgIG1ldGhvZCBjcmVhdGVzIGEgaGFzaCBvZiBuYW1lZCBjb2xsZWN0aW9ucyB0aGF0IHJlcHJlc2VudHMgdGhlIGRhdGFiYXNlXG4qXG4qIEZvciBtYXhpbXVtIGZsZXhpYmlsaXR5LCB0aGUgc2VydmljZSBtYXkgZGVmaW5lIEhUVFAgbWV0aG9kIG92ZXJyaWRlcy5cbiogU3VjaCBtZXRob2RzIG11c3QgbWF0Y2ggdGhlIHNwZWxsaW5nIG9mIGFuIEhUVFAgbWV0aG9kIGluIGxvd2VyIGNhc2UgKGUuZywgXCJnZXRcIikuXG4qIElmIGEgcmVxdWVzdCBoYXMgYSBtYXRjaGluZyBtZXRob2QsIGl0IHdpbGwgYmUgY2FsbGVkIGFzIGluXG4qIGBnZXQoaW5mbzogcmVxdWVzdEluZm8sIGRiOiB7fSlgIHdoZXJlIGBkYmAgaXMgdGhlIGRhdGFiYXNlIG9iamVjdCBkZXNjcmliZWQgYWJvdmUuXG4qL1xudmFyIEluTWVtb3J5RGJTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBJbk1lbW9yeURiU2VydmljZSgpIHtcbiAgICB9XG4gICAgcmV0dXJuIEluTWVtb3J5RGJTZXJ2aWNlO1xufSgpKTtcbmV4cG9ydCB7IEluTWVtb3J5RGJTZXJ2aWNlIH07XG4vKipcbiogSW50ZXJmYWNlIGZvciBJbk1lbW9yeUJhY2tlbmQgY29uZmlndXJhdGlvbiBvcHRpb25zXG4qL1xudmFyIEluTWVtb3J5QmFja2VuZENvbmZpZ0FyZ3MgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEluTWVtb3J5QmFja2VuZENvbmZpZ0FyZ3MoKSB7XG4gICAgfVxuICAgIHJldHVybiBJbk1lbW9yeUJhY2tlbmRDb25maWdBcmdzO1xufSgpKTtcbmV4cG9ydCB7IEluTWVtb3J5QmFja2VuZENvbmZpZ0FyZ3MgfTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLyoqXG4qICBJbk1lbW9yeUJhY2tlbmRTZXJ2aWNlIGNvbmZpZ3VyYXRpb24gb3B0aW9uc1xuKiAgVXNhZ2U6XG4qICAgIEluTWVtb3J5V2ViQXBpTW9kdWxlLmZvclJvb3QoSW5NZW1IZXJvU2VydmljZSwge2RlbGF5OiA2MDB9KVxuKlxuKiAgb3IgaWYgcHJvdmlkaW5nIHNlcGFyYXRlbHk6XG4qICAgIHByb3ZpZGUoSW5NZW1vcnlCYWNrZW5kQ29uZmlnLCB7dXNlVmFsdWU6IHtkZWxheTogNjAwfX0pLFxuKi9cbnZhciBJbk1lbW9yeUJhY2tlbmRDb25maWcgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEluTWVtb3J5QmFja2VuZENvbmZpZyhjb25maWcpIHtcbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gdm9pZCAwKSB7IGNvbmZpZyA9IHt9OyB9XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xuICAgICAgICAgICAgLy8gZGVmYXVsdCBjb25maWc6XG4gICAgICAgICAgICBjYXNlU2Vuc2l0aXZlU2VhcmNoOiBmYWxzZSxcbiAgICAgICAgICAgIGRhdGFFbmNhcHN1bGF0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgIGRlbGF5OiA1MDAsXG4gICAgICAgICAgICBkZWxldGU0MDQ6IGZhbHNlLFxuICAgICAgICAgICAgcGFzc1RocnVVbmtub3duVXJsOiBmYWxzZSxcbiAgICAgICAgICAgIHBvc3QyMDQ6IHRydWUsXG4gICAgICAgICAgICBwb3N0NDA5OiBmYWxzZSxcbiAgICAgICAgICAgIHB1dDIwNDogdHJ1ZSxcbiAgICAgICAgICAgIHB1dDQwNDogZmFsc2UsXG4gICAgICAgICAgICBhcGlCYXNlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBob3N0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICByb290UGF0aDogdW5kZWZpbmVkIC8vIGRlZmF1bHQgdmFsdWUgaXMgYWN0dWFsbHkgc2V0IGluIEluTWVtb3J5QmFja2VuZFNlcnZpY2UgY3RvclxuICAgICAgICB9LCBjb25maWcpO1xuICAgIH1cbiAgICByZXR1cm4gSW5NZW1vcnlCYWNrZW5kQ29uZmlnO1xufSgpKTtcbmV4cG9ydCB7IEluTWVtb3J5QmFja2VuZENvbmZpZyB9O1xuSW5NZW1vcnlCYWNrZW5kQ29uZmlnLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBJbmplY3RhYmxlIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5Jbk1lbW9yeUJhY2tlbmRDb25maWcuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgeyB0eXBlOiBJbk1lbW9yeUJhY2tlbmRDb25maWdBcmdzLCB9LFxuXTsgfTtcbi8qKiBSZXR1cm4gaW5mb3JtYXRpb24gKFVyaUluZm8pIGFib3V0IGEgVVJJICAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVXJpKHN0cikge1xuICAgIC8vIEFkYXB0ZWQgZnJvbSBwYXJzZXVyaSBwYWNrYWdlIC0gaHR0cDovL2Jsb2cuc3RldmVubGV2aXRoYW4uY29tL2FyY2hpdmVzL3BhcnNldXJpXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgIHZhciBVUkxfUkVHRVggPSAvXig/Oig/IVteOkBdKzpbXjpAXFwvXSpAKShbXjpcXC8/Iy5dKyk6KT8oPzpcXC9cXC8pPygoPzooKFteOkBdKikoPzo6KFteOkBdKikpPyk/QCk/KFteOlxcLz8jXSopKD86OihcXGQqKSk/KSgoKFxcLyg/OltePyNdKD8hW14/I1xcL10qXFwuW14/I1xcLy5dKyg/Ols/I118JCkpKSpcXC8/KT8oW14/I1xcL10qKSkoPzpcXD8oW14jXSopKT8oPzojKC4qKSk/KS87XG4gICAgdmFyIG0gPSBVUkxfUkVHRVguZXhlYyhzdHIpO1xuICAgIHZhciB1cmkgPSB7XG4gICAgICAgIHNvdXJjZTogJycsXG4gICAgICAgIHByb3RvY29sOiAnJyxcbiAgICAgICAgYXV0aG9yaXR5OiAnJyxcbiAgICAgICAgdXNlckluZm86ICcnLFxuICAgICAgICB1c2VyOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICBob3N0OiAnJyxcbiAgICAgICAgcG9ydDogJycsXG4gICAgICAgIHJlbGF0aXZlOiAnJyxcbiAgICAgICAgcGF0aDogJycsXG4gICAgICAgIGRpcmVjdG9yeTogJycsXG4gICAgICAgIGZpbGU6ICcnLFxuICAgICAgICBxdWVyeTogJycsXG4gICAgICAgIGFuY2hvcjogJydcbiAgICB9O1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModXJpKTtcbiAgICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgdXJpW2tleXNbaV1dID0gbVtpXSB8fCAnJztcbiAgICB9XG4gICAgcmV0dXJuIHVyaTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUcmFpbGluZ1NsYXNoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW50ZXJmYWNlcy5qcy5tYXAiLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMvQmVoYXZpb3JTdWJqZWN0JztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcy9vYnNlcnZhYmxlL29mJztcbmltcG9ydCB7IGZyb21Qcm9taXNlIH0gZnJvbSAncnhqcy9vYnNlcnZhYmxlL2Zyb21Qcm9taXNlJztcbmltcG9ydCB7IGlzUHJvbWlzZSB9IGZyb20gJ3J4anMvdXRpbC9pc1Byb21pc2UnO1xuaW1wb3J0IHsgY29uY2F0TWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvci9jb25jYXRNYXAnO1xuaW1wb3J0IHsgZGVsYXkgfSBmcm9tICdyeGpzL29wZXJhdG9yL2RlbGF5JztcbmltcG9ydCB7IGZpcnN0IH0gZnJvbSAncnhqcy9vcGVyYXRvci9maXJzdCc7XG5pbXBvcnQgeyBnZXRTdGF0dXNUZXh0LCBpc1N1Y2Nlc3MsIFNUQVRVUyB9IGZyb20gJy4vaHR0cC1zdGF0dXMtY29kZXMnO1xuaW1wb3J0IHsgSW5NZW1vcnlCYWNrZW5kQ29uZmlnLCBwYXJzZVVyaSwgcmVtb3ZlVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIGluLW1lbW9yeSB3ZWIgYXBpIGJhY2stZW5kc1xuICogU2ltdWxhdGUgdGhlIGJlaGF2aW9yIG9mIGEgUkVTVHkgd2ViIGFwaVxuICogYmFja2VkIGJ5IHRoZSBzaW1wbGUgaW4tbWVtb3J5IGRhdGEgc3RvcmUgcHJvdmlkZWQgYnkgdGhlIGluamVjdGVkIGBJbk1lbW9yeURiU2VydmljZWAgc2VydmljZS5cbiAqIENvbmZvcm1zIG1vc3RseSB0byBiZWhhdmlvciBkZXNjcmliZWQgaGVyZTpcbiAqIGh0dHA6Ly93d3cucmVzdGFwaXR1dG9yaWFsLmNvbS9sZXNzb25zL2h0dHBtZXRob2RzLmh0bWxcbiAqL1xudmFyIEJhY2tlbmRTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCYWNrZW5kU2VydmljZShpbk1lbURiU2VydmljZSwgY29uZmlnKSB7XG4gICAgICAgIGlmIChjb25maWcgPT09IHZvaWQgMCkgeyBjb25maWcgPSB7fTsgfVxuICAgICAgICB0aGlzLmluTWVtRGJTZXJ2aWNlID0gaW5NZW1EYlNlcnZpY2U7XG4gICAgICAgIHRoaXMuY29uZmlnID0gbmV3IEluTWVtb3J5QmFja2VuZENvbmZpZygpO1xuICAgICAgICB0aGlzLnJlcXVlc3RJbmZvVXRpbHMgPSB0aGlzLmdldFJlcXVlc3RJbmZvVXRpbHMoKTtcbiAgICAgICAgdmFyIGxvYyA9IHRoaXMuZ2V0TG9jYXRpb24oJy8nKTtcbiAgICAgICAgdGhpcy5jb25maWcuaG9zdCA9IGxvYy5ob3N0OyAvLyBkZWZhdWx0IHRvIGFwcCB3ZWIgc2VydmVyIGhvc3RcbiAgICAgICAgdGhpcy5jb25maWcucm9vdFBhdGggPSBsb2MucGF0aDsgLy8gZGVmYXVsdCB0byBwYXRoIHdoZW4gYXBwIGlzIHNlcnZlZCAoZS5nLicvJylcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmNvbmZpZywgY29uZmlnKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZSwgXCJkYlJlYWR5XCIsIHtcbiAgICAgICAgLy8vLyAgcHJvdGVjdGVkIC8vLy8vXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRiUmVhZHlTdWJqZWN0KSB7XG4gICAgICAgICAgICAgICAgLy8gZmlyc3QgdGltZSB0aGUgc2VydmljZSBpcyBjYWxsZWQuXG4gICAgICAgICAgICAgICAgdGhpcy5kYlJlYWR5U3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXREYigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZpcnN0LmNhbGwodGhpcy5kYlJlYWR5U3ViamVjdC5hc09ic2VydmFibGUoKSwgZnVuY3Rpb24gKHIpIHsgcmV0dXJuIHI7IH0pO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBQcm9jZXNzIFJlcXVlc3QgYW5kIHJldHVybiBhbiBPYnNlcnZhYmxlIG9mIEh0dHAgUmVzcG9uc2Ugb2JqZWN0XG4gICAgICogaW4gdGhlIG1hbm5lciBvZiBhIFJFU1R5IHdlYiBhcGkuXG4gICAgICpcbiAgICAgKiBFeHBlY3QgVVJJIHBhdHRlcm4gaW4gdGhlIGZvcm0gOmJhc2UvOmNvbGxlY3Rpb25OYW1lLzppZD9cbiAgICAgKiBFeGFtcGxlczpcbiAgICAgKiAgIC8vIGZvciBzdG9yZSB3aXRoIGEgJ2N1c3RvbWVycycgY29sbGVjdGlvblxuICAgICAqICAgR0VUIGFwaS9jdXN0b21lcnMgICAgICAgICAgLy8gYWxsIGN1c3RvbWVyc1xuICAgICAqICAgR0VUIGFwaS9jdXN0b21lcnMvNDIgICAgICAgLy8gdGhlIGNoYXJhY3RlciB3aXRoIGlkPTQyXG4gICAgICogICBHRVQgYXBpL2N1c3RvbWVycz9uYW1lPV5qICAvLyAnaicgaXMgYSByZWdleDsgcmV0dXJucyBjdXN0b21lcnMgd2hvc2UgbmFtZSBzdGFydHMgd2l0aCAnaicgb3IgJ0onXG4gICAgICogICBHRVQgYXBpL2N1c3RvbWVycy5qc29uLzQyICAvLyBpZ25vcmVzIHRoZSBcIi5qc29uXCJcbiAgICAgKlxuICAgICAqIEFsc28gYWNjZXB0cyBkaXJlY3QgY29tbWFuZHMgdG8gdGhlIHNlcnZpY2UgaW4gd2hpY2ggdGhlIGxhc3Qgc2VnbWVudCBvZiB0aGUgYXBpQmFzZSBpcyB0aGUgd29yZCBcImNvbW1hbmRzXCJcbiAgICAgKiBFeGFtcGxlczpcbiAgICAgKiAgICAgUE9TVCBjb21tYW5kcy9yZXNldERiLFxuICAgICAqICAgICBHRVQvUE9TVCBjb21tYW5kcy9jb25maWcgLSBnZXQgb3IgKHJlKXNldCB0aGUgY29uZmlnXG4gICAgICpcbiAgICAgKiAgIEhUVFAgb3ZlcnJpZGVzOlxuICAgICAqICAgICBJZiB0aGUgaW5qZWN0ZWQgaW5NZW1EYlNlcnZpY2UgZGVmaW5lcyBhbiBIVFRQIG1ldGhvZCAobG93ZXJjYXNlKVxuICAgICAqICAgICBUaGUgcmVxdWVzdCBpcyBmb3J3YXJkZWQgdG8gdGhhdCBtZXRob2QgYXMgaW5cbiAgICAgKiAgICAgYGluTWVtRGJTZXJ2aWNlLmdldChyZXF1ZXN0SW5mbylgXG4gICAgICogICAgIHdoaWNoIG11c3QgcmV0dXJuIGVpdGhlciBhbiBPYnNlcnZhYmxlIG9mIHRoZSByZXNwb25zZSB0eXBlXG4gICAgICogICAgIGZvciB0aGlzIGh0dHAgbGlicmFyeSBvciBudWxsfHVuZGVmaW5lZCAod2hpY2ggbWVhbnMgXCJrZWVwIHByb2Nlc3NpbmdcIikuXG4gICAgICovXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmhhbmRsZVJlcXVlc3QgPSBmdW5jdGlvbiAocmVxKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vICBoYW5kbGUgdGhlIHJlcXVlc3Qgd2hlbiB0aGVyZSBpcyBhbiBpbi1tZW1vcnkgZGF0YWJhc2VcbiAgICAgICAgcmV0dXJuIGNvbmNhdE1hcC5jYWxsKHRoaXMuZGJSZWFkeSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlUmVxdWVzdF8ocmVxKTsgfSk7XG4gICAgfTtcbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuaGFuZGxlUmVxdWVzdF8gPSBmdW5jdGlvbiAocmVxKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciB1cmwgPSByZXEudXJsO1xuICAgICAgICAvLyBUcnkgb3ZlcnJpZGUgcGFyc2VyXG4gICAgICAgIC8vIElmIG5vIG92ZXJyaWRlIHBhcnNlciBvciBpdCByZXR1cm5zIG5vdGhpbmcsIHVzZSBkZWZhdWx0IHBhcnNlclxuICAgICAgICB2YXIgcGFyc2VyID0gdGhpcy5iaW5kKCdwYXJzZVJlcXVlc3RVcmwnKTtcbiAgICAgICAgdmFyIHBhcnNlZCA9IChwYXJzZXIgJiYgcGFyc2VyKHVybCwgdGhpcy5yZXF1ZXN0SW5mb1V0aWxzKSkgfHxcbiAgICAgICAgICAgIHRoaXMucGFyc2VSZXF1ZXN0VXJsKHVybCk7XG4gICAgICAgIHZhciBjb2xsZWN0aW9uTmFtZSA9IHBhcnNlZC5jb2xsZWN0aW9uTmFtZTtcbiAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSB0aGlzLmRiW2NvbGxlY3Rpb25OYW1lXTtcbiAgICAgICAgdmFyIHJlcUluZm8gPSB7XG4gICAgICAgICAgICByZXE6IHJlcSxcbiAgICAgICAgICAgIGFwaUJhc2U6IHBhcnNlZC5hcGlCYXNlLFxuICAgICAgICAgICAgY29sbGVjdGlvbjogY29sbGVjdGlvbixcbiAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lOiBjb2xsZWN0aW9uTmFtZSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuY3JlYXRlSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSksXG4gICAgICAgICAgICBpZDogdGhpcy5wYXJzZUlkKGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lLCBwYXJzZWQuaWQpLFxuICAgICAgICAgICAgbWV0aG9kOiB0aGlzLmdldFJlcXVlc3RNZXRob2QocmVxKSxcbiAgICAgICAgICAgIHF1ZXJ5OiBwYXJzZWQucXVlcnksXG4gICAgICAgICAgICByZXNvdXJjZVVybDogcGFyc2VkLnJlc291cmNlVXJsLFxuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICB1dGlsczogdGhpcy5yZXF1ZXN0SW5mb1V0aWxzXG4gICAgICAgIH07XG4gICAgICAgIHZhciByZXNPcHRpb25zO1xuICAgICAgICBpZiAoL2NvbW1hbmRzXFwvPyQvaS50ZXN0KHJlcUluZm8uYXBpQmFzZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbW1hbmRzKHJlcUluZm8pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtZXRob2RJbnRlcmNlcHRvciA9IHRoaXMuYmluZChyZXFJbmZvLm1ldGhvZCk7XG4gICAgICAgIGlmIChtZXRob2RJbnRlcmNlcHRvcikge1xuICAgICAgICAgICAgLy8gSW5NZW1vcnlEYlNlcnZpY2UgaW50ZXJjZXB0cyB0aGlzIEhUVFAgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaWYgaW50ZXJjZXB0b3IgcHJvZHVjZWQgYSByZXNwb25zZSwgcmV0dXJuIGl0LlxuICAgICAgICAgICAgLy8gZWxzZSBJbk1lbW9yeURiU2VydmljZSBjaG9zZSBub3QgdG8gaW50ZXJjZXB0OyBjb250aW51ZSBwcm9jZXNzaW5nLlxuICAgICAgICAgICAgdmFyIGludGVyY2VwdG9yUmVzcG9uc2UgPSBtZXRob2RJbnRlcmNlcHRvcihyZXFJbmZvKTtcbiAgICAgICAgICAgIGlmIChpbnRlcmNlcHRvclJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGludGVyY2VwdG9yUmVzcG9uc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGJbY29sbGVjdGlvbk5hbWVdKSB7XG4gICAgICAgICAgICAvLyByZXF1ZXN0IGlzIGZvciBhIGtub3duIGNvbGxlY3Rpb24gb2YgdGhlIEluTWVtb3J5RGJTZXJ2aWNlXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVSZXNwb25zZSQoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuY29sbGVjdGlvbkhhbmRsZXIocmVxSW5mbyk7IH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5wYXNzVGhydVVua25vd25VcmwpIHtcbiAgICAgICAgICAgIC8vIHVua25vd24gY29sbGVjdGlvbjsgcGFzcyByZXF1ZXN0IHRocnUgdG8gYSBcInJlYWxcIiBiYWNrZW5kLlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UGFzc1RocnVCYWNrZW5kKCkuaGFuZGxlKHJlcSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNDA0IC0gY2FuJ3QgaGFuZGxlIHRoaXMgcmVxdWVzdFxuICAgICAgICByZXNPcHRpb25zID0gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5OT1RfRk9VTkQsIFwiQ29sbGVjdGlvbiAnXCIgKyBjb2xsZWN0aW9uTmFtZSArIFwiJyBub3QgZm91bmRcIik7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVJlc3BvbnNlJChmdW5jdGlvbiAoKSB7IHJldHVybiByZXNPcHRpb25zOyB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZCBjb25maWd1cmVkIGRlbGF5IHRvIHJlc3BvbnNlIG9ic2VydmFibGUgdW5sZXNzIGRlbGF5ID09PSAwXG4gICAgICovXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmFkZERlbGF5ID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIHZhciBkID0gdGhpcy5jb25maWcuZGVsYXk7XG4gICAgICAgIHJldHVybiBkID09PSAwID8gcmVzcG9uc2UgOiBkZWxheS5jYWxsKHJlc3BvbnNlLCBkIHx8IDUwMCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBcHBseSBxdWVyeS9zZWFyY2ggcGFyYW1ldGVycyBhcyBhIGZpbHRlciBvdmVyIHRoZSBjb2xsZWN0aW9uXG4gICAgICogVGhpcyBpbXBsIG9ubHkgc3VwcG9ydHMgUmVnRXhwIHF1ZXJpZXMgb24gc3RyaW5nIHByb3BlcnRpZXMgb2YgdGhlIGNvbGxlY3Rpb25cbiAgICAgKiBBTkRzIHRoZSBjb25kaXRpb25zIHRvZ2V0aGVyXG4gICAgICovXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmFwcGx5UXVlcnkgPSBmdW5jdGlvbiAoY29sbGVjdGlvbiwgcXVlcnkpIHtcbiAgICAgICAgLy8gZXh0cmFjdCBmaWx0ZXJpbmcgY29uZGl0aW9ucyAtIHtwcm9wZXJ0eU5hbWUsIFJlZ0V4cHMpIC0gZnJvbSBxdWVyeS9zZWFyY2ggcGFyYW1ldGVyc1xuICAgICAgICB2YXIgY29uZGl0aW9ucyA9IFtdO1xuICAgICAgICB2YXIgY2FzZVNlbnNpdGl2ZSA9IHRoaXMuY29uZmlnLmNhc2VTZW5zaXRpdmVTZWFyY2ggPyB1bmRlZmluZWQgOiAnaSc7XG4gICAgICAgIHF1ZXJ5LmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7IHJldHVybiBjb25kaXRpb25zLnB1c2goeyBuYW1lOiBuYW1lLCByeDogbmV3IFJlZ0V4cChkZWNvZGVVUkkodiksIGNhc2VTZW5zaXRpdmUpIH0pOyB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBsZW4gPSBjb25kaXRpb25zLmxlbmd0aDtcbiAgICAgICAgaWYgKCFsZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFORCB0aGUgUmVnRXhwIGNvbmRpdGlvbnNcbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb24uZmlsdGVyKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICAgIHZhciBvayA9IHRydWU7XG4gICAgICAgICAgICB2YXIgaSA9IGxlbjtcbiAgICAgICAgICAgIHdoaWxlIChvayAmJiBpKSB7XG4gICAgICAgICAgICAgICAgaSAtPSAxO1xuICAgICAgICAgICAgICAgIHZhciBjb25kID0gY29uZGl0aW9uc1tpXTtcbiAgICAgICAgICAgICAgICBvayA9IGNvbmQucngudGVzdChyb3dbY29uZC5uYW1lXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb2s7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IGEgbWV0aG9kIGZyb20gdGhlIGBJbk1lbW9yeURiU2VydmljZWAgKGlmIGl0IGV4aXN0cyksIGJvdW5kIHRvIHRoYXQgc2VydmljZVxuICAgICAqL1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUpIHtcbiAgICAgICAgdmFyIGZuID0gdGhpcy5pbk1lbURiU2VydmljZVttZXRob2ROYW1lXTtcbiAgICAgICAgcmV0dXJuIGZuID8gZm4uYmluZCh0aGlzLmluTWVtRGJTZXJ2aWNlKSA6IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5ib2RpZnkgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgYm9keSA9IHRoaXMuY2xvbmUoZGF0YSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5kYXRhRW5jYXBzdWxhdGlvbiA/IHsgZGF0YTogYm9keSB9IDogYm9keTtcbiAgICB9O1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICB9O1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5jb2xsZWN0aW9uSGFuZGxlciA9IGZ1bmN0aW9uIChyZXFJbmZvKSB7XG4gICAgICAgIC8vIGNvbnN0IHJlcSA9IHJlcUluZm8ucmVxO1xuICAgICAgICB2YXIgcmVzT3B0aW9ucztcbiAgICAgICAgc3dpdGNoIChyZXFJbmZvLm1ldGhvZCkge1xuICAgICAgICAgICAgY2FzZSAnZ2V0JzpcbiAgICAgICAgICAgICAgICByZXNPcHRpb25zID0gdGhpcy5nZXQocmVxSW5mbyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwb3N0JzpcbiAgICAgICAgICAgICAgICByZXNPcHRpb25zID0gdGhpcy5wb3N0KHJlcUluZm8pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncHV0JzpcbiAgICAgICAgICAgICAgICByZXNPcHRpb25zID0gdGhpcy5wdXQocmVxSW5mbyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkZWxldGUnOlxuICAgICAgICAgICAgICAgIHJlc09wdGlvbnMgPSB0aGlzLmRlbGV0ZShyZXFJbmZvKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmVzT3B0aW9ucyA9IHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnMocmVxSW5mby51cmwsIFNUQVRVUy5NRVRIT0RfTk9UX0FMTE9XRUQsICdNZXRob2Qgbm90IGFsbG93ZWQnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBgaW5NZW1EYlNlcnZpY2UucmVzcG9uc2VJbnRlcmNlcHRvcmAgZXhpc3RzLCBsZXQgaXQgbW9ycGggdGhlIHJlc3BvbnNlIG9wdGlvbnNcbiAgICAgICAgdmFyIGludGVyY2VwdG9yID0gdGhpcy5iaW5kKCdyZXNwb25zZUludGVyY2VwdG9yJyk7XG4gICAgICAgIHJldHVybiBpbnRlcmNlcHRvciA/IGludGVyY2VwdG9yKHJlc09wdGlvbnMsIHJlcUluZm8pIDogcmVzT3B0aW9ucztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENvbW1hbmRzIHJlY29uZmlndXJlIHRoZSBpbi1tZW1vcnkgd2ViIGFwaSBzZXJ2aWNlIG9yIGV4dHJhY3QgaW5mb3JtYXRpb24gZnJvbSBpdC5cbiAgICAgKiBDb21tYW5kcyBpZ25vcmUgdGhlIGxhdGVuY3kgZGVsYXkgYW5kIHJlc3BvbmQgQVNBUC5cbiAgICAgKlxuICAgICAqIFdoZW4gdGhlIGxhc3Qgc2VnbWVudCBvZiB0aGUgYGFwaUJhc2VgIHBhdGggaXMgXCJjb21tYW5kc1wiLFxuICAgICAqIHRoZSBgY29sbGVjdGlvbk5hbWVgIGlzIHRoZSBjb21tYW5kLlxuICAgICAqXG4gICAgICogRXhhbXBsZSBVUkxzOlxuICAgICAqICAgY29tbWFuZHMvcmVzZXRkYiAoUE9TVCkgLy8gUmVzZXQgdGhlIFwiZGF0YWJhc2VcIiB0byBpdHMgb3JpZ2luYWwgc3RhdGVcbiAgICAgKiAgIGNvbW1hbmRzL2NvbmZpZyAoR0VUKSAgIC8vIFJldHVybiB0aGlzIHNlcnZpY2UncyBjb25maWcgb2JqZWN0XG4gICAgICogICBjb21tYW5kcy9jb25maWcgKFBPU1QpICAvLyBVcGRhdGUgdGhlIGNvbmZpZyAoZS5nLiB0aGUgZGVsYXkpXG4gICAgICpcbiAgICAgKiBVc2FnZTpcbiAgICAgKiAgIGh0dHAucG9zdCgnY29tbWFuZHMvcmVzZXRkYicsIHVuZGVmaW5lZCk7XG4gICAgICogICBodHRwLmdldCgnY29tbWFuZHMvY29uZmlnJyk7XG4gICAgICogICBodHRwLnBvc3QoJ2NvbW1hbmRzL2NvbmZpZycsICd7XCJkZWxheVwiOjEwMDB9Jyk7XG4gICAgICovXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmNvbW1hbmRzID0gZnVuY3Rpb24gKHJlcUluZm8pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGNvbW1hbmQgPSByZXFJbmZvLmNvbGxlY3Rpb25OYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHZhciBtZXRob2QgPSByZXFJbmZvLm1ldGhvZDtcbiAgICAgICAgdmFyIHJlc09wdGlvbnMgPSB7XG4gICAgICAgICAgICB1cmw6IHJlcUluZm8udXJsXG4gICAgICAgIH07XG4gICAgICAgIHN3aXRjaCAoY29tbWFuZCkge1xuICAgICAgICAgICAgY2FzZSAncmVzZXRkYic6XG4gICAgICAgICAgICAgICAgcmVzT3B0aW9ucy5zdGF0dXMgPSBTVEFUVVMuTk9fQ09OVEVOVDtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uY2F0TWFwLmNhbGwodGhpcy5yZXNldERiKHJlcUluZm8pLCBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5jcmVhdGVSZXNwb25zZSQoZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVzT3B0aW9uczsgfSwgZmFsc2UgLyogbm8gbGF0ZW5jeSBkZWxheSAqLyk7IH0pO1xuICAgICAgICAgICAgY2FzZSAnY29uZmlnJzpcbiAgICAgICAgICAgICAgICBpZiAobWV0aG9kID09PSAnZ2V0Jykge1xuICAgICAgICAgICAgICAgICAgICByZXNPcHRpb25zLnN0YXR1cyA9IFNUQVRVUy5PSztcbiAgICAgICAgICAgICAgICAgICAgcmVzT3B0aW9ucy5ib2R5ID0gdGhpcy5jbG9uZSh0aGlzLmNvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGFueSBvdGhlciBIVFRQIG1ldGhvZCBpcyBhc3N1bWVkIHRvIGJlIGEgY29uZmlnIHVwZGF0ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJvZHkgPSB0aGlzLmdldEpzb25Cb2R5KHJlcUluZm8ucmVxKTtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmNvbmZpZywgYm9keSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFzc1RocnVCYWNrZW5kID0gdW5kZWZpbmVkOyAvLyByZS1jcmVhdGUgd2hlbiBuZWVkZWRcbiAgICAgICAgICAgICAgICAgICAgcmVzT3B0aW9ucy5zdGF0dXMgPSBTVEFUVVMuTk9fQ09OVEVOVDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJlc09wdGlvbnMgPSB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHJlcUluZm8udXJsLCBTVEFUVVMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLCBcIlVua25vd24gY29tbWFuZCBcXFwiXCIgKyBjb21tYW5kICsgXCJcXFwiXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVJlc3BvbnNlJChmdW5jdGlvbiAoKSB7IHJldHVybiByZXNPcHRpb25zOyB9LCBmYWxzZSAvKiBubyBsYXRlbmN5IGRlbGF5ICovKTtcbiAgICB9O1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyA9IGZ1bmN0aW9uICh1cmwsIHN0YXR1cywgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYm9keTogeyBlcnJvcjogXCJcIiArIG1lc3NhZ2UgfSxcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5jcmVhdGVIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcbiAgICAgICAgICAgIHN0YXR1czogc3RhdHVzXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBjb2xkIHJlc3BvbnNlIE9ic2VydmFibGUgZnJvbSBhIGZhY3RvcnkgZm9yIFJlc3BvbnNlT3B0aW9uc1xuICAgICAqIEBwYXJhbSByZXNPcHRpb25zRmFjdG9yeSAtIGNyZWF0ZXMgUmVzcG9uc2VPcHRpb25zIHdoZW4gb2JzZXJ2YWJsZSBpcyBzdWJzY3JpYmVkXG4gICAgICogQHBhcmFtIHdpdGhEZWxheSAtIGlmIHRydWUgKGRlZmF1bHQpLCBhZGQgc2ltdWxhdGVkIGxhdGVuY3kgZGVsYXkgZnJvbSBjb25maWd1cmF0aW9uXG4gICAgICovXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmNyZWF0ZVJlc3BvbnNlJCA9IGZ1bmN0aW9uIChyZXNPcHRpb25zRmFjdG9yeSwgd2l0aERlbGF5KSB7XG4gICAgICAgIGlmICh3aXRoRGVsYXkgPT09IHZvaWQgMCkgeyB3aXRoRGVsYXkgPSB0cnVlOyB9XG4gICAgICAgIHZhciByZXNPcHRpb25zJCA9IHRoaXMuY3JlYXRlUmVzcG9uc2VPcHRpb25zJChyZXNPcHRpb25zRmFjdG9yeSk7XG4gICAgICAgIHZhciByZXNwJCA9IHRoaXMuY3JlYXRlUmVzcG9uc2UkZnJvbVJlc3BvbnNlT3B0aW9ucyQocmVzT3B0aW9ucyQpO1xuICAgICAgICByZXR1cm4gd2l0aERlbGF5ID8gdGhpcy5hZGREZWxheShyZXNwJCkgOiByZXNwJDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGNvbGQgT2JzZXJ2YWJsZSBvZiBSZXNwb25zZU9wdGlvbnMuXG4gICAgICogQHBhcmFtIHJlc09wdGlvbnNGYWN0b3J5IC0gY3JlYXRlcyBSZXNwb25zZU9wdGlvbnMgd2hlbiBvYnNlcnZhYmxlIGlzIHN1YnNjcmliZWRcbiAgICAgKi9cbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuY3JlYXRlUmVzcG9uc2VPcHRpb25zJCA9IGZ1bmN0aW9uIChyZXNPcHRpb25zRmFjdG9yeSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHJlc3BvbnNlT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHZhciByZXNPcHRpb25zO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXNPcHRpb25zID0gcmVzT3B0aW9uc0ZhY3RvcnkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHZhciBlcnIgPSBlcnJvci5tZXNzYWdlIHx8IGVycm9yO1xuICAgICAgICAgICAgICAgIHJlc09wdGlvbnMgPSBfdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucygnJywgU1RBVFVTLklOVEVSTkFMX1NFUlZFUl9FUlJPUiwgXCJcIiArIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc3RhdHVzID0gcmVzT3B0aW9ucy5zdGF0dXM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc09wdGlvbnMuc3RhdHVzVGV4dCA9IGdldFN0YXR1c1RleHQoc3RhdHVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7IH1cbiAgICAgICAgICAgIGlmIChpc1N1Y2Nlc3Moc3RhdHVzKSkge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlT2JzZXJ2ZXIubmV4dChyZXNPcHRpb25zKTtcbiAgICAgICAgICAgICAgICByZXNwb25zZU9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZU9ic2VydmVyLmVycm9yKHJlc09wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgfTsgLy8gdW5zdWJzY3JpYmUgZnVuY3Rpb25cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBjb2xsZWN0aW9uID0gX2EuY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUgPSBfYS5jb2xsZWN0aW9uTmFtZSwgaGVhZGVycyA9IF9hLmhlYWRlcnMsIGlkID0gX2EuaWQsIHVybCA9IF9hLnVybDtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcbiAgICAgICAgaWYgKGlkID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnModXJsLCBTVEFUVVMuTk9UX0ZPVU5ELCBcIk1pc3NpbmcgXFxcIlwiICsgY29sbGVjdGlvbk5hbWUgKyBcIlxcXCIgaWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGV4aXN0cyA9IHRoaXMucmVtb3ZlQnlJZChjb2xsZWN0aW9uLCBpZCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICAgICAgc3RhdHVzOiAoZXhpc3RzIHx8ICF0aGlzLmNvbmZpZy5kZWxldGU0MDQpID8gU1RBVFVTLk5PX0NPTlRFTlQgOiBTVEFUVVMuTk9UX0ZPVU5EXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBGaW5kIGZpcnN0IGluc3RhbmNlIG9mIGl0ZW0gaW4gY29sbGVjdGlvbiBieSBgaXRlbS5pZGBcbiAgICAgKiBAcGFyYW0gY29sbGVjdGlvblxuICAgICAqIEBwYXJhbSBpZFxuICAgICAqL1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5maW5kQnlJZCA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBpZCkge1xuICAgICAgICByZXR1cm4gY29sbGVjdGlvbi5maW5kKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtLmlkID09PSBpZDsgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSB0aGUgbmV4dCBhdmFpbGFibGUgaWQgZm9yIGl0ZW0gaW4gdGhpcyBjb2xsZWN0aW9uXG4gICAgICogVXNlIG1ldGhvZCBmcm9tIGBpbk1lbURiU2VydmljZWAgaWYgaXQgZXhpc3RzIGFuZCByZXR1cm5zIGEgdmFsdWUsXG4gICAgICogZWxzZSBkZWxlZ2F0ZXMgdG8gYGdlbklkRGVmYXVsdGAuXG4gICAgICogQHBhcmFtIGNvbGxlY3Rpb24gLSBjb2xsZWN0aW9uIG9mIGl0ZW1zIHdpdGggYGlkYCBrZXkgcHJvcGVydHlcbiAgICAgKi9cbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuZ2VuSWQgPSBmdW5jdGlvbiAoY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUpIHtcbiAgICAgICAgdmFyIGdlbklkID0gdGhpcy5iaW5kKCdnZW5JZCcpO1xuICAgICAgICBpZiAoZ2VuSWQpIHtcbiAgICAgICAgICAgIHZhciBpZCA9IGdlbklkKGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lKTtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzXG4gICAgICAgICAgICBpZiAoaWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmdlbklkRGVmYXVsdChjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEZWZhdWx0IGdlbmVyYXRvciBvZiB0aGUgbmV4dCBhdmFpbGFibGUgaWQgZm9yIGl0ZW0gaW4gdGhpcyBjb2xsZWN0aW9uXG4gICAgICogVGhpcyBkZWZhdWx0IGltcGxlbWVudGF0aW9uIHdvcmtzIG9ubHkgZm9yIG51bWVyaWMgaWRzLlxuICAgICAqIEBwYXJhbSBjb2xsZWN0aW9uIC0gY29sbGVjdGlvbiBvZiBpdGVtcyB3aXRoIGBpZGAga2V5IHByb3BlcnR5XG4gICAgICogQHBhcmFtIGNvbGxlY3Rpb25OYW1lIC0gbmFtZSBvZiB0aGUgY29sbGVjdGlvblxuICAgICAqL1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5nZW5JZERlZmF1bHQgPSBmdW5jdGlvbiAoY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQ29sbGVjdGlvbklkTnVtZXJpYyhjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvbGxlY3Rpb24gJ1wiICsgY29sbGVjdGlvbk5hbWUgKyBcIicgaWQgdHlwZSBpcyBub24tbnVtZXJpYyBvciB1bmtub3duLiBDYW4gb25seSBnZW5lcmF0ZSBudW1lcmljIGlkcy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1heElkID0gMDtcbiAgICAgICAgY29sbGVjdGlvbi5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGl0ZW0pIHtcbiAgICAgICAgICAgIG1heElkID0gTWF0aC5tYXgobWF4SWQsIHR5cGVvZiBpdGVtLmlkID09PSAnbnVtYmVyJyA/IGl0ZW0uaWQgOiBtYXhJZCk7XG4gICAgICAgIH0sIHVuZGVmaW5lZCk7XG4gICAgICAgIHJldHVybiBtYXhJZCArIDE7XG4gICAgfTtcbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBjb2xsZWN0aW9uID0gX2EuY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUgPSBfYS5jb2xsZWN0aW9uTmFtZSwgaGVhZGVycyA9IF9hLmhlYWRlcnMsIGlkID0gX2EuaWQsIHF1ZXJ5ID0gX2EucXVlcnksIHVybCA9IF9hLnVybDtcbiAgICAgICAgdmFyIGRhdGEgPSBjb2xsZWN0aW9uO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xuICAgICAgICBpZiAoaWQgIT0gdW5kZWZpbmVkICYmIGlkICE9PSAnJykge1xuICAgICAgICAgICAgZGF0YSA9IHRoaXMuZmluZEJ5SWQoY29sbGVjdGlvbiwgaWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHF1ZXJ5KSB7XG4gICAgICAgICAgICBkYXRhID0gdGhpcy5hcHBseVF1ZXJ5KGNvbGxlY3Rpb24sIHF1ZXJ5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHVybCwgU1RBVFVTLk5PVF9GT1VORCwgXCInXCIgKyBjb2xsZWN0aW9uTmFtZSArIFwiJyB3aXRoIGlkPSdcIiArIGlkICsgXCInIG5vdCBmb3VuZFwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYm9keTogdGhpcy5ib2RpZnkoZGF0YSksXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICAgICAgc3RhdHVzOiBTVEFUVVMuT0tcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBsb2NhdGlvbiBpbmZvIGZyb20gYSB1cmwsIGV2ZW4gb24gc2VydmVyIHdoZXJlIGBkb2N1bWVudGAgaXMgbm90IGRlZmluZWRcbiAgICAgKi9cbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuZ2V0TG9jYXRpb24gPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIGlmICghdXJsLnN0YXJ0c1dpdGgoJ2h0dHAnKSkge1xuICAgICAgICAgICAgLy8gZ2V0IHRoZSBkb2N1bWVudCBpZmYgcnVubmluZyBpbiBicm93c2VyXG4gICAgICAgICAgICB2YXIgZG9jID0gKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpID8gdW5kZWZpbmVkIDogZG9jdW1lbnQ7XG4gICAgICAgICAgICAvLyBhZGQgaG9zdCBpbmZvIHRvIHVybCBiZWZvcmUgcGFyc2luZy4gIFVzZSBhIGZha2UgaG9zdCB3aGVuIG5vdCBpbiBicm93c2VyLlxuICAgICAgICAgICAgdmFyIGJhc2UgPSBkb2MgPyBkb2MubG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgZG9jLmxvY2F0aW9uLmhvc3QgOiAnaHR0cDovL2Zha2UnO1xuICAgICAgICAgICAgdXJsID0gdXJsLnN0YXJ0c1dpdGgoJy8nKSA/IGJhc2UgKyB1cmwgOiBiYXNlICsgJy8nICsgdXJsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJzZVVyaSh1cmwpO1xuICAgIH07XG4gICAgO1xuICAgIC8qKlxuICAgICAqIGdldCBvciBjcmVhdGUgdGhlIGZ1bmN0aW9uIHRoYXQgcGFzc2VzIHVuaGFuZGxlZCByZXF1ZXN0c1xuICAgICAqIHRocm91Z2ggdG8gdGhlIFwicmVhbFwiIGJhY2tlbmQuXG4gICAgICovXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmdldFBhc3NUaHJ1QmFja2VuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFzc1RocnVCYWNrZW5kID9cbiAgICAgICAgICAgIHRoaXMucGFzc1RocnVCYWNrZW5kIDpcbiAgICAgICAgICAgIHRoaXMucGFzc1RocnVCYWNrZW5kID0gdGhpcy5jcmVhdGVQYXNzVGhydUJhY2tlbmQoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCB1dGlsaXR5IG1ldGhvZHMgZnJvbSB0aGlzIHNlcnZpY2UgaW5zdGFuY2UuXG4gICAgICogVXNlZnVsIHdpdGhpbiBhbiBIVFRQIG1ldGhvZCBvdmVycmlkZVxuICAgICAqL1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5nZXRSZXF1ZXN0SW5mb1V0aWxzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY3JlYXRlUmVzcG9uc2UkOiB0aGlzLmNyZWF0ZVJlc3BvbnNlJC5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZmluZEJ5SWQ6IHRoaXMuZmluZEJ5SWQuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGlzQ29sbGVjdGlvbklkTnVtZXJpYzogdGhpcy5pc0NvbGxlY3Rpb25JZE51bWVyaWMuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGdldENvbmZpZzogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuY29uZmlnOyB9LFxuICAgICAgICAgICAgZ2V0RGI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmRiOyB9LFxuICAgICAgICAgICAgZ2V0SnNvbkJvZHk6IHRoaXMuZ2V0SnNvbkJvZHkuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGdldExvY2F0aW9uOiB0aGlzLmdldExvY2F0aW9uLmJpbmQodGhpcyksXG4gICAgICAgICAgICBnZXRQYXNzVGhydUJhY2tlbmQ6IHRoaXMuZ2V0UGFzc1RocnVCYWNrZW5kLmJpbmQodGhpcyksXG4gICAgICAgICAgICBwYXJzZVJlcXVlc3RVcmw6IHRoaXMucGFyc2VSZXF1ZXN0VXJsLmJpbmQodGhpcyksXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBpZCkge1xuICAgICAgICByZXR1cm4gY29sbGVjdGlvbi5maW5kSW5kZXgoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0uaWQgPT09IGlkOyB9KTtcbiAgICB9O1xuICAgIC8qKiBQYXJzZSB0aGUgaWQgYXMgYSBudW1iZXIuIFJldHVybiBvcmlnaW5hbCB2YWx1ZSBpZiBub3QgYSBudW1iZXIuICovXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLnBhcnNlSWQgPSBmdW5jdGlvbiAoY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUsIGlkKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0NvbGxlY3Rpb25JZE51bWVyaWMoY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUpKSB7XG4gICAgICAgICAgICAvLyBDYW4ndCBjb25maXJtIHRoYXQgYGlkYCBpcyBhIG51bWVyaWMgdHlwZTsgZG9uJ3QgcGFyc2UgYXMgYSBudW1iZXJcbiAgICAgICAgICAgIC8vIG9yIGVsc2UgYCc0MidgIC0+IGA0MmAgYW5kIF9nZXQgYnkgaWRfIGZhaWxzLlxuICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpZE51bSA9IHBhcnNlRmxvYXQoaWQpO1xuICAgICAgICByZXR1cm4gaXNOYU4oaWROdW0pID8gaWQgOiBpZE51bTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIHJldHVybiB0cnVlIGlmIGNhbiBkZXRlcm1pbmUgdGhhdCB0aGUgY29sbGVjdGlvbidzIGBpdGVtLmlkYCBpcyBhIG51bWJlclxuICAgICAqIFRoaXMgaW1wbGVtZW50YXRpb24gY2FuJ3QgdGVsbCBpZiB0aGUgY29sbGVjdGlvbiBpcyBlbXB0eSBzbyBpdCBhc3N1bWVzIE5PXG4gICAgICogKi9cbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuaXNDb2xsZWN0aW9uSWROdW1lcmljID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lKSB7XG4gICAgICAgIC8vIGNvbGxlY3Rpb25OYW1lIG5vdCB1c2VkIG5vdyBidXQgb3ZlcnJpZGUgbWlnaHQgbWFpbnRhaW4gY29sbGVjdGlvbiB0eXBlIGluZm9ybWF0aW9uXG4gICAgICAgIC8vIHNvIHRoYXQgaXQgY291bGQga25vdyB0aGUgdHlwZSBvZiB0aGUgYGlkYCBldmVuIHdoZW4gdGhlIGNvbGxlY3Rpb24gaXMgZW1wdHkuXG4gICAgICAgIHJldHVybiAhIShjb2xsZWN0aW9uICYmIGNvbGxlY3Rpb25bMF0pICYmIHR5cGVvZiBjb2xsZWN0aW9uWzBdLmlkID09PSAnbnVtYmVyJztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgcmVxdWVzdCBVUkwgaW50byBhIGBQYXJzZWRSZXF1ZXN0VXJsYCBvYmplY3QuXG4gICAgICogUGFyc2luZyBkZXBlbmRzIHVwb24gY2VydGFpbiB2YWx1ZXMgb2YgYGNvbmZpZ2A6IGBhcGlCYXNlYCwgYGhvc3RgLCBhbmQgYHVybFJvb3RgLlxuICAgICAqXG4gICAgICogQ29uZmlndXJpbmcgdGhlIGBhcGlCYXNlYCB5aWVsZHMgdGhlIG1vc3QgaW50ZXJlc3RpbmcgY2hhbmdlcyB0byBgcGFyc2VSZXF1ZXN0VXJsYCBiZWhhdmlvcjpcbiAgICAgKiAgIFdoZW4gYXBpQmFzZT11bmRlZmluZWQgYW5kIHVybD0naHR0cDovL2xvY2FsaG9zdC9hcGkvY29sbGVjdGlvbi80MidcbiAgICAgKiAgICAge2Jhc2U6ICdhcGkvJywgY29sbGVjdGlvbk5hbWU6ICdjb2xsZWN0aW9uJywgaWQ6ICc0MicsIC4uLn1cbiAgICAgKiAgIFdoZW4gYXBpQmFzZT0nc29tZS9hcGkvcm9vdC8nIGFuZCB1cmw9J2h0dHA6Ly9sb2NhbGhvc3Qvc29tZS9hcGkvcm9vdC9jb2xsZWN0aW9uJ1xuICAgICAqICAgICB7YmFzZTogJ3NvbWUvYXBpL3Jvb3QvJywgY29sbGVjdGlvbk5hbWU6ICdjb2xsZWN0aW9uJywgaWQ6IHVuZGVmaW5lZCwgLi4ufVxuICAgICAqICAgV2hlbiBhcGlCYXNlPScvJyBhbmQgdXJsPSdodHRwOi8vbG9jYWxob3N0L2NvbGxlY3Rpb24nXG4gICAgICogICAgIHtiYXNlOiAnLycsIGNvbGxlY3Rpb25OYW1lOiAnY29sbGVjdGlvbicsIGlkOiB1bmRlZmluZWQsIC4uLn1cbiAgICAgKlxuICAgICAqIFRoZSBhY3R1YWwgYXBpIGJhc2Ugc2VnbWVudCB2YWx1ZXMgYXJlIGlnbm9yZWQuIE9ubHkgdGhlIG51bWJlciBvZiBzZWdtZW50cyBtYXR0ZXJzLlxuICAgICAqIFRoZSBmb2xsb3dpbmcgYXBpIGJhc2Ugc3RyaW5ncyBhcmUgY29uc2lkZXJlZCBpZGVudGljYWw6ICdhL2InIH4gJ3NvbWUvYXBpLycgfiBgdHdvL3NlZ21lbnRzJ1xuICAgICAqXG4gICAgICogVG8gcmVwbGFjZSB0aGlzIGRlZmF1bHQgbWV0aG9kLCBhc3NpZ24geW91ciBhbHRlcm5hdGl2ZSB0byB5b3VyIEluTWVtRGJTZXJ2aWNlWydwYXJzZVJlcXVlc3RVcmwnXVxuICAgICAqL1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5wYXJzZVJlcXVlc3RVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgbG9jID0gdGhpcy5nZXRMb2NhdGlvbih1cmwpO1xuICAgICAgICAgICAgdmFyIGRyb3AgPSB0aGlzLmNvbmZpZy5yb290UGF0aC5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgdXJsUm9vdCA9ICcnO1xuICAgICAgICAgICAgaWYgKGxvYy5ob3N0ICE9PSB0aGlzLmNvbmZpZy5ob3N0KSB7XG4gICAgICAgICAgICAgICAgLy8gdXJsIGZvciBhIHNlcnZlciBvbiBhIGRpZmZlcmVudCBob3N0IVxuICAgICAgICAgICAgICAgIC8vIGFzc3VtZSBpdCdzIGNvbGxlY3Rpb24gaXMgYWN0dWFsbHkgaGVyZSB0b28uXG4gICAgICAgICAgICAgICAgZHJvcCA9IDE7IC8vIHRoZSBsZWFkaW5nIHNsYXNoXG4gICAgICAgICAgICAgICAgdXJsUm9vdCA9IGxvYy5wcm90b2NvbCArICcvLycgKyBsb2MuaG9zdCArICcvJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwYXRoID0gbG9jLnBhdGguc3Vic3RyaW5nKGRyb3ApO1xuICAgICAgICAgICAgdmFyIHBhdGhTZWdtZW50cyA9IHBhdGguc3BsaXQoJy8nKTtcbiAgICAgICAgICAgIHZhciBzZWdtZW50SXggPSAwO1xuICAgICAgICAgICAgLy8gYXBpQmFzZTogdGhlIGZyb250IHBhcnQgb2YgdGhlIHBhdGggZGV2b3RlZCB0byBnZXR0aW5nIHRvIHRoZSBhcGkgcm91dGVcbiAgICAgICAgICAgIC8vIEFzc3VtZXMgZmlyc3QgcGF0aCBzZWdtZW50IGlmIG5vIGNvbmZpZy5hcGlCYXNlXG4gICAgICAgICAgICAvLyBlbHNlIGlnbm9yZXMgYXMgbWFueSBwYXRoIHNlZ21lbnRzIGFzIGFyZSBpbiBjb25maWcuYXBpQmFzZVxuICAgICAgICAgICAgLy8gRG9lcyBOT1QgY2FyZSB3aGF0IHRoZSBhcGkgYmFzZSBjaGFycyBhY3R1YWxseSBhcmUuXG4gICAgICAgICAgICB2YXIgYXBpQmFzZSA9IHZvaWQgMDtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzXG4gICAgICAgICAgICBpZiAodGhpcy5jb25maWcuYXBpQmFzZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBhcGlCYXNlID0gcGF0aFNlZ21lbnRzW3NlZ21lbnRJeCsrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFwaUJhc2UgPSByZW1vdmVUcmFpbGluZ1NsYXNoKHRoaXMuY29uZmlnLmFwaUJhc2UudHJpbSgpKTtcbiAgICAgICAgICAgICAgICBpZiAoYXBpQmFzZSkge1xuICAgICAgICAgICAgICAgICAgICBzZWdtZW50SXggPSBhcGlCYXNlLnNwbGl0KCcvJykubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudEl4ID0gMDsgLy8gbm8gYXBpIGJhc2UgYXQgYWxsOyB1bndpc2UgYnV0IGFsbG93ZWQuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXBpQmFzZSArPSAnLyc7XG4gICAgICAgICAgICB2YXIgY29sbGVjdGlvbk5hbWUgPSBwYXRoU2VnbWVudHNbc2VnbWVudEl4KytdO1xuICAgICAgICAgICAgLy8gaWdub3JlIGFueXRoaW5nIGFmdGVyIGEgJy4nIChlLmcuLHRoZSBcImpzb25cIiBpbiBcImN1c3RvbWVycy5qc29uXCIpXG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZSA9IGNvbGxlY3Rpb25OYW1lICYmIGNvbGxlY3Rpb25OYW1lLnNwbGl0KCcuJylbMF07XG4gICAgICAgICAgICB2YXIgaWQgPSBwYXRoU2VnbWVudHNbc2VnbWVudEl4KytdO1xuICAgICAgICAgICAgdmFyIHF1ZXJ5ID0gdGhpcy5jcmVhdGVRdWVyeU1hcChsb2MucXVlcnkpO1xuICAgICAgICAgICAgdmFyIHJlc291cmNlVXJsID0gdXJsUm9vdCArIGFwaUJhc2UgKyBjb2xsZWN0aW9uTmFtZSArICcvJztcbiAgICAgICAgICAgIHJldHVybiB7IGFwaUJhc2U6IGFwaUJhc2UsIGNvbGxlY3Rpb25OYW1lOiBjb2xsZWN0aW9uTmFtZSwgaWQ6IGlkLCBxdWVyeTogcXVlcnksIHJlc291cmNlVXJsOiByZXNvdXJjZVVybCB9O1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHZhciBtc2cgPSBcInVuYWJsZSB0byBwYXJzZSB1cmwgJ1wiICsgdXJsICsgXCInOyBvcmlnaW5hbCBlcnJvcjogXCIgKyBlcnIubWVzc2FnZTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBDcmVhdGUgZW50aXR5XG4gICAgLy8gQ2FuIHVwZGF0ZSBhbiBleGlzdGluZyBlbnRpdHkgdG9vIGlmIHBvc3Q0MDkgaXMgZmFsc2UuXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLnBvc3QgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSBfYS5jb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSA9IF9hLmNvbGxlY3Rpb25OYW1lLCBoZWFkZXJzID0gX2EuaGVhZGVycywgaWQgPSBfYS5pZCwgcmVxID0gX2EucmVxLCByZXNvdXJjZVVybCA9IF9hLnJlc291cmNlVXJsLCB1cmwgPSBfYS51cmw7XG4gICAgICAgIHZhciBpdGVtID0gdGhpcy5nZXRKc29uQm9keShyZXEpO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xuICAgICAgICBpZiAoaXRlbS5pZCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaXRlbS5pZCA9IGlkIHx8IHRoaXMuZ2VuSWQoY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHZhciBlbXNnID0gZXJyLm1lc3NhZ2UgfHwgJyc7XG4gICAgICAgICAgICAgICAgaWYgKC9pZCB0eXBlIGlzIG5vbi1udW1lcmljLy50ZXN0KGVtc2cpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHVybCwgU1RBVFVTLlVOUFJPQ0VTU0FCTEVfRU5UUlksIGVtc2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsIFwiRmFpbGVkIHRvIGdlbmVyYXRlIG5ldyBpZCBmb3IgJ1wiICsgY29sbGVjdGlvbk5hbWUgKyBcIidcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpZCAmJiBpZCAhPT0gaXRlbS5pZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnModXJsLCBTVEFUVVMuQkFEX1JFUVVFU1QsIFwiUmVxdWVzdCBpZCBkb2VzIG5vdCBtYXRjaCBpdGVtLmlkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWQgPSBpdGVtLmlkO1xuICAgICAgICB9XG4gICAgICAgIHZhciBleGlzdGluZ0l4ID0gdGhpcy5pbmRleE9mKGNvbGxlY3Rpb24sIGlkKTtcbiAgICAgICAgdmFyIGJvZHkgPSB0aGlzLmJvZGlmeShpdGVtKTtcbiAgICAgICAgaWYgKGV4aXN0aW5nSXggPT09IC0xKSB7XG4gICAgICAgICAgICBjb2xsZWN0aW9uLnB1c2goaXRlbSk7XG4gICAgICAgICAgICBoZWFkZXJzLnNldCgnTG9jYXRpb24nLCByZXNvdXJjZVVybCArICcvJyArIGlkKTtcbiAgICAgICAgICAgIHJldHVybiB7IGhlYWRlcnM6IGhlYWRlcnMsIGJvZHk6IGJvZHksIHN0YXR1czogU1RBVFVTLkNSRUFURUQgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmNvbmZpZy5wb3N0NDA5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5DT05GTElDVCwgXCInXCIgKyBjb2xsZWN0aW9uTmFtZSArIFwiJyBpdGVtIHdpdGggaWQ9J1wiICsgaWQgKyBcIiBleGlzdHMgYW5kIG1heSBub3QgYmUgdXBkYXRlZCB3aXRoIFBPU1Q7IHVzZSBQVVQgaW5zdGVhZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb2xsZWN0aW9uW2V4aXN0aW5nSXhdID0gaXRlbTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5wb3N0MjA0ID9cbiAgICAgICAgICAgICAgICB7IGhlYWRlcnM6IGhlYWRlcnMsIHN0YXR1czogU1RBVFVTLk5PX0NPTlRFTlQgfSA6XG4gICAgICAgICAgICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzLCBib2R5OiBib2R5LCBzdGF0dXM6IFNUQVRVUy5PSyB9OyAvLyBzdWNjZXNzZnVsOyByZXR1cm4gZW50aXR5XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIFVwZGF0ZSBleGlzdGluZyBlbnRpdHlcbiAgICAvLyBDYW4gY3JlYXRlIGFuIGVudGl0eSB0b28gaWYgcHV0NDA0IGlzIGZhbHNlLlxuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5wdXQgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSBfYS5jb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSA9IF9hLmNvbGxlY3Rpb25OYW1lLCBoZWFkZXJzID0gX2EuaGVhZGVycywgaWQgPSBfYS5pZCwgcmVxID0gX2EucmVxLCB1cmwgPSBfYS51cmw7XG4gICAgICAgIHZhciBpdGVtID0gdGhpcy5nZXRKc29uQm9keShyZXEpO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xuICAgICAgICBpZiAoaXRlbS5pZCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHVybCwgU1RBVFVTLk5PVF9GT1VORCwgXCJNaXNzaW5nICdcIiArIGNvbGxlY3Rpb25OYW1lICsgXCInIGlkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpZCAmJiBpZCAhPT0gaXRlbS5pZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnModXJsLCBTVEFUVVMuQkFEX1JFUVVFU1QsIFwiUmVxdWVzdCBmb3IgJ1wiICsgY29sbGVjdGlvbk5hbWUgKyBcIicgaWQgZG9lcyBub3QgbWF0Y2ggaXRlbS5pZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlkID0gaXRlbS5pZDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXhpc3RpbmdJeCA9IHRoaXMuaW5kZXhPZihjb2xsZWN0aW9uLCBpZCk7XG4gICAgICAgIHZhciBib2R5ID0gdGhpcy5ib2RpZnkoaXRlbSk7XG4gICAgICAgIGlmIChleGlzdGluZ0l4ID4gLTEpIHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb25bZXhpc3RpbmdJeF0gPSBpdGVtO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLnB1dDIwNCA/XG4gICAgICAgICAgICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzLCBzdGF0dXM6IFNUQVRVUy5OT19DT05URU5UIH0gOlxuICAgICAgICAgICAgICAgIHsgaGVhZGVyczogaGVhZGVycywgYm9keTogYm9keSwgc3RhdHVzOiBTVEFUVVMuT0sgfTsgLy8gc3VjY2Vzc2Z1bDsgcmV0dXJuIGVudGl0eVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY29uZmlnLnB1dDQwNCkge1xuICAgICAgICAgICAgLy8gaXRlbSB0byB1cGRhdGUgbm90IGZvdW5kOyB1c2UgUE9TVCB0byBjcmVhdGUgbmV3IGl0ZW0gZm9yIHRoaXMgaWQuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5OT1RfRk9VTkQsIFwiJ1wiICsgY29sbGVjdGlvbk5hbWUgKyBcIicgaXRlbSB3aXRoIGlkPSdcIiArIGlkICsgXCIgbm90IGZvdW5kIGFuZCBtYXkgbm90IGJlIGNyZWF0ZWQgd2l0aCBQVVQ7IHVzZSBQT1NUIGluc3RlYWQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gY3JlYXRlIG5ldyBpdGVtIGZvciBpZCBub3QgZm91bmRcbiAgICAgICAgICAgIGNvbGxlY3Rpb24ucHVzaChpdGVtKTtcbiAgICAgICAgICAgIHJldHVybiB7IGhlYWRlcnM6IGhlYWRlcnMsIGJvZHk6IGJvZHksIHN0YXR1czogU1RBVFVTLkNSRUFURUQgfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLnJlbW92ZUJ5SWQgPSBmdW5jdGlvbiAoY29sbGVjdGlvbiwgaWQpIHtcbiAgICAgICAgdmFyIGl4ID0gdGhpcy5pbmRleE9mKGNvbGxlY3Rpb24sIGlkKTtcbiAgICAgICAgaWYgKGl4ID4gLTEpIHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb24uc3BsaWNlKGl4LCAxKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRlbGwgeW91ciBpbi1tZW0gXCJkYXRhYmFzZVwiIHRvIHJlc2V0LlxuICAgICAqIHJldHVybnMgT2JzZXJ2YWJsZSBvZiB0aGUgZGF0YWJhc2UgYmVjYXVzZSByZXNldHRpbmcgaXQgY291bGQgYmUgYXN5bmNcbiAgICAgKi9cbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUucmVzZXREYiA9IGZ1bmN0aW9uIChyZXFJbmZvKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuZGJSZWFkeVN1YmplY3QubmV4dChmYWxzZSk7XG4gICAgICAgIHZhciBkYiA9IHRoaXMuaW5NZW1EYlNlcnZpY2UuY3JlYXRlRGIocmVxSW5mbyk7XG4gICAgICAgIHZhciBkYiQgPSBkYiBpbnN0YW5jZW9mIE9ic2VydmFibGUgPyBkYiA6XG4gICAgICAgICAgICBpc1Byb21pc2UoZGIpID8gZnJvbVByb21pc2UoZGIpIDpcbiAgICAgICAgICAgICAgICBvZihkYik7XG4gICAgICAgIGZpcnN0LmNhbGwoZGIkKS5zdWJzY3JpYmUoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIF90aGlzLmRiID0gZDtcbiAgICAgICAgICAgIF90aGlzLmRiUmVhZHlTdWJqZWN0Lm5leHQodHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5kYlJlYWR5O1xuICAgIH07XG4gICAgcmV0dXJuIEJhY2tlbmRTZXJ2aWNlO1xufSgpKTtcbmV4cG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iYWNrZW5kLnNlcnZpY2UuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdG9yLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3NlclhociwgSGVhZGVycywgUmVhZHlTdGF0ZSwgUmVxdWVzdE1ldGhvZCwgUmVzcG9uc2UsIFJlc3BvbnNlT3B0aW9ucyBhcyBIdHRwUmVzcG9uc2VPcHRpb25zLCBVUkxTZWFyY2hQYXJhbXMsIFhIUkJhY2tlbmQsIFhTUkZTdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvci9tYXAnO1xuaW1wb3J0IHsgU1RBVFVTIH0gZnJvbSAnLi9odHRwLXN0YXR1cy1jb2Rlcyc7XG5pbXBvcnQgeyBJbk1lbW9yeUJhY2tlbmRDb25maWcsIEluTWVtb3J5QmFja2VuZENvbmZpZ0FyZ3MsIEluTWVtb3J5RGJTZXJ2aWNlIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSAnLi9iYWNrZW5kLnNlcnZpY2UnO1xuLyoqXG4gKiBGb3IgQW5ndWxhciBgSHR0cGAgc2ltdWxhdGUgdGhlIGJlaGF2aW9yIG9mIGEgUkVTVHkgd2ViIGFwaVxuICogYmFja2VkIGJ5IHRoZSBzaW1wbGUgaW4tbWVtb3J5IGRhdGEgc3RvcmUgcHJvdmlkZWQgYnkgdGhlIGluamVjdGVkIGBJbk1lbW9yeURiU2VydmljZWAuXG4gKiBDb25mb3JtcyBtb3N0bHkgdG8gYmVoYXZpb3IgZGVzY3JpYmVkIGhlcmU6XG4gKiBodHRwOi8vd3d3LnJlc3RhcGl0dXRvcmlhbC5jb20vbGVzc29ucy9odHRwbWV0aG9kcy5odG1sXG4gKlxuICogIyMjIFVzYWdlXG4gKlxuICogQ3JlYXRlIGFuIGluLW1lbW9yeSBkYXRhIHN0b3JlIGNsYXNzIHRoYXQgaW1wbGVtZW50cyBgSW5NZW1vcnlEYlNlcnZpY2VgLlxuICogQ2FsbCBgZm9yUm9vdGAgc3RhdGljIG1ldGhvZCB3aXRoIHRoaXMgc2VydmljZSBjbGFzcyBhbmQgb3B0aW9uYWwgY29uZmlndXJhdGlvbiBvYmplY3Q6XG4gKiBgYGBcbiAqIC8vIG90aGVyIGltcG9ydHNcbiAqIGltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbiAqIGltcG9ydCB7IEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZSB9IGZyb20gJ2FuZ3VsYXItaW4tbWVtb3J5LXdlYi1hcGknO1xuICpcbiAqIGltcG9ydCB7IEluTWVtSGVyb1NlcnZpY2UsIGluTWVtQ29uZmlnIH0gZnJvbSAnLi4vYXBpL2luLW1lbW9yeS1oZXJvLnNlcnZpY2UnO1xuICogQE5nTW9kdWxlKHtcbiAqICBpbXBvcnRzOiBbXG4gKiAgICBIdHRwTW9kdWxlLFxuICogICAgSHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlLmZvclJvb3QoSW5NZW1IZXJvU2VydmljZSwgaW5NZW1Db25maWcpLFxuICogICAgLi4uXG4gKiAgXSxcbiAqICAuLi5cbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgLi4uIH1cbiAqIGBgYFxuICovXG52YXIgSHR0cEJhY2tlbmRTZXJ2aWNlID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSHR0cEJhY2tlbmRTZXJ2aWNlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEh0dHBCYWNrZW5kU2VydmljZShpbmplY3RvciwgaW5NZW1EYlNlcnZpY2UsIGNvbmZpZykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBpbk1lbURiU2VydmljZSwgY29uZmlnKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5pbmplY3RvciA9IGluamVjdG9yO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEh0dHBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuY3JlYXRlQ29ubmVjdGlvbiA9IGZ1bmN0aW9uIChyZXEpIHtcbiAgICAgICAgdmFyIHJlc3BvbnNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSB0aGlzLmhhbmRsZVJlcXVlc3QocmVxKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBlcnJvci5tZXNzYWdlIHx8IGVycm9yO1xuICAgICAgICAgICAgdmFyIHJlc09wdGlvbnNfMSA9IHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnMocmVxLnVybCwgU1RBVFVTLklOVEVSTkFMX1NFUlZFUl9FUlJPUiwgXCJcIiArIGVycik7XG4gICAgICAgICAgICByZXNwb25zZSA9IHRoaXMuY3JlYXRlUmVzcG9uc2UkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc09wdGlvbnNfMTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlYWR5U3RhdGU6IFJlYWR5U3RhdGUuRG9uZSxcbiAgICAgICAgICAgIHJlcXVlc3Q6IHJlcSxcbiAgICAgICAgICAgIHJlc3BvbnNlOiByZXNwb25zZVxuICAgICAgICB9O1xuICAgIH07XG4gICAgLy8vLyAgcHJvdGVjdGVkIG92ZXJyaWRlcyAvLy8vL1xuICAgIEh0dHBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuZ2V0SnNvbkJvZHkgPSBmdW5jdGlvbiAocmVxKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcmVxLmpzb24oKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdmFyIG1zZyA9IFwiJ1wiICsgcmVxLnVybCArIFwiJyByZXF1ZXN0IGJvZHktdG8tanNvbiBlcnJvclxcblwiICsgSlNPTi5zdHJpbmdpZnkoZSk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSHR0cEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5nZXRSZXF1ZXN0TWV0aG9kID0gZnVuY3Rpb24gKHJlcSkge1xuICAgICAgICByZXR1cm4gUmVxdWVzdE1ldGhvZFtyZXEubWV0aG9kIHx8IDBdLnRvTG93ZXJDYXNlKCk7XG4gICAgfTtcbiAgICBIdHRwQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmNyZWF0ZUhlYWRlcnMgPSBmdW5jdGlvbiAoaGVhZGVycykge1xuICAgICAgICByZXR1cm4gbmV3IEhlYWRlcnMoaGVhZGVycyk7XG4gICAgfTtcbiAgICBIdHRwQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmNyZWF0ZVF1ZXJ5TWFwID0gZnVuY3Rpb24gKHNlYXJjaCkge1xuICAgICAgICByZXR1cm4gc2VhcmNoID8gbmV3IFVSTFNlYXJjaFBhcmFtcyhzZWFyY2gpLnBhcmFtc01hcCA6IG5ldyBNYXAoKTtcbiAgICB9O1xuICAgIEh0dHBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuY3JlYXRlUmVzcG9uc2UkZnJvbVJlc3BvbnNlT3B0aW9ucyQgPSBmdW5jdGlvbiAocmVzT3B0aW9ucyQpIHtcbiAgICAgICAgcmV0dXJuIG1hcC5jYWxsKHJlc09wdGlvbnMkLCBmdW5jdGlvbiAob3B0cykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShuZXcgSHR0cFJlc3BvbnNlT3B0aW9ucyhvcHRzKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgSHR0cEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5jcmVhdGVQYXNzVGhydUJhY2tlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBjb3BpZWQgZnJvbSBAYW5ndWxhci9odHRwL2JhY2tlbmRzL3hocl9iYWNrZW5kXG4gICAgICAgICAgICB2YXIgYnJvd3NlclhociA9IHRoaXMuaW5qZWN0b3IuZ2V0KEJyb3dzZXJYaHIpO1xuICAgICAgICAgICAgdmFyIGJhc2VSZXNwb25zZU9wdGlvbnMgPSB0aGlzLmluamVjdG9yLmdldChIdHRwUmVzcG9uc2VPcHRpb25zKTtcbiAgICAgICAgICAgIHZhciB4c3JmU3RyYXRlZ3kgPSB0aGlzLmluamVjdG9yLmdldChYU1JGU3RyYXRlZ3kpO1xuICAgICAgICAgICAgdmFyIHhockJhY2tlbmRfMSA9IG5ldyBYSFJCYWNrZW5kKGJyb3dzZXJYaHIsIGJhc2VSZXNwb25zZU9wdGlvbnMsIHhzcmZTdHJhdGVneSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZTogZnVuY3Rpb24gKHJlcSkgeyByZXR1cm4geGhyQmFja2VuZF8xLmNyZWF0ZUNvbm5lY3Rpb24ocmVxKS5yZXNwb25zZTsgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZS5tZXNzYWdlID0gJ0Nhbm5vdCBjcmVhdGUgcGFzc1RocnU0MDQgYmFja2VuZDsgJyArIChlLm1lc3NhZ2UgfHwgJycpO1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEh0dHBCYWNrZW5kU2VydmljZTtcbn0oQmFja2VuZFNlcnZpY2UpKTtcbmV4cG9ydCB7IEh0dHBCYWNrZW5kU2VydmljZSB9O1xuSHR0cEJhY2tlbmRTZXJ2aWNlLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBJbmplY3RhYmxlIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5IdHRwQmFja2VuZFNlcnZpY2UuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgeyB0eXBlOiBJbmplY3RvciwgfSxcbiAgICB7IHR5cGU6IEluTWVtb3J5RGJTZXJ2aWNlLCB9LFxuICAgIHsgdHlwZTogSW5NZW1vcnlCYWNrZW5kQ29uZmlnQXJncywgZGVjb3JhdG9yczogW3sgdHlwZTogSW5qZWN0LCBhcmdzOiBbSW5NZW1vcnlCYWNrZW5kQ29uZmlnLF0gfSwgeyB0eXBlOiBPcHRpb25hbCB9LF0gfSxcbl07IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1odHRwLWJhY2tlbmQuc2VydmljZS5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zLCBIdHRwUmVzcG9uc2UsIEh0dHBYaHJCYWNrZW5kLCBYaHJGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvci9tYXAnO1xuaW1wb3J0IHsgU1RBVFVTIH0gZnJvbSAnLi9odHRwLXN0YXR1cy1jb2Rlcyc7XG5pbXBvcnQgeyBJbk1lbW9yeUJhY2tlbmRDb25maWcsIEluTWVtb3J5QmFja2VuZENvbmZpZ0FyZ3MsIEluTWVtb3J5RGJTZXJ2aWNlIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSAnLi9iYWNrZW5kLnNlcnZpY2UnO1xuLyoqXG4gKiBGb3IgQW5ndWxhciBgSHR0cENsaWVudGAgc2ltdWxhdGUgdGhlIGJlaGF2aW9yIG9mIGEgUkVTVHkgd2ViIGFwaVxuICogYmFja2VkIGJ5IHRoZSBzaW1wbGUgaW4tbWVtb3J5IGRhdGEgc3RvcmUgcHJvdmlkZWQgYnkgdGhlIGluamVjdGVkIGBJbk1lbW9yeURiU2VydmljZWAuXG4gKiBDb25mb3JtcyBtb3N0bHkgdG8gYmVoYXZpb3IgZGVzY3JpYmVkIGhlcmU6XG4gKiBodHRwOi8vd3d3LnJlc3RhcGl0dXRvcmlhbC5jb20vbGVzc29ucy9odHRwbWV0aG9kcy5odG1sXG4gKlxuICogIyMjIFVzYWdlXG4gKlxuICogQ3JlYXRlIGFuIGluLW1lbW9yeSBkYXRhIHN0b3JlIGNsYXNzIHRoYXQgaW1wbGVtZW50cyBgSW5NZW1vcnlEYlNlcnZpY2VgLlxuICogQ2FsbCBgY29uZmlnYCBzdGF0aWMgbWV0aG9kIHdpdGggdGhpcyBzZXJ2aWNlIGNsYXNzIGFuZCBvcHRpb25hbCBjb25maWd1cmF0aW9uIG9iamVjdDpcbiAqIGBgYFxuICogLy8gb3RoZXIgaW1wb3J0c1xuICogaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbiAqIGltcG9ydCB7IEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZSB9IGZyb20gJ2FuZ3VsYXItaW4tbWVtb3J5LXdlYi1hcGknO1xuICpcbiAqIGltcG9ydCB7IEluTWVtSGVyb1NlcnZpY2UsIGluTWVtQ29uZmlnIH0gZnJvbSAnLi4vYXBpL2luLW1lbW9yeS1oZXJvLnNlcnZpY2UnO1xuICogQE5nTW9kdWxlKHtcbiAqICBpbXBvcnRzOiBbXG4gKiAgICBIdHRwTW9kdWxlLFxuICogICAgSHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlLmZvclJvb3QoSW5NZW1IZXJvU2VydmljZSwgaW5NZW1Db25maWcpLFxuICogICAgLi4uXG4gKiAgXSxcbiAqICAuLi5cbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgLi4uIH1cbiAqIGBgYFxuICovXG52YXIgSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEh0dHBDbGllbnRCYWNrZW5kU2VydmljZShpbk1lbURiU2VydmljZSwgY29uZmlnLCB4aHJGYWN0b3J5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGluTWVtRGJTZXJ2aWNlLCBjb25maWcpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnhockZhY3RvcnkgPSB4aHJGYWN0b3J5O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEh0dHBDbGllbnRCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuaGFuZGxlID0gZnVuY3Rpb24gKHJlcSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUmVxdWVzdChyZXEpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdmFyIGVyciA9IGVycm9yLm1lc3NhZ2UgfHwgZXJyb3I7XG4gICAgICAgICAgICB2YXIgcmVzT3B0aW9uc18xID0gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyhyZXEudXJsLCBTVEFUVVMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLCBcIlwiICsgZXJyKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVJlc3BvbnNlJChmdW5jdGlvbiAoKSB7IHJldHVybiByZXNPcHRpb25zXzE7IH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLy8vICBwcm90ZWN0ZWQgb3ZlcnJpZGVzIC8vLy8vXG4gICAgSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5nZXRKc29uQm9keSA9IGZ1bmN0aW9uIChyZXEpIHtcbiAgICAgICAgcmV0dXJuIHJlcS5ib2R5O1xuICAgIH07XG4gICAgSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5nZXRSZXF1ZXN0TWV0aG9kID0gZnVuY3Rpb24gKHJlcSkge1xuICAgICAgICByZXR1cm4gKHJlcS5tZXRob2QgfHwgJ2dldCcpLnRvTG93ZXJDYXNlKCk7XG4gICAgfTtcbiAgICBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmNyZWF0ZUhlYWRlcnMgPSBmdW5jdGlvbiAoaGVhZGVycykge1xuICAgICAgICByZXR1cm4gbmV3IEh0dHBIZWFkZXJzKGhlYWRlcnMpO1xuICAgIH07XG4gICAgSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5jcmVhdGVRdWVyeU1hcCA9IGZ1bmN0aW9uIChzZWFyY2gpIHtcbiAgICAgICAgdmFyIG1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgaWYgKHNlYXJjaCkge1xuICAgICAgICAgICAgdmFyIHBhcmFtc18xID0gbmV3IEh0dHBQYXJhbXMoeyBmcm9tU3RyaW5nOiBzZWFyY2ggfSk7XG4gICAgICAgICAgICBwYXJhbXNfMS5rZXlzKCkuZm9yRWFjaChmdW5jdGlvbiAocCkgeyByZXR1cm4gbWFwLnNldChwLCBwYXJhbXNfMS5nZXRBbGwocCkpOyB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWFwO1xuICAgIH07XG4gICAgSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5jcmVhdGVSZXNwb25zZSRmcm9tUmVzcG9uc2VPcHRpb25zJCA9IGZ1bmN0aW9uIChyZXNPcHRpb25zJCkge1xuICAgICAgICByZXR1cm4gbWFwLmNhbGwocmVzT3B0aW9ucyQsIGZ1bmN0aW9uIChvcHRzKSB7IHJldHVybiBuZXcgSHR0cFJlc3BvbnNlKG9wdHMpOyB9KTtcbiAgICB9O1xuICAgIEh0dHBDbGllbnRCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuY3JlYXRlUGFzc1RocnVCYWNrZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBIdHRwWGhyQmFja2VuZCh0aGlzLnhockZhY3RvcnkpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChleCkge1xuICAgICAgICAgICAgZXgubWVzc2FnZSA9ICdDYW5ub3QgY3JlYXRlIHBhc3NUaHJ1NDA0IGJhY2tlbmQ7ICcgKyAoZXgubWVzc2FnZSB8fCAnJyk7XG4gICAgICAgICAgICB0aHJvdyBleDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEh0dHBDbGllbnRCYWNrZW5kU2VydmljZTtcbn0oQmFja2VuZFNlcnZpY2UpKTtcbmV4cG9ydCB7IEh0dHBDbGllbnRCYWNrZW5kU2VydmljZSB9O1xuSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBJbmplY3RhYmxlIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5IdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgeyB0eXBlOiBJbk1lbW9yeURiU2VydmljZSwgfSxcbiAgICB7IHR5cGU6IEluTWVtb3J5QmFja2VuZENvbmZpZ0FyZ3MsIGRlY29yYXRvcnM6IFt7IHR5cGU6IEluamVjdCwgYXJnczogW0luTWVtb3J5QmFja2VuZENvbmZpZyxdIH0sIHsgdHlwZTogT3B0aW9uYWwgfSxdIH0sXG4gICAgeyB0eXBlOiBYaHJGYWN0b3J5LCB9LFxuXTsgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0dHAtY2xpZW50LWJhY2tlbmQuc2VydmljZS5qcy5tYXAiLCIvLy8vLy8gSHR0cC1Pbmx5IHZlcnNpb24gLy8vL1xuaW1wb3J0IHsgSW5qZWN0b3IsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBYSFJCYWNrZW5kIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBJbk1lbW9yeUJhY2tlbmRDb25maWcsIEluTWVtb3J5RGJTZXJ2aWNlIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEh0dHBCYWNrZW5kU2VydmljZSB9IGZyb20gJy4vaHR0cC1iYWNrZW5kLnNlcnZpY2UnO1xuLy8gSW50ZXJuYWwgLSBDcmVhdGVzIHRoZSBpbi1tZW0gYmFja2VuZCBmb3IgdGhlIEh0dHAgbW9kdWxlXG4vLyBBb1QgcmVxdWlyZXMgZmFjdG9yeSB0byBiZSBleHBvcnRlZFxuZXhwb3J0IGZ1bmN0aW9uIGh0dHBJbk1lbUJhY2tlbmRTZXJ2aWNlRmFjdG9yeShpbmplY3RvciwgZGJTZXJ2aWNlLCBvcHRpb25zKSB7XG4gICAgdmFyIGJhY2tlbmQgPSBuZXcgSHR0cEJhY2tlbmRTZXJ2aWNlKGluamVjdG9yLCBkYlNlcnZpY2UsIG9wdGlvbnMpO1xuICAgIHJldHVybiBiYWNrZW5kO1xufVxudmFyIEh0dHBJbk1lbW9yeVdlYkFwaU1vZHVsZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSHR0cEluTWVtb3J5V2ViQXBpTW9kdWxlKCkge1xuICAgIH1cbiAgICAvKipcbiAgICAqICBSZWRpcmVjdCB0aGUgQW5ndWxhciBgSHR0cGAgWEhSIGNhbGxzXG4gICAgKiAgdG8gaW4tbWVtb3J5IGRhdGEgc3RvcmUgdGhhdCBpbXBsZW1lbnRzIGBJbk1lbW9yeURiU2VydmljZWAuXG4gICAgKiAgd2l0aCBjbGFzcyB0aGF0IGltcGxlbWVudHMgSW5NZW1vcnlEYlNlcnZpY2UgYW5kIGNyZWF0ZXMgYW4gaW4tbWVtb3J5IGRhdGFiYXNlLlxuICAgICpcbiAgICAqICBVc3VhbGx5IGltcG9ydGVkIGluIHRoZSByb290IGFwcGxpY2F0aW9uIG1vZHVsZS5cbiAgICAqICBDYW4gaW1wb3J0IGluIGEgbGF6eSBmZWF0dXJlIG1vZHVsZSB0b28sIHdoaWNoIHdpbGwgc2hhZG93IG1vZHVsZXMgbG9hZGVkIGVhcmxpZXJcbiAgICAqXG4gICAgKiBAcGFyYW0ge1R5cGV9IGRiQ3JlYXRvciAtIENsYXNzIHRoYXQgY3JlYXRlcyBzZWVkIGRhdGEgZm9yIGluLW1lbW9yeSBkYXRhYmFzZS4gTXVzdCBpbXBsZW1lbnQgSW5NZW1vcnlEYlNlcnZpY2UuXG4gICAgKiBAcGFyYW0ge0luTWVtb3J5QmFja2VuZENvbmZpZ0FyZ3N9IFtvcHRpb25zXVxuICAgICpcbiAgICAqIEBleGFtcGxlXG4gICAgKiBIdHRwSW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yUm9vdChkYkNyZWF0b3IpO1xuICAgICogSHR0cEluTWVtb3J5V2ViQXBpTW9kdWxlLmZvclJvb3QoZGJDcmVhdG9yLCB7dXNlVmFsdWU6IHtkZWxheTo2MDB9fSk7XG4gICAgKi9cbiAgICBIdHRwSW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yUm9vdCA9IGZ1bmN0aW9uIChkYkNyZWF0b3IsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBIdHRwSW5NZW1vcnlXZWJBcGlNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IEluTWVtb3J5RGJTZXJ2aWNlLCB1c2VDbGFzczogZGJDcmVhdG9yIH0sXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBJbk1lbW9yeUJhY2tlbmRDb25maWcsIHVzZVZhbHVlOiBvcHRpb25zIH0sXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBYSFJCYWNrZW5kLFxuICAgICAgICAgICAgICAgICAgICB1c2VGYWN0b3J5OiBodHRwSW5NZW1CYWNrZW5kU2VydmljZUZhY3RvcnksXG4gICAgICAgICAgICAgICAgICAgIGRlcHM6IFtJbmplY3RvciwgSW5NZW1vcnlEYlNlcnZpY2UsIEluTWVtb3J5QmFja2VuZENvbmZpZ10gfVxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAqXG4gICAqIEVuYWJsZSBhbmQgY29uZmlndXJlIHRoZSBpbi1tZW1vcnkgd2ViIGFwaSBpbiBhIGxhenktbG9hZGVkIGZlYXR1cmUgbW9kdWxlLlxuICAgKiBTYW1lIGFzIGBmb3JSb290YC5cbiAgICogVGhpcyBpcyBhIGZlZWwtZ29vZCBtZXRob2Qgc28geW91IGNhbiBmb2xsb3cgdGhlIEFuZ3VsYXIgc3R5bGUgZ3VpZGUgZm9yIGxhenktbG9hZGVkIG1vZHVsZXMuXG4gICAqL1xuICAgIEh0dHBJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JGZWF0dXJlID0gZnVuY3Rpb24gKGRiQ3JlYXRvciwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gSHR0cEluTWVtb3J5V2ViQXBpTW9kdWxlLmZvclJvb3QoZGJDcmVhdG9yLCBvcHRpb25zKTtcbiAgICB9O1xuICAgIHJldHVybiBIdHRwSW5NZW1vcnlXZWJBcGlNb2R1bGU7XG59KCkpO1xuZXhwb3J0IHsgSHR0cEluTWVtb3J5V2ViQXBpTW9kdWxlIH07XG5IdHRwSW5NZW1vcnlXZWJBcGlNb2R1bGUuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IE5nTW9kdWxlLCBhcmdzOiBbe30sXSB9LFxuXTtcbi8qKiBAbm9jb2xsYXBzZSAqL1xuSHR0cEluTWVtb3J5V2ViQXBpTW9kdWxlLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1odHRwLWluLW1lbW9yeS13ZWItYXBpLm1vZHVsZS5qcy5tYXAiLCIvLy8vLy8gSHR0cENsaWVudC1Pbmx5IHZlcnNpb24gLy8vL1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBCYWNrZW5kLCBYaHJGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5NZW1vcnlCYWNrZW5kQ29uZmlnLCBJbk1lbW9yeURiU2VydmljZSB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UgfSBmcm9tICcuL2h0dHAtY2xpZW50LWJhY2tlbmQuc2VydmljZSc7XG4vLyBJbnRlcm5hbCAtIENyZWF0ZXMgdGhlIGluLW1lbSBiYWNrZW5kIGZvciB0aGUgSHR0cENsaWVudCBtb2R1bGVcbi8vIEFvVCByZXF1aXJlcyBmYWN0b3J5IHRvIGJlIGV4cG9ydGVkXG5leHBvcnQgZnVuY3Rpb24gaHR0cENsaWVudEluTWVtQmFja2VuZFNlcnZpY2VGYWN0b3J5KGRiU2VydmljZSwgb3B0aW9ucywgeGhyRmFjdG9yeSkge1xuICAgIHZhciBiYWNrZW5kID0gbmV3IEh0dHBDbGllbnRCYWNrZW5kU2VydmljZShkYlNlcnZpY2UsIG9wdGlvbnMsIHhockZhY3RvcnkpO1xuICAgIHJldHVybiBiYWNrZW5kO1xufVxudmFyIEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlKCkge1xuICAgIH1cbiAgICAvKipcbiAgICAqICBSZWRpcmVjdCB0aGUgQW5ndWxhciBgSHR0cENsaWVudGAgWEhSIGNhbGxzXG4gICAgKiAgdG8gaW4tbWVtb3J5IGRhdGEgc3RvcmUgdGhhdCBpbXBsZW1lbnRzIGBJbk1lbW9yeURiU2VydmljZWAuXG4gICAgKiAgd2l0aCBjbGFzcyB0aGF0IGltcGxlbWVudHMgSW5NZW1vcnlEYlNlcnZpY2UgYW5kIGNyZWF0ZXMgYW4gaW4tbWVtb3J5IGRhdGFiYXNlLlxuICAgICpcbiAgICAqICBVc3VhbGx5IGltcG9ydGVkIGluIHRoZSByb290IGFwcGxpY2F0aW9uIG1vZHVsZS5cbiAgICAqICBDYW4gaW1wb3J0IGluIGEgbGF6eSBmZWF0dXJlIG1vZHVsZSB0b28sIHdoaWNoIHdpbGwgc2hhZG93IG1vZHVsZXMgbG9hZGVkIGVhcmxpZXJcbiAgICAqXG4gICAgKiBAcGFyYW0ge1R5cGV9IGRiQ3JlYXRvciAtIENsYXNzIHRoYXQgY3JlYXRlcyBzZWVkIGRhdGEgZm9yIGluLW1lbW9yeSBkYXRhYmFzZS4gTXVzdCBpbXBsZW1lbnQgSW5NZW1vcnlEYlNlcnZpY2UuXG4gICAgKiBAcGFyYW0ge0luTWVtb3J5QmFja2VuZENvbmZpZ0FyZ3N9IFtvcHRpb25zXVxuICAgICpcbiAgICAqIEBleGFtcGxlXG4gICAgKiBIdHRwSW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yUm9vdChkYkNyZWF0b3IpO1xuICAgICogSHR0cEluTWVtb3J5V2ViQXBpTW9kdWxlLmZvclJvb3QoZGJDcmVhdG9yLCB7dXNlVmFsdWU6IHtkZWxheTo2MDB9fSk7XG4gICAgKi9cbiAgICBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yUm9vdCA9IGZ1bmN0aW9uIChkYkNyZWF0b3IsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IEluTWVtb3J5RGJTZXJ2aWNlLCB1c2VDbGFzczogZGJDcmVhdG9yIH0sXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBJbk1lbW9yeUJhY2tlbmRDb25maWcsIHVzZVZhbHVlOiBvcHRpb25zIH0sXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBIdHRwQmFja2VuZCxcbiAgICAgICAgICAgICAgICAgICAgdXNlRmFjdG9yeTogaHR0cENsaWVudEluTWVtQmFja2VuZFNlcnZpY2VGYWN0b3J5LFxuICAgICAgICAgICAgICAgICAgICBkZXBzOiBbSW5NZW1vcnlEYlNlcnZpY2UsIEluTWVtb3J5QmFja2VuZENvbmZpZywgWGhyRmFjdG9yeV0gfVxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAqXG4gICAqIEVuYWJsZSBhbmQgY29uZmlndXJlIHRoZSBpbi1tZW1vcnkgd2ViIGFwaSBpbiBhIGxhenktbG9hZGVkIGZlYXR1cmUgbW9kdWxlLlxuICAgKiBTYW1lIGFzIGBmb3JSb290YC5cbiAgICogVGhpcyBpcyBhIGZlZWwtZ29vZCBtZXRob2Qgc28geW91IGNhbiBmb2xsb3cgdGhlIEFuZ3VsYXIgc3R5bGUgZ3VpZGUgZm9yIGxhenktbG9hZGVkIG1vZHVsZXMuXG4gICAqL1xuICAgIEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JGZWF0dXJlID0gZnVuY3Rpb24gKGRiQ3JlYXRvciwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gSHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlLmZvclJvb3QoZGJDcmVhdG9yLCBvcHRpb25zKTtcbiAgICB9O1xuICAgIHJldHVybiBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGU7XG59KCkpO1xuZXhwb3J0IHsgSHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlIH07XG5IdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IE5nTW9kdWxlLCBhcmdzOiBbe30sXSB9LFxuXTtcbi8qKiBAbm9jb2xsYXBzZSAqL1xuSHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1odHRwLWNsaWVudC1pbi1tZW1vcnktd2ViLWFwaS5tb2R1bGUuanMubWFwIiwiLy8vLy8vIEZvciBhcHBzIHdpdGggYm90aCBIdHRwIGFuZCBIdHRwQ2xpZW50IC8vLy9cbmltcG9ydCB7IEluamVjdG9yLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgWEhSQmFja2VuZCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgSHR0cEJhY2tlbmQsIFhockZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbk1lbW9yeUJhY2tlbmRDb25maWcsIEluTWVtb3J5RGJTZXJ2aWNlIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IGh0dHBJbk1lbUJhY2tlbmRTZXJ2aWNlRmFjdG9yeSB9IGZyb20gJy4vaHR0cC1pbi1tZW1vcnktd2ViLWFwaS5tb2R1bGUnO1xuaW1wb3J0IHsgaHR0cENsaWVudEluTWVtQmFja2VuZFNlcnZpY2VGYWN0b3J5IH0gZnJvbSAnLi9odHRwLWNsaWVudC1pbi1tZW1vcnktd2ViLWFwaS5tb2R1bGUnO1xudmFyIEluTWVtb3J5V2ViQXBpTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBJbk1lbW9yeVdlYkFwaU1vZHVsZSgpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgKiAgUmVkaXJlY3QgQk9USCBBbmd1bGFyIGBIdHRwYCBhbmQgYEh0dHBDbGllbnRgIFhIUiBjYWxsc1xuICAgICogIHRvIGluLW1lbW9yeSBkYXRhIHN0b3JlIHRoYXQgaW1wbGVtZW50cyBgSW5NZW1vcnlEYlNlcnZpY2VgLlxuICAgICogIHdpdGggY2xhc3MgdGhhdCBpbXBsZW1lbnRzIEluTWVtb3J5RGJTZXJ2aWNlIGFuZCBjcmVhdGVzIGFuIGluLW1lbW9yeSBkYXRhYmFzZS5cbiAgICAqXG4gICAgKiAgVXN1YWxseSBpbXBvcnRlZCBpbiB0aGUgcm9vdCBhcHBsaWNhdGlvbiBtb2R1bGUuXG4gICAgKiAgQ2FuIGltcG9ydCBpbiBhIGxhenkgZmVhdHVyZSBtb2R1bGUgdG9vLCB3aGljaCB3aWxsIHNoYWRvdyBtb2R1bGVzIGxvYWRlZCBlYXJsaWVyXG4gICAgKlxuICAgICogQHBhcmFtIHtUeXBlfSBkYkNyZWF0b3IgLSBDbGFzcyB0aGF0IGNyZWF0ZXMgc2VlZCBkYXRhIGZvciBpbi1tZW1vcnkgZGF0YWJhc2UuIE11c3QgaW1wbGVtZW50IEluTWVtb3J5RGJTZXJ2aWNlLlxuICAgICogQHBhcmFtIHtJbk1lbW9yeUJhY2tlbmRDb25maWdBcmdzfSBbb3B0aW9uc11cbiAgICAqXG4gICAgKiBAZXhhbXBsZVxuICAgICogSW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yUm9vdChkYkNyZWF0b3IpO1xuICAgICogSW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yUm9vdChkYkNyZWF0b3IsIHt1c2VWYWx1ZToge2RlbGF5OjYwMH19KTtcbiAgICAqL1xuICAgIEluTWVtb3J5V2ViQXBpTW9kdWxlLmZvclJvb3QgPSBmdW5jdGlvbiAoZGJDcmVhdG9yLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogSW5NZW1vcnlXZWJBcGlNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IEluTWVtb3J5RGJTZXJ2aWNlLCB1c2VDbGFzczogZGJDcmVhdG9yIH0sXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBJbk1lbW9yeUJhY2tlbmRDb25maWcsIHVzZVZhbHVlOiBvcHRpb25zIH0sXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBYSFJCYWNrZW5kLFxuICAgICAgICAgICAgICAgICAgICB1c2VGYWN0b3J5OiBodHRwSW5NZW1CYWNrZW5kU2VydmljZUZhY3RvcnksXG4gICAgICAgICAgICAgICAgICAgIGRlcHM6IFtJbmplY3RvciwgSW5NZW1vcnlEYlNlcnZpY2UsIEluTWVtb3J5QmFja2VuZENvbmZpZ10gfSxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IEh0dHBCYWNrZW5kLFxuICAgICAgICAgICAgICAgICAgICB1c2VGYWN0b3J5OiBodHRwQ2xpZW50SW5NZW1CYWNrZW5kU2VydmljZUZhY3RvcnksXG4gICAgICAgICAgICAgICAgICAgIGRlcHM6IFtJbk1lbW9yeURiU2VydmljZSwgSW5NZW1vcnlCYWNrZW5kQ29uZmlnLCBYaHJGYWN0b3J5XSB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEVuYWJsZSBhbmQgY29uZmlndXJlIHRoZSBpbi1tZW1vcnkgd2ViIGFwaSBpbiBhIGxhenktbG9hZGVkIGZlYXR1cmUgbW9kdWxlLlxuICAgICAqIFNhbWUgYXMgYGZvclJvb3RgLlxuICAgICAqIFRoaXMgaXMgYSBmZWVsLWdvb2QgbWV0aG9kIHNvIHlvdSBjYW4gZm9sbG93IHRoZSBBbmd1bGFyIHN0eWxlIGd1aWRlIGZvciBsYXp5LWxvYWRlZCBtb2R1bGVzLlxuICAgICAqL1xuICAgIEluTWVtb3J5V2ViQXBpTW9kdWxlLmZvckZlYXR1cmUgPSBmdW5jdGlvbiAoZGJDcmVhdG9yLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290KGRiQ3JlYXRvciwgb3B0aW9ucyk7XG4gICAgfTtcbiAgICByZXR1cm4gSW5NZW1vcnlXZWJBcGlNb2R1bGU7XG59KCkpO1xuZXhwb3J0IHsgSW5NZW1vcnlXZWJBcGlNb2R1bGUgfTtcbkluTWVtb3J5V2ViQXBpTW9kdWxlLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBOZ01vZHVsZSwgYXJnczogW3t9LF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbkluTWVtb3J5V2ViQXBpTW9kdWxlLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbi1tZW1vcnktd2ViLWFwaS5tb2R1bGUuanMubWFwIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJCZWhhdmlvclN1YmplY3QiLCJmaXJzdCIsImNvbmNhdE1hcCIsImRlbGF5IiwiT2JzZXJ2YWJsZSIsImlzUHJvbWlzZSIsImZyb21Qcm9taXNlIiwib2YiLCJ0aGlzIiwiUmVhZHlTdGF0ZSIsIlJlcXVlc3RNZXRob2QiLCJIZWFkZXJzIiwiVVJMU2VhcmNoUGFyYW1zIiwibWFwIiwiUmVzcG9uc2UiLCJIdHRwUmVzcG9uc2VPcHRpb25zIiwiQnJvd3NlclhociIsIlhTUkZTdHJhdGVneSIsIlhIUkJhY2tlbmQiLCJJbmplY3RvciIsIkluamVjdCIsIk9wdGlvbmFsIiwiX19leHRlbmRzIiwiSHR0cEhlYWRlcnMiLCJIdHRwUGFyYW1zIiwiSHR0cFJlc3BvbnNlIiwiSHR0cFhockJhY2tlbmQiLCJYaHJGYWN0b3J5IiwiTmdNb2R1bGUiLCJIdHRwQmFja2VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sSUFBSSxNQUFNLEdBQUc7SUFDaEIsUUFBUSxFQUFFLEdBQUc7SUFDYixtQkFBbUIsRUFBRSxHQUFHO0lBQ3hCLEVBQUUsRUFBRSxHQUFHO0lBQ1AsT0FBTyxFQUFFLEdBQUc7SUFDWixRQUFRLEVBQUUsR0FBRztJQUNiLDZCQUE2QixFQUFFLEdBQUc7SUFDbEMsVUFBVSxFQUFFLEdBQUc7SUFDZixhQUFhLEVBQUUsR0FBRztJQUNsQixlQUFlLEVBQUUsR0FBRztJQUNwQixnQkFBZ0IsRUFBRSxHQUFHO0lBQ3JCLGtCQUFrQixFQUFFLEdBQUc7SUFDdkIsS0FBSyxFQUFFLEdBQUc7SUFDVixTQUFTLEVBQUUsR0FBRztJQUNkLFlBQVksRUFBRSxHQUFHO0lBQ2pCLFNBQVMsRUFBRSxHQUFHO0lBQ2Qsa0JBQWtCLEVBQUUsR0FBRztJQUN2QixXQUFXLEVBQUUsR0FBRztJQUNoQixZQUFZLEVBQUUsR0FBRztJQUNqQixnQkFBZ0IsRUFBRSxHQUFHO0lBQ3JCLFNBQVMsRUFBRSxHQUFHO0lBQ2QsU0FBUyxFQUFFLEdBQUc7SUFDZCxrQkFBa0IsRUFBRSxHQUFHO0lBQ3ZCLGNBQWMsRUFBRSxH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