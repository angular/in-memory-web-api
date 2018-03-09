(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs/Observable'), require('rxjs/BehaviorSubject'), require('rxjs/observable/of'), require('rxjs/observable/fromPromise'), require('rxjs/util/isPromise'), require('rxjs/operator/concatMap'), require('rxjs/operator/first'), require('@angular/core'), require('@angular/http'), require('rxjs/operator/map'), require('@angular/common/http')) :
	typeof define === 'function' && define.amd ? define(['exports', 'rxjs/Observable', 'rxjs/BehaviorSubject', 'rxjs/observable/of', 'rxjs/observable/fromPromise', 'rxjs/util/isPromise', 'rxjs/operator/concatMap', 'rxjs/operator/first', '@angular/core', '@angular/http', 'rxjs/operator/map', '@angular/common/http'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.inMemoryWebApi = {}),global.Rx,global.Rx,global.Rx,global.Rx,global.Rx,global.Rx,global.Rx,global.ng.core,global.ng.http,global.Rx,global.ng.common.http));
}(this, (function (exports,Observable,BehaviorSubject,of,fromPromise,isPromise,concatMap,first,core,http,map,http$1) { 'use strict';

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

// Replaces use of RxJS delay. See v0.5.4.
/** adds specified delay (in ms) to both next and error channels of the response observable */
function delayResponse(response$, delayMs) {
    return new Observable.Observable(function (observer) {
        var completePending = false;
        var nextPending = false;
        var subscription = response$.subscribe(function (value) {
            nextPending = true;
            setTimeout(function () {
                observer.next(value);
                if (completePending) {
                    observer.complete();
                }
            }, delayMs);
        }, function (error) { return setTimeout(function () { return observer.error(error); }, delayMs); }, function () {
            completePending = true;
            if (!nextPending) {
                observer.complete();
            }
        });
        return function () {
            return subscription.unsubscribe();
        };
    });
}

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
        var url = req.urlWithParams ? req.urlWithParams : req.url;
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
        return d === 0 ? response : delayResponse(response, d || 500);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LXdlYi1hcGkudW1kLmpzIiwic291cmNlcyI6WyIuLi9zcmMvaW4tbWVtL2h0dHAtc3RhdHVzLWNvZGVzLmpzIiwiLi4vc3JjL2luLW1lbS9kZWxheS1yZXNwb25zZS5qcyIsIi4uL3NyYy9pbi1tZW0vaW50ZXJmYWNlcy5qcyIsIi4uL3NyYy9pbi1tZW0vYmFja2VuZC5zZXJ2aWNlLmpzIiwiLi4vc3JjL2luLW1lbS9odHRwLWJhY2tlbmQuc2VydmljZS5qcyIsIi4uL3NyYy9pbi1tZW0vaHR0cC1jbGllbnQtYmFja2VuZC5zZXJ2aWNlLmpzIiwiLi4vc3JjL2luLW1lbS9odHRwLWluLW1lbW9yeS13ZWItYXBpLm1vZHVsZS5qcyIsIi4uL3NyYy9pbi1tZW0vaHR0cC1jbGllbnQtaW4tbWVtb3J5LXdlYi1hcGkubW9kdWxlLmpzIiwiLi4vc3JjL2luLW1lbS9pbi1tZW1vcnktd2ViLWFwaS5tb2R1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBTVEFUVVMgPSB7XG4gICAgQ09OVElOVUU6IDEwMCxcbiAgICBTV0lUQ0hJTkdfUFJPVE9DT0xTOiAxMDEsXG4gICAgT0s6IDIwMCxcbiAgICBDUkVBVEVEOiAyMDEsXG4gICAgQUNDRVBURUQ6IDIwMixcbiAgICBOT05fQVVUSE9SSVRBVElWRV9JTkZPUk1BVElPTjogMjAzLFxuICAgIE5PX0NPTlRFTlQ6IDIwNCxcbiAgICBSRVNFVF9DT05URU5UOiAyMDUsXG4gICAgUEFSVElBTF9DT05URU5UOiAyMDYsXG4gICAgTVVMVElQTEVfQ0hPSUNFUzogMzAwLFxuICAgIE1PVkVEX1BFUk1BTlRFTlRMWTogMzAxLFxuICAgIEZPVU5EOiAzMDIsXG4gICAgU0VFX09USEVSOiAzMDMsXG4gICAgTk9UX01PRElGSUVEOiAzMDQsXG4gICAgVVNFX1BST1hZOiAzMDUsXG4gICAgVEVNUE9SQVJZX1JFRElSRUNUOiAzMDcsXG4gICAgQkFEX1JFUVVFU1Q6IDQwMCxcbiAgICBVTkFVVEhPUklaRUQ6IDQwMSxcbiAgICBQQVlNRU5UX1JFUVVJUkVEOiA0MDIsXG4gICAgRk9SQklEREVOOiA0MDMsXG4gICAgTk9UX0ZPVU5EOiA0MDQsXG4gICAgTUVUSE9EX05PVF9BTExPV0VEOiA0MDUsXG4gICAgTk9UX0FDQ0VQVEFCTEU6IDQwNixcbiAgICBQUk9YWV9BVVRIRU5USUNBVElPTl9SRVFVSVJFRDogNDA3LFxuICAgIFJFUVVFU1RfVElNRU9VVDogNDA4LFxuICAgIENPTkZMSUNUOiA0MDksXG4gICAgR09ORTogNDEwLFxuICAgIExFTkdUSF9SRVFVSVJFRDogNDExLFxuICAgIFBSRUNPTkRJVElPTl9GQUlMRUQ6IDQxMixcbiAgICBQQVlMT0FEX1RPX0xBUkdFOiA0MTMsXG4gICAgVVJJX1RPT19MT05HOiA0MTQsXG4gICAgVU5TVVBQT1JURURfTUVESUFfVFlQRTogNDE1LFxuICAgIFJBTkdFX05PVF9TQVRJU0ZJQUJMRTogNDE2LFxuICAgIEVYUEVDVEFUSU9OX0ZBSUxFRDogNDE3LFxuICAgIElNX0FfVEVBUE9UOiA0MTgsXG4gICAgVVBHUkFERV9SRVFVSVJFRDogNDI2LFxuICAgIElOVEVSTkFMX1NFUlZFUl9FUlJPUjogNTAwLFxuICAgIE5PVF9JTVBMRU1FTlRFRDogNTAxLFxuICAgIEJBRF9HQVRFV0FZOiA1MDIsXG4gICAgU0VSVklDRV9VTkFWQUlMQUJMRTogNTAzLFxuICAgIEdBVEVXQVlfVElNRU9VVDogNTA0LFxuICAgIEhUVFBfVkVSU0lPTl9OT1RfU1VQUE9SVEVEOiA1MDUsXG4gICAgUFJPQ0VTU0lORzogMTAyLFxuICAgIE1VTFRJX1NUQVRVUzogMjA3LFxuICAgIElNX1VTRUQ6IDIyNixcbiAgICBQRVJNQU5FTlRfUkVESVJFQ1Q6IDMwOCxcbiAgICBVTlBST0NFU1NBQkxFX0VOVFJZOiA0MjIsXG4gICAgTE9DS0VEOiA0MjMsXG4gICAgRkFJTEVEX0RFUEVOREVOQ1k6IDQyNCxcbiAgICBQUkVDT05ESVRJT05fUkVRVUlSRUQ6IDQyOCxcbiAgICBUT09fTUFOWV9SRVFVRVNUUzogNDI5LFxuICAgIFJFUVVFU1RfSEVBREVSX0ZJRUxEU19UT09fTEFSR0U6IDQzMSxcbiAgICBVTkFWQUlMQUJMRV9GT1JfTEVHQUxfUkVBU09OUzogNDUxLFxuICAgIFZBUklBTlRfQUxTT19ORUdPVElBVEVTOiA1MDYsXG4gICAgSU5TVUZGSUNJRU5UX1NUT1JBR0U6IDUwNyxcbiAgICBORVRXT1JLX0FVVEhFTlRJQ0FUSU9OX1JFUVVJUkVEOiA1MTFcbn07XG4vKnRzbGludDpkaXNhYmxlOnF1b3RlbWFyayBtYXgtbGluZS1sZW5ndGggb25lLWxpbmUgKi9cbmV4cG9ydCB2YXIgU1RBVFVTX0NPREVfSU5GTyA9IHtcbiAgICAnMTAwJzoge1xuICAgICAgICAnY29kZSc6IDEwMCxcbiAgICAgICAgJ3RleHQnOiAnQ29udGludWUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBpbml0aWFsIHBhcnQgb2YgYSByZXF1ZXN0IGhhcyBiZWVuIHJlY2VpdmVkIGFuZCBoYXMgbm90IHlldCBiZWVuIHJlamVjdGVkIGJ5IHRoZSBzZXJ2ZXIuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi4yLjEnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjIuMSdcbiAgICB9LFxuICAgICcxMDEnOiB7XG4gICAgICAgICdjb2RlJzogMTAxLFxuICAgICAgICAndGV4dCc6ICdTd2l0Y2hpbmcgUHJvdG9jb2xzJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIHVuZGVyc3RhbmRzIGFuZCBpcyB3aWxsaW5nIHRvIGNvbXBseSB3aXRoIHRoZSBjbGllbnRcXCdzIHJlcXVlc3QsIHZpYSB0aGUgVXBncmFkZSBoZWFkZXIgZmllbGQsIGZvciBhIGNoYW5nZSBpbiB0aGUgYXBwbGljYXRpb24gcHJvdG9jb2wgYmVpbmcgdXNlZCBvbiB0aGlzIGNvbm5lY3Rpb24uXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi4yLjInLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjIuMidcbiAgICB9LFxuICAgICcyMDAnOiB7XG4gICAgICAgICdjb2RlJzogMjAwLFxuICAgICAgICAndGV4dCc6ICdPSycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHJlcXVlc3QgaGFzIHN1Y2NlZWRlZC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjMuMScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMy4xJ1xuICAgIH0sXG4gICAgJzIwMSc6IHtcbiAgICAgICAgJ2NvZGUnOiAyMDEsXG4gICAgICAgICd0ZXh0JzogJ0NyZWF0ZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSByZXF1ZXN0IGhhcyBiZWVuIGZ1bGZpbGxlZCBhbmQgaGFzIHJlc3VsdGVkIGluIG9uZSBvciBtb3JlIG5ldyByZXNvdXJjZXMgYmVpbmcgY3JlYXRlZC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjMuMicsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMy4yJ1xuICAgIH0sXG4gICAgJzIwMic6IHtcbiAgICAgICAgJ2NvZGUnOiAyMDIsXG4gICAgICAgICd0ZXh0JzogJ0FjY2VwdGVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgcmVxdWVzdCBoYXMgYmVlbiBhY2NlcHRlZCBmb3IgcHJvY2Vzc2luZywgYnV0IHRoZSBwcm9jZXNzaW5nIGhhcyBub3QgYmVlbiBjb21wbGV0ZWQuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi4zLjMnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjMuMydcbiAgICB9LFxuICAgICcyMDMnOiB7XG4gICAgICAgICdjb2RlJzogMjAzLFxuICAgICAgICAndGV4dCc6ICdOb24tQXV0aG9yaXRhdGl2ZSBJbmZvcm1hdGlvbicsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHJlcXVlc3Qgd2FzIHN1Y2Nlc3NmdWwgYnV0IHRoZSBlbmNsb3NlZCBwYXlsb2FkIGhhcyBiZWVuIG1vZGlmaWVkIGZyb20gdGhhdCBvZiB0aGUgb3JpZ2luIHNlcnZlclxcJ3MgMjAwIChPSykgcmVzcG9uc2UgYnkgYSB0cmFuc2Zvcm1pbmcgcHJveHkuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi4zLjQnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjMuNCdcbiAgICB9LFxuICAgICcyMDQnOiB7XG4gICAgICAgICdjb2RlJzogMjA0LFxuICAgICAgICAndGV4dCc6ICdObyBDb250ZW50JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGhhcyBzdWNjZXNzZnVsbHkgZnVsZmlsbGVkIHRoZSByZXF1ZXN0IGFuZCB0aGF0IHRoZXJlIGlzIG5vIGFkZGl0aW9uYWwgY29udGVudCB0byBzZW5kIGluIHRoZSByZXNwb25zZSBwYXlsb2FkIGJvZHkuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi4zLjUnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjMuNSdcbiAgICB9LFxuICAgICcyMDUnOiB7XG4gICAgICAgICdjb2RlJzogMjA1LFxuICAgICAgICAndGV4dCc6ICdSZXNldCBDb250ZW50JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGhhcyBmdWxmaWxsZWQgdGhlIHJlcXVlc3QgYW5kIGRlc2lyZXMgdGhhdCB0aGUgdXNlciBhZ2VudCByZXNldCB0aGUgXFxcImRvY3VtZW50IHZpZXdcXFwiLCB3aGljaCBjYXVzZWQgdGhlIHJlcXVlc3QgdG8gYmUgc2VudCwgdG8gaXRzIG9yaWdpbmFsIHN0YXRlIGFzIHJlY2VpdmVkIGZyb20gdGhlIG9yaWdpbiBzZXJ2ZXIuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi4zLjYnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjMuNidcbiAgICB9LFxuICAgICcyMDYnOiB7XG4gICAgICAgICdjb2RlJzogMjA2LFxuICAgICAgICAndGV4dCc6ICdQYXJ0aWFsIENvbnRlbnQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgaXMgc3VjY2Vzc2Z1bGx5IGZ1bGZpbGxpbmcgYSByYW5nZSByZXF1ZXN0IGZvciB0aGUgdGFyZ2V0IHJlc291cmNlIGJ5IHRyYW5zZmVycmluZyBvbmUgb3IgbW9yZSBwYXJ0cyBvZiB0aGUgc2VsZWN0ZWQgcmVwcmVzZW50YXRpb24gdGhhdCBjb3JyZXNwb25kIHRvIHRoZSBzYXRpc2ZpYWJsZSByYW5nZXMgZm91bmQgaW4gdGhlIHJlcXVlc3RzXFwncyBSYW5nZSBoZWFkZXIgZmllbGQuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzMjNC4xJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMzI3NlY3Rpb24tNC4xJ1xuICAgIH0sXG4gICAgJzMwMCc6IHtcbiAgICAgICAgJ2NvZGUnOiAzMDAsXG4gICAgICAgICd0ZXh0JzogJ011bHRpcGxlIENob2ljZXMnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSB0YXJnZXQgcmVzb3VyY2UgaGFzIG1vcmUgdGhhbiBvbmUgcmVwcmVzZW50YXRpb24sIGVhY2ggd2l0aCBpdHMgb3duIG1vcmUgc3BlY2lmaWMgaWRlbnRpZmllciwgYW5kIGluZm9ybWF0aW9uIGFib3V0IHRoZSBhbHRlcm5hdGl2ZXMgaXMgYmVpbmcgcHJvdmlkZWQgc28gdGhhdCB0aGUgdXNlciAob3IgdXNlciBhZ2VudCkgY2FuIHNlbGVjdCBhIHByZWZlcnJlZCByZXByZXNlbnRhdGlvbiBieSByZWRpcmVjdGluZyBpdHMgcmVxdWVzdCB0byBvbmUgb3IgbW9yZSBvZiB0aG9zZSBpZGVudGlmaWVycy5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjQuMScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNC4xJ1xuICAgIH0sXG4gICAgJzMwMSc6IHtcbiAgICAgICAgJ2NvZGUnOiAzMDEsXG4gICAgICAgICd0ZXh0JzogJ01vdmVkIFBlcm1hbmVudGx5JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgdGFyZ2V0IHJlc291cmNlIGhhcyBiZWVuIGFzc2lnbmVkIGEgbmV3IHBlcm1hbmVudCBVUkkgYW5kIGFueSBmdXR1cmUgcmVmZXJlbmNlcyB0byB0aGlzIHJlc291cmNlIG91Z2h0IHRvIHVzZSBvbmUgb2YgdGhlIGVuY2xvc2VkIFVSSXMuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi40LjInLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjQuMidcbiAgICB9LFxuICAgICczMDInOiB7XG4gICAgICAgICdjb2RlJzogMzAyLFxuICAgICAgICAndGV4dCc6ICdGb3VuZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHRhcmdldCByZXNvdXJjZSByZXNpZGVzIHRlbXBvcmFyaWx5IHVuZGVyIGEgZGlmZmVyZW50IFVSSS5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjQuMycsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNC4zJ1xuICAgIH0sXG4gICAgJzMwMyc6IHtcbiAgICAgICAgJ2NvZGUnOiAzMDMsXG4gICAgICAgICd0ZXh0JzogJ1NlZSBPdGhlcicsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBpcyByZWRpcmVjdGluZyB0aGUgdXNlciBhZ2VudCB0byBhIGRpZmZlcmVudCByZXNvdXJjZSwgYXMgaW5kaWNhdGVkIGJ5IGEgVVJJIGluIHRoZSBMb2NhdGlvbiBoZWFkZXIgZmllbGQsIHRoYXQgaXMgaW50ZW5kZWQgdG8gcHJvdmlkZSBhbiBpbmRpcmVjdCByZXNwb25zZSB0byB0aGUgb3JpZ2luYWwgcmVxdWVzdC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjQuNCcsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNC40J1xuICAgIH0sXG4gICAgJzMwNCc6IHtcbiAgICAgICAgJ2NvZGUnOiAzMDQsXG4gICAgICAgICd0ZXh0JzogJ05vdCBNb2RpZmllZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiQSBjb25kaXRpb25hbCBHRVQgcmVxdWVzdCBoYXMgYmVlbiByZWNlaXZlZCBhbmQgd291bGQgaGF2ZSByZXN1bHRlZCBpbiBhIDIwMCAoT0spIHJlc3BvbnNlIGlmIGl0IHdlcmUgbm90IGZvciB0aGUgZmFjdCB0aGF0IHRoZSBjb25kaXRpb24gaGFzIGV2YWx1YXRlZCB0byBmYWxzZS5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMiM0LjEnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzIjc2VjdGlvbi00LjEnXG4gICAgfSxcbiAgICAnMzA1Jzoge1xuICAgICAgICAnY29kZSc6IDMwNSxcbiAgICAgICAgJ3RleHQnOiAnVXNlIFByb3h5JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJypkZXByZWNhdGVkKicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi40LjUnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjQuNSdcbiAgICB9LFxuICAgICczMDcnOiB7XG4gICAgICAgICdjb2RlJzogMzA3LFxuICAgICAgICAndGV4dCc6ICdUZW1wb3JhcnkgUmVkaXJlY3QnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSB0YXJnZXQgcmVzb3VyY2UgcmVzaWRlcyB0ZW1wb3JhcmlseSB1bmRlciBhIGRpZmZlcmVudCBVUkkgYW5kIHRoZSB1c2VyIGFnZW50IE1VU1QgTk9UIGNoYW5nZSB0aGUgcmVxdWVzdCBtZXRob2QgaWYgaXQgcGVyZm9ybXMgYW4gYXV0b21hdGljIHJlZGlyZWN0aW9uIHRvIHRoYXQgVVJJLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNC43JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi40LjcnXG4gICAgfSxcbiAgICAnNDAwJzoge1xuICAgICAgICAnY29kZSc6IDQwMCxcbiAgICAgICAgJ3RleHQnOiAnQmFkIFJlcXVlc3QnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgY2Fubm90IG9yIHdpbGwgbm90IHByb2Nlc3MgdGhlIHJlcXVlc3QgYmVjYXVzZSB0aGUgcmVjZWl2ZWQgc3ludGF4IGlzIGludmFsaWQsIG5vbnNlbnNpY2FsLCBvciBleGNlZWRzIHNvbWUgbGltaXRhdGlvbiBvbiB3aGF0IHRoZSBzZXJ2ZXIgaXMgd2lsbGluZyB0byBwcm9jZXNzLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS4xJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjEnXG4gICAgfSxcbiAgICAnNDAxJzoge1xuICAgICAgICAnY29kZSc6IDQwMSxcbiAgICAgICAgJ3RleHQnOiAnVW5hdXRob3JpemVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgcmVxdWVzdCBoYXMgbm90IGJlZW4gYXBwbGllZCBiZWNhdXNlIGl0IGxhY2tzIHZhbGlkIGF1dGhlbnRpY2F0aW9uIGNyZWRlbnRpYWxzIGZvciB0aGUgdGFyZ2V0IHJlc291cmNlLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjM1IzYuMy4xJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjM1I3NlY3Rpb24tMy4xJ1xuICAgIH0sXG4gICAgJzQwMic6IHtcbiAgICAgICAgJ2NvZGUnOiA0MDIsXG4gICAgICAgICd0ZXh0JzogJ1BheW1lbnQgUmVxdWlyZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnKnJlc2VydmVkKicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjInLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMidcbiAgICB9LFxuICAgICc0MDMnOiB7XG4gICAgICAgICdjb2RlJzogNDAzLFxuICAgICAgICAndGV4dCc6ICdGb3JiaWRkZW4nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgdW5kZXJzdG9vZCB0aGUgcmVxdWVzdCBidXQgcmVmdXNlcyB0byBhdXRob3JpemUgaXQuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjMnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMydcbiAgICB9LFxuICAgICc0MDQnOiB7XG4gICAgICAgICdjb2RlJzogNDA0LFxuICAgICAgICAndGV4dCc6ICdOb3QgRm91bmQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBvcmlnaW4gc2VydmVyIGRpZCBub3QgZmluZCBhIGN1cnJlbnQgcmVwcmVzZW50YXRpb24gZm9yIHRoZSB0YXJnZXQgcmVzb3VyY2Ugb3IgaXMgbm90IHdpbGxpbmcgdG8gZGlzY2xvc2UgdGhhdCBvbmUgZXhpc3RzLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS40JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjQnXG4gICAgfSxcbiAgICAnNDA1Jzoge1xuICAgICAgICAnY29kZSc6IDQwNSxcbiAgICAgICAgJ3RleHQnOiAnTWV0aG9kIE5vdCBBbGxvd2VkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgbWV0aG9kIHNwZWNpZmllZCBpbiB0aGUgcmVxdWVzdC1saW5lIGlzIGtub3duIGJ5IHRoZSBvcmlnaW4gc2VydmVyIGJ1dCBub3Qgc3VwcG9ydGVkIGJ5IHRoZSB0YXJnZXQgcmVzb3VyY2UuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjUnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuNSdcbiAgICB9LFxuICAgICc0MDYnOiB7XG4gICAgICAgICdjb2RlJzogNDA2LFxuICAgICAgICAndGV4dCc6ICdOb3QgQWNjZXB0YWJsZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHRhcmdldCByZXNvdXJjZSBkb2VzIG5vdCBoYXZlIGEgY3VycmVudCByZXByZXNlbnRhdGlvbiB0aGF0IHdvdWxkIGJlIGFjY2VwdGFibGUgdG8gdGhlIHVzZXIgYWdlbnQsIGFjY29yZGluZyB0byB0aGUgcHJvYWN0aXZlIG5lZ290aWF0aW9uIGhlYWRlciBmaWVsZHMgcmVjZWl2ZWQgaW4gdGhlIHJlcXVlc3QsIGFuZCB0aGUgc2VydmVyIGlzIHVud2lsbGluZyB0byBzdXBwbHkgYSBkZWZhdWx0IHJlcHJlc2VudGF0aW9uLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS42JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjYnXG4gICAgfSxcbiAgICAnNDA3Jzoge1xuICAgICAgICAnY29kZSc6IDQwNyxcbiAgICAgICAgJ3RleHQnOiAnUHJveHkgQXV0aGVudGljYXRpb24gUmVxdWlyZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBjbGllbnQgbmVlZHMgdG8gYXV0aGVudGljYXRlIGl0c2VsZiBpbiBvcmRlciB0byB1c2UgYSBwcm94eS5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjMuMicsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMy4yJ1xuICAgIH0sXG4gICAgJzQwOCc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MDgsXG4gICAgICAgICd0ZXh0JzogJ1JlcXVlc3QgVGltZW91dCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBkaWQgbm90IHJlY2VpdmUgYSBjb21wbGV0ZSByZXF1ZXN0IG1lc3NhZ2Ugd2l0aGluIHRoZSB0aW1lIHRoYXQgaXQgd2FzIHByZXBhcmVkIHRvIHdhaXQuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjcnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuNydcbiAgICB9LFxuICAgICc0MDknOiB7XG4gICAgICAgICdjb2RlJzogNDA5LFxuICAgICAgICAndGV4dCc6ICdDb25mbGljdCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHJlcXVlc3QgY291bGQgbm90IGJlIGNvbXBsZXRlZCBkdWUgdG8gYSBjb25mbGljdCB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSByZXNvdXJjZS5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuOCcsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS44J1xuICAgIH0sXG4gICAgJzQxMCc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MTAsXG4gICAgICAgICd0ZXh0JzogJ0dvbmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIkFjY2VzcyB0byB0aGUgdGFyZ2V0IHJlc291cmNlIGlzIG5vIGxvbmdlciBhdmFpbGFibGUgYXQgdGhlIG9yaWdpbiBzZXJ2ZXIgYW5kIHRoYXQgdGhpcyBjb25kaXRpb24gaXMgbGlrZWx5IHRvIGJlIHBlcm1hbmVudC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuOScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS45J1xuICAgIH0sXG4gICAgJzQxMSc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MTEsXG4gICAgICAgICd0ZXh0JzogJ0xlbmd0aCBSZXF1aXJlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciByZWZ1c2VzIHRvIGFjY2VwdCB0aGUgcmVxdWVzdCB3aXRob3V0IGEgZGVmaW5lZCBDb250ZW50LUxlbmd0aC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMTAnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMTAnXG4gICAgfSxcbiAgICAnNDEyJzoge1xuICAgICAgICAnY29kZSc6IDQxMixcbiAgICAgICAgJ3RleHQnOiAnUHJlY29uZGl0aW9uIEZhaWxlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiT25lIG9yIG1vcmUgcHJlY29uZGl0aW9ucyBnaXZlbiBpbiB0aGUgcmVxdWVzdCBoZWFkZXIgZmllbGRzIGV2YWx1YXRlZCB0byBmYWxzZSB3aGVuIHRlc3RlZCBvbiB0aGUgc2VydmVyLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMyIzQuMicsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMiNzZWN0aW9uLTQuMidcbiAgICB9LFxuICAgICc0MTMnOiB7XG4gICAgICAgICdjb2RlJzogNDEzLFxuICAgICAgICAndGV4dCc6ICdQYXlsb2FkIFRvbyBMYXJnZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBpcyByZWZ1c2luZyB0byBwcm9jZXNzIGEgcmVxdWVzdCBiZWNhdXNlIHRoZSByZXF1ZXN0IHBheWxvYWQgaXMgbGFyZ2VyIHRoYW4gdGhlIHNlcnZlciBpcyB3aWxsaW5nIG9yIGFibGUgdG8gcHJvY2Vzcy5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMTEnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMTEnXG4gICAgfSxcbiAgICAnNDE0Jzoge1xuICAgICAgICAnY29kZSc6IDQxNCxcbiAgICAgICAgJ3RleHQnOiAnVVJJIFRvbyBMb25nJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGlzIHJlZnVzaW5nIHRvIHNlcnZpY2UgdGhlIHJlcXVlc3QgYmVjYXVzZSB0aGUgcmVxdWVzdC10YXJnZXQgaXMgbG9uZ2VyIHRoYW4gdGhlIHNlcnZlciBpcyB3aWxsaW5nIHRvIGludGVycHJldC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMTInLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMTInXG4gICAgfSxcbiAgICAnNDE1Jzoge1xuICAgICAgICAnY29kZSc6IDQxNSxcbiAgICAgICAgJ3RleHQnOiAnVW5zdXBwb3J0ZWQgTWVkaWEgVHlwZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIG9yaWdpbiBzZXJ2ZXIgaXMgcmVmdXNpbmcgdG8gc2VydmljZSB0aGUgcmVxdWVzdCBiZWNhdXNlIHRoZSBwYXlsb2FkIGlzIGluIGEgZm9ybWF0IG5vdCBzdXBwb3J0ZWQgYnkgdGhlIHRhcmdldCByZXNvdXJjZSBmb3IgdGhpcyBtZXRob2QuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjEzJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjEzJ1xuICAgIH0sXG4gICAgJzQxNic6IHtcbiAgICAgICAgJ2NvZGUnOiA0MTYsXG4gICAgICAgICd0ZXh0JzogJ1JhbmdlIE5vdCBTYXRpc2ZpYWJsZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiTm9uZSBvZiB0aGUgcmFuZ2VzIGluIHRoZSByZXF1ZXN0XFwncyBSYW5nZSBoZWFkZXIgZmllbGQgb3ZlcmxhcCB0aGUgY3VycmVudCBleHRlbnQgb2YgdGhlIHNlbGVjdGVkIHJlc291cmNlIG9yIHRoYXQgdGhlIHNldCBvZiByYW5nZXMgcmVxdWVzdGVkIGhhcyBiZWVuIHJlamVjdGVkIGR1ZSB0byBpbnZhbGlkIHJhbmdlcyBvciBhbiBleGNlc3NpdmUgcmVxdWVzdCBvZiBzbWFsbCBvciBvdmVybGFwcGluZyByYW5nZXMuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzMjNC40JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMzI3NlY3Rpb24tNC40J1xuICAgIH0sXG4gICAgJzQxNyc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MTcsXG4gICAgICAgICd0ZXh0JzogJ0V4cGVjdGF0aW9uIEZhaWxlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIGV4cGVjdGF0aW9uIGdpdmVuIGluIHRoZSByZXF1ZXN0XFwncyBFeHBlY3QgaGVhZGVyIGZpZWxkIGNvdWxkIG5vdCBiZSBtZXQgYnkgYXQgbGVhc3Qgb25lIG9mIHRoZSBpbmJvdW5kIHNlcnZlcnMuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjE0JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjE0J1xuICAgIH0sXG4gICAgJzQxOCc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MTgsXG4gICAgICAgICd0ZXh0JzogJ0lcXCdtIGEgdGVhcG90JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCIxOTg4IEFwcmlsIEZvb2xzIEpva2UuIFJldHVybmVkIGJ5IHRlYSBwb3RzIHJlcXVlc3RlZCB0byBicmV3IGNvZmZlZS5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDIDIzMjQnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyMzI0J1xuICAgIH0sXG4gICAgJzQyNic6IHtcbiAgICAgICAgJ2NvZGUnOiA0MjYsXG4gICAgICAgICd0ZXh0JzogJ1VwZ3JhZGUgUmVxdWlyZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgcmVmdXNlcyB0byBwZXJmb3JtIHRoZSByZXF1ZXN0IHVzaW5nIHRoZSBjdXJyZW50IHByb3RvY29sIGJ1dCBtaWdodCBiZSB3aWxsaW5nIHRvIGRvIHNvIGFmdGVyIHRoZSBjbGllbnQgdXBncmFkZXMgdG8gYSBkaWZmZXJlbnQgcHJvdG9jb2wuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjE1JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjE1J1xuICAgIH0sXG4gICAgJzUwMCc6IHtcbiAgICAgICAgJ2NvZGUnOiA1MDAsXG4gICAgICAgICd0ZXh0JzogJ0ludGVybmFsIFNlcnZlciBFcnJvcicsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBlbmNvdW50ZXJlZCBhbiB1bmV4cGVjdGVkIGNvbmRpdGlvbiB0aGF0IHByZXZlbnRlZCBpdCBmcm9tIGZ1bGZpbGxpbmcgdGhlIHJlcXVlc3QuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi42LjEnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjYuMSdcbiAgICB9LFxuICAgICc1MDEnOiB7XG4gICAgICAgICdjb2RlJzogNTAxLFxuICAgICAgICAndGV4dCc6ICdOb3QgSW1wbGVtZW50ZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgZnVuY3Rpb25hbGl0eSByZXF1aXJlZCB0byBmdWxmaWxsIHRoZSByZXF1ZXN0LlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNi4yJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi42LjInXG4gICAgfSxcbiAgICAnNTAyJzoge1xuICAgICAgICAnY29kZSc6IDUwMixcbiAgICAgICAgJ3RleHQnOiAnQmFkIEdhdGV3YXknLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIsIHdoaWxlIGFjdGluZyBhcyBhIGdhdGV3YXkgb3IgcHJveHksIHJlY2VpdmVkIGFuIGludmFsaWQgcmVzcG9uc2UgZnJvbSBhbiBpbmJvdW5kIHNlcnZlciBpdCBhY2Nlc3NlZCB3aGlsZSBhdHRlbXB0aW5nIHRvIGZ1bGZpbGwgdGhlIHJlcXVlc3QuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi42LjMnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjYuMydcbiAgICB9LFxuICAgICc1MDMnOiB7XG4gICAgICAgICdjb2RlJzogNTAzLFxuICAgICAgICAndGV4dCc6ICdTZXJ2aWNlIFVuYXZhaWxhYmxlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGlzIGN1cnJlbnRseSB1bmFibGUgdG8gaGFuZGxlIHRoZSByZXF1ZXN0IGR1ZSB0byBhIHRlbXBvcmFyeSBvdmVybG9hZCBvciBzY2hlZHVsZWQgbWFpbnRlbmFuY2UsIHdoaWNoIHdpbGwgbGlrZWx5IGJlIGFsbGV2aWF0ZWQgYWZ0ZXIgc29tZSBkZWxheS5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjYuNCcsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNi40J1xuICAgIH0sXG4gICAgJzUwNCc6IHtcbiAgICAgICAgJ2NvZGUnOiA1MDQsXG4gICAgICAgICd0ZXh0JzogJ0dhdGV3YXkgVGltZS1vdXQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIsIHdoaWxlIGFjdGluZyBhcyBhIGdhdGV3YXkgb3IgcHJveHksIGRpZCBub3QgcmVjZWl2ZSBhIHRpbWVseSByZXNwb25zZSBmcm9tIGFuIHVwc3RyZWFtIHNlcnZlciBpdCBuZWVkZWQgdG8gYWNjZXNzIGluIG9yZGVyIHRvIGNvbXBsZXRlIHRoZSByZXF1ZXN0LlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNi41JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi42LjUnXG4gICAgfSxcbiAgICAnNTA1Jzoge1xuICAgICAgICAnY29kZSc6IDUwNSxcbiAgICAgICAgJ3RleHQnOiAnSFRUUCBWZXJzaW9uIE5vdCBTdXBwb3J0ZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgZG9lcyBub3Qgc3VwcG9ydCwgb3IgcmVmdXNlcyB0byBzdXBwb3J0LCB0aGUgcHJvdG9jb2wgdmVyc2lvbiB0aGF0IHdhcyB1c2VkIGluIHRoZSByZXF1ZXN0IG1lc3NhZ2UuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi42LjYnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjYuNidcbiAgICB9LFxuICAgICcxMDInOiB7XG4gICAgICAgICdjb2RlJzogMTAyLFxuICAgICAgICAndGV4dCc6ICdQcm9jZXNzaW5nJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJBbiBpbnRlcmltIHJlc3BvbnNlIHRvIGluZm9ybSB0aGUgY2xpZW50IHRoYXQgdGhlIHNlcnZlciBoYXMgYWNjZXB0ZWQgdGhlIGNvbXBsZXRlIHJlcXVlc3QsIGJ1dCBoYXMgbm90IHlldCBjb21wbGV0ZWQgaXQuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzUyMTgjMTAuMScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjUxOCNzZWN0aW9uLTEwLjEnXG4gICAgfSxcbiAgICAnMjA3Jzoge1xuICAgICAgICAnY29kZSc6IDIwNyxcbiAgICAgICAgJ3RleHQnOiAnTXVsdGktU3RhdHVzJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJTdGF0dXMgZm9yIG11bHRpcGxlIGluZGVwZW5kZW50IG9wZXJhdGlvbnMuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzUyMTgjMTAuMicsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjUxOCNzZWN0aW9uLTEwLjInXG4gICAgfSxcbiAgICAnMjI2Jzoge1xuICAgICAgICAnY29kZSc6IDIyNixcbiAgICAgICAgJ3RleHQnOiAnSU0gVXNlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBoYXMgZnVsZmlsbGVkIGEgR0VUIHJlcXVlc3QgZm9yIHRoZSByZXNvdXJjZSwgYW5kIHRoZSByZXNwb25zZSBpcyBhIHJlcHJlc2VudGF0aW9uIG9mIHRoZSByZXN1bHQgb2Ygb25lIG9yIG1vcmUgaW5zdGFuY2UtbWFuaXB1bGF0aW9ucyBhcHBsaWVkIHRvIHRoZSBjdXJyZW50IGluc3RhbmNlLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkMzMjI5IzEwLjQuMScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzIyOSNzZWN0aW9uLTEwLjQuMSdcbiAgICB9LFxuICAgICczMDgnOiB7XG4gICAgICAgICdjb2RlJzogMzA4LFxuICAgICAgICAndGV4dCc6ICdQZXJtYW5lbnQgUmVkaXJlY3QnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSB0YXJnZXQgcmVzb3VyY2UgaGFzIGJlZW4gYXNzaWduZWQgYSBuZXcgcGVybWFuZW50IFVSSSBhbmQgYW55IGZ1dHVyZSByZWZlcmVuY2VzIHRvIHRoaXMgcmVzb3VyY2UgU0hPVUxEIHVzZSBvbmUgb2YgdGhlIHJldHVybmVkIFVSSXMuIFsuLi5dIFRoaXMgc3RhdHVzIGNvZGUgaXMgc2ltaWxhciB0byAzMDEgTW92ZWQgUGVybWFuZW50bHkgKFNlY3Rpb24gNy4zLjIgb2YgcmZjNzIzMSksIGV4Y2VwdCB0aGF0IGl0IGRvZXMgbm90IGFsbG93IHJld3JpdGluZyB0aGUgcmVxdWVzdCBtZXRob2QgZnJvbSBQT1NUIHRvIEdFVC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzOCcsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzOCdcbiAgICB9LFxuICAgICc0MjInOiB7XG4gICAgICAgICdjb2RlJzogNDIyLFxuICAgICAgICAndGV4dCc6ICdVbnByb2Nlc3NhYmxlIEVudGl0eScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciB1bmRlcnN0YW5kcyB0aGUgY29udGVudCB0eXBlIG9mIHRoZSByZXF1ZXN0IGVudGl0eSAoaGVuY2UgYSA0MTUoVW5zdXBwb3J0ZWQgTWVkaWEgVHlwZSkgc3RhdHVzIGNvZGUgaXMgaW5hcHByb3ByaWF0ZSksIGFuZCB0aGUgc3ludGF4IG9mIHRoZSByZXF1ZXN0IGVudGl0eSBpcyBjb3JyZWN0ICh0aHVzIGEgNDAwIChCYWQgUmVxdWVzdCkgc3RhdHVzIGNvZGUgaXMgaW5hcHByb3ByaWF0ZSkgYnV0IHdhcyB1bmFibGUgdG8gcHJvY2VzcyB0aGUgY29udGFpbmVkIGluc3RydWN0aW9ucy5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNTIxOCMxMC4zJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNTE4I3NlY3Rpb24tMTAuMydcbiAgICB9LFxuICAgICc0MjMnOiB7XG4gICAgICAgICdjb2RlJzogNDIzLFxuICAgICAgICAndGV4dCc6ICdMb2NrZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzb3VyY2Ugb3IgZGVzdGluYXRpb24gcmVzb3VyY2Ugb2YgYSBtZXRob2QgaXMgbG9ja2VkLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM1MjE4IzEwLjQnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzI1MTgjc2VjdGlvbi0xMC40J1xuICAgIH0sXG4gICAgJzQyNCc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MjQsXG4gICAgICAgICd0ZXh0JzogJ0ZhaWxlZCBEZXBlbmRlbmN5JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgbWV0aG9kIGNvdWxkIG5vdCBiZSBwZXJmb3JtZWQgb24gdGhlIHJlc291cmNlIGJlY2F1c2UgdGhlIHJlcXVlc3RlZCBhY3Rpb24gZGVwZW5kZWQgb24gYW5vdGhlciBhY3Rpb24gYW5kIHRoYXQgYWN0aW9uIGZhaWxlZC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNTIxOCMxMC41JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNTE4I3NlY3Rpb24tMTAuNSdcbiAgICB9LFxuICAgICc0MjgnOiB7XG4gICAgICAgICdjb2RlJzogNDI4LFxuICAgICAgICAndGV4dCc6ICdQcmVjb25kaXRpb24gUmVxdWlyZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBvcmlnaW4gc2VydmVyIHJlcXVpcmVzIHRoZSByZXF1ZXN0IHRvIGJlIGNvbmRpdGlvbmFsLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM2NTg1IzMnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzY1ODUjc2VjdGlvbi0zJ1xuICAgIH0sXG4gICAgJzQyOSc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MjksXG4gICAgICAgICd0ZXh0JzogJ1RvbyBNYW55IFJlcXVlc3RzJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgdXNlciBoYXMgc2VudCB0b28gbWFueSByZXF1ZXN0cyBpbiBhIGdpdmVuIGFtb3VudCBvZiB0aW1lIChcXFwicmF0ZSBsaW1pdGluZ1xcXCIpLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM2NTg1IzQnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzY1ODUjc2VjdGlvbi00J1xuICAgIH0sXG4gICAgJzQzMSc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MzEsXG4gICAgICAgICd0ZXh0JzogJ1JlcXVlc3QgSGVhZGVyIEZpZWxkcyBUb28gTGFyZ2UnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgaXMgdW53aWxsaW5nIHRvIHByb2Nlc3MgdGhlIHJlcXVlc3QgYmVjYXVzZSBpdHMgaGVhZGVyIGZpZWxkcyBhcmUgdG9vIGxhcmdlLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM2NTg1IzUnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzY1ODUjc2VjdGlvbi01J1xuICAgIH0sXG4gICAgJzQ1MSc6IHtcbiAgICAgICAgJ2NvZGUnOiA0NTEsXG4gICAgICAgICd0ZXh0JzogJ1VuYXZhaWxhYmxlIEZvciBMZWdhbCBSZWFzb25zJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGlzIGRlbnlpbmcgYWNjZXNzIHRvIHRoZSByZXNvdXJjZSBpbiByZXNwb25zZSB0byBhIGxlZ2FsIGRlbWFuZC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnZHJhZnQtaWV0Zi1odHRwYmlzLWxlZ2FsbHktcmVzdHJpY3RlZC1zdGF0dXMnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL2RyYWZ0LWlldGYtaHR0cGJpcy1sZWdhbGx5LXJlc3RyaWN0ZWQtc3RhdHVzJ1xuICAgIH0sXG4gICAgJzUwNic6IHtcbiAgICAgICAgJ2NvZGUnOiA1MDYsXG4gICAgICAgICd0ZXh0JzogJ1ZhcmlhbnQgQWxzbyBOZWdvdGlhdGVzJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGhhcyBhbiBpbnRlcm5hbCBjb25maWd1cmF0aW9uIGVycm9yOiB0aGUgY2hvc2VuIHZhcmlhbnQgcmVzb3VyY2UgaXMgY29uZmlndXJlZCB0byBlbmdhZ2UgaW4gdHJhbnNwYXJlbnQgY29udGVudCBuZWdvdGlhdGlvbiBpdHNlbGYsIGFuZCBpcyB0aGVyZWZvcmUgbm90IGEgcHJvcGVyIGVuZCBwb2ludCBpbiB0aGUgbmVnb3RpYXRpb24gcHJvY2Vzcy5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDMjI5NSM4LjEnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzIyOTUjc2VjdGlvbi04LjEnXG4gICAgfSxcbiAgICAnNTA3Jzoge1xuICAgICAgICAnY29kZSc6IDUwNyxcbiAgICAgICAgJ3RleHQnOiAnSW5zdWZmaWNpZW50IFN0b3JhZ2UnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxUaGUgbWV0aG9kIGNvdWxkIG5vdCBiZSBwZXJmb3JtZWQgb24gdGhlIHJlc291cmNlIGJlY2F1c2UgdGhlIHNlcnZlciBpcyB1bmFibGUgdG8gc3RvcmUgdGhlIHJlcHJlc2VudGF0aW9uIG5lZWRlZCB0byBzdWNjZXNzZnVsbHkgY29tcGxldGUgdGhlIHJlcXVlc3QuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzUyMTgjMTAuNicsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjUxOCNzZWN0aW9uLTEwLjYnXG4gICAgfSxcbiAgICAnNTExJzoge1xuICAgICAgICAnY29kZSc6IDUxMSxcbiAgICAgICAgJ3RleHQnOiAnTmV0d29yayBBdXRoZW50aWNhdGlvbiBSZXF1aXJlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIGNsaWVudCBuZWVkcyB0byBhdXRoZW50aWNhdGUgdG8gZ2FpbiBuZXR3b3JrIGFjY2Vzcy5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNjU4NSM2JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NTg1I3NlY3Rpb24tNidcbiAgICB9XG59O1xuLyoqXG4gKiBnZXQgdGhlIHN0YXR1cyB0ZXh0IGZyb20gU3RhdHVzQ29kZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdHVzVGV4dChzdGF0dXMpIHtcbiAgICByZXR1cm4gU1RBVFVTX0NPREVfSU5GT1tzdGF0dXNdLnRleHQgfHwgJ1Vua25vd24gU3RhdHVzJztcbn1cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB0aGUgSHR0cCBTdGF0dXMgQ29kZSBpcyAyMDAtMjk5IChzdWNjZXNzKVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTdWNjZXNzKHN0YXR1cykgeyByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7IH1cbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0dHAtc3RhdHVzLWNvZGVzLmpzLm1hcCIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuLy8gUmVwbGFjZXMgdXNlIG9mIFJ4SlMgZGVsYXkuIFNlZSB2MC41LjQuXG4vKiogYWRkcyBzcGVjaWZpZWQgZGVsYXkgKGluIG1zKSB0byBib3RoIG5leHQgYW5kIGVycm9yIGNoYW5uZWxzIG9mIHRoZSByZXNwb25zZSBvYnNlcnZhYmxlICovXG5leHBvcnQgZnVuY3Rpb24gZGVsYXlSZXNwb25zZShyZXNwb25zZSQsIGRlbGF5TXMpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIHZhciBjb21wbGV0ZVBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdmFyIG5leHRQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSByZXNwb25zZSQuc3Vic2NyaWJlKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgbmV4dFBlbmRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlUGVuZGluZykge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGRlbGF5TXMpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gb2JzZXJ2ZXIuZXJyb3IoZXJyb3IpOyB9LCBkZWxheU1zKTsgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29tcGxldGVQZW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICghbmV4dFBlbmRpbmcpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbGF5LXJlc3BvbnNlLmpzLm1hcCIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8qKlxuKiBJbnRlcmZhY2UgZm9yIGEgY2xhc3MgdGhhdCBjcmVhdGVzIGFuIGluLW1lbW9yeSBkYXRhYmFzZVxuKlxuKiBJdHMgYGNyZWF0ZURiYCBtZXRob2QgY3JlYXRlcyBhIGhhc2ggb2YgbmFtZWQgY29sbGVjdGlvbnMgdGhhdCByZXByZXNlbnRzIHRoZSBkYXRhYmFzZVxuKlxuKiBGb3IgbWF4aW11bSBmbGV4aWJpbGl0eSwgdGhlIHNlcnZpY2UgbWF5IGRlZmluZSBIVFRQIG1ldGhvZCBvdmVycmlkZXMuXG4qIFN1Y2ggbWV0aG9kcyBtdXN0IG1hdGNoIHRoZSBzcGVsbGluZyBvZiBhbiBIVFRQIG1ldGhvZCBpbiBsb3dlciBjYXNlIChlLmcsIFwiZ2V0XCIpLlxuKiBJZiBhIHJlcXVlc3QgaGFzIGEgbWF0Y2hpbmcgbWV0aG9kLCBpdCB3aWxsIGJlIGNhbGxlZCBhcyBpblxuKiBgZ2V0KGluZm86IHJlcXVlc3RJbmZvLCBkYjoge30pYCB3aGVyZSBgZGJgIGlzIHRoZSBkYXRhYmFzZSBvYmplY3QgZGVzY3JpYmVkIGFib3ZlLlxuKi9cbnZhciBJbk1lbW9yeURiU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSW5NZW1vcnlEYlNlcnZpY2UoKSB7XG4gICAgfVxuICAgIHJldHVybiBJbk1lbW9yeURiU2VydmljZTtcbn0oKSk7XG5leHBvcnQgeyBJbk1lbW9yeURiU2VydmljZSB9O1xuLyoqXG4qIEludGVyZmFjZSBmb3IgSW5NZW1vcnlCYWNrZW5kIGNvbmZpZ3VyYXRpb24gb3B0aW9uc1xuKi9cbnZhciBJbk1lbW9yeUJhY2tlbmRDb25maWdBcmdzID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBJbk1lbW9yeUJhY2tlbmRDb25maWdBcmdzKCkge1xuICAgIH1cbiAgICByZXR1cm4gSW5NZW1vcnlCYWNrZW5kQ29uZmlnQXJncztcbn0oKSk7XG5leHBvcnQgeyBJbk1lbW9yeUJhY2tlbmRDb25maWdBcmdzIH07XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8qKlxuKiAgSW5NZW1vcnlCYWNrZW5kU2VydmljZSBjb25maWd1cmF0aW9uIG9wdGlvbnNcbiogIFVzYWdlOlxuKiAgICBJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290KEluTWVtSGVyb1NlcnZpY2UsIHtkZWxheTogNjAwfSlcbipcbiogIG9yIGlmIHByb3ZpZGluZyBzZXBhcmF0ZWx5OlxuKiAgICBwcm92aWRlKEluTWVtb3J5QmFja2VuZENvbmZpZywge3VzZVZhbHVlOiB7ZGVsYXk6IDYwMH19KSxcbiovXG52YXIgSW5NZW1vcnlCYWNrZW5kQ29uZmlnID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBJbk1lbW9yeUJhY2tlbmRDb25maWcoY29uZmlnKSB7XG4gICAgICAgIGlmIChjb25maWcgPT09IHZvaWQgMCkgeyBjb25maWcgPSB7fTsgfVxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHtcbiAgICAgICAgICAgIC8vIGRlZmF1bHQgY29uZmlnOlxuICAgICAgICAgICAgY2FzZVNlbnNpdGl2ZVNlYXJjaDogZmFsc2UsXG4gICAgICAgICAgICBkYXRhRW5jYXBzdWxhdGlvbjogZmFsc2UsXG4gICAgICAgICAgICBkZWxheTogNTAwLFxuICAgICAgICAgICAgZGVsZXRlNDA0OiBmYWxzZSxcbiAgICAgICAgICAgIHBhc3NUaHJ1VW5rbm93blVybDogZmFsc2UsXG4gICAgICAgICAgICBwb3N0MjA0OiB0cnVlLFxuICAgICAgICAgICAgcG9zdDQwOTogZmFsc2UsXG4gICAgICAgICAgICBwdXQyMDQ6IHRydWUsXG4gICAgICAgICAgICBwdXQ0MDQ6IGZhbHNlLFxuICAgICAgICAgICAgYXBpQmFzZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgaG9zdDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgcm9vdFBhdGg6IHVuZGVmaW5lZCAvLyBkZWZhdWx0IHZhbHVlIGlzIGFjdHVhbGx5IHNldCBpbiBJbk1lbW9yeUJhY2tlbmRTZXJ2aWNlIGN0b3JcbiAgICAgICAgfSwgY29uZmlnKTtcbiAgICB9XG4gICAgcmV0dXJuIEluTWVtb3J5QmFja2VuZENvbmZpZztcbn0oKSk7XG5leHBvcnQgeyBJbk1lbW9yeUJhY2tlbmRDb25maWcgfTtcbkluTWVtb3J5QmFja2VuZENvbmZpZy5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogSW5qZWN0YWJsZSB9LFxuXTtcbi8qKiBAbm9jb2xsYXBzZSAqL1xuSW5NZW1vcnlCYWNrZW5kQ29uZmlnLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgIHsgdHlwZTogSW5NZW1vcnlCYWNrZW5kQ29uZmlnQXJncywgfSxcbl07IH07XG4vKiogUmV0dXJuIGluZm9ybWF0aW9uIChVcmlJbmZvKSBhYm91dCBhIFVSSSAgKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVVyaShzdHIpIHtcbiAgICAvLyBBZGFwdGVkIGZyb20gcGFyc2V1cmkgcGFja2FnZSAtIGh0dHA6Ly9ibG9nLnN0ZXZlbmxldml0aGFuLmNvbS9hcmNoaXZlcy9wYXJzZXVyaVxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICB2YXIgVVJMX1JFR0VYID0gL14oPzooPyFbXjpAXSs6W146QFxcL10qQCkoW146XFwvPyMuXSspOik/KD86XFwvXFwvKT8oKD86KChbXjpAXSopKD86OihbXjpAXSopKT8pP0ApPyhbXjpcXC8/I10qKSg/OjooXFxkKikpPykoKChcXC8oPzpbXj8jXSg/IVtePyNcXC9dKlxcLltePyNcXC8uXSsoPzpbPyNdfCQpKSkqXFwvPyk/KFtePyNcXC9dKikpKD86XFw/KFteI10qKSk/KD86IyguKikpPykvO1xuICAgIHZhciBtID0gVVJMX1JFR0VYLmV4ZWMoc3RyKTtcbiAgICB2YXIgdXJpID0ge1xuICAgICAgICBzb3VyY2U6ICcnLFxuICAgICAgICBwcm90b2NvbDogJycsXG4gICAgICAgIGF1dGhvcml0eTogJycsXG4gICAgICAgIHVzZXJJbmZvOiAnJyxcbiAgICAgICAgdXNlcjogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgaG9zdDogJycsXG4gICAgICAgIHBvcnQ6ICcnLFxuICAgICAgICByZWxhdGl2ZTogJycsXG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgICBkaXJlY3Rvcnk6ICcnLFxuICAgICAgICBmaWxlOiAnJyxcbiAgICAgICAgcXVlcnk6ICcnLFxuICAgICAgICBhbmNob3I6ICcnXG4gICAgfTtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHVyaSk7XG4gICAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIHVyaVtrZXlzW2ldXSA9IG1baV0gfHwgJyc7XG4gICAgfVxuICAgIHJldHVybiB1cmk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVHJhaWxpbmdTbGFzaChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWludGVyZmFjZXMuanMubWFwIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzL0JlaGF2aW9yU3ViamVjdCc7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMvb2JzZXJ2YWJsZS9vZic7XG5pbXBvcnQgeyBmcm9tUHJvbWlzZSB9IGZyb20gJ3J4anMvb2JzZXJ2YWJsZS9mcm9tUHJvbWlzZSc7XG5pbXBvcnQgeyBpc1Byb21pc2UgfSBmcm9tICdyeGpzL3V0aWwvaXNQcm9taXNlJztcbmltcG9ydCB7IGNvbmNhdE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3IvY29uY2F0TWFwJztcbmltcG9ydCB7IGZpcnN0IH0gZnJvbSAncnhqcy9vcGVyYXRvci9maXJzdCc7XG5pbXBvcnQgeyBnZXRTdGF0dXNUZXh0LCBpc1N1Y2Nlc3MsIFNUQVRVUyB9IGZyb20gJy4vaHR0cC1zdGF0dXMtY29kZXMnO1xuaW1wb3J0IHsgZGVsYXlSZXNwb25zZSB9IGZyb20gJy4vZGVsYXktcmVzcG9uc2UnO1xuaW1wb3J0IHsgSW5NZW1vcnlCYWNrZW5kQ29uZmlnLCBwYXJzZVVyaSwgcmVtb3ZlVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIGluLW1lbW9yeSB3ZWIgYXBpIGJhY2stZW5kc1xuICogU2ltdWxhdGUgdGhlIGJlaGF2aW9yIG9mIGEgUkVTVHkgd2ViIGFwaVxuICogYmFja2VkIGJ5IHRoZSBzaW1wbGUgaW4tbWVtb3J5IGRhdGEgc3RvcmUgcHJvdmlkZWQgYnkgdGhlIGluamVjdGVkIGBJbk1lbW9yeURiU2VydmljZWAgc2VydmljZS5cbiAqIENvbmZvcm1zIG1vc3RseSB0byBiZWhhdmlvciBkZXNjcmliZWQgaGVyZTpcbiAqIGh0dHA6Ly93d3cucmVzdGFwaXR1dG9yaWFsLmNvbS9sZXNzb25zL2h0dHBtZXRob2RzLmh0bWxcbiAqL1xudmFyIEJhY2tlbmRTZXJ2aWNlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCYWNrZW5kU2VydmljZShpbk1lbURiU2VydmljZSwgY29uZmlnKSB7XG4gICAgICAgIGlmIChjb25maWcgPT09IHZvaWQgMCkgeyBjb25maWcgPSB7fTsgfVxuICAgICAgICB0aGlzLmluTWVtRGJTZXJ2aWNlID0gaW5NZW1EYlNlcnZpY2U7XG4gICAgICAgIHRoaXMuY29uZmlnID0gbmV3IEluTWVtb3J5QmFja2VuZENvbmZpZygpO1xuICAgICAgICB0aGlzLnJlcXVlc3RJbmZvVXRpbHMgPSB0aGlzLmdldFJlcXVlc3RJbmZvVXRpbHMoKTtcbiAgICAgICAgdmFyIGxvYyA9IHRoaXMuZ2V0TG9jYXRpb24oJy8nKTtcbiAgICAgICAgdGhpcy5jb25maWcuaG9zdCA9IGxvYy5ob3N0OyAvLyBkZWZhdWx0IHRvIGFwcCB3ZWIgc2VydmVyIGhvc3RcbiAgICAgICAgdGhpcy5jb25maWcucm9vdFBhdGggPSBsb2MucGF0aDsgLy8gZGVmYXVsdCB0byBwYXRoIHdoZW4gYXBwIGlzIHNlcnZlZCAoZS5nLicvJylcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmNvbmZpZywgY29uZmlnKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZSwgXCJkYlJlYWR5XCIsIHtcbiAgICAgICAgLy8vLyAgcHJvdGVjdGVkIC8vLy8vXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRiUmVhZHlTdWJqZWN0KSB7XG4gICAgICAgICAgICAgICAgLy8gZmlyc3QgdGltZSB0aGUgc2VydmljZSBpcyBjYWxsZWQuXG4gICAgICAgICAgICAgICAgdGhpcy5kYlJlYWR5U3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXREYigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZpcnN0LmNhbGwodGhpcy5kYlJlYWR5U3ViamVjdC5hc09ic2VydmFibGUoKSwgZnVuY3Rpb24gKHIpIHsgcmV0dXJuIHI7IH0pO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBQcm9jZXNzIFJlcXVlc3QgYW5kIHJldHVybiBhbiBPYnNlcnZhYmxlIG9mIEh0dHAgUmVzcG9uc2Ugb2JqZWN0XG4gICAgICogaW4gdGhlIG1hbm5lciBvZiBhIFJFU1R5IHdlYiBhcGkuXG4gICAgICpcbiAgICAgKiBFeHBlY3QgVVJJIHBhdHRlcm4gaW4gdGhlIGZvcm0gOmJhc2UvOmNvbGxlY3Rpb25OYW1lLzppZD9cbiAgICAgKiBFeGFtcGxlczpcbiAgICAgKiAgIC8vIGZvciBzdG9yZSB3aXRoIGEgJ2N1c3RvbWVycycgY29sbGVjdGlvblxuICAgICAqICAgR0VUIGFwaS9jdXN0b21lcnMgICAgICAgICAgLy8gYWxsIGN1c3RvbWVyc1xuICAgICAqICAgR0VUIGFwaS9jdXN0b21lcnMvNDIgICAgICAgLy8gdGhlIGNoYXJhY3RlciB3aXRoIGlkPTQyXG4gICAgICogICBHRVQgYXBpL2N1c3RvbWVycz9uYW1lPV5qICAvLyAnaicgaXMgYSByZWdleDsgcmV0dXJucyBjdXN0b21lcnMgd2hvc2UgbmFtZSBzdGFydHMgd2l0aCAnaicgb3IgJ0onXG4gICAgICogICBHRVQgYXBpL2N1c3RvbWVycy5qc29uLzQyICAvLyBpZ25vcmVzIHRoZSBcIi5qc29uXCJcbiAgICAgKlxuICAgICAqIEFsc28gYWNjZXB0cyBkaXJlY3QgY29tbWFuZHMgdG8gdGhlIHNlcnZpY2UgaW4gd2hpY2ggdGhlIGxhc3Qgc2VnbWVudCBvZiB0aGUgYXBpQmFzZSBpcyB0aGUgd29yZCBcImNvbW1hbmRzXCJcbiAgICAgKiBFeGFtcGxlczpcbiAgICAgKiAgICAgUE9TVCBjb21tYW5kcy9yZXNldERiLFxuICAgICAqICAgICBHRVQvUE9TVCBjb21tYW5kcy9jb25maWcgLSBnZXQgb3IgKHJlKXNldCB0aGUgY29uZmlnXG4gICAgICpcbiAgICAgKiAgIEhUVFAgb3ZlcnJpZGVzOlxuICAgICAqICAgICBJZiB0aGUgaW5qZWN0ZWQgaW5NZW1EYlNlcnZpY2UgZGVmaW5lcyBhbiBIVFRQIG1ldGhvZCAobG93ZXJjYXNlKVxuICAgICAqICAgICBUaGUgcmVxdWVzdCBpcyBmb3J3YXJkZWQgdG8gdGhhdCBtZXRob2QgYXMgaW5cbiAgICAgKiAgICAgYGluTWVtRGJTZXJ2aWNlLmdldChyZXF1ZXN0SW5mbylgXG4gICAgICogICAgIHdoaWNoIG11c3QgcmV0dXJuIGVpdGhlciBhbiBPYnNlcnZhYmxlIG9mIHRoZSByZXNwb25zZSB0eXBlXG4gICAgICogICAgIGZvciB0aGlzIGh0dHAgbGlicmFyeSBvciBudWxsfHVuZGVmaW5lZCAod2hpY2ggbWVhbnMgXCJrZWVwIHByb2Nlc3NpbmdcIikuXG4gICAgICovXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmhhbmRsZVJlcXVlc3QgPSBmdW5jdGlvbiAocmVxKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vICBoYW5kbGUgdGhlIHJlcXVlc3Qgd2hlbiB0aGVyZSBpcyBhbiBpbi1tZW1vcnkgZGF0YWJhc2VcbiAgICAgICAgcmV0dXJuIGNvbmNhdE1hcC5jYWxsKHRoaXMuZGJSZWFkeSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlUmVxdWVzdF8ocmVxKTsgfSk7XG4gICAgfTtcbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuaGFuZGxlUmVxdWVzdF8gPSBmdW5jdGlvbiAocmVxKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciB1cmwgPSByZXEudXJsV2l0aFBhcmFtcyA/IHJlcS51cmxXaXRoUGFyYW1zIDogcmVxLnVybDtcbiAgICAgICAgLy8gVHJ5IG92ZXJyaWRlIHBhcnNlclxuICAgICAgICAvLyBJZiBubyBvdmVycmlkZSBwYXJzZXIgb3IgaXQgcmV0dXJucyBub3RoaW5nLCB1c2UgZGVmYXVsdCBwYXJzZXJcbiAgICAgICAgdmFyIHBhcnNlciA9IHRoaXMuYmluZCgncGFyc2VSZXF1ZXN0VXJsJyk7XG4gICAgICAgIHZhciBwYXJzZWQgPSAocGFyc2VyICYmIHBhcnNlcih1cmwsIHRoaXMucmVxdWVzdEluZm9VdGlscykpIHx8XG4gICAgICAgICAgICB0aGlzLnBhcnNlUmVxdWVzdFVybCh1cmwpO1xuICAgICAgICB2YXIgY29sbGVjdGlvbk5hbWUgPSBwYXJzZWQuY29sbGVjdGlvbk5hbWU7XG4gICAgICAgIHZhciBjb2xsZWN0aW9uID0gdGhpcy5kYltjb2xsZWN0aW9uTmFtZV07XG4gICAgICAgIHZhciByZXFJbmZvID0ge1xuICAgICAgICAgICAgcmVxOiByZXEsXG4gICAgICAgICAgICBhcGlCYXNlOiBwYXJzZWQuYXBpQmFzZSxcbiAgICAgICAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb24sXG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbk5hbWUsXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmNyZWF0ZUhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxuICAgICAgICAgICAgaWQ6IHRoaXMucGFyc2VJZChjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSwgcGFyc2VkLmlkKSxcbiAgICAgICAgICAgIG1ldGhvZDogdGhpcy5nZXRSZXF1ZXN0TWV0aG9kKHJlcSksXG4gICAgICAgICAgICBxdWVyeTogcGFyc2VkLnF1ZXJ5LFxuICAgICAgICAgICAgcmVzb3VyY2VVcmw6IHBhcnNlZC5yZXNvdXJjZVVybCxcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgdXRpbHM6IHRoaXMucmVxdWVzdEluZm9VdGlsc1xuICAgICAgICB9O1xuICAgICAgICB2YXIgcmVzT3B0aW9ucztcbiAgICAgICAgaWYgKC9jb21tYW5kc1xcLz8kL2kudGVzdChyZXFJbmZvLmFwaUJhc2UpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21tYW5kcyhyZXFJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbWV0aG9kSW50ZXJjZXB0b3IgPSB0aGlzLmJpbmQocmVxSW5mby5tZXRob2QpO1xuICAgICAgICBpZiAobWV0aG9kSW50ZXJjZXB0b3IpIHtcbiAgICAgICAgICAgIC8vIEluTWVtb3J5RGJTZXJ2aWNlIGludGVyY2VwdHMgdGhpcyBIVFRQIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGlmIGludGVyY2VwdG9yIHByb2R1Y2VkIGEgcmVzcG9uc2UsIHJldHVybiBpdC5cbiAgICAgICAgICAgIC8vIGVsc2UgSW5NZW1vcnlEYlNlcnZpY2UgY2hvc2Ugbm90IHRvIGludGVyY2VwdDsgY29udGludWUgcHJvY2Vzc2luZy5cbiAgICAgICAgICAgIHZhciBpbnRlcmNlcHRvclJlc3BvbnNlID0gbWV0aG9kSW50ZXJjZXB0b3IocmVxSW5mbyk7XG4gICAgICAgICAgICBpZiAoaW50ZXJjZXB0b3JSZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnRlcmNlcHRvclJlc3BvbnNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRiW2NvbGxlY3Rpb25OYW1lXSkge1xuICAgICAgICAgICAgLy8gcmVxdWVzdCBpcyBmb3IgYSBrbm93biBjb2xsZWN0aW9uIG9mIHRoZSBJbk1lbW9yeURiU2VydmljZVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUmVzcG9uc2UkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmNvbGxlY3Rpb25IYW5kbGVyKHJlcUluZm8pOyB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jb25maWcucGFzc1RocnVVbmtub3duVXJsKSB7XG4gICAgICAgICAgICAvLyB1bmtub3duIGNvbGxlY3Rpb247IHBhc3MgcmVxdWVzdCB0aHJ1IHRvIGEgXCJyZWFsXCIgYmFja2VuZC5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFBhc3NUaHJ1QmFja2VuZCgpLmhhbmRsZShyZXEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIDQwNCAtIGNhbid0IGhhbmRsZSB0aGlzIHJlcXVlc3RcbiAgICAgICAgcmVzT3B0aW9ucyA9IHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnModXJsLCBTVEFUVVMuTk9UX0ZPVU5ELCBcIkNvbGxlY3Rpb24gJ1wiICsgY29sbGVjdGlvbk5hbWUgKyBcIicgbm90IGZvdW5kXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVSZXNwb25zZSQoZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVzT3B0aW9uczsgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGQgY29uZmlndXJlZCBkZWxheSB0byByZXNwb25zZSBvYnNlcnZhYmxlIHVubGVzcyBkZWxheSA9PT0gMFxuICAgICAqL1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5hZGREZWxheSA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICB2YXIgZCA9IHRoaXMuY29uZmlnLmRlbGF5O1xuICAgICAgICByZXR1cm4gZCA9PT0gMCA/IHJlc3BvbnNlIDogZGVsYXlSZXNwb25zZShyZXNwb25zZSwgZCB8fCA1MDApO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQXBwbHkgcXVlcnkvc2VhcmNoIHBhcmFtZXRlcnMgYXMgYSBmaWx0ZXIgb3ZlciB0aGUgY29sbGVjdGlvblxuICAgICAqIFRoaXMgaW1wbCBvbmx5IHN1cHBvcnRzIFJlZ0V4cCBxdWVyaWVzIG9uIHN0cmluZyBwcm9wZXJ0aWVzIG9mIHRoZSBjb2xsZWN0aW9uXG4gICAgICogQU5EcyB0aGUgY29uZGl0aW9ucyB0b2dldGhlclxuICAgICAqL1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5hcHBseVF1ZXJ5ID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIHF1ZXJ5KSB7XG4gICAgICAgIC8vIGV4dHJhY3QgZmlsdGVyaW5nIGNvbmRpdGlvbnMgLSB7cHJvcGVydHlOYW1lLCBSZWdFeHBzKSAtIGZyb20gcXVlcnkvc2VhcmNoIHBhcmFtZXRlcnNcbiAgICAgICAgdmFyIGNvbmRpdGlvbnMgPSBbXTtcbiAgICAgICAgdmFyIGNhc2VTZW5zaXRpdmUgPSB0aGlzLmNvbmZpZy5jYXNlU2Vuc2l0aXZlU2VhcmNoID8gdW5kZWZpbmVkIDogJ2knO1xuICAgICAgICBxdWVyeS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSkge1xuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbiAodikgeyByZXR1cm4gY29uZGl0aW9ucy5wdXNoKHsgbmFtZTogbmFtZSwgcng6IG5ldyBSZWdFeHAoZGVjb2RlVVJJKHYpLCBjYXNlU2Vuc2l0aXZlKSB9KTsgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgbGVuID0gY29uZGl0aW9ucy5sZW5ndGg7XG4gICAgICAgIGlmICghbGVuKSB7XG4gICAgICAgICAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgICAgICAgfVxuICAgICAgICAvLyBBTkQgdGhlIFJlZ0V4cCBjb25kaXRpb25zXG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uLmZpbHRlcihmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgICB2YXIgb2sgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIGkgPSBsZW47XG4gICAgICAgICAgICB3aGlsZSAob2sgJiYgaSkge1xuICAgICAgICAgICAgICAgIGkgLT0gMTtcbiAgICAgICAgICAgICAgICB2YXIgY29uZCA9IGNvbmRpdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgb2sgPSBjb25kLnJ4LnRlc3Qocm93W2NvbmQubmFtZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9rO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBhIG1ldGhvZCBmcm9tIHRoZSBgSW5NZW1vcnlEYlNlcnZpY2VgIChpZiBpdCBleGlzdHMpLCBib3VuZCB0byB0aGF0IHNlcnZpY2VcbiAgICAgKi9cbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChtZXRob2ROYW1lKSB7XG4gICAgICAgIHZhciBmbiA9IHRoaXMuaW5NZW1EYlNlcnZpY2VbbWV0aG9kTmFtZV07XG4gICAgICAgIHJldHVybiBmbiA/IGZuLmJpbmQodGhpcy5pbk1lbURiU2VydmljZSkgOiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuYm9kaWZ5ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmRhdGFFbmNhcHN1bGF0aW9uID8geyBkYXRhOiBkYXRhIH0gOiBkYXRhO1xuICAgIH07XG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIH07XG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmNvbGxlY3Rpb25IYW5kbGVyID0gZnVuY3Rpb24gKHJlcUluZm8pIHtcbiAgICAgICAgLy8gY29uc3QgcmVxID0gcmVxSW5mby5yZXE7XG4gICAgICAgIHZhciByZXNPcHRpb25zO1xuICAgICAgICBzd2l0Y2ggKHJlcUluZm8ubWV0aG9kKSB7XG4gICAgICAgICAgICBjYXNlICdnZXQnOlxuICAgICAgICAgICAgICAgIHJlc09wdGlvbnMgPSB0aGlzLmdldChyZXFJbmZvKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Bvc3QnOlxuICAgICAgICAgICAgICAgIHJlc09wdGlvbnMgPSB0aGlzLnBvc3QocmVxSW5mbyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwdXQnOlxuICAgICAgICAgICAgICAgIHJlc09wdGlvbnMgPSB0aGlzLnB1dChyZXFJbmZvKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICAgICAgICAgICAgcmVzT3B0aW9ucyA9IHRoaXMuZGVsZXRlKHJlcUluZm8pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXNPcHRpb25zID0gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyhyZXFJbmZvLnVybCwgU1RBVFVTLk1FVEhPRF9OT1RfQUxMT1dFRCwgJ01ldGhvZCBub3QgYWxsb3dlZCcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGBpbk1lbURiU2VydmljZS5yZXNwb25zZUludGVyY2VwdG9yYCBleGlzdHMsIGxldCBpdCBtb3JwaCB0aGUgcmVzcG9uc2Ugb3B0aW9uc1xuICAgICAgICB2YXIgaW50ZXJjZXB0b3IgPSB0aGlzLmJpbmQoJ3Jlc3BvbnNlSW50ZXJjZXB0b3InKTtcbiAgICAgICAgcmV0dXJuIGludGVyY2VwdG9yID8gaW50ZXJjZXB0b3IocmVzT3B0aW9ucywgcmVxSW5mbykgOiByZXNPcHRpb25zO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ29tbWFuZHMgcmVjb25maWd1cmUgdGhlIGluLW1lbW9yeSB3ZWIgYXBpIHNlcnZpY2Ugb3IgZXh0cmFjdCBpbmZvcm1hdGlvbiBmcm9tIGl0LlxuICAgICAqIENvbW1hbmRzIGlnbm9yZSB0aGUgbGF0ZW5jeSBkZWxheSBhbmQgcmVzcG9uZCBBU0FQLlxuICAgICAqXG4gICAgICogV2hlbiB0aGUgbGFzdCBzZWdtZW50IG9mIHRoZSBgYXBpQmFzZWAgcGF0aCBpcyBcImNvbW1hbmRzXCIsXG4gICAgICogdGhlIGBjb2xsZWN0aW9uTmFtZWAgaXMgdGhlIGNvbW1hbmQuXG4gICAgICpcbiAgICAgKiBFeGFtcGxlIFVSTHM6XG4gICAgICogICBjb21tYW5kcy9yZXNldGRiIChQT1NUKSAvLyBSZXNldCB0aGUgXCJkYXRhYmFzZVwiIHRvIGl0cyBvcmlnaW5hbCBzdGF0ZVxuICAgICAqICAgY29tbWFuZHMvY29uZmlnIChHRVQpICAgLy8gUmV0dXJuIHRoaXMgc2VydmljZSdzIGNvbmZpZyBvYmplY3RcbiAgICAgKiAgIGNvbW1hbmRzL2NvbmZpZyAoUE9TVCkgIC8vIFVwZGF0ZSB0aGUgY29uZmlnIChlLmcuIHRoZSBkZWxheSlcbiAgICAgKlxuICAgICAqIFVzYWdlOlxuICAgICAqICAgaHR0cC5wb3N0KCdjb21tYW5kcy9yZXNldGRiJywgdW5kZWZpbmVkKTtcbiAgICAgKiAgIGh0dHAuZ2V0KCdjb21tYW5kcy9jb25maWcnKTtcbiAgICAgKiAgIGh0dHAucG9zdCgnY29tbWFuZHMvY29uZmlnJywgJ3tcImRlbGF5XCI6MTAwMH0nKTtcbiAgICAgKi9cbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuY29tbWFuZHMgPSBmdW5jdGlvbiAocmVxSW5mbykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgY29tbWFuZCA9IHJlcUluZm8uY29sbGVjdGlvbk5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdmFyIG1ldGhvZCA9IHJlcUluZm8ubWV0aG9kO1xuICAgICAgICB2YXIgcmVzT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHVybDogcmVxSW5mby51cmxcbiAgICAgICAgfTtcbiAgICAgICAgc3dpdGNoIChjb21tYW5kKSB7XG4gICAgICAgICAgICBjYXNlICdyZXNldGRiJzpcbiAgICAgICAgICAgICAgICByZXNPcHRpb25zLnN0YXR1cyA9IFNUQVRVUy5OT19DT05URU5UO1xuICAgICAgICAgICAgICAgIHJldHVybiBjb25jYXRNYXAuY2FsbCh0aGlzLnJlc2V0RGIocmVxSW5mbyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmNyZWF0ZVJlc3BvbnNlJChmdW5jdGlvbiAoKSB7IHJldHVybiByZXNPcHRpb25zOyB9LCBmYWxzZSAvKiBubyBsYXRlbmN5IGRlbGF5ICovKTsgfSk7XG4gICAgICAgICAgICBjYXNlICdjb25maWcnOlxuICAgICAgICAgICAgICAgIGlmIChtZXRob2QgPT09ICdnZXQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc09wdGlvbnMuc3RhdHVzID0gU1RBVFVTLk9LO1xuICAgICAgICAgICAgICAgICAgICByZXNPcHRpb25zLmJvZHkgPSB0aGlzLmNsb25lKHRoaXMuY29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gYW55IG90aGVyIEhUVFAgbWV0aG9kIGlzIGFzc3VtZWQgdG8gYmUgYSBjb25maWcgdXBkYXRlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYm9keSA9IHRoaXMuZ2V0SnNvbkJvZHkocmVxSW5mby5yZXEpO1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuY29uZmlnLCBib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXNzVGhydUJhY2tlbmQgPSB1bmRlZmluZWQ7IC8vIHJlLWNyZWF0ZSB3aGVuIG5lZWRlZFxuICAgICAgICAgICAgICAgICAgICByZXNPcHRpb25zLnN0YXR1cyA9IFNUQVRVUy5OT19DT05URU5UO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmVzT3B0aW9ucyA9IHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnMocmVxSW5mby51cmwsIFNUQVRVUy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsIFwiVW5rbm93biBjb21tYW5kIFxcXCJcIiArIGNvbW1hbmQgKyBcIlxcXCJcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUmVzcG9uc2UkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc09wdGlvbnM7IH0sIGZhbHNlIC8qIG5vIGxhdGVuY3kgZGVsYXkgKi8pO1xuICAgIH07XG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zID0gZnVuY3Rpb24gKHVybCwgc3RhdHVzLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBib2R5OiB7IGVycm9yOiBcIlwiICsgbWVzc2FnZSB9LFxuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmNyZWF0ZUhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxuICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXNcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGNvbGQgcmVzcG9uc2UgT2JzZXJ2YWJsZSBmcm9tIGEgZmFjdG9yeSBmb3IgUmVzcG9uc2VPcHRpb25zXG4gICAgICogQHBhcmFtIHJlc09wdGlvbnNGYWN0b3J5IC0gY3JlYXRlcyBSZXNwb25zZU9wdGlvbnMgd2hlbiBvYnNlcnZhYmxlIGlzIHN1YnNjcmliZWRcbiAgICAgKiBAcGFyYW0gd2l0aERlbGF5IC0gaWYgdHJ1ZSAoZGVmYXVsdCksIGFkZCBzaW11bGF0ZWQgbGF0ZW5jeSBkZWxheSBmcm9tIGNvbmZpZ3VyYXRpb25cbiAgICAgKi9cbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuY3JlYXRlUmVzcG9uc2UkID0gZnVuY3Rpb24gKHJlc09wdGlvbnNGYWN0b3J5LCB3aXRoRGVsYXkpIHtcbiAgICAgICAgaWYgKHdpdGhEZWxheSA9PT0gdm9pZCAwKSB7IHdpdGhEZWxheSA9IHRydWU7IH1cbiAgICAgICAgdmFyIHJlc09wdGlvbnMkID0gdGhpcy5jcmVhdGVSZXNwb25zZU9wdGlvbnMkKHJlc09wdGlvbnNGYWN0b3J5KTtcbiAgICAgICAgdmFyIHJlc3AkID0gdGhpcy5jcmVhdGVSZXNwb25zZSRmcm9tUmVzcG9uc2VPcHRpb25zJChyZXNPcHRpb25zJCk7XG4gICAgICAgIHJldHVybiB3aXRoRGVsYXkgPyB0aGlzLmFkZERlbGF5KHJlc3AkKSA6IHJlc3AkO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgY29sZCBPYnNlcnZhYmxlIG9mIFJlc3BvbnNlT3B0aW9ucy5cbiAgICAgKiBAcGFyYW0gcmVzT3B0aW9uc0ZhY3RvcnkgLSBjcmVhdGVzIFJlc3BvbnNlT3B0aW9ucyB3aGVuIG9ic2VydmFibGUgaXMgc3Vic2NyaWJlZFxuICAgICAqL1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5jcmVhdGVSZXNwb25zZU9wdGlvbnMkID0gZnVuY3Rpb24gKHJlc09wdGlvbnNGYWN0b3J5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAocmVzcG9uc2VPYnNlcnZlcikge1xuICAgICAgICAgICAgdmFyIHJlc09wdGlvbnM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc09wdGlvbnMgPSByZXNPcHRpb25zRmFjdG9yeSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVyciA9IGVycm9yLm1lc3NhZ2UgfHwgZXJyb3I7XG4gICAgICAgICAgICAgICAgcmVzT3B0aW9ucyA9IF90aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKCcnLCBTVEFUVVMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLCBcIlwiICsgZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzdGF0dXMgPSByZXNPcHRpb25zLnN0YXR1cztcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzT3B0aW9ucy5zdGF0dXNUZXh0ID0gZ2V0U3RhdHVzVGV4dChzdGF0dXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHsgfVxuICAgICAgICAgICAgaWYgKGlzU3VjY2VzcyhzdGF0dXMpKSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2VPYnNlcnZlci5uZXh0KHJlc09wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlT2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlT2JzZXJ2ZXIuZXJyb3IocmVzT3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyB9OyAvLyB1bnN1YnNjcmliZSBmdW5jdGlvblxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSBfYS5jb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSA9IF9hLmNvbGxlY3Rpb25OYW1lLCBoZWFkZXJzID0gX2EuaGVhZGVycywgaWQgPSBfYS5pZCwgdXJsID0gX2EudXJsO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xuICAgICAgICBpZiAoaWQgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5OT1RfRk9VTkQsIFwiTWlzc2luZyBcXFwiXCIgKyBjb2xsZWN0aW9uTmFtZSArIFwiXFxcIiBpZFwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXhpc3RzID0gdGhpcy5yZW1vdmVCeUlkKGNvbGxlY3Rpb24sIGlkKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgICAgICBzdGF0dXM6IChleGlzdHMgfHwgIXRoaXMuY29uZmlnLmRlbGV0ZTQwNCkgPyBTVEFUVVMuTk9fQ09OVEVOVCA6IFNUQVRVUy5OT1RfRk9VTkRcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEZpbmQgZmlyc3QgaW5zdGFuY2Ugb2YgaXRlbSBpbiBjb2xsZWN0aW9uIGJ5IGBpdGVtLmlkYFxuICAgICAqIEBwYXJhbSBjb2xsZWN0aW9uXG4gICAgICogQHBhcmFtIGlkXG4gICAgICovXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmZpbmRCeUlkID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGlkKSB7XG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uLmZpbmQoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0uaWQgPT09IGlkOyB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIHRoZSBuZXh0IGF2YWlsYWJsZSBpZCBmb3IgaXRlbSBpbiB0aGlzIGNvbGxlY3Rpb25cbiAgICAgKiBVc2UgbWV0aG9kIGZyb20gYGluTWVtRGJTZXJ2aWNlYCBpZiBpdCBleGlzdHMgYW5kIHJldHVybnMgYSB2YWx1ZSxcbiAgICAgKiBlbHNlIGRlbGVnYXRlcyB0byBgZ2VuSWREZWZhdWx0YC5cbiAgICAgKiBAcGFyYW0gY29sbGVjdGlvbiAtIGNvbGxlY3Rpb24gb2YgaXRlbXMgd2l0aCBgaWRgIGtleSBwcm9wZXJ0eVxuICAgICAqL1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5nZW5JZCA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSkge1xuICAgICAgICB2YXIgZ2VuSWQgPSB0aGlzLmJpbmQoJ2dlbklkJyk7XG4gICAgICAgIGlmIChnZW5JZCkge1xuICAgICAgICAgICAgdmFyIGlkID0gZ2VuSWQoY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUpO1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcbiAgICAgICAgICAgIGlmIChpZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VuSWREZWZhdWx0KGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERlZmF1bHQgZ2VuZXJhdG9yIG9mIHRoZSBuZXh0IGF2YWlsYWJsZSBpZCBmb3IgaXRlbSBpbiB0aGlzIGNvbGxlY3Rpb25cbiAgICAgKiBUaGlzIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gd29ya3Mgb25seSBmb3IgbnVtZXJpYyBpZHMuXG4gICAgICogQHBhcmFtIGNvbGxlY3Rpb24gLSBjb2xsZWN0aW9uIG9mIGl0ZW1zIHdpdGggYGlkYCBrZXkgcHJvcGVydHlcbiAgICAgKiBAcGFyYW0gY29sbGVjdGlvbk5hbWUgLSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uXG4gICAgICovXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmdlbklkRGVmYXVsdCA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNDb2xsZWN0aW9uSWROdW1lcmljKGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ29sbGVjdGlvbiAnXCIgKyBjb2xsZWN0aW9uTmFtZSArIFwiJyBpZCB0eXBlIGlzIG5vbi1udW1lcmljIG9yIHVua25vd24uIENhbiBvbmx5IGdlbmVyYXRlIG51bWVyaWMgaWRzLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbWF4SWQgPSAwO1xuICAgICAgICBjb2xsZWN0aW9uLnJlZHVjZShmdW5jdGlvbiAocHJldiwgaXRlbSkge1xuICAgICAgICAgICAgbWF4SWQgPSBNYXRoLm1heChtYXhJZCwgdHlwZW9mIGl0ZW0uaWQgPT09ICdudW1iZXInID8gaXRlbS5pZCA6IG1heElkKTtcbiAgICAgICAgfSwgdW5kZWZpbmVkKTtcbiAgICAgICAgcmV0dXJuIG1heElkICsgMTtcbiAgICB9O1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSBfYS5jb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSA9IF9hLmNvbGxlY3Rpb25OYW1lLCBoZWFkZXJzID0gX2EuaGVhZGVycywgaWQgPSBfYS5pZCwgcXVlcnkgPSBfYS5xdWVyeSwgdXJsID0gX2EudXJsO1xuICAgICAgICB2YXIgZGF0YSA9IGNvbGxlY3Rpb247XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzXG4gICAgICAgIGlmIChpZCAhPSB1bmRlZmluZWQgJiYgaWQgIT09ICcnKSB7XG4gICAgICAgICAgICBkYXRhID0gdGhpcy5maW5kQnlJZChjb2xsZWN0aW9uLCBpZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocXVlcnkpIHtcbiAgICAgICAgICAgIGRhdGEgPSB0aGlzLmFwcGx5UXVlcnkoY29sbGVjdGlvbiwgcXVlcnkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnModXJsLCBTVEFUVVMuTk9UX0ZPVU5ELCBcIidcIiArIGNvbGxlY3Rpb25OYW1lICsgXCInIHdpdGggaWQ9J1wiICsgaWQgKyBcIicgbm90IGZvdW5kXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBib2R5OiB0aGlzLmJvZGlmeSh0aGlzLmNsb25lKGRhdGEpKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgICAgICBzdGF0dXM6IFNUQVRVUy5PS1xuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IGxvY2F0aW9uIGluZm8gZnJvbSBhIHVybCwgZXZlbiBvbiBzZXJ2ZXIgd2hlcmUgYGRvY3VtZW50YCBpcyBub3QgZGVmaW5lZFxuICAgICAqL1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5nZXRMb2NhdGlvbiA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgaWYgKCF1cmwuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgICAgICAgICAvLyBnZXQgdGhlIGRvY3VtZW50IGlmZiBydW5uaW5nIGluIGJyb3dzZXJcbiAgICAgICAgICAgIHZhciBkb2MgPSAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgPyB1bmRlZmluZWQgOiBkb2N1bWVudDtcbiAgICAgICAgICAgIC8vIGFkZCBob3N0IGluZm8gdG8gdXJsIGJlZm9yZSBwYXJzaW5nLiAgVXNlIGEgZmFrZSBob3N0IHdoZW4gbm90IGluIGJyb3dzZXIuXG4gICAgICAgICAgICB2YXIgYmFzZSA9IGRvYyA/IGRvYy5sb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBkb2MubG9jYXRpb24uaG9zdCA6ICdodHRwOi8vZmFrZSc7XG4gICAgICAgICAgICB1cmwgPSB1cmwuc3RhcnRzV2l0aCgnLycpID8gYmFzZSArIHVybCA6IGJhc2UgKyAnLycgKyB1cmw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcnNlVXJpKHVybCk7XG4gICAgfTtcbiAgICA7XG4gICAgLyoqXG4gICAgICogZ2V0IG9yIGNyZWF0ZSB0aGUgZnVuY3Rpb24gdGhhdCBwYXNzZXMgdW5oYW5kbGVkIHJlcXVlc3RzXG4gICAgICogdGhyb3VnaCB0byB0aGUgXCJyZWFsXCIgYmFja2VuZC5cbiAgICAgKi9cbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuZ2V0UGFzc1RocnVCYWNrZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXNzVGhydUJhY2tlbmQgP1xuICAgICAgICAgICAgdGhpcy5wYXNzVGhydUJhY2tlbmQgOlxuICAgICAgICAgICAgdGhpcy5wYXNzVGhydUJhY2tlbmQgPSB0aGlzLmNyZWF0ZVBhc3NUaHJ1QmFja2VuZCgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IHV0aWxpdHkgbWV0aG9kcyBmcm9tIHRoaXMgc2VydmljZSBpbnN0YW5jZS5cbiAgICAgKiBVc2VmdWwgd2l0aGluIGFuIEhUVFAgbWV0aG9kIG92ZXJyaWRlXG4gICAgICovXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmdldFJlcXVlc3RJbmZvVXRpbHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjcmVhdGVSZXNwb25zZSQ6IHRoaXMuY3JlYXRlUmVzcG9uc2UkLmJpbmQodGhpcyksXG4gICAgICAgICAgICBmaW5kQnlJZDogdGhpcy5maW5kQnlJZC5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgaXNDb2xsZWN0aW9uSWROdW1lcmljOiB0aGlzLmlzQ29sbGVjdGlvbklkTnVtZXJpYy5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZ2V0Q29uZmlnOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5jb25maWc7IH0sXG4gICAgICAgICAgICBnZXREYjogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZGI7IH0sXG4gICAgICAgICAgICBnZXRKc29uQm9keTogdGhpcy5nZXRKc29uQm9keS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZ2V0TG9jYXRpb246IHRoaXMuZ2V0TG9jYXRpb24uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGdldFBhc3NUaHJ1QmFja2VuZDogdGhpcy5nZXRQYXNzVGhydUJhY2tlbmQuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIHBhcnNlUmVxdWVzdFVybDogdGhpcy5wYXJzZVJlcXVlc3RVcmwuYmluZCh0aGlzKSxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGlkKSB7XG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uLmZpbmRJbmRleChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS5pZCA9PT0gaWQ7IH0pO1xuICAgIH07XG4gICAgLyoqIFBhcnNlIHRoZSBpZCBhcyBhIG51bWJlci4gUmV0dXJuIG9yaWdpbmFsIHZhbHVlIGlmIG5vdCBhIG51bWJlci4gKi9cbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUucGFyc2VJZCA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSwgaWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQ29sbGVjdGlvbklkTnVtZXJpYyhjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSkpIHtcbiAgICAgICAgICAgIC8vIENhbid0IGNvbmZpcm0gdGhhdCBgaWRgIGlzIGEgbnVtZXJpYyB0eXBlOyBkb24ndCBwYXJzZSBhcyBhIG51bWJlclxuICAgICAgICAgICAgLy8gb3IgZWxzZSBgJzQyJ2AgLT4gYDQyYCBhbmQgX2dldCBieSBpZF8gZmFpbHMuXG4gICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlkTnVtID0gcGFyc2VGbG9hdChpZCk7XG4gICAgICAgIHJldHVybiBpc05hTihpZE51bSkgPyBpZCA6IGlkTnVtO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogcmV0dXJuIHRydWUgaWYgY2FuIGRldGVybWluZSB0aGF0IHRoZSBjb2xsZWN0aW9uJ3MgYGl0ZW0uaWRgIGlzIGEgbnVtYmVyXG4gICAgICogVGhpcyBpbXBsZW1lbnRhdGlvbiBjYW4ndCB0ZWxsIGlmIHRoZSBjb2xsZWN0aW9uIGlzIGVtcHR5IHNvIGl0IGFzc3VtZXMgTk9cbiAgICAgKiAqL1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5pc0NvbGxlY3Rpb25JZE51bWVyaWMgPSBmdW5jdGlvbiAoY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUpIHtcbiAgICAgICAgLy8gY29sbGVjdGlvbk5hbWUgbm90IHVzZWQgbm93IGJ1dCBvdmVycmlkZSBtaWdodCBtYWludGFpbiBjb2xsZWN0aW9uIHR5cGUgaW5mb3JtYXRpb25cbiAgICAgICAgLy8gc28gdGhhdCBpdCBjb3VsZCBrbm93IHRoZSB0eXBlIG9mIHRoZSBgaWRgIGV2ZW4gd2hlbiB0aGUgY29sbGVjdGlvbiBpcyBlbXB0eS5cbiAgICAgICAgcmV0dXJuICEhKGNvbGxlY3Rpb24gJiYgY29sbGVjdGlvblswXSkgJiYgdHlwZW9mIGNvbGxlY3Rpb25bMF0uaWQgPT09ICdudW1iZXInO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSByZXF1ZXN0IFVSTCBpbnRvIGEgYFBhcnNlZFJlcXVlc3RVcmxgIG9iamVjdC5cbiAgICAgKiBQYXJzaW5nIGRlcGVuZHMgdXBvbiBjZXJ0YWluIHZhbHVlcyBvZiBgY29uZmlnYDogYGFwaUJhc2VgLCBgaG9zdGAsIGFuZCBgdXJsUm9vdGAuXG4gICAgICpcbiAgICAgKiBDb25maWd1cmluZyB0aGUgYGFwaUJhc2VgIHlpZWxkcyB0aGUgbW9zdCBpbnRlcmVzdGluZyBjaGFuZ2VzIHRvIGBwYXJzZVJlcXVlc3RVcmxgIGJlaGF2aW9yOlxuICAgICAqICAgV2hlbiBhcGlCYXNlPXVuZGVmaW5lZCBhbmQgdXJsPSdodHRwOi8vbG9jYWxob3N0L2FwaS9jb2xsZWN0aW9uLzQyJ1xuICAgICAqICAgICB7YmFzZTogJ2FwaS8nLCBjb2xsZWN0aW9uTmFtZTogJ2NvbGxlY3Rpb24nLCBpZDogJzQyJywgLi4ufVxuICAgICAqICAgV2hlbiBhcGlCYXNlPSdzb21lL2FwaS9yb290LycgYW5kIHVybD0naHR0cDovL2xvY2FsaG9zdC9zb21lL2FwaS9yb290L2NvbGxlY3Rpb24nXG4gICAgICogICAgIHtiYXNlOiAnc29tZS9hcGkvcm9vdC8nLCBjb2xsZWN0aW9uTmFtZTogJ2NvbGxlY3Rpb24nLCBpZDogdW5kZWZpbmVkLCAuLi59XG4gICAgICogICBXaGVuIGFwaUJhc2U9Jy8nIGFuZCB1cmw9J2h0dHA6Ly9sb2NhbGhvc3QvY29sbGVjdGlvbidcbiAgICAgKiAgICAge2Jhc2U6ICcvJywgY29sbGVjdGlvbk5hbWU6ICdjb2xsZWN0aW9uJywgaWQ6IHVuZGVmaW5lZCwgLi4ufVxuICAgICAqXG4gICAgICogVGhlIGFjdHVhbCBhcGkgYmFzZSBzZWdtZW50IHZhbHVlcyBhcmUgaWdub3JlZC4gT25seSB0aGUgbnVtYmVyIG9mIHNlZ21lbnRzIG1hdHRlcnMuXG4gICAgICogVGhlIGZvbGxvd2luZyBhcGkgYmFzZSBzdHJpbmdzIGFyZSBjb25zaWRlcmVkIGlkZW50aWNhbDogJ2EvYicgfiAnc29tZS9hcGkvJyB+IGB0d28vc2VnbWVudHMnXG4gICAgICpcbiAgICAgKiBUbyByZXBsYWNlIHRoaXMgZGVmYXVsdCBtZXRob2QsIGFzc2lnbiB5b3VyIGFsdGVybmF0aXZlIHRvIHlvdXIgSW5NZW1EYlNlcnZpY2VbJ3BhcnNlUmVxdWVzdFVybCddXG4gICAgICovXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLnBhcnNlUmVxdWVzdFVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBsb2MgPSB0aGlzLmdldExvY2F0aW9uKHVybCk7XG4gICAgICAgICAgICB2YXIgZHJvcCA9IHRoaXMuY29uZmlnLnJvb3RQYXRoLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciB1cmxSb290ID0gJyc7XG4gICAgICAgICAgICBpZiAobG9jLmhvc3QgIT09IHRoaXMuY29uZmlnLmhvc3QpIHtcbiAgICAgICAgICAgICAgICAvLyB1cmwgZm9yIGEgc2VydmVyIG9uIGEgZGlmZmVyZW50IGhvc3QhXG4gICAgICAgICAgICAgICAgLy8gYXNzdW1lIGl0J3MgY29sbGVjdGlvbiBpcyBhY3R1YWxseSBoZXJlIHRvby5cbiAgICAgICAgICAgICAgICBkcm9wID0gMTsgLy8gdGhlIGxlYWRpbmcgc2xhc2hcbiAgICAgICAgICAgICAgICB1cmxSb290ID0gbG9jLnByb3RvY29sICsgJy8vJyArIGxvYy5ob3N0ICsgJy8nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHBhdGggPSBsb2MucGF0aC5zdWJzdHJpbmcoZHJvcCk7XG4gICAgICAgICAgICB2YXIgcGF0aFNlZ21lbnRzID0gcGF0aC5zcGxpdCgnLycpO1xuICAgICAgICAgICAgdmFyIHNlZ21lbnRJeCA9IDA7XG4gICAgICAgICAgICAvLyBhcGlCYXNlOiB0aGUgZnJvbnQgcGFydCBvZiB0aGUgcGF0aCBkZXZvdGVkIHRvIGdldHRpbmcgdG8gdGhlIGFwaSByb3V0ZVxuICAgICAgICAgICAgLy8gQXNzdW1lcyBmaXJzdCBwYXRoIHNlZ21lbnQgaWYgbm8gY29uZmlnLmFwaUJhc2VcbiAgICAgICAgICAgIC8vIGVsc2UgaWdub3JlcyBhcyBtYW55IHBhdGggc2VnbWVudHMgYXMgYXJlIGluIGNvbmZpZy5hcGlCYXNlXG4gICAgICAgICAgICAvLyBEb2VzIE5PVCBjYXJlIHdoYXQgdGhlIGFwaSBiYXNlIGNoYXJzIGFjdHVhbGx5IGFyZS5cbiAgICAgICAgICAgIHZhciBhcGlCYXNlID0gdm9pZCAwO1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5hcGlCYXNlID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGFwaUJhc2UgPSBwYXRoU2VnbWVudHNbc2VnbWVudEl4KytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYXBpQmFzZSA9IHJlbW92ZVRyYWlsaW5nU2xhc2godGhpcy5jb25maWcuYXBpQmFzZS50cmltKCkpO1xuICAgICAgICAgICAgICAgIGlmIChhcGlCYXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnRJeCA9IGFwaUJhc2Uuc3BsaXQoJy8nKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWdtZW50SXggPSAwOyAvLyBubyBhcGkgYmFzZSBhdCBhbGw7IHVud2lzZSBidXQgYWxsb3dlZC5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcGlCYXNlICs9ICcvJztcbiAgICAgICAgICAgIHZhciBjb2xsZWN0aW9uTmFtZSA9IHBhdGhTZWdtZW50c1tzZWdtZW50SXgrK107XG4gICAgICAgICAgICAvLyBpZ25vcmUgYW55dGhpbmcgYWZ0ZXIgYSAnLicgKGUuZy4sdGhlIFwianNvblwiIGluIFwiY3VzdG9tZXJzLmpzb25cIilcbiAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvbk5hbWUgJiYgY29sbGVjdGlvbk5hbWUuc3BsaXQoJy4nKVswXTtcbiAgICAgICAgICAgIHZhciBpZCA9IHBhdGhTZWdtZW50c1tzZWdtZW50SXgrK107XG4gICAgICAgICAgICB2YXIgcXVlcnkgPSB0aGlzLmNyZWF0ZVF1ZXJ5TWFwKGxvYy5xdWVyeSk7XG4gICAgICAgICAgICB2YXIgcmVzb3VyY2VVcmwgPSB1cmxSb290ICsgYXBpQmFzZSArIGNvbGxlY3Rpb25OYW1lICsgJy8nO1xuICAgICAgICAgICAgcmV0dXJuIHsgYXBpQmFzZTogYXBpQmFzZSwgY29sbGVjdGlvbk5hbWU6IGNvbGxlY3Rpb25OYW1lLCBpZDogaWQsIHF1ZXJ5OiBxdWVyeSwgcmVzb3VyY2VVcmw6IHJlc291cmNlVXJsIH07XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdmFyIG1zZyA9IFwidW5hYmxlIHRvIHBhcnNlIHVybCAnXCIgKyB1cmwgKyBcIic7IG9yaWdpbmFsIGVycm9yOiBcIiArIGVyci5tZXNzYWdlO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIENyZWF0ZSBlbnRpdHlcbiAgICAvLyBDYW4gdXBkYXRlIGFuIGV4aXN0aW5nIGVudGl0eSB0b28gaWYgcG9zdDQwOSBpcyBmYWxzZS5cbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUucG9zdCA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgY29sbGVjdGlvbiA9IF9hLmNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lID0gX2EuY29sbGVjdGlvbk5hbWUsIGhlYWRlcnMgPSBfYS5oZWFkZXJzLCBpZCA9IF9hLmlkLCByZXEgPSBfYS5yZXEsIHJlc291cmNlVXJsID0gX2EucmVzb3VyY2VVcmwsIHVybCA9IF9hLnVybDtcbiAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmNsb25lKHRoaXMuZ2V0SnNvbkJvZHkocmVxKSk7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzXG4gICAgICAgIGlmIChpdGVtLmlkID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpdGVtLmlkID0gaWQgfHwgdGhpcy5nZW5JZChjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVtc2cgPSBlcnIubWVzc2FnZSB8fCAnJztcbiAgICAgICAgICAgICAgICBpZiAoL2lkIHR5cGUgaXMgbm9uLW51bWVyaWMvLnRlc3QoZW1zZykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnModXJsLCBTVEFUVVMuVU5QUk9DRVNTQUJMRV9FTlRSWSwgZW1zZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHVybCwgU1RBVFVTLklOVEVSTkFMX1NFUlZFUl9FUlJPUiwgXCJGYWlsZWQgdG8gZ2VuZXJhdGUgbmV3IGlkIGZvciAnXCIgKyBjb2xsZWN0aW9uTmFtZSArIFwiJ1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlkICYmIGlkICE9PSBpdGVtLmlkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5CQURfUkVRVUVTVCwgXCJSZXF1ZXN0IGlkIGRvZXMgbm90IG1hdGNoIGl0ZW0uaWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZCA9IGl0ZW0uaWQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGV4aXN0aW5nSXggPSB0aGlzLmluZGV4T2YoY29sbGVjdGlvbiwgaWQpO1xuICAgICAgICB2YXIgYm9keSA9IHRoaXMuYm9kaWZ5KGl0ZW0pO1xuICAgICAgICBpZiAoZXhpc3RpbmdJeCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb24ucHVzaChpdGVtKTtcbiAgICAgICAgICAgIGhlYWRlcnMuc2V0KCdMb2NhdGlvbicsIHJlc291cmNlVXJsICsgJy8nICsgaWQpO1xuICAgICAgICAgICAgcmV0dXJuIHsgaGVhZGVyczogaGVhZGVycywgYm9keTogYm9keSwgc3RhdHVzOiBTVEFUVVMuQ1JFQVRFRCB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY29uZmlnLnBvc3Q0MDkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHVybCwgU1RBVFVTLkNPTkZMSUNULCBcIidcIiArIGNvbGxlY3Rpb25OYW1lICsgXCInIGl0ZW0gd2l0aCBpZD0nXCIgKyBpZCArIFwiIGV4aXN0cyBhbmQgbWF5IG5vdCBiZSB1cGRhdGVkIHdpdGggUE9TVDsgdXNlIFBVVCBpbnN0ZWFkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb25bZXhpc3RpbmdJeF0gPSBpdGVtO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLnBvc3QyMDQgP1xuICAgICAgICAgICAgICAgIHsgaGVhZGVyczogaGVhZGVycywgc3RhdHVzOiBTVEFUVVMuTk9fQ09OVEVOVCB9IDpcbiAgICAgICAgICAgICAgICB7IGhlYWRlcnM6IGhlYWRlcnMsIGJvZHk6IGJvZHksIHN0YXR1czogU1RBVFVTLk9LIH07IC8vIHN1Y2Nlc3NmdWw7IHJldHVybiBlbnRpdHlcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gVXBkYXRlIGV4aXN0aW5nIGVudGl0eVxuICAgIC8vIENhbiBjcmVhdGUgYW4gZW50aXR5IHRvbyBpZiBwdXQ0MDQgaXMgZmFsc2UuXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLnB1dCA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgY29sbGVjdGlvbiA9IF9hLmNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lID0gX2EuY29sbGVjdGlvbk5hbWUsIGhlYWRlcnMgPSBfYS5oZWFkZXJzLCBpZCA9IF9hLmlkLCByZXEgPSBfYS5yZXEsIHVybCA9IF9hLnVybDtcbiAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmNsb25lKHRoaXMuZ2V0SnNvbkJvZHkocmVxKSk7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzXG4gICAgICAgIGlmIChpdGVtLmlkID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnModXJsLCBTVEFUVVMuTk9UX0ZPVU5ELCBcIk1pc3NpbmcgJ1wiICsgY29sbGVjdGlvbk5hbWUgKyBcIicgaWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlkICYmIGlkICE9PSBpdGVtLmlkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5CQURfUkVRVUVTVCwgXCJSZXF1ZXN0IGZvciAnXCIgKyBjb2xsZWN0aW9uTmFtZSArIFwiJyBpZCBkb2VzIG5vdCBtYXRjaCBpdGVtLmlkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWQgPSBpdGVtLmlkO1xuICAgICAgICB9XG4gICAgICAgIHZhciBleGlzdGluZ0l4ID0gdGhpcy5pbmRleE9mKGNvbGxlY3Rpb24sIGlkKTtcbiAgICAgICAgdmFyIGJvZHkgPSB0aGlzLmJvZGlmeShpdGVtKTtcbiAgICAgICAgaWYgKGV4aXN0aW5nSXggPiAtMSkge1xuICAgICAgICAgICAgY29sbGVjdGlvbltleGlzdGluZ0l4XSA9IGl0ZW07XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25maWcucHV0MjA0ID9cbiAgICAgICAgICAgICAgICB7IGhlYWRlcnM6IGhlYWRlcnMsIHN0YXR1czogU1RBVFVTLk5PX0NPTlRFTlQgfSA6XG4gICAgICAgICAgICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzLCBib2R5OiBib2R5LCBzdGF0dXM6IFNUQVRVUy5PSyB9OyAvLyBzdWNjZXNzZnVsOyByZXR1cm4gZW50aXR5XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5jb25maWcucHV0NDA0KSB7XG4gICAgICAgICAgICAvLyBpdGVtIHRvIHVwZGF0ZSBub3QgZm91bmQ7IHVzZSBQT1NUIHRvIGNyZWF0ZSBuZXcgaXRlbSBmb3IgdGhpcyBpZC5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHVybCwgU1RBVFVTLk5PVF9GT1VORCwgXCInXCIgKyBjb2xsZWN0aW9uTmFtZSArIFwiJyBpdGVtIHdpdGggaWQ9J1wiICsgaWQgKyBcIiBub3QgZm91bmQgYW5kIG1heSBub3QgYmUgY3JlYXRlZCB3aXRoIFBVVDsgdXNlIFBPU1QgaW5zdGVhZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBjcmVhdGUgbmV3IGl0ZW0gZm9yIGlkIG5vdCBmb3VuZFxuICAgICAgICAgICAgY29sbGVjdGlvbi5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgcmV0dXJuIHsgaGVhZGVyczogaGVhZGVycywgYm9keTogYm9keSwgc3RhdHVzOiBTVEFUVVMuQ1JFQVRFRCB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUucmVtb3ZlQnlJZCA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBpZCkge1xuICAgICAgICB2YXIgaXggPSB0aGlzLmluZGV4T2YoY29sbGVjdGlvbiwgaWQpO1xuICAgICAgICBpZiAoaXggPiAtMSkge1xuICAgICAgICAgICAgY29sbGVjdGlvbi5zcGxpY2UoaXgsIDEpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGVsbCB5b3VyIGluLW1lbSBcImRhdGFiYXNlXCIgdG8gcmVzZXQuXG4gICAgICogcmV0dXJucyBPYnNlcnZhYmxlIG9mIHRoZSBkYXRhYmFzZSBiZWNhdXNlIHJlc2V0dGluZyBpdCBjb3VsZCBiZSBhc3luY1xuICAgICAqL1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5yZXNldERiID0gZnVuY3Rpb24gKHJlcUluZm8pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5kYlJlYWR5U3ViamVjdC5uZXh0KGZhbHNlKTtcbiAgICAgICAgdmFyIGRiID0gdGhpcy5pbk1lbURiU2VydmljZS5jcmVhdGVEYihyZXFJbmZvKTtcbiAgICAgICAgdmFyIGRiJCA9IGRiIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSA/IGRiIDpcbiAgICAgICAgICAgIGlzUHJvbWlzZShkYikgPyBmcm9tUHJvbWlzZShkYikgOlxuICAgICAgICAgICAgICAgIG9mKGRiKTtcbiAgICAgICAgZmlyc3QuY2FsbChkYiQpLnN1YnNjcmliZShmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgX3RoaXMuZGIgPSBkO1xuICAgICAgICAgICAgX3RoaXMuZGJSZWFkeVN1YmplY3QubmV4dCh0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmRiUmVhZHk7XG4gICAgfTtcbiAgICByZXR1cm4gQmFja2VuZFNlcnZpY2U7XG59KCkpO1xuZXhwb3J0IHsgQmFja2VuZFNlcnZpY2UgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJhY2tlbmQuc2VydmljZS5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyWGhyLCBIZWFkZXJzLCBSZWFkeVN0YXRlLCBSZXF1ZXN0TWV0aG9kLCBSZXNwb25zZSwgUmVzcG9uc2VPcHRpb25zIGFzIEh0dHBSZXNwb25zZU9wdGlvbnMsIFVSTFNlYXJjaFBhcmFtcywgWEhSQmFja2VuZCwgWFNSRlN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgeyBTVEFUVVMgfSBmcm9tICcuL2h0dHAtc3RhdHVzLWNvZGVzJztcbmltcG9ydCB7IEluTWVtb3J5QmFja2VuZENvbmZpZywgSW5NZW1vcnlCYWNrZW5kQ29uZmlnQXJncywgSW5NZW1vcnlEYlNlcnZpY2UgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tICcuL2JhY2tlbmQuc2VydmljZSc7XG4vKipcbiAqIEZvciBBbmd1bGFyIGBIdHRwYCBzaW11bGF0ZSB0aGUgYmVoYXZpb3Igb2YgYSBSRVNUeSB3ZWIgYXBpXG4gKiBiYWNrZWQgYnkgdGhlIHNpbXBsZSBpbi1tZW1vcnkgZGF0YSBzdG9yZSBwcm92aWRlZCBieSB0aGUgaW5qZWN0ZWQgYEluTWVtb3J5RGJTZXJ2aWNlYC5cbiAqIENvbmZvcm1zIG1vc3RseSB0byBiZWhhdmlvciBkZXNjcmliZWQgaGVyZTpcbiAqIGh0dHA6Ly93d3cucmVzdGFwaXR1dG9yaWFsLmNvbS9sZXNzb25zL2h0dHBtZXRob2RzLmh0bWxcbiAqXG4gKiAjIyMgVXNhZ2VcbiAqXG4gKiBDcmVhdGUgYW4gaW4tbWVtb3J5IGRhdGEgc3RvcmUgY2xhc3MgdGhhdCBpbXBsZW1lbnRzIGBJbk1lbW9yeURiU2VydmljZWAuXG4gKiBDYWxsIGBmb3JSb290YCBzdGF0aWMgbWV0aG9kIHdpdGggdGhpcyBzZXJ2aWNlIGNsYXNzIGFuZCBvcHRpb25hbCBjb25maWd1cmF0aW9uIG9iamVjdDpcbiAqIGBgYFxuICogLy8gb3RoZXIgaW1wb3J0c1xuICogaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuICogaW1wb3J0IHsgSHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1pbi1tZW1vcnktd2ViLWFwaSc7XG4gKlxuICogaW1wb3J0IHsgSW5NZW1IZXJvU2VydmljZSwgaW5NZW1Db25maWcgfSBmcm9tICcuLi9hcGkvaW4tbWVtb3J5LWhlcm8uc2VydmljZSc7XG4gKiBATmdNb2R1bGUoe1xuICogIGltcG9ydHM6IFtcbiAqICAgIEh0dHBNb2R1bGUsXG4gKiAgICBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yUm9vdChJbk1lbUhlcm9TZXJ2aWNlLCBpbk1lbUNvbmZpZyksXG4gKiAgICAuLi5cbiAqICBdLFxuICogIC4uLlxuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyAuLi4gfVxuICogYGBgXG4gKi9cbnZhciBIdHRwQmFja2VuZFNlcnZpY2UgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhIdHRwQmFja2VuZFNlcnZpY2UsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSHR0cEJhY2tlbmRTZXJ2aWNlKGluamVjdG9yLCBpbk1lbURiU2VydmljZSwgY29uZmlnKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGluTWVtRGJTZXJ2aWNlLCBjb25maWcpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmluamVjdG9yID0gaW5qZWN0b3I7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgSHR0cEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5jcmVhdGVDb25uZWN0aW9uID0gZnVuY3Rpb24gKHJlcSkge1xuICAgICAgICB2YXIgcmVzcG9uc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXNwb25zZSA9IHRoaXMuaGFuZGxlUmVxdWVzdChyZXEpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdmFyIGVyciA9IGVycm9yLm1lc3NhZ2UgfHwgZXJyb3I7XG4gICAgICAgICAgICB2YXIgcmVzT3B0aW9uc18xID0gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyhyZXEudXJsLCBTVEFUVVMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLCBcIlwiICsgZXJyKTtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gdGhpcy5jcmVhdGVSZXNwb25zZSQoZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVzT3B0aW9uc18xOyB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVhZHlTdGF0ZTogUmVhZHlTdGF0ZS5Eb25lLFxuICAgICAgICAgICAgcmVxdWVzdDogcmVxLFxuICAgICAgICAgICAgcmVzcG9uc2U6IHJlc3BvbnNlXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvLy8vICBwcm90ZWN0ZWQgb3ZlcnJpZGVzIC8vLy8vXG4gICAgSHR0cEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5nZXRKc29uQm9keSA9IGZ1bmN0aW9uIChyZXEpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiByZXEuanNvbigpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICB2YXIgbXNnID0gXCInXCIgKyByZXEudXJsICsgXCInIHJlcXVlc3QgYm9keS10by1qc29uIGVycm9yXFxuXCIgKyBKU09OLnN0cmluZ2lmeShlKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBIdHRwQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmdldFJlcXVlc3RNZXRob2QgPSBmdW5jdGlvbiAocmVxKSB7XG4gICAgICAgIHJldHVybiBSZXF1ZXN0TWV0aG9kW3JlcS5tZXRob2QgfHwgMF0udG9Mb3dlckNhc2UoKTtcbiAgICB9O1xuICAgIEh0dHBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuY3JlYXRlSGVhZGVycyA9IGZ1bmN0aW9uIChoZWFkZXJzKSB7XG4gICAgICAgIHJldHVybiBuZXcgSGVhZGVycyhoZWFkZXJzKTtcbiAgICB9O1xuICAgIEh0dHBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuY3JlYXRlUXVlcnlNYXAgPSBmdW5jdGlvbiAoc2VhcmNoKSB7XG4gICAgICAgIHJldHVybiBzZWFyY2ggPyBuZXcgVVJMU2VhcmNoUGFyYW1zKHNlYXJjaCkucGFyYW1zTWFwIDogbmV3IE1hcCgpO1xuICAgIH07XG4gICAgSHR0cEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5jcmVhdGVSZXNwb25zZSRmcm9tUmVzcG9uc2VPcHRpb25zJCA9IGZ1bmN0aW9uIChyZXNPcHRpb25zJCkge1xuICAgICAgICByZXR1cm4gbWFwLmNhbGwocmVzT3B0aW9ucyQsIGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKG5ldyBIdHRwUmVzcG9uc2VPcHRpb25zKG9wdHMpKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBIdHRwQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmNyZWF0ZVBhc3NUaHJ1QmFja2VuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIGNvcGllZCBmcm9tIEBhbmd1bGFyL2h0dHAvYmFja2VuZHMveGhyX2JhY2tlbmRcbiAgICAgICAgICAgIHZhciBicm93c2VyWGhyID0gdGhpcy5pbmplY3Rvci5nZXQoQnJvd3Nlclhocik7XG4gICAgICAgICAgICB2YXIgYmFzZVJlc3BvbnNlT3B0aW9ucyA9IHRoaXMuaW5qZWN0b3IuZ2V0KEh0dHBSZXNwb25zZU9wdGlvbnMpO1xuICAgICAgICAgICAgdmFyIHhzcmZTdHJhdGVneSA9IHRoaXMuaW5qZWN0b3IuZ2V0KFhTUkZTdHJhdGVneSk7XG4gICAgICAgICAgICB2YXIgeGhyQmFja2VuZF8xID0gbmV3IFhIUkJhY2tlbmQoYnJvd3NlclhociwgYmFzZVJlc3BvbnNlT3B0aW9ucywgeHNyZlN0cmF0ZWd5KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlOiBmdW5jdGlvbiAocmVxKSB7IHJldHVybiB4aHJCYWNrZW5kXzEuY3JlYXRlQ29ubmVjdGlvbihyZXEpLnJlc3BvbnNlOyB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBlLm1lc3NhZ2UgPSAnQ2Fubm90IGNyZWF0ZSBwYXNzVGhydTQwNCBiYWNrZW5kOyAnICsgKGUubWVzc2FnZSB8fCAnJyk7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gSHR0cEJhY2tlbmRTZXJ2aWNlO1xufShCYWNrZW5kU2VydmljZSkpO1xuZXhwb3J0IHsgSHR0cEJhY2tlbmRTZXJ2aWNlIH07XG5IdHRwQmFja2VuZFNlcnZpY2UuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IEluamVjdGFibGUgfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbkh0dHBCYWNrZW5kU2VydmljZS5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICB7IHR5cGU6IEluamVjdG9yLCB9LFxuICAgIHsgdHlwZTogSW5NZW1vcnlEYlNlcnZpY2UsIH0sXG4gICAgeyB0eXBlOiBJbk1lbW9yeUJhY2tlbmRDb25maWdBcmdzLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtJbk1lbW9yeUJhY2tlbmRDb25maWcsXSB9LCB7IHR5cGU6IE9wdGlvbmFsIH0sXSB9LFxuXTsgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0dHAtYmFja2VuZC5zZXJ2aWNlLmpzLm1hcCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMsIEh0dHBSZXNwb25zZSwgSHR0cFhockJhY2tlbmQsIFhockZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgeyBTVEFUVVMgfSBmcm9tICcuL2h0dHAtc3RhdHVzLWNvZGVzJztcbmltcG9ydCB7IEluTWVtb3J5QmFja2VuZENvbmZpZywgSW5NZW1vcnlCYWNrZW5kQ29uZmlnQXJncywgSW5NZW1vcnlEYlNlcnZpY2UgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tICcuL2JhY2tlbmQuc2VydmljZSc7XG4vKipcbiAqIEZvciBBbmd1bGFyIGBIdHRwQ2xpZW50YCBzaW11bGF0ZSB0aGUgYmVoYXZpb3Igb2YgYSBSRVNUeSB3ZWIgYXBpXG4gKiBiYWNrZWQgYnkgdGhlIHNpbXBsZSBpbi1tZW1vcnkgZGF0YSBzdG9yZSBwcm92aWRlZCBieSB0aGUgaW5qZWN0ZWQgYEluTWVtb3J5RGJTZXJ2aWNlYC5cbiAqIENvbmZvcm1zIG1vc3RseSB0byBiZWhhdmlvciBkZXNjcmliZWQgaGVyZTpcbiAqIGh0dHA6Ly93d3cucmVzdGFwaXR1dG9yaWFsLmNvbS9sZXNzb25zL2h0dHBtZXRob2RzLmh0bWxcbiAqXG4gKiAjIyMgVXNhZ2VcbiAqXG4gKiBDcmVhdGUgYW4gaW4tbWVtb3J5IGRhdGEgc3RvcmUgY2xhc3MgdGhhdCBpbXBsZW1lbnRzIGBJbk1lbW9yeURiU2VydmljZWAuXG4gKiBDYWxsIGBjb25maWdgIHN0YXRpYyBtZXRob2Qgd2l0aCB0aGlzIHNlcnZpY2UgY2xhc3MgYW5kIG9wdGlvbmFsIGNvbmZpZ3VyYXRpb24gb2JqZWN0OlxuICogYGBgXG4gKiAvLyBvdGhlciBpbXBvcnRzXG4gKiBpbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuICogaW1wb3J0IHsgSHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1pbi1tZW1vcnktd2ViLWFwaSc7XG4gKlxuICogaW1wb3J0IHsgSW5NZW1IZXJvU2VydmljZSwgaW5NZW1Db25maWcgfSBmcm9tICcuLi9hcGkvaW4tbWVtb3J5LWhlcm8uc2VydmljZSc7XG4gKiBATmdNb2R1bGUoe1xuICogIGltcG9ydHM6IFtcbiAqICAgIEh0dHBNb2R1bGUsXG4gKiAgICBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yUm9vdChJbk1lbUhlcm9TZXJ2aWNlLCBpbk1lbUNvbmZpZyksXG4gKiAgICAuLi5cbiAqICBdLFxuICogIC4uLlxuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyAuLi4gfVxuICogYGBgXG4gKi9cbnZhciBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlKGluTWVtRGJTZXJ2aWNlLCBjb25maWcsIHhockZhY3RvcnkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgaW5NZW1EYlNlcnZpY2UsIGNvbmZpZykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMueGhyRmFjdG9yeSA9IHhockZhY3Rvcnk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5oYW5kbGUgPSBmdW5jdGlvbiAocmVxKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSZXF1ZXN0KHJlcSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gZXJyb3IubWVzc2FnZSB8fCBlcnJvcjtcbiAgICAgICAgICAgIHZhciByZXNPcHRpb25zXzEgPSB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHJlcS51cmwsIFNUQVRVUy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsIFwiXCIgKyBlcnIpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUmVzcG9uc2UkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc09wdGlvbnNfMTsgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vLy8gIHByb3RlY3RlZCBvdmVycmlkZXMgLy8vLy9cbiAgICBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmdldEpzb25Cb2R5ID0gZnVuY3Rpb24gKHJlcSkge1xuICAgICAgICByZXR1cm4gcmVxLmJvZHk7XG4gICAgfTtcbiAgICBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmdldFJlcXVlc3RNZXRob2QgPSBmdW5jdGlvbiAocmVxKSB7XG4gICAgICAgIHJldHVybiAocmVxLm1ldGhvZCB8fCAnZ2V0JykudG9Mb3dlckNhc2UoKTtcbiAgICB9O1xuICAgIEh0dHBDbGllbnRCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuY3JlYXRlSGVhZGVycyA9IGZ1bmN0aW9uIChoZWFkZXJzKSB7XG4gICAgICAgIHJldHVybiBuZXcgSHR0cEhlYWRlcnMoaGVhZGVycyk7XG4gICAgfTtcbiAgICBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmNyZWF0ZVF1ZXJ5TWFwID0gZnVuY3Rpb24gKHNlYXJjaCkge1xuICAgICAgICB2YXIgbWFwID0gbmV3IE1hcCgpO1xuICAgICAgICBpZiAoc2VhcmNoKSB7XG4gICAgICAgICAgICB2YXIgcGFyYW1zXzEgPSBuZXcgSHR0cFBhcmFtcyh7IGZyb21TdHJpbmc6IHNlYXJjaCB9KTtcbiAgICAgICAgICAgIHBhcmFtc18xLmtleXMoKS5mb3JFYWNoKGZ1bmN0aW9uIChwKSB7IHJldHVybiBtYXAuc2V0KHAsIHBhcmFtc18xLmdldEFsbChwKSk7IH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXA7XG4gICAgfTtcbiAgICBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmNyZWF0ZVJlc3BvbnNlJGZyb21SZXNwb25zZU9wdGlvbnMkID0gZnVuY3Rpb24gKHJlc09wdGlvbnMkKSB7XG4gICAgICAgIHJldHVybiBtYXAuY2FsbChyZXNPcHRpb25zJCwgZnVuY3Rpb24gKG9wdHMpIHsgcmV0dXJuIG5ldyBIdHRwUmVzcG9uc2Uob3B0cyk7IH0pO1xuICAgIH07XG4gICAgSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5jcmVhdGVQYXNzVGhydUJhY2tlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEh0dHBYaHJCYWNrZW5kKHRoaXMueGhyRmFjdG9yeSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICBleC5tZXNzYWdlID0gJ0Nhbm5vdCBjcmVhdGUgcGFzc1RocnU0MDQgYmFja2VuZDsgJyArIChleC5tZXNzYWdlIHx8ICcnKTtcbiAgICAgICAgICAgIHRocm93IGV4O1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlO1xufShCYWNrZW5kU2VydmljZSkpO1xuZXhwb3J0IHsgSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlIH07XG5IdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IEluamVjdGFibGUgfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbkh0dHBDbGllbnRCYWNrZW5kU2VydmljZS5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICB7IHR5cGU6IEluTWVtb3J5RGJTZXJ2aWNlLCB9LFxuICAgIHsgdHlwZTogSW5NZW1vcnlCYWNrZW5kQ29uZmlnQXJncywgZGVjb3JhdG9yczogW3sgdHlwZTogSW5qZWN0LCBhcmdzOiBbSW5NZW1vcnlCYWNrZW5kQ29uZmlnLF0gfSwgeyB0eXBlOiBPcHRpb25hbCB9LF0gfSxcbiAgICB7IHR5cGU6IFhockZhY3RvcnksIH0sXG5dOyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHR0cC1jbGllbnQtYmFja2VuZC5zZXJ2aWNlLmpzLm1hcCIsIi8vLy8vLyBIdHRwLU9ubHkgdmVyc2lvbiAvLy8vXG5pbXBvcnQgeyBJbmplY3RvciwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFhIUkJhY2tlbmQgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEluTWVtb3J5QmFja2VuZENvbmZpZywgSW5NZW1vcnlEYlNlcnZpY2UgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgSHR0cEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSAnLi9odHRwLWJhY2tlbmQuc2VydmljZSc7XG4vLyBJbnRlcm5hbCAtIENyZWF0ZXMgdGhlIGluLW1lbSBiYWNrZW5kIGZvciB0aGUgSHR0cCBtb2R1bGVcbi8vIEFvVCByZXF1aXJlcyBmYWN0b3J5IHRvIGJlIGV4cG9ydGVkXG5leHBvcnQgZnVuY3Rpb24gaHR0cEluTWVtQmFja2VuZFNlcnZpY2VGYWN0b3J5KGluamVjdG9yLCBkYlNlcnZpY2UsIG9wdGlvbnMpIHtcbiAgICB2YXIgYmFja2VuZCA9IG5ldyBIdHRwQmFja2VuZFNlcnZpY2UoaW5qZWN0b3IsIGRiU2VydmljZSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIGJhY2tlbmQ7XG59XG52YXIgSHR0cEluTWVtb3J5V2ViQXBpTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBIdHRwSW5NZW1vcnlXZWJBcGlNb2R1bGUoKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICogIFJlZGlyZWN0IHRoZSBBbmd1bGFyIGBIdHRwYCBYSFIgY2FsbHNcbiAgICAqICB0byBpbi1tZW1vcnkgZGF0YSBzdG9yZSB0aGF0IGltcGxlbWVudHMgYEluTWVtb3J5RGJTZXJ2aWNlYC5cbiAgICAqICB3aXRoIGNsYXNzIHRoYXQgaW1wbGVtZW50cyBJbk1lbW9yeURiU2VydmljZSBhbmQgY3JlYXRlcyBhbiBpbi1tZW1vcnkgZGF0YWJhc2UuXG4gICAgKlxuICAgICogIFVzdWFsbHkgaW1wb3J0ZWQgaW4gdGhlIHJvb3QgYXBwbGljYXRpb24gbW9kdWxlLlxuICAgICogIENhbiBpbXBvcnQgaW4gYSBsYXp5IGZlYXR1cmUgbW9kdWxlIHRvbywgd2hpY2ggd2lsbCBzaGFkb3cgbW9kdWxlcyBsb2FkZWQgZWFybGllclxuICAgICpcbiAgICAqIEBwYXJhbSB7VHlwZX0gZGJDcmVhdG9yIC0gQ2xhc3MgdGhhdCBjcmVhdGVzIHNlZWQgZGF0YSBmb3IgaW4tbWVtb3J5IGRhdGFiYXNlLiBNdXN0IGltcGxlbWVudCBJbk1lbW9yeURiU2VydmljZS5cbiAgICAqIEBwYXJhbSB7SW5NZW1vcnlCYWNrZW5kQ29uZmlnQXJnc30gW29wdGlvbnNdXG4gICAgKlxuICAgICogQGV4YW1wbGVcbiAgICAqIEh0dHBJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290KGRiQ3JlYXRvcik7XG4gICAgKiBIdHRwSW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yUm9vdChkYkNyZWF0b3IsIHt1c2VWYWx1ZToge2RlbGF5OjYwMH19KTtcbiAgICAqL1xuICAgIEh0dHBJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290ID0gZnVuY3Rpb24gKGRiQ3JlYXRvciwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IEh0dHBJbk1lbW9yeVdlYkFwaU1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogSW5NZW1vcnlEYlNlcnZpY2UsIHVzZUNsYXNzOiBkYkNyZWF0b3IgfSxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IEluTWVtb3J5QmFja2VuZENvbmZpZywgdXNlVmFsdWU6IG9wdGlvbnMgfSxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IFhIUkJhY2tlbmQsXG4gICAgICAgICAgICAgICAgICAgIHVzZUZhY3Rvcnk6IGh0dHBJbk1lbUJhY2tlbmRTZXJ2aWNlRmFjdG9yeSxcbiAgICAgICAgICAgICAgICAgICAgZGVwczogW0luamVjdG9yLCBJbk1lbW9yeURiU2VydmljZSwgSW5NZW1vcnlCYWNrZW5kQ29uZmlnXSB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICpcbiAgICogRW5hYmxlIGFuZCBjb25maWd1cmUgdGhlIGluLW1lbW9yeSB3ZWIgYXBpIGluIGEgbGF6eS1sb2FkZWQgZmVhdHVyZSBtb2R1bGUuXG4gICAqIFNhbWUgYXMgYGZvclJvb3RgLlxuICAgKiBUaGlzIGlzIGEgZmVlbC1nb29kIG1ldGhvZCBzbyB5b3UgY2FuIGZvbGxvdyB0aGUgQW5ndWxhciBzdHlsZSBndWlkZSBmb3IgbGF6eS1sb2FkZWQgbW9kdWxlcy5cbiAgICovXG4gICAgSHR0cEluTWVtb3J5V2ViQXBpTW9kdWxlLmZvckZlYXR1cmUgPSBmdW5jdGlvbiAoZGJDcmVhdG9yLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBIdHRwSW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yUm9vdChkYkNyZWF0b3IsIG9wdGlvbnMpO1xuICAgIH07XG4gICAgcmV0dXJuIEh0dHBJbk1lbW9yeVdlYkFwaU1vZHVsZTtcbn0oKSk7XG5leHBvcnQgeyBIdHRwSW5NZW1vcnlXZWJBcGlNb2R1bGUgfTtcbkh0dHBJbk1lbW9yeVdlYkFwaU1vZHVsZS5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogTmdNb2R1bGUsIGFyZ3M6IFt7fSxdIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5IdHRwSW5NZW1vcnlXZWJBcGlNb2R1bGUuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0dHAtaW4tbWVtb3J5LXdlYi1hcGkubW9kdWxlLmpzLm1hcCIsIi8vLy8vLyBIdHRwQ2xpZW50LU9ubHkgdmVyc2lvbiAvLy8vXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEJhY2tlbmQsIFhockZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbk1lbW9yeUJhY2tlbmRDb25maWcsIEluTWVtb3J5RGJTZXJ2aWNlIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEh0dHBDbGllbnRCYWNrZW5kU2VydmljZSB9IGZyb20gJy4vaHR0cC1jbGllbnQtYmFja2VuZC5zZXJ2aWNlJztcbi8vIEludGVybmFsIC0gQ3JlYXRlcyB0aGUgaW4tbWVtIGJhY2tlbmQgZm9yIHRoZSBIdHRwQ2xpZW50IG1vZHVsZVxuLy8gQW9UIHJlcXVpcmVzIGZhY3RvcnkgdG8gYmUgZXhwb3J0ZWRcbmV4cG9ydCBmdW5jdGlvbiBodHRwQ2xpZW50SW5NZW1CYWNrZW5kU2VydmljZUZhY3RvcnkoZGJTZXJ2aWNlLCBvcHRpb25zLCB4aHJGYWN0b3J5KSB7XG4gICAgdmFyIGJhY2tlbmQgPSBuZXcgSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlKGRiU2VydmljZSwgb3B0aW9ucywgeGhyRmFjdG9yeSk7XG4gICAgcmV0dXJuIGJhY2tlbmQ7XG59XG52YXIgSHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUoKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICogIFJlZGlyZWN0IHRoZSBBbmd1bGFyIGBIdHRwQ2xpZW50YCBYSFIgY2FsbHNcbiAgICAqICB0byBpbi1tZW1vcnkgZGF0YSBzdG9yZSB0aGF0IGltcGxlbWVudHMgYEluTWVtb3J5RGJTZXJ2aWNlYC5cbiAgICAqICB3aXRoIGNsYXNzIHRoYXQgaW1wbGVtZW50cyBJbk1lbW9yeURiU2VydmljZSBhbmQgY3JlYXRlcyBhbiBpbi1tZW1vcnkgZGF0YWJhc2UuXG4gICAgKlxuICAgICogIFVzdWFsbHkgaW1wb3J0ZWQgaW4gdGhlIHJvb3QgYXBwbGljYXRpb24gbW9kdWxlLlxuICAgICogIENhbiBpbXBvcnQgaW4gYSBsYXp5IGZlYXR1cmUgbW9kdWxlIHRvbywgd2hpY2ggd2lsbCBzaGFkb3cgbW9kdWxlcyBsb2FkZWQgZWFybGllclxuICAgICpcbiAgICAqIEBwYXJhbSB7VHlwZX0gZGJDcmVhdG9yIC0gQ2xhc3MgdGhhdCBjcmVhdGVzIHNlZWQgZGF0YSBmb3IgaW4tbWVtb3J5IGRhdGFiYXNlLiBNdXN0IGltcGxlbWVudCBJbk1lbW9yeURiU2VydmljZS5cbiAgICAqIEBwYXJhbSB7SW5NZW1vcnlCYWNrZW5kQ29uZmlnQXJnc30gW29wdGlvbnNdXG4gICAgKlxuICAgICogQGV4YW1wbGVcbiAgICAqIEh0dHBJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290KGRiQ3JlYXRvcik7XG4gICAgKiBIdHRwSW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yUm9vdChkYkNyZWF0b3IsIHt1c2VWYWx1ZToge2RlbGF5OjYwMH19KTtcbiAgICAqL1xuICAgIEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290ID0gZnVuY3Rpb24gKGRiQ3JlYXRvciwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogSW5NZW1vcnlEYlNlcnZpY2UsIHVzZUNsYXNzOiBkYkNyZWF0b3IgfSxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IEluTWVtb3J5QmFja2VuZENvbmZpZywgdXNlVmFsdWU6IG9wdGlvbnMgfSxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IEh0dHBCYWNrZW5kLFxuICAgICAgICAgICAgICAgICAgICB1c2VGYWN0b3J5OiBodHRwQ2xpZW50SW5NZW1CYWNrZW5kU2VydmljZUZhY3RvcnksXG4gICAgICAgICAgICAgICAgICAgIGRlcHM6IFtJbk1lbW9yeURiU2VydmljZSwgSW5NZW1vcnlCYWNrZW5kQ29uZmlnLCBYaHJGYWN0b3J5XSB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICpcbiAgICogRW5hYmxlIGFuZCBjb25maWd1cmUgdGhlIGluLW1lbW9yeSB3ZWIgYXBpIGluIGEgbGF6eS1sb2FkZWQgZmVhdHVyZSBtb2R1bGUuXG4gICAqIFNhbWUgYXMgYGZvclJvb3RgLlxuICAgKiBUaGlzIGlzIGEgZmVlbC1nb29kIG1ldGhvZCBzbyB5b3UgY2FuIGZvbGxvdyB0aGUgQW5ndWxhciBzdHlsZSBndWlkZSBmb3IgbGF6eS1sb2FkZWQgbW9kdWxlcy5cbiAgICovXG4gICAgSHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlLmZvckZlYXR1cmUgPSBmdW5jdGlvbiAoZGJDcmVhdG9yLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yUm9vdChkYkNyZWF0b3IsIG9wdGlvbnMpO1xuICAgIH07XG4gICAgcmV0dXJuIEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZTtcbn0oKSk7XG5leHBvcnQgeyBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUgfTtcbkh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZS5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogTmdNb2R1bGUsIGFyZ3M6IFt7fSxdIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5IdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0dHAtY2xpZW50LWluLW1lbW9yeS13ZWItYXBpLm1vZHVsZS5qcy5tYXAiLCIvLy8vLy8gRm9yIGFwcHMgd2l0aCBib3RoIEh0dHAgYW5kIEh0dHBDbGllbnQgLy8vL1xuaW1wb3J0IHsgSW5qZWN0b3IsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBYSFJCYWNrZW5kIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBIdHRwQmFja2VuZCwgWGhyRmFjdG9yeSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluTWVtb3J5QmFja2VuZENvbmZpZywgSW5NZW1vcnlEYlNlcnZpY2UgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgaHR0cEluTWVtQmFja2VuZFNlcnZpY2VGYWN0b3J5IH0gZnJvbSAnLi9odHRwLWluLW1lbW9yeS13ZWItYXBpLm1vZHVsZSc7XG5pbXBvcnQgeyBodHRwQ2xpZW50SW5NZW1CYWNrZW5kU2VydmljZUZhY3RvcnkgfSBmcm9tICcuL2h0dHAtY2xpZW50LWluLW1lbW9yeS13ZWItYXBpLm1vZHVsZSc7XG52YXIgSW5NZW1vcnlXZWJBcGlNb2R1bGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEluTWVtb3J5V2ViQXBpTW9kdWxlKCkge1xuICAgIH1cbiAgICAvKipcbiAgICAqICBSZWRpcmVjdCBCT1RIIEFuZ3VsYXIgYEh0dHBgIGFuZCBgSHR0cENsaWVudGAgWEhSIGNhbGxzXG4gICAgKiAgdG8gaW4tbWVtb3J5IGRhdGEgc3RvcmUgdGhhdCBpbXBsZW1lbnRzIGBJbk1lbW9yeURiU2VydmljZWAuXG4gICAgKiAgd2l0aCBjbGFzcyB0aGF0IGltcGxlbWVudHMgSW5NZW1vcnlEYlNlcnZpY2UgYW5kIGNyZWF0ZXMgYW4gaW4tbWVtb3J5IGRhdGFiYXNlLlxuICAgICpcbiAgICAqICBVc3VhbGx5IGltcG9ydGVkIGluIHRoZSByb290IGFwcGxpY2F0aW9uIG1vZHVsZS5cbiAgICAqICBDYW4gaW1wb3J0IGluIGEgbGF6eSBmZWF0dXJlIG1vZHVsZSB0b28sIHdoaWNoIHdpbGwgc2hhZG93IG1vZHVsZXMgbG9hZGVkIGVhcmxpZXJcbiAgICAqXG4gICAgKiBAcGFyYW0ge1R5cGV9IGRiQ3JlYXRvciAtIENsYXNzIHRoYXQgY3JlYXRlcyBzZWVkIGRhdGEgZm9yIGluLW1lbW9yeSBkYXRhYmFzZS4gTXVzdCBpbXBsZW1lbnQgSW5NZW1vcnlEYlNlcnZpY2UuXG4gICAgKiBAcGFyYW0ge0luTWVtb3J5QmFja2VuZENvbmZpZ0FyZ3N9IFtvcHRpb25zXVxuICAgICpcbiAgICAqIEBleGFtcGxlXG4gICAgKiBJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290KGRiQ3JlYXRvcik7XG4gICAgKiBJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290KGRiQ3JlYXRvciwge3VzZVZhbHVlOiB7ZGVsYXk6NjAwfX0pO1xuICAgICovXG4gICAgSW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yUm9vdCA9IGZ1bmN0aW9uIChkYkNyZWF0b3IsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBJbk1lbW9yeVdlYkFwaU1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogSW5NZW1vcnlEYlNlcnZpY2UsIHVzZUNsYXNzOiBkYkNyZWF0b3IgfSxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IEluTWVtb3J5QmFja2VuZENvbmZpZywgdXNlVmFsdWU6IG9wdGlvbnMgfSxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IFhIUkJhY2tlbmQsXG4gICAgICAgICAgICAgICAgICAgIHVzZUZhY3Rvcnk6IGh0dHBJbk1lbUJhY2tlbmRTZXJ2aWNlRmFjdG9yeSxcbiAgICAgICAgICAgICAgICAgICAgZGVwczogW0luamVjdG9yLCBJbk1lbW9yeURiU2VydmljZSwgSW5NZW1vcnlCYWNrZW5kQ29uZmlnXSB9LFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogSHR0cEJhY2tlbmQsXG4gICAgICAgICAgICAgICAgICAgIHVzZUZhY3Rvcnk6IGh0dHBDbGllbnRJbk1lbUJhY2tlbmRTZXJ2aWNlRmFjdG9yeSxcbiAgICAgICAgICAgICAgICAgICAgZGVwczogW0luTWVtb3J5RGJTZXJ2aWNlLCBJbk1lbW9yeUJhY2tlbmRDb25maWcsIFhockZhY3RvcnldIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqXG4gICAgICogRW5hYmxlIGFuZCBjb25maWd1cmUgdGhlIGluLW1lbW9yeSB3ZWIgYXBpIGluIGEgbGF6eS1sb2FkZWQgZmVhdHVyZSBtb2R1bGUuXG4gICAgICogU2FtZSBhcyBgZm9yUm9vdGAuXG4gICAgICogVGhpcyBpcyBhIGZlZWwtZ29vZCBtZXRob2Qgc28geW91IGNhbiBmb2xsb3cgdGhlIEFuZ3VsYXIgc3R5bGUgZ3VpZGUgZm9yIGxhenktbG9hZGVkIG1vZHVsZXMuXG4gICAgICovXG4gICAgSW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yRmVhdHVyZSA9IGZ1bmN0aW9uIChkYkNyZWF0b3IsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIEluTWVtb3J5V2ViQXBpTW9kdWxlLmZvclJvb3QoZGJDcmVhdG9yLCBvcHRpb25zKTtcbiAgICB9O1xuICAgIHJldHVybiBJbk1lbW9yeVdlYkFwaU1vZHVsZTtcbn0oKSk7XG5leHBvcnQgeyBJbk1lbW9yeVdlYkFwaU1vZHVsZSB9O1xuSW5NZW1vcnlXZWJBcGlNb2R1bGUuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IE5nTW9kdWxlLCBhcmdzOiBbe30sXSB9LFxuXTtcbi8qKiBAbm9jb2xsYXBzZSAqL1xuSW5NZW1vcnlXZWJBcGlNb2R1bGUuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluLW1lbW9yeS13ZWItYXBpLm1vZHVsZS5qcy5tYXAiXSwibmFtZXMiOlsiT2JzZXJ2YWJsZSIsIkluamVjdGFibGUiLCJCZWhhdmlvclN1YmplY3QiLCJmaXJzdCIsImNvbmNhdE1hcCIsImlzUHJvbWlzZSIsImZyb21Qcm9taXNlIiwib2YiLCJ0aGlzIiwiUmVhZHlTdGF0ZSIsIlJlcXVlc3RNZXRob2QiLCJIZWFkZXJzIiwiVVJMU2VhcmNoUGFyYW1zIiwibWFwIiwiUmVzcG9uc2UiLCJIdHRwUmVzcG9uc2VPcHRpb25zIiwiQnJvd3NlclhociIsIlhTUkZTdHJhdGVneSIsIlhIUkJhY2tlbmQiLCJJbmplY3RvciIsIkluamVjdCIsIk9wdGlvbmFsIiwiX19leHRlbmRzIiwiSHR0cEhlYWRlcnMiLCJIdHRwUGFyYW1zIiwiSHR0cFJlc3BvbnNlIiwiSHR0cFhockJhY2tlbmQiLCJYaHJGYWN0b3J5IiwiTmdNb2R1bGUiLCJIdHRwQmFja2VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sSUFBSSxNQUFNLEdBQUc7SUFDaEIsUUFBUSxFQUFFLEdBQUc7SUFDYixtQkFBbUIsRUFBRSxHQUFHO0lBQ3hCLEVBQUUsRUFBRSxHQUFHO0lBQ1AsT0FBTyxFQUFFLEdBQUc7SUFDWixRQUFRLEVBQUUsR0FBRztJQUNiLDZCQUE2QixFQUFFLEdBQUc7SUFDbEMsVUFBVSxFQUFFLEdBQUc7SUFDZixhQUFhLEVBQUUsR0FBRztJQUNsQixlQUFlLEVBQUUsR0FBRztJQUNwQixnQkFBZ0IsRUFBRSxHQUFHO0lBQ3JCLGtCQUFrQixFQUFFLEdBQUc7SUFDdkIs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