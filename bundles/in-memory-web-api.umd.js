(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('rxjs/operators'), require('@angular/core'), require('@angular/http'), require('@angular/common/http')) :
	typeof define === 'function' && define.amd ? define(['exports', 'rxjs', 'rxjs/operators', '@angular/core', '@angular/http', '@angular/common/http'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.inMemoryWebApi = {}),global.rxjs,global.rxjs.operators,global.ng.core,global.ng.http,global.ng.common.http));
}(this, (function (exports,rxjs,operators,core,http,http$1) { 'use strict';

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
    return new rxjs.Observable(function (observer) {
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

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var InMemoryDbService = /** @class */ (function () {
    function InMemoryDbService() {
    }
    return InMemoryDbService;
}());
/**
* Interface for InMemoryBackend configuration options
*/
var InMemoryBackendConfigArgs = /** @class */ (function () {
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
var InMemoryBackendConfig = /** @class */ (function () {
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
    InMemoryBackendConfig = __decorate([
        core.Injectable(),
        __metadata("design:paramtypes", [InMemoryBackendConfigArgs])
    ], InMemoryBackendConfig);
    return InMemoryBackendConfig;
}());
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
var BackendService = /** @class */ (function () {
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
                this.dbReadySubject = new rxjs.BehaviorSubject(false);
                this.resetDb();
            }
            return this.dbReadySubject.asObservable().pipe(operators.first(function (r) { return r; }));
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
        return this.dbReady.pipe(operators.concatMap(function () { return _this.handleRequest_(req); }));
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
                return this.resetDb(reqInfo).pipe(operators.concatMap(function () { return _this.createResponse$(function () { return resOptions; }, false /* no latency delay */); }));
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
        return new rxjs.Observable(function (responseObserver) {
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
            catch (e) { /* ignore failure */ }
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
                { headers: headers, status: STATUS.NO_CONTENT } : // successful; no content
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
                { headers: headers, status: STATUS.NO_CONTENT } : // successful; no content
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
        var db$ = db instanceof rxjs.Observable ? db :
            typeof db.then === 'function' ? rxjs.from(db) :
                rxjs.of(db);
        db$.pipe(operators.first()).subscribe(function (d) {
            _this.db = d;
            _this.dbReadySubject.next(true);
        });
        return this.dbReady;
    };
    return BackendService;
}());

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
var HttpBackendService = /** @class */ (function (_super) {
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
        return resOptions$.pipe(operators.map(function (opts) {
            return new http.Response(new http.ResponseOptions(opts));
        }));
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
    HttpBackendService = __decorate$1([
        core.Injectable(),
        __param(2, core.Inject(InMemoryBackendConfig)), __param(2, core.Optional()),
        __metadata$1("design:paramtypes", [core.Injector,
            InMemoryDbService,
            InMemoryBackendConfigArgs])
    ], HttpBackendService);
    return HttpBackendService;
}(BackendService));

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$1 = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
var HttpClientBackendService = /** @class */ (function (_super) {
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
        return resOptions$.pipe(operators.map(function (opts) { return new http$1.HttpResponse(opts); }));
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
    HttpClientBackendService = __decorate$2([
        core.Injectable(),
        __param$1(1, core.Inject(InMemoryBackendConfig)), __param$1(1, core.Optional()),
        __metadata$2("design:paramtypes", [InMemoryDbService,
            InMemoryBackendConfigArgs,
            http$1.XhrFactory])
    ], HttpClientBackendService);
    return HttpClientBackendService;
}(BackendService));

////// Http-Only version ////
var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Internal - Creates the in-mem backend for the Http module
// AoT requires factory to be exported
function httpInMemBackendServiceFactory(injector, dbService, options) {
    var backend = new HttpBackendService(injector, dbService, options);
    return backend;
}
var HttpInMemoryWebApiModule = /** @class */ (function () {
    function HttpInMemoryWebApiModule() {
    }
    HttpInMemoryWebApiModule_1 = HttpInMemoryWebApiModule;
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
            ngModule: HttpInMemoryWebApiModule_1,
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
        return HttpInMemoryWebApiModule_1.forRoot(dbCreator, options);
    };
    var HttpInMemoryWebApiModule_1;
    HttpInMemoryWebApiModule = HttpInMemoryWebApiModule_1 = __decorate$4([
        core.NgModule({})
    ], HttpInMemoryWebApiModule);
    return HttpInMemoryWebApiModule;
}());

////// HttpClient-Only version ////
var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Internal - Creates the in-mem backend for the HttpClient module
// AoT requires factory to be exported
function httpClientInMemBackendServiceFactory(dbService, options, xhrFactory) {
    var backend = new HttpClientBackendService(dbService, options, xhrFactory);
    return backend;
}
var HttpClientInMemoryWebApiModule = /** @class */ (function () {
    function HttpClientInMemoryWebApiModule() {
    }
    HttpClientInMemoryWebApiModule_1 = HttpClientInMemoryWebApiModule;
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
            ngModule: HttpClientInMemoryWebApiModule_1,
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
        return HttpClientInMemoryWebApiModule_1.forRoot(dbCreator, options);
    };
    var HttpClientInMemoryWebApiModule_1;
    HttpClientInMemoryWebApiModule = HttpClientInMemoryWebApiModule_1 = __decorate$5([
        core.NgModule({})
    ], HttpClientInMemoryWebApiModule);
    return HttpClientInMemoryWebApiModule;
}());

////// For apps with both Http and HttpClient ////
var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var InMemoryWebApiModule = /** @class */ (function () {
    function InMemoryWebApiModule() {
    }
    InMemoryWebApiModule_1 = InMemoryWebApiModule;
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
            ngModule: InMemoryWebApiModule_1,
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
        return InMemoryWebApiModule_1.forRoot(dbCreator, options);
    };
    var InMemoryWebApiModule_1;
    InMemoryWebApiModule = InMemoryWebApiModule_1 = __decorate$3([
        core.NgModule({})
    ], InMemoryWebApiModule);
    return InMemoryWebApiModule;
}());

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LXdlYi1hcGkudW1kLmpzIiwic291cmNlcyI6WyIuLi9zcmMvaW4tbWVtL2h0dHAtc3RhdHVzLWNvZGVzLmpzIiwiLi4vc3JjL2luLW1lbS9kZWxheS1yZXNwb25zZS5qcyIsIi4uL3NyYy9pbi1tZW0vaW50ZXJmYWNlcy5qcyIsIi4uL3NyYy9pbi1tZW0vYmFja2VuZC5zZXJ2aWNlLmpzIiwiLi4vc3JjL2luLW1lbS9odHRwLWJhY2tlbmQuc2VydmljZS5qcyIsIi4uL3NyYy9pbi1tZW0vaHR0cC1jbGllbnQtYmFja2VuZC5zZXJ2aWNlLmpzIiwiLi4vc3JjL2luLW1lbS9odHRwLWluLW1lbW9yeS13ZWItYXBpLm1vZHVsZS5qcyIsIi4uL3NyYy9pbi1tZW0vaHR0cC1jbGllbnQtaW4tbWVtb3J5LXdlYi1hcGkubW9kdWxlLmpzIiwiLi4vc3JjL2luLW1lbS9pbi1tZW1vcnktd2ViLWFwaS5tb2R1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBTVEFUVVMgPSB7XG4gICAgQ09OVElOVUU6IDEwMCxcbiAgICBTV0lUQ0hJTkdfUFJPVE9DT0xTOiAxMDEsXG4gICAgT0s6IDIwMCxcbiAgICBDUkVBVEVEOiAyMDEsXG4gICAgQUNDRVBURUQ6IDIwMixcbiAgICBOT05fQVVUSE9SSVRBVElWRV9JTkZPUk1BVElPTjogMjAzLFxuICAgIE5PX0NPTlRFTlQ6IDIwNCxcbiAgICBSRVNFVF9DT05URU5UOiAyMDUsXG4gICAgUEFSVElBTF9DT05URU5UOiAyMDYsXG4gICAgTVVMVElQTEVfQ0hPSUNFUzogMzAwLFxuICAgIE1PVkVEX1BFUk1BTlRFTlRMWTogMzAxLFxuICAgIEZPVU5EOiAzMDIsXG4gICAgU0VFX09USEVSOiAzMDMsXG4gICAgTk9UX01PRElGSUVEOiAzMDQsXG4gICAgVVNFX1BST1hZOiAzMDUsXG4gICAgVEVNUE9SQVJZX1JFRElSRUNUOiAzMDcsXG4gICAgQkFEX1JFUVVFU1Q6IDQwMCxcbiAgICBVTkFVVEhPUklaRUQ6IDQwMSxcbiAgICBQQVlNRU5UX1JFUVVJUkVEOiA0MDIsXG4gICAgRk9SQklEREVOOiA0MDMsXG4gICAgTk9UX0ZPVU5EOiA0MDQsXG4gICAgTUVUSE9EX05PVF9BTExPV0VEOiA0MDUsXG4gICAgTk9UX0FDQ0VQVEFCTEU6IDQwNixcbiAgICBQUk9YWV9BVVRIRU5USUNBVElPTl9SRVFVSVJFRDogNDA3LFxuICAgIFJFUVVFU1RfVElNRU9VVDogNDA4LFxuICAgIENPTkZMSUNUOiA0MDksXG4gICAgR09ORTogNDEwLFxuICAgIExFTkdUSF9SRVFVSVJFRDogNDExLFxuICAgIFBSRUNPTkRJVElPTl9GQUlMRUQ6IDQxMixcbiAgICBQQVlMT0FEX1RPX0xBUkdFOiA0MTMsXG4gICAgVVJJX1RPT19MT05HOiA0MTQsXG4gICAgVU5TVVBQT1JURURfTUVESUFfVFlQRTogNDE1LFxuICAgIFJBTkdFX05PVF9TQVRJU0ZJQUJMRTogNDE2LFxuICAgIEVYUEVDVEFUSU9OX0ZBSUxFRDogNDE3LFxuICAgIElNX0FfVEVBUE9UOiA0MTgsXG4gICAgVVBHUkFERV9SRVFVSVJFRDogNDI2LFxuICAgIElOVEVSTkFMX1NFUlZFUl9FUlJPUjogNTAwLFxuICAgIE5PVF9JTVBMRU1FTlRFRDogNTAxLFxuICAgIEJBRF9HQVRFV0FZOiA1MDIsXG4gICAgU0VSVklDRV9VTkFWQUlMQUJMRTogNTAzLFxuICAgIEdBVEVXQVlfVElNRU9VVDogNTA0LFxuICAgIEhUVFBfVkVSU0lPTl9OT1RfU1VQUE9SVEVEOiA1MDUsXG4gICAgUFJPQ0VTU0lORzogMTAyLFxuICAgIE1VTFRJX1NUQVRVUzogMjA3LFxuICAgIElNX1VTRUQ6IDIyNixcbiAgICBQRVJNQU5FTlRfUkVESVJFQ1Q6IDMwOCxcbiAgICBVTlBST0NFU1NBQkxFX0VOVFJZOiA0MjIsXG4gICAgTE9DS0VEOiA0MjMsXG4gICAgRkFJTEVEX0RFUEVOREVOQ1k6IDQyNCxcbiAgICBQUkVDT05ESVRJT05fUkVRVUlSRUQ6IDQyOCxcbiAgICBUT09fTUFOWV9SRVFVRVNUUzogNDI5LFxuICAgIFJFUVVFU1RfSEVBREVSX0ZJRUxEU19UT09fTEFSR0U6IDQzMSxcbiAgICBVTkFWQUlMQUJMRV9GT1JfTEVHQUxfUkVBU09OUzogNDUxLFxuICAgIFZBUklBTlRfQUxTT19ORUdPVElBVEVTOiA1MDYsXG4gICAgSU5TVUZGSUNJRU5UX1NUT1JBR0U6IDUwNyxcbiAgICBORVRXT1JLX0FVVEhFTlRJQ0FUSU9OX1JFUVVJUkVEOiA1MTFcbn07XG4vKnRzbGludDpkaXNhYmxlOnF1b3RlbWFyayBtYXgtbGluZS1sZW5ndGggb25lLWxpbmUgKi9cbmV4cG9ydCB2YXIgU1RBVFVTX0NPREVfSU5GTyA9IHtcbiAgICAnMTAwJzoge1xuICAgICAgICAnY29kZSc6IDEwMCxcbiAgICAgICAgJ3RleHQnOiAnQ29udGludWUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBpbml0aWFsIHBhcnQgb2YgYSByZXF1ZXN0IGhhcyBiZWVuIHJlY2VpdmVkIGFuZCBoYXMgbm90IHlldCBiZWVuIHJlamVjdGVkIGJ5IHRoZSBzZXJ2ZXIuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi4yLjEnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjIuMSdcbiAgICB9LFxuICAgICcxMDEnOiB7XG4gICAgICAgICdjb2RlJzogMTAxLFxuICAgICAgICAndGV4dCc6ICdTd2l0Y2hpbmcgUHJvdG9jb2xzJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIHVuZGVyc3RhbmRzIGFuZCBpcyB3aWxsaW5nIHRvIGNvbXBseSB3aXRoIHRoZSBjbGllbnRcXCdzIHJlcXVlc3QsIHZpYSB0aGUgVXBncmFkZSBoZWFkZXIgZmllbGQsIGZvciBhIGNoYW5nZSBpbiB0aGUgYXBwbGljYXRpb24gcHJvdG9jb2wgYmVpbmcgdXNlZCBvbiB0aGlzIGNvbm5lY3Rpb24uXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi4yLjInLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjIuMidcbiAgICB9LFxuICAgICcyMDAnOiB7XG4gICAgICAgICdjb2RlJzogMjAwLFxuICAgICAgICAndGV4dCc6ICdPSycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHJlcXVlc3QgaGFzIHN1Y2NlZWRlZC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjMuMScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMy4xJ1xuICAgIH0sXG4gICAgJzIwMSc6IHtcbiAgICAgICAgJ2NvZGUnOiAyMDEsXG4gICAgICAgICd0ZXh0JzogJ0NyZWF0ZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSByZXF1ZXN0IGhhcyBiZWVuIGZ1bGZpbGxlZCBhbmQgaGFzIHJlc3VsdGVkIGluIG9uZSBvciBtb3JlIG5ldyByZXNvdXJjZXMgYmVpbmcgY3JlYXRlZC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjMuMicsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMy4yJ1xuICAgIH0sXG4gICAgJzIwMic6IHtcbiAgICAgICAgJ2NvZGUnOiAyMDIsXG4gICAgICAgICd0ZXh0JzogJ0FjY2VwdGVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgcmVxdWVzdCBoYXMgYmVlbiBhY2NlcHRlZCBmb3IgcHJvY2Vzc2luZywgYnV0IHRoZSBwcm9jZXNzaW5nIGhhcyBub3QgYmVlbiBjb21wbGV0ZWQuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi4zLjMnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjMuMydcbiAgICB9LFxuICAgICcyMDMnOiB7XG4gICAgICAgICdjb2RlJzogMjAzLFxuICAgICAgICAndGV4dCc6ICdOb24tQXV0aG9yaXRhdGl2ZSBJbmZvcm1hdGlvbicsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHJlcXVlc3Qgd2FzIHN1Y2Nlc3NmdWwgYnV0IHRoZSBlbmNsb3NlZCBwYXlsb2FkIGhhcyBiZWVuIG1vZGlmaWVkIGZyb20gdGhhdCBvZiB0aGUgb3JpZ2luIHNlcnZlclxcJ3MgMjAwIChPSykgcmVzcG9uc2UgYnkgYSB0cmFuc2Zvcm1pbmcgcHJveHkuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi4zLjQnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjMuNCdcbiAgICB9LFxuICAgICcyMDQnOiB7XG4gICAgICAgICdjb2RlJzogMjA0LFxuICAgICAgICAndGV4dCc6ICdObyBDb250ZW50JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGhhcyBzdWNjZXNzZnVsbHkgZnVsZmlsbGVkIHRoZSByZXF1ZXN0IGFuZCB0aGF0IHRoZXJlIGlzIG5vIGFkZGl0aW9uYWwgY29udGVudCB0byBzZW5kIGluIHRoZSByZXNwb25zZSBwYXlsb2FkIGJvZHkuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi4zLjUnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjMuNSdcbiAgICB9LFxuICAgICcyMDUnOiB7XG4gICAgICAgICdjb2RlJzogMjA1LFxuICAgICAgICAndGV4dCc6ICdSZXNldCBDb250ZW50JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGhhcyBmdWxmaWxsZWQgdGhlIHJlcXVlc3QgYW5kIGRlc2lyZXMgdGhhdCB0aGUgdXNlciBhZ2VudCByZXNldCB0aGUgXFxcImRvY3VtZW50IHZpZXdcXFwiLCB3aGljaCBjYXVzZWQgdGhlIHJlcXVlc3QgdG8gYmUgc2VudCwgdG8gaXRzIG9yaWdpbmFsIHN0YXRlIGFzIHJlY2VpdmVkIGZyb20gdGhlIG9yaWdpbiBzZXJ2ZXIuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi4zLjYnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjMuNidcbiAgICB9LFxuICAgICcyMDYnOiB7XG4gICAgICAgICdjb2RlJzogMjA2LFxuICAgICAgICAndGV4dCc6ICdQYXJ0aWFsIENvbnRlbnQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgaXMgc3VjY2Vzc2Z1bGx5IGZ1bGZpbGxpbmcgYSByYW5nZSByZXF1ZXN0IGZvciB0aGUgdGFyZ2V0IHJlc291cmNlIGJ5IHRyYW5zZmVycmluZyBvbmUgb3IgbW9yZSBwYXJ0cyBvZiB0aGUgc2VsZWN0ZWQgcmVwcmVzZW50YXRpb24gdGhhdCBjb3JyZXNwb25kIHRvIHRoZSBzYXRpc2ZpYWJsZSByYW5nZXMgZm91bmQgaW4gdGhlIHJlcXVlc3RzXFwncyBSYW5nZSBoZWFkZXIgZmllbGQuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzMjNC4xJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMzI3NlY3Rpb24tNC4xJ1xuICAgIH0sXG4gICAgJzMwMCc6IHtcbiAgICAgICAgJ2NvZGUnOiAzMDAsXG4gICAgICAgICd0ZXh0JzogJ011bHRpcGxlIENob2ljZXMnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSB0YXJnZXQgcmVzb3VyY2UgaGFzIG1vcmUgdGhhbiBvbmUgcmVwcmVzZW50YXRpb24sIGVhY2ggd2l0aCBpdHMgb3duIG1vcmUgc3BlY2lmaWMgaWRlbnRpZmllciwgYW5kIGluZm9ybWF0aW9uIGFib3V0IHRoZSBhbHRlcm5hdGl2ZXMgaXMgYmVpbmcgcHJvdmlkZWQgc28gdGhhdCB0aGUgdXNlciAob3IgdXNlciBhZ2VudCkgY2FuIHNlbGVjdCBhIHByZWZlcnJlZCByZXByZXNlbnRhdGlvbiBieSByZWRpcmVjdGluZyBpdHMgcmVxdWVzdCB0byBvbmUgb3IgbW9yZSBvZiB0aG9zZSBpZGVudGlmaWVycy5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjQuMScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNC4xJ1xuICAgIH0sXG4gICAgJzMwMSc6IHtcbiAgICAgICAgJ2NvZGUnOiAzMDEsXG4gICAgICAgICd0ZXh0JzogJ01vdmVkIFBlcm1hbmVudGx5JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgdGFyZ2V0IHJlc291cmNlIGhhcyBiZWVuIGFzc2lnbmVkIGEgbmV3IHBlcm1hbmVudCBVUkkgYW5kIGFueSBmdXR1cmUgcmVmZXJlbmNlcyB0byB0aGlzIHJlc291cmNlIG91Z2h0IHRvIHVzZSBvbmUgb2YgdGhlIGVuY2xvc2VkIFVSSXMuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi40LjInLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjQuMidcbiAgICB9LFxuICAgICczMDInOiB7XG4gICAgICAgICdjb2RlJzogMzAyLFxuICAgICAgICAndGV4dCc6ICdGb3VuZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHRhcmdldCByZXNvdXJjZSByZXNpZGVzIHRlbXBvcmFyaWx5IHVuZGVyIGEgZGlmZmVyZW50IFVSSS5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjQuMycsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNC4zJ1xuICAgIH0sXG4gICAgJzMwMyc6IHtcbiAgICAgICAgJ2NvZGUnOiAzMDMsXG4gICAgICAgICd0ZXh0JzogJ1NlZSBPdGhlcicsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBpcyByZWRpcmVjdGluZyB0aGUgdXNlciBhZ2VudCB0byBhIGRpZmZlcmVudCByZXNvdXJjZSwgYXMgaW5kaWNhdGVkIGJ5IGEgVVJJIGluIHRoZSBMb2NhdGlvbiBoZWFkZXIgZmllbGQsIHRoYXQgaXMgaW50ZW5kZWQgdG8gcHJvdmlkZSBhbiBpbmRpcmVjdCByZXNwb25zZSB0byB0aGUgb3JpZ2luYWwgcmVxdWVzdC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjQuNCcsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNC40J1xuICAgIH0sXG4gICAgJzMwNCc6IHtcbiAgICAgICAgJ2NvZGUnOiAzMDQsXG4gICAgICAgICd0ZXh0JzogJ05vdCBNb2RpZmllZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiQSBjb25kaXRpb25hbCBHRVQgcmVxdWVzdCBoYXMgYmVlbiByZWNlaXZlZCBhbmQgd291bGQgaGF2ZSByZXN1bHRlZCBpbiBhIDIwMCAoT0spIHJlc3BvbnNlIGlmIGl0IHdlcmUgbm90IGZvciB0aGUgZmFjdCB0aGF0IHRoZSBjb25kaXRpb24gaGFzIGV2YWx1YXRlZCB0byBmYWxzZS5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMiM0LjEnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzIjc2VjdGlvbi00LjEnXG4gICAgfSxcbiAgICAnMzA1Jzoge1xuICAgICAgICAnY29kZSc6IDMwNSxcbiAgICAgICAgJ3RleHQnOiAnVXNlIFByb3h5JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJypkZXByZWNhdGVkKicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi40LjUnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjQuNSdcbiAgICB9LFxuICAgICczMDcnOiB7XG4gICAgICAgICdjb2RlJzogMzA3LFxuICAgICAgICAndGV4dCc6ICdUZW1wb3JhcnkgUmVkaXJlY3QnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSB0YXJnZXQgcmVzb3VyY2UgcmVzaWRlcyB0ZW1wb3JhcmlseSB1bmRlciBhIGRpZmZlcmVudCBVUkkgYW5kIHRoZSB1c2VyIGFnZW50IE1VU1QgTk9UIGNoYW5nZSB0aGUgcmVxdWVzdCBtZXRob2QgaWYgaXQgcGVyZm9ybXMgYW4gYXV0b21hdGljIHJlZGlyZWN0aW9uIHRvIHRoYXQgVVJJLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNC43JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi40LjcnXG4gICAgfSxcbiAgICAnNDAwJzoge1xuICAgICAgICAnY29kZSc6IDQwMCxcbiAgICAgICAgJ3RleHQnOiAnQmFkIFJlcXVlc3QnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgY2Fubm90IG9yIHdpbGwgbm90IHByb2Nlc3MgdGhlIHJlcXVlc3QgYmVjYXVzZSB0aGUgcmVjZWl2ZWQgc3ludGF4IGlzIGludmFsaWQsIG5vbnNlbnNpY2FsLCBvciBleGNlZWRzIHNvbWUgbGltaXRhdGlvbiBvbiB3aGF0IHRoZSBzZXJ2ZXIgaXMgd2lsbGluZyB0byBwcm9jZXNzLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS4xJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjEnXG4gICAgfSxcbiAgICAnNDAxJzoge1xuICAgICAgICAnY29kZSc6IDQwMSxcbiAgICAgICAgJ3RleHQnOiAnVW5hdXRob3JpemVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgcmVxdWVzdCBoYXMgbm90IGJlZW4gYXBwbGllZCBiZWNhdXNlIGl0IGxhY2tzIHZhbGlkIGF1dGhlbnRpY2F0aW9uIGNyZWRlbnRpYWxzIGZvciB0aGUgdGFyZ2V0IHJlc291cmNlLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjM1IzYuMy4xJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjM1I3NlY3Rpb24tMy4xJ1xuICAgIH0sXG4gICAgJzQwMic6IHtcbiAgICAgICAgJ2NvZGUnOiA0MDIsXG4gICAgICAgICd0ZXh0JzogJ1BheW1lbnQgUmVxdWlyZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnKnJlc2VydmVkKicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjInLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMidcbiAgICB9LFxuICAgICc0MDMnOiB7XG4gICAgICAgICdjb2RlJzogNDAzLFxuICAgICAgICAndGV4dCc6ICdGb3JiaWRkZW4nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgdW5kZXJzdG9vZCB0aGUgcmVxdWVzdCBidXQgcmVmdXNlcyB0byBhdXRob3JpemUgaXQuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjMnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMydcbiAgICB9LFxuICAgICc0MDQnOiB7XG4gICAgICAgICdjb2RlJzogNDA0LFxuICAgICAgICAndGV4dCc6ICdOb3QgRm91bmQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBvcmlnaW4gc2VydmVyIGRpZCBub3QgZmluZCBhIGN1cnJlbnQgcmVwcmVzZW50YXRpb24gZm9yIHRoZSB0YXJnZXQgcmVzb3VyY2Ugb3IgaXMgbm90IHdpbGxpbmcgdG8gZGlzY2xvc2UgdGhhdCBvbmUgZXhpc3RzLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS40JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjQnXG4gICAgfSxcbiAgICAnNDA1Jzoge1xuICAgICAgICAnY29kZSc6IDQwNSxcbiAgICAgICAgJ3RleHQnOiAnTWV0aG9kIE5vdCBBbGxvd2VkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgbWV0aG9kIHNwZWNpZmllZCBpbiB0aGUgcmVxdWVzdC1saW5lIGlzIGtub3duIGJ5IHRoZSBvcmlnaW4gc2VydmVyIGJ1dCBub3Qgc3VwcG9ydGVkIGJ5IHRoZSB0YXJnZXQgcmVzb3VyY2UuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjUnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuNSdcbiAgICB9LFxuICAgICc0MDYnOiB7XG4gICAgICAgICdjb2RlJzogNDA2LFxuICAgICAgICAndGV4dCc6ICdOb3QgQWNjZXB0YWJsZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHRhcmdldCByZXNvdXJjZSBkb2VzIG5vdCBoYXZlIGEgY3VycmVudCByZXByZXNlbnRhdGlvbiB0aGF0IHdvdWxkIGJlIGFjY2VwdGFibGUgdG8gdGhlIHVzZXIgYWdlbnQsIGFjY29yZGluZyB0byB0aGUgcHJvYWN0aXZlIG5lZ290aWF0aW9uIGhlYWRlciBmaWVsZHMgcmVjZWl2ZWQgaW4gdGhlIHJlcXVlc3QsIGFuZCB0aGUgc2VydmVyIGlzIHVud2lsbGluZyB0byBzdXBwbHkgYSBkZWZhdWx0IHJlcHJlc2VudGF0aW9uLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS42JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjYnXG4gICAgfSxcbiAgICAnNDA3Jzoge1xuICAgICAgICAnY29kZSc6IDQwNyxcbiAgICAgICAgJ3RleHQnOiAnUHJveHkgQXV0aGVudGljYXRpb24gUmVxdWlyZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBjbGllbnQgbmVlZHMgdG8gYXV0aGVudGljYXRlIGl0c2VsZiBpbiBvcmRlciB0byB1c2UgYSBwcm94eS5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjMuMicsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMy4yJ1xuICAgIH0sXG4gICAgJzQwOCc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MDgsXG4gICAgICAgICd0ZXh0JzogJ1JlcXVlc3QgVGltZW91dCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBkaWQgbm90IHJlY2VpdmUgYSBjb21wbGV0ZSByZXF1ZXN0IG1lc3NhZ2Ugd2l0aGluIHRoZSB0aW1lIHRoYXQgaXQgd2FzIHByZXBhcmVkIHRvIHdhaXQuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjcnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuNydcbiAgICB9LFxuICAgICc0MDknOiB7XG4gICAgICAgICdjb2RlJzogNDA5LFxuICAgICAgICAndGV4dCc6ICdDb25mbGljdCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHJlcXVlc3QgY291bGQgbm90IGJlIGNvbXBsZXRlZCBkdWUgdG8gYSBjb25mbGljdCB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSByZXNvdXJjZS5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuOCcsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS44J1xuICAgIH0sXG4gICAgJzQxMCc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MTAsXG4gICAgICAgICd0ZXh0JzogJ0dvbmUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIkFjY2VzcyB0byB0aGUgdGFyZ2V0IHJlc291cmNlIGlzIG5vIGxvbmdlciBhdmFpbGFibGUgYXQgdGhlIG9yaWdpbiBzZXJ2ZXIgYW5kIHRoYXQgdGhpcyBjb25kaXRpb24gaXMgbGlrZWx5IHRvIGJlIHBlcm1hbmVudC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuOScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS45J1xuICAgIH0sXG4gICAgJzQxMSc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MTEsXG4gICAgICAgICd0ZXh0JzogJ0xlbmd0aCBSZXF1aXJlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciByZWZ1c2VzIHRvIGFjY2VwdCB0aGUgcmVxdWVzdCB3aXRob3V0IGEgZGVmaW5lZCBDb250ZW50LUxlbmd0aC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMTAnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMTAnXG4gICAgfSxcbiAgICAnNDEyJzoge1xuICAgICAgICAnY29kZSc6IDQxMixcbiAgICAgICAgJ3RleHQnOiAnUHJlY29uZGl0aW9uIEZhaWxlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiT25lIG9yIG1vcmUgcHJlY29uZGl0aW9ucyBnaXZlbiBpbiB0aGUgcmVxdWVzdCBoZWFkZXIgZmllbGRzIGV2YWx1YXRlZCB0byBmYWxzZSB3aGVuIHRlc3RlZCBvbiB0aGUgc2VydmVyLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMyIzQuMicsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMiNzZWN0aW9uLTQuMidcbiAgICB9LFxuICAgICc0MTMnOiB7XG4gICAgICAgICdjb2RlJzogNDEzLFxuICAgICAgICAndGV4dCc6ICdQYXlsb2FkIFRvbyBMYXJnZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBpcyByZWZ1c2luZyB0byBwcm9jZXNzIGEgcmVxdWVzdCBiZWNhdXNlIHRoZSByZXF1ZXN0IHBheWxvYWQgaXMgbGFyZ2VyIHRoYW4gdGhlIHNlcnZlciBpcyB3aWxsaW5nIG9yIGFibGUgdG8gcHJvY2Vzcy5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMTEnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMTEnXG4gICAgfSxcbiAgICAnNDE0Jzoge1xuICAgICAgICAnY29kZSc6IDQxNCxcbiAgICAgICAgJ3RleHQnOiAnVVJJIFRvbyBMb25nJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGlzIHJlZnVzaW5nIHRvIHNlcnZpY2UgdGhlIHJlcXVlc3QgYmVjYXVzZSB0aGUgcmVxdWVzdC10YXJnZXQgaXMgbG9uZ2VyIHRoYW4gdGhlIHNlcnZlciBpcyB3aWxsaW5nIHRvIGludGVycHJldC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMTInLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMTInXG4gICAgfSxcbiAgICAnNDE1Jzoge1xuICAgICAgICAnY29kZSc6IDQxNSxcbiAgICAgICAgJ3RleHQnOiAnVW5zdXBwb3J0ZWQgTWVkaWEgVHlwZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIG9yaWdpbiBzZXJ2ZXIgaXMgcmVmdXNpbmcgdG8gc2VydmljZSB0aGUgcmVxdWVzdCBiZWNhdXNlIHRoZSBwYXlsb2FkIGlzIGluIGEgZm9ybWF0IG5vdCBzdXBwb3J0ZWQgYnkgdGhlIHRhcmdldCByZXNvdXJjZSBmb3IgdGhpcyBtZXRob2QuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjEzJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjEzJ1xuICAgIH0sXG4gICAgJzQxNic6IHtcbiAgICAgICAgJ2NvZGUnOiA0MTYsXG4gICAgICAgICd0ZXh0JzogJ1JhbmdlIE5vdCBTYXRpc2ZpYWJsZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiTm9uZSBvZiB0aGUgcmFuZ2VzIGluIHRoZSByZXF1ZXN0XFwncyBSYW5nZSBoZWFkZXIgZmllbGQgb3ZlcmxhcCB0aGUgY3VycmVudCBleHRlbnQgb2YgdGhlIHNlbGVjdGVkIHJlc291cmNlIG9yIHRoYXQgdGhlIHNldCBvZiByYW5nZXMgcmVxdWVzdGVkIGhhcyBiZWVuIHJlamVjdGVkIGR1ZSB0byBpbnZhbGlkIHJhbmdlcyBvciBhbiBleGNlc3NpdmUgcmVxdWVzdCBvZiBzbWFsbCBvciBvdmVybGFwcGluZyByYW5nZXMuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzMjNC40JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMzI3NlY3Rpb24tNC40J1xuICAgIH0sXG4gICAgJzQxNyc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MTcsXG4gICAgICAgICd0ZXh0JzogJ0V4cGVjdGF0aW9uIEZhaWxlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIGV4cGVjdGF0aW9uIGdpdmVuIGluIHRoZSByZXF1ZXN0XFwncyBFeHBlY3QgaGVhZGVyIGZpZWxkIGNvdWxkIG5vdCBiZSBtZXQgYnkgYXQgbGVhc3Qgb25lIG9mIHRoZSBpbmJvdW5kIHNlcnZlcnMuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjE0JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjE0J1xuICAgIH0sXG4gICAgJzQxOCc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MTgsXG4gICAgICAgICd0ZXh0JzogJ0lcXCdtIGEgdGVhcG90JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCIxOTg4IEFwcmlsIEZvb2xzIEpva2UuIFJldHVybmVkIGJ5IHRlYSBwb3RzIHJlcXVlc3RlZCB0byBicmV3IGNvZmZlZS5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDIDIzMjQnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyMzI0J1xuICAgIH0sXG4gICAgJzQyNic6IHtcbiAgICAgICAgJ2NvZGUnOiA0MjYsXG4gICAgICAgICd0ZXh0JzogJ1VwZ3JhZGUgUmVxdWlyZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgcmVmdXNlcyB0byBwZXJmb3JtIHRoZSByZXF1ZXN0IHVzaW5nIHRoZSBjdXJyZW50IHByb3RvY29sIGJ1dCBtaWdodCBiZSB3aWxsaW5nIHRvIGRvIHNvIGFmdGVyIHRoZSBjbGllbnQgdXBncmFkZXMgdG8gYSBkaWZmZXJlbnQgcHJvdG9jb2wuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjE1JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjE1J1xuICAgIH0sXG4gICAgJzUwMCc6IHtcbiAgICAgICAgJ2NvZGUnOiA1MDAsXG4gICAgICAgICd0ZXh0JzogJ0ludGVybmFsIFNlcnZlciBFcnJvcicsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBlbmNvdW50ZXJlZCBhbiB1bmV4cGVjdGVkIGNvbmRpdGlvbiB0aGF0IHByZXZlbnRlZCBpdCBmcm9tIGZ1bGZpbGxpbmcgdGhlIHJlcXVlc3QuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi42LjEnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjYuMSdcbiAgICB9LFxuICAgICc1MDEnOiB7XG4gICAgICAgICdjb2RlJzogNTAxLFxuICAgICAgICAndGV4dCc6ICdOb3QgSW1wbGVtZW50ZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgZnVuY3Rpb25hbGl0eSByZXF1aXJlZCB0byBmdWxmaWxsIHRoZSByZXF1ZXN0LlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNi4yJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi42LjInXG4gICAgfSxcbiAgICAnNTAyJzoge1xuICAgICAgICAnY29kZSc6IDUwMixcbiAgICAgICAgJ3RleHQnOiAnQmFkIEdhdGV3YXknLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIsIHdoaWxlIGFjdGluZyBhcyBhIGdhdGV3YXkgb3IgcHJveHksIHJlY2VpdmVkIGFuIGludmFsaWQgcmVzcG9uc2UgZnJvbSBhbiBpbmJvdW5kIHNlcnZlciBpdCBhY2Nlc3NlZCB3aGlsZSBhdHRlbXB0aW5nIHRvIGZ1bGZpbGwgdGhlIHJlcXVlc3QuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi42LjMnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjYuMydcbiAgICB9LFxuICAgICc1MDMnOiB7XG4gICAgICAgICdjb2RlJzogNTAzLFxuICAgICAgICAndGV4dCc6ICdTZXJ2aWNlIFVuYXZhaWxhYmxlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGlzIGN1cnJlbnRseSB1bmFibGUgdG8gaGFuZGxlIHRoZSByZXF1ZXN0IGR1ZSB0byBhIHRlbXBvcmFyeSBvdmVybG9hZCBvciBzY2hlZHVsZWQgbWFpbnRlbmFuY2UsIHdoaWNoIHdpbGwgbGlrZWx5IGJlIGFsbGV2aWF0ZWQgYWZ0ZXIgc29tZSBkZWxheS5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjYuNCcsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNi40J1xuICAgIH0sXG4gICAgJzUwNCc6IHtcbiAgICAgICAgJ2NvZGUnOiA1MDQsXG4gICAgICAgICd0ZXh0JzogJ0dhdGV3YXkgVGltZS1vdXQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIsIHdoaWxlIGFjdGluZyBhcyBhIGdhdGV3YXkgb3IgcHJveHksIGRpZCBub3QgcmVjZWl2ZSBhIHRpbWVseSByZXNwb25zZSBmcm9tIGFuIHVwc3RyZWFtIHNlcnZlciBpdCBuZWVkZWQgdG8gYWNjZXNzIGluIG9yZGVyIHRvIGNvbXBsZXRlIHRoZSByZXF1ZXN0LlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNi41JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi42LjUnXG4gICAgfSxcbiAgICAnNTA1Jzoge1xuICAgICAgICAnY29kZSc6IDUwNSxcbiAgICAgICAgJ3RleHQnOiAnSFRUUCBWZXJzaW9uIE5vdCBTdXBwb3J0ZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgZG9lcyBub3Qgc3VwcG9ydCwgb3IgcmVmdXNlcyB0byBzdXBwb3J0LCB0aGUgcHJvdG9jb2wgdmVyc2lvbiB0aGF0IHdhcyB1c2VkIGluIHRoZSByZXF1ZXN0IG1lc3NhZ2UuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi42LjYnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjYuNidcbiAgICB9LFxuICAgICcxMDInOiB7XG4gICAgICAgICdjb2RlJzogMTAyLFxuICAgICAgICAndGV4dCc6ICdQcm9jZXNzaW5nJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJBbiBpbnRlcmltIHJlc3BvbnNlIHRvIGluZm9ybSB0aGUgY2xpZW50IHRoYXQgdGhlIHNlcnZlciBoYXMgYWNjZXB0ZWQgdGhlIGNvbXBsZXRlIHJlcXVlc3QsIGJ1dCBoYXMgbm90IHlldCBjb21wbGV0ZWQgaXQuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzUyMTgjMTAuMScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjUxOCNzZWN0aW9uLTEwLjEnXG4gICAgfSxcbiAgICAnMjA3Jzoge1xuICAgICAgICAnY29kZSc6IDIwNyxcbiAgICAgICAgJ3RleHQnOiAnTXVsdGktU3RhdHVzJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJTdGF0dXMgZm9yIG11bHRpcGxlIGluZGVwZW5kZW50IG9wZXJhdGlvbnMuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzUyMTgjMTAuMicsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjUxOCNzZWN0aW9uLTEwLjInXG4gICAgfSxcbiAgICAnMjI2Jzoge1xuICAgICAgICAnY29kZSc6IDIyNixcbiAgICAgICAgJ3RleHQnOiAnSU0gVXNlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBoYXMgZnVsZmlsbGVkIGEgR0VUIHJlcXVlc3QgZm9yIHRoZSByZXNvdXJjZSwgYW5kIHRoZSByZXNwb25zZSBpcyBhIHJlcHJlc2VudGF0aW9uIG9mIHRoZSByZXN1bHQgb2Ygb25lIG9yIG1vcmUgaW5zdGFuY2UtbWFuaXB1bGF0aW9ucyBhcHBsaWVkIHRvIHRoZSBjdXJyZW50IGluc3RhbmNlLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkMzMjI5IzEwLjQuMScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzIyOSNzZWN0aW9uLTEwLjQuMSdcbiAgICB9LFxuICAgICczMDgnOiB7XG4gICAgICAgICdjb2RlJzogMzA4LFxuICAgICAgICAndGV4dCc6ICdQZXJtYW5lbnQgUmVkaXJlY3QnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSB0YXJnZXQgcmVzb3VyY2UgaGFzIGJlZW4gYXNzaWduZWQgYSBuZXcgcGVybWFuZW50IFVSSSBhbmQgYW55IGZ1dHVyZSByZWZlcmVuY2VzIHRvIHRoaXMgcmVzb3VyY2UgU0hPVUxEIHVzZSBvbmUgb2YgdGhlIHJldHVybmVkIFVSSXMuIFsuLi5dIFRoaXMgc3RhdHVzIGNvZGUgaXMgc2ltaWxhciB0byAzMDEgTW92ZWQgUGVybWFuZW50bHkgKFNlY3Rpb24gNy4zLjIgb2YgcmZjNzIzMSksIGV4Y2VwdCB0aGF0IGl0IGRvZXMgbm90IGFsbG93IHJld3JpdGluZyB0aGUgcmVxdWVzdCBtZXRob2QgZnJvbSBQT1NUIHRvIEdFVC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzOCcsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzOCdcbiAgICB9LFxuICAgICc0MjInOiB7XG4gICAgICAgICdjb2RlJzogNDIyLFxuICAgICAgICAndGV4dCc6ICdVbnByb2Nlc3NhYmxlIEVudGl0eScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciB1bmRlcnN0YW5kcyB0aGUgY29udGVudCB0eXBlIG9mIHRoZSByZXF1ZXN0IGVudGl0eSAoaGVuY2UgYSA0MTUoVW5zdXBwb3J0ZWQgTWVkaWEgVHlwZSkgc3RhdHVzIGNvZGUgaXMgaW5hcHByb3ByaWF0ZSksIGFuZCB0aGUgc3ludGF4IG9mIHRoZSByZXF1ZXN0IGVudGl0eSBpcyBjb3JyZWN0ICh0aHVzIGEgNDAwIChCYWQgUmVxdWVzdCkgc3RhdHVzIGNvZGUgaXMgaW5hcHByb3ByaWF0ZSkgYnV0IHdhcyB1bmFibGUgdG8gcHJvY2VzcyB0aGUgY29udGFpbmVkIGluc3RydWN0aW9ucy5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNTIxOCMxMC4zJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNTE4I3NlY3Rpb24tMTAuMydcbiAgICB9LFxuICAgICc0MjMnOiB7XG4gICAgICAgICdjb2RlJzogNDIzLFxuICAgICAgICAndGV4dCc6ICdMb2NrZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzb3VyY2Ugb3IgZGVzdGluYXRpb24gcmVzb3VyY2Ugb2YgYSBtZXRob2QgaXMgbG9ja2VkLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM1MjE4IzEwLjQnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzI1MTgjc2VjdGlvbi0xMC40J1xuICAgIH0sXG4gICAgJzQyNCc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MjQsXG4gICAgICAgICd0ZXh0JzogJ0ZhaWxlZCBEZXBlbmRlbmN5JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgbWV0aG9kIGNvdWxkIG5vdCBiZSBwZXJmb3JtZWQgb24gdGhlIHJlc291cmNlIGJlY2F1c2UgdGhlIHJlcXVlc3RlZCBhY3Rpb24gZGVwZW5kZWQgb24gYW5vdGhlciBhY3Rpb24gYW5kIHRoYXQgYWN0aW9uIGZhaWxlZC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNTIxOCMxMC41JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNTE4I3NlY3Rpb24tMTAuNSdcbiAgICB9LFxuICAgICc0MjgnOiB7XG4gICAgICAgICdjb2RlJzogNDI4LFxuICAgICAgICAndGV4dCc6ICdQcmVjb25kaXRpb24gUmVxdWlyZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBvcmlnaW4gc2VydmVyIHJlcXVpcmVzIHRoZSByZXF1ZXN0IHRvIGJlIGNvbmRpdGlvbmFsLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM2NTg1IzMnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzY1ODUjc2VjdGlvbi0zJ1xuICAgIH0sXG4gICAgJzQyOSc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MjksXG4gICAgICAgICd0ZXh0JzogJ1RvbyBNYW55IFJlcXVlc3RzJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgdXNlciBoYXMgc2VudCB0b28gbWFueSByZXF1ZXN0cyBpbiBhIGdpdmVuIGFtb3VudCBvZiB0aW1lIChcXFwicmF0ZSBsaW1pdGluZ1xcXCIpLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM2NTg1IzQnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzY1ODUjc2VjdGlvbi00J1xuICAgIH0sXG4gICAgJzQzMSc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MzEsXG4gICAgICAgICd0ZXh0JzogJ1JlcXVlc3QgSGVhZGVyIEZpZWxkcyBUb28gTGFyZ2UnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgaXMgdW53aWxsaW5nIHRvIHByb2Nlc3MgdGhlIHJlcXVlc3QgYmVjYXVzZSBpdHMgaGVhZGVyIGZpZWxkcyBhcmUgdG9vIGxhcmdlLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM2NTg1IzUnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzY1ODUjc2VjdGlvbi01J1xuICAgIH0sXG4gICAgJzQ1MSc6IHtcbiAgICAgICAgJ2NvZGUnOiA0NTEsXG4gICAgICAgICd0ZXh0JzogJ1VuYXZhaWxhYmxlIEZvciBMZWdhbCBSZWFzb25zJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGlzIGRlbnlpbmcgYWNjZXNzIHRvIHRoZSByZXNvdXJjZSBpbiByZXNwb25zZSB0byBhIGxlZ2FsIGRlbWFuZC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnZHJhZnQtaWV0Zi1odHRwYmlzLWxlZ2FsbHktcmVzdHJpY3RlZC1zdGF0dXMnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL2RyYWZ0LWlldGYtaHR0cGJpcy1sZWdhbGx5LXJlc3RyaWN0ZWQtc3RhdHVzJ1xuICAgIH0sXG4gICAgJzUwNic6IHtcbiAgICAgICAgJ2NvZGUnOiA1MDYsXG4gICAgICAgICd0ZXh0JzogJ1ZhcmlhbnQgQWxzbyBOZWdvdGlhdGVzJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGhhcyBhbiBpbnRlcm5hbCBjb25maWd1cmF0aW9uIGVycm9yOiB0aGUgY2hvc2VuIHZhcmlhbnQgcmVzb3VyY2UgaXMgY29uZmlndXJlZCB0byBlbmdhZ2UgaW4gdHJhbnNwYXJlbnQgY29udGVudCBuZWdvdGlhdGlvbiBpdHNlbGYsIGFuZCBpcyB0aGVyZWZvcmUgbm90IGEgcHJvcGVyIGVuZCBwb2ludCBpbiB0aGUgbmVnb3RpYXRpb24gcHJvY2Vzcy5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDMjI5NSM4LjEnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzIyOTUjc2VjdGlvbi04LjEnXG4gICAgfSxcbiAgICAnNTA3Jzoge1xuICAgICAgICAnY29kZSc6IDUwNyxcbiAgICAgICAgJ3RleHQnOiAnSW5zdWZmaWNpZW50IFN0b3JhZ2UnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxUaGUgbWV0aG9kIGNvdWxkIG5vdCBiZSBwZXJmb3JtZWQgb24gdGhlIHJlc291cmNlIGJlY2F1c2UgdGhlIHNlcnZlciBpcyB1bmFibGUgdG8gc3RvcmUgdGhlIHJlcHJlc2VudGF0aW9uIG5lZWRlZCB0byBzdWNjZXNzZnVsbHkgY29tcGxldGUgdGhlIHJlcXVlc3QuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzUyMTgjMTAuNicsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjUxOCNzZWN0aW9uLTEwLjYnXG4gICAgfSxcbiAgICAnNTExJzoge1xuICAgICAgICAnY29kZSc6IDUxMSxcbiAgICAgICAgJ3RleHQnOiAnTmV0d29yayBBdXRoZW50aWNhdGlvbiBSZXF1aXJlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIGNsaWVudCBuZWVkcyB0byBhdXRoZW50aWNhdGUgdG8gZ2FpbiBuZXR3b3JrIGFjY2Vzcy5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNjU4NSM2JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NTg1I3NlY3Rpb24tNidcbiAgICB9XG59O1xuLyoqXG4gKiBnZXQgdGhlIHN0YXR1cyB0ZXh0IGZyb20gU3RhdHVzQ29kZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdHVzVGV4dChzdGF0dXMpIHtcbiAgICByZXR1cm4gU1RBVFVTX0NPREVfSU5GT1tzdGF0dXNdLnRleHQgfHwgJ1Vua25vd24gU3RhdHVzJztcbn1cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB0aGUgSHR0cCBTdGF0dXMgQ29kZSBpcyAyMDAtMjk5IChzdWNjZXNzKVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTdWNjZXNzKHN0YXR1cykgeyByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7IH1cbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0dHAtc3RhdHVzLWNvZGVzLmpzLm1hcCIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbi8vIFJlcGxhY2VzIHVzZSBvZiBSeEpTIGRlbGF5LiBTZWUgdjAuNS40LlxuLyoqIGFkZHMgc3BlY2lmaWVkIGRlbGF5IChpbiBtcykgdG8gYm90aCBuZXh0IGFuZCBlcnJvciBjaGFubmVscyBvZiB0aGUgcmVzcG9uc2Ugb2JzZXJ2YWJsZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGF5UmVzcG9uc2UocmVzcG9uc2UkLCBkZWxheU1zKSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICB2YXIgY29tcGxldGVQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHZhciBuZXh0UGVuZGluZyA9IGZhbHNlO1xuICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gcmVzcG9uc2UkLnN1YnNjcmliZShmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIG5leHRQZW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChjb21wbGV0ZVBlbmRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBkZWxheU1zKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9ic2VydmVyLmVycm9yKGVycm9yKTsgfSwgZGVsYXlNcyk7IH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbXBsZXRlUGVuZGluZyA9IHRydWU7XG4gICAgICAgICAgICBpZiAoIW5leHRQZW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH07XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZWxheS1yZXNwb25zZS5qcy5tYXAiLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLyoqXG4qIEludGVyZmFjZSBmb3IgYSBjbGFzcyB0aGF0IGNyZWF0ZXMgYW4gaW4tbWVtb3J5IGRhdGFiYXNlXG4qXG4qIEl0cyBgY3JlYXRlRGJgIG1ldGhvZCBjcmVhdGVzIGEgaGFzaCBvZiBuYW1lZCBjb2xsZWN0aW9ucyB0aGF0IHJlcHJlc2VudHMgdGhlIGRhdGFiYXNlXG4qXG4qIEZvciBtYXhpbXVtIGZsZXhpYmlsaXR5LCB0aGUgc2VydmljZSBtYXkgZGVmaW5lIEhUVFAgbWV0aG9kIG92ZXJyaWRlcy5cbiogU3VjaCBtZXRob2RzIG11c3QgbWF0Y2ggdGhlIHNwZWxsaW5nIG9mIGFuIEhUVFAgbWV0aG9kIGluIGxvd2VyIGNhc2UgKGUuZywgXCJnZXRcIikuXG4qIElmIGEgcmVxdWVzdCBoYXMgYSBtYXRjaGluZyBtZXRob2QsIGl0IHdpbGwgYmUgY2FsbGVkIGFzIGluXG4qIGBnZXQoaW5mbzogcmVxdWVzdEluZm8sIGRiOiB7fSlgIHdoZXJlIGBkYmAgaXMgdGhlIGRhdGFiYXNlIG9iamVjdCBkZXNjcmliZWQgYWJvdmUuXG4qL1xudmFyIEluTWVtb3J5RGJTZXJ2aWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEluTWVtb3J5RGJTZXJ2aWNlKCkge1xuICAgIH1cbiAgICByZXR1cm4gSW5NZW1vcnlEYlNlcnZpY2U7XG59KCkpO1xuZXhwb3J0IHsgSW5NZW1vcnlEYlNlcnZpY2UgfTtcbi8qKlxuKiBJbnRlcmZhY2UgZm9yIEluTWVtb3J5QmFja2VuZCBjb25maWd1cmF0aW9uIG9wdGlvbnNcbiovXG52YXIgSW5NZW1vcnlCYWNrZW5kQ29uZmlnQXJncyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBJbk1lbW9yeUJhY2tlbmRDb25maWdBcmdzKCkge1xuICAgIH1cbiAgICByZXR1cm4gSW5NZW1vcnlCYWNrZW5kQ29uZmlnQXJncztcbn0oKSk7XG5leHBvcnQgeyBJbk1lbW9yeUJhY2tlbmRDb25maWdBcmdzIH07XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8qKlxuKiAgSW5NZW1vcnlCYWNrZW5kU2VydmljZSBjb25maWd1cmF0aW9uIG9wdGlvbnNcbiogIFVzYWdlOlxuKiAgICBJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290KEluTWVtSGVyb1NlcnZpY2UsIHtkZWxheTogNjAwfSlcbipcbiogIG9yIGlmIHByb3ZpZGluZyBzZXBhcmF0ZWx5OlxuKiAgICBwcm92aWRlKEluTWVtb3J5QmFja2VuZENvbmZpZywge3VzZVZhbHVlOiB7ZGVsYXk6IDYwMH19KSxcbiovXG52YXIgSW5NZW1vcnlCYWNrZW5kQ29uZmlnID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEluTWVtb3J5QmFja2VuZENvbmZpZyhjb25maWcpIHtcbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gdm9pZCAwKSB7IGNvbmZpZyA9IHt9OyB9XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xuICAgICAgICAgICAgLy8gZGVmYXVsdCBjb25maWc6XG4gICAgICAgICAgICBjYXNlU2Vuc2l0aXZlU2VhcmNoOiBmYWxzZSxcbiAgICAgICAgICAgIGRhdGFFbmNhcHN1bGF0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgIGRlbGF5OiA1MDAsXG4gICAgICAgICAgICBkZWxldGU0MDQ6IGZhbHNlLFxuICAgICAgICAgICAgcGFzc1RocnVVbmtub3duVXJsOiBmYWxzZSxcbiAgICAgICAgICAgIHBvc3QyMDQ6IHRydWUsXG4gICAgICAgICAgICBwb3N0NDA5OiBmYWxzZSxcbiAgICAgICAgICAgIHB1dDIwNDogdHJ1ZSxcbiAgICAgICAgICAgIHB1dDQwNDogZmFsc2UsXG4gICAgICAgICAgICBhcGlCYXNlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBob3N0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICByb290UGF0aDogdW5kZWZpbmVkIC8vIGRlZmF1bHQgdmFsdWUgaXMgYWN0dWFsbHkgc2V0IGluIEluTWVtb3J5QmFja2VuZFNlcnZpY2UgY3RvclxuICAgICAgICB9LCBjb25maWcpO1xuICAgIH1cbiAgICBJbk1lbW9yeUJhY2tlbmRDb25maWcgPSBfX2RlY29yYXRlKFtcbiAgICAgICAgSW5qZWN0YWJsZSgpLFxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW0luTWVtb3J5QmFja2VuZENvbmZpZ0FyZ3NdKVxuICAgIF0sIEluTWVtb3J5QmFja2VuZENvbmZpZyk7XG4gICAgcmV0dXJuIEluTWVtb3J5QmFja2VuZENvbmZpZztcbn0oKSk7XG5leHBvcnQgeyBJbk1lbW9yeUJhY2tlbmRDb25maWcgfTtcbi8qKiBSZXR1cm4gaW5mb3JtYXRpb24gKFVyaUluZm8pIGFib3V0IGEgVVJJICAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVXJpKHN0cikge1xuICAgIC8vIEFkYXB0ZWQgZnJvbSBwYXJzZXVyaSBwYWNrYWdlIC0gaHR0cDovL2Jsb2cuc3RldmVubGV2aXRoYW4uY29tL2FyY2hpdmVzL3BhcnNldXJpXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgIHZhciBVUkxfUkVHRVggPSAvXig/Oig/IVteOkBdKzpbXjpAXFwvXSpAKShbXjpcXC8/Iy5dKyk6KT8oPzpcXC9cXC8pPygoPzooKFteOkBdKikoPzo6KFteOkBdKikpPyk/QCk/KFteOlxcLz8jXSopKD86OihcXGQqKSk/KSgoKFxcLyg/OltePyNdKD8hW14/I1xcL10qXFwuW14/I1xcLy5dKyg/Ols/I118JCkpKSpcXC8/KT8oW14/I1xcL10qKSkoPzpcXD8oW14jXSopKT8oPzojKC4qKSk/KS87XG4gICAgdmFyIG0gPSBVUkxfUkVHRVguZXhlYyhzdHIpO1xuICAgIHZhciB1cmkgPSB7XG4gICAgICAgIHNvdXJjZTogJycsXG4gICAgICAgIHByb3RvY29sOiAnJyxcbiAgICAgICAgYXV0aG9yaXR5OiAnJyxcbiAgICAgICAgdXNlckluZm86ICcnLFxuICAgICAgICB1c2VyOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICBob3N0OiAnJyxcbiAgICAgICAgcG9ydDogJycsXG4gICAgICAgIHJlbGF0aXZlOiAnJyxcbiAgICAgICAgcGF0aDogJycsXG4gICAgICAgIGRpcmVjdG9yeTogJycsXG4gICAgICAgIGZpbGU6ICcnLFxuICAgICAgICBxdWVyeTogJycsXG4gICAgICAgIGFuY2hvcjogJydcbiAgICB9O1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModXJpKTtcbiAgICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgdXJpW2tleXNbaV1dID0gbVtpXSB8fCAnJztcbiAgICB9XG4gICAgcmV0dXJuIHVyaTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUcmFpbGluZ1NsYXNoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW50ZXJmYWNlcy5qcy5tYXAiLCJpbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QsIG9mLCBmcm9tIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjb25jYXRNYXAsIGZpcnN0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgZ2V0U3RhdHVzVGV4dCwgaXNTdWNjZXNzLCBTVEFUVVMgfSBmcm9tICcuL2h0dHAtc3RhdHVzLWNvZGVzJztcbmltcG9ydCB7IGRlbGF5UmVzcG9uc2UgfSBmcm9tICcuL2RlbGF5LXJlc3BvbnNlJztcbmltcG9ydCB7IEluTWVtb3J5QmFja2VuZENvbmZpZywgcGFyc2VVcmksIHJlbW92ZVRyYWlsaW5nU2xhc2ggfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBpbi1tZW1vcnkgd2ViIGFwaSBiYWNrLWVuZHNcbiAqIFNpbXVsYXRlIHRoZSBiZWhhdmlvciBvZiBhIFJFU1R5IHdlYiBhcGlcbiAqIGJhY2tlZCBieSB0aGUgc2ltcGxlIGluLW1lbW9yeSBkYXRhIHN0b3JlIHByb3ZpZGVkIGJ5IHRoZSBpbmplY3RlZCBgSW5NZW1vcnlEYlNlcnZpY2VgIHNlcnZpY2UuXG4gKiBDb25mb3JtcyBtb3N0bHkgdG8gYmVoYXZpb3IgZGVzY3JpYmVkIGhlcmU6XG4gKiBodHRwOi8vd3d3LnJlc3RhcGl0dXRvcmlhbC5jb20vbGVzc29ucy9odHRwbWV0aG9kcy5odG1sXG4gKi9cbnZhciBCYWNrZW5kU2VydmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCYWNrZW5kU2VydmljZShpbk1lbURiU2VydmljZSwgY29uZmlnKSB7XG4gICAgICAgIGlmIChjb25maWcgPT09IHZvaWQgMCkgeyBjb25maWcgPSB7fTsgfVxuICAgICAgICB0aGlzLmluTWVtRGJTZXJ2aWNlID0gaW5NZW1EYlNlcnZpY2U7XG4gICAgICAgIHRoaXMuY29uZmlnID0gbmV3IEluTWVtb3J5QmFja2VuZENvbmZpZygpO1xuICAgICAgICB0aGlzLnJlcXVlc3RJbmZvVXRpbHMgPSB0aGlzLmdldFJlcXVlc3RJbmZvVXRpbHMoKTtcbiAgICAgICAgdmFyIGxvYyA9IHRoaXMuZ2V0TG9jYXRpb24oJy8nKTtcbiAgICAgICAgdGhpcy5jb25maWcuaG9zdCA9IGxvYy5ob3N0OyAvLyBkZWZhdWx0IHRvIGFwcCB3ZWIgc2VydmVyIGhvc3RcbiAgICAgICAgdGhpcy5jb25maWcucm9vdFBhdGggPSBsb2MucGF0aDsgLy8gZGVmYXVsdCB0byBwYXRoIHdoZW4gYXBwIGlzIHNlcnZlZCAoZS5nLicvJylcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmNvbmZpZywgY29uZmlnKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZSwgXCJkYlJlYWR5XCIsIHtcbiAgICAgICAgLy8vLyAgcHJvdGVjdGVkIC8vLy8vXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRiUmVhZHlTdWJqZWN0KSB7XG4gICAgICAgICAgICAgICAgLy8gZmlyc3QgdGltZSB0aGUgc2VydmljZSBpcyBjYWxsZWQuXG4gICAgICAgICAgICAgICAgdGhpcy5kYlJlYWR5U3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXREYigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGJSZWFkeVN1YmplY3QuYXNPYnNlcnZhYmxlKCkucGlwZShmaXJzdChmdW5jdGlvbiAocikgeyByZXR1cm4gcjsgfSkpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBQcm9jZXNzIFJlcXVlc3QgYW5kIHJldHVybiBhbiBPYnNlcnZhYmxlIG9mIEh0dHAgUmVzcG9uc2Ugb2JqZWN0XG4gICAgICogaW4gdGhlIG1hbm5lciBvZiBhIFJFU1R5IHdlYiBhcGkuXG4gICAgICpcbiAgICAgKiBFeHBlY3QgVVJJIHBhdHRlcm4gaW4gdGhlIGZvcm0gOmJhc2UvOmNvbGxlY3Rpb25OYW1lLzppZD9cbiAgICAgKiBFeGFtcGxlczpcbiAgICAgKiAgIC8vIGZvciBzdG9yZSB3aXRoIGEgJ2N1c3RvbWVycycgY29sbGVjdGlvblxuICAgICAqICAgR0VUIGFwaS9jdXN0b21lcnMgICAgICAgICAgLy8gYWxsIGN1c3RvbWVyc1xuICAgICAqICAgR0VUIGFwaS9jdXN0b21lcnMvNDIgICAgICAgLy8gdGhlIGNoYXJhY3RlciB3aXRoIGlkPTQyXG4gICAgICogICBHRVQgYXBpL2N1c3RvbWVycz9uYW1lPV5qICAvLyAnaicgaXMgYSByZWdleDsgcmV0dXJucyBjdXN0b21lcnMgd2hvc2UgbmFtZSBzdGFydHMgd2l0aCAnaicgb3IgJ0onXG4gICAgICogICBHRVQgYXBpL2N1c3RvbWVycy5qc29uLzQyICAvLyBpZ25vcmVzIHRoZSBcIi5qc29uXCJcbiAgICAgKlxuICAgICAqIEFsc28gYWNjZXB0cyBkaXJlY3QgY29tbWFuZHMgdG8gdGhlIHNlcnZpY2UgaW4gd2hpY2ggdGhlIGxhc3Qgc2VnbWVudCBvZiB0aGUgYXBpQmFzZSBpcyB0aGUgd29yZCBcImNvbW1hbmRzXCJcbiAgICAgKiBFeGFtcGxlczpcbiAgICAgKiAgICAgUE9TVCBjb21tYW5kcy9yZXNldERiLFxuICAgICAqICAgICBHRVQvUE9TVCBjb21tYW5kcy9jb25maWcgLSBnZXQgb3IgKHJlKXNldCB0aGUgY29uZmlnXG4gICAgICpcbiAgICAgKiAgIEhUVFAgb3ZlcnJpZGVzOlxuICAgICAqICAgICBJZiB0aGUgaW5qZWN0ZWQgaW5NZW1EYlNlcnZpY2UgZGVmaW5lcyBhbiBIVFRQIG1ldGhvZCAobG93ZXJjYXNlKVxuICAgICAqICAgICBUaGUgcmVxdWVzdCBpcyBmb3J3YXJkZWQgdG8gdGhhdCBtZXRob2QgYXMgaW5cbiAgICAgKiAgICAgYGluTWVtRGJTZXJ2aWNlLmdldChyZXF1ZXN0SW5mbylgXG4gICAgICogICAgIHdoaWNoIG11c3QgcmV0dXJuIGVpdGhlciBhbiBPYnNlcnZhYmxlIG9mIHRoZSByZXNwb25zZSB0eXBlXG4gICAgICogICAgIGZvciB0aGlzIGh0dHAgbGlicmFyeSBvciBudWxsfHVuZGVmaW5lZCAod2hpY2ggbWVhbnMgXCJrZWVwIHByb2Nlc3NpbmdcIikuXG4gICAgICovXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmhhbmRsZVJlcXVlc3QgPSBmdW5jdGlvbiAocmVxKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vICBoYW5kbGUgdGhlIHJlcXVlc3Qgd2hlbiB0aGVyZSBpcyBhbiBpbi1tZW1vcnkgZGF0YWJhc2VcbiAgICAgICAgcmV0dXJuIHRoaXMuZGJSZWFkeS5waXBlKGNvbmNhdE1hcChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5oYW5kbGVSZXF1ZXN0XyhyZXEpOyB9KSk7XG4gICAgfTtcbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuaGFuZGxlUmVxdWVzdF8gPSBmdW5jdGlvbiAocmVxKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciB1cmwgPSByZXEudXJsV2l0aFBhcmFtcyA/IHJlcS51cmxXaXRoUGFyYW1zIDogcmVxLnVybDtcbiAgICAgICAgLy8gVHJ5IG92ZXJyaWRlIHBhcnNlclxuICAgICAgICAvLyBJZiBubyBvdmVycmlkZSBwYXJzZXIgb3IgaXQgcmV0dXJucyBub3RoaW5nLCB1c2UgZGVmYXVsdCBwYXJzZXJcbiAgICAgICAgdmFyIHBhcnNlciA9IHRoaXMuYmluZCgncGFyc2VSZXF1ZXN0VXJsJyk7XG4gICAgICAgIHZhciBwYXJzZWQgPSAocGFyc2VyICYmIHBhcnNlcih1cmwsIHRoaXMucmVxdWVzdEluZm9VdGlscykpIHx8XG4gICAgICAgICAgICB0aGlzLnBhcnNlUmVxdWVzdFVybCh1cmwpO1xuICAgICAgICB2YXIgY29sbGVjdGlvbk5hbWUgPSBwYXJzZWQuY29sbGVjdGlvbk5hbWU7XG4gICAgICAgIHZhciBjb2xsZWN0aW9uID0gdGhpcy5kYltjb2xsZWN0aW9uTmFtZV07XG4gICAgICAgIHZhciByZXFJbmZvID0ge1xuICAgICAgICAgICAgcmVxOiByZXEsXG4gICAgICAgICAgICBhcGlCYXNlOiBwYXJzZWQuYXBpQmFzZSxcbiAgICAgICAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb24sXG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbk5hbWUsXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmNyZWF0ZUhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxuICAgICAgICAgICAgaWQ6IHRoaXMucGFyc2VJZChjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSwgcGFyc2VkLmlkKSxcbiAgICAgICAgICAgIG1ldGhvZDogdGhpcy5nZXRSZXF1ZXN0TWV0aG9kKHJlcSksXG4gICAgICAgICAgICBxdWVyeTogcGFyc2VkLnF1ZXJ5LFxuICAgICAgICAgICAgcmVzb3VyY2VVcmw6IHBhcnNlZC5yZXNvdXJjZVVybCxcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgdXRpbHM6IHRoaXMucmVxdWVzdEluZm9VdGlsc1xuICAgICAgICB9O1xuICAgICAgICB2YXIgcmVzT3B0aW9ucztcbiAgICAgICAgaWYgKC9jb21tYW5kc1xcLz8kL2kudGVzdChyZXFJbmZvLmFwaUJhc2UpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21tYW5kcyhyZXFJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbWV0aG9kSW50ZXJjZXB0b3IgPSB0aGlzLmJpbmQocmVxSW5mby5tZXRob2QpO1xuICAgICAgICBpZiAobWV0aG9kSW50ZXJjZXB0b3IpIHtcbiAgICAgICAgICAgIC8vIEluTWVtb3J5RGJTZXJ2aWNlIGludGVyY2VwdHMgdGhpcyBIVFRQIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGlmIGludGVyY2VwdG9yIHByb2R1Y2VkIGEgcmVzcG9uc2UsIHJldHVybiBpdC5cbiAgICAgICAgICAgIC8vIGVsc2UgSW5NZW1vcnlEYlNlcnZpY2UgY2hvc2Ugbm90IHRvIGludGVyY2VwdDsgY29udGludWUgcHJvY2Vzc2luZy5cbiAgICAgICAgICAgIHZhciBpbnRlcmNlcHRvclJlc3BvbnNlID0gbWV0aG9kSW50ZXJjZXB0b3IocmVxSW5mbyk7XG4gICAgICAgICAgICBpZiAoaW50ZXJjZXB0b3JSZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnRlcmNlcHRvclJlc3BvbnNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRiW2NvbGxlY3Rpb25OYW1lXSkge1xuICAgICAgICAgICAgLy8gcmVxdWVzdCBpcyBmb3IgYSBrbm93biBjb2xsZWN0aW9uIG9mIHRoZSBJbk1lbW9yeURiU2VydmljZVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUmVzcG9uc2UkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmNvbGxlY3Rpb25IYW5kbGVyKHJlcUluZm8pOyB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jb25maWcucGFzc1RocnVVbmtub3duVXJsKSB7XG4gICAgICAgICAgICAvLyB1bmtub3duIGNvbGxlY3Rpb247IHBhc3MgcmVxdWVzdCB0aHJ1IHRvIGEgXCJyZWFsXCIgYmFja2VuZC5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFBhc3NUaHJ1QmFja2VuZCgpLmhhbmRsZShyZXEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIDQwNCAtIGNhbid0IGhhbmRsZSB0aGlzIHJlcXVlc3RcbiAgICAgICAgcmVzT3B0aW9ucyA9IHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnModXJsLCBTVEFUVVMuTk9UX0ZPVU5ELCBcIkNvbGxlY3Rpb24gJ1wiICsgY29sbGVjdGlvbk5hbWUgKyBcIicgbm90IGZvdW5kXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVSZXNwb25zZSQoZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVzT3B0aW9uczsgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGQgY29uZmlndXJlZCBkZWxheSB0byByZXNwb25zZSBvYnNlcnZhYmxlIHVubGVzcyBkZWxheSA9PT0gMFxuICAgICAqL1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5hZGREZWxheSA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICB2YXIgZCA9IHRoaXMuY29uZmlnLmRlbGF5O1xuICAgICAgICByZXR1cm4gZCA9PT0gMCA/IHJlc3BvbnNlIDogZGVsYXlSZXNwb25zZShyZXNwb25zZSwgZCB8fCA1MDApO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQXBwbHkgcXVlcnkvc2VhcmNoIHBhcmFtZXRlcnMgYXMgYSBmaWx0ZXIgb3ZlciB0aGUgY29sbGVjdGlvblxuICAgICAqIFRoaXMgaW1wbCBvbmx5IHN1cHBvcnRzIFJlZ0V4cCBxdWVyaWVzIG9uIHN0cmluZyBwcm9wZXJ0aWVzIG9mIHRoZSBjb2xsZWN0aW9uXG4gICAgICogQU5EcyB0aGUgY29uZGl0aW9ucyB0b2dldGhlclxuICAgICAqL1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5hcHBseVF1ZXJ5ID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIHF1ZXJ5KSB7XG4gICAgICAgIC8vIGV4dHJhY3QgZmlsdGVyaW5nIGNvbmRpdGlvbnMgLSB7cHJvcGVydHlOYW1lLCBSZWdFeHBzKSAtIGZyb20gcXVlcnkvc2VhcmNoIHBhcmFtZXRlcnNcbiAgICAgICAgdmFyIGNvbmRpdGlvbnMgPSBbXTtcbiAgICAgICAgdmFyIGNhc2VTZW5zaXRpdmUgPSB0aGlzLmNvbmZpZy5jYXNlU2Vuc2l0aXZlU2VhcmNoID8gdW5kZWZpbmVkIDogJ2knO1xuICAgICAgICBxdWVyeS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSkge1xuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbiAodikgeyByZXR1cm4gY29uZGl0aW9ucy5wdXNoKHsgbmFtZTogbmFtZSwgcng6IG5ldyBSZWdFeHAoZGVjb2RlVVJJKHYpLCBjYXNlU2Vuc2l0aXZlKSB9KTsgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgbGVuID0gY29uZGl0aW9ucy5sZW5ndGg7XG4gICAgICAgIGlmICghbGVuKSB7XG4gICAgICAgICAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgICAgICAgfVxuICAgICAgICAvLyBBTkQgdGhlIFJlZ0V4cCBjb25kaXRpb25zXG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uLmZpbHRlcihmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgICB2YXIgb2sgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIGkgPSBsZW47XG4gICAgICAgICAgICB3aGlsZSAob2sgJiYgaSkge1xuICAgICAgICAgICAgICAgIGkgLT0gMTtcbiAgICAgICAgICAgICAgICB2YXIgY29uZCA9IGNvbmRpdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgb2sgPSBjb25kLnJ4LnRlc3Qocm93W2NvbmQubmFtZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9rO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBhIG1ldGhvZCBmcm9tIHRoZSBgSW5NZW1vcnlEYlNlcnZpY2VgIChpZiBpdCBleGlzdHMpLCBib3VuZCB0byB0aGF0IHNlcnZpY2VcbiAgICAgKi9cbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChtZXRob2ROYW1lKSB7XG4gICAgICAgIHZhciBmbiA9IHRoaXMuaW5NZW1EYlNlcnZpY2VbbWV0aG9kTmFtZV07XG4gICAgICAgIHJldHVybiBmbiA/IGZuLmJpbmQodGhpcy5pbk1lbURiU2VydmljZSkgOiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuYm9kaWZ5ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmRhdGFFbmNhcHN1bGF0aW9uID8geyBkYXRhOiBkYXRhIH0gOiBkYXRhO1xuICAgIH07XG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIH07XG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmNvbGxlY3Rpb25IYW5kbGVyID0gZnVuY3Rpb24gKHJlcUluZm8pIHtcbiAgICAgICAgLy8gY29uc3QgcmVxID0gcmVxSW5mby5yZXE7XG4gICAgICAgIHZhciByZXNPcHRpb25zO1xuICAgICAgICBzd2l0Y2ggKHJlcUluZm8ubWV0aG9kKSB7XG4gICAgICAgICAgICBjYXNlICdnZXQnOlxuICAgICAgICAgICAgICAgIHJlc09wdGlvbnMgPSB0aGlzLmdldChyZXFJbmZvKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Bvc3QnOlxuICAgICAgICAgICAgICAgIHJlc09wdGlvbnMgPSB0aGlzLnBvc3QocmVxSW5mbyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwdXQnOlxuICAgICAgICAgICAgICAgIHJlc09wdGlvbnMgPSB0aGlzLnB1dChyZXFJbmZvKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICAgICAgICAgICAgcmVzT3B0aW9ucyA9IHRoaXMuZGVsZXRlKHJlcUluZm8pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXNPcHRpb25zID0gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyhyZXFJbmZvLnVybCwgU1RBVFVTLk1FVEhPRF9OT1RfQUxMT1dFRCwgJ01ldGhvZCBub3QgYWxsb3dlZCcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGBpbk1lbURiU2VydmljZS5yZXNwb25zZUludGVyY2VwdG9yYCBleGlzdHMsIGxldCBpdCBtb3JwaCB0aGUgcmVzcG9uc2Ugb3B0aW9uc1xuICAgICAgICB2YXIgaW50ZXJjZXB0b3IgPSB0aGlzLmJpbmQoJ3Jlc3BvbnNlSW50ZXJjZXB0b3InKTtcbiAgICAgICAgcmV0dXJuIGludGVyY2VwdG9yID8gaW50ZXJjZXB0b3IocmVzT3B0aW9ucywgcmVxSW5mbykgOiByZXNPcHRpb25zO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ29tbWFuZHMgcmVjb25maWd1cmUgdGhlIGluLW1lbW9yeSB3ZWIgYXBpIHNlcnZpY2Ugb3IgZXh0cmFjdCBpbmZvcm1hdGlvbiBmcm9tIGl0LlxuICAgICAqIENvbW1hbmRzIGlnbm9yZSB0aGUgbGF0ZW5jeSBkZWxheSBhbmQgcmVzcG9uZCBBU0FQLlxuICAgICAqXG4gICAgICogV2hlbiB0aGUgbGFzdCBzZWdtZW50IG9mIHRoZSBgYXBpQmFzZWAgcGF0aCBpcyBcImNvbW1hbmRzXCIsXG4gICAgICogdGhlIGBjb2xsZWN0aW9uTmFtZWAgaXMgdGhlIGNvbW1hbmQuXG4gICAgICpcbiAgICAgKiBFeGFtcGxlIFVSTHM6XG4gICAgICogICBjb21tYW5kcy9yZXNldGRiIChQT1NUKSAvLyBSZXNldCB0aGUgXCJkYXRhYmFzZVwiIHRvIGl0cyBvcmlnaW5hbCBzdGF0ZVxuICAgICAqICAgY29tbWFuZHMvY29uZmlnIChHRVQpICAgLy8gUmV0dXJuIHRoaXMgc2VydmljZSdzIGNvbmZpZyBvYmplY3RcbiAgICAgKiAgIGNvbW1hbmRzL2NvbmZpZyAoUE9TVCkgIC8vIFVwZGF0ZSB0aGUgY29uZmlnIChlLmcuIHRoZSBkZWxheSlcbiAgICAgKlxuICAgICAqIFVzYWdlOlxuICAgICAqICAgaHR0cC5wb3N0KCdjb21tYW5kcy9yZXNldGRiJywgdW5kZWZpbmVkKTtcbiAgICAgKiAgIGh0dHAuZ2V0KCdjb21tYW5kcy9jb25maWcnKTtcbiAgICAgKiAgIGh0dHAucG9zdCgnY29tbWFuZHMvY29uZmlnJywgJ3tcImRlbGF5XCI6MTAwMH0nKTtcbiAgICAgKi9cbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuY29tbWFuZHMgPSBmdW5jdGlvbiAocmVxSW5mbykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgY29tbWFuZCA9IHJlcUluZm8uY29sbGVjdGlvbk5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdmFyIG1ldGhvZCA9IHJlcUluZm8ubWV0aG9kO1xuICAgICAgICB2YXIgcmVzT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHVybDogcmVxSW5mby51cmxcbiAgICAgICAgfTtcbiAgICAgICAgc3dpdGNoIChjb21tYW5kKSB7XG4gICAgICAgICAgICBjYXNlICdyZXNldGRiJzpcbiAgICAgICAgICAgICAgICByZXNPcHRpb25zLnN0YXR1cyA9IFNUQVRVUy5OT19DT05URU5UO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc2V0RGIocmVxSW5mbykucGlwZShjb25jYXRNYXAoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuY3JlYXRlUmVzcG9uc2UkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc09wdGlvbnM7IH0sIGZhbHNlIC8qIG5vIGxhdGVuY3kgZGVsYXkgKi8pOyB9KSk7XG4gICAgICAgICAgICBjYXNlICdjb25maWcnOlxuICAgICAgICAgICAgICAgIGlmIChtZXRob2QgPT09ICdnZXQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc09wdGlvbnMuc3RhdHVzID0gU1RBVFVTLk9LO1xuICAgICAgICAgICAgICAgICAgICByZXNPcHRpb25zLmJvZHkgPSB0aGlzLmNsb25lKHRoaXMuY29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gYW55IG90aGVyIEhUVFAgbWV0aG9kIGlzIGFzc3VtZWQgdG8gYmUgYSBjb25maWcgdXBkYXRlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYm9keSA9IHRoaXMuZ2V0SnNvbkJvZHkocmVxSW5mby5yZXEpO1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuY29uZmlnLCBib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXNzVGhydUJhY2tlbmQgPSB1bmRlZmluZWQ7IC8vIHJlLWNyZWF0ZSB3aGVuIG5lZWRlZFxuICAgICAgICAgICAgICAgICAgICByZXNPcHRpb25zLnN0YXR1cyA9IFNUQVRVUy5OT19DT05URU5UO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmVzT3B0aW9ucyA9IHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnMocmVxSW5mby51cmwsIFNUQVRVUy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsIFwiVW5rbm93biBjb21tYW5kIFxcXCJcIiArIGNvbW1hbmQgKyBcIlxcXCJcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUmVzcG9uc2UkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc09wdGlvbnM7IH0sIGZhbHNlIC8qIG5vIGxhdGVuY3kgZGVsYXkgKi8pO1xuICAgIH07XG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zID0gZnVuY3Rpb24gKHVybCwgc3RhdHVzLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBib2R5OiB7IGVycm9yOiBcIlwiICsgbWVzc2FnZSB9LFxuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmNyZWF0ZUhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxuICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXNcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGNvbGQgcmVzcG9uc2UgT2JzZXJ2YWJsZSBmcm9tIGEgZmFjdG9yeSBmb3IgUmVzcG9uc2VPcHRpb25zXG4gICAgICogQHBhcmFtIHJlc09wdGlvbnNGYWN0b3J5IC0gY3JlYXRlcyBSZXNwb25zZU9wdGlvbnMgd2hlbiBvYnNlcnZhYmxlIGlzIHN1YnNjcmliZWRcbiAgICAgKiBAcGFyYW0gd2l0aERlbGF5IC0gaWYgdHJ1ZSAoZGVmYXVsdCksIGFkZCBzaW11bGF0ZWQgbGF0ZW5jeSBkZWxheSBmcm9tIGNvbmZpZ3VyYXRpb25cbiAgICAgKi9cbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuY3JlYXRlUmVzcG9uc2UkID0gZnVuY3Rpb24gKHJlc09wdGlvbnNGYWN0b3J5LCB3aXRoRGVsYXkpIHtcbiAgICAgICAgaWYgKHdpdGhEZWxheSA9PT0gdm9pZCAwKSB7IHdpdGhEZWxheSA9IHRydWU7IH1cbiAgICAgICAgdmFyIHJlc09wdGlvbnMkID0gdGhpcy5jcmVhdGVSZXNwb25zZU9wdGlvbnMkKHJlc09wdGlvbnNGYWN0b3J5KTtcbiAgICAgICAgdmFyIHJlc3AkID0gdGhpcy5jcmVhdGVSZXNwb25zZSRmcm9tUmVzcG9uc2VPcHRpb25zJChyZXNPcHRpb25zJCk7XG4gICAgICAgIHJldHVybiB3aXRoRGVsYXkgPyB0aGlzLmFkZERlbGF5KHJlc3AkKSA6IHJlc3AkO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgY29sZCBPYnNlcnZhYmxlIG9mIFJlc3BvbnNlT3B0aW9ucy5cbiAgICAgKiBAcGFyYW0gcmVzT3B0aW9uc0ZhY3RvcnkgLSBjcmVhdGVzIFJlc3BvbnNlT3B0aW9ucyB3aGVuIG9ic2VydmFibGUgaXMgc3Vic2NyaWJlZFxuICAgICAqL1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5jcmVhdGVSZXNwb25zZU9wdGlvbnMkID0gZnVuY3Rpb24gKHJlc09wdGlvbnNGYWN0b3J5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAocmVzcG9uc2VPYnNlcnZlcikge1xuICAgICAgICAgICAgdmFyIHJlc09wdGlvbnM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc09wdGlvbnMgPSByZXNPcHRpb25zRmFjdG9yeSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVyciA9IGVycm9yLm1lc3NhZ2UgfHwgZXJyb3I7XG4gICAgICAgICAgICAgICAgcmVzT3B0aW9ucyA9IF90aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKCcnLCBTVEFUVVMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLCBcIlwiICsgZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzdGF0dXMgPSByZXNPcHRpb25zLnN0YXR1cztcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzT3B0aW9ucy5zdGF0dXNUZXh0ID0gZ2V0U3RhdHVzVGV4dChzdGF0dXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHsgLyogaWdub3JlIGZhaWx1cmUgKi8gfVxuICAgICAgICAgICAgaWYgKGlzU3VjY2VzcyhzdGF0dXMpKSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2VPYnNlcnZlci5uZXh0KHJlc09wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlT2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlT2JzZXJ2ZXIuZXJyb3IocmVzT3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyB9OyAvLyB1bnN1YnNjcmliZSBmdW5jdGlvblxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSBfYS5jb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSA9IF9hLmNvbGxlY3Rpb25OYW1lLCBoZWFkZXJzID0gX2EuaGVhZGVycywgaWQgPSBfYS5pZCwgdXJsID0gX2EudXJsO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xuICAgICAgICBpZiAoaWQgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5OT1RfRk9VTkQsIFwiTWlzc2luZyBcXFwiXCIgKyBjb2xsZWN0aW9uTmFtZSArIFwiXFxcIiBpZFwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXhpc3RzID0gdGhpcy5yZW1vdmVCeUlkKGNvbGxlY3Rpb24sIGlkKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgICAgICBzdGF0dXM6IChleGlzdHMgfHwgIXRoaXMuY29uZmlnLmRlbGV0ZTQwNCkgPyBTVEFUVVMuTk9fQ09OVEVOVCA6IFNUQVRVUy5OT1RfRk9VTkRcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEZpbmQgZmlyc3QgaW5zdGFuY2Ugb2YgaXRlbSBpbiBjb2xsZWN0aW9uIGJ5IGBpdGVtLmlkYFxuICAgICAqIEBwYXJhbSBjb2xsZWN0aW9uXG4gICAgICogQHBhcmFtIGlkXG4gICAgICovXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmZpbmRCeUlkID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGlkKSB7XG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uLmZpbmQoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0uaWQgPT09IGlkOyB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIHRoZSBuZXh0IGF2YWlsYWJsZSBpZCBmb3IgaXRlbSBpbiB0aGlzIGNvbGxlY3Rpb25cbiAgICAgKiBVc2UgbWV0aG9kIGZyb20gYGluTWVtRGJTZXJ2aWNlYCBpZiBpdCBleGlzdHMgYW5kIHJldHVybnMgYSB2YWx1ZSxcbiAgICAgKiBlbHNlIGRlbGVnYXRlcyB0byBgZ2VuSWREZWZhdWx0YC5cbiAgICAgKiBAcGFyYW0gY29sbGVjdGlvbiAtIGNvbGxlY3Rpb24gb2YgaXRlbXMgd2l0aCBgaWRgIGtleSBwcm9wZXJ0eVxuICAgICAqL1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5nZW5JZCA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSkge1xuICAgICAgICB2YXIgZ2VuSWQgPSB0aGlzLmJpbmQoJ2dlbklkJyk7XG4gICAgICAgIGlmIChnZW5JZCkge1xuICAgICAgICAgICAgdmFyIGlkID0gZ2VuSWQoY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUpO1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcbiAgICAgICAgICAgIGlmIChpZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VuSWREZWZhdWx0KGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERlZmF1bHQgZ2VuZXJhdG9yIG9mIHRoZSBuZXh0IGF2YWlsYWJsZSBpZCBmb3IgaXRlbSBpbiB0aGlzIGNvbGxlY3Rpb25cbiAgICAgKiBUaGlzIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gd29ya3Mgb25seSBmb3IgbnVtZXJpYyBpZHMuXG4gICAgICogQHBhcmFtIGNvbGxlY3Rpb24gLSBjb2xsZWN0aW9uIG9mIGl0ZW1zIHdpdGggYGlkYCBrZXkgcHJvcGVydHlcbiAgICAgKiBAcGFyYW0gY29sbGVjdGlvbk5hbWUgLSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uXG4gICAgICovXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmdlbklkRGVmYXVsdCA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNDb2xsZWN0aW9uSWROdW1lcmljKGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ29sbGVjdGlvbiAnXCIgKyBjb2xsZWN0aW9uTmFtZSArIFwiJyBpZCB0eXBlIGlzIG5vbi1udW1lcmljIG9yIHVua25vd24uIENhbiBvbmx5IGdlbmVyYXRlIG51bWVyaWMgaWRzLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbWF4SWQgPSAwO1xuICAgICAgICBjb2xsZWN0aW9uLnJlZHVjZShmdW5jdGlvbiAocHJldiwgaXRlbSkge1xuICAgICAgICAgICAgbWF4SWQgPSBNYXRoLm1heChtYXhJZCwgdHlwZW9mIGl0ZW0uaWQgPT09ICdudW1iZXInID8gaXRlbS5pZCA6IG1heElkKTtcbiAgICAgICAgfSwgdW5kZWZpbmVkKTtcbiAgICAgICAgcmV0dXJuIG1heElkICsgMTtcbiAgICB9O1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSBfYS5jb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSA9IF9hLmNvbGxlY3Rpb25OYW1lLCBoZWFkZXJzID0gX2EuaGVhZGVycywgaWQgPSBfYS5pZCwgcXVlcnkgPSBfYS5xdWVyeSwgdXJsID0gX2EudXJsO1xuICAgICAgICB2YXIgZGF0YSA9IGNvbGxlY3Rpb247XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzXG4gICAgICAgIGlmIChpZCAhPSB1bmRlZmluZWQgJiYgaWQgIT09ICcnKSB7XG4gICAgICAgICAgICBkYXRhID0gdGhpcy5maW5kQnlJZChjb2xsZWN0aW9uLCBpZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocXVlcnkpIHtcbiAgICAgICAgICAgIGRhdGEgPSB0aGlzLmFwcGx5UXVlcnkoY29sbGVjdGlvbiwgcXVlcnkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnModXJsLCBTVEFUVVMuTk9UX0ZPVU5ELCBcIidcIiArIGNvbGxlY3Rpb25OYW1lICsgXCInIHdpdGggaWQ9J1wiICsgaWQgKyBcIicgbm90IGZvdW5kXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBib2R5OiB0aGlzLmJvZGlmeSh0aGlzLmNsb25lKGRhdGEpKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgICAgICBzdGF0dXM6IFNUQVRVUy5PS1xuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IGxvY2F0aW9uIGluZm8gZnJvbSBhIHVybCwgZXZlbiBvbiBzZXJ2ZXIgd2hlcmUgYGRvY3VtZW50YCBpcyBub3QgZGVmaW5lZFxuICAgICAqL1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5nZXRMb2NhdGlvbiA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgaWYgKCF1cmwuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgICAgICAgICAvLyBnZXQgdGhlIGRvY3VtZW50IGlmZiBydW5uaW5nIGluIGJyb3dzZXJcbiAgICAgICAgICAgIHZhciBkb2MgPSAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgPyB1bmRlZmluZWQgOiBkb2N1bWVudDtcbiAgICAgICAgICAgIC8vIGFkZCBob3N0IGluZm8gdG8gdXJsIGJlZm9yZSBwYXJzaW5nLiAgVXNlIGEgZmFrZSBob3N0IHdoZW4gbm90IGluIGJyb3dzZXIuXG4gICAgICAgICAgICB2YXIgYmFzZSA9IGRvYyA/IGRvYy5sb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBkb2MubG9jYXRpb24uaG9zdCA6ICdodHRwOi8vZmFrZSc7XG4gICAgICAgICAgICB1cmwgPSB1cmwuc3RhcnRzV2l0aCgnLycpID8gYmFzZSArIHVybCA6IGJhc2UgKyAnLycgKyB1cmw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcnNlVXJpKHVybCk7XG4gICAgfTtcbiAgICA7XG4gICAgLyoqXG4gICAgICogZ2V0IG9yIGNyZWF0ZSB0aGUgZnVuY3Rpb24gdGhhdCBwYXNzZXMgdW5oYW5kbGVkIHJlcXVlc3RzXG4gICAgICogdGhyb3VnaCB0byB0aGUgXCJyZWFsXCIgYmFja2VuZC5cbiAgICAgKi9cbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuZ2V0UGFzc1RocnVCYWNrZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXNzVGhydUJhY2tlbmQgP1xuICAgICAgICAgICAgdGhpcy5wYXNzVGhydUJhY2tlbmQgOlxuICAgICAgICAgICAgdGhpcy5wYXNzVGhydUJhY2tlbmQgPSB0aGlzLmNyZWF0ZVBhc3NUaHJ1QmFja2VuZCgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IHV0aWxpdHkgbWV0aG9kcyBmcm9tIHRoaXMgc2VydmljZSBpbnN0YW5jZS5cbiAgICAgKiBVc2VmdWwgd2l0aGluIGFuIEhUVFAgbWV0aG9kIG92ZXJyaWRlXG4gICAgICovXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmdldFJlcXVlc3RJbmZvVXRpbHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjcmVhdGVSZXNwb25zZSQ6IHRoaXMuY3JlYXRlUmVzcG9uc2UkLmJpbmQodGhpcyksXG4gICAgICAgICAgICBmaW5kQnlJZDogdGhpcy5maW5kQnlJZC5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgaXNDb2xsZWN0aW9uSWROdW1lcmljOiB0aGlzLmlzQ29sbGVjdGlvbklkTnVtZXJpYy5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZ2V0Q29uZmlnOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5jb25maWc7IH0sXG4gICAgICAgICAgICBnZXREYjogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZGI7IH0sXG4gICAgICAgICAgICBnZXRKc29uQm9keTogdGhpcy5nZXRKc29uQm9keS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZ2V0TG9jYXRpb246IHRoaXMuZ2V0TG9jYXRpb24uYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGdldFBhc3NUaHJ1QmFja2VuZDogdGhpcy5nZXRQYXNzVGhydUJhY2tlbmQuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIHBhcnNlUmVxdWVzdFVybDogdGhpcy5wYXJzZVJlcXVlc3RVcmwuYmluZCh0aGlzKSxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGlkKSB7XG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uLmZpbmRJbmRleChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS5pZCA9PT0gaWQ7IH0pO1xuICAgIH07XG4gICAgLyoqIFBhcnNlIHRoZSBpZCBhcyBhIG51bWJlci4gUmV0dXJuIG9yaWdpbmFsIHZhbHVlIGlmIG5vdCBhIG51bWJlci4gKi9cbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUucGFyc2VJZCA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSwgaWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQ29sbGVjdGlvbklkTnVtZXJpYyhjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSkpIHtcbiAgICAgICAgICAgIC8vIENhbid0IGNvbmZpcm0gdGhhdCBgaWRgIGlzIGEgbnVtZXJpYyB0eXBlOyBkb24ndCBwYXJzZSBhcyBhIG51bWJlclxuICAgICAgICAgICAgLy8gb3IgZWxzZSBgJzQyJ2AgLT4gYDQyYCBhbmQgX2dldCBieSBpZF8gZmFpbHMuXG4gICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlkTnVtID0gcGFyc2VGbG9hdChpZCk7XG4gICAgICAgIHJldHVybiBpc05hTihpZE51bSkgPyBpZCA6IGlkTnVtO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogcmV0dXJuIHRydWUgaWYgY2FuIGRldGVybWluZSB0aGF0IHRoZSBjb2xsZWN0aW9uJ3MgYGl0ZW0uaWRgIGlzIGEgbnVtYmVyXG4gICAgICogVGhpcyBpbXBsZW1lbnRhdGlvbiBjYW4ndCB0ZWxsIGlmIHRoZSBjb2xsZWN0aW9uIGlzIGVtcHR5IHNvIGl0IGFzc3VtZXMgTk9cbiAgICAgKiAqL1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5pc0NvbGxlY3Rpb25JZE51bWVyaWMgPSBmdW5jdGlvbiAoY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUpIHtcbiAgICAgICAgLy8gY29sbGVjdGlvbk5hbWUgbm90IHVzZWQgbm93IGJ1dCBvdmVycmlkZSBtaWdodCBtYWludGFpbiBjb2xsZWN0aW9uIHR5cGUgaW5mb3JtYXRpb25cbiAgICAgICAgLy8gc28gdGhhdCBpdCBjb3VsZCBrbm93IHRoZSB0eXBlIG9mIHRoZSBgaWRgIGV2ZW4gd2hlbiB0aGUgY29sbGVjdGlvbiBpcyBlbXB0eS5cbiAgICAgICAgcmV0dXJuICEhKGNvbGxlY3Rpb24gJiYgY29sbGVjdGlvblswXSkgJiYgdHlwZW9mIGNvbGxlY3Rpb25bMF0uaWQgPT09ICdudW1iZXInO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSByZXF1ZXN0IFVSTCBpbnRvIGEgYFBhcnNlZFJlcXVlc3RVcmxgIG9iamVjdC5cbiAgICAgKiBQYXJzaW5nIGRlcGVuZHMgdXBvbiBjZXJ0YWluIHZhbHVlcyBvZiBgY29uZmlnYDogYGFwaUJhc2VgLCBgaG9zdGAsIGFuZCBgdXJsUm9vdGAuXG4gICAgICpcbiAgICAgKiBDb25maWd1cmluZyB0aGUgYGFwaUJhc2VgIHlpZWxkcyB0aGUgbW9zdCBpbnRlcmVzdGluZyBjaGFuZ2VzIHRvIGBwYXJzZVJlcXVlc3RVcmxgIGJlaGF2aW9yOlxuICAgICAqICAgV2hlbiBhcGlCYXNlPXVuZGVmaW5lZCBhbmQgdXJsPSdodHRwOi8vbG9jYWxob3N0L2FwaS9jb2xsZWN0aW9uLzQyJ1xuICAgICAqICAgICB7YmFzZTogJ2FwaS8nLCBjb2xsZWN0aW9uTmFtZTogJ2NvbGxlY3Rpb24nLCBpZDogJzQyJywgLi4ufVxuICAgICAqICAgV2hlbiBhcGlCYXNlPSdzb21lL2FwaS9yb290LycgYW5kIHVybD0naHR0cDovL2xvY2FsaG9zdC9zb21lL2FwaS9yb290L2NvbGxlY3Rpb24nXG4gICAgICogICAgIHtiYXNlOiAnc29tZS9hcGkvcm9vdC8nLCBjb2xsZWN0aW9uTmFtZTogJ2NvbGxlY3Rpb24nLCBpZDogdW5kZWZpbmVkLCAuLi59XG4gICAgICogICBXaGVuIGFwaUJhc2U9Jy8nIGFuZCB1cmw9J2h0dHA6Ly9sb2NhbGhvc3QvY29sbGVjdGlvbidcbiAgICAgKiAgICAge2Jhc2U6ICcvJywgY29sbGVjdGlvbk5hbWU6ICdjb2xsZWN0aW9uJywgaWQ6IHVuZGVmaW5lZCwgLi4ufVxuICAgICAqXG4gICAgICogVGhlIGFjdHVhbCBhcGkgYmFzZSBzZWdtZW50IHZhbHVlcyBhcmUgaWdub3JlZC4gT25seSB0aGUgbnVtYmVyIG9mIHNlZ21lbnRzIG1hdHRlcnMuXG4gICAgICogVGhlIGZvbGxvd2luZyBhcGkgYmFzZSBzdHJpbmdzIGFyZSBjb25zaWRlcmVkIGlkZW50aWNhbDogJ2EvYicgfiAnc29tZS9hcGkvJyB+IGB0d28vc2VnbWVudHMnXG4gICAgICpcbiAgICAgKiBUbyByZXBsYWNlIHRoaXMgZGVmYXVsdCBtZXRob2QsIGFzc2lnbiB5b3VyIGFsdGVybmF0aXZlIHRvIHlvdXIgSW5NZW1EYlNlcnZpY2VbJ3BhcnNlUmVxdWVzdFVybCddXG4gICAgICovXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLnBhcnNlUmVxdWVzdFVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBsb2MgPSB0aGlzLmdldExvY2F0aW9uKHVybCk7XG4gICAgICAgICAgICB2YXIgZHJvcCA9IHRoaXMuY29uZmlnLnJvb3RQYXRoLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciB1cmxSb290ID0gJyc7XG4gICAgICAgICAgICBpZiAobG9jLmhvc3QgIT09IHRoaXMuY29uZmlnLmhvc3QpIHtcbiAgICAgICAgICAgICAgICAvLyB1cmwgZm9yIGEgc2VydmVyIG9uIGEgZGlmZmVyZW50IGhvc3QhXG4gICAgICAgICAgICAgICAgLy8gYXNzdW1lIGl0J3MgY29sbGVjdGlvbiBpcyBhY3R1YWxseSBoZXJlIHRvby5cbiAgICAgICAgICAgICAgICBkcm9wID0gMTsgLy8gdGhlIGxlYWRpbmcgc2xhc2hcbiAgICAgICAgICAgICAgICB1cmxSb290ID0gbG9jLnByb3RvY29sICsgJy8vJyArIGxvYy5ob3N0ICsgJy8nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHBhdGggPSBsb2MucGF0aC5zdWJzdHJpbmcoZHJvcCk7XG4gICAgICAgICAgICB2YXIgcGF0aFNlZ21lbnRzID0gcGF0aC5zcGxpdCgnLycpO1xuICAgICAgICAgICAgdmFyIHNlZ21lbnRJeCA9IDA7XG4gICAgICAgICAgICAvLyBhcGlCYXNlOiB0aGUgZnJvbnQgcGFydCBvZiB0aGUgcGF0aCBkZXZvdGVkIHRvIGdldHRpbmcgdG8gdGhlIGFwaSByb3V0ZVxuICAgICAgICAgICAgLy8gQXNzdW1lcyBmaXJzdCBwYXRoIHNlZ21lbnQgaWYgbm8gY29uZmlnLmFwaUJhc2VcbiAgICAgICAgICAgIC8vIGVsc2UgaWdub3JlcyBhcyBtYW55IHBhdGggc2VnbWVudHMgYXMgYXJlIGluIGNvbmZpZy5hcGlCYXNlXG4gICAgICAgICAgICAvLyBEb2VzIE5PVCBjYXJlIHdoYXQgdGhlIGFwaSBiYXNlIGNoYXJzIGFjdHVhbGx5IGFyZS5cbiAgICAgICAgICAgIHZhciBhcGlCYXNlID0gdm9pZCAwO1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5hcGlCYXNlID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGFwaUJhc2UgPSBwYXRoU2VnbWVudHNbc2VnbWVudEl4KytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYXBpQmFzZSA9IHJlbW92ZVRyYWlsaW5nU2xhc2godGhpcy5jb25maWcuYXBpQmFzZS50cmltKCkpO1xuICAgICAgICAgICAgICAgIGlmIChhcGlCYXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnRJeCA9IGFwaUJhc2Uuc3BsaXQoJy8nKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWdtZW50SXggPSAwOyAvLyBubyBhcGkgYmFzZSBhdCBhbGw7IHVud2lzZSBidXQgYWxsb3dlZC5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcGlCYXNlICs9ICcvJztcbiAgICAgICAgICAgIHZhciBjb2xsZWN0aW9uTmFtZSA9IHBhdGhTZWdtZW50c1tzZWdtZW50SXgrK107XG4gICAgICAgICAgICAvLyBpZ25vcmUgYW55dGhpbmcgYWZ0ZXIgYSAnLicgKGUuZy4sdGhlIFwianNvblwiIGluIFwiY3VzdG9tZXJzLmpzb25cIilcbiAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvbk5hbWUgJiYgY29sbGVjdGlvbk5hbWUuc3BsaXQoJy4nKVswXTtcbiAgICAgICAgICAgIHZhciBpZCA9IHBhdGhTZWdtZW50c1tzZWdtZW50SXgrK107XG4gICAgICAgICAgICB2YXIgcXVlcnkgPSB0aGlzLmNyZWF0ZVF1ZXJ5TWFwKGxvYy5xdWVyeSk7XG4gICAgICAgICAgICB2YXIgcmVzb3VyY2VVcmwgPSB1cmxSb290ICsgYXBpQmFzZSArIGNvbGxlY3Rpb25OYW1lICsgJy8nO1xuICAgICAgICAgICAgcmV0dXJuIHsgYXBpQmFzZTogYXBpQmFzZSwgY29sbGVjdGlvbk5hbWU6IGNvbGxlY3Rpb25OYW1lLCBpZDogaWQsIHF1ZXJ5OiBxdWVyeSwgcmVzb3VyY2VVcmw6IHJlc291cmNlVXJsIH07XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdmFyIG1zZyA9IFwidW5hYmxlIHRvIHBhcnNlIHVybCAnXCIgKyB1cmwgKyBcIic7IG9yaWdpbmFsIGVycm9yOiBcIiArIGVyci5tZXNzYWdlO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIENyZWF0ZSBlbnRpdHlcbiAgICAvLyBDYW4gdXBkYXRlIGFuIGV4aXN0aW5nIGVudGl0eSB0b28gaWYgcG9zdDQwOSBpcyBmYWxzZS5cbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUucG9zdCA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgY29sbGVjdGlvbiA9IF9hLmNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lID0gX2EuY29sbGVjdGlvbk5hbWUsIGhlYWRlcnMgPSBfYS5oZWFkZXJzLCBpZCA9IF9hLmlkLCByZXEgPSBfYS5yZXEsIHJlc291cmNlVXJsID0gX2EucmVzb3VyY2VVcmwsIHVybCA9IF9hLnVybDtcbiAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmNsb25lKHRoaXMuZ2V0SnNvbkJvZHkocmVxKSk7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzXG4gICAgICAgIGlmIChpdGVtLmlkID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpdGVtLmlkID0gaWQgfHwgdGhpcy5nZW5JZChjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVtc2cgPSBlcnIubWVzc2FnZSB8fCAnJztcbiAgICAgICAgICAgICAgICBpZiAoL2lkIHR5cGUgaXMgbm9uLW51bWVyaWMvLnRlc3QoZW1zZykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnModXJsLCBTVEFUVVMuVU5QUk9DRVNTQUJMRV9FTlRSWSwgZW1zZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHVybCwgU1RBVFVTLklOVEVSTkFMX1NFUlZFUl9FUlJPUiwgXCJGYWlsZWQgdG8gZ2VuZXJhdGUgbmV3IGlkIGZvciAnXCIgKyBjb2xsZWN0aW9uTmFtZSArIFwiJ1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlkICYmIGlkICE9PSBpdGVtLmlkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5CQURfUkVRVUVTVCwgXCJSZXF1ZXN0IGlkIGRvZXMgbm90IG1hdGNoIGl0ZW0uaWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZCA9IGl0ZW0uaWQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGV4aXN0aW5nSXggPSB0aGlzLmluZGV4T2YoY29sbGVjdGlvbiwgaWQpO1xuICAgICAgICB2YXIgYm9keSA9IHRoaXMuYm9kaWZ5KGl0ZW0pO1xuICAgICAgICBpZiAoZXhpc3RpbmdJeCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb24ucHVzaChpdGVtKTtcbiAgICAgICAgICAgIGhlYWRlcnMuc2V0KCdMb2NhdGlvbicsIHJlc291cmNlVXJsICsgJy8nICsgaWQpO1xuICAgICAgICAgICAgcmV0dXJuIHsgaGVhZGVyczogaGVhZGVycywgYm9keTogYm9keSwgc3RhdHVzOiBTVEFUVVMuQ1JFQVRFRCB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY29uZmlnLnBvc3Q0MDkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHVybCwgU1RBVFVTLkNPTkZMSUNULCBcIidcIiArIGNvbGxlY3Rpb25OYW1lICsgXCInIGl0ZW0gd2l0aCBpZD0nXCIgKyBpZCArIFwiIGV4aXN0cyBhbmQgbWF5IG5vdCBiZSB1cGRhdGVkIHdpdGggUE9TVDsgdXNlIFBVVCBpbnN0ZWFkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb25bZXhpc3RpbmdJeF0gPSBpdGVtO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLnBvc3QyMDQgP1xuICAgICAgICAgICAgICAgIHsgaGVhZGVyczogaGVhZGVycywgc3RhdHVzOiBTVEFUVVMuTk9fQ09OVEVOVCB9IDogLy8gc3VjY2Vzc2Z1bDsgbm8gY29udGVudFxuICAgICAgICAgICAgICAgIHsgaGVhZGVyczogaGVhZGVycywgYm9keTogYm9keSwgc3RhdHVzOiBTVEFUVVMuT0sgfTsgLy8gc3VjY2Vzc2Z1bDsgcmV0dXJuIGVudGl0eVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBVcGRhdGUgZXhpc3RpbmcgZW50aXR5XG4gICAgLy8gQ2FuIGNyZWF0ZSBhbiBlbnRpdHkgdG9vIGlmIHB1dDQwNCBpcyBmYWxzZS5cbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUucHV0ID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBjb2xsZWN0aW9uID0gX2EuY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUgPSBfYS5jb2xsZWN0aW9uTmFtZSwgaGVhZGVycyA9IF9hLmhlYWRlcnMsIGlkID0gX2EuaWQsIHJlcSA9IF9hLnJlcSwgdXJsID0gX2EudXJsO1xuICAgICAgICB2YXIgaXRlbSA9IHRoaXMuY2xvbmUodGhpcy5nZXRKc29uQm9keShyZXEpKTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcbiAgICAgICAgaWYgKGl0ZW0uaWQgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5OT1RfRk9VTkQsIFwiTWlzc2luZyAnXCIgKyBjb2xsZWN0aW9uTmFtZSArIFwiJyBpZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaWQgJiYgaWQgIT09IGl0ZW0uaWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHVybCwgU1RBVFVTLkJBRF9SRVFVRVNULCBcIlJlcXVlc3QgZm9yICdcIiArIGNvbGxlY3Rpb25OYW1lICsgXCInIGlkIGRvZXMgbm90IG1hdGNoIGl0ZW0uaWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZCA9IGl0ZW0uaWQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGV4aXN0aW5nSXggPSB0aGlzLmluZGV4T2YoY29sbGVjdGlvbiwgaWQpO1xuICAgICAgICB2YXIgYm9keSA9IHRoaXMuYm9kaWZ5KGl0ZW0pO1xuICAgICAgICBpZiAoZXhpc3RpbmdJeCA+IC0xKSB7XG4gICAgICAgICAgICBjb2xsZWN0aW9uW2V4aXN0aW5nSXhdID0gaXRlbTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5wdXQyMDQgP1xuICAgICAgICAgICAgICAgIHsgaGVhZGVyczogaGVhZGVycywgc3RhdHVzOiBTVEFUVVMuTk9fQ09OVEVOVCB9IDogLy8gc3VjY2Vzc2Z1bDsgbm8gY29udGVudFxuICAgICAgICAgICAgICAgIHsgaGVhZGVyczogaGVhZGVycywgYm9keTogYm9keSwgc3RhdHVzOiBTVEFUVVMuT0sgfTsgLy8gc3VjY2Vzc2Z1bDsgcmV0dXJuIGVudGl0eVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY29uZmlnLnB1dDQwNCkge1xuICAgICAgICAgICAgLy8gaXRlbSB0byB1cGRhdGUgbm90IGZvdW5kOyB1c2UgUE9TVCB0byBjcmVhdGUgbmV3IGl0ZW0gZm9yIHRoaXMgaWQuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5OT1RfRk9VTkQsIFwiJ1wiICsgY29sbGVjdGlvbk5hbWUgKyBcIicgaXRlbSB3aXRoIGlkPSdcIiArIGlkICsgXCIgbm90IGZvdW5kIGFuZCBtYXkgbm90IGJlIGNyZWF0ZWQgd2l0aCBQVVQ7IHVzZSBQT1NUIGluc3RlYWQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gY3JlYXRlIG5ldyBpdGVtIGZvciBpZCBub3QgZm91bmRcbiAgICAgICAgICAgIGNvbGxlY3Rpb24ucHVzaChpdGVtKTtcbiAgICAgICAgICAgIHJldHVybiB7IGhlYWRlcnM6IGhlYWRlcnMsIGJvZHk6IGJvZHksIHN0YXR1czogU1RBVFVTLkNSRUFURUQgfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLnJlbW92ZUJ5SWQgPSBmdW5jdGlvbiAoY29sbGVjdGlvbiwgaWQpIHtcbiAgICAgICAgdmFyIGl4ID0gdGhpcy5pbmRleE9mKGNvbGxlY3Rpb24sIGlkKTtcbiAgICAgICAgaWYgKGl4ID4gLTEpIHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb24uc3BsaWNlKGl4LCAxKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRlbGwgeW91ciBpbi1tZW0gXCJkYXRhYmFzZVwiIHRvIHJlc2V0LlxuICAgICAqIHJldHVybnMgT2JzZXJ2YWJsZSBvZiB0aGUgZGF0YWJhc2UgYmVjYXVzZSByZXNldHRpbmcgaXQgY291bGQgYmUgYXN5bmNcbiAgICAgKi9cbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUucmVzZXREYiA9IGZ1bmN0aW9uIChyZXFJbmZvKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuZGJSZWFkeVN1YmplY3QubmV4dChmYWxzZSk7XG4gICAgICAgIHZhciBkYiA9IHRoaXMuaW5NZW1EYlNlcnZpY2UuY3JlYXRlRGIocmVxSW5mbyk7XG4gICAgICAgIHZhciBkYiQgPSBkYiBpbnN0YW5jZW9mIE9ic2VydmFibGUgPyBkYiA6XG4gICAgICAgICAgICB0eXBlb2YgZGIudGhlbiA9PT0gJ2Z1bmN0aW9uJyA/IGZyb20oZGIpIDpcbiAgICAgICAgICAgICAgICBvZihkYik7XG4gICAgICAgIGRiJC5waXBlKGZpcnN0KCkpLnN1YnNjcmliZShmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgX3RoaXMuZGIgPSBkO1xuICAgICAgICAgICAgX3RoaXMuZGJSZWFkeVN1YmplY3QubmV4dCh0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmRiUmVhZHk7XG4gICAgfTtcbiAgICByZXR1cm4gQmFja2VuZFNlcnZpY2U7XG59KCkpO1xuZXhwb3J0IHsgQmFja2VuZFNlcnZpY2UgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJhY2tlbmQuc2VydmljZS5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbnZhciBfX3BhcmFtID0gKHRoaXMgJiYgdGhpcy5fX3BhcmFtKSB8fCBmdW5jdGlvbiAocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XG59O1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJYaHIsIEhlYWRlcnMsIFJlYWR5U3RhdGUsIFJlcXVlc3RNZXRob2QsIFJlc3BvbnNlLCBSZXNwb25zZU9wdGlvbnMgYXMgSHR0cFJlc3BvbnNlT3B0aW9ucywgVVJMU2VhcmNoUGFyYW1zLCBYSFJCYWNrZW5kLCBYU1JGU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNUQVRVUyB9IGZyb20gJy4vaHR0cC1zdGF0dXMtY29kZXMnO1xuaW1wb3J0IHsgSW5NZW1vcnlCYWNrZW5kQ29uZmlnLCBJbk1lbW9yeUJhY2tlbmRDb25maWdBcmdzLCBJbk1lbW9yeURiU2VydmljZSB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gJy4vYmFja2VuZC5zZXJ2aWNlJztcbi8qKlxuICogRm9yIEFuZ3VsYXIgYEh0dHBgIHNpbXVsYXRlIHRoZSBiZWhhdmlvciBvZiBhIFJFU1R5IHdlYiBhcGlcbiAqIGJhY2tlZCBieSB0aGUgc2ltcGxlIGluLW1lbW9yeSBkYXRhIHN0b3JlIHByb3ZpZGVkIGJ5IHRoZSBpbmplY3RlZCBgSW5NZW1vcnlEYlNlcnZpY2VgLlxuICogQ29uZm9ybXMgbW9zdGx5IHRvIGJlaGF2aW9yIGRlc2NyaWJlZCBoZXJlOlxuICogaHR0cDovL3d3dy5yZXN0YXBpdHV0b3JpYWwuY29tL2xlc3NvbnMvaHR0cG1ldGhvZHMuaHRtbFxuICpcbiAqICMjIyBVc2FnZVxuICpcbiAqIENyZWF0ZSBhbiBpbi1tZW1vcnkgZGF0YSBzdG9yZSBjbGFzcyB0aGF0IGltcGxlbWVudHMgYEluTWVtb3J5RGJTZXJ2aWNlYC5cbiAqIENhbGwgYGZvclJvb3RgIHN0YXRpYyBtZXRob2Qgd2l0aCB0aGlzIHNlcnZpY2UgY2xhc3MgYW5kIG9wdGlvbmFsIGNvbmZpZ3VyYXRpb24gb2JqZWN0OlxuICogYGBgXG4gKiAvLyBvdGhlciBpbXBvcnRzXG4gKiBpbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG4gKiBpbXBvcnQgeyBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUgfSBmcm9tICdhbmd1bGFyLWluLW1lbW9yeS13ZWItYXBpJztcbiAqXG4gKiBpbXBvcnQgeyBJbk1lbUhlcm9TZXJ2aWNlLCBpbk1lbUNvbmZpZyB9IGZyb20gJy4uL2FwaS9pbi1tZW1vcnktaGVyby5zZXJ2aWNlJztcbiAqIEBOZ01vZHVsZSh7XG4gKiAgaW1wb3J0czogW1xuICogICAgSHR0cE1vZHVsZSxcbiAqICAgIEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290KEluTWVtSGVyb1NlcnZpY2UsIGluTWVtQ29uZmlnKSxcbiAqICAgIC4uLlxuICogIF0sXG4gKiAgLi4uXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IC4uLiB9XG4gKiBgYGBcbiAqL1xudmFyIEh0dHBCYWNrZW5kU2VydmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSHR0cEJhY2tlbmRTZXJ2aWNlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEh0dHBCYWNrZW5kU2VydmljZShpbmplY3RvciwgaW5NZW1EYlNlcnZpY2UsIGNvbmZpZykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBpbk1lbURiU2VydmljZSwgY29uZmlnKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5pbmplY3RvciA9IGluamVjdG9yO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEh0dHBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuY3JlYXRlQ29ubmVjdGlvbiA9IGZ1bmN0aW9uIChyZXEpIHtcbiAgICAgICAgdmFyIHJlc3BvbnNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSB0aGlzLmhhbmRsZVJlcXVlc3QocmVxKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBlcnJvci5tZXNzYWdlIHx8IGVycm9yO1xuICAgICAgICAgICAgdmFyIHJlc09wdGlvbnNfMSA9IHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnMocmVxLnVybCwgU1RBVFVTLklOVEVSTkFMX1NFUlZFUl9FUlJPUiwgXCJcIiArIGVycik7XG4gICAgICAgICAgICByZXNwb25zZSA9IHRoaXMuY3JlYXRlUmVzcG9uc2UkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc09wdGlvbnNfMTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlYWR5U3RhdGU6IFJlYWR5U3RhdGUuRG9uZSxcbiAgICAgICAgICAgIHJlcXVlc3Q6IHJlcSxcbiAgICAgICAgICAgIHJlc3BvbnNlOiByZXNwb25zZVxuICAgICAgICB9O1xuICAgIH07XG4gICAgLy8vLyAgcHJvdGVjdGVkIG92ZXJyaWRlcyAvLy8vL1xuICAgIEh0dHBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuZ2V0SnNvbkJvZHkgPSBmdW5jdGlvbiAocmVxKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcmVxLmpzb24oKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdmFyIG1zZyA9IFwiJ1wiICsgcmVxLnVybCArIFwiJyByZXF1ZXN0IGJvZHktdG8tanNvbiBlcnJvclxcblwiICsgSlNPTi5zdHJpbmdpZnkoZSk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSHR0cEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5nZXRSZXF1ZXN0TWV0aG9kID0gZnVuY3Rpb24gKHJlcSkge1xuICAgICAgICByZXR1cm4gUmVxdWVzdE1ldGhvZFtyZXEubWV0aG9kIHx8IDBdLnRvTG93ZXJDYXNlKCk7XG4gICAgfTtcbiAgICBIdHRwQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmNyZWF0ZUhlYWRlcnMgPSBmdW5jdGlvbiAoaGVhZGVycykge1xuICAgICAgICByZXR1cm4gbmV3IEhlYWRlcnMoaGVhZGVycyk7XG4gICAgfTtcbiAgICBIdHRwQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmNyZWF0ZVF1ZXJ5TWFwID0gZnVuY3Rpb24gKHNlYXJjaCkge1xuICAgICAgICByZXR1cm4gc2VhcmNoID8gbmV3IFVSTFNlYXJjaFBhcmFtcyhzZWFyY2gpLnBhcmFtc01hcCA6IG5ldyBNYXAoKTtcbiAgICB9O1xuICAgIEh0dHBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuY3JlYXRlUmVzcG9uc2UkZnJvbVJlc3BvbnNlT3B0aW9ucyQgPSBmdW5jdGlvbiAocmVzT3B0aW9ucyQpIHtcbiAgICAgICAgcmV0dXJuIHJlc09wdGlvbnMkLnBpcGUobWFwKGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKG5ldyBIdHRwUmVzcG9uc2VPcHRpb25zKG9wdHMpKTtcbiAgICAgICAgfSkpO1xuICAgIH07XG4gICAgSHR0cEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5jcmVhdGVQYXNzVGhydUJhY2tlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBjb3BpZWQgZnJvbSBAYW5ndWxhci9odHRwL2JhY2tlbmRzL3hocl9iYWNrZW5kXG4gICAgICAgICAgICB2YXIgYnJvd3NlclhociA9IHRoaXMuaW5qZWN0b3IuZ2V0KEJyb3dzZXJYaHIpO1xuICAgICAgICAgICAgdmFyIGJhc2VSZXNwb25zZU9wdGlvbnMgPSB0aGlzLmluamVjdG9yLmdldChIdHRwUmVzcG9uc2VPcHRpb25zKTtcbiAgICAgICAgICAgIHZhciB4c3JmU3RyYXRlZ3kgPSB0aGlzLmluamVjdG9yLmdldChYU1JGU3RyYXRlZ3kpO1xuICAgICAgICAgICAgdmFyIHhockJhY2tlbmRfMSA9IG5ldyBYSFJCYWNrZW5kKGJyb3dzZXJYaHIsIGJhc2VSZXNwb25zZU9wdGlvbnMsIHhzcmZTdHJhdGVneSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZTogZnVuY3Rpb24gKHJlcSkgeyByZXR1cm4geGhyQmFja2VuZF8xLmNyZWF0ZUNvbm5lY3Rpb24ocmVxKS5yZXNwb25zZTsgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZS5tZXNzYWdlID0gJ0Nhbm5vdCBjcmVhdGUgcGFzc1RocnU0MDQgYmFja2VuZDsgJyArIChlLm1lc3NhZ2UgfHwgJycpO1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSHR0cEJhY2tlbmRTZXJ2aWNlID0gX19kZWNvcmF0ZShbXG4gICAgICAgIEluamVjdGFibGUoKSxcbiAgICAgICAgX19wYXJhbSgyLCBJbmplY3QoSW5NZW1vcnlCYWNrZW5kQ29uZmlnKSksIF9fcGFyYW0oMiwgT3B0aW9uYWwoKSksXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbSW5qZWN0b3IsXG4gICAgICAgICAgICBJbk1lbW9yeURiU2VydmljZSxcbiAgICAgICAgICAgIEluTWVtb3J5QmFja2VuZENvbmZpZ0FyZ3NdKVxuICAgIF0sIEh0dHBCYWNrZW5kU2VydmljZSk7XG4gICAgcmV0dXJuIEh0dHBCYWNrZW5kU2VydmljZTtcbn0oQmFja2VuZFNlcnZpY2UpKTtcbmV4cG9ydCB7IEh0dHBCYWNrZW5kU2VydmljZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHR0cC1iYWNrZW5kLnNlcnZpY2UuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG52YXIgX19wYXJhbSA9ICh0aGlzICYmIHRoaXMuX19wYXJhbSkgfHwgZnVuY3Rpb24gKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxufTtcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zLCBIdHRwUmVzcG9uc2UsIEh0dHBYaHJCYWNrZW5kLCBYaHJGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU1RBVFVTIH0gZnJvbSAnLi9odHRwLXN0YXR1cy1jb2Rlcyc7XG5pbXBvcnQgeyBJbk1lbW9yeUJhY2tlbmRDb25maWcsIEluTWVtb3J5QmFja2VuZENvbmZpZ0FyZ3MsIEluTWVtb3J5RGJTZXJ2aWNlIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSAnLi9iYWNrZW5kLnNlcnZpY2UnO1xuLyoqXG4gKiBGb3IgQW5ndWxhciBgSHR0cENsaWVudGAgc2ltdWxhdGUgdGhlIGJlaGF2aW9yIG9mIGEgUkVTVHkgd2ViIGFwaVxuICogYmFja2VkIGJ5IHRoZSBzaW1wbGUgaW4tbWVtb3J5IGRhdGEgc3RvcmUgcHJvdmlkZWQgYnkgdGhlIGluamVjdGVkIGBJbk1lbW9yeURiU2VydmljZWAuXG4gKiBDb25mb3JtcyBtb3N0bHkgdG8gYmVoYXZpb3IgZGVzY3JpYmVkIGhlcmU6XG4gKiBodHRwOi8vd3d3LnJlc3RhcGl0dXRvcmlhbC5jb20vbGVzc29ucy9odHRwbWV0aG9kcy5odG1sXG4gKlxuICogIyMjIFVzYWdlXG4gKlxuICogQ3JlYXRlIGFuIGluLW1lbW9yeSBkYXRhIHN0b3JlIGNsYXNzIHRoYXQgaW1wbGVtZW50cyBgSW5NZW1vcnlEYlNlcnZpY2VgLlxuICogQ2FsbCBgY29uZmlnYCBzdGF0aWMgbWV0aG9kIHdpdGggdGhpcyBzZXJ2aWNlIGNsYXNzIGFuZCBvcHRpb25hbCBjb25maWd1cmF0aW9uIG9iamVjdDpcbiAqIGBgYFxuICogLy8gb3RoZXIgaW1wb3J0c1xuICogaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbiAqIGltcG9ydCB7IEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZSB9IGZyb20gJ2FuZ3VsYXItaW4tbWVtb3J5LXdlYi1hcGknO1xuICpcbiAqIGltcG9ydCB7IEluTWVtSGVyb1NlcnZpY2UsIGluTWVtQ29uZmlnIH0gZnJvbSAnLi4vYXBpL2luLW1lbW9yeS1oZXJvLnNlcnZpY2UnO1xuICogQE5nTW9kdWxlKHtcbiAqICBpbXBvcnRzOiBbXG4gKiAgICBIdHRwTW9kdWxlLFxuICogICAgSHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlLmZvclJvb3QoSW5NZW1IZXJvU2VydmljZSwgaW5NZW1Db25maWcpLFxuICogICAgLi4uXG4gKiAgXSxcbiAqICAuLi5cbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgLi4uIH1cbiAqIGBgYFxuICovXG52YXIgSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlKGluTWVtRGJTZXJ2aWNlLCBjb25maWcsIHhockZhY3RvcnkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgaW5NZW1EYlNlcnZpY2UsIGNvbmZpZykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMueGhyRmFjdG9yeSA9IHhockZhY3Rvcnk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5oYW5kbGUgPSBmdW5jdGlvbiAocmVxKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSZXF1ZXN0KHJlcSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gZXJyb3IubWVzc2FnZSB8fCBlcnJvcjtcbiAgICAgICAgICAgIHZhciByZXNPcHRpb25zXzEgPSB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHJlcS51cmwsIFNUQVRVUy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsIFwiXCIgKyBlcnIpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUmVzcG9uc2UkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc09wdGlvbnNfMTsgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vLy8gIHByb3RlY3RlZCBvdmVycmlkZXMgLy8vLy9cbiAgICBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmdldEpzb25Cb2R5ID0gZnVuY3Rpb24gKHJlcSkge1xuICAgICAgICByZXR1cm4gcmVxLmJvZHk7XG4gICAgfTtcbiAgICBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmdldFJlcXVlc3RNZXRob2QgPSBmdW5jdGlvbiAocmVxKSB7XG4gICAgICAgIHJldHVybiAocmVxLm1ldGhvZCB8fCAnZ2V0JykudG9Mb3dlckNhc2UoKTtcbiAgICB9O1xuICAgIEh0dHBDbGllbnRCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuY3JlYXRlSGVhZGVycyA9IGZ1bmN0aW9uIChoZWFkZXJzKSB7XG4gICAgICAgIHJldHVybiBuZXcgSHR0cEhlYWRlcnMoaGVhZGVycyk7XG4gICAgfTtcbiAgICBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmNyZWF0ZVF1ZXJ5TWFwID0gZnVuY3Rpb24gKHNlYXJjaCkge1xuICAgICAgICB2YXIgbWFwID0gbmV3IE1hcCgpO1xuICAgICAgICBpZiAoc2VhcmNoKSB7XG4gICAgICAgICAgICB2YXIgcGFyYW1zXzEgPSBuZXcgSHR0cFBhcmFtcyh7IGZyb21TdHJpbmc6IHNlYXJjaCB9KTtcbiAgICAgICAgICAgIHBhcmFtc18xLmtleXMoKS5mb3JFYWNoKGZ1bmN0aW9uIChwKSB7IHJldHVybiBtYXAuc2V0KHAsIHBhcmFtc18xLmdldEFsbChwKSk7IH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXA7XG4gICAgfTtcbiAgICBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmNyZWF0ZVJlc3BvbnNlJGZyb21SZXNwb25zZU9wdGlvbnMkID0gZnVuY3Rpb24gKHJlc09wdGlvbnMkKSB7XG4gICAgICAgIHJldHVybiByZXNPcHRpb25zJC5waXBlKG1hcChmdW5jdGlvbiAob3B0cykgeyByZXR1cm4gbmV3IEh0dHBSZXNwb25zZShvcHRzKTsgfSkpO1xuICAgIH07XG4gICAgSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5jcmVhdGVQYXNzVGhydUJhY2tlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEh0dHBYaHJCYWNrZW5kKHRoaXMueGhyRmFjdG9yeSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICBleC5tZXNzYWdlID0gJ0Nhbm5vdCBjcmVhdGUgcGFzc1RocnU0MDQgYmFja2VuZDsgJyArIChleC5tZXNzYWdlIHx8ICcnKTtcbiAgICAgICAgICAgIHRocm93IGV4O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UgPSBfX2RlY29yYXRlKFtcbiAgICAgICAgSW5qZWN0YWJsZSgpLFxuICAgICAgICBfX3BhcmFtKDEsIEluamVjdChJbk1lbW9yeUJhY2tlbmRDb25maWcpKSwgX19wYXJhbSgxLCBPcHRpb25hbCgpKSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtJbk1lbW9yeURiU2VydmljZSxcbiAgICAgICAgICAgIEluTWVtb3J5QmFja2VuZENvbmZpZ0FyZ3MsXG4gICAgICAgICAgICBYaHJGYWN0b3J5XSlcbiAgICBdLCBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UpO1xuICAgIHJldHVybiBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2U7XG59KEJhY2tlbmRTZXJ2aWNlKSk7XG5leHBvcnQgeyBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0dHAtY2xpZW50LWJhY2tlbmQuc2VydmljZS5qcy5tYXAiLCIvLy8vLy8gSHR0cC1Pbmx5IHZlcnNpb24gLy8vL1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IHsgSW5qZWN0b3IsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBYSFJCYWNrZW5kIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBJbk1lbW9yeUJhY2tlbmRDb25maWcsIEluTWVtb3J5RGJTZXJ2aWNlIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEh0dHBCYWNrZW5kU2VydmljZSB9IGZyb20gJy4vaHR0cC1iYWNrZW5kLnNlcnZpY2UnO1xuLy8gSW50ZXJuYWwgLSBDcmVhdGVzIHRoZSBpbi1tZW0gYmFja2VuZCBmb3IgdGhlIEh0dHAgbW9kdWxlXG4vLyBBb1QgcmVxdWlyZXMgZmFjdG9yeSB0byBiZSBleHBvcnRlZFxuZXhwb3J0IGZ1bmN0aW9uIGh0dHBJbk1lbUJhY2tlbmRTZXJ2aWNlRmFjdG9yeShpbmplY3RvciwgZGJTZXJ2aWNlLCBvcHRpb25zKSB7XG4gICAgdmFyIGJhY2tlbmQgPSBuZXcgSHR0cEJhY2tlbmRTZXJ2aWNlKGluamVjdG9yLCBkYlNlcnZpY2UsIG9wdGlvbnMpO1xuICAgIHJldHVybiBiYWNrZW5kO1xufVxudmFyIEh0dHBJbk1lbW9yeVdlYkFwaU1vZHVsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBIdHRwSW5NZW1vcnlXZWJBcGlNb2R1bGUoKSB7XG4gICAgfVxuICAgIEh0dHBJbk1lbW9yeVdlYkFwaU1vZHVsZV8xID0gSHR0cEluTWVtb3J5V2ViQXBpTW9kdWxlO1xuICAgIC8qKlxuICAgICogIFJlZGlyZWN0IHRoZSBBbmd1bGFyIGBIdHRwYCBYSFIgY2FsbHNcbiAgICAqICB0byBpbi1tZW1vcnkgZGF0YSBzdG9yZSB0aGF0IGltcGxlbWVudHMgYEluTWVtb3J5RGJTZXJ2aWNlYC5cbiAgICAqICB3aXRoIGNsYXNzIHRoYXQgaW1wbGVtZW50cyBJbk1lbW9yeURiU2VydmljZSBhbmQgY3JlYXRlcyBhbiBpbi1tZW1vcnkgZGF0YWJhc2UuXG4gICAgKlxuICAgICogIFVzdWFsbHkgaW1wb3J0ZWQgaW4gdGhlIHJvb3QgYXBwbGljYXRpb24gbW9kdWxlLlxuICAgICogIENhbiBpbXBvcnQgaW4gYSBsYXp5IGZlYXR1cmUgbW9kdWxlIHRvbywgd2hpY2ggd2lsbCBzaGFkb3cgbW9kdWxlcyBsb2FkZWQgZWFybGllclxuICAgICpcbiAgICAqIEBwYXJhbSB7VHlwZX0gZGJDcmVhdG9yIC0gQ2xhc3MgdGhhdCBjcmVhdGVzIHNlZWQgZGF0YSBmb3IgaW4tbWVtb3J5IGRhdGFiYXNlLiBNdXN0IGltcGxlbWVudCBJbk1lbW9yeURiU2VydmljZS5cbiAgICAqIEBwYXJhbSB7SW5NZW1vcnlCYWNrZW5kQ29uZmlnQXJnc30gW29wdGlvbnNdXG4gICAgKlxuICAgICogQGV4YW1wbGVcbiAgICAqIEh0dHBJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290KGRiQ3JlYXRvcik7XG4gICAgKiBIdHRwSW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yUm9vdChkYkNyZWF0b3IsIHt1c2VWYWx1ZToge2RlbGF5OjYwMH19KTtcbiAgICAqL1xuICAgIEh0dHBJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290ID0gZnVuY3Rpb24gKGRiQ3JlYXRvciwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IEh0dHBJbk1lbW9yeVdlYkFwaU1vZHVsZV8xLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBJbk1lbW9yeURiU2VydmljZSwgdXNlQ2xhc3M6IGRiQ3JlYXRvciB9LFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogSW5NZW1vcnlCYWNrZW5kQ29uZmlnLCB1c2VWYWx1ZTogb3B0aW9ucyB9LFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogWEhSQmFja2VuZCxcbiAgICAgICAgICAgICAgICAgICAgdXNlRmFjdG9yeTogaHR0cEluTWVtQmFja2VuZFNlcnZpY2VGYWN0b3J5LFxuICAgICAgICAgICAgICAgICAgICBkZXBzOiBbSW5qZWN0b3IsIEluTWVtb3J5RGJTZXJ2aWNlLCBJbk1lbW9yeUJhY2tlbmRDb25maWddIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgKlxuICAgKiBFbmFibGUgYW5kIGNvbmZpZ3VyZSB0aGUgaW4tbWVtb3J5IHdlYiBhcGkgaW4gYSBsYXp5LWxvYWRlZCBmZWF0dXJlIG1vZHVsZS5cbiAgICogU2FtZSBhcyBgZm9yUm9vdGAuXG4gICAqIFRoaXMgaXMgYSBmZWVsLWdvb2QgbWV0aG9kIHNvIHlvdSBjYW4gZm9sbG93IHRoZSBBbmd1bGFyIHN0eWxlIGd1aWRlIGZvciBsYXp5LWxvYWRlZCBtb2R1bGVzLlxuICAgKi9cbiAgICBIdHRwSW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yRmVhdHVyZSA9IGZ1bmN0aW9uIChkYkNyZWF0b3IsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIEh0dHBJbk1lbW9yeVdlYkFwaU1vZHVsZV8xLmZvclJvb3QoZGJDcmVhdG9yLCBvcHRpb25zKTtcbiAgICB9O1xuICAgIHZhciBIdHRwSW5NZW1vcnlXZWJBcGlNb2R1bGVfMTtcbiAgICBIdHRwSW5NZW1vcnlXZWJBcGlNb2R1bGUgPSBIdHRwSW5NZW1vcnlXZWJBcGlNb2R1bGVfMSA9IF9fZGVjb3JhdGUoW1xuICAgICAgICBOZ01vZHVsZSh7fSlcbiAgICBdLCBIdHRwSW5NZW1vcnlXZWJBcGlNb2R1bGUpO1xuICAgIHJldHVybiBIdHRwSW5NZW1vcnlXZWJBcGlNb2R1bGU7XG59KCkpO1xuZXhwb3J0IHsgSHR0cEluTWVtb3J5V2ViQXBpTW9kdWxlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1odHRwLWluLW1lbW9yeS13ZWItYXBpLm1vZHVsZS5qcy5tYXAiLCIvLy8vLy8gSHR0cENsaWVudC1Pbmx5IHZlcnNpb24gLy8vL1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBCYWNrZW5kLCBYaHJGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5NZW1vcnlCYWNrZW5kQ29uZmlnLCBJbk1lbW9yeURiU2VydmljZSB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UgfSBmcm9tICcuL2h0dHAtY2xpZW50LWJhY2tlbmQuc2VydmljZSc7XG4vLyBJbnRlcm5hbCAtIENyZWF0ZXMgdGhlIGluLW1lbSBiYWNrZW5kIGZvciB0aGUgSHR0cENsaWVudCBtb2R1bGVcbi8vIEFvVCByZXF1aXJlcyBmYWN0b3J5IHRvIGJlIGV4cG9ydGVkXG5leHBvcnQgZnVuY3Rpb24gaHR0cENsaWVudEluTWVtQmFja2VuZFNlcnZpY2VGYWN0b3J5KGRiU2VydmljZSwgb3B0aW9ucywgeGhyRmFjdG9yeSkge1xuICAgIHZhciBiYWNrZW5kID0gbmV3IEh0dHBDbGllbnRCYWNrZW5kU2VydmljZShkYlNlcnZpY2UsIG9wdGlvbnMsIHhockZhY3RvcnkpO1xuICAgIHJldHVybiBiYWNrZW5kO1xufVxudmFyIEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUoKSB7XG4gICAgfVxuICAgIEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZV8xID0gSHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlO1xuICAgIC8qKlxuICAgICogIFJlZGlyZWN0IHRoZSBBbmd1bGFyIGBIdHRwQ2xpZW50YCBYSFIgY2FsbHNcbiAgICAqICB0byBpbi1tZW1vcnkgZGF0YSBzdG9yZSB0aGF0IGltcGxlbWVudHMgYEluTWVtb3J5RGJTZXJ2aWNlYC5cbiAgICAqICB3aXRoIGNsYXNzIHRoYXQgaW1wbGVtZW50cyBJbk1lbW9yeURiU2VydmljZSBhbmQgY3JlYXRlcyBhbiBpbi1tZW1vcnkgZGF0YWJhc2UuXG4gICAgKlxuICAgICogIFVzdWFsbHkgaW1wb3J0ZWQgaW4gdGhlIHJvb3QgYXBwbGljYXRpb24gbW9kdWxlLlxuICAgICogIENhbiBpbXBvcnQgaW4gYSBsYXp5IGZlYXR1cmUgbW9kdWxlIHRvbywgd2hpY2ggd2lsbCBzaGFkb3cgbW9kdWxlcyBsb2FkZWQgZWFybGllclxuICAgICpcbiAgICAqIEBwYXJhbSB7VHlwZX0gZGJDcmVhdG9yIC0gQ2xhc3MgdGhhdCBjcmVhdGVzIHNlZWQgZGF0YSBmb3IgaW4tbWVtb3J5IGRhdGFiYXNlLiBNdXN0IGltcGxlbWVudCBJbk1lbW9yeURiU2VydmljZS5cbiAgICAqIEBwYXJhbSB7SW5NZW1vcnlCYWNrZW5kQ29uZmlnQXJnc30gW29wdGlvbnNdXG4gICAgKlxuICAgICogQGV4YW1wbGVcbiAgICAqIEh0dHBJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290KGRiQ3JlYXRvcik7XG4gICAgKiBIdHRwSW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yUm9vdChkYkNyZWF0b3IsIHt1c2VWYWx1ZToge2RlbGF5OjYwMH19KTtcbiAgICAqL1xuICAgIEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290ID0gZnVuY3Rpb24gKGRiQ3JlYXRvciwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZV8xLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBJbk1lbW9yeURiU2VydmljZSwgdXNlQ2xhc3M6IGRiQ3JlYXRvciB9LFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogSW5NZW1vcnlCYWNrZW5kQ29uZmlnLCB1c2VWYWx1ZTogb3B0aW9ucyB9LFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogSHR0cEJhY2tlbmQsXG4gICAgICAgICAgICAgICAgICAgIHVzZUZhY3Rvcnk6IGh0dHBDbGllbnRJbk1lbUJhY2tlbmRTZXJ2aWNlRmFjdG9yeSxcbiAgICAgICAgICAgICAgICAgICAgZGVwczogW0luTWVtb3J5RGJTZXJ2aWNlLCBJbk1lbW9yeUJhY2tlbmRDb25maWcsIFhockZhY3RvcnldIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgKlxuICAgKiBFbmFibGUgYW5kIGNvbmZpZ3VyZSB0aGUgaW4tbWVtb3J5IHdlYiBhcGkgaW4gYSBsYXp5LWxvYWRlZCBmZWF0dXJlIG1vZHVsZS5cbiAgICogU2FtZSBhcyBgZm9yUm9vdGAuXG4gICAqIFRoaXMgaXMgYSBmZWVsLWdvb2QgbWV0aG9kIHNvIHlvdSBjYW4gZm9sbG93IHRoZSBBbmd1bGFyIHN0eWxlIGd1aWRlIGZvciBsYXp5LWxvYWRlZCBtb2R1bGVzLlxuICAgKi9cbiAgICBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yRmVhdHVyZSA9IGZ1bmN0aW9uIChkYkNyZWF0b3IsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZV8xLmZvclJvb3QoZGJDcmVhdG9yLCBvcHRpb25zKTtcbiAgICB9O1xuICAgIHZhciBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGVfMTtcbiAgICBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUgPSBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGVfMSA9IF9fZGVjb3JhdGUoW1xuICAgICAgICBOZ01vZHVsZSh7fSlcbiAgICBdLCBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUpO1xuICAgIHJldHVybiBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGU7XG59KCkpO1xuZXhwb3J0IHsgSHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1odHRwLWNsaWVudC1pbi1tZW1vcnktd2ViLWFwaS5tb2R1bGUuanMubWFwIiwiLy8vLy8vIEZvciBhcHBzIHdpdGggYm90aCBIdHRwIGFuZCBIdHRwQ2xpZW50IC8vLy9cbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCB7IEluamVjdG9yLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgWEhSQmFja2VuZCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgSHR0cEJhY2tlbmQsIFhockZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbk1lbW9yeUJhY2tlbmRDb25maWcsIEluTWVtb3J5RGJTZXJ2aWNlIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IGh0dHBJbk1lbUJhY2tlbmRTZXJ2aWNlRmFjdG9yeSB9IGZyb20gJy4vaHR0cC1pbi1tZW1vcnktd2ViLWFwaS5tb2R1bGUnO1xuaW1wb3J0IHsgaHR0cENsaWVudEluTWVtQmFja2VuZFNlcnZpY2VGYWN0b3J5IH0gZnJvbSAnLi9odHRwLWNsaWVudC1pbi1tZW1vcnktd2ViLWFwaS5tb2R1bGUnO1xudmFyIEluTWVtb3J5V2ViQXBpTW9kdWxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEluTWVtb3J5V2ViQXBpTW9kdWxlKCkge1xuICAgIH1cbiAgICBJbk1lbW9yeVdlYkFwaU1vZHVsZV8xID0gSW5NZW1vcnlXZWJBcGlNb2R1bGU7XG4gICAgLyoqXG4gICAgKiAgUmVkaXJlY3QgQk9USCBBbmd1bGFyIGBIdHRwYCBhbmQgYEh0dHBDbGllbnRgIFhIUiBjYWxsc1xuICAgICogIHRvIGluLW1lbW9yeSBkYXRhIHN0b3JlIHRoYXQgaW1wbGVtZW50cyBgSW5NZW1vcnlEYlNlcnZpY2VgLlxuICAgICogIHdpdGggY2xhc3MgdGhhdCBpbXBsZW1lbnRzIEluTWVtb3J5RGJTZXJ2aWNlIGFuZCBjcmVhdGVzIGFuIGluLW1lbW9yeSBkYXRhYmFzZS5cbiAgICAqXG4gICAgKiAgVXN1YWxseSBpbXBvcnRlZCBpbiB0aGUgcm9vdCBhcHBsaWNhdGlvbiBtb2R1bGUuXG4gICAgKiAgQ2FuIGltcG9ydCBpbiBhIGxhenkgZmVhdHVyZSBtb2R1bGUgdG9vLCB3aGljaCB3aWxsIHNoYWRvdyBtb2R1bGVzIGxvYWRlZCBlYXJsaWVyXG4gICAgKlxuICAgICogQHBhcmFtIHtUeXBlfSBkYkNyZWF0b3IgLSBDbGFzcyB0aGF0IGNyZWF0ZXMgc2VlZCBkYXRhIGZvciBpbi1tZW1vcnkgZGF0YWJhc2UuIE11c3QgaW1wbGVtZW50IEluTWVtb3J5RGJTZXJ2aWNlLlxuICAgICogQHBhcmFtIHtJbk1lbW9yeUJhY2tlbmRDb25maWdBcmdzfSBbb3B0aW9uc11cbiAgICAqXG4gICAgKiBAZXhhbXBsZVxuICAgICogSW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yUm9vdChkYkNyZWF0b3IpO1xuICAgICogSW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yUm9vdChkYkNyZWF0b3IsIHt1c2VWYWx1ZToge2RlbGF5OjYwMH19KTtcbiAgICAqL1xuICAgIEluTWVtb3J5V2ViQXBpTW9kdWxlLmZvclJvb3QgPSBmdW5jdGlvbiAoZGJDcmVhdG9yLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogSW5NZW1vcnlXZWJBcGlNb2R1bGVfMSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogSW5NZW1vcnlEYlNlcnZpY2UsIHVzZUNsYXNzOiBkYkNyZWF0b3IgfSxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IEluTWVtb3J5QmFja2VuZENvbmZpZywgdXNlVmFsdWU6IG9wdGlvbnMgfSxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IFhIUkJhY2tlbmQsXG4gICAgICAgICAgICAgICAgICAgIHVzZUZhY3Rvcnk6IGh0dHBJbk1lbUJhY2tlbmRTZXJ2aWNlRmFjdG9yeSxcbiAgICAgICAgICAgICAgICAgICAgZGVwczogW0luamVjdG9yLCBJbk1lbW9yeURiU2VydmljZSwgSW5NZW1vcnlCYWNrZW5kQ29uZmlnXSB9LFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogSHR0cEJhY2tlbmQsXG4gICAgICAgICAgICAgICAgICAgIHVzZUZhY3Rvcnk6IGh0dHBDbGllbnRJbk1lbUJhY2tlbmRTZXJ2aWNlRmFjdG9yeSxcbiAgICAgICAgICAgICAgICAgICAgZGVwczogW0luTWVtb3J5RGJTZXJ2aWNlLCBJbk1lbW9yeUJhY2tlbmRDb25maWcsIFhockZhY3RvcnldIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqXG4gICAgICogRW5hYmxlIGFuZCBjb25maWd1cmUgdGhlIGluLW1lbW9yeSB3ZWIgYXBpIGluIGEgbGF6eS1sb2FkZWQgZmVhdHVyZSBtb2R1bGUuXG4gICAgICogU2FtZSBhcyBgZm9yUm9vdGAuXG4gICAgICogVGhpcyBpcyBhIGZlZWwtZ29vZCBtZXRob2Qgc28geW91IGNhbiBmb2xsb3cgdGhlIEFuZ3VsYXIgc3R5bGUgZ3VpZGUgZm9yIGxhenktbG9hZGVkIG1vZHVsZXMuXG4gICAgICovXG4gICAgSW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yRmVhdHVyZSA9IGZ1bmN0aW9uIChkYkNyZWF0b3IsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIEluTWVtb3J5V2ViQXBpTW9kdWxlXzEuZm9yUm9vdChkYkNyZWF0b3IsIG9wdGlvbnMpO1xuICAgIH07XG4gICAgdmFyIEluTWVtb3J5V2ViQXBpTW9kdWxlXzE7XG4gICAgSW5NZW1vcnlXZWJBcGlNb2R1bGUgPSBJbk1lbW9yeVdlYkFwaU1vZHVsZV8xID0gX19kZWNvcmF0ZShbXG4gICAgICAgIE5nTW9kdWxlKHt9KVxuICAgIF0sIEluTWVtb3J5V2ViQXBpTW9kdWxlKTtcbiAgICByZXR1cm4gSW5NZW1vcnlXZWJBcGlNb2R1bGU7XG59KCkpO1xuZXhwb3J0IHsgSW5NZW1vcnlXZWJBcGlNb2R1bGUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluLW1lbW9yeS13ZWItYXBpLm1vZHVsZS5qcy5tYXAiXSwibmFtZXMiOlsiT2JzZXJ2YWJsZSIsInRoaXMiLCJJbmplY3RhYmxlIiwiQmVoYXZpb3JTdWJqZWN0IiwiZmlyc3QiLCJjb25jYXRNYXAiLCJmcm9tIiwib2YiLCJfX2RlY29yYXRlIiwiX19tZXRhZGF0YSIsIlJlYWR5U3RhdGUiLCJSZXF1ZXN0TWV0aG9kIiwiSGVhZGVycyIsIlVSTFNlYXJjaFBhcmFtcyIsIm1hcCIsIlJlc3BvbnNlIiwiSHR0cFJlc3BvbnNlT3B0aW9ucyIsIkJyb3dzZXJYaHIiLCJYU1JGU3RyYXRlZ3kiLCJYSFJCYWNrZW5kIiwiSW5qZWN0IiwiT3B0aW9uYWwiLCJJbmplY3RvciIsIl9fZXh0ZW5kcyIsIl9fcGFyYW0iLCJIdHRwSGVhZGVycyIsIkh0dHBQYXJhbXMiLCJIdHRwUmVzcG9uc2UiLCJIdHRwWGhyQmFja2VuZCIsIlhockZhY3RvcnkiLCJOZ01vZHVsZSIsIkh0dHBCYWNrZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxJQUFJLE1BQU0sR0FBRztJQUNoQixRQUFRLEVBQUUsR0FBRztJQUNiLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIsRUFBRSxFQUFFLEdBQUc7SUFDUCxPQUFPLEVBQUUsR0FBRztJQUNaLFFBQVEsRUFBRSxHQUFHO0lBQ2IsNkJBQTZCLEVBQUUsR0FBRztJQUNsQyxVQUFVLEVBQUUsR0FBRztJQUNmLGFBQWEsRUFBRSxHQUFHO0lBQ2xC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