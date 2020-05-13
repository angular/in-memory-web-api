(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('rxjs/operators'), require('@angular/core'), require('@angular/common/http')) :
	typeof define === 'function' && define.amd ? define(['exports', 'rxjs', 'rxjs/operators', '@angular/core', '@angular/common/http'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.inMemoryWebApi = {}),global.rxjs,global.rxjs.operators,global.ng.core,global.ng.common.http));
}(this, (function (exports,rxjs,operators,core,http) { 'use strict';

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
    __extends(HttpClientBackendService, _super);
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
        return new http.HttpHeaders(headers);
    };
    HttpClientBackendService.prototype.createQueryMap = function (search) {
        var map$$1 = new Map();
        if (search) {
            var params_1 = new http.HttpParams({ fromString: search });
            params_1.keys().forEach(function (p) { return map$$1.set(p, params_1.getAll(p)); });
        }
        return map$$1;
    };
    HttpClientBackendService.prototype.createResponse$fromResponseOptions$ = function (resOptions$) {
        return resOptions$.pipe(operators.map(function (opts) { return new http.HttpResponse(opts); }));
    };
    HttpClientBackendService.prototype.createPassThruBackend = function () {
        try {
            return new http.HttpXhrBackend(this.xhrFactory);
        }
        catch (ex) {
            ex.message = 'Cannot create passThru404 backend; ' + (ex.message || '');
            throw ex;
        }
    };
    HttpClientBackendService = __decorate$1([
        core.Injectable(),
        __param(1, core.Inject(InMemoryBackendConfig)), __param(1, core.Optional()),
        __metadata$1("design:paramtypes", [InMemoryDbService,
            InMemoryBackendConfigArgs,
            http.XhrFactory])
    ], HttpClientBackendService);
    return HttpClientBackendService;
}(BackendService));

////// HttpClient-Only version ////
var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
                { provide: http.HttpBackend,
                    useFactory: httpClientInMemBackendServiceFactory,
                    deps: [InMemoryDbService, InMemoryBackendConfig, http.XhrFactory] }
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
    HttpClientInMemoryWebApiModule = HttpClientInMemoryWebApiModule_1 = __decorate$3([
        core.NgModule({})
    ], HttpClientInMemoryWebApiModule);
    return HttpClientInMemoryWebApiModule;
}());

////// For apps with both Http and HttpClient ////
var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
                { provide: http.HttpBackend,
                    useFactory: httpClientInMemBackendServiceFactory,
                    deps: [InMemoryDbService, InMemoryBackendConfig, http.XhrFactory] }
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
    InMemoryWebApiModule = InMemoryWebApiModule_1 = __decorate$2([
        core.NgModule({})
    ], InMemoryWebApiModule);
    return InMemoryWebApiModule;
}());

exports.BackendService = BackendService;
exports.STATUS = STATUS;
exports.STATUS_CODE_INFO = STATUS_CODE_INFO;
exports.getStatusText = getStatusText;
exports.isSuccess = isSuccess;
exports.HttpClientBackendService = HttpClientBackendService;
exports.InMemoryWebApiModule = InMemoryWebApiModule;
exports.httpClientInMemBackendServiceFactory = httpClientInMemBackendServiceFactory;
exports.HttpClientInMemoryWebApiModule = HttpClientInMemoryWebApiModule;
exports.InMemoryDbService = InMemoryDbService;
exports.InMemoryBackendConfigArgs = InMemoryBackendConfigArgs;
exports.InMemoryBackendConfig = InMemoryBackendConfig;
exports.parseUri = parseUri;
exports.removeTrailingSlash = removeTrailingSlash;

Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LXdlYi1hcGkudW1kLmpzIiwic291cmNlcyI6WyIuLi9zcmMvaW4tbWVtL2h0dHAtc3RhdHVzLWNvZGVzLmpzIiwiLi4vc3JjL2luLW1lbS9kZWxheS1yZXNwb25zZS5qcyIsIi4uL3NyYy9pbi1tZW0vaW50ZXJmYWNlcy5qcyIsIi4uL3NyYy9pbi1tZW0vYmFja2VuZC5zZXJ2aWNlLmpzIiwiLi4vc3JjL2luLW1lbS9odHRwLWNsaWVudC1iYWNrZW5kLnNlcnZpY2UuanMiLCIuLi9zcmMvaW4tbWVtL2h0dHAtY2xpZW50LWluLW1lbW9yeS13ZWItYXBpLm1vZHVsZS5qcyIsIi4uL3NyYy9pbi1tZW0vaW4tbWVtb3J5LXdlYi1hcGkubW9kdWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB2YXIgU1RBVFVTID0ge1xyXG4gICAgQ09OVElOVUU6IDEwMCxcclxuICAgIFNXSVRDSElOR19QUk9UT0NPTFM6IDEwMSxcclxuICAgIE9LOiAyMDAsXHJcbiAgICBDUkVBVEVEOiAyMDEsXHJcbiAgICBBQ0NFUFRFRDogMjAyLFxyXG4gICAgTk9OX0FVVEhPUklUQVRJVkVfSU5GT1JNQVRJT046IDIwMyxcclxuICAgIE5PX0NPTlRFTlQ6IDIwNCxcclxuICAgIFJFU0VUX0NPTlRFTlQ6IDIwNSxcclxuICAgIFBBUlRJQUxfQ09OVEVOVDogMjA2LFxyXG4gICAgTVVMVElQTEVfQ0hPSUNFUzogMzAwLFxyXG4gICAgTU9WRURfUEVSTUFOVEVOVExZOiAzMDEsXHJcbiAgICBGT1VORDogMzAyLFxyXG4gICAgU0VFX09USEVSOiAzMDMsXHJcbiAgICBOT1RfTU9ESUZJRUQ6IDMwNCxcclxuICAgIFVTRV9QUk9YWTogMzA1LFxyXG4gICAgVEVNUE9SQVJZX1JFRElSRUNUOiAzMDcsXHJcbiAgICBCQURfUkVRVUVTVDogNDAwLFxyXG4gICAgVU5BVVRIT1JJWkVEOiA0MDEsXHJcbiAgICBQQVlNRU5UX1JFUVVJUkVEOiA0MDIsXHJcbiAgICBGT1JCSURERU46IDQwMyxcclxuICAgIE5PVF9GT1VORDogNDA0LFxyXG4gICAgTUVUSE9EX05PVF9BTExPV0VEOiA0MDUsXHJcbiAgICBOT1RfQUNDRVBUQUJMRTogNDA2LFxyXG4gICAgUFJPWFlfQVVUSEVOVElDQVRJT05fUkVRVUlSRUQ6IDQwNyxcclxuICAgIFJFUVVFU1RfVElNRU9VVDogNDA4LFxyXG4gICAgQ09ORkxJQ1Q6IDQwOSxcclxuICAgIEdPTkU6IDQxMCxcclxuICAgIExFTkdUSF9SRVFVSVJFRDogNDExLFxyXG4gICAgUFJFQ09ORElUSU9OX0ZBSUxFRDogNDEyLFxyXG4gICAgUEFZTE9BRF9UT19MQVJHRTogNDEzLFxyXG4gICAgVVJJX1RPT19MT05HOiA0MTQsXHJcbiAgICBVTlNVUFBPUlRFRF9NRURJQV9UWVBFOiA0MTUsXHJcbiAgICBSQU5HRV9OT1RfU0FUSVNGSUFCTEU6IDQxNixcclxuICAgIEVYUEVDVEFUSU9OX0ZBSUxFRDogNDE3LFxyXG4gICAgSU1fQV9URUFQT1Q6IDQxOCxcclxuICAgIFVQR1JBREVfUkVRVUlSRUQ6IDQyNixcclxuICAgIElOVEVSTkFMX1NFUlZFUl9FUlJPUjogNTAwLFxyXG4gICAgTk9UX0lNUExFTUVOVEVEOiA1MDEsXHJcbiAgICBCQURfR0FURVdBWTogNTAyLFxyXG4gICAgU0VSVklDRV9VTkFWQUlMQUJMRTogNTAzLFxyXG4gICAgR0FURVdBWV9USU1FT1VUOiA1MDQsXHJcbiAgICBIVFRQX1ZFUlNJT05fTk9UX1NVUFBPUlRFRDogNTA1LFxyXG4gICAgUFJPQ0VTU0lORzogMTAyLFxyXG4gICAgTVVMVElfU1RBVFVTOiAyMDcsXHJcbiAgICBJTV9VU0VEOiAyMjYsXHJcbiAgICBQRVJNQU5FTlRfUkVESVJFQ1Q6IDMwOCxcclxuICAgIFVOUFJPQ0VTU0FCTEVfRU5UUlk6IDQyMixcclxuICAgIExPQ0tFRDogNDIzLFxyXG4gICAgRkFJTEVEX0RFUEVOREVOQ1k6IDQyNCxcclxuICAgIFBSRUNPTkRJVElPTl9SRVFVSVJFRDogNDI4LFxyXG4gICAgVE9PX01BTllfUkVRVUVTVFM6IDQyOSxcclxuICAgIFJFUVVFU1RfSEVBREVSX0ZJRUxEU19UT09fTEFSR0U6IDQzMSxcclxuICAgIFVOQVZBSUxBQkxFX0ZPUl9MRUdBTF9SRUFTT05TOiA0NTEsXHJcbiAgICBWQVJJQU5UX0FMU09fTkVHT1RJQVRFUzogNTA2LFxyXG4gICAgSU5TVUZGSUNJRU5UX1NUT1JBR0U6IDUwNyxcclxuICAgIE5FVFdPUktfQVVUSEVOVElDQVRJT05fUkVRVUlSRUQ6IDUxMVxyXG59O1xyXG4vKnRzbGludDpkaXNhYmxlOnF1b3RlbWFyayBtYXgtbGluZS1sZW5ndGggb25lLWxpbmUgKi9cclxuZXhwb3J0IHZhciBTVEFUVVNfQ09ERV9JTkZPID0ge1xyXG4gICAgJzEwMCc6IHtcclxuICAgICAgICAnY29kZSc6IDEwMCxcclxuICAgICAgICAndGV4dCc6ICdDb250aW51ZScsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgaW5pdGlhbCBwYXJ0IG9mIGEgcmVxdWVzdCBoYXMgYmVlbiByZWNlaXZlZCBhbmQgaGFzIG5vdCB5ZXQgYmVlbiByZWplY3RlZCBieSB0aGUgc2VydmVyLlxcXCInLFxyXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi4yLjEnLFxyXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMi4xJ1xyXG4gICAgfSxcclxuICAgICcxMDEnOiB7XHJcbiAgICAgICAgJ2NvZGUnOiAxMDEsXHJcbiAgICAgICAgJ3RleHQnOiAnU3dpdGNoaW5nIFByb3RvY29scycsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIHVuZGVyc3RhbmRzIGFuZCBpcyB3aWxsaW5nIHRvIGNvbXBseSB3aXRoIHRoZSBjbGllbnRcXCdzIHJlcXVlc3QsIHZpYSB0aGUgVXBncmFkZSBoZWFkZXIgZmllbGQsIGZvciBhIGNoYW5nZSBpbiB0aGUgYXBwbGljYXRpb24gcHJvdG9jb2wgYmVpbmcgdXNlZCBvbiB0aGlzIGNvbm5lY3Rpb24uXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjIuMicsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4yLjInXHJcbiAgICB9LFxyXG4gICAgJzIwMCc6IHtcclxuICAgICAgICAnY29kZSc6IDIwMCxcclxuICAgICAgICAndGV4dCc6ICdPSycsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgcmVxdWVzdCBoYXMgc3VjY2VlZGVkLlxcXCInLFxyXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi4zLjEnLFxyXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMy4xJ1xyXG4gICAgfSxcclxuICAgICcyMDEnOiB7XHJcbiAgICAgICAgJ2NvZGUnOiAyMDEsXHJcbiAgICAgICAgJ3RleHQnOiAnQ3JlYXRlZCcsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgcmVxdWVzdCBoYXMgYmVlbiBmdWxmaWxsZWQgYW5kIGhhcyByZXN1bHRlZCBpbiBvbmUgb3IgbW9yZSBuZXcgcmVzb3VyY2VzIGJlaW5nIGNyZWF0ZWQuXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjMuMicsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjInXHJcbiAgICB9LFxyXG4gICAgJzIwMic6IHtcclxuICAgICAgICAnY29kZSc6IDIwMixcclxuICAgICAgICAndGV4dCc6ICdBY2NlcHRlZCcsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgcmVxdWVzdCBoYXMgYmVlbiBhY2NlcHRlZCBmb3IgcHJvY2Vzc2luZywgYnV0IHRoZSBwcm9jZXNzaW5nIGhhcyBub3QgYmVlbiBjb21wbGV0ZWQuXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjMuMycsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjMnXHJcbiAgICB9LFxyXG4gICAgJzIwMyc6IHtcclxuICAgICAgICAnY29kZSc6IDIwMyxcclxuICAgICAgICAndGV4dCc6ICdOb24tQXV0aG9yaXRhdGl2ZSBJbmZvcm1hdGlvbicsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgcmVxdWVzdCB3YXMgc3VjY2Vzc2Z1bCBidXQgdGhlIGVuY2xvc2VkIHBheWxvYWQgaGFzIGJlZW4gbW9kaWZpZWQgZnJvbSB0aGF0IG9mIHRoZSBvcmlnaW4gc2VydmVyXFwncyAyMDAgKE9LKSByZXNwb25zZSBieSBhIHRyYW5zZm9ybWluZyBwcm94eS5cXFwiJyxcclxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuMy40JyxcclxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjMuNCdcclxuICAgIH0sXHJcbiAgICAnMjA0Jzoge1xyXG4gICAgICAgICdjb2RlJzogMjA0LFxyXG4gICAgICAgICd0ZXh0JzogJ05vIENvbnRlbnQnLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBoYXMgc3VjY2Vzc2Z1bGx5IGZ1bGZpbGxlZCB0aGUgcmVxdWVzdCBhbmQgdGhhdCB0aGVyZSBpcyBubyBhZGRpdGlvbmFsIGNvbnRlbnQgdG8gc2VuZCBpbiB0aGUgcmVzcG9uc2UgcGF5bG9hZCBib2R5LlxcXCInLFxyXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi4zLjUnLFxyXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMy41J1xyXG4gICAgfSxcclxuICAgICcyMDUnOiB7XHJcbiAgICAgICAgJ2NvZGUnOiAyMDUsXHJcbiAgICAgICAgJ3RleHQnOiAnUmVzZXQgQ29udGVudCcsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGhhcyBmdWxmaWxsZWQgdGhlIHJlcXVlc3QgYW5kIGRlc2lyZXMgdGhhdCB0aGUgdXNlciBhZ2VudCByZXNldCB0aGUgXFxcImRvY3VtZW50IHZpZXdcXFwiLCB3aGljaCBjYXVzZWQgdGhlIHJlcXVlc3QgdG8gYmUgc2VudCwgdG8gaXRzIG9yaWdpbmFsIHN0YXRlIGFzIHJlY2VpdmVkIGZyb20gdGhlIG9yaWdpbiBzZXJ2ZXIuXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjMuNicsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjYnXHJcbiAgICB9LFxyXG4gICAgJzIwNic6IHtcclxuICAgICAgICAnY29kZSc6IDIwNixcclxuICAgICAgICAndGV4dCc6ICdQYXJ0aWFsIENvbnRlbnQnLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBpcyBzdWNjZXNzZnVsbHkgZnVsZmlsbGluZyBhIHJhbmdlIHJlcXVlc3QgZm9yIHRoZSB0YXJnZXQgcmVzb3VyY2UgYnkgdHJhbnNmZXJyaW5nIG9uZSBvciBtb3JlIHBhcnRzIG9mIHRoZSBzZWxlY3RlZCByZXByZXNlbnRhdGlvbiB0aGF0IGNvcnJlc3BvbmQgdG8gdGhlIHNhdGlzZmlhYmxlIHJhbmdlcyBmb3VuZCBpbiB0aGUgcmVxdWVzdHNcXCdzIFJhbmdlIGhlYWRlciBmaWVsZC5cXFwiJyxcclxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMzIzQuMScsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMzI3NlY3Rpb24tNC4xJ1xyXG4gICAgfSxcclxuICAgICczMDAnOiB7XHJcbiAgICAgICAgJ2NvZGUnOiAzMDAsXHJcbiAgICAgICAgJ3RleHQnOiAnTXVsdGlwbGUgQ2hvaWNlcycsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgdGFyZ2V0IHJlc291cmNlIGhhcyBtb3JlIHRoYW4gb25lIHJlcHJlc2VudGF0aW9uLCBlYWNoIHdpdGggaXRzIG93biBtb3JlIHNwZWNpZmljIGlkZW50aWZpZXIsIGFuZCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgYWx0ZXJuYXRpdmVzIGlzIGJlaW5nIHByb3ZpZGVkIHNvIHRoYXQgdGhlIHVzZXIgKG9yIHVzZXIgYWdlbnQpIGNhbiBzZWxlY3QgYSBwcmVmZXJyZWQgcmVwcmVzZW50YXRpb24gYnkgcmVkaXJlY3RpbmcgaXRzIHJlcXVlc3QgdG8gb25lIG9yIG1vcmUgb2YgdGhvc2UgaWRlbnRpZmllcnMuXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjQuMScsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi40LjEnXHJcbiAgICB9LFxyXG4gICAgJzMwMSc6IHtcclxuICAgICAgICAnY29kZSc6IDMwMSxcclxuICAgICAgICAndGV4dCc6ICdNb3ZlZCBQZXJtYW5lbnRseScsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgdGFyZ2V0IHJlc291cmNlIGhhcyBiZWVuIGFzc2lnbmVkIGEgbmV3IHBlcm1hbmVudCBVUkkgYW5kIGFueSBmdXR1cmUgcmVmZXJlbmNlcyB0byB0aGlzIHJlc291cmNlIG91Z2h0IHRvIHVzZSBvbmUgb2YgdGhlIGVuY2xvc2VkIFVSSXMuXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjQuMicsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi40LjInXHJcbiAgICB9LFxyXG4gICAgJzMwMic6IHtcclxuICAgICAgICAnY29kZSc6IDMwMixcclxuICAgICAgICAndGV4dCc6ICdGb3VuZCcsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgdGFyZ2V0IHJlc291cmNlIHJlc2lkZXMgdGVtcG9yYXJpbHkgdW5kZXIgYSBkaWZmZXJlbnQgVVJJLlxcXCInLFxyXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi40LjMnLFxyXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNC4zJ1xyXG4gICAgfSxcclxuICAgICczMDMnOiB7XHJcbiAgICAgICAgJ2NvZGUnOiAzMDMsXHJcbiAgICAgICAgJ3RleHQnOiAnU2VlIE90aGVyJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgaXMgcmVkaXJlY3RpbmcgdGhlIHVzZXIgYWdlbnQgdG8gYSBkaWZmZXJlbnQgcmVzb3VyY2UsIGFzIGluZGljYXRlZCBieSBhIFVSSSBpbiB0aGUgTG9jYXRpb24gaGVhZGVyIGZpZWxkLCB0aGF0IGlzIGludGVuZGVkIHRvIHByb3ZpZGUgYW4gaW5kaXJlY3QgcmVzcG9uc2UgdG8gdGhlIG9yaWdpbmFsIHJlcXVlc3QuXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjQuNCcsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi40LjQnXHJcbiAgICB9LFxyXG4gICAgJzMwNCc6IHtcclxuICAgICAgICAnY29kZSc6IDMwNCxcclxuICAgICAgICAndGV4dCc6ICdOb3QgTW9kaWZpZWQnLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiQSBjb25kaXRpb25hbCBHRVQgcmVxdWVzdCBoYXMgYmVlbiByZWNlaXZlZCBhbmQgd291bGQgaGF2ZSByZXN1bHRlZCBpbiBhIDIwMCAoT0spIHJlc3BvbnNlIGlmIGl0IHdlcmUgbm90IGZvciB0aGUgZmFjdCB0aGF0IHRoZSBjb25kaXRpb24gaGFzIGV2YWx1YXRlZCB0byBmYWxzZS5cXFwiJyxcclxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMyIzQuMScsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMyI3NlY3Rpb24tNC4xJ1xyXG4gICAgfSxcclxuICAgICczMDUnOiB7XHJcbiAgICAgICAgJ2NvZGUnOiAzMDUsXHJcbiAgICAgICAgJ3RleHQnOiAnVXNlIFByb3h5JyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnKmRlcHJlY2F0ZWQqJyxcclxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNC41JyxcclxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjQuNSdcclxuICAgIH0sXHJcbiAgICAnMzA3Jzoge1xyXG4gICAgICAgICdjb2RlJzogMzA3LFxyXG4gICAgICAgICd0ZXh0JzogJ1RlbXBvcmFyeSBSZWRpcmVjdCcsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgdGFyZ2V0IHJlc291cmNlIHJlc2lkZXMgdGVtcG9yYXJpbHkgdW5kZXIgYSBkaWZmZXJlbnQgVVJJIGFuZCB0aGUgdXNlciBhZ2VudCBNVVNUIE5PVCBjaGFuZ2UgdGhlIHJlcXVlc3QgbWV0aG9kIGlmIGl0IHBlcmZvcm1zIGFuIGF1dG9tYXRpYyByZWRpcmVjdGlvbiB0byB0aGF0IFVSSS5cXFwiJyxcclxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNC43JyxcclxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjQuNydcclxuICAgIH0sXHJcbiAgICAnNDAwJzoge1xyXG4gICAgICAgICdjb2RlJzogNDAwLFxyXG4gICAgICAgICd0ZXh0JzogJ0JhZCBSZXF1ZXN0JyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgY2Fubm90IG9yIHdpbGwgbm90IHByb2Nlc3MgdGhlIHJlcXVlc3QgYmVjYXVzZSB0aGUgcmVjZWl2ZWQgc3ludGF4IGlzIGludmFsaWQsIG5vbnNlbnNpY2FsLCBvciBleGNlZWRzIHNvbWUgbGltaXRhdGlvbiBvbiB3aGF0IHRoZSBzZXJ2ZXIgaXMgd2lsbGluZyB0byBwcm9jZXNzLlxcXCInLFxyXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjEnLFxyXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4xJ1xyXG4gICAgfSxcclxuICAgICc0MDEnOiB7XHJcbiAgICAgICAgJ2NvZGUnOiA0MDEsXHJcbiAgICAgICAgJ3RleHQnOiAnVW5hdXRob3JpemVkJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSByZXF1ZXN0IGhhcyBub3QgYmVlbiBhcHBsaWVkIGJlY2F1c2UgaXQgbGFja3MgdmFsaWQgYXV0aGVudGljYXRpb24gY3JlZGVudGlhbHMgZm9yIHRoZSB0YXJnZXQgcmVzb3VyY2UuXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzNSM2LjMuMScsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjM1I3NlY3Rpb24tMy4xJ1xyXG4gICAgfSxcclxuICAgICc0MDInOiB7XHJcbiAgICAgICAgJ2NvZGUnOiA0MDIsXHJcbiAgICAgICAgJ3RleHQnOiAnUGF5bWVudCBSZXF1aXJlZCcsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJypyZXNlcnZlZConLFxyXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjInLFxyXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4yJ1xyXG4gICAgfSxcclxuICAgICc0MDMnOiB7XHJcbiAgICAgICAgJ2NvZGUnOiA0MDMsXHJcbiAgICAgICAgJ3RleHQnOiAnRm9yYmlkZGVuJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgdW5kZXJzdG9vZCB0aGUgcmVxdWVzdCBidXQgcmVmdXNlcyB0byBhdXRob3JpemUgaXQuXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMycsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjMnXHJcbiAgICB9LFxyXG4gICAgJzQwNCc6IHtcclxuICAgICAgICAnY29kZSc6IDQwNCxcclxuICAgICAgICAndGV4dCc6ICdOb3QgRm91bmQnLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIG9yaWdpbiBzZXJ2ZXIgZGlkIG5vdCBmaW5kIGEgY3VycmVudCByZXByZXNlbnRhdGlvbiBmb3IgdGhlIHRhcmdldCByZXNvdXJjZSBvciBpcyBub3Qgd2lsbGluZyB0byBkaXNjbG9zZSB0aGF0IG9uZSBleGlzdHMuXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuNCcsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjQnXHJcbiAgICB9LFxyXG4gICAgJzQwNSc6IHtcclxuICAgICAgICAnY29kZSc6IDQwNSxcclxuICAgICAgICAndGV4dCc6ICdNZXRob2QgTm90IEFsbG93ZWQnLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIG1ldGhvZCBzcGVjaWZpZWQgaW4gdGhlIHJlcXVlc3QtbGluZSBpcyBrbm93biBieSB0aGUgb3JpZ2luIHNlcnZlciBidXQgbm90IHN1cHBvcnRlZCBieSB0aGUgdGFyZ2V0IHJlc291cmNlLlxcXCInLFxyXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjUnLFxyXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS41J1xyXG4gICAgfSxcclxuICAgICc0MDYnOiB7XHJcbiAgICAgICAgJ2NvZGUnOiA0MDYsXHJcbiAgICAgICAgJ3RleHQnOiAnTm90IEFjY2VwdGFibGUnLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHRhcmdldCByZXNvdXJjZSBkb2VzIG5vdCBoYXZlIGEgY3VycmVudCByZXByZXNlbnRhdGlvbiB0aGF0IHdvdWxkIGJlIGFjY2VwdGFibGUgdG8gdGhlIHVzZXIgYWdlbnQsIGFjY29yZGluZyB0byB0aGUgcHJvYWN0aXZlIG5lZ290aWF0aW9uIGhlYWRlciBmaWVsZHMgcmVjZWl2ZWQgaW4gdGhlIHJlcXVlc3QsIGFuZCB0aGUgc2VydmVyIGlzIHVud2lsbGluZyB0byBzdXBwbHkgYSBkZWZhdWx0IHJlcHJlc2VudGF0aW9uLlxcXCInLFxyXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjYnLFxyXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS42J1xyXG4gICAgfSxcclxuICAgICc0MDcnOiB7XHJcbiAgICAgICAgJ2NvZGUnOiA0MDcsXHJcbiAgICAgICAgJ3RleHQnOiAnUHJveHkgQXV0aGVudGljYXRpb24gUmVxdWlyZWQnLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIGNsaWVudCBuZWVkcyB0byBhdXRoZW50aWNhdGUgaXRzZWxmIGluIG9yZGVyIHRvIHVzZSBhIHByb3h5LlxcXCInLFxyXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi4zLjInLFxyXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMy4yJ1xyXG4gICAgfSxcclxuICAgICc0MDgnOiB7XHJcbiAgICAgICAgJ2NvZGUnOiA0MDgsXHJcbiAgICAgICAgJ3RleHQnOiAnUmVxdWVzdCBUaW1lb3V0JyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgZGlkIG5vdCByZWNlaXZlIGEgY29tcGxldGUgcmVxdWVzdCBtZXNzYWdlIHdpdGhpbiB0aGUgdGltZSB0aGF0IGl0IHdhcyBwcmVwYXJlZCB0byB3YWl0LlxcXCInLFxyXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjcnLFxyXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS43J1xyXG4gICAgfSxcclxuICAgICc0MDknOiB7XHJcbiAgICAgICAgJ2NvZGUnOiA0MDksXHJcbiAgICAgICAgJ3RleHQnOiAnQ29uZmxpY3QnLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHJlcXVlc3QgY291bGQgbm90IGJlIGNvbXBsZXRlZCBkdWUgdG8gYSBjb25mbGljdCB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSByZXNvdXJjZS5cXFwiJyxcclxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS44JyxcclxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuOCdcclxuICAgIH0sXHJcbiAgICAnNDEwJzoge1xyXG4gICAgICAgICdjb2RlJzogNDEwLFxyXG4gICAgICAgICd0ZXh0JzogJ0dvbmUnLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiQWNjZXNzIHRvIHRoZSB0YXJnZXQgcmVzb3VyY2UgaXMgbm8gbG9uZ2VyIGF2YWlsYWJsZSBhdCB0aGUgb3JpZ2luIHNlcnZlciBhbmQgdGhhdCB0aGlzIGNvbmRpdGlvbiBpcyBsaWtlbHkgdG8gYmUgcGVybWFuZW50LlxcXCInLFxyXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjknLFxyXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS45J1xyXG4gICAgfSxcclxuICAgICc0MTEnOiB7XHJcbiAgICAgICAgJ2NvZGUnOiA0MTEsXHJcbiAgICAgICAgJ3RleHQnOiAnTGVuZ3RoIFJlcXVpcmVkJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgcmVmdXNlcyB0byBhY2NlcHQgdGhlIHJlcXVlc3Qgd2l0aG91dCBhIGRlZmluZWQgQ29udGVudC1MZW5ndGguXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMTAnLFxyXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4xMCdcclxuICAgIH0sXHJcbiAgICAnNDEyJzoge1xyXG4gICAgICAgICdjb2RlJzogNDEyLFxyXG4gICAgICAgICd0ZXh0JzogJ1ByZWNvbmRpdGlvbiBGYWlsZWQnLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiT25lIG9yIG1vcmUgcHJlY29uZGl0aW9ucyBnaXZlbiBpbiB0aGUgcmVxdWVzdCBoZWFkZXIgZmllbGRzIGV2YWx1YXRlZCB0byBmYWxzZSB3aGVuIHRlc3RlZCBvbiB0aGUgc2VydmVyLlxcXCInLFxyXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzIjNC4yJyxcclxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzIjc2VjdGlvbi00LjInXHJcbiAgICB9LFxyXG4gICAgJzQxMyc6IHtcclxuICAgICAgICAnY29kZSc6IDQxMyxcclxuICAgICAgICAndGV4dCc6ICdQYXlsb2FkIFRvbyBMYXJnZScsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGlzIHJlZnVzaW5nIHRvIHByb2Nlc3MgYSByZXF1ZXN0IGJlY2F1c2UgdGhlIHJlcXVlc3QgcGF5bG9hZCBpcyBsYXJnZXIgdGhhbiB0aGUgc2VydmVyIGlzIHdpbGxpbmcgb3IgYWJsZSB0byBwcm9jZXNzLlxcXCInLFxyXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjExJyxcclxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMTEnXHJcbiAgICB9LFxyXG4gICAgJzQxNCc6IHtcclxuICAgICAgICAnY29kZSc6IDQxNCxcclxuICAgICAgICAndGV4dCc6ICdVUkkgVG9vIExvbmcnLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBpcyByZWZ1c2luZyB0byBzZXJ2aWNlIHRoZSByZXF1ZXN0IGJlY2F1c2UgdGhlIHJlcXVlc3QtdGFyZ2V0IGlzIGxvbmdlciB0aGFuIHRoZSBzZXJ2ZXIgaXMgd2lsbGluZyB0byBpbnRlcnByZXQuXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMTInLFxyXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4xMidcclxuICAgIH0sXHJcbiAgICAnNDE1Jzoge1xyXG4gICAgICAgICdjb2RlJzogNDE1LFxyXG4gICAgICAgICd0ZXh0JzogJ1Vuc3VwcG9ydGVkIE1lZGlhIFR5cGUnLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIG9yaWdpbiBzZXJ2ZXIgaXMgcmVmdXNpbmcgdG8gc2VydmljZSB0aGUgcmVxdWVzdCBiZWNhdXNlIHRoZSBwYXlsb2FkIGlzIGluIGEgZm9ybWF0IG5vdCBzdXBwb3J0ZWQgYnkgdGhlIHRhcmdldCByZXNvdXJjZSBmb3IgdGhpcyBtZXRob2QuXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMTMnLFxyXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4xMydcclxuICAgIH0sXHJcbiAgICAnNDE2Jzoge1xyXG4gICAgICAgICdjb2RlJzogNDE2LFxyXG4gICAgICAgICd0ZXh0JzogJ1JhbmdlIE5vdCBTYXRpc2ZpYWJsZScsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJOb25lIG9mIHRoZSByYW5nZXMgaW4gdGhlIHJlcXVlc3RcXCdzIFJhbmdlIGhlYWRlciBmaWVsZCBvdmVybGFwIHRoZSBjdXJyZW50IGV4dGVudCBvZiB0aGUgc2VsZWN0ZWQgcmVzb3VyY2Ugb3IgdGhhdCB0aGUgc2V0IG9mIHJhbmdlcyByZXF1ZXN0ZWQgaGFzIGJlZW4gcmVqZWN0ZWQgZHVlIHRvIGludmFsaWQgcmFuZ2VzIG9yIGFuIGV4Y2Vzc2l2ZSByZXF1ZXN0IG9mIHNtYWxsIG9yIG92ZXJsYXBwaW5nIHJhbmdlcy5cXFwiJyxcclxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMzIzQuNCcsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMzI3NlY3Rpb24tNC40J1xyXG4gICAgfSxcclxuICAgICc0MTcnOiB7XHJcbiAgICAgICAgJ2NvZGUnOiA0MTcsXHJcbiAgICAgICAgJ3RleHQnOiAnRXhwZWN0YXRpb24gRmFpbGVkJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBleHBlY3RhdGlvbiBnaXZlbiBpbiB0aGUgcmVxdWVzdFxcJ3MgRXhwZWN0IGhlYWRlciBmaWVsZCBjb3VsZCBub3QgYmUgbWV0IGJ5IGF0IGxlYXN0IG9uZSBvZiB0aGUgaW5ib3VuZCBzZXJ2ZXJzLlxcXCInLFxyXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjE0JyxcclxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMTQnXHJcbiAgICB9LFxyXG4gICAgJzQxOCc6IHtcclxuICAgICAgICAnY29kZSc6IDQxOCxcclxuICAgICAgICAndGV4dCc6ICdJXFwnbSBhIHRlYXBvdCcsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCIxOTg4IEFwcmlsIEZvb2xzIEpva2UuIFJldHVybmVkIGJ5IHRlYSBwb3RzIHJlcXVlc3RlZCB0byBicmV3IGNvZmZlZS5cXFwiJyxcclxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkMgMjMyNCcsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjMyNCdcclxuICAgIH0sXHJcbiAgICAnNDI2Jzoge1xyXG4gICAgICAgICdjb2RlJzogNDI2LFxyXG4gICAgICAgICd0ZXh0JzogJ1VwZ3JhZGUgUmVxdWlyZWQnLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciByZWZ1c2VzIHRvIHBlcmZvcm0gdGhlIHJlcXVlc3QgdXNpbmcgdGhlIGN1cnJlbnQgcHJvdG9jb2wgYnV0IG1pZ2h0IGJlIHdpbGxpbmcgdG8gZG8gc28gYWZ0ZXIgdGhlIGNsaWVudCB1cGdyYWRlcyB0byBhIGRpZmZlcmVudCBwcm90b2NvbC5cXFwiJyxcclxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS4xNScsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjE1J1xyXG4gICAgfSxcclxuICAgICc1MDAnOiB7XHJcbiAgICAgICAgJ2NvZGUnOiA1MDAsXHJcbiAgICAgICAgJ3RleHQnOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgZW5jb3VudGVyZWQgYW4gdW5leHBlY3RlZCBjb25kaXRpb24gdGhhdCBwcmV2ZW50ZWQgaXQgZnJvbSBmdWxmaWxsaW5nIHRoZSByZXF1ZXN0LlxcXCInLFxyXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi42LjEnLFxyXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNi4xJ1xyXG4gICAgfSxcclxuICAgICc1MDEnOiB7XHJcbiAgICAgICAgJ2NvZGUnOiA1MDEsXHJcbiAgICAgICAgJ3RleHQnOiAnTm90IEltcGxlbWVudGVkJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgZnVuY3Rpb25hbGl0eSByZXF1aXJlZCB0byBmdWxmaWxsIHRoZSByZXF1ZXN0LlxcXCInLFxyXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi42LjInLFxyXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNi4yJ1xyXG4gICAgfSxcclxuICAgICc1MDInOiB7XHJcbiAgICAgICAgJ2NvZGUnOiA1MDIsXHJcbiAgICAgICAgJ3RleHQnOiAnQmFkIEdhdGV3YXknLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciwgd2hpbGUgYWN0aW5nIGFzIGEgZ2F0ZXdheSBvciBwcm94eSwgcmVjZWl2ZWQgYW4gaW52YWxpZCByZXNwb25zZSBmcm9tIGFuIGluYm91bmQgc2VydmVyIGl0IGFjY2Vzc2VkIHdoaWxlIGF0dGVtcHRpbmcgdG8gZnVsZmlsbCB0aGUgcmVxdWVzdC5cXFwiJyxcclxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNi4zJyxcclxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjYuMydcclxuICAgIH0sXHJcbiAgICAnNTAzJzoge1xyXG4gICAgICAgICdjb2RlJzogNTAzLFxyXG4gICAgICAgICd0ZXh0JzogJ1NlcnZpY2UgVW5hdmFpbGFibGUnLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBpcyBjdXJyZW50bHkgdW5hYmxlIHRvIGhhbmRsZSB0aGUgcmVxdWVzdCBkdWUgdG8gYSB0ZW1wb3Jhcnkgb3ZlcmxvYWQgb3Igc2NoZWR1bGVkIG1haW50ZW5hbmNlLCB3aGljaCB3aWxsIGxpa2VseSBiZSBhbGxldmlhdGVkIGFmdGVyIHNvbWUgZGVsYXkuXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjYuNCcsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi42LjQnXHJcbiAgICB9LFxyXG4gICAgJzUwNCc6IHtcclxuICAgICAgICAnY29kZSc6IDUwNCxcclxuICAgICAgICAndGV4dCc6ICdHYXRld2F5IFRpbWUtb3V0JyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIsIHdoaWxlIGFjdGluZyBhcyBhIGdhdGV3YXkgb3IgcHJveHksIGRpZCBub3QgcmVjZWl2ZSBhIHRpbWVseSByZXNwb25zZSBmcm9tIGFuIHVwc3RyZWFtIHNlcnZlciBpdCBuZWVkZWQgdG8gYWNjZXNzIGluIG9yZGVyIHRvIGNvbXBsZXRlIHRoZSByZXF1ZXN0LlxcXCInLFxyXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi42LjUnLFxyXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNi41J1xyXG4gICAgfSxcclxuICAgICc1MDUnOiB7XHJcbiAgICAgICAgJ2NvZGUnOiA1MDUsXHJcbiAgICAgICAgJ3RleHQnOiAnSFRUUCBWZXJzaW9uIE5vdCBTdXBwb3J0ZWQnLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBkb2VzIG5vdCBzdXBwb3J0LCBvciByZWZ1c2VzIHRvIHN1cHBvcnQsIHRoZSBwcm90b2NvbCB2ZXJzaW9uIHRoYXQgd2FzIHVzZWQgaW4gdGhlIHJlcXVlc3QgbWVzc2FnZS5cXFwiJyxcclxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNi42JyxcclxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjYuNidcclxuICAgIH0sXHJcbiAgICAnMTAyJzoge1xyXG4gICAgICAgICdjb2RlJzogMTAyLFxyXG4gICAgICAgICd0ZXh0JzogJ1Byb2Nlc3NpbmcnLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiQW4gaW50ZXJpbSByZXNwb25zZSB0byBpbmZvcm0gdGhlIGNsaWVudCB0aGF0IHRoZSBzZXJ2ZXIgaGFzIGFjY2VwdGVkIHRoZSBjb21wbGV0ZSByZXF1ZXN0LCBidXQgaGFzIG5vdCB5ZXQgY29tcGxldGVkIGl0LlxcXCInLFxyXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzUyMTgjMTAuMScsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNTE4I3NlY3Rpb24tMTAuMSdcclxuICAgIH0sXHJcbiAgICAnMjA3Jzoge1xyXG4gICAgICAgICdjb2RlJzogMjA3LFxyXG4gICAgICAgICd0ZXh0JzogJ011bHRpLVN0YXR1cycsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJTdGF0dXMgZm9yIG11bHRpcGxlIGluZGVwZW5kZW50IG9wZXJhdGlvbnMuXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNTIxOCMxMC4yJyxcclxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzI1MTgjc2VjdGlvbi0xMC4yJ1xyXG4gICAgfSxcclxuICAgICcyMjYnOiB7XHJcbiAgICAgICAgJ2NvZGUnOiAyMjYsXHJcbiAgICAgICAgJ3RleHQnOiAnSU0gVXNlZCcsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGhhcyBmdWxmaWxsZWQgYSBHRVQgcmVxdWVzdCBmb3IgdGhlIHJlc291cmNlLCBhbmQgdGhlIHJlc3BvbnNlIGlzIGEgcmVwcmVzZW50YXRpb24gb2YgdGhlIHJlc3VsdCBvZiBvbmUgb3IgbW9yZSBpbnN0YW5jZS1tYW5pcHVsYXRpb25zIGFwcGxpZWQgdG8gdGhlIGN1cnJlbnQgaW5zdGFuY2UuXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDMzIyOSMxMC40LjEnLFxyXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzIyOSNzZWN0aW9uLTEwLjQuMSdcclxuICAgIH0sXHJcbiAgICAnMzA4Jzoge1xyXG4gICAgICAgICdjb2RlJzogMzA4LFxyXG4gICAgICAgICd0ZXh0JzogJ1Blcm1hbmVudCBSZWRpcmVjdCcsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgdGFyZ2V0IHJlc291cmNlIGhhcyBiZWVuIGFzc2lnbmVkIGEgbmV3IHBlcm1hbmVudCBVUkkgYW5kIGFueSBmdXR1cmUgcmVmZXJlbmNlcyB0byB0aGlzIHJlc291cmNlIFNIT1VMRCB1c2Ugb25lIG9mIHRoZSByZXR1cm5lZCBVUklzLiBbLi4uXSBUaGlzIHN0YXR1cyBjb2RlIGlzIHNpbWlsYXIgdG8gMzAxIE1vdmVkIFBlcm1hbmVudGx5IChTZWN0aW9uIDcuMy4yIG9mIHJmYzcyMzEpLCBleGNlcHQgdGhhdCBpdCBkb2VzIG5vdCBhbGxvdyByZXdyaXRpbmcgdGhlIHJlcXVlc3QgbWV0aG9kIGZyb20gUE9TVCB0byBHRVQuXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzOCcsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjM4J1xyXG4gICAgfSxcclxuICAgICc0MjInOiB7XHJcbiAgICAgICAgJ2NvZGUnOiA0MjIsXHJcbiAgICAgICAgJ3RleHQnOiAnVW5wcm9jZXNzYWJsZSBFbnRpdHknLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciB1bmRlcnN0YW5kcyB0aGUgY29udGVudCB0eXBlIG9mIHRoZSByZXF1ZXN0IGVudGl0eSAoaGVuY2UgYSA0MTUoVW5zdXBwb3J0ZWQgTWVkaWEgVHlwZSkgc3RhdHVzIGNvZGUgaXMgaW5hcHByb3ByaWF0ZSksIGFuZCB0aGUgc3ludGF4IG9mIHRoZSByZXF1ZXN0IGVudGl0eSBpcyBjb3JyZWN0ICh0aHVzIGEgNDAwIChCYWQgUmVxdWVzdCkgc3RhdHVzIGNvZGUgaXMgaW5hcHByb3ByaWF0ZSkgYnV0IHdhcyB1bmFibGUgdG8gcHJvY2VzcyB0aGUgY29udGFpbmVkIGluc3RydWN0aW9ucy5cXFwiJyxcclxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM1MjE4IzEwLjMnLFxyXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjUxOCNzZWN0aW9uLTEwLjMnXHJcbiAgICB9LFxyXG4gICAgJzQyMyc6IHtcclxuICAgICAgICAnY29kZSc6IDQyMyxcclxuICAgICAgICAndGV4dCc6ICdMb2NrZWQnLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNvdXJjZSBvciBkZXN0aW5hdGlvbiByZXNvdXJjZSBvZiBhIG1ldGhvZCBpcyBsb2NrZWQuXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNTIxOCMxMC40JyxcclxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzI1MTgjc2VjdGlvbi0xMC40J1xyXG4gICAgfSxcclxuICAgICc0MjQnOiB7XHJcbiAgICAgICAgJ2NvZGUnOiA0MjQsXHJcbiAgICAgICAgJ3RleHQnOiAnRmFpbGVkIERlcGVuZGVuY3knLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIG1ldGhvZCBjb3VsZCBub3QgYmUgcGVyZm9ybWVkIG9uIHRoZSByZXNvdXJjZSBiZWNhdXNlIHRoZSByZXF1ZXN0ZWQgYWN0aW9uIGRlcGVuZGVkIG9uIGFub3RoZXIgYWN0aW9uIGFuZCB0aGF0IGFjdGlvbiBmYWlsZWQuXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNTIxOCMxMC41JyxcclxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzI1MTgjc2VjdGlvbi0xMC41J1xyXG4gICAgfSxcclxuICAgICc0MjgnOiB7XHJcbiAgICAgICAgJ2NvZGUnOiA0MjgsXHJcbiAgICAgICAgJ3RleHQnOiAnUHJlY29uZGl0aW9uIFJlcXVpcmVkJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBvcmlnaW4gc2VydmVyIHJlcXVpcmVzIHRoZSByZXF1ZXN0IHRvIGJlIGNvbmRpdGlvbmFsLlxcXCInLFxyXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzY1ODUjMycsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NTg1I3NlY3Rpb24tMydcclxuICAgIH0sXHJcbiAgICAnNDI5Jzoge1xyXG4gICAgICAgICdjb2RlJzogNDI5LFxyXG4gICAgICAgICd0ZXh0JzogJ1RvbyBNYW55IFJlcXVlc3RzJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSB1c2VyIGhhcyBzZW50IHRvbyBtYW55IHJlcXVlc3RzIGluIGEgZ2l2ZW4gYW1vdW50IG9mIHRpbWUgKFxcXCJyYXRlIGxpbWl0aW5nXFxcIikuXFxcIicsXHJcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNjU4NSM0JyxcclxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzY1ODUjc2VjdGlvbi00J1xyXG4gICAgfSxcclxuICAgICc0MzEnOiB7XHJcbiAgICAgICAgJ2NvZGUnOiA0MzEsXHJcbiAgICAgICAgJ3RleHQnOiAnUmVxdWVzdCBIZWFkZXIgRmllbGRzIFRvbyBMYXJnZScsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGlzIHVud2lsbGluZyB0byBwcm9jZXNzIHRoZSByZXF1ZXN0IGJlY2F1c2UgaXRzIGhlYWRlciBmaWVsZHMgYXJlIHRvbyBsYXJnZS5cXFwiJyxcclxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM2NTg1IzUnLFxyXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjU4NSNzZWN0aW9uLTUnXHJcbiAgICB9LFxyXG4gICAgJzQ1MSc6IHtcclxuICAgICAgICAnY29kZSc6IDQ1MSxcclxuICAgICAgICAndGV4dCc6ICdVbmF2YWlsYWJsZSBGb3IgTGVnYWwgUmVhc29ucycsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGlzIGRlbnlpbmcgYWNjZXNzIHRvIHRoZSByZXNvdXJjZSBpbiByZXNwb25zZSB0byBhIGxlZ2FsIGRlbWFuZC5cXFwiJyxcclxuICAgICAgICAnc3BlY190aXRsZSc6ICdkcmFmdC1pZXRmLWh0dHBiaXMtbGVnYWxseS1yZXN0cmljdGVkLXN0YXR1cycsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9kcmFmdC1pZXRmLWh0dHBiaXMtbGVnYWxseS1yZXN0cmljdGVkLXN0YXR1cydcclxuICAgIH0sXHJcbiAgICAnNTA2Jzoge1xyXG4gICAgICAgICdjb2RlJzogNTA2LFxyXG4gICAgICAgICd0ZXh0JzogJ1ZhcmlhbnQgQWxzbyBOZWdvdGlhdGVzJyxcclxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgaGFzIGFuIGludGVybmFsIGNvbmZpZ3VyYXRpb24gZXJyb3I6IHRoZSBjaG9zZW4gdmFyaWFudCByZXNvdXJjZSBpcyBjb25maWd1cmVkIHRvIGVuZ2FnZSBpbiB0cmFuc3BhcmVudCBjb250ZW50IG5lZ290aWF0aW9uIGl0c2VsZiwgYW5kIGlzIHRoZXJlZm9yZSBub3QgYSBwcm9wZXIgZW5kIHBvaW50IGluIHRoZSBuZWdvdGlhdGlvbiBwcm9jZXNzLlxcXCInLFxyXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzIyOTUjOC4xJyxcclxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzIyOTUjc2VjdGlvbi04LjEnXHJcbiAgICB9LFxyXG4gICAgJzUwNyc6IHtcclxuICAgICAgICAnY29kZSc6IDUwNyxcclxuICAgICAgICAndGV4dCc6ICdJbnN1ZmZpY2llbnQgU3RvcmFnZScsXHJcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcVGhlIG1ldGhvZCBjb3VsZCBub3QgYmUgcGVyZm9ybWVkIG9uIHRoZSByZXNvdXJjZSBiZWNhdXNlIHRoZSBzZXJ2ZXIgaXMgdW5hYmxlIHRvIHN0b3JlIHRoZSByZXByZXNlbnRhdGlvbiBuZWVkZWQgdG8gc3VjY2Vzc2Z1bGx5IGNvbXBsZXRlIHRoZSByZXF1ZXN0LlxcXCInLFxyXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzUyMTgjMTAuNicsXHJcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNTE4I3NlY3Rpb24tMTAuNidcclxuICAgIH0sXHJcbiAgICAnNTExJzoge1xyXG4gICAgICAgICdjb2RlJzogNTExLFxyXG4gICAgICAgICd0ZXh0JzogJ05ldHdvcmsgQXV0aGVudGljYXRpb24gUmVxdWlyZWQnLFxyXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIGNsaWVudCBuZWVkcyB0byBhdXRoZW50aWNhdGUgdG8gZ2FpbiBuZXR3b3JrIGFjY2Vzcy5cXFwiJyxcclxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM2NTg1IzYnLFxyXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjU4NSNzZWN0aW9uLTYnXHJcbiAgICB9XHJcbn07XHJcbi8qKlxyXG4gKiBnZXQgdGhlIHN0YXR1cyB0ZXh0IGZyb20gU3RhdHVzQ29kZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXR1c1RleHQoc3RhdHVzKSB7XHJcbiAgICByZXR1cm4gU1RBVFVTX0NPREVfSU5GT1tzdGF0dXNdLnRleHQgfHwgJ1Vua25vd24gU3RhdHVzJztcclxufVxyXG4vKipcclxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB0aGUgSHR0cCBTdGF0dXMgQ29kZSBpcyAyMDAtMjk5IChzdWNjZXNzKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU3VjY2VzcyhzdGF0dXMpIHsgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwOyB9XHJcbjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHR0cC1zdGF0dXMtY29kZXMuanMubWFwIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG4vLyBSZXBsYWNlcyB1c2Ugb2YgUnhKUyBkZWxheS4gU2VlIHYwLjUuNC5cclxuLyoqIGFkZHMgc3BlY2lmaWVkIGRlbGF5IChpbiBtcykgdG8gYm90aCBuZXh0IGFuZCBlcnJvciBjaGFubmVscyBvZiB0aGUgcmVzcG9uc2Ugb2JzZXJ2YWJsZSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVsYXlSZXNwb25zZShyZXNwb25zZSQsIGRlbGF5TXMpIHtcclxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICB2YXIgY29tcGxldGVQZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIG5leHRQZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IHJlc3BvbnNlJC5zdWJzY3JpYmUoZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIG5leHRQZW5kaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGlmIChjb21wbGV0ZVBlbmRpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBkZWxheU1zKTtcclxuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gb2JzZXJ2ZXIuZXJyb3IoZXJyb3IpOyB9LCBkZWxheU1zKTsgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb21wbGV0ZVBlbmRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoIW5leHRQZW5kaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZWxheS1yZXNwb25zZS5qcy5tYXAiLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vKipcclxuKiBJbnRlcmZhY2UgZm9yIGEgY2xhc3MgdGhhdCBjcmVhdGVzIGFuIGluLW1lbW9yeSBkYXRhYmFzZVxyXG4qXHJcbiogSXRzIGBjcmVhdGVEYmAgbWV0aG9kIGNyZWF0ZXMgYSBoYXNoIG9mIG5hbWVkIGNvbGxlY3Rpb25zIHRoYXQgcmVwcmVzZW50cyB0aGUgZGF0YWJhc2VcclxuKlxyXG4qIEZvciBtYXhpbXVtIGZsZXhpYmlsaXR5LCB0aGUgc2VydmljZSBtYXkgZGVmaW5lIEhUVFAgbWV0aG9kIG92ZXJyaWRlcy5cclxuKiBTdWNoIG1ldGhvZHMgbXVzdCBtYXRjaCB0aGUgc3BlbGxpbmcgb2YgYW4gSFRUUCBtZXRob2QgaW4gbG93ZXIgY2FzZSAoZS5nLCBcImdldFwiKS5cclxuKiBJZiBhIHJlcXVlc3QgaGFzIGEgbWF0Y2hpbmcgbWV0aG9kLCBpdCB3aWxsIGJlIGNhbGxlZCBhcyBpblxyXG4qIGBnZXQoaW5mbzogcmVxdWVzdEluZm8sIGRiOiB7fSlgIHdoZXJlIGBkYmAgaXMgdGhlIGRhdGFiYXNlIG9iamVjdCBkZXNjcmliZWQgYWJvdmUuXHJcbiovXHJcbnZhciBJbk1lbW9yeURiU2VydmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEluTWVtb3J5RGJTZXJ2aWNlKCkge1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEluTWVtb3J5RGJTZXJ2aWNlO1xyXG59KCkpO1xyXG5leHBvcnQgeyBJbk1lbW9yeURiU2VydmljZSB9O1xyXG4vKipcclxuKiBJbnRlcmZhY2UgZm9yIEluTWVtb3J5QmFja2VuZCBjb25maWd1cmF0aW9uIG9wdGlvbnNcclxuKi9cclxudmFyIEluTWVtb3J5QmFja2VuZENvbmZpZ0FyZ3MgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBJbk1lbW9yeUJhY2tlbmRDb25maWdBcmdzKCkge1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEluTWVtb3J5QmFja2VuZENvbmZpZ0FyZ3M7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IEluTWVtb3J5QmFja2VuZENvbmZpZ0FyZ3MgfTtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8qKlxyXG4qICBJbk1lbW9yeUJhY2tlbmRTZXJ2aWNlIGNvbmZpZ3VyYXRpb24gb3B0aW9uc1xyXG4qICBVc2FnZTpcclxuKiAgICBJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290KEluTWVtSGVyb1NlcnZpY2UsIHtkZWxheTogNjAwfSlcclxuKlxyXG4qICBvciBpZiBwcm92aWRpbmcgc2VwYXJhdGVseTpcclxuKiAgICBwcm92aWRlKEluTWVtb3J5QmFja2VuZENvbmZpZywge3VzZVZhbHVlOiB7ZGVsYXk6IDYwMH19KSxcclxuKi9cclxudmFyIEluTWVtb3J5QmFja2VuZENvbmZpZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEluTWVtb3J5QmFja2VuZENvbmZpZyhjb25maWcpIHtcclxuICAgICAgICBpZiAoY29uZmlnID09PSB2b2lkIDApIHsgY29uZmlnID0ge307IH1cclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHtcclxuICAgICAgICAgICAgLy8gZGVmYXVsdCBjb25maWc6XHJcbiAgICAgICAgICAgIGNhc2VTZW5zaXRpdmVTZWFyY2g6IGZhbHNlLFxyXG4gICAgICAgICAgICBkYXRhRW5jYXBzdWxhdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIGRlbGF5OiA1MDAsXHJcbiAgICAgICAgICAgIGRlbGV0ZTQwNDogZmFsc2UsXHJcbiAgICAgICAgICAgIHBhc3NUaHJ1VW5rbm93blVybDogZmFsc2UsXHJcbiAgICAgICAgICAgIHBvc3QyMDQ6IHRydWUsXHJcbiAgICAgICAgICAgIHBvc3Q0MDk6IGZhbHNlLFxyXG4gICAgICAgICAgICBwdXQyMDQ6IHRydWUsXHJcbiAgICAgICAgICAgIHB1dDQwNDogZmFsc2UsXHJcbiAgICAgICAgICAgIGFwaUJhc2U6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgaG9zdDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICByb290UGF0aDogdW5kZWZpbmVkIC8vIGRlZmF1bHQgdmFsdWUgaXMgYWN0dWFsbHkgc2V0IGluIEluTWVtb3J5QmFja2VuZFNlcnZpY2UgY3RvclxyXG4gICAgICAgIH0sIGNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICBJbk1lbW9yeUJhY2tlbmRDb25maWcgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBJbmplY3RhYmxlKCksXHJcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtJbk1lbW9yeUJhY2tlbmRDb25maWdBcmdzXSlcclxuICAgIF0sIEluTWVtb3J5QmFja2VuZENvbmZpZyk7XHJcbiAgICByZXR1cm4gSW5NZW1vcnlCYWNrZW5kQ29uZmlnO1xyXG59KCkpO1xyXG5leHBvcnQgeyBJbk1lbW9yeUJhY2tlbmRDb25maWcgfTtcclxuLyoqIFJldHVybiBpbmZvcm1hdGlvbiAoVXJpSW5mbykgYWJvdXQgYSBVUkkgICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVVyaShzdHIpIHtcclxuICAgIC8vIEFkYXB0ZWQgZnJvbSBwYXJzZXVyaSBwYWNrYWdlIC0gaHR0cDovL2Jsb2cuc3RldmVubGV2aXRoYW4uY29tL2FyY2hpdmVzL3BhcnNldXJpXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXHJcbiAgICB2YXIgVVJMX1JFR0VYID0gL14oPzooPyFbXjpAXSs6W146QFxcL10qQCkoW146XFwvPyMuXSspOik/KD86XFwvXFwvKT8oKD86KChbXjpAXSopKD86OihbXjpAXSopKT8pP0ApPyhbXjpcXC8/I10qKSg/OjooXFxkKikpPykoKChcXC8oPzpbXj8jXSg/IVtePyNcXC9dKlxcLltePyNcXC8uXSsoPzpbPyNdfCQpKSkqXFwvPyk/KFtePyNcXC9dKikpKD86XFw/KFteI10qKSk/KD86IyguKikpPykvO1xyXG4gICAgdmFyIG0gPSBVUkxfUkVHRVguZXhlYyhzdHIpO1xyXG4gICAgdmFyIHVyaSA9IHtcclxuICAgICAgICBzb3VyY2U6ICcnLFxyXG4gICAgICAgIHByb3RvY29sOiAnJyxcclxuICAgICAgICBhdXRob3JpdHk6ICcnLFxyXG4gICAgICAgIHVzZXJJbmZvOiAnJyxcclxuICAgICAgICB1c2VyOiAnJyxcclxuICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgaG9zdDogJycsXHJcbiAgICAgICAgcG9ydDogJycsXHJcbiAgICAgICAgcmVsYXRpdmU6ICcnLFxyXG4gICAgICAgIHBhdGg6ICcnLFxyXG4gICAgICAgIGRpcmVjdG9yeTogJycsXHJcbiAgICAgICAgZmlsZTogJycsXHJcbiAgICAgICAgcXVlcnk6ICcnLFxyXG4gICAgICAgIGFuY2hvcjogJydcclxuICAgIH07XHJcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHVyaSk7XHJcbiAgICB2YXIgaSA9IGtleXMubGVuZ3RoO1xyXG4gICAgd2hpbGUgKGktLSkge1xyXG4gICAgICAgIHVyaVtrZXlzW2ldXSA9IG1baV0gfHwgJyc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXJpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUcmFpbGluZ1NsYXNoKHBhdGgpIHtcclxuICAgIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJyk7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW50ZXJmYWNlcy5qcy5tYXAiLCJpbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QsIG9mLCBmcm9tIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNvbmNhdE1hcCwgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IGdldFN0YXR1c1RleHQsIGlzU3VjY2VzcywgU1RBVFVTIH0gZnJvbSAnLi9odHRwLXN0YXR1cy1jb2Rlcyc7XHJcbmltcG9ydCB7IGRlbGF5UmVzcG9uc2UgfSBmcm9tICcuL2RlbGF5LXJlc3BvbnNlJztcclxuaW1wb3J0IHsgSW5NZW1vcnlCYWNrZW5kQ29uZmlnLCBwYXJzZVVyaSwgcmVtb3ZlVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcbi8qKlxyXG4gKiBCYXNlIGNsYXNzIGZvciBpbi1tZW1vcnkgd2ViIGFwaSBiYWNrLWVuZHNcclxuICogU2ltdWxhdGUgdGhlIGJlaGF2aW9yIG9mIGEgUkVTVHkgd2ViIGFwaVxyXG4gKiBiYWNrZWQgYnkgdGhlIHNpbXBsZSBpbi1tZW1vcnkgZGF0YSBzdG9yZSBwcm92aWRlZCBieSB0aGUgaW5qZWN0ZWQgYEluTWVtb3J5RGJTZXJ2aWNlYCBzZXJ2aWNlLlxyXG4gKiBDb25mb3JtcyBtb3N0bHkgdG8gYmVoYXZpb3IgZGVzY3JpYmVkIGhlcmU6XHJcbiAqIGh0dHA6Ly93d3cucmVzdGFwaXR1dG9yaWFsLmNvbS9sZXNzb25zL2h0dHBtZXRob2RzLmh0bWxcclxuICovXHJcbnZhciBCYWNrZW5kU2VydmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEJhY2tlbmRTZXJ2aWNlKGluTWVtRGJTZXJ2aWNlLCBjb25maWcpIHtcclxuICAgICAgICBpZiAoY29uZmlnID09PSB2b2lkIDApIHsgY29uZmlnID0ge307IH1cclxuICAgICAgICB0aGlzLmluTWVtRGJTZXJ2aWNlID0gaW5NZW1EYlNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBuZXcgSW5NZW1vcnlCYWNrZW5kQ29uZmlnKCk7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0SW5mb1V0aWxzID0gdGhpcy5nZXRSZXF1ZXN0SW5mb1V0aWxzKCk7XHJcbiAgICAgICAgdmFyIGxvYyA9IHRoaXMuZ2V0TG9jYXRpb24oJy8nKTtcclxuICAgICAgICB0aGlzLmNvbmZpZy5ob3N0ID0gbG9jLmhvc3Q7IC8vIGRlZmF1bHQgdG8gYXBwIHdlYiBzZXJ2ZXIgaG9zdFxyXG4gICAgICAgIHRoaXMuY29uZmlnLnJvb3RQYXRoID0gbG9jLnBhdGg7IC8vIGRlZmF1bHQgdG8gcGF0aCB3aGVuIGFwcCBpcyBzZXJ2ZWQgKGUuZy4nLycpXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmNvbmZpZywgY29uZmlnKTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCYWNrZW5kU2VydmljZS5wcm90b3R5cGUsIFwiZGJSZWFkeVwiLCB7XHJcbiAgICAgICAgLy8vLyAgcHJvdGVjdGVkIC8vLy8vXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kYlJlYWR5U3ViamVjdCkge1xyXG4gICAgICAgICAgICAgICAgLy8gZmlyc3QgdGltZSB0aGUgc2VydmljZSBpcyBjYWxsZWQuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRiUmVhZHlTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0RGIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYlJlYWR5U3ViamVjdC5hc09ic2VydmFibGUoKS5waXBlKGZpcnN0KGZ1bmN0aW9uIChyKSB7IHJldHVybiByOyB9KSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAvKipcclxuICAgICAqIFByb2Nlc3MgUmVxdWVzdCBhbmQgcmV0dXJuIGFuIE9ic2VydmFibGUgb2YgSHR0cCBSZXNwb25zZSBvYmplY3RcclxuICAgICAqIGluIHRoZSBtYW5uZXIgb2YgYSBSRVNUeSB3ZWIgYXBpLlxyXG4gICAgICpcclxuICAgICAqIEV4cGVjdCBVUkkgcGF0dGVybiBpbiB0aGUgZm9ybSA6YmFzZS86Y29sbGVjdGlvbk5hbWUvOmlkP1xyXG4gICAgICogRXhhbXBsZXM6XHJcbiAgICAgKiAgIC8vIGZvciBzdG9yZSB3aXRoIGEgJ2N1c3RvbWVycycgY29sbGVjdGlvblxyXG4gICAgICogICBHRVQgYXBpL2N1c3RvbWVycyAgICAgICAgICAvLyBhbGwgY3VzdG9tZXJzXHJcbiAgICAgKiAgIEdFVCBhcGkvY3VzdG9tZXJzLzQyICAgICAgIC8vIHRoZSBjaGFyYWN0ZXIgd2l0aCBpZD00MlxyXG4gICAgICogICBHRVQgYXBpL2N1c3RvbWVycz9uYW1lPV5qICAvLyAnaicgaXMgYSByZWdleDsgcmV0dXJucyBjdXN0b21lcnMgd2hvc2UgbmFtZSBzdGFydHMgd2l0aCAnaicgb3IgJ0onXHJcbiAgICAgKiAgIEdFVCBhcGkvY3VzdG9tZXJzLmpzb24vNDIgIC8vIGlnbm9yZXMgdGhlIFwiLmpzb25cIlxyXG4gICAgICpcclxuICAgICAqIEFsc28gYWNjZXB0cyBkaXJlY3QgY29tbWFuZHMgdG8gdGhlIHNlcnZpY2UgaW4gd2hpY2ggdGhlIGxhc3Qgc2VnbWVudCBvZiB0aGUgYXBpQmFzZSBpcyB0aGUgd29yZCBcImNvbW1hbmRzXCJcclxuICAgICAqIEV4YW1wbGVzOlxyXG4gICAgICogICAgIFBPU1QgY29tbWFuZHMvcmVzZXREYixcclxuICAgICAqICAgICBHRVQvUE9TVCBjb21tYW5kcy9jb25maWcgLSBnZXQgb3IgKHJlKXNldCB0aGUgY29uZmlnXHJcbiAgICAgKlxyXG4gICAgICogICBIVFRQIG92ZXJyaWRlczpcclxuICAgICAqICAgICBJZiB0aGUgaW5qZWN0ZWQgaW5NZW1EYlNlcnZpY2UgZGVmaW5lcyBhbiBIVFRQIG1ldGhvZCAobG93ZXJjYXNlKVxyXG4gICAgICogICAgIFRoZSByZXF1ZXN0IGlzIGZvcndhcmRlZCB0byB0aGF0IG1ldGhvZCBhcyBpblxyXG4gICAgICogICAgIGBpbk1lbURiU2VydmljZS5nZXQocmVxdWVzdEluZm8pYFxyXG4gICAgICogICAgIHdoaWNoIG11c3QgcmV0dXJuIGVpdGhlciBhbiBPYnNlcnZhYmxlIG9mIHRoZSByZXNwb25zZSB0eXBlXHJcbiAgICAgKiAgICAgZm9yIHRoaXMgaHR0cCBsaWJyYXJ5IG9yIG51bGx8dW5kZWZpbmVkICh3aGljaCBtZWFucyBcImtlZXAgcHJvY2Vzc2luZ1wiKS5cclxuICAgICAqL1xyXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmhhbmRsZVJlcXVlc3QgPSBmdW5jdGlvbiAocmVxKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAvLyAgaGFuZGxlIHRoZSByZXF1ZXN0IHdoZW4gdGhlcmUgaXMgYW4gaW4tbWVtb3J5IGRhdGFiYXNlXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGJSZWFkeS5waXBlKGNvbmNhdE1hcChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5oYW5kbGVSZXF1ZXN0XyhyZXEpOyB9KSk7XHJcbiAgICB9O1xyXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmhhbmRsZVJlcXVlc3RfID0gZnVuY3Rpb24gKHJlcSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHVybCA9IHJlcS51cmxXaXRoUGFyYW1zID8gcmVxLnVybFdpdGhQYXJhbXMgOiByZXEudXJsO1xyXG4gICAgICAgIC8vIFRyeSBvdmVycmlkZSBwYXJzZXJcclxuICAgICAgICAvLyBJZiBubyBvdmVycmlkZSBwYXJzZXIgb3IgaXQgcmV0dXJucyBub3RoaW5nLCB1c2UgZGVmYXVsdCBwYXJzZXJcclxuICAgICAgICB2YXIgcGFyc2VyID0gdGhpcy5iaW5kKCdwYXJzZVJlcXVlc3RVcmwnKTtcclxuICAgICAgICB2YXIgcGFyc2VkID0gKHBhcnNlciAmJiBwYXJzZXIodXJsLCB0aGlzLnJlcXVlc3RJbmZvVXRpbHMpKSB8fFxyXG4gICAgICAgICAgICB0aGlzLnBhcnNlUmVxdWVzdFVybCh1cmwpO1xyXG4gICAgICAgIHZhciBjb2xsZWN0aW9uTmFtZSA9IHBhcnNlZC5jb2xsZWN0aW9uTmFtZTtcclxuICAgICAgICB2YXIgY29sbGVjdGlvbiA9IHRoaXMuZGJbY29sbGVjdGlvbk5hbWVdO1xyXG4gICAgICAgIHZhciByZXFJbmZvID0ge1xyXG4gICAgICAgICAgICByZXE6IHJlcSxcclxuICAgICAgICAgICAgYXBpQmFzZTogcGFyc2VkLmFwaUJhc2UsXHJcbiAgICAgICAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb24sXHJcbiAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lOiBjb2xsZWN0aW9uTmFtZSxcclxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5jcmVhdGVIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcclxuICAgICAgICAgICAgaWQ6IHRoaXMucGFyc2VJZChjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSwgcGFyc2VkLmlkKSxcclxuICAgICAgICAgICAgbWV0aG9kOiB0aGlzLmdldFJlcXVlc3RNZXRob2QocmVxKSxcclxuICAgICAgICAgICAgcXVlcnk6IHBhcnNlZC5xdWVyeSxcclxuICAgICAgICAgICAgcmVzb3VyY2VVcmw6IHBhcnNlZC5yZXNvdXJjZVVybCxcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIHV0aWxzOiB0aGlzLnJlcXVlc3RJbmZvVXRpbHNcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciByZXNPcHRpb25zO1xyXG4gICAgICAgIGlmICgvY29tbWFuZHNcXC8/JC9pLnRlc3QocmVxSW5mby5hcGlCYXNlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21tYW5kcyhyZXFJbmZvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG1ldGhvZEludGVyY2VwdG9yID0gdGhpcy5iaW5kKHJlcUluZm8ubWV0aG9kKTtcclxuICAgICAgICBpZiAobWV0aG9kSW50ZXJjZXB0b3IpIHtcclxuICAgICAgICAgICAgLy8gSW5NZW1vcnlEYlNlcnZpY2UgaW50ZXJjZXB0cyB0aGlzIEhUVFAgbWV0aG9kLlxyXG4gICAgICAgICAgICAvLyBpZiBpbnRlcmNlcHRvciBwcm9kdWNlZCBhIHJlc3BvbnNlLCByZXR1cm4gaXQuXHJcbiAgICAgICAgICAgIC8vIGVsc2UgSW5NZW1vcnlEYlNlcnZpY2UgY2hvc2Ugbm90IHRvIGludGVyY2VwdDsgY29udGludWUgcHJvY2Vzc2luZy5cclxuICAgICAgICAgICAgdmFyIGludGVyY2VwdG9yUmVzcG9uc2UgPSBtZXRob2RJbnRlcmNlcHRvcihyZXFJbmZvKTtcclxuICAgICAgICAgICAgaWYgKGludGVyY2VwdG9yUmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbnRlcmNlcHRvclJlc3BvbnNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGJbY29sbGVjdGlvbk5hbWVdKSB7XHJcbiAgICAgICAgICAgIC8vIHJlcXVlc3QgaXMgZm9yIGEga25vd24gY29sbGVjdGlvbiBvZiB0aGUgSW5NZW1vcnlEYlNlcnZpY2VcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUmVzcG9uc2UkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmNvbGxlY3Rpb25IYW5kbGVyKHJlcUluZm8pOyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLnBhc3NUaHJ1VW5rbm93blVybCkge1xyXG4gICAgICAgICAgICAvLyB1bmtub3duIGNvbGxlY3Rpb247IHBhc3MgcmVxdWVzdCB0aHJ1IHRvIGEgXCJyZWFsXCIgYmFja2VuZC5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UGFzc1RocnVCYWNrZW5kKCkuaGFuZGxlKHJlcSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIDQwNCAtIGNhbid0IGhhbmRsZSB0aGlzIHJlcXVlc3RcclxuICAgICAgICByZXNPcHRpb25zID0gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5OT1RfRk9VTkQsIFwiQ29sbGVjdGlvbiAnXCIgKyBjb2xsZWN0aW9uTmFtZSArIFwiJyBub3QgZm91bmRcIik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUmVzcG9uc2UkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc09wdGlvbnM7IH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQWRkIGNvbmZpZ3VyZWQgZGVsYXkgdG8gcmVzcG9uc2Ugb2JzZXJ2YWJsZSB1bmxlc3MgZGVsYXkgPT09IDBcclxuICAgICAqL1xyXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmFkZERlbGF5ID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgdmFyIGQgPSB0aGlzLmNvbmZpZy5kZWxheTtcclxuICAgICAgICByZXR1cm4gZCA9PT0gMCA/IHJlc3BvbnNlIDogZGVsYXlSZXNwb25zZShyZXNwb25zZSwgZCB8fCA1MDApO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQXBwbHkgcXVlcnkvc2VhcmNoIHBhcmFtZXRlcnMgYXMgYSBmaWx0ZXIgb3ZlciB0aGUgY29sbGVjdGlvblxyXG4gICAgICogVGhpcyBpbXBsIG9ubHkgc3VwcG9ydHMgUmVnRXhwIHF1ZXJpZXMgb24gc3RyaW5nIHByb3BlcnRpZXMgb2YgdGhlIGNvbGxlY3Rpb25cclxuICAgICAqIEFORHMgdGhlIGNvbmRpdGlvbnMgdG9nZXRoZXJcclxuICAgICAqL1xyXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmFwcGx5UXVlcnkgPSBmdW5jdGlvbiAoY29sbGVjdGlvbiwgcXVlcnkpIHtcclxuICAgICAgICAvLyBleHRyYWN0IGZpbHRlcmluZyBjb25kaXRpb25zIC0ge3Byb3BlcnR5TmFtZSwgUmVnRXhwcykgLSBmcm9tIHF1ZXJ5L3NlYXJjaCBwYXJhbWV0ZXJzXHJcbiAgICAgICAgdmFyIGNvbmRpdGlvbnMgPSBbXTtcclxuICAgICAgICB2YXIgY2FzZVNlbnNpdGl2ZSA9IHRoaXMuY29uZmlnLmNhc2VTZW5zaXRpdmVTZWFyY2ggPyB1bmRlZmluZWQgOiAnaSc7XHJcbiAgICAgICAgcXVlcnkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIG5hbWUpIHtcclxuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbiAodikgeyByZXR1cm4gY29uZGl0aW9ucy5wdXNoKHsgbmFtZTogbmFtZSwgcng6IG5ldyBSZWdFeHAoZGVjb2RlVVJJKHYpLCBjYXNlU2Vuc2l0aXZlKSB9KTsgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIGxlbiA9IGNvbmRpdGlvbnMubGVuZ3RoO1xyXG4gICAgICAgIGlmICghbGVuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xsZWN0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBTkQgdGhlIFJlZ0V4cCBjb25kaXRpb25zXHJcbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb24uZmlsdGVyKGZ1bmN0aW9uIChyb3cpIHtcclxuICAgICAgICAgICAgdmFyIG9rID0gdHJ1ZTtcclxuICAgICAgICAgICAgdmFyIGkgPSBsZW47XHJcbiAgICAgICAgICAgIHdoaWxlIChvayAmJiBpKSB7XHJcbiAgICAgICAgICAgICAgICBpIC09IDE7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29uZCA9IGNvbmRpdGlvbnNbaV07XHJcbiAgICAgICAgICAgICAgICBvayA9IGNvbmQucngudGVzdChyb3dbY29uZC5uYW1lXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG9rO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogR2V0IGEgbWV0aG9kIGZyb20gdGhlIGBJbk1lbW9yeURiU2VydmljZWAgKGlmIGl0IGV4aXN0cyksIGJvdW5kIHRvIHRoYXQgc2VydmljZVxyXG4gICAgICovXHJcbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChtZXRob2ROYW1lKSB7XHJcbiAgICAgICAgdmFyIGZuID0gdGhpcy5pbk1lbURiU2VydmljZVttZXRob2ROYW1lXTtcclxuICAgICAgICByZXR1cm4gZm4gPyBmbi5iaW5kKHRoaXMuaW5NZW1EYlNlcnZpY2UpIDogdW5kZWZpbmVkO1xyXG4gICAgfTtcclxuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5ib2RpZnkgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5kYXRhRW5jYXBzdWxhdGlvbiA/IHsgZGF0YTogZGF0YSB9IDogZGF0YTtcclxuICAgIH07XHJcbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgIH07XHJcbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuY29sbGVjdGlvbkhhbmRsZXIgPSBmdW5jdGlvbiAocmVxSW5mbykge1xyXG4gICAgICAgIC8vIGNvbnN0IHJlcSA9IHJlcUluZm8ucmVxO1xyXG4gICAgICAgIHZhciByZXNPcHRpb25zO1xyXG4gICAgICAgIHN3aXRjaCAocmVxSW5mby5tZXRob2QpIHtcclxuICAgICAgICAgICAgY2FzZSAnZ2V0JzpcclxuICAgICAgICAgICAgICAgIHJlc09wdGlvbnMgPSB0aGlzLmdldChyZXFJbmZvKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdwb3N0JzpcclxuICAgICAgICAgICAgICAgIHJlc09wdGlvbnMgPSB0aGlzLnBvc3QocmVxSW5mbyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncHV0JzpcclxuICAgICAgICAgICAgICAgIHJlc09wdGlvbnMgPSB0aGlzLnB1dChyZXFJbmZvKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdkZWxldGUnOlxyXG4gICAgICAgICAgICAgICAgcmVzT3B0aW9ucyA9IHRoaXMuZGVsZXRlKHJlcUluZm8pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXNPcHRpb25zID0gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyhyZXFJbmZvLnVybCwgU1RBVFVTLk1FVEhPRF9OT1RfQUxMT1dFRCwgJ01ldGhvZCBub3QgYWxsb3dlZCcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIElmIGBpbk1lbURiU2VydmljZS5yZXNwb25zZUludGVyY2VwdG9yYCBleGlzdHMsIGxldCBpdCBtb3JwaCB0aGUgcmVzcG9uc2Ugb3B0aW9uc1xyXG4gICAgICAgIHZhciBpbnRlcmNlcHRvciA9IHRoaXMuYmluZCgncmVzcG9uc2VJbnRlcmNlcHRvcicpO1xyXG4gICAgICAgIHJldHVybiBpbnRlcmNlcHRvciA/IGludGVyY2VwdG9yKHJlc09wdGlvbnMsIHJlcUluZm8pIDogcmVzT3B0aW9ucztcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENvbW1hbmRzIHJlY29uZmlndXJlIHRoZSBpbi1tZW1vcnkgd2ViIGFwaSBzZXJ2aWNlIG9yIGV4dHJhY3QgaW5mb3JtYXRpb24gZnJvbSBpdC5cclxuICAgICAqIENvbW1hbmRzIGlnbm9yZSB0aGUgbGF0ZW5jeSBkZWxheSBhbmQgcmVzcG9uZCBBU0FQLlxyXG4gICAgICpcclxuICAgICAqIFdoZW4gdGhlIGxhc3Qgc2VnbWVudCBvZiB0aGUgYGFwaUJhc2VgIHBhdGggaXMgXCJjb21tYW5kc1wiLFxyXG4gICAgICogdGhlIGBjb2xsZWN0aW9uTmFtZWAgaXMgdGhlIGNvbW1hbmQuXHJcbiAgICAgKlxyXG4gICAgICogRXhhbXBsZSBVUkxzOlxyXG4gICAgICogICBjb21tYW5kcy9yZXNldGRiIChQT1NUKSAvLyBSZXNldCB0aGUgXCJkYXRhYmFzZVwiIHRvIGl0cyBvcmlnaW5hbCBzdGF0ZVxyXG4gICAgICogICBjb21tYW5kcy9jb25maWcgKEdFVCkgICAvLyBSZXR1cm4gdGhpcyBzZXJ2aWNlJ3MgY29uZmlnIG9iamVjdFxyXG4gICAgICogICBjb21tYW5kcy9jb25maWcgKFBPU1QpICAvLyBVcGRhdGUgdGhlIGNvbmZpZyAoZS5nLiB0aGUgZGVsYXkpXHJcbiAgICAgKlxyXG4gICAgICogVXNhZ2U6XHJcbiAgICAgKiAgIGh0dHAucG9zdCgnY29tbWFuZHMvcmVzZXRkYicsIHVuZGVmaW5lZCk7XHJcbiAgICAgKiAgIGh0dHAuZ2V0KCdjb21tYW5kcy9jb25maWcnKTtcclxuICAgICAqICAgaHR0cC5wb3N0KCdjb21tYW5kcy9jb25maWcnLCAne1wiZGVsYXlcIjoxMDAwfScpO1xyXG4gICAgICovXHJcbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuY29tbWFuZHMgPSBmdW5jdGlvbiAocmVxSW5mbykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGNvbW1hbmQgPSByZXFJbmZvLmNvbGxlY3Rpb25OYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgdmFyIG1ldGhvZCA9IHJlcUluZm8ubWV0aG9kO1xyXG4gICAgICAgIHZhciByZXNPcHRpb25zID0ge1xyXG4gICAgICAgICAgICB1cmw6IHJlcUluZm8udXJsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBzd2l0Y2ggKGNvbW1hbmQpIHtcclxuICAgICAgICAgICAgY2FzZSAncmVzZXRkYic6XHJcbiAgICAgICAgICAgICAgICByZXNPcHRpb25zLnN0YXR1cyA9IFNUQVRVUy5OT19DT05URU5UO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzZXREYihyZXFJbmZvKS5waXBlKGNvbmNhdE1hcChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5jcmVhdGVSZXNwb25zZSQoZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVzT3B0aW9uczsgfSwgZmFsc2UgLyogbm8gbGF0ZW5jeSBkZWxheSAqLyk7IH0pKTtcclxuICAgICAgICAgICAgY2FzZSAnY29uZmlnJzpcclxuICAgICAgICAgICAgICAgIGlmIChtZXRob2QgPT09ICdnZXQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzT3B0aW9ucy5zdGF0dXMgPSBTVEFUVVMuT0s7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzT3B0aW9ucy5ib2R5ID0gdGhpcy5jbG9uZSh0aGlzLmNvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYW55IG90aGVyIEhUVFAgbWV0aG9kIGlzIGFzc3VtZWQgdG8gYmUgYSBjb25maWcgdXBkYXRlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYm9keSA9IHRoaXMuZ2V0SnNvbkJvZHkocmVxSW5mby5yZXEpO1xyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5jb25maWcsIGJvZHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFzc1RocnVCYWNrZW5kID0gdW5kZWZpbmVkOyAvLyByZS1jcmVhdGUgd2hlbiBuZWVkZWRcclxuICAgICAgICAgICAgICAgICAgICByZXNPcHRpb25zLnN0YXR1cyA9IFNUQVRVUy5OT19DT05URU5UO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXNPcHRpb25zID0gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyhyZXFJbmZvLnVybCwgU1RBVFVTLklOVEVSTkFMX1NFUlZFUl9FUlJPUiwgXCJVbmtub3duIGNvbW1hbmQgXFxcIlwiICsgY29tbWFuZCArIFwiXFxcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUmVzcG9uc2UkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc09wdGlvbnM7IH0sIGZhbHNlIC8qIG5vIGxhdGVuY3kgZGVsYXkgKi8pO1xyXG4gICAgfTtcclxuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyA9IGZ1bmN0aW9uICh1cmwsIHN0YXR1cywgbWVzc2FnZSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGJvZHk6IHsgZXJyb3I6IFwiXCIgKyBtZXNzYWdlIH0sXHJcbiAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmNyZWF0ZUhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxyXG4gICAgICAgICAgICBzdGF0dXM6IHN0YXR1c1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBjb2xkIHJlc3BvbnNlIE9ic2VydmFibGUgZnJvbSBhIGZhY3RvcnkgZm9yIFJlc3BvbnNlT3B0aW9uc1xyXG4gICAgICogQHBhcmFtIHJlc09wdGlvbnNGYWN0b3J5IC0gY3JlYXRlcyBSZXNwb25zZU9wdGlvbnMgd2hlbiBvYnNlcnZhYmxlIGlzIHN1YnNjcmliZWRcclxuICAgICAqIEBwYXJhbSB3aXRoRGVsYXkgLSBpZiB0cnVlIChkZWZhdWx0KSwgYWRkIHNpbXVsYXRlZCBsYXRlbmN5IGRlbGF5IGZyb20gY29uZmlndXJhdGlvblxyXG4gICAgICovXHJcbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuY3JlYXRlUmVzcG9uc2UkID0gZnVuY3Rpb24gKHJlc09wdGlvbnNGYWN0b3J5LCB3aXRoRGVsYXkpIHtcclxuICAgICAgICBpZiAod2l0aERlbGF5ID09PSB2b2lkIDApIHsgd2l0aERlbGF5ID0gdHJ1ZTsgfVxyXG4gICAgICAgIHZhciByZXNPcHRpb25zJCA9IHRoaXMuY3JlYXRlUmVzcG9uc2VPcHRpb25zJChyZXNPcHRpb25zRmFjdG9yeSk7XHJcbiAgICAgICAgdmFyIHJlc3AkID0gdGhpcy5jcmVhdGVSZXNwb25zZSRmcm9tUmVzcG9uc2VPcHRpb25zJChyZXNPcHRpb25zJCk7XHJcbiAgICAgICAgcmV0dXJuIHdpdGhEZWxheSA/IHRoaXMuYWRkRGVsYXkocmVzcCQpIDogcmVzcCQ7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBjb2xkIE9ic2VydmFibGUgb2YgUmVzcG9uc2VPcHRpb25zLlxyXG4gICAgICogQHBhcmFtIHJlc09wdGlvbnNGYWN0b3J5IC0gY3JlYXRlcyBSZXNwb25zZU9wdGlvbnMgd2hlbiBvYnNlcnZhYmxlIGlzIHN1YnNjcmliZWRcclxuICAgICAqL1xyXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmNyZWF0ZVJlc3BvbnNlT3B0aW9ucyQgPSBmdW5jdGlvbiAocmVzT3B0aW9uc0ZhY3RvcnkpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAocmVzcG9uc2VPYnNlcnZlcikge1xyXG4gICAgICAgICAgICB2YXIgcmVzT3B0aW9ucztcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJlc09wdGlvbnMgPSByZXNPcHRpb25zRmFjdG9yeSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVyciA9IGVycm9yLm1lc3NhZ2UgfHwgZXJyb3I7XHJcbiAgICAgICAgICAgICAgICByZXNPcHRpb25zID0gX3RoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnMoJycsIFNUQVRVUy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsIFwiXCIgKyBlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBzdGF0dXMgPSByZXNPcHRpb25zLnN0YXR1cztcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJlc09wdGlvbnMuc3RhdHVzVGV4dCA9IGdldFN0YXR1c1RleHQoc3RhdHVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkgeyAvKiBpZ25vcmUgZmFpbHVyZSAqLyB9XHJcbiAgICAgICAgICAgIGlmIChpc1N1Y2Nlc3Moc3RhdHVzKSkge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VPYnNlcnZlci5uZXh0KHJlc09wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VPYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VPYnNlcnZlci5lcnJvcihyZXNPcHRpb25zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyB9OyAvLyB1bnN1YnNjcmliZSBmdW5jdGlvblxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICB2YXIgY29sbGVjdGlvbiA9IF9hLmNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lID0gX2EuY29sbGVjdGlvbk5hbWUsIGhlYWRlcnMgPSBfYS5oZWFkZXJzLCBpZCA9IF9hLmlkLCB1cmwgPSBfYS51cmw7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcclxuICAgICAgICBpZiAoaWQgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHVybCwgU1RBVFVTLk5PVF9GT1VORCwgXCJNaXNzaW5nIFxcXCJcIiArIGNvbGxlY3Rpb25OYW1lICsgXCJcXFwiIGlkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZXhpc3RzID0gdGhpcy5yZW1vdmVCeUlkKGNvbGxlY3Rpb24sIGlkKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgICAgICBzdGF0dXM6IChleGlzdHMgfHwgIXRoaXMuY29uZmlnLmRlbGV0ZTQwNCkgPyBTVEFUVVMuTk9fQ09OVEVOVCA6IFNUQVRVUy5OT1RfRk9VTkRcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogRmluZCBmaXJzdCBpbnN0YW5jZSBvZiBpdGVtIGluIGNvbGxlY3Rpb24gYnkgYGl0ZW0uaWRgXHJcbiAgICAgKiBAcGFyYW0gY29sbGVjdGlvblxyXG4gICAgICogQHBhcmFtIGlkXHJcbiAgICAgKi9cclxuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5maW5kQnlJZCA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBpZCkge1xyXG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uLmZpbmQoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0uaWQgPT09IGlkOyB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYXRlIHRoZSBuZXh0IGF2YWlsYWJsZSBpZCBmb3IgaXRlbSBpbiB0aGlzIGNvbGxlY3Rpb25cclxuICAgICAqIFVzZSBtZXRob2QgZnJvbSBgaW5NZW1EYlNlcnZpY2VgIGlmIGl0IGV4aXN0cyBhbmQgcmV0dXJucyBhIHZhbHVlLFxyXG4gICAgICogZWxzZSBkZWxlZ2F0ZXMgdG8gYGdlbklkRGVmYXVsdGAuXHJcbiAgICAgKiBAcGFyYW0gY29sbGVjdGlvbiAtIGNvbGxlY3Rpb24gb2YgaXRlbXMgd2l0aCBgaWRgIGtleSBwcm9wZXJ0eVxyXG4gICAgICovXHJcbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuZ2VuSWQgPSBmdW5jdGlvbiAoY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUpIHtcclxuICAgICAgICB2YXIgZ2VuSWQgPSB0aGlzLmJpbmQoJ2dlbklkJyk7XHJcbiAgICAgICAgaWYgKGdlbklkKSB7XHJcbiAgICAgICAgICAgIHZhciBpZCA9IGdlbklkKGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lKTtcclxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcclxuICAgICAgICAgICAgaWYgKGlkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmdlbklkRGVmYXVsdChjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZhdWx0IGdlbmVyYXRvciBvZiB0aGUgbmV4dCBhdmFpbGFibGUgaWQgZm9yIGl0ZW0gaW4gdGhpcyBjb2xsZWN0aW9uXHJcbiAgICAgKiBUaGlzIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gd29ya3Mgb25seSBmb3IgbnVtZXJpYyBpZHMuXHJcbiAgICAgKiBAcGFyYW0gY29sbGVjdGlvbiAtIGNvbGxlY3Rpb24gb2YgaXRlbXMgd2l0aCBgaWRgIGtleSBwcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIGNvbGxlY3Rpb25OYW1lIC0gbmFtZSBvZiB0aGUgY29sbGVjdGlvblxyXG4gICAgICovXHJcbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuZ2VuSWREZWZhdWx0ID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQ29sbGVjdGlvbklkTnVtZXJpYyhjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ29sbGVjdGlvbiAnXCIgKyBjb2xsZWN0aW9uTmFtZSArIFwiJyBpZCB0eXBlIGlzIG5vbi1udW1lcmljIG9yIHVua25vd24uIENhbiBvbmx5IGdlbmVyYXRlIG51bWVyaWMgaWRzLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG1heElkID0gMDtcclxuICAgICAgICBjb2xsZWN0aW9uLnJlZHVjZShmdW5jdGlvbiAocHJldiwgaXRlbSkge1xyXG4gICAgICAgICAgICBtYXhJZCA9IE1hdGgubWF4KG1heElkLCB0eXBlb2YgaXRlbS5pZCA9PT0gJ251bWJlcicgPyBpdGVtLmlkIDogbWF4SWQpO1xyXG4gICAgICAgIH0sIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgcmV0dXJuIG1heElkICsgMTtcclxuICAgIH07XHJcbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSBfYS5jb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSA9IF9hLmNvbGxlY3Rpb25OYW1lLCBoZWFkZXJzID0gX2EuaGVhZGVycywgaWQgPSBfYS5pZCwgcXVlcnkgPSBfYS5xdWVyeSwgdXJsID0gX2EudXJsO1xyXG4gICAgICAgIHZhciBkYXRhID0gY29sbGVjdGlvbjtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xyXG4gICAgICAgIGlmIChpZCAhPSB1bmRlZmluZWQgJiYgaWQgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSB0aGlzLmZpbmRCeUlkKGNvbGxlY3Rpb24sIGlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocXVlcnkpIHtcclxuICAgICAgICAgICAgZGF0YSA9IHRoaXMuYXBwbHlRdWVyeShjb2xsZWN0aW9uLCBxdWVyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5OT1RfRk9VTkQsIFwiJ1wiICsgY29sbGVjdGlvbk5hbWUgKyBcIicgd2l0aCBpZD0nXCIgKyBpZCArIFwiJyBub3QgZm91bmRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGJvZHk6IHRoaXMuYm9kaWZ5KHRoaXMuY2xvbmUoZGF0YSkpLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgICAgICBzdGF0dXM6IFNUQVRVUy5PS1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgbG9jYXRpb24gaW5mbyBmcm9tIGEgdXJsLCBldmVuIG9uIHNlcnZlciB3aGVyZSBgZG9jdW1lbnRgIGlzIG5vdCBkZWZpbmVkXHJcbiAgICAgKi9cclxuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5nZXRMb2NhdGlvbiA9IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgICAgICBpZiAoIXVybC5zdGFydHNXaXRoKCdodHRwJykpIHtcclxuICAgICAgICAgICAgLy8gZ2V0IHRoZSBkb2N1bWVudCBpZmYgcnVubmluZyBpbiBicm93c2VyXHJcbiAgICAgICAgICAgIHZhciBkb2MgPSAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgPyB1bmRlZmluZWQgOiBkb2N1bWVudDtcclxuICAgICAgICAgICAgLy8gYWRkIGhvc3QgaW5mbyB0byB1cmwgYmVmb3JlIHBhcnNpbmcuICBVc2UgYSBmYWtlIGhvc3Qgd2hlbiBub3QgaW4gYnJvd3Nlci5cclxuICAgICAgICAgICAgdmFyIGJhc2UgPSBkb2MgPyBkb2MubG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgZG9jLmxvY2F0aW9uLmhvc3QgOiAnaHR0cDovL2Zha2UnO1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwuc3RhcnRzV2l0aCgnLycpID8gYmFzZSArIHVybCA6IGJhc2UgKyAnLycgKyB1cmw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXJzZVVyaSh1cmwpO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIC8qKlxyXG4gICAgICogZ2V0IG9yIGNyZWF0ZSB0aGUgZnVuY3Rpb24gdGhhdCBwYXNzZXMgdW5oYW5kbGVkIHJlcXVlc3RzXHJcbiAgICAgKiB0aHJvdWdoIHRvIHRoZSBcInJlYWxcIiBiYWNrZW5kLlxyXG4gICAgICovXHJcbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuZ2V0UGFzc1RocnVCYWNrZW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhc3NUaHJ1QmFja2VuZCA/XHJcbiAgICAgICAgICAgIHRoaXMucGFzc1RocnVCYWNrZW5kIDpcclxuICAgICAgICAgICAgdGhpcy5wYXNzVGhydUJhY2tlbmQgPSB0aGlzLmNyZWF0ZVBhc3NUaHJ1QmFja2VuZCgpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogR2V0IHV0aWxpdHkgbWV0aG9kcyBmcm9tIHRoaXMgc2VydmljZSBpbnN0YW5jZS5cclxuICAgICAqIFVzZWZ1bCB3aXRoaW4gYW4gSFRUUCBtZXRob2Qgb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmdldFJlcXVlc3RJbmZvVXRpbHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjcmVhdGVSZXNwb25zZSQ6IHRoaXMuY3JlYXRlUmVzcG9uc2UkLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIGZpbmRCeUlkOiB0aGlzLmZpbmRCeUlkLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIGlzQ29sbGVjdGlvbklkTnVtZXJpYzogdGhpcy5pc0NvbGxlY3Rpb25JZE51bWVyaWMuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgZ2V0Q29uZmlnOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5jb25maWc7IH0sXHJcbiAgICAgICAgICAgIGdldERiOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5kYjsgfSxcclxuICAgICAgICAgICAgZ2V0SnNvbkJvZHk6IHRoaXMuZ2V0SnNvbkJvZHkuYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgZ2V0TG9jYXRpb246IHRoaXMuZ2V0TG9jYXRpb24uYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgZ2V0UGFzc1RocnVCYWNrZW5kOiB0aGlzLmdldFBhc3NUaHJ1QmFja2VuZC5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICBwYXJzZVJlcXVlc3RVcmw6IHRoaXMucGFyc2VSZXF1ZXN0VXJsLmJpbmQodGhpcyksXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBpZCkge1xyXG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uLmZpbmRJbmRleChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS5pZCA9PT0gaWQ7IH0pO1xyXG4gICAgfTtcclxuICAgIC8qKiBQYXJzZSB0aGUgaWQgYXMgYSBudW1iZXIuIFJldHVybiBvcmlnaW5hbCB2YWx1ZSBpZiBub3QgYSBudW1iZXIuICovXHJcbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUucGFyc2VJZCA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSwgaWQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNDb2xsZWN0aW9uSWROdW1lcmljKGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lKSkge1xyXG4gICAgICAgICAgICAvLyBDYW4ndCBjb25maXJtIHRoYXQgYGlkYCBpcyBhIG51bWVyaWMgdHlwZTsgZG9uJ3QgcGFyc2UgYXMgYSBudW1iZXJcclxuICAgICAgICAgICAgLy8gb3IgZWxzZSBgJzQyJ2AgLT4gYDQyYCBhbmQgX2dldCBieSBpZF8gZmFpbHMuXHJcbiAgICAgICAgICAgIHJldHVybiBpZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGlkTnVtID0gcGFyc2VGbG9hdChpZCk7XHJcbiAgICAgICAgcmV0dXJuIGlzTmFOKGlkTnVtKSA/IGlkIDogaWROdW07XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm4gdHJ1ZSBpZiBjYW4gZGV0ZXJtaW5lIHRoYXQgdGhlIGNvbGxlY3Rpb24ncyBgaXRlbS5pZGAgaXMgYSBudW1iZXJcclxuICAgICAqIFRoaXMgaW1wbGVtZW50YXRpb24gY2FuJ3QgdGVsbCBpZiB0aGUgY29sbGVjdGlvbiBpcyBlbXB0eSBzbyBpdCBhc3N1bWVzIE5PXHJcbiAgICAgKiAqL1xyXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmlzQ29sbGVjdGlvbklkTnVtZXJpYyA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSkge1xyXG4gICAgICAgIC8vIGNvbGxlY3Rpb25OYW1lIG5vdCB1c2VkIG5vdyBidXQgb3ZlcnJpZGUgbWlnaHQgbWFpbnRhaW4gY29sbGVjdGlvbiB0eXBlIGluZm9ybWF0aW9uXHJcbiAgICAgICAgLy8gc28gdGhhdCBpdCBjb3VsZCBrbm93IHRoZSB0eXBlIG9mIHRoZSBgaWRgIGV2ZW4gd2hlbiB0aGUgY29sbGVjdGlvbiBpcyBlbXB0eS5cclxuICAgICAgICByZXR1cm4gISEoY29sbGVjdGlvbiAmJiBjb2xsZWN0aW9uWzBdKSAmJiB0eXBlb2YgY29sbGVjdGlvblswXS5pZCA9PT0gJ251bWJlcic7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBQYXJzZXMgdGhlIHJlcXVlc3QgVVJMIGludG8gYSBgUGFyc2VkUmVxdWVzdFVybGAgb2JqZWN0LlxyXG4gICAgICogUGFyc2luZyBkZXBlbmRzIHVwb24gY2VydGFpbiB2YWx1ZXMgb2YgYGNvbmZpZ2A6IGBhcGlCYXNlYCwgYGhvc3RgLCBhbmQgYHVybFJvb3RgLlxyXG4gICAgICpcclxuICAgICAqIENvbmZpZ3VyaW5nIHRoZSBgYXBpQmFzZWAgeWllbGRzIHRoZSBtb3N0IGludGVyZXN0aW5nIGNoYW5nZXMgdG8gYHBhcnNlUmVxdWVzdFVybGAgYmVoYXZpb3I6XHJcbiAgICAgKiAgIFdoZW4gYXBpQmFzZT11bmRlZmluZWQgYW5kIHVybD0naHR0cDovL2xvY2FsaG9zdC9hcGkvY29sbGVjdGlvbi80MidcclxuICAgICAqICAgICB7YmFzZTogJ2FwaS8nLCBjb2xsZWN0aW9uTmFtZTogJ2NvbGxlY3Rpb24nLCBpZDogJzQyJywgLi4ufVxyXG4gICAgICogICBXaGVuIGFwaUJhc2U9J3NvbWUvYXBpL3Jvb3QvJyBhbmQgdXJsPSdodHRwOi8vbG9jYWxob3N0L3NvbWUvYXBpL3Jvb3QvY29sbGVjdGlvbidcclxuICAgICAqICAgICB7YmFzZTogJ3NvbWUvYXBpL3Jvb3QvJywgY29sbGVjdGlvbk5hbWU6ICdjb2xsZWN0aW9uJywgaWQ6IHVuZGVmaW5lZCwgLi4ufVxyXG4gICAgICogICBXaGVuIGFwaUJhc2U9Jy8nIGFuZCB1cmw9J2h0dHA6Ly9sb2NhbGhvc3QvY29sbGVjdGlvbidcclxuICAgICAqICAgICB7YmFzZTogJy8nLCBjb2xsZWN0aW9uTmFtZTogJ2NvbGxlY3Rpb24nLCBpZDogdW5kZWZpbmVkLCAuLi59XHJcbiAgICAgKlxyXG4gICAgICogVGhlIGFjdHVhbCBhcGkgYmFzZSBzZWdtZW50IHZhbHVlcyBhcmUgaWdub3JlZC4gT25seSB0aGUgbnVtYmVyIG9mIHNlZ21lbnRzIG1hdHRlcnMuXHJcbiAgICAgKiBUaGUgZm9sbG93aW5nIGFwaSBiYXNlIHN0cmluZ3MgYXJlIGNvbnNpZGVyZWQgaWRlbnRpY2FsOiAnYS9iJyB+ICdzb21lL2FwaS8nIH4gYHR3by9zZWdtZW50cydcclxuICAgICAqXHJcbiAgICAgKiBUbyByZXBsYWNlIHRoaXMgZGVmYXVsdCBtZXRob2QsIGFzc2lnbiB5b3VyIGFsdGVybmF0aXZlIHRvIHlvdXIgSW5NZW1EYlNlcnZpY2VbJ3BhcnNlUmVxdWVzdFVybCddXHJcbiAgICAgKi9cclxuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5wYXJzZVJlcXVlc3RVcmwgPSBmdW5jdGlvbiAodXJsKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIGxvYyA9IHRoaXMuZ2V0TG9jYXRpb24odXJsKTtcclxuICAgICAgICAgICAgdmFyIGRyb3AgPSB0aGlzLmNvbmZpZy5yb290UGF0aC5sZW5ndGg7XHJcbiAgICAgICAgICAgIHZhciB1cmxSb290ID0gJyc7XHJcbiAgICAgICAgICAgIGlmIChsb2MuaG9zdCAhPT0gdGhpcy5jb25maWcuaG9zdCkge1xyXG4gICAgICAgICAgICAgICAgLy8gdXJsIGZvciBhIHNlcnZlciBvbiBhIGRpZmZlcmVudCBob3N0IVxyXG4gICAgICAgICAgICAgICAgLy8gYXNzdW1lIGl0J3MgY29sbGVjdGlvbiBpcyBhY3R1YWxseSBoZXJlIHRvby5cclxuICAgICAgICAgICAgICAgIGRyb3AgPSAxOyAvLyB0aGUgbGVhZGluZyBzbGFzaFxyXG4gICAgICAgICAgICAgICAgdXJsUm9vdCA9IGxvYy5wcm90b2NvbCArICcvLycgKyBsb2MuaG9zdCArICcvJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgcGF0aCA9IGxvYy5wYXRoLnN1YnN0cmluZyhkcm9wKTtcclxuICAgICAgICAgICAgdmFyIHBhdGhTZWdtZW50cyA9IHBhdGguc3BsaXQoJy8nKTtcclxuICAgICAgICAgICAgdmFyIHNlZ21lbnRJeCA9IDA7XHJcbiAgICAgICAgICAgIC8vIGFwaUJhc2U6IHRoZSBmcm9udCBwYXJ0IG9mIHRoZSBwYXRoIGRldm90ZWQgdG8gZ2V0dGluZyB0byB0aGUgYXBpIHJvdXRlXHJcbiAgICAgICAgICAgIC8vIEFzc3VtZXMgZmlyc3QgcGF0aCBzZWdtZW50IGlmIG5vIGNvbmZpZy5hcGlCYXNlXHJcbiAgICAgICAgICAgIC8vIGVsc2UgaWdub3JlcyBhcyBtYW55IHBhdGggc2VnbWVudHMgYXMgYXJlIGluIGNvbmZpZy5hcGlCYXNlXHJcbiAgICAgICAgICAgIC8vIERvZXMgTk9UIGNhcmUgd2hhdCB0aGUgYXBpIGJhc2UgY2hhcnMgYWN0dWFsbHkgYXJlLlxyXG4gICAgICAgICAgICB2YXIgYXBpQmFzZSA9IHZvaWQgMDtcclxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLmFwaUJhc2UgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBhcGlCYXNlID0gcGF0aFNlZ21lbnRzW3NlZ21lbnRJeCsrXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFwaUJhc2UgPSByZW1vdmVUcmFpbGluZ1NsYXNoKHRoaXMuY29uZmlnLmFwaUJhc2UudHJpbSgpKTtcclxuICAgICAgICAgICAgICAgIGlmIChhcGlCYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudEl4ID0gYXBpQmFzZS5zcGxpdCgnLycpLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnRJeCA9IDA7IC8vIG5vIGFwaSBiYXNlIGF0IGFsbDsgdW53aXNlIGJ1dCBhbGxvd2VkLlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFwaUJhc2UgKz0gJy8nO1xyXG4gICAgICAgICAgICB2YXIgY29sbGVjdGlvbk5hbWUgPSBwYXRoU2VnbWVudHNbc2VnbWVudEl4KytdO1xyXG4gICAgICAgICAgICAvLyBpZ25vcmUgYW55dGhpbmcgYWZ0ZXIgYSAnLicgKGUuZy4sdGhlIFwianNvblwiIGluIFwiY3VzdG9tZXJzLmpzb25cIilcclxuICAgICAgICAgICAgY29sbGVjdGlvbk5hbWUgPSBjb2xsZWN0aW9uTmFtZSAmJiBjb2xsZWN0aW9uTmFtZS5zcGxpdCgnLicpWzBdO1xyXG4gICAgICAgICAgICB2YXIgaWQgPSBwYXRoU2VnbWVudHNbc2VnbWVudEl4KytdO1xyXG4gICAgICAgICAgICB2YXIgcXVlcnkgPSB0aGlzLmNyZWF0ZVF1ZXJ5TWFwKGxvYy5xdWVyeSk7XHJcbiAgICAgICAgICAgIHZhciByZXNvdXJjZVVybCA9IHVybFJvb3QgKyBhcGlCYXNlICsgY29sbGVjdGlvbk5hbWUgKyAnLyc7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGFwaUJhc2U6IGFwaUJhc2UsIGNvbGxlY3Rpb25OYW1lOiBjb2xsZWN0aW9uTmFtZSwgaWQ6IGlkLCBxdWVyeTogcXVlcnksIHJlc291cmNlVXJsOiByZXNvdXJjZVVybCB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHZhciBtc2cgPSBcInVuYWJsZSB0byBwYXJzZSB1cmwgJ1wiICsgdXJsICsgXCInOyBvcmlnaW5hbCBlcnJvcjogXCIgKyBlcnIubWVzc2FnZTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8vIENyZWF0ZSBlbnRpdHlcclxuICAgIC8vIENhbiB1cGRhdGUgYW4gZXhpc3RpbmcgZW50aXR5IHRvbyBpZiBwb3N0NDA5IGlzIGZhbHNlLlxyXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLnBvc3QgPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICB2YXIgY29sbGVjdGlvbiA9IF9hLmNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lID0gX2EuY29sbGVjdGlvbk5hbWUsIGhlYWRlcnMgPSBfYS5oZWFkZXJzLCBpZCA9IF9hLmlkLCByZXEgPSBfYS5yZXEsIHJlc291cmNlVXJsID0gX2EucmVzb3VyY2VVcmwsIHVybCA9IF9hLnVybDtcclxuICAgICAgICB2YXIgaXRlbSA9IHRoaXMuY2xvbmUodGhpcy5nZXRKc29uQm9keShyZXEpKTtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xyXG4gICAgICAgIGlmIChpdGVtLmlkID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5pZCA9IGlkIHx8IHRoaXMuZ2VuSWQoY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbXNnID0gZXJyLm1lc3NhZ2UgfHwgJyc7XHJcbiAgICAgICAgICAgICAgICBpZiAoL2lkIHR5cGUgaXMgbm9uLW51bWVyaWMvLnRlc3QoZW1zZykpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5VTlBST0NFU1NBQkxFX0VOVFJZLCBlbXNnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsIFwiRmFpbGVkIHRvIGdlbmVyYXRlIG5ldyBpZCBmb3IgJ1wiICsgY29sbGVjdGlvbk5hbWUgKyBcIidcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlkICYmIGlkICE9PSBpdGVtLmlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHVybCwgU1RBVFVTLkJBRF9SRVFVRVNULCBcIlJlcXVlc3QgaWQgZG9lcyBub3QgbWF0Y2ggaXRlbS5pZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlkID0gaXRlbS5pZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGV4aXN0aW5nSXggPSB0aGlzLmluZGV4T2YoY29sbGVjdGlvbiwgaWQpO1xyXG4gICAgICAgIHZhciBib2R5ID0gdGhpcy5ib2RpZnkoaXRlbSk7XHJcbiAgICAgICAgaWYgKGV4aXN0aW5nSXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbGxlY3Rpb24ucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgaGVhZGVycy5zZXQoJ0xvY2F0aW9uJywgcmVzb3VyY2VVcmwgKyAnLycgKyBpZCk7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGhlYWRlcnM6IGhlYWRlcnMsIGJvZHk6IGJvZHksIHN0YXR1czogU1RBVFVTLkNSRUFURUQgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5jb25maWcucG9zdDQwOSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5DT05GTElDVCwgXCInXCIgKyBjb2xsZWN0aW9uTmFtZSArIFwiJyBpdGVtIHdpdGggaWQ9J1wiICsgaWQgKyBcIiBleGlzdHMgYW5kIG1heSBub3QgYmUgdXBkYXRlZCB3aXRoIFBPU1Q7IHVzZSBQVVQgaW5zdGVhZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb2xsZWN0aW9uW2V4aXN0aW5nSXhdID0gaXRlbTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLnBvc3QyMDQgP1xyXG4gICAgICAgICAgICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzLCBzdGF0dXM6IFNUQVRVUy5OT19DT05URU5UIH0gOiAvLyBzdWNjZXNzZnVsOyBubyBjb250ZW50XHJcbiAgICAgICAgICAgICAgICB7IGhlYWRlcnM6IGhlYWRlcnMsIGJvZHk6IGJvZHksIHN0YXR1czogU1RBVFVTLk9LIH07IC8vIHN1Y2Nlc3NmdWw7IHJldHVybiBlbnRpdHlcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8gVXBkYXRlIGV4aXN0aW5nIGVudGl0eVxyXG4gICAgLy8gQ2FuIGNyZWF0ZSBhbiBlbnRpdHkgdG9vIGlmIHB1dDQwNCBpcyBmYWxzZS5cclxuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5wdXQgPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICB2YXIgY29sbGVjdGlvbiA9IF9hLmNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lID0gX2EuY29sbGVjdGlvbk5hbWUsIGhlYWRlcnMgPSBfYS5oZWFkZXJzLCBpZCA9IF9hLmlkLCByZXEgPSBfYS5yZXEsIHVybCA9IF9hLnVybDtcclxuICAgICAgICB2YXIgaXRlbSA9IHRoaXMuY2xvbmUodGhpcy5nZXRKc29uQm9keShyZXEpKTtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xyXG4gICAgICAgIGlmIChpdGVtLmlkID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5OT1RfRk9VTkQsIFwiTWlzc2luZyAnXCIgKyBjb2xsZWN0aW9uTmFtZSArIFwiJyBpZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlkICYmIGlkICE9PSBpdGVtLmlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHVybCwgU1RBVFVTLkJBRF9SRVFVRVNULCBcIlJlcXVlc3QgZm9yICdcIiArIGNvbGxlY3Rpb25OYW1lICsgXCInIGlkIGRvZXMgbm90IG1hdGNoIGl0ZW0uaWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZCA9IGl0ZW0uaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBleGlzdGluZ0l4ID0gdGhpcy5pbmRleE9mKGNvbGxlY3Rpb24sIGlkKTtcclxuICAgICAgICB2YXIgYm9keSA9IHRoaXMuYm9kaWZ5KGl0ZW0pO1xyXG4gICAgICAgIGlmIChleGlzdGluZ0l4ID4gLTEpIHtcclxuICAgICAgICAgICAgY29sbGVjdGlvbltleGlzdGluZ0l4XSA9IGl0ZW07XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5wdXQyMDQgP1xyXG4gICAgICAgICAgICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzLCBzdGF0dXM6IFNUQVRVUy5OT19DT05URU5UIH0gOiAvLyBzdWNjZXNzZnVsOyBubyBjb250ZW50XHJcbiAgICAgICAgICAgICAgICB7IGhlYWRlcnM6IGhlYWRlcnMsIGJvZHk6IGJvZHksIHN0YXR1czogU1RBVFVTLk9LIH07IC8vIHN1Y2Nlc3NmdWw7IHJldHVybiBlbnRpdHlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5jb25maWcucHV0NDA0KSB7XHJcbiAgICAgICAgICAgIC8vIGl0ZW0gdG8gdXBkYXRlIG5vdCBmb3VuZDsgdXNlIFBPU1QgdG8gY3JlYXRlIG5ldyBpdGVtIGZvciB0aGlzIGlkLlxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5OT1RfRk9VTkQsIFwiJ1wiICsgY29sbGVjdGlvbk5hbWUgKyBcIicgaXRlbSB3aXRoIGlkPSdcIiArIGlkICsgXCIgbm90IGZvdW5kIGFuZCBtYXkgbm90IGJlIGNyZWF0ZWQgd2l0aCBQVVQ7IHVzZSBQT1NUIGluc3RlYWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gY3JlYXRlIG5ldyBpdGVtIGZvciBpZCBub3QgZm91bmRcclxuICAgICAgICAgICAgY29sbGVjdGlvbi5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICByZXR1cm4geyBoZWFkZXJzOiBoZWFkZXJzLCBib2R5OiBib2R5LCBzdGF0dXM6IFNUQVRVUy5DUkVBVEVEIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5yZW1vdmVCeUlkID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGlkKSB7XHJcbiAgICAgICAgdmFyIGl4ID0gdGhpcy5pbmRleE9mKGNvbGxlY3Rpb24sIGlkKTtcclxuICAgICAgICBpZiAoaXggPiAtMSkge1xyXG4gICAgICAgICAgICBjb2xsZWN0aW9uLnNwbGljZShpeCwgMSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUZWxsIHlvdXIgaW4tbWVtIFwiZGF0YWJhc2VcIiB0byByZXNldC5cclxuICAgICAqIHJldHVybnMgT2JzZXJ2YWJsZSBvZiB0aGUgZGF0YWJhc2UgYmVjYXVzZSByZXNldHRpbmcgaXQgY291bGQgYmUgYXN5bmNcclxuICAgICAqL1xyXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLnJlc2V0RGIgPSBmdW5jdGlvbiAocmVxSW5mbykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5kYlJlYWR5U3ViamVjdC5uZXh0KGZhbHNlKTtcclxuICAgICAgICB2YXIgZGIgPSB0aGlzLmluTWVtRGJTZXJ2aWNlLmNyZWF0ZURiKHJlcUluZm8pO1xyXG4gICAgICAgIHZhciBkYiQgPSBkYiBpbnN0YW5jZW9mIE9ic2VydmFibGUgPyBkYiA6XHJcbiAgICAgICAgICAgIHR5cGVvZiBkYi50aGVuID09PSAnZnVuY3Rpb24nID8gZnJvbShkYikgOlxyXG4gICAgICAgICAgICAgICAgb2YoZGIpO1xyXG4gICAgICAgIGRiJC5waXBlKGZpcnN0KCkpLnN1YnNjcmliZShmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgICAgICBfdGhpcy5kYiA9IGQ7XHJcbiAgICAgICAgICAgIF90aGlzLmRiUmVhZHlTdWJqZWN0Lm5leHQodHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGJSZWFkeTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQmFja2VuZFNlcnZpY2U7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJhY2tlbmQuc2VydmljZS5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XHJcbn07XHJcbnZhciBfX3BhcmFtID0gKHRoaXMgJiYgdGhpcy5fX3BhcmFtKSB8fCBmdW5jdGlvbiAocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufTtcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cFBhcmFtcywgSHR0cFJlc3BvbnNlLCBIdHRwWGhyQmFja2VuZCwgWGhyRmFjdG9yeSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBTVEFUVVMgfSBmcm9tICcuL2h0dHAtc3RhdHVzLWNvZGVzJztcclxuaW1wb3J0IHsgSW5NZW1vcnlCYWNrZW5kQ29uZmlnLCBJbk1lbW9yeUJhY2tlbmRDb25maWdBcmdzLCBJbk1lbW9yeURiU2VydmljZSB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSAnLi9iYWNrZW5kLnNlcnZpY2UnO1xyXG4vKipcclxuICogRm9yIEFuZ3VsYXIgYEh0dHBDbGllbnRgIHNpbXVsYXRlIHRoZSBiZWhhdmlvciBvZiBhIFJFU1R5IHdlYiBhcGlcclxuICogYmFja2VkIGJ5IHRoZSBzaW1wbGUgaW4tbWVtb3J5IGRhdGEgc3RvcmUgcHJvdmlkZWQgYnkgdGhlIGluamVjdGVkIGBJbk1lbW9yeURiU2VydmljZWAuXHJcbiAqIENvbmZvcm1zIG1vc3RseSB0byBiZWhhdmlvciBkZXNjcmliZWQgaGVyZTpcclxuICogaHR0cDovL3d3dy5yZXN0YXBpdHV0b3JpYWwuY29tL2xlc3NvbnMvaHR0cG1ldGhvZHMuaHRtbFxyXG4gKlxyXG4gKiAjIyMgVXNhZ2VcclxuICpcclxuICogQ3JlYXRlIGFuIGluLW1lbW9yeSBkYXRhIHN0b3JlIGNsYXNzIHRoYXQgaW1wbGVtZW50cyBgSW5NZW1vcnlEYlNlcnZpY2VgLlxyXG4gKiBDYWxsIGBjb25maWdgIHN0YXRpYyBtZXRob2Qgd2l0aCB0aGlzIHNlcnZpY2UgY2xhc3MgYW5kIG9wdGlvbmFsIGNvbmZpZ3VyYXRpb24gb2JqZWN0OlxyXG4gKiBgYGBcclxuICogLy8gb3RoZXIgaW1wb3J0c1xyXG4gKiBpbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG4gKiBpbXBvcnQgeyBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUgfSBmcm9tICdhbmd1bGFyLWluLW1lbW9yeS13ZWItYXBpJztcclxuICpcclxuICogaW1wb3J0IHsgSW5NZW1IZXJvU2VydmljZSwgaW5NZW1Db25maWcgfSBmcm9tICcuLi9hcGkvaW4tbWVtb3J5LWhlcm8uc2VydmljZSc7XHJcbiAqIEBOZ01vZHVsZSh7XHJcbiAqICBpbXBvcnRzOiBbXHJcbiAqICAgIEh0dHBNb2R1bGUsXHJcbiAqICAgIEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290KEluTWVtSGVyb1NlcnZpY2UsIGluTWVtQ29uZmlnKSxcclxuICogICAgLi4uXHJcbiAqICBdLFxyXG4gKiAgLi4uXHJcbiAqIH0pXHJcbiAqIGV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyAuLi4gfVxyXG4gKiBgYGBcclxuICovXHJcbnZhciBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlKGluTWVtRGJTZXJ2aWNlLCBjb25maWcsIHhockZhY3RvcnkpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBpbk1lbURiU2VydmljZSwgY29uZmlnKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnhockZhY3RvcnkgPSB4aHJGYWN0b3J5O1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIEh0dHBDbGllbnRCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuaGFuZGxlID0gZnVuY3Rpb24gKHJlcSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJlcXVlc3QocmVxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHZhciBlcnIgPSBlcnJvci5tZXNzYWdlIHx8IGVycm9yO1xyXG4gICAgICAgICAgICB2YXIgcmVzT3B0aW9uc18xID0gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyhyZXEudXJsLCBTVEFUVVMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLCBcIlwiICsgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUmVzcG9uc2UkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc09wdGlvbnNfMTsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8vLy8gIHByb3RlY3RlZCBvdmVycmlkZXMgLy8vLy9cclxuICAgIEh0dHBDbGllbnRCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuZ2V0SnNvbkJvZHkgPSBmdW5jdGlvbiAocmVxKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcS5ib2R5O1xyXG4gICAgfTtcclxuICAgIEh0dHBDbGllbnRCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuZ2V0UmVxdWVzdE1ldGhvZCA9IGZ1bmN0aW9uIChyZXEpIHtcclxuICAgICAgICByZXR1cm4gKHJlcS5tZXRob2QgfHwgJ2dldCcpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB9O1xyXG4gICAgSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5jcmVhdGVIZWFkZXJzID0gZnVuY3Rpb24gKGhlYWRlcnMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEh0dHBIZWFkZXJzKGhlYWRlcnMpO1xyXG4gICAgfTtcclxuICAgIEh0dHBDbGllbnRCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuY3JlYXRlUXVlcnlNYXAgPSBmdW5jdGlvbiAoc2VhcmNoKSB7XHJcbiAgICAgICAgdmFyIG1hcCA9IG5ldyBNYXAoKTtcclxuICAgICAgICBpZiAoc2VhcmNoKSB7XHJcbiAgICAgICAgICAgIHZhciBwYXJhbXNfMSA9IG5ldyBIdHRwUGFyYW1zKHsgZnJvbVN0cmluZzogc2VhcmNoIH0pO1xyXG4gICAgICAgICAgICBwYXJhbXNfMS5rZXlzKCkuZm9yRWFjaChmdW5jdGlvbiAocCkgeyByZXR1cm4gbWFwLnNldChwLCBwYXJhbXNfMS5nZXRBbGwocCkpOyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1hcDtcclxuICAgIH07XHJcbiAgICBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmNyZWF0ZVJlc3BvbnNlJGZyb21SZXNwb25zZU9wdGlvbnMkID0gZnVuY3Rpb24gKHJlc09wdGlvbnMkKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc09wdGlvbnMkLnBpcGUobWFwKGZ1bmN0aW9uIChvcHRzKSB7IHJldHVybiBuZXcgSHR0cFJlc3BvbnNlKG9wdHMpOyB9KSk7XHJcbiAgICB9O1xyXG4gICAgSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5jcmVhdGVQYXNzVGhydUJhY2tlbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBIdHRwWGhyQmFja2VuZCh0aGlzLnhockZhY3RvcnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgZXgubWVzc2FnZSA9ICdDYW5ub3QgY3JlYXRlIHBhc3NUaHJ1NDA0IGJhY2tlbmQ7ICcgKyAoZXgubWVzc2FnZSB8fCAnJyk7XHJcbiAgICAgICAgICAgIHRocm93IGV4O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBJbmplY3RhYmxlKCksXHJcbiAgICAgICAgX19wYXJhbSgxLCBJbmplY3QoSW5NZW1vcnlCYWNrZW5kQ29uZmlnKSksIF9fcGFyYW0oMSwgT3B0aW9uYWwoKSksXHJcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtJbk1lbW9yeURiU2VydmljZSxcclxuICAgICAgICAgICAgSW5NZW1vcnlCYWNrZW5kQ29uZmlnQXJncyxcclxuICAgICAgICAgICAgWGhyRmFjdG9yeV0pXHJcbiAgICBdLCBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UpO1xyXG4gICAgcmV0dXJuIEh0dHBDbGllbnRCYWNrZW5kU2VydmljZTtcclxufShCYWNrZW5kU2VydmljZSkpO1xyXG5leHBvcnQgeyBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UgfTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHR0cC1jbGllbnQtYmFja2VuZC5zZXJ2aWNlLmpzLm1hcCIsIi8vLy8vLyBIdHRwQ2xpZW50LU9ubHkgdmVyc2lvbiAvLy8vXHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBCYWNrZW5kLCBYaHJGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbk1lbW9yeUJhY2tlbmRDb25maWcsIEluTWVtb3J5RGJTZXJ2aWNlIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSAnLi9odHRwLWNsaWVudC1iYWNrZW5kLnNlcnZpY2UnO1xyXG4vLyBJbnRlcm5hbCAtIENyZWF0ZXMgdGhlIGluLW1lbSBiYWNrZW5kIGZvciB0aGUgSHR0cENsaWVudCBtb2R1bGVcclxuLy8gQW9UIHJlcXVpcmVzIGZhY3RvcnkgdG8gYmUgZXhwb3J0ZWRcclxuZXhwb3J0IGZ1bmN0aW9uIGh0dHBDbGllbnRJbk1lbUJhY2tlbmRTZXJ2aWNlRmFjdG9yeShkYlNlcnZpY2UsIG9wdGlvbnMsIHhockZhY3RvcnkpIHtcclxuICAgIHZhciBiYWNrZW5kID0gbmV3IEh0dHBDbGllbnRCYWNrZW5kU2VydmljZShkYlNlcnZpY2UsIG9wdGlvbnMsIHhockZhY3RvcnkpO1xyXG4gICAgcmV0dXJuIGJhY2tlbmQ7XHJcbn1cclxudmFyIEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZSgpIHtcclxuICAgIH1cclxuICAgIEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZV8xID0gSHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlO1xyXG4gICAgLyoqXHJcbiAgICAqICBSZWRpcmVjdCB0aGUgQW5ndWxhciBgSHR0cENsaWVudGAgWEhSIGNhbGxzXHJcbiAgICAqICB0byBpbi1tZW1vcnkgZGF0YSBzdG9yZSB0aGF0IGltcGxlbWVudHMgYEluTWVtb3J5RGJTZXJ2aWNlYC5cclxuICAgICogIHdpdGggY2xhc3MgdGhhdCBpbXBsZW1lbnRzIEluTWVtb3J5RGJTZXJ2aWNlIGFuZCBjcmVhdGVzIGFuIGluLW1lbW9yeSBkYXRhYmFzZS5cclxuICAgICpcclxuICAgICogIFVzdWFsbHkgaW1wb3J0ZWQgaW4gdGhlIHJvb3QgYXBwbGljYXRpb24gbW9kdWxlLlxyXG4gICAgKiAgQ2FuIGltcG9ydCBpbiBhIGxhenkgZmVhdHVyZSBtb2R1bGUgdG9vLCB3aGljaCB3aWxsIHNoYWRvdyBtb2R1bGVzIGxvYWRlZCBlYXJsaWVyXHJcbiAgICAqXHJcbiAgICAqIEBwYXJhbSB7VHlwZX0gZGJDcmVhdG9yIC0gQ2xhc3MgdGhhdCBjcmVhdGVzIHNlZWQgZGF0YSBmb3IgaW4tbWVtb3J5IGRhdGFiYXNlLiBNdXN0IGltcGxlbWVudCBJbk1lbW9yeURiU2VydmljZS5cclxuICAgICogQHBhcmFtIHtJbk1lbW9yeUJhY2tlbmRDb25maWdBcmdzfSBbb3B0aW9uc11cclxuICAgICpcclxuICAgICogQGV4YW1wbGVcclxuICAgICogSHR0cEluTWVtb3J5V2ViQXBpTW9kdWxlLmZvclJvb3QoZGJDcmVhdG9yKTtcclxuICAgICogSHR0cEluTWVtb3J5V2ViQXBpTW9kdWxlLmZvclJvb3QoZGJDcmVhdG9yLCB7dXNlVmFsdWU6IHtkZWxheTo2MDB9fSk7XHJcbiAgICAqL1xyXG4gICAgSHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlLmZvclJvb3QgPSBmdW5jdGlvbiAoZGJDcmVhdG9yLCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmdNb2R1bGU6IEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZV8xLFxyXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogSW5NZW1vcnlEYlNlcnZpY2UsIHVzZUNsYXNzOiBkYkNyZWF0b3IgfSxcclxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogSW5NZW1vcnlCYWNrZW5kQ29uZmlnLCB1c2VWYWx1ZTogb3B0aW9ucyB9LFxyXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBIdHRwQmFja2VuZCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VGYWN0b3J5OiBodHRwQ2xpZW50SW5NZW1CYWNrZW5kU2VydmljZUZhY3RvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgZGVwczogW0luTWVtb3J5RGJTZXJ2aWNlLCBJbk1lbW9yeUJhY2tlbmRDb25maWcsIFhockZhY3RvcnldIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICpcclxuICAgKiBFbmFibGUgYW5kIGNvbmZpZ3VyZSB0aGUgaW4tbWVtb3J5IHdlYiBhcGkgaW4gYSBsYXp5LWxvYWRlZCBmZWF0dXJlIG1vZHVsZS5cclxuICAgKiBTYW1lIGFzIGBmb3JSb290YC5cclxuICAgKiBUaGlzIGlzIGEgZmVlbC1nb29kIG1ldGhvZCBzbyB5b3UgY2FuIGZvbGxvdyB0aGUgQW5ndWxhciBzdHlsZSBndWlkZSBmb3IgbGF6eS1sb2FkZWQgbW9kdWxlcy5cclxuICAgKi9cclxuICAgIEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JGZWF0dXJlID0gZnVuY3Rpb24gKGRiQ3JlYXRvciwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGVfMS5mb3JSb290KGRiQ3JlYXRvciwgb3B0aW9ucyk7XHJcbiAgICB9O1xyXG4gICAgdmFyIEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZV8xO1xyXG4gICAgSHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlID0gSHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlXzEgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBOZ01vZHVsZSh7fSlcclxuICAgIF0sIEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZSk7XHJcbiAgICByZXR1cm4gSHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlO1xyXG59KCkpO1xyXG5leHBvcnQgeyBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUgfTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHR0cC1jbGllbnQtaW4tbWVtb3J5LXdlYi1hcGkubW9kdWxlLmpzLm1hcCIsIi8vLy8vLyBGb3IgYXBwcyB3aXRoIGJvdGggSHR0cCBhbmQgSHR0cENsaWVudCAvLy8vXHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBCYWNrZW5kLCBYaHJGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbk1lbW9yeUJhY2tlbmRDb25maWcsIEluTWVtb3J5RGJTZXJ2aWNlIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgaHR0cENsaWVudEluTWVtQmFja2VuZFNlcnZpY2VGYWN0b3J5IH0gZnJvbSAnLi9odHRwLWNsaWVudC1pbi1tZW1vcnktd2ViLWFwaS5tb2R1bGUnO1xyXG52YXIgSW5NZW1vcnlXZWJBcGlNb2R1bGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBJbk1lbW9yeVdlYkFwaU1vZHVsZSgpIHtcclxuICAgIH1cclxuICAgIEluTWVtb3J5V2ViQXBpTW9kdWxlXzEgPSBJbk1lbW9yeVdlYkFwaU1vZHVsZTtcclxuICAgIC8qKlxyXG4gICAgKiAgUmVkaXJlY3QgQk9USCBBbmd1bGFyIGBIdHRwYCBhbmQgYEh0dHBDbGllbnRgIFhIUiBjYWxsc1xyXG4gICAgKiAgdG8gaW4tbWVtb3J5IGRhdGEgc3RvcmUgdGhhdCBpbXBsZW1lbnRzIGBJbk1lbW9yeURiU2VydmljZWAuXHJcbiAgICAqICB3aXRoIGNsYXNzIHRoYXQgaW1wbGVtZW50cyBJbk1lbW9yeURiU2VydmljZSBhbmQgY3JlYXRlcyBhbiBpbi1tZW1vcnkgZGF0YWJhc2UuXHJcbiAgICAqXHJcbiAgICAqICBVc3VhbGx5IGltcG9ydGVkIGluIHRoZSByb290IGFwcGxpY2F0aW9uIG1vZHVsZS5cclxuICAgICogIENhbiBpbXBvcnQgaW4gYSBsYXp5IGZlYXR1cmUgbW9kdWxlIHRvbywgd2hpY2ggd2lsbCBzaGFkb3cgbW9kdWxlcyBsb2FkZWQgZWFybGllclxyXG4gICAgKlxyXG4gICAgKiBAcGFyYW0ge1R5cGV9IGRiQ3JlYXRvciAtIENsYXNzIHRoYXQgY3JlYXRlcyBzZWVkIGRhdGEgZm9yIGluLW1lbW9yeSBkYXRhYmFzZS4gTXVzdCBpbXBsZW1lbnQgSW5NZW1vcnlEYlNlcnZpY2UuXHJcbiAgICAqIEBwYXJhbSB7SW5NZW1vcnlCYWNrZW5kQ29uZmlnQXJnc30gW29wdGlvbnNdXHJcbiAgICAqXHJcbiAgICAqIEBleGFtcGxlXHJcbiAgICAqIEluTWVtb3J5V2ViQXBpTW9kdWxlLmZvclJvb3QoZGJDcmVhdG9yKTtcclxuICAgICogSW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yUm9vdChkYkNyZWF0b3IsIHt1c2VWYWx1ZToge2RlbGF5OjYwMH19KTtcclxuICAgICovXHJcbiAgICBJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290ID0gZnVuY3Rpb24gKGRiQ3JlYXRvciwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5nTW9kdWxlOiBJbk1lbW9yeVdlYkFwaU1vZHVsZV8xLFxyXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogSW5NZW1vcnlEYlNlcnZpY2UsIHVzZUNsYXNzOiBkYkNyZWF0b3IgfSxcclxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogSW5NZW1vcnlCYWNrZW5kQ29uZmlnLCB1c2VWYWx1ZTogb3B0aW9ucyB9LFxyXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBIdHRwQmFja2VuZCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VGYWN0b3J5OiBodHRwQ2xpZW50SW5NZW1CYWNrZW5kU2VydmljZUZhY3RvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgZGVwczogW0luTWVtb3J5RGJTZXJ2aWNlLCBJbk1lbW9yeUJhY2tlbmRDb25maWcsIFhockZhY3RvcnldIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogRW5hYmxlIGFuZCBjb25maWd1cmUgdGhlIGluLW1lbW9yeSB3ZWIgYXBpIGluIGEgbGF6eS1sb2FkZWQgZmVhdHVyZSBtb2R1bGUuXHJcbiAgICAgKiBTYW1lIGFzIGBmb3JSb290YC5cclxuICAgICAqIFRoaXMgaXMgYSBmZWVsLWdvb2QgbWV0aG9kIHNvIHlvdSBjYW4gZm9sbG93IHRoZSBBbmd1bGFyIHN0eWxlIGd1aWRlIGZvciBsYXp5LWxvYWRlZCBtb2R1bGVzLlxyXG4gICAgICovXHJcbiAgICBJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JGZWF0dXJlID0gZnVuY3Rpb24gKGRiQ3JlYXRvciwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBJbk1lbW9yeVdlYkFwaU1vZHVsZV8xLmZvclJvb3QoZGJDcmVhdG9yLCBvcHRpb25zKTtcclxuICAgIH07XHJcbiAgICB2YXIgSW5NZW1vcnlXZWJBcGlNb2R1bGVfMTtcclxuICAgIEluTWVtb3J5V2ViQXBpTW9kdWxlID0gSW5NZW1vcnlXZWJBcGlNb2R1bGVfMSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIE5nTW9kdWxlKHt9KVxyXG4gICAgXSwgSW5NZW1vcnlXZWJBcGlNb2R1bGUpO1xyXG4gICAgcmV0dXJuIEluTWVtb3J5V2ViQXBpTW9kdWxlO1xyXG59KCkpO1xyXG5leHBvcnQgeyBJbk1lbW9yeVdlYkFwaU1vZHVsZSB9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbi1tZW1vcnktd2ViLWFwaS5tb2R1bGUuanMubWFwIl0sIm5hbWVzIjpbIk9ic2VydmFibGUiLCJ0aGlzIiwiSW5qZWN0YWJsZSIsIkJlaGF2aW9yU3ViamVjdCIsImZpcnN0IiwiY29uY2F0TWFwIiwiZnJvbSIsIm9mIiwiX19kZWNvcmF0ZSIsIl9fbWV0YWRhdGEiLCJIdHRwSGVhZGVycyIsIm1hcCIsIkh0dHBQYXJhbXMiLCJIdHRwUmVzcG9uc2UiLCJIdHRwWGhyQmFja2VuZCIsIkluamVjdCIsIk9wdGlvbmFsIiwiWGhyRmFj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