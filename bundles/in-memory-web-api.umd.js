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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LXdlYi1hcGkudW1kLmpzIiwic291cmNlcyI6WyIuLi9zcmMvaW4tbWVtL2h0dHAtc3RhdHVzLWNvZGVzLmpzIiwiLi4vc3JjL2luLW1lbS9kZWxheS1yZXNwb25zZS5qcyIsIi4uL3NyYy9pbi1tZW0vaW50ZXJmYWNlcy5qcyIsIi4uL3NyYy9pbi1tZW0vYmFja2VuZC5zZXJ2aWNlLmpzIiwiLi4vc3JjL2luLW1lbS9odHRwLWNsaWVudC1iYWNrZW5kLnNlcnZpY2UuanMiLCIuLi9zcmMvaW4tbWVtL2h0dHAtY2xpZW50LWluLW1lbW9yeS13ZWItYXBpLm1vZHVsZS5qcyIsIi4uL3NyYy9pbi1tZW0vaW4tbWVtb3J5LXdlYi1hcGkubW9kdWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB2YXIgU1RBVFVTID0ge1xuICAgIENPTlRJTlVFOiAxMDAsXG4gICAgU1dJVENISU5HX1BST1RPQ09MUzogMTAxLFxuICAgIE9LOiAyMDAsXG4gICAgQ1JFQVRFRDogMjAxLFxuICAgIEFDQ0VQVEVEOiAyMDIsXG4gICAgTk9OX0FVVEhPUklUQVRJVkVfSU5GT1JNQVRJT046IDIwMyxcbiAgICBOT19DT05URU5UOiAyMDQsXG4gICAgUkVTRVRfQ09OVEVOVDogMjA1LFxuICAgIFBBUlRJQUxfQ09OVEVOVDogMjA2LFxuICAgIE1VTFRJUExFX0NIT0lDRVM6IDMwMCxcbiAgICBNT1ZFRF9QRVJNQU5URU5UTFk6IDMwMSxcbiAgICBGT1VORDogMzAyLFxuICAgIFNFRV9PVEhFUjogMzAzLFxuICAgIE5PVF9NT0RJRklFRDogMzA0LFxuICAgIFVTRV9QUk9YWTogMzA1LFxuICAgIFRFTVBPUkFSWV9SRURJUkVDVDogMzA3LFxuICAgIEJBRF9SRVFVRVNUOiA0MDAsXG4gICAgVU5BVVRIT1JJWkVEOiA0MDEsXG4gICAgUEFZTUVOVF9SRVFVSVJFRDogNDAyLFxuICAgIEZPUkJJRERFTjogNDAzLFxuICAgIE5PVF9GT1VORDogNDA0LFxuICAgIE1FVEhPRF9OT1RfQUxMT1dFRDogNDA1LFxuICAgIE5PVF9BQ0NFUFRBQkxFOiA0MDYsXG4gICAgUFJPWFlfQVVUSEVOVElDQVRJT05fUkVRVUlSRUQ6IDQwNyxcbiAgICBSRVFVRVNUX1RJTUVPVVQ6IDQwOCxcbiAgICBDT05GTElDVDogNDA5LFxuICAgIEdPTkU6IDQxMCxcbiAgICBMRU5HVEhfUkVRVUlSRUQ6IDQxMSxcbiAgICBQUkVDT05ESVRJT05fRkFJTEVEOiA0MTIsXG4gICAgUEFZTE9BRF9UT19MQVJHRTogNDEzLFxuICAgIFVSSV9UT09fTE9ORzogNDE0LFxuICAgIFVOU1VQUE9SVEVEX01FRElBX1RZUEU6IDQxNSxcbiAgICBSQU5HRV9OT1RfU0FUSVNGSUFCTEU6IDQxNixcbiAgICBFWFBFQ1RBVElPTl9GQUlMRUQ6IDQxNyxcbiAgICBJTV9BX1RFQVBPVDogNDE4LFxuICAgIFVQR1JBREVfUkVRVUlSRUQ6IDQyNixcbiAgICBJTlRFUk5BTF9TRVJWRVJfRVJST1I6IDUwMCxcbiAgICBOT1RfSU1QTEVNRU5URUQ6IDUwMSxcbiAgICBCQURfR0FURVdBWTogNTAyLFxuICAgIFNFUlZJQ0VfVU5BVkFJTEFCTEU6IDUwMyxcbiAgICBHQVRFV0FZX1RJTUVPVVQ6IDUwNCxcbiAgICBIVFRQX1ZFUlNJT05fTk9UX1NVUFBPUlRFRDogNTA1LFxuICAgIFBST0NFU1NJTkc6IDEwMixcbiAgICBNVUxUSV9TVEFUVVM6IDIwNyxcbiAgICBJTV9VU0VEOiAyMjYsXG4gICAgUEVSTUFORU5UX1JFRElSRUNUOiAzMDgsXG4gICAgVU5QUk9DRVNTQUJMRV9FTlRSWTogNDIyLFxuICAgIExPQ0tFRDogNDIzLFxuICAgIEZBSUxFRF9ERVBFTkRFTkNZOiA0MjQsXG4gICAgUFJFQ09ORElUSU9OX1JFUVVJUkVEOiA0MjgsXG4gICAgVE9PX01BTllfUkVRVUVTVFM6IDQyOSxcbiAgICBSRVFVRVNUX0hFQURFUl9GSUVMRFNfVE9PX0xBUkdFOiA0MzEsXG4gICAgVU5BVkFJTEFCTEVfRk9SX0xFR0FMX1JFQVNPTlM6IDQ1MSxcbiAgICBWQVJJQU5UX0FMU09fTkVHT1RJQVRFUzogNTA2LFxuICAgIElOU1VGRklDSUVOVF9TVE9SQUdFOiA1MDcsXG4gICAgTkVUV09SS19BVVRIRU5USUNBVElPTl9SRVFVSVJFRDogNTExXG59O1xuLyp0c2xpbnQ6ZGlzYWJsZTpxdW90ZW1hcmsgbWF4LWxpbmUtbGVuZ3RoIG9uZS1saW5lICovXG5leHBvcnQgdmFyIFNUQVRVU19DT0RFX0lORk8gPSB7XG4gICAgJzEwMCc6IHtcbiAgICAgICAgJ2NvZGUnOiAxMDAsXG4gICAgICAgICd0ZXh0JzogJ0NvbnRpbnVlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgaW5pdGlhbCBwYXJ0IG9mIGEgcmVxdWVzdCBoYXMgYmVlbiByZWNlaXZlZCBhbmQgaGFzIG5vdCB5ZXQgYmVlbiByZWplY3RlZCBieSB0aGUgc2VydmVyLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuMi4xJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4yLjEnXG4gICAgfSxcbiAgICAnMTAxJzoge1xuICAgICAgICAnY29kZSc6IDEwMSxcbiAgICAgICAgJ3RleHQnOiAnU3dpdGNoaW5nIFByb3RvY29scycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciB1bmRlcnN0YW5kcyBhbmQgaXMgd2lsbGluZyB0byBjb21wbHkgd2l0aCB0aGUgY2xpZW50XFwncyByZXF1ZXN0LCB2aWEgdGhlIFVwZ3JhZGUgaGVhZGVyIGZpZWxkLCBmb3IgYSBjaGFuZ2UgaW4gdGhlIGFwcGxpY2F0aW9uIHByb3RvY29sIGJlaW5nIHVzZWQgb24gdGhpcyBjb25uZWN0aW9uLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuMi4yJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4yLjInXG4gICAgfSxcbiAgICAnMjAwJzoge1xuICAgICAgICAnY29kZSc6IDIwMCxcbiAgICAgICAgJ3RleHQnOiAnT0snLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSByZXF1ZXN0IGhhcyBzdWNjZWVkZWQuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi4zLjEnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjMuMSdcbiAgICB9LFxuICAgICcyMDEnOiB7XG4gICAgICAgICdjb2RlJzogMjAxLFxuICAgICAgICAndGV4dCc6ICdDcmVhdGVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgcmVxdWVzdCBoYXMgYmVlbiBmdWxmaWxsZWQgYW5kIGhhcyByZXN1bHRlZCBpbiBvbmUgb3IgbW9yZSBuZXcgcmVzb3VyY2VzIGJlaW5nIGNyZWF0ZWQuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi4zLjInLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjMuMidcbiAgICB9LFxuICAgICcyMDInOiB7XG4gICAgICAgICdjb2RlJzogMjAyLFxuICAgICAgICAndGV4dCc6ICdBY2NlcHRlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHJlcXVlc3QgaGFzIGJlZW4gYWNjZXB0ZWQgZm9yIHByb2Nlc3NpbmcsIGJ1dCB0aGUgcHJvY2Vzc2luZyBoYXMgbm90IGJlZW4gY29tcGxldGVkLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuMy4zJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjMnXG4gICAgfSxcbiAgICAnMjAzJzoge1xuICAgICAgICAnY29kZSc6IDIwMyxcbiAgICAgICAgJ3RleHQnOiAnTm9uLUF1dGhvcml0YXRpdmUgSW5mb3JtYXRpb24nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSByZXF1ZXN0IHdhcyBzdWNjZXNzZnVsIGJ1dCB0aGUgZW5jbG9zZWQgcGF5bG9hZCBoYXMgYmVlbiBtb2RpZmllZCBmcm9tIHRoYXQgb2YgdGhlIG9yaWdpbiBzZXJ2ZXJcXCdzIDIwMCAoT0spIHJlc3BvbnNlIGJ5IGEgdHJhbnNmb3JtaW5nIHByb3h5LlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuMy40JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjQnXG4gICAgfSxcbiAgICAnMjA0Jzoge1xuICAgICAgICAnY29kZSc6IDIwNCxcbiAgICAgICAgJ3RleHQnOiAnTm8gQ29udGVudCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBoYXMgc3VjY2Vzc2Z1bGx5IGZ1bGZpbGxlZCB0aGUgcmVxdWVzdCBhbmQgdGhhdCB0aGVyZSBpcyBubyBhZGRpdGlvbmFsIGNvbnRlbnQgdG8gc2VuZCBpbiB0aGUgcmVzcG9uc2UgcGF5bG9hZCBib2R5LlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuMy41JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjUnXG4gICAgfSxcbiAgICAnMjA1Jzoge1xuICAgICAgICAnY29kZSc6IDIwNSxcbiAgICAgICAgJ3RleHQnOiAnUmVzZXQgQ29udGVudCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBoYXMgZnVsZmlsbGVkIHRoZSByZXF1ZXN0IGFuZCBkZXNpcmVzIHRoYXQgdGhlIHVzZXIgYWdlbnQgcmVzZXQgdGhlIFxcXCJkb2N1bWVudCB2aWV3XFxcIiwgd2hpY2ggY2F1c2VkIHRoZSByZXF1ZXN0IHRvIGJlIHNlbnQsIHRvIGl0cyBvcmlnaW5hbCBzdGF0ZSBhcyByZWNlaXZlZCBmcm9tIHRoZSBvcmlnaW4gc2VydmVyLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuMy42JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjYnXG4gICAgfSxcbiAgICAnMjA2Jzoge1xuICAgICAgICAnY29kZSc6IDIwNixcbiAgICAgICAgJ3RleHQnOiAnUGFydGlhbCBDb250ZW50JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGlzIHN1Y2Nlc3NmdWxseSBmdWxmaWxsaW5nIGEgcmFuZ2UgcmVxdWVzdCBmb3IgdGhlIHRhcmdldCByZXNvdXJjZSBieSB0cmFuc2ZlcnJpbmcgb25lIG9yIG1vcmUgcGFydHMgb2YgdGhlIHNlbGVjdGVkIHJlcHJlc2VudGF0aW9uIHRoYXQgY29ycmVzcG9uZCB0byB0aGUgc2F0aXNmaWFibGUgcmFuZ2VzIGZvdW5kIGluIHRoZSByZXF1ZXN0c1xcJ3MgUmFuZ2UgaGVhZGVyIGZpZWxkLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMzIzQuMScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMyNzZWN0aW9uLTQuMSdcbiAgICB9LFxuICAgICczMDAnOiB7XG4gICAgICAgICdjb2RlJzogMzAwLFxuICAgICAgICAndGV4dCc6ICdNdWx0aXBsZSBDaG9pY2VzJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgdGFyZ2V0IHJlc291cmNlIGhhcyBtb3JlIHRoYW4gb25lIHJlcHJlc2VudGF0aW9uLCBlYWNoIHdpdGggaXRzIG93biBtb3JlIHNwZWNpZmljIGlkZW50aWZpZXIsIGFuZCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgYWx0ZXJuYXRpdmVzIGlzIGJlaW5nIHByb3ZpZGVkIHNvIHRoYXQgdGhlIHVzZXIgKG9yIHVzZXIgYWdlbnQpIGNhbiBzZWxlY3QgYSBwcmVmZXJyZWQgcmVwcmVzZW50YXRpb24gYnkgcmVkaXJlY3RpbmcgaXRzIHJlcXVlc3QgdG8gb25lIG9yIG1vcmUgb2YgdGhvc2UgaWRlbnRpZmllcnMuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi40LjEnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjQuMSdcbiAgICB9LFxuICAgICczMDEnOiB7XG4gICAgICAgICdjb2RlJzogMzAxLFxuICAgICAgICAndGV4dCc6ICdNb3ZlZCBQZXJtYW5lbnRseScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHRhcmdldCByZXNvdXJjZSBoYXMgYmVlbiBhc3NpZ25lZCBhIG5ldyBwZXJtYW5lbnQgVVJJIGFuZCBhbnkgZnV0dXJlIHJlZmVyZW5jZXMgdG8gdGhpcyByZXNvdXJjZSBvdWdodCB0byB1c2Ugb25lIG9mIHRoZSBlbmNsb3NlZCBVUklzLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNC4yJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi40LjInXG4gICAgfSxcbiAgICAnMzAyJzoge1xuICAgICAgICAnY29kZSc6IDMwMixcbiAgICAgICAgJ3RleHQnOiAnRm91bmQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSB0YXJnZXQgcmVzb3VyY2UgcmVzaWRlcyB0ZW1wb3JhcmlseSB1bmRlciBhIGRpZmZlcmVudCBVUkkuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi40LjMnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjQuMydcbiAgICB9LFxuICAgICczMDMnOiB7XG4gICAgICAgICdjb2RlJzogMzAzLFxuICAgICAgICAndGV4dCc6ICdTZWUgT3RoZXInLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgaXMgcmVkaXJlY3RpbmcgdGhlIHVzZXIgYWdlbnQgdG8gYSBkaWZmZXJlbnQgcmVzb3VyY2UsIGFzIGluZGljYXRlZCBieSBhIFVSSSBpbiB0aGUgTG9jYXRpb24gaGVhZGVyIGZpZWxkLCB0aGF0IGlzIGludGVuZGVkIHRvIHByb3ZpZGUgYW4gaW5kaXJlY3QgcmVzcG9uc2UgdG8gdGhlIG9yaWdpbmFsIHJlcXVlc3QuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi40LjQnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjQuNCdcbiAgICB9LFxuICAgICczMDQnOiB7XG4gICAgICAgICdjb2RlJzogMzA0LFxuICAgICAgICAndGV4dCc6ICdOb3QgTW9kaWZpZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIkEgY29uZGl0aW9uYWwgR0VUIHJlcXVlc3QgaGFzIGJlZW4gcmVjZWl2ZWQgYW5kIHdvdWxkIGhhdmUgcmVzdWx0ZWQgaW4gYSAyMDAgKE9LKSByZXNwb25zZSBpZiBpdCB3ZXJlIG5vdCBmb3IgdGhlIGZhY3QgdGhhdCB0aGUgY29uZGl0aW9uIGhhcyBldmFsdWF0ZWQgdG8gZmFsc2UuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzIjNC4xJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMyI3NlY3Rpb24tNC4xJ1xuICAgIH0sXG4gICAgJzMwNSc6IHtcbiAgICAgICAgJ2NvZGUnOiAzMDUsXG4gICAgICAgICd0ZXh0JzogJ1VzZSBQcm94eScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICcqZGVwcmVjYXRlZConLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNC41JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi40LjUnXG4gICAgfSxcbiAgICAnMzA3Jzoge1xuICAgICAgICAnY29kZSc6IDMwNyxcbiAgICAgICAgJ3RleHQnOiAnVGVtcG9yYXJ5IFJlZGlyZWN0JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgdGFyZ2V0IHJlc291cmNlIHJlc2lkZXMgdGVtcG9yYXJpbHkgdW5kZXIgYSBkaWZmZXJlbnQgVVJJIGFuZCB0aGUgdXNlciBhZ2VudCBNVVNUIE5PVCBjaGFuZ2UgdGhlIHJlcXVlc3QgbWV0aG9kIGlmIGl0IHBlcmZvcm1zIGFuIGF1dG9tYXRpYyByZWRpcmVjdGlvbiB0byB0aGF0IFVSSS5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjQuNycsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNC43J1xuICAgIH0sXG4gICAgJzQwMCc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MDAsXG4gICAgICAgICd0ZXh0JzogJ0JhZCBSZXF1ZXN0JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGNhbm5vdCBvciB3aWxsIG5vdCBwcm9jZXNzIHRoZSByZXF1ZXN0IGJlY2F1c2UgdGhlIHJlY2VpdmVkIHN5bnRheCBpcyBpbnZhbGlkLCBub25zZW5zaWNhbCwgb3IgZXhjZWVkcyBzb21lIGxpbWl0YXRpb24gb24gd2hhdCB0aGUgc2VydmVyIGlzIHdpbGxpbmcgdG8gcHJvY2Vzcy5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4xJ1xuICAgIH0sXG4gICAgJzQwMSc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MDEsXG4gICAgICAgICd0ZXh0JzogJ1VuYXV0aG9yaXplZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHJlcXVlc3QgaGFzIG5vdCBiZWVuIGFwcGxpZWQgYmVjYXVzZSBpdCBsYWNrcyB2YWxpZCBhdXRoZW50aWNhdGlvbiBjcmVkZW50aWFscyBmb3IgdGhlIHRhcmdldCByZXNvdXJjZS5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzNSM2LjMuMScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzNSNzZWN0aW9uLTMuMSdcbiAgICB9LFxuICAgICc0MDInOiB7XG4gICAgICAgICdjb2RlJzogNDAyLFxuICAgICAgICAndGV4dCc6ICdQYXltZW50IFJlcXVpcmVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJypyZXNlcnZlZConLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS4yJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjInXG4gICAgfSxcbiAgICAnNDAzJzoge1xuICAgICAgICAnY29kZSc6IDQwMyxcbiAgICAgICAgJ3RleHQnOiAnRm9yYmlkZGVuJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIHVuZGVyc3Rvb2QgdGhlIHJlcXVlc3QgYnV0IHJlZnVzZXMgdG8gYXV0aG9yaXplIGl0LlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS4zJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjMnXG4gICAgfSxcbiAgICAnNDA0Jzoge1xuICAgICAgICAnY29kZSc6IDQwNCxcbiAgICAgICAgJ3RleHQnOiAnTm90IEZvdW5kJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgb3JpZ2luIHNlcnZlciBkaWQgbm90IGZpbmQgYSBjdXJyZW50IHJlcHJlc2VudGF0aW9uIGZvciB0aGUgdGFyZ2V0IHJlc291cmNlIG9yIGlzIG5vdCB3aWxsaW5nIHRvIGRpc2Nsb3NlIHRoYXQgb25lIGV4aXN0cy5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuNCcsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS40J1xuICAgIH0sXG4gICAgJzQwNSc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MDUsXG4gICAgICAgICd0ZXh0JzogJ01ldGhvZCBOb3QgQWxsb3dlZCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIG1ldGhvZCBzcGVjaWZpZWQgaW4gdGhlIHJlcXVlc3QtbGluZSBpcyBrbm93biBieSB0aGUgb3JpZ2luIHNlcnZlciBidXQgbm90IHN1cHBvcnRlZCBieSB0aGUgdGFyZ2V0IHJlc291cmNlLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS41JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjUnXG4gICAgfSxcbiAgICAnNDA2Jzoge1xuICAgICAgICAnY29kZSc6IDQwNixcbiAgICAgICAgJ3RleHQnOiAnTm90IEFjY2VwdGFibGUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSB0YXJnZXQgcmVzb3VyY2UgZG9lcyBub3QgaGF2ZSBhIGN1cnJlbnQgcmVwcmVzZW50YXRpb24gdGhhdCB3b3VsZCBiZSBhY2NlcHRhYmxlIHRvIHRoZSB1c2VyIGFnZW50LCBhY2NvcmRpbmcgdG8gdGhlIHByb2FjdGl2ZSBuZWdvdGlhdGlvbiBoZWFkZXIgZmllbGRzIHJlY2VpdmVkIGluIHRoZSByZXF1ZXN0LCBhbmQgdGhlIHNlcnZlciBpcyB1bndpbGxpbmcgdG8gc3VwcGx5IGEgZGVmYXVsdCByZXByZXNlbnRhdGlvbi5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuNicsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS42J1xuICAgIH0sXG4gICAgJzQwNyc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MDcsXG4gICAgICAgICd0ZXh0JzogJ1Byb3h5IEF1dGhlbnRpY2F0aW9uIFJlcXVpcmVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgY2xpZW50IG5lZWRzIHRvIGF1dGhlbnRpY2F0ZSBpdHNlbGYgaW4gb3JkZXIgdG8gdXNlIGEgcHJveHkuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi4zLjInLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjMuMidcbiAgICB9LFxuICAgICc0MDgnOiB7XG4gICAgICAgICdjb2RlJzogNDA4LFxuICAgICAgICAndGV4dCc6ICdSZXF1ZXN0IFRpbWVvdXQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgZGlkIG5vdCByZWNlaXZlIGEgY29tcGxldGUgcmVxdWVzdCBtZXNzYWdlIHdpdGhpbiB0aGUgdGltZSB0aGF0IGl0IHdhcyBwcmVwYXJlZCB0byB3YWl0LlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS43JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjcnXG4gICAgfSxcbiAgICAnNDA5Jzoge1xuICAgICAgICAnY29kZSc6IDQwOSxcbiAgICAgICAgJ3RleHQnOiAnQ29uZmxpY3QnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSByZXF1ZXN0IGNvdWxkIG5vdCBiZSBjb21wbGV0ZWQgZHVlIHRvIGEgY29uZmxpY3Qgd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgcmVzb3VyY2UuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjgnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuOCdcbiAgICB9LFxuICAgICc0MTAnOiB7XG4gICAgICAgICdjb2RlJzogNDEwLFxuICAgICAgICAndGV4dCc6ICdHb25lJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJBY2Nlc3MgdG8gdGhlIHRhcmdldCByZXNvdXJjZSBpcyBubyBsb25nZXIgYXZhaWxhYmxlIGF0IHRoZSBvcmlnaW4gc2VydmVyIGFuZCB0aGF0IHRoaXMgY29uZGl0aW9uIGlzIGxpa2VseSB0byBiZSBwZXJtYW5lbnQuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjknLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuOSdcbiAgICB9LFxuICAgICc0MTEnOiB7XG4gICAgICAgICdjb2RlJzogNDExLFxuICAgICAgICAndGV4dCc6ICdMZW5ndGggUmVxdWlyZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgcmVmdXNlcyB0byBhY2NlcHQgdGhlIHJlcXVlc3Qgd2l0aG91dCBhIGRlZmluZWQgQ29udGVudC1MZW5ndGguXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjEwJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjEwJ1xuICAgIH0sXG4gICAgJzQxMic6IHtcbiAgICAgICAgJ2NvZGUnOiA0MTIsXG4gICAgICAgICd0ZXh0JzogJ1ByZWNvbmRpdGlvbiBGYWlsZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIk9uZSBvciBtb3JlIHByZWNvbmRpdGlvbnMgZ2l2ZW4gaW4gdGhlIHJlcXVlc3QgaGVhZGVyIGZpZWxkcyBldmFsdWF0ZWQgdG8gZmFsc2Ugd2hlbiB0ZXN0ZWQgb24gdGhlIHNlcnZlci5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMiM0LjInLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzIjc2VjdGlvbi00LjInXG4gICAgfSxcbiAgICAnNDEzJzoge1xuICAgICAgICAnY29kZSc6IDQxMyxcbiAgICAgICAgJ3RleHQnOiAnUGF5bG9hZCBUb28gTGFyZ2UnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgaXMgcmVmdXNpbmcgdG8gcHJvY2VzcyBhIHJlcXVlc3QgYmVjYXVzZSB0aGUgcmVxdWVzdCBwYXlsb2FkIGlzIGxhcmdlciB0aGFuIHRoZSBzZXJ2ZXIgaXMgd2lsbGluZyBvciBhYmxlIHRvIHByb2Nlc3MuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjExJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjExJ1xuICAgIH0sXG4gICAgJzQxNCc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MTQsXG4gICAgICAgICd0ZXh0JzogJ1VSSSBUb28gTG9uZycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBpcyByZWZ1c2luZyB0byBzZXJ2aWNlIHRoZSByZXF1ZXN0IGJlY2F1c2UgdGhlIHJlcXVlc3QtdGFyZ2V0IGlzIGxvbmdlciB0aGFuIHRoZSBzZXJ2ZXIgaXMgd2lsbGluZyB0byBpbnRlcnByZXQuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjEyJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjEyJ1xuICAgIH0sXG4gICAgJzQxNSc6IHtcbiAgICAgICAgJ2NvZGUnOiA0MTUsXG4gICAgICAgICd0ZXh0JzogJ1Vuc3VwcG9ydGVkIE1lZGlhIFR5cGUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBvcmlnaW4gc2VydmVyIGlzIHJlZnVzaW5nIHRvIHNlcnZpY2UgdGhlIHJlcXVlc3QgYmVjYXVzZSB0aGUgcGF5bG9hZCBpcyBpbiBhIGZvcm1hdCBub3Qgc3VwcG9ydGVkIGJ5IHRoZSB0YXJnZXQgcmVzb3VyY2UgZm9yIHRoaXMgbWV0aG9kLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS4xMycsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4xMydcbiAgICB9LFxuICAgICc0MTYnOiB7XG4gICAgICAgICdjb2RlJzogNDE2LFxuICAgICAgICAndGV4dCc6ICdSYW5nZSBOb3QgU2F0aXNmaWFibGUnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIk5vbmUgb2YgdGhlIHJhbmdlcyBpbiB0aGUgcmVxdWVzdFxcJ3MgUmFuZ2UgaGVhZGVyIGZpZWxkIG92ZXJsYXAgdGhlIGN1cnJlbnQgZXh0ZW50IG9mIHRoZSBzZWxlY3RlZCByZXNvdXJjZSBvciB0aGF0IHRoZSBzZXQgb2YgcmFuZ2VzIHJlcXVlc3RlZCBoYXMgYmVlbiByZWplY3RlZCBkdWUgdG8gaW52YWxpZCByYW5nZXMgb3IgYW4gZXhjZXNzaXZlIHJlcXVlc3Qgb2Ygc21hbGwgb3Igb3ZlcmxhcHBpbmcgcmFuZ2VzLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMzIzQuNCcsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMyNzZWN0aW9uLTQuNCdcbiAgICB9LFxuICAgICc0MTcnOiB7XG4gICAgICAgICdjb2RlJzogNDE3LFxuICAgICAgICAndGV4dCc6ICdFeHBlY3RhdGlvbiBGYWlsZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBleHBlY3RhdGlvbiBnaXZlbiBpbiB0aGUgcmVxdWVzdFxcJ3MgRXhwZWN0IGhlYWRlciBmaWVsZCBjb3VsZCBub3QgYmUgbWV0IGJ5IGF0IGxlYXN0IG9uZSBvZiB0aGUgaW5ib3VuZCBzZXJ2ZXJzLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS4xNCcsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4xNCdcbiAgICB9LFxuICAgICc0MTgnOiB7XG4gICAgICAgICdjb2RlJzogNDE4LFxuICAgICAgICAndGV4dCc6ICdJXFwnbSBhIHRlYXBvdCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiMTk4OCBBcHJpbCBGb29scyBKb2tlLiBSZXR1cm5lZCBieSB0ZWEgcG90cyByZXF1ZXN0ZWQgdG8gYnJldyBjb2ZmZWUuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQyAyMzI0JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjMyNCdcbiAgICB9LFxuICAgICc0MjYnOiB7XG4gICAgICAgICdjb2RlJzogNDI2LFxuICAgICAgICAndGV4dCc6ICdVcGdyYWRlIFJlcXVpcmVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIHJlZnVzZXMgdG8gcGVyZm9ybSB0aGUgcmVxdWVzdCB1c2luZyB0aGUgY3VycmVudCBwcm90b2NvbCBidXQgbWlnaHQgYmUgd2lsbGluZyB0byBkbyBzbyBhZnRlciB0aGUgY2xpZW50IHVwZ3JhZGVzIHRvIGEgZGlmZmVyZW50IHByb3RvY29sLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS4xNScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4xNSdcbiAgICB9LFxuICAgICc1MDAnOiB7XG4gICAgICAgICdjb2RlJzogNTAwLFxuICAgICAgICAndGV4dCc6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgZW5jb3VudGVyZWQgYW4gdW5leHBlY3RlZCBjb25kaXRpb24gdGhhdCBwcmV2ZW50ZWQgaXQgZnJvbSBmdWxmaWxsaW5nIHRoZSByZXF1ZXN0LlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNi4xJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi42LjEnXG4gICAgfSxcbiAgICAnNTAxJzoge1xuICAgICAgICAnY29kZSc6IDUwMSxcbiAgICAgICAgJ3RleHQnOiAnTm90IEltcGxlbWVudGVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGRvZXMgbm90IHN1cHBvcnQgdGhlIGZ1bmN0aW9uYWxpdHkgcmVxdWlyZWQgdG8gZnVsZmlsbCB0aGUgcmVxdWVzdC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjYuMicsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNi4yJ1xuICAgIH0sXG4gICAgJzUwMic6IHtcbiAgICAgICAgJ2NvZGUnOiA1MDIsXG4gICAgICAgICd0ZXh0JzogJ0JhZCBHYXRld2F5JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyLCB3aGlsZSBhY3RpbmcgYXMgYSBnYXRld2F5IG9yIHByb3h5LCByZWNlaXZlZCBhbiBpbnZhbGlkIHJlc3BvbnNlIGZyb20gYW4gaW5ib3VuZCBzZXJ2ZXIgaXQgYWNjZXNzZWQgd2hpbGUgYXR0ZW1wdGluZyB0byBmdWxmaWxsIHRoZSByZXF1ZXN0LlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNi4zJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi42LjMnXG4gICAgfSxcbiAgICAnNTAzJzoge1xuICAgICAgICAnY29kZSc6IDUwMyxcbiAgICAgICAgJ3RleHQnOiAnU2VydmljZSBVbmF2YWlsYWJsZScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBpcyBjdXJyZW50bHkgdW5hYmxlIHRvIGhhbmRsZSB0aGUgcmVxdWVzdCBkdWUgdG8gYSB0ZW1wb3Jhcnkgb3ZlcmxvYWQgb3Igc2NoZWR1bGVkIG1haW50ZW5hbmNlLCB3aGljaCB3aWxsIGxpa2VseSBiZSBhbGxldmlhdGVkIGFmdGVyIHNvbWUgZGVsYXkuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi42LjQnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjYuNCdcbiAgICB9LFxuICAgICc1MDQnOiB7XG4gICAgICAgICdjb2RlJzogNTA0LFxuICAgICAgICAndGV4dCc6ICdHYXRld2F5IFRpbWUtb3V0JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyLCB3aGlsZSBhY3RpbmcgYXMgYSBnYXRld2F5IG9yIHByb3h5LCBkaWQgbm90IHJlY2VpdmUgYSB0aW1lbHkgcmVzcG9uc2UgZnJvbSBhbiB1cHN0cmVhbSBzZXJ2ZXIgaXQgbmVlZGVkIHRvIGFjY2VzcyBpbiBvcmRlciB0byBjb21wbGV0ZSB0aGUgcmVxdWVzdC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjYuNScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNi41J1xuICAgIH0sXG4gICAgJzUwNSc6IHtcbiAgICAgICAgJ2NvZGUnOiA1MDUsXG4gICAgICAgICd0ZXh0JzogJ0hUVFAgVmVyc2lvbiBOb3QgU3VwcG9ydGVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGRvZXMgbm90IHN1cHBvcnQsIG9yIHJlZnVzZXMgdG8gc3VwcG9ydCwgdGhlIHByb3RvY29sIHZlcnNpb24gdGhhdCB3YXMgdXNlZCBpbiB0aGUgcmVxdWVzdCBtZXNzYWdlLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNi42JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi42LjYnXG4gICAgfSxcbiAgICAnMTAyJzoge1xuICAgICAgICAnY29kZSc6IDEwMixcbiAgICAgICAgJ3RleHQnOiAnUHJvY2Vzc2luZycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiQW4gaW50ZXJpbSByZXNwb25zZSB0byBpbmZvcm0gdGhlIGNsaWVudCB0aGF0IHRoZSBzZXJ2ZXIgaGFzIGFjY2VwdGVkIHRoZSBjb21wbGV0ZSByZXF1ZXN0LCBidXQgaGFzIG5vdCB5ZXQgY29tcGxldGVkIGl0LlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM1MjE4IzEwLjEnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzI1MTgjc2VjdGlvbi0xMC4xJ1xuICAgIH0sXG4gICAgJzIwNyc6IHtcbiAgICAgICAgJ2NvZGUnOiAyMDcsXG4gICAgICAgICd0ZXh0JzogJ011bHRpLVN0YXR1cycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiU3RhdHVzIGZvciBtdWx0aXBsZSBpbmRlcGVuZGVudCBvcGVyYXRpb25zLlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM1MjE4IzEwLjInLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzI1MTgjc2VjdGlvbi0xMC4yJ1xuICAgIH0sXG4gICAgJzIyNic6IHtcbiAgICAgICAgJ2NvZGUnOiAyMjYsXG4gICAgICAgICd0ZXh0JzogJ0lNIFVzZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgaGFzIGZ1bGZpbGxlZCBhIEdFVCByZXF1ZXN0IGZvciB0aGUgcmVzb3VyY2UsIGFuZCB0aGUgcmVzcG9uc2UgaXMgYSByZXByZXNlbnRhdGlvbiBvZiB0aGUgcmVzdWx0IG9mIG9uZSBvciBtb3JlIGluc3RhbmNlLW1hbmlwdWxhdGlvbnMgYXBwbGllZCB0byB0aGUgY3VycmVudCBpbnN0YW5jZS5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDMzIyOSMxMC40LjEnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzMyMjkjc2VjdGlvbi0xMC40LjEnXG4gICAgfSxcbiAgICAnMzA4Jzoge1xuICAgICAgICAnY29kZSc6IDMwOCxcbiAgICAgICAgJ3RleHQnOiAnUGVybWFuZW50IFJlZGlyZWN0JyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgdGFyZ2V0IHJlc291cmNlIGhhcyBiZWVuIGFzc2lnbmVkIGEgbmV3IHBlcm1hbmVudCBVUkkgYW5kIGFueSBmdXR1cmUgcmVmZXJlbmNlcyB0byB0aGlzIHJlc291cmNlIFNIT1VMRCB1c2Ugb25lIG9mIHRoZSByZXR1cm5lZCBVUklzLiBbLi4uXSBUaGlzIHN0YXR1cyBjb2RlIGlzIHNpbWlsYXIgdG8gMzAxIE1vdmVkIFBlcm1hbmVudGx5IChTZWN0aW9uIDcuMy4yIG9mIHJmYzcyMzEpLCBleGNlcHQgdGhhdCBpdCBkb2VzIG5vdCBhbGxvdyByZXdyaXRpbmcgdGhlIHJlcXVlc3QgbWV0aG9kIGZyb20gUE9TVCB0byBHRVQuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzgnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzgnXG4gICAgfSxcbiAgICAnNDIyJzoge1xuICAgICAgICAnY29kZSc6IDQyMixcbiAgICAgICAgJ3RleHQnOiAnVW5wcm9jZXNzYWJsZSBFbnRpdHknLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgdW5kZXJzdGFuZHMgdGhlIGNvbnRlbnQgdHlwZSBvZiB0aGUgcmVxdWVzdCBlbnRpdHkgKGhlbmNlIGEgNDE1KFVuc3VwcG9ydGVkIE1lZGlhIFR5cGUpIHN0YXR1cyBjb2RlIGlzIGluYXBwcm9wcmlhdGUpLCBhbmQgdGhlIHN5bnRheCBvZiB0aGUgcmVxdWVzdCBlbnRpdHkgaXMgY29ycmVjdCAodGh1cyBhIDQwMCAoQmFkIFJlcXVlc3QpIHN0YXR1cyBjb2RlIGlzIGluYXBwcm9wcmlhdGUpIGJ1dCB3YXMgdW5hYmxlIHRvIHByb2Nlc3MgdGhlIGNvbnRhaW5lZCBpbnN0cnVjdGlvbnMuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzUyMTgjMTAuMycsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjUxOCNzZWN0aW9uLTEwLjMnXG4gICAgfSxcbiAgICAnNDIzJzoge1xuICAgICAgICAnY29kZSc6IDQyMyxcbiAgICAgICAgJ3RleHQnOiAnTG9ja2VkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc291cmNlIG9yIGRlc3RpbmF0aW9uIHJlc291cmNlIG9mIGEgbWV0aG9kIGlzIGxvY2tlZC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNTIxOCMxMC40JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNTE4I3NlY3Rpb24tMTAuNCdcbiAgICB9LFxuICAgICc0MjQnOiB7XG4gICAgICAgICdjb2RlJzogNDI0LFxuICAgICAgICAndGV4dCc6ICdGYWlsZWQgRGVwZW5kZW5jeScsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIG1ldGhvZCBjb3VsZCBub3QgYmUgcGVyZm9ybWVkIG9uIHRoZSByZXNvdXJjZSBiZWNhdXNlIHRoZSByZXF1ZXN0ZWQgYWN0aW9uIGRlcGVuZGVkIG9uIGFub3RoZXIgYWN0aW9uIGFuZCB0aGF0IGFjdGlvbiBmYWlsZWQuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzUyMTgjMTAuNScsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjUxOCNzZWN0aW9uLTEwLjUnXG4gICAgfSxcbiAgICAnNDI4Jzoge1xuICAgICAgICAnY29kZSc6IDQyOCxcbiAgICAgICAgJ3RleHQnOiAnUHJlY29uZGl0aW9uIFJlcXVpcmVkJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgb3JpZ2luIHNlcnZlciByZXF1aXJlcyB0aGUgcmVxdWVzdCB0byBiZSBjb25kaXRpb25hbC5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNjU4NSMzJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NTg1I3NlY3Rpb24tMydcbiAgICB9LFxuICAgICc0MjknOiB7XG4gICAgICAgICdjb2RlJzogNDI5LFxuICAgICAgICAndGV4dCc6ICdUb28gTWFueSBSZXF1ZXN0cycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHVzZXIgaGFzIHNlbnQgdG9vIG1hbnkgcmVxdWVzdHMgaW4gYSBnaXZlbiBhbW91bnQgb2YgdGltZSAoXFxcInJhdGUgbGltaXRpbmdcXFwiKS5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNjU4NSM0JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NTg1I3NlY3Rpb24tNCdcbiAgICB9LFxuICAgICc0MzEnOiB7XG4gICAgICAgICdjb2RlJzogNDMxLFxuICAgICAgICAndGV4dCc6ICdSZXF1ZXN0IEhlYWRlciBGaWVsZHMgVG9vIExhcmdlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGlzIHVud2lsbGluZyB0byBwcm9jZXNzIHRoZSByZXF1ZXN0IGJlY2F1c2UgaXRzIGhlYWRlciBmaWVsZHMgYXJlIHRvbyBsYXJnZS5cXFwiJyxcbiAgICAgICAgJ3NwZWNfdGl0bGUnOiAnUkZDNjU4NSM1JyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NTg1I3NlY3Rpb24tNSdcbiAgICB9LFxuICAgICc0NTEnOiB7XG4gICAgICAgICdjb2RlJzogNDUxLFxuICAgICAgICAndGV4dCc6ICdVbmF2YWlsYWJsZSBGb3IgTGVnYWwgUmVhc29ucycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBpcyBkZW55aW5nIGFjY2VzcyB0byB0aGUgcmVzb3VyY2UgaW4gcmVzcG9uc2UgdG8gYSBsZWdhbCBkZW1hbmQuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ2RyYWZ0LWlldGYtaHR0cGJpcy1sZWdhbGx5LXJlc3RyaWN0ZWQtc3RhdHVzJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9kcmFmdC1pZXRmLWh0dHBiaXMtbGVnYWxseS1yZXN0cmljdGVkLXN0YXR1cydcbiAgICB9LFxuICAgICc1MDYnOiB7XG4gICAgICAgICdjb2RlJzogNTA2LFxuICAgICAgICAndGV4dCc6ICdWYXJpYW50IEFsc28gTmVnb3RpYXRlcycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBoYXMgYW4gaW50ZXJuYWwgY29uZmlndXJhdGlvbiBlcnJvcjogdGhlIGNob3NlbiB2YXJpYW50IHJlc291cmNlIGlzIGNvbmZpZ3VyZWQgdG8gZW5nYWdlIGluIHRyYW5zcGFyZW50IGNvbnRlbnQgbmVnb3RpYXRpb24gaXRzZWxmLCBhbmQgaXMgdGhlcmVmb3JlIG5vdCBhIHByb3BlciBlbmQgcG9pbnQgaW4gdGhlIG5lZ290aWF0aW9uIHByb2Nlc3MuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzIyOTUjOC4xJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyMjk1I3NlY3Rpb24tOC4xJ1xuICAgIH0sXG4gICAgJzUwNyc6IHtcbiAgICAgICAgJ2NvZGUnOiA1MDcsXG4gICAgICAgICd0ZXh0JzogJ0luc3VmZmljaWVudCBTdG9yYWdlJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1xcVGhlIG1ldGhvZCBjb3VsZCBub3QgYmUgcGVyZm9ybWVkIG9uIHRoZSByZXNvdXJjZSBiZWNhdXNlIHRoZSBzZXJ2ZXIgaXMgdW5hYmxlIHRvIHN0b3JlIHRoZSByZXByZXNlbnRhdGlvbiBuZWVkZWQgdG8gc3VjY2Vzc2Z1bGx5IGNvbXBsZXRlIHRoZSByZXF1ZXN0LlxcXCInLFxuICAgICAgICAnc3BlY190aXRsZSc6ICdSRkM1MjE4IzEwLjYnLFxuICAgICAgICAnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzI1MTgjc2VjdGlvbi0xMC42J1xuICAgIH0sXG4gICAgJzUxMSc6IHtcbiAgICAgICAgJ2NvZGUnOiA1MTEsXG4gICAgICAgICd0ZXh0JzogJ05ldHdvcmsgQXV0aGVudGljYXRpb24gUmVxdWlyZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBjbGllbnQgbmVlZHMgdG8gYXV0aGVudGljYXRlIHRvIGdhaW4gbmV0d29yayBhY2Nlc3MuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzY1ODUjNicsXG4gICAgICAgICdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjU4NSNzZWN0aW9uLTYnXG4gICAgfVxufTtcbi8qKlxuICogZ2V0IHRoZSBzdGF0dXMgdGV4dCBmcm9tIFN0YXR1c0NvZGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXR1c1RleHQoc3RhdHVzKSB7XG4gICAgcmV0dXJuIFNUQVRVU19DT0RFX0lORk9bc3RhdHVzXS50ZXh0IHx8ICdVbmtub3duIFN0YXR1cyc7XG59XG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdGhlIEh0dHAgU3RhdHVzIENvZGUgaXMgMjAwLTI5OSAoc3VjY2VzcylcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3VjY2VzcyhzdGF0dXMpIHsgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwOyB9XG47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1odHRwLXN0YXR1cy1jb2Rlcy5qcy5tYXAiLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG4vLyBSZXBsYWNlcyB1c2Ugb2YgUnhKUyBkZWxheS4gU2VlIHYwLjUuNC5cbi8qKiBhZGRzIHNwZWNpZmllZCBkZWxheSAoaW4gbXMpIHRvIGJvdGggbmV4dCBhbmQgZXJyb3IgY2hhbm5lbHMgb2YgdGhlIHJlc3BvbnNlIG9ic2VydmFibGUgKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWxheVJlc3BvbnNlKHJlc3BvbnNlJCwgZGVsYXlNcykge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgdmFyIGNvbXBsZXRlUGVuZGluZyA9IGZhbHNlO1xuICAgICAgICB2YXIgbmV4dFBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IHJlc3BvbnNlJC5zdWJzY3JpYmUoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBuZXh0UGVuZGluZyA9IHRydWU7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcGxldGVQZW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZGVsYXlNcyk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBvYnNlcnZlci5lcnJvcihlcnJvcik7IH0sIGRlbGF5TXMpOyB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb21wbGV0ZVBlbmRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKCFuZXh0UGVuZGluZykge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9O1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVsYXktcmVzcG9uc2UuanMubWFwIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8qKlxuKiBJbnRlcmZhY2UgZm9yIGEgY2xhc3MgdGhhdCBjcmVhdGVzIGFuIGluLW1lbW9yeSBkYXRhYmFzZVxuKlxuKiBJdHMgYGNyZWF0ZURiYCBtZXRob2QgY3JlYXRlcyBhIGhhc2ggb2YgbmFtZWQgY29sbGVjdGlvbnMgdGhhdCByZXByZXNlbnRzIHRoZSBkYXRhYmFzZVxuKlxuKiBGb3IgbWF4aW11bSBmbGV4aWJpbGl0eSwgdGhlIHNlcnZpY2UgbWF5IGRlZmluZSBIVFRQIG1ldGhvZCBvdmVycmlkZXMuXG4qIFN1Y2ggbWV0aG9kcyBtdXN0IG1hdGNoIHRoZSBzcGVsbGluZyBvZiBhbiBIVFRQIG1ldGhvZCBpbiBsb3dlciBjYXNlIChlLmcsIFwiZ2V0XCIpLlxuKiBJZiBhIHJlcXVlc3QgaGFzIGEgbWF0Y2hpbmcgbWV0aG9kLCBpdCB3aWxsIGJlIGNhbGxlZCBhcyBpblxuKiBgZ2V0KGluZm86IHJlcXVlc3RJbmZvLCBkYjoge30pYCB3aGVyZSBgZGJgIGlzIHRoZSBkYXRhYmFzZSBvYmplY3QgZGVzY3JpYmVkIGFib3ZlLlxuKi9cbnZhciBJbk1lbW9yeURiU2VydmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBJbk1lbW9yeURiU2VydmljZSgpIHtcbiAgICB9XG4gICAgcmV0dXJuIEluTWVtb3J5RGJTZXJ2aWNlO1xufSgpKTtcbmV4cG9ydCB7IEluTWVtb3J5RGJTZXJ2aWNlIH07XG4vKipcbiogSW50ZXJmYWNlIGZvciBJbk1lbW9yeUJhY2tlbmQgY29uZmlndXJhdGlvbiBvcHRpb25zXG4qL1xudmFyIEluTWVtb3J5QmFja2VuZENvbmZpZ0FyZ3MgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSW5NZW1vcnlCYWNrZW5kQ29uZmlnQXJncygpIHtcbiAgICB9XG4gICAgcmV0dXJuIEluTWVtb3J5QmFja2VuZENvbmZpZ0FyZ3M7XG59KCkpO1xuZXhwb3J0IHsgSW5NZW1vcnlCYWNrZW5kQ29uZmlnQXJncyB9O1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vKipcbiogIEluTWVtb3J5QmFja2VuZFNlcnZpY2UgY29uZmlndXJhdGlvbiBvcHRpb25zXG4qICBVc2FnZTpcbiogICAgSW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yUm9vdChJbk1lbUhlcm9TZXJ2aWNlLCB7ZGVsYXk6IDYwMH0pXG4qXG4qICBvciBpZiBwcm92aWRpbmcgc2VwYXJhdGVseTpcbiogICAgcHJvdmlkZShJbk1lbW9yeUJhY2tlbmRDb25maWcsIHt1c2VWYWx1ZToge2RlbGF5OiA2MDB9fSksXG4qL1xudmFyIEluTWVtb3J5QmFja2VuZENvbmZpZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBJbk1lbW9yeUJhY2tlbmRDb25maWcoY29uZmlnKSB7XG4gICAgICAgIGlmIChjb25maWcgPT09IHZvaWQgMCkgeyBjb25maWcgPSB7fTsgfVxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHtcbiAgICAgICAgICAgIC8vIGRlZmF1bHQgY29uZmlnOlxuICAgICAgICAgICAgY2FzZVNlbnNpdGl2ZVNlYXJjaDogZmFsc2UsXG4gICAgICAgICAgICBkYXRhRW5jYXBzdWxhdGlvbjogZmFsc2UsXG4gICAgICAgICAgICBkZWxheTogNTAwLFxuICAgICAgICAgICAgZGVsZXRlNDA0OiBmYWxzZSxcbiAgICAgICAgICAgIHBhc3NUaHJ1VW5rbm93blVybDogZmFsc2UsXG4gICAgICAgICAgICBwb3N0MjA0OiB0cnVlLFxuICAgICAgICAgICAgcG9zdDQwOTogZmFsc2UsXG4gICAgICAgICAgICBwdXQyMDQ6IHRydWUsXG4gICAgICAgICAgICBwdXQ0MDQ6IGZhbHNlLFxuICAgICAgICAgICAgYXBpQmFzZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgaG9zdDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgcm9vdFBhdGg6IHVuZGVmaW5lZCAvLyBkZWZhdWx0IHZhbHVlIGlzIGFjdHVhbGx5IHNldCBpbiBJbk1lbW9yeUJhY2tlbmRTZXJ2aWNlIGN0b3JcbiAgICAgICAgfSwgY29uZmlnKTtcbiAgICB9XG4gICAgSW5NZW1vcnlCYWNrZW5kQ29uZmlnID0gX19kZWNvcmF0ZShbXG4gICAgICAgIEluamVjdGFibGUoKSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtJbk1lbW9yeUJhY2tlbmRDb25maWdBcmdzXSlcbiAgICBdLCBJbk1lbW9yeUJhY2tlbmRDb25maWcpO1xuICAgIHJldHVybiBJbk1lbW9yeUJhY2tlbmRDb25maWc7XG59KCkpO1xuZXhwb3J0IHsgSW5NZW1vcnlCYWNrZW5kQ29uZmlnIH07XG4vKiogUmV0dXJuIGluZm9ybWF0aW9uIChVcmlJbmZvKSBhYm91dCBhIFVSSSAgKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVVyaShzdHIpIHtcbiAgICAvLyBBZGFwdGVkIGZyb20gcGFyc2V1cmkgcGFja2FnZSAtIGh0dHA6Ly9ibG9nLnN0ZXZlbmxldml0aGFuLmNvbS9hcmNoaXZlcy9wYXJzZXVyaVxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICB2YXIgVVJMX1JFR0VYID0gL14oPzooPyFbXjpAXSs6W146QFxcL10qQCkoW146XFwvPyMuXSspOik/KD86XFwvXFwvKT8oKD86KChbXjpAXSopKD86OihbXjpAXSopKT8pP0ApPyhbXjpcXC8/I10qKSg/OjooXFxkKikpPykoKChcXC8oPzpbXj8jXSg/IVtePyNcXC9dKlxcLltePyNcXC8uXSsoPzpbPyNdfCQpKSkqXFwvPyk/KFtePyNcXC9dKikpKD86XFw/KFteI10qKSk/KD86IyguKikpPykvO1xuICAgIHZhciBtID0gVVJMX1JFR0VYLmV4ZWMoc3RyKTtcbiAgICB2YXIgdXJpID0ge1xuICAgICAgICBzb3VyY2U6ICcnLFxuICAgICAgICBwcm90b2NvbDogJycsXG4gICAgICAgIGF1dGhvcml0eTogJycsXG4gICAgICAgIHVzZXJJbmZvOiAnJyxcbiAgICAgICAgdXNlcjogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgaG9zdDogJycsXG4gICAgICAgIHBvcnQ6ICcnLFxuICAgICAgICByZWxhdGl2ZTogJycsXG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgICBkaXJlY3Rvcnk6ICcnLFxuICAgICAgICBmaWxlOiAnJyxcbiAgICAgICAgcXVlcnk6ICcnLFxuICAgICAgICBhbmNob3I6ICcnXG4gICAgfTtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHVyaSk7XG4gICAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIHVyaVtrZXlzW2ldXSA9IG1baV0gfHwgJyc7XG4gICAgfVxuICAgIHJldHVybiB1cmk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVHJhaWxpbmdTbGFzaChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWludGVyZmFjZXMuanMubWFwIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0LCBvZiwgZnJvbSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY29uY2F0TWFwLCBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGdldFN0YXR1c1RleHQsIGlzU3VjY2VzcywgU1RBVFVTIH0gZnJvbSAnLi9odHRwLXN0YXR1cy1jb2Rlcyc7XG5pbXBvcnQgeyBkZWxheVJlc3BvbnNlIH0gZnJvbSAnLi9kZWxheS1yZXNwb25zZSc7XG5pbXBvcnQgeyBJbk1lbW9yeUJhY2tlbmRDb25maWcsIHBhcnNlVXJpLCByZW1vdmVUcmFpbGluZ1NsYXNoIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgaW4tbWVtb3J5IHdlYiBhcGkgYmFjay1lbmRzXG4gKiBTaW11bGF0ZSB0aGUgYmVoYXZpb3Igb2YgYSBSRVNUeSB3ZWIgYXBpXG4gKiBiYWNrZWQgYnkgdGhlIHNpbXBsZSBpbi1tZW1vcnkgZGF0YSBzdG9yZSBwcm92aWRlZCBieSB0aGUgaW5qZWN0ZWQgYEluTWVtb3J5RGJTZXJ2aWNlYCBzZXJ2aWNlLlxuICogQ29uZm9ybXMgbW9zdGx5IHRvIGJlaGF2aW9yIGRlc2NyaWJlZCBoZXJlOlxuICogaHR0cDovL3d3dy5yZXN0YXBpdHV0b3JpYWwuY29tL2xlc3NvbnMvaHR0cG1ldGhvZHMuaHRtbFxuICovXG52YXIgQmFja2VuZFNlcnZpY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQmFja2VuZFNlcnZpY2UoaW5NZW1EYlNlcnZpY2UsIGNvbmZpZykge1xuICAgICAgICBpZiAoY29uZmlnID09PSB2b2lkIDApIHsgY29uZmlnID0ge307IH1cbiAgICAgICAgdGhpcy5pbk1lbURiU2VydmljZSA9IGluTWVtRGJTZXJ2aWNlO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IG5ldyBJbk1lbW9yeUJhY2tlbmRDb25maWcoKTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0SW5mb1V0aWxzID0gdGhpcy5nZXRSZXF1ZXN0SW5mb1V0aWxzKCk7XG4gICAgICAgIHZhciBsb2MgPSB0aGlzLmdldExvY2F0aW9uKCcvJyk7XG4gICAgICAgIHRoaXMuY29uZmlnLmhvc3QgPSBsb2MuaG9zdDsgLy8gZGVmYXVsdCB0byBhcHAgd2ViIHNlcnZlciBob3N0XG4gICAgICAgIHRoaXMuY29uZmlnLnJvb3RQYXRoID0gbG9jLnBhdGg7IC8vIGRlZmF1bHQgdG8gcGF0aCB3aGVuIGFwcCBpcyBzZXJ2ZWQgKGUuZy4nLycpXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5jb25maWcsIGNvbmZpZyk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCYWNrZW5kU2VydmljZS5wcm90b3R5cGUsIFwiZGJSZWFkeVwiLCB7XG4gICAgICAgIC8vLy8gIHByb3RlY3RlZCAvLy8vL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kYlJlYWR5U3ViamVjdCkge1xuICAgICAgICAgICAgICAgIC8vIGZpcnN0IHRpbWUgdGhlIHNlcnZpY2UgaXMgY2FsbGVkLlxuICAgICAgICAgICAgICAgIHRoaXMuZGJSZWFkeVN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0RGIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRiUmVhZHlTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpLnBpcGUoZmlyc3QoZnVuY3Rpb24gKHIpIHsgcmV0dXJuIHI7IH0pKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogUHJvY2VzcyBSZXF1ZXN0IGFuZCByZXR1cm4gYW4gT2JzZXJ2YWJsZSBvZiBIdHRwIFJlc3BvbnNlIG9iamVjdFxuICAgICAqIGluIHRoZSBtYW5uZXIgb2YgYSBSRVNUeSB3ZWIgYXBpLlxuICAgICAqXG4gICAgICogRXhwZWN0IFVSSSBwYXR0ZXJuIGluIHRoZSBmb3JtIDpiYXNlLzpjb2xsZWN0aW9uTmFtZS86aWQ/XG4gICAgICogRXhhbXBsZXM6XG4gICAgICogICAvLyBmb3Igc3RvcmUgd2l0aCBhICdjdXN0b21lcnMnIGNvbGxlY3Rpb25cbiAgICAgKiAgIEdFVCBhcGkvY3VzdG9tZXJzICAgICAgICAgIC8vIGFsbCBjdXN0b21lcnNcbiAgICAgKiAgIEdFVCBhcGkvY3VzdG9tZXJzLzQyICAgICAgIC8vIHRoZSBjaGFyYWN0ZXIgd2l0aCBpZD00MlxuICAgICAqICAgR0VUIGFwaS9jdXN0b21lcnM/bmFtZT1eaiAgLy8gJ2onIGlzIGEgcmVnZXg7IHJldHVybnMgY3VzdG9tZXJzIHdob3NlIG5hbWUgc3RhcnRzIHdpdGggJ2onIG9yICdKJ1xuICAgICAqICAgR0VUIGFwaS9jdXN0b21lcnMuanNvbi80MiAgLy8gaWdub3JlcyB0aGUgXCIuanNvblwiXG4gICAgICpcbiAgICAgKiBBbHNvIGFjY2VwdHMgZGlyZWN0IGNvbW1hbmRzIHRvIHRoZSBzZXJ2aWNlIGluIHdoaWNoIHRoZSBsYXN0IHNlZ21lbnQgb2YgdGhlIGFwaUJhc2UgaXMgdGhlIHdvcmQgXCJjb21tYW5kc1wiXG4gICAgICogRXhhbXBsZXM6XG4gICAgICogICAgIFBPU1QgY29tbWFuZHMvcmVzZXREYixcbiAgICAgKiAgICAgR0VUL1BPU1QgY29tbWFuZHMvY29uZmlnIC0gZ2V0IG9yIChyZSlzZXQgdGhlIGNvbmZpZ1xuICAgICAqXG4gICAgICogICBIVFRQIG92ZXJyaWRlczpcbiAgICAgKiAgICAgSWYgdGhlIGluamVjdGVkIGluTWVtRGJTZXJ2aWNlIGRlZmluZXMgYW4gSFRUUCBtZXRob2QgKGxvd2VyY2FzZSlcbiAgICAgKiAgICAgVGhlIHJlcXVlc3QgaXMgZm9yd2FyZGVkIHRvIHRoYXQgbWV0aG9kIGFzIGluXG4gICAgICogICAgIGBpbk1lbURiU2VydmljZS5nZXQocmVxdWVzdEluZm8pYFxuICAgICAqICAgICB3aGljaCBtdXN0IHJldHVybiBlaXRoZXIgYW4gT2JzZXJ2YWJsZSBvZiB0aGUgcmVzcG9uc2UgdHlwZVxuICAgICAqICAgICBmb3IgdGhpcyBodHRwIGxpYnJhcnkgb3IgbnVsbHx1bmRlZmluZWQgKHdoaWNoIG1lYW5zIFwia2VlcCBwcm9jZXNzaW5nXCIpLlxuICAgICAqL1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5oYW5kbGVSZXF1ZXN0ID0gZnVuY3Rpb24gKHJlcSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyAgaGFuZGxlIHRoZSByZXF1ZXN0IHdoZW4gdGhlcmUgaXMgYW4gaW4tbWVtb3J5IGRhdGFiYXNlXG4gICAgICAgIHJldHVybiB0aGlzLmRiUmVhZHkucGlwZShjb25jYXRNYXAoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlUmVxdWVzdF8ocmVxKTsgfSkpO1xuICAgIH07XG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmhhbmRsZVJlcXVlc3RfID0gZnVuY3Rpb24gKHJlcSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgdXJsID0gcmVxLnVybFdpdGhQYXJhbXMgPyByZXEudXJsV2l0aFBhcmFtcyA6IHJlcS51cmw7XG4gICAgICAgIC8vIFRyeSBvdmVycmlkZSBwYXJzZXJcbiAgICAgICAgLy8gSWYgbm8gb3ZlcnJpZGUgcGFyc2VyIG9yIGl0IHJldHVybnMgbm90aGluZywgdXNlIGRlZmF1bHQgcGFyc2VyXG4gICAgICAgIHZhciBwYXJzZXIgPSB0aGlzLmJpbmQoJ3BhcnNlUmVxdWVzdFVybCcpO1xuICAgICAgICB2YXIgcGFyc2VkID0gKHBhcnNlciAmJiBwYXJzZXIodXJsLCB0aGlzLnJlcXVlc3RJbmZvVXRpbHMpKSB8fFxuICAgICAgICAgICAgdGhpcy5wYXJzZVJlcXVlc3RVcmwodXJsKTtcbiAgICAgICAgdmFyIGNvbGxlY3Rpb25OYW1lID0gcGFyc2VkLmNvbGxlY3Rpb25OYW1lO1xuICAgICAgICB2YXIgY29sbGVjdGlvbiA9IHRoaXMuZGJbY29sbGVjdGlvbk5hbWVdO1xuICAgICAgICB2YXIgcmVxSW5mbyA9IHtcbiAgICAgICAgICAgIHJlcTogcmVxLFxuICAgICAgICAgICAgYXBpQmFzZTogcGFyc2VkLmFwaUJhc2UsXG4gICAgICAgICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uLFxuICAgICAgICAgICAgY29sbGVjdGlvbk5hbWU6IGNvbGxlY3Rpb25OYW1lLFxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5jcmVhdGVIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcbiAgICAgICAgICAgIGlkOiB0aGlzLnBhcnNlSWQoY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUsIHBhcnNlZC5pZCksXG4gICAgICAgICAgICBtZXRob2Q6IHRoaXMuZ2V0UmVxdWVzdE1ldGhvZChyZXEpLFxuICAgICAgICAgICAgcXVlcnk6IHBhcnNlZC5xdWVyeSxcbiAgICAgICAgICAgIHJlc291cmNlVXJsOiBwYXJzZWQucmVzb3VyY2VVcmwsXG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIHV0aWxzOiB0aGlzLnJlcXVlc3RJbmZvVXRpbHNcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHJlc09wdGlvbnM7XG4gICAgICAgIGlmICgvY29tbWFuZHNcXC8/JC9pLnRlc3QocmVxSW5mby5hcGlCYXNlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tbWFuZHMocmVxSW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1ldGhvZEludGVyY2VwdG9yID0gdGhpcy5iaW5kKHJlcUluZm8ubWV0aG9kKTtcbiAgICAgICAgaWYgKG1ldGhvZEludGVyY2VwdG9yKSB7XG4gICAgICAgICAgICAvLyBJbk1lbW9yeURiU2VydmljZSBpbnRlcmNlcHRzIHRoaXMgSFRUUCBtZXRob2QuXG4gICAgICAgICAgICAvLyBpZiBpbnRlcmNlcHRvciBwcm9kdWNlZCBhIHJlc3BvbnNlLCByZXR1cm4gaXQuXG4gICAgICAgICAgICAvLyBlbHNlIEluTWVtb3J5RGJTZXJ2aWNlIGNob3NlIG5vdCB0byBpbnRlcmNlcHQ7IGNvbnRpbnVlIHByb2Nlc3NpbmcuXG4gICAgICAgICAgICB2YXIgaW50ZXJjZXB0b3JSZXNwb25zZSA9IG1ldGhvZEludGVyY2VwdG9yKHJlcUluZm8pO1xuICAgICAgICAgICAgaWYgKGludGVyY2VwdG9yUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW50ZXJjZXB0b3JSZXNwb25zZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kYltjb2xsZWN0aW9uTmFtZV0pIHtcbiAgICAgICAgICAgIC8vIHJlcXVlc3QgaXMgZm9yIGEga25vd24gY29sbGVjdGlvbiBvZiB0aGUgSW5NZW1vcnlEYlNlcnZpY2VcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVJlc3BvbnNlJChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5jb2xsZWN0aW9uSGFuZGxlcihyZXFJbmZvKTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLnBhc3NUaHJ1VW5rbm93blVybCkge1xuICAgICAgICAgICAgLy8gdW5rbm93biBjb2xsZWN0aW9uOyBwYXNzIHJlcXVlc3QgdGhydSB0byBhIFwicmVhbFwiIGJhY2tlbmQuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRQYXNzVGhydUJhY2tlbmQoKS5oYW5kbGUocmVxKTtcbiAgICAgICAgfVxuICAgICAgICAvLyA0MDQgLSBjYW4ndCBoYW5kbGUgdGhpcyByZXF1ZXN0XG4gICAgICAgIHJlc09wdGlvbnMgPSB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHVybCwgU1RBVFVTLk5PVF9GT1VORCwgXCJDb2xsZWN0aW9uICdcIiArIGNvbGxlY3Rpb25OYW1lICsgXCInIG5vdCBmb3VuZFwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUmVzcG9uc2UkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc09wdGlvbnM7IH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQWRkIGNvbmZpZ3VyZWQgZGVsYXkgdG8gcmVzcG9uc2Ugb2JzZXJ2YWJsZSB1bmxlc3MgZGVsYXkgPT09IDBcbiAgICAgKi9cbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuYWRkRGVsYXkgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgdmFyIGQgPSB0aGlzLmNvbmZpZy5kZWxheTtcbiAgICAgICAgcmV0dXJuIGQgPT09IDAgPyByZXNwb25zZSA6IGRlbGF5UmVzcG9uc2UocmVzcG9uc2UsIGQgfHwgNTAwKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFwcGx5IHF1ZXJ5L3NlYXJjaCBwYXJhbWV0ZXJzIGFzIGEgZmlsdGVyIG92ZXIgdGhlIGNvbGxlY3Rpb25cbiAgICAgKiBUaGlzIGltcGwgb25seSBzdXBwb3J0cyBSZWdFeHAgcXVlcmllcyBvbiBzdHJpbmcgcHJvcGVydGllcyBvZiB0aGUgY29sbGVjdGlvblxuICAgICAqIEFORHMgdGhlIGNvbmRpdGlvbnMgdG9nZXRoZXJcbiAgICAgKi9cbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuYXBwbHlRdWVyeSA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBxdWVyeSkge1xuICAgICAgICAvLyBleHRyYWN0IGZpbHRlcmluZyBjb25kaXRpb25zIC0ge3Byb3BlcnR5TmFtZSwgUmVnRXhwcykgLSBmcm9tIHF1ZXJ5L3NlYXJjaCBwYXJhbWV0ZXJzXG4gICAgICAgIHZhciBjb25kaXRpb25zID0gW107XG4gICAgICAgIHZhciBjYXNlU2Vuc2l0aXZlID0gdGhpcy5jb25maWcuY2FzZVNlbnNpdGl2ZVNlYXJjaCA/IHVuZGVmaW5lZCA6ICdpJztcbiAgICAgICAgcXVlcnkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIG5hbWUpIHtcbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2goZnVuY3Rpb24gKHYpIHsgcmV0dXJuIGNvbmRpdGlvbnMucHVzaCh7IG5hbWU6IG5hbWUsIHJ4OiBuZXcgUmVnRXhwKGRlY29kZVVSSSh2KSwgY2FzZVNlbnNpdGl2ZSkgfSk7IH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGxlbiA9IGNvbmRpdGlvbnMubGVuZ3RoO1xuICAgICAgICBpZiAoIWxlbikge1xuICAgICAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gICAgICAgIH1cbiAgICAgICAgLy8gQU5EIHRoZSBSZWdFeHAgY29uZGl0aW9uc1xuICAgICAgICByZXR1cm4gY29sbGVjdGlvbi5maWx0ZXIoZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgICAgdmFyIG9rID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBpID0gbGVuO1xuICAgICAgICAgICAgd2hpbGUgKG9rICYmIGkpIHtcbiAgICAgICAgICAgICAgICBpIC09IDE7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmQgPSBjb25kaXRpb25zW2ldO1xuICAgICAgICAgICAgICAgIG9rID0gY29uZC5yeC50ZXN0KHJvd1tjb25kLm5hbWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvaztcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgYSBtZXRob2QgZnJvbSB0aGUgYEluTWVtb3J5RGJTZXJ2aWNlYCAoaWYgaXQgZXhpc3RzKSwgYm91bmQgdG8gdGhhdCBzZXJ2aWNlXG4gICAgICovXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAobWV0aG9kTmFtZSkge1xuICAgICAgICB2YXIgZm4gPSB0aGlzLmluTWVtRGJTZXJ2aWNlW21ldGhvZE5hbWVdO1xuICAgICAgICByZXR1cm4gZm4gPyBmbi5iaW5kKHRoaXMuaW5NZW1EYlNlcnZpY2UpIDogdW5kZWZpbmVkO1xuICAgIH07XG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmJvZGlmeSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5kYXRhRW5jYXBzdWxhdGlvbiA/IHsgZGF0YTogZGF0YSB9IDogZGF0YTtcbiAgICB9O1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICB9O1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5jb2xsZWN0aW9uSGFuZGxlciA9IGZ1bmN0aW9uIChyZXFJbmZvKSB7XG4gICAgICAgIC8vIGNvbnN0IHJlcSA9IHJlcUluZm8ucmVxO1xuICAgICAgICB2YXIgcmVzT3B0aW9ucztcbiAgICAgICAgc3dpdGNoIChyZXFJbmZvLm1ldGhvZCkge1xuICAgICAgICAgICAgY2FzZSAnZ2V0JzpcbiAgICAgICAgICAgICAgICByZXNPcHRpb25zID0gdGhpcy5nZXQocmVxSW5mbyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwb3N0JzpcbiAgICAgICAgICAgICAgICByZXNPcHRpb25zID0gdGhpcy5wb3N0KHJlcUluZm8pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncHV0JzpcbiAgICAgICAgICAgICAgICByZXNPcHRpb25zID0gdGhpcy5wdXQocmVxSW5mbyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkZWxldGUnOlxuICAgICAgICAgICAgICAgIHJlc09wdGlvbnMgPSB0aGlzLmRlbGV0ZShyZXFJbmZvKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmVzT3B0aW9ucyA9IHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnMocmVxSW5mby51cmwsIFNUQVRVUy5NRVRIT0RfTk9UX0FMTE9XRUQsICdNZXRob2Qgbm90IGFsbG93ZWQnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBgaW5NZW1EYlNlcnZpY2UucmVzcG9uc2VJbnRlcmNlcHRvcmAgZXhpc3RzLCBsZXQgaXQgbW9ycGggdGhlIHJlc3BvbnNlIG9wdGlvbnNcbiAgICAgICAgdmFyIGludGVyY2VwdG9yID0gdGhpcy5iaW5kKCdyZXNwb25zZUludGVyY2VwdG9yJyk7XG4gICAgICAgIHJldHVybiBpbnRlcmNlcHRvciA/IGludGVyY2VwdG9yKHJlc09wdGlvbnMsIHJlcUluZm8pIDogcmVzT3B0aW9ucztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENvbW1hbmRzIHJlY29uZmlndXJlIHRoZSBpbi1tZW1vcnkgd2ViIGFwaSBzZXJ2aWNlIG9yIGV4dHJhY3QgaW5mb3JtYXRpb24gZnJvbSBpdC5cbiAgICAgKiBDb21tYW5kcyBpZ25vcmUgdGhlIGxhdGVuY3kgZGVsYXkgYW5kIHJlc3BvbmQgQVNBUC5cbiAgICAgKlxuICAgICAqIFdoZW4gdGhlIGxhc3Qgc2VnbWVudCBvZiB0aGUgYGFwaUJhc2VgIHBhdGggaXMgXCJjb21tYW5kc1wiLFxuICAgICAqIHRoZSBgY29sbGVjdGlvbk5hbWVgIGlzIHRoZSBjb21tYW5kLlxuICAgICAqXG4gICAgICogRXhhbXBsZSBVUkxzOlxuICAgICAqICAgY29tbWFuZHMvcmVzZXRkYiAoUE9TVCkgLy8gUmVzZXQgdGhlIFwiZGF0YWJhc2VcIiB0byBpdHMgb3JpZ2luYWwgc3RhdGVcbiAgICAgKiAgIGNvbW1hbmRzL2NvbmZpZyAoR0VUKSAgIC8vIFJldHVybiB0aGlzIHNlcnZpY2UncyBjb25maWcgb2JqZWN0XG4gICAgICogICBjb21tYW5kcy9jb25maWcgKFBPU1QpICAvLyBVcGRhdGUgdGhlIGNvbmZpZyAoZS5nLiB0aGUgZGVsYXkpXG4gICAgICpcbiAgICAgKiBVc2FnZTpcbiAgICAgKiAgIGh0dHAucG9zdCgnY29tbWFuZHMvcmVzZXRkYicsIHVuZGVmaW5lZCk7XG4gICAgICogICBodHRwLmdldCgnY29tbWFuZHMvY29uZmlnJyk7XG4gICAgICogICBodHRwLnBvc3QoJ2NvbW1hbmRzL2NvbmZpZycsICd7XCJkZWxheVwiOjEwMDB9Jyk7XG4gICAgICovXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmNvbW1hbmRzID0gZnVuY3Rpb24gKHJlcUluZm8pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGNvbW1hbmQgPSByZXFJbmZvLmNvbGxlY3Rpb25OYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHZhciBtZXRob2QgPSByZXFJbmZvLm1ldGhvZDtcbiAgICAgICAgdmFyIHJlc09wdGlvbnMgPSB7XG4gICAgICAgICAgICB1cmw6IHJlcUluZm8udXJsXG4gICAgICAgIH07XG4gICAgICAgIHN3aXRjaCAoY29tbWFuZCkge1xuICAgICAgICAgICAgY2FzZSAncmVzZXRkYic6XG4gICAgICAgICAgICAgICAgcmVzT3B0aW9ucy5zdGF0dXMgPSBTVEFUVVMuTk9fQ09OVEVOVDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXNldERiKHJlcUluZm8pLnBpcGUoY29uY2F0TWFwKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmNyZWF0ZVJlc3BvbnNlJChmdW5jdGlvbiAoKSB7IHJldHVybiByZXNPcHRpb25zOyB9LCBmYWxzZSAvKiBubyBsYXRlbmN5IGRlbGF5ICovKTsgfSkpO1xuICAgICAgICAgICAgY2FzZSAnY29uZmlnJzpcbiAgICAgICAgICAgICAgICBpZiAobWV0aG9kID09PSAnZ2V0Jykge1xuICAgICAgICAgICAgICAgICAgICByZXNPcHRpb25zLnN0YXR1cyA9IFNUQVRVUy5PSztcbiAgICAgICAgICAgICAgICAgICAgcmVzT3B0aW9ucy5ib2R5ID0gdGhpcy5jbG9uZSh0aGlzLmNvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGFueSBvdGhlciBIVFRQIG1ldGhvZCBpcyBhc3N1bWVkIHRvIGJlIGEgY29uZmlnIHVwZGF0ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJvZHkgPSB0aGlzLmdldEpzb25Cb2R5KHJlcUluZm8ucmVxKTtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmNvbmZpZywgYm9keSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFzc1RocnVCYWNrZW5kID0gdW5kZWZpbmVkOyAvLyByZS1jcmVhdGUgd2hlbiBuZWVkZWRcbiAgICAgICAgICAgICAgICAgICAgcmVzT3B0aW9ucy5zdGF0dXMgPSBTVEFUVVMuTk9fQ09OVEVOVDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJlc09wdGlvbnMgPSB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHJlcUluZm8udXJsLCBTVEFUVVMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLCBcIlVua25vd24gY29tbWFuZCBcXFwiXCIgKyBjb21tYW5kICsgXCJcXFwiXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVJlc3BvbnNlJChmdW5jdGlvbiAoKSB7IHJldHVybiByZXNPcHRpb25zOyB9LCBmYWxzZSAvKiBubyBsYXRlbmN5IGRlbGF5ICovKTtcbiAgICB9O1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyA9IGZ1bmN0aW9uICh1cmwsIHN0YXR1cywgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYm9keTogeyBlcnJvcjogXCJcIiArIG1lc3NhZ2UgfSxcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5jcmVhdGVIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcbiAgICAgICAgICAgIHN0YXR1czogc3RhdHVzXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBjb2xkIHJlc3BvbnNlIE9ic2VydmFibGUgZnJvbSBhIGZhY3RvcnkgZm9yIFJlc3BvbnNlT3B0aW9uc1xuICAgICAqIEBwYXJhbSByZXNPcHRpb25zRmFjdG9yeSAtIGNyZWF0ZXMgUmVzcG9uc2VPcHRpb25zIHdoZW4gb2JzZXJ2YWJsZSBpcyBzdWJzY3JpYmVkXG4gICAgICogQHBhcmFtIHdpdGhEZWxheSAtIGlmIHRydWUgKGRlZmF1bHQpLCBhZGQgc2ltdWxhdGVkIGxhdGVuY3kgZGVsYXkgZnJvbSBjb25maWd1cmF0aW9uXG4gICAgICovXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmNyZWF0ZVJlc3BvbnNlJCA9IGZ1bmN0aW9uIChyZXNPcHRpb25zRmFjdG9yeSwgd2l0aERlbGF5KSB7XG4gICAgICAgIGlmICh3aXRoRGVsYXkgPT09IHZvaWQgMCkgeyB3aXRoRGVsYXkgPSB0cnVlOyB9XG4gICAgICAgIHZhciByZXNPcHRpb25zJCA9IHRoaXMuY3JlYXRlUmVzcG9uc2VPcHRpb25zJChyZXNPcHRpb25zRmFjdG9yeSk7XG4gICAgICAgIHZhciByZXNwJCA9IHRoaXMuY3JlYXRlUmVzcG9uc2UkZnJvbVJlc3BvbnNlT3B0aW9ucyQocmVzT3B0aW9ucyQpO1xuICAgICAgICByZXR1cm4gd2l0aERlbGF5ID8gdGhpcy5hZGREZWxheShyZXNwJCkgOiByZXNwJDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGNvbGQgT2JzZXJ2YWJsZSBvZiBSZXNwb25zZU9wdGlvbnMuXG4gICAgICogQHBhcmFtIHJlc09wdGlvbnNGYWN0b3J5IC0gY3JlYXRlcyBSZXNwb25zZU9wdGlvbnMgd2hlbiBvYnNlcnZhYmxlIGlzIHN1YnNjcmliZWRcbiAgICAgKi9cbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuY3JlYXRlUmVzcG9uc2VPcHRpb25zJCA9IGZ1bmN0aW9uIChyZXNPcHRpb25zRmFjdG9yeSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHJlc3BvbnNlT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHZhciByZXNPcHRpb25zO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXNPcHRpb25zID0gcmVzT3B0aW9uc0ZhY3RvcnkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHZhciBlcnIgPSBlcnJvci5tZXNzYWdlIHx8IGVycm9yO1xuICAgICAgICAgICAgICAgIHJlc09wdGlvbnMgPSBfdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucygnJywgU1RBVFVTLklOVEVSTkFMX1NFUlZFUl9FUlJPUiwgXCJcIiArIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc3RhdHVzID0gcmVzT3B0aW9ucy5zdGF0dXM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc09wdGlvbnMuc3RhdHVzVGV4dCA9IGdldFN0YXR1c1RleHQoc3RhdHVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7IC8qIGlnbm9yZSBmYWlsdXJlICovIH1cbiAgICAgICAgICAgIGlmIChpc1N1Y2Nlc3Moc3RhdHVzKSkge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlT2JzZXJ2ZXIubmV4dChyZXNPcHRpb25zKTtcbiAgICAgICAgICAgICAgICByZXNwb25zZU9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZU9ic2VydmVyLmVycm9yKHJlc09wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgfTsgLy8gdW5zdWJzY3JpYmUgZnVuY3Rpb25cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBjb2xsZWN0aW9uID0gX2EuY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUgPSBfYS5jb2xsZWN0aW9uTmFtZSwgaGVhZGVycyA9IF9hLmhlYWRlcnMsIGlkID0gX2EuaWQsIHVybCA9IF9hLnVybDtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcbiAgICAgICAgaWYgKGlkID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnModXJsLCBTVEFUVVMuTk9UX0ZPVU5ELCBcIk1pc3NpbmcgXFxcIlwiICsgY29sbGVjdGlvbk5hbWUgKyBcIlxcXCIgaWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGV4aXN0cyA9IHRoaXMucmVtb3ZlQnlJZChjb2xsZWN0aW9uLCBpZCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICAgICAgc3RhdHVzOiAoZXhpc3RzIHx8ICF0aGlzLmNvbmZpZy5kZWxldGU0MDQpID8gU1RBVFVTLk5PX0NPTlRFTlQgOiBTVEFUVVMuTk9UX0ZPVU5EXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBGaW5kIGZpcnN0IGluc3RhbmNlIG9mIGl0ZW0gaW4gY29sbGVjdGlvbiBieSBgaXRlbS5pZGBcbiAgICAgKiBAcGFyYW0gY29sbGVjdGlvblxuICAgICAqIEBwYXJhbSBpZFxuICAgICAqL1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5maW5kQnlJZCA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBpZCkge1xuICAgICAgICByZXR1cm4gY29sbGVjdGlvbi5maW5kKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtLmlkID09PSBpZDsgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSB0aGUgbmV4dCBhdmFpbGFibGUgaWQgZm9yIGl0ZW0gaW4gdGhpcyBjb2xsZWN0aW9uXG4gICAgICogVXNlIG1ldGhvZCBmcm9tIGBpbk1lbURiU2VydmljZWAgaWYgaXQgZXhpc3RzIGFuZCByZXR1cm5zIGEgdmFsdWUsXG4gICAgICogZWxzZSBkZWxlZ2F0ZXMgdG8gYGdlbklkRGVmYXVsdGAuXG4gICAgICogQHBhcmFtIGNvbGxlY3Rpb24gLSBjb2xsZWN0aW9uIG9mIGl0ZW1zIHdpdGggYGlkYCBrZXkgcHJvcGVydHlcbiAgICAgKi9cbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuZ2VuSWQgPSBmdW5jdGlvbiAoY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUpIHtcbiAgICAgICAgdmFyIGdlbklkID0gdGhpcy5iaW5kKCdnZW5JZCcpO1xuICAgICAgICBpZiAoZ2VuSWQpIHtcbiAgICAgICAgICAgIHZhciBpZCA9IGdlbklkKGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lKTtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzXG4gICAgICAgICAgICBpZiAoaWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmdlbklkRGVmYXVsdChjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEZWZhdWx0IGdlbmVyYXRvciBvZiB0aGUgbmV4dCBhdmFpbGFibGUgaWQgZm9yIGl0ZW0gaW4gdGhpcyBjb2xsZWN0aW9uXG4gICAgICogVGhpcyBkZWZhdWx0IGltcGxlbWVudGF0aW9uIHdvcmtzIG9ubHkgZm9yIG51bWVyaWMgaWRzLlxuICAgICAqIEBwYXJhbSBjb2xsZWN0aW9uIC0gY29sbGVjdGlvbiBvZiBpdGVtcyB3aXRoIGBpZGAga2V5IHByb3BlcnR5XG4gICAgICogQHBhcmFtIGNvbGxlY3Rpb25OYW1lIC0gbmFtZSBvZiB0aGUgY29sbGVjdGlvblxuICAgICAqL1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5nZW5JZERlZmF1bHQgPSBmdW5jdGlvbiAoY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQ29sbGVjdGlvbklkTnVtZXJpYyhjb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvbGxlY3Rpb24gJ1wiICsgY29sbGVjdGlvbk5hbWUgKyBcIicgaWQgdHlwZSBpcyBub24tbnVtZXJpYyBvciB1bmtub3duLiBDYW4gb25seSBnZW5lcmF0ZSBudW1lcmljIGlkcy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1heElkID0gMDtcbiAgICAgICAgY29sbGVjdGlvbi5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGl0ZW0pIHtcbiAgICAgICAgICAgIG1heElkID0gTWF0aC5tYXgobWF4SWQsIHR5cGVvZiBpdGVtLmlkID09PSAnbnVtYmVyJyA/IGl0ZW0uaWQgOiBtYXhJZCk7XG4gICAgICAgIH0sIHVuZGVmaW5lZCk7XG4gICAgICAgIHJldHVybiBtYXhJZCArIDE7XG4gICAgfTtcbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBjb2xsZWN0aW9uID0gX2EuY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUgPSBfYS5jb2xsZWN0aW9uTmFtZSwgaGVhZGVycyA9IF9hLmhlYWRlcnMsIGlkID0gX2EuaWQsIHF1ZXJ5ID0gX2EucXVlcnksIHVybCA9IF9hLnVybDtcbiAgICAgICAgdmFyIGRhdGEgPSBjb2xsZWN0aW9uO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xuICAgICAgICBpZiAoaWQgIT0gdW5kZWZpbmVkICYmIGlkICE9PSAnJykge1xuICAgICAgICAgICAgZGF0YSA9IHRoaXMuZmluZEJ5SWQoY29sbGVjdGlvbiwgaWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHF1ZXJ5KSB7XG4gICAgICAgICAgICBkYXRhID0gdGhpcy5hcHBseVF1ZXJ5KGNvbGxlY3Rpb24sIHF1ZXJ5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHVybCwgU1RBVFVTLk5PVF9GT1VORCwgXCInXCIgKyBjb2xsZWN0aW9uTmFtZSArIFwiJyB3aXRoIGlkPSdcIiArIGlkICsgXCInIG5vdCBmb3VuZFwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYm9keTogdGhpcy5ib2RpZnkodGhpcy5jbG9uZShkYXRhKSksXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICAgICAgc3RhdHVzOiBTVEFUVVMuT0tcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBsb2NhdGlvbiBpbmZvIGZyb20gYSB1cmwsIGV2ZW4gb24gc2VydmVyIHdoZXJlIGBkb2N1bWVudGAgaXMgbm90IGRlZmluZWRcbiAgICAgKi9cbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuZ2V0TG9jYXRpb24gPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIGlmICghdXJsLnN0YXJ0c1dpdGgoJ2h0dHAnKSkge1xuICAgICAgICAgICAgLy8gZ2V0IHRoZSBkb2N1bWVudCBpZmYgcnVubmluZyBpbiBicm93c2VyXG4gICAgICAgICAgICB2YXIgZG9jID0gKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpID8gdW5kZWZpbmVkIDogZG9jdW1lbnQ7XG4gICAgICAgICAgICAvLyBhZGQgaG9zdCBpbmZvIHRvIHVybCBiZWZvcmUgcGFyc2luZy4gIFVzZSBhIGZha2UgaG9zdCB3aGVuIG5vdCBpbiBicm93c2VyLlxuICAgICAgICAgICAgdmFyIGJhc2UgPSBkb2MgPyBkb2MubG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgZG9jLmxvY2F0aW9uLmhvc3QgOiAnaHR0cDovL2Zha2UnO1xuICAgICAgICAgICAgdXJsID0gdXJsLnN0YXJ0c1dpdGgoJy8nKSA/IGJhc2UgKyB1cmwgOiBiYXNlICsgJy8nICsgdXJsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJzZVVyaSh1cmwpO1xuICAgIH07XG4gICAgO1xuICAgIC8qKlxuICAgICAqIGdldCBvciBjcmVhdGUgdGhlIGZ1bmN0aW9uIHRoYXQgcGFzc2VzIHVuaGFuZGxlZCByZXF1ZXN0c1xuICAgICAqIHRocm91Z2ggdG8gdGhlIFwicmVhbFwiIGJhY2tlbmQuXG4gICAgICovXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmdldFBhc3NUaHJ1QmFja2VuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFzc1RocnVCYWNrZW5kID9cbiAgICAgICAgICAgIHRoaXMucGFzc1RocnVCYWNrZW5kIDpcbiAgICAgICAgICAgIHRoaXMucGFzc1RocnVCYWNrZW5kID0gdGhpcy5jcmVhdGVQYXNzVGhydUJhY2tlbmQoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCB1dGlsaXR5IG1ldGhvZHMgZnJvbSB0aGlzIHNlcnZpY2UgaW5zdGFuY2UuXG4gICAgICogVXNlZnVsIHdpdGhpbiBhbiBIVFRQIG1ldGhvZCBvdmVycmlkZVxuICAgICAqL1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5nZXRSZXF1ZXN0SW5mb1V0aWxzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY3JlYXRlUmVzcG9uc2UkOiB0aGlzLmNyZWF0ZVJlc3BvbnNlJC5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZmluZEJ5SWQ6IHRoaXMuZmluZEJ5SWQuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGlzQ29sbGVjdGlvbklkTnVtZXJpYzogdGhpcy5pc0NvbGxlY3Rpb25JZE51bWVyaWMuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGdldENvbmZpZzogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuY29uZmlnOyB9LFxuICAgICAgICAgICAgZ2V0RGI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmRiOyB9LFxuICAgICAgICAgICAgZ2V0SnNvbkJvZHk6IHRoaXMuZ2V0SnNvbkJvZHkuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIGdldExvY2F0aW9uOiB0aGlzLmdldExvY2F0aW9uLmJpbmQodGhpcyksXG4gICAgICAgICAgICBnZXRQYXNzVGhydUJhY2tlbmQ6IHRoaXMuZ2V0UGFzc1RocnVCYWNrZW5kLmJpbmQodGhpcyksXG4gICAgICAgICAgICBwYXJzZVJlcXVlc3RVcmw6IHRoaXMucGFyc2VSZXF1ZXN0VXJsLmJpbmQodGhpcyksXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBpZCkge1xuICAgICAgICByZXR1cm4gY29sbGVjdGlvbi5maW5kSW5kZXgoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0uaWQgPT09IGlkOyB9KTtcbiAgICB9O1xuICAgIC8qKiBQYXJzZSB0aGUgaWQgYXMgYSBudW1iZXIuIFJldHVybiBvcmlnaW5hbCB2YWx1ZSBpZiBub3QgYSBudW1iZXIuICovXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLnBhcnNlSWQgPSBmdW5jdGlvbiAoY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUsIGlkKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0NvbGxlY3Rpb25JZE51bWVyaWMoY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUpKSB7XG4gICAgICAgICAgICAvLyBDYW4ndCBjb25maXJtIHRoYXQgYGlkYCBpcyBhIG51bWVyaWMgdHlwZTsgZG9uJ3QgcGFyc2UgYXMgYSBudW1iZXJcbiAgICAgICAgICAgIC8vIG9yIGVsc2UgYCc0MidgIC0+IGA0MmAgYW5kIF9nZXQgYnkgaWRfIGZhaWxzLlxuICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpZE51bSA9IHBhcnNlRmxvYXQoaWQpO1xuICAgICAgICByZXR1cm4gaXNOYU4oaWROdW0pID8gaWQgOiBpZE51bTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIHJldHVybiB0cnVlIGlmIGNhbiBkZXRlcm1pbmUgdGhhdCB0aGUgY29sbGVjdGlvbidzIGBpdGVtLmlkYCBpcyBhIG51bWJlclxuICAgICAqIFRoaXMgaW1wbGVtZW50YXRpb24gY2FuJ3QgdGVsbCBpZiB0aGUgY29sbGVjdGlvbiBpcyBlbXB0eSBzbyBpdCBhc3N1bWVzIE5PXG4gICAgICogKi9cbiAgICBCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuaXNDb2xsZWN0aW9uSWROdW1lcmljID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lKSB7XG4gICAgICAgIC8vIGNvbGxlY3Rpb25OYW1lIG5vdCB1c2VkIG5vdyBidXQgb3ZlcnJpZGUgbWlnaHQgbWFpbnRhaW4gY29sbGVjdGlvbiB0eXBlIGluZm9ybWF0aW9uXG4gICAgICAgIC8vIHNvIHRoYXQgaXQgY291bGQga25vdyB0aGUgdHlwZSBvZiB0aGUgYGlkYCBldmVuIHdoZW4gdGhlIGNvbGxlY3Rpb24gaXMgZW1wdHkuXG4gICAgICAgIHJldHVybiAhIShjb2xsZWN0aW9uICYmIGNvbGxlY3Rpb25bMF0pICYmIHR5cGVvZiBjb2xsZWN0aW9uWzBdLmlkID09PSAnbnVtYmVyJztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgcmVxdWVzdCBVUkwgaW50byBhIGBQYXJzZWRSZXF1ZXN0VXJsYCBvYmplY3QuXG4gICAgICogUGFyc2luZyBkZXBlbmRzIHVwb24gY2VydGFpbiB2YWx1ZXMgb2YgYGNvbmZpZ2A6IGBhcGlCYXNlYCwgYGhvc3RgLCBhbmQgYHVybFJvb3RgLlxuICAgICAqXG4gICAgICogQ29uZmlndXJpbmcgdGhlIGBhcGlCYXNlYCB5aWVsZHMgdGhlIG1vc3QgaW50ZXJlc3RpbmcgY2hhbmdlcyB0byBgcGFyc2VSZXF1ZXN0VXJsYCBiZWhhdmlvcjpcbiAgICAgKiAgIFdoZW4gYXBpQmFzZT11bmRlZmluZWQgYW5kIHVybD0naHR0cDovL2xvY2FsaG9zdC9hcGkvY29sbGVjdGlvbi80MidcbiAgICAgKiAgICAge2Jhc2U6ICdhcGkvJywgY29sbGVjdGlvbk5hbWU6ICdjb2xsZWN0aW9uJywgaWQ6ICc0MicsIC4uLn1cbiAgICAgKiAgIFdoZW4gYXBpQmFzZT0nc29tZS9hcGkvcm9vdC8nIGFuZCB1cmw9J2h0dHA6Ly9sb2NhbGhvc3Qvc29tZS9hcGkvcm9vdC9jb2xsZWN0aW9uJ1xuICAgICAqICAgICB7YmFzZTogJ3NvbWUvYXBpL3Jvb3QvJywgY29sbGVjdGlvbk5hbWU6ICdjb2xsZWN0aW9uJywgaWQ6IHVuZGVmaW5lZCwgLi4ufVxuICAgICAqICAgV2hlbiBhcGlCYXNlPScvJyBhbmQgdXJsPSdodHRwOi8vbG9jYWxob3N0L2NvbGxlY3Rpb24nXG4gICAgICogICAgIHtiYXNlOiAnLycsIGNvbGxlY3Rpb25OYW1lOiAnY29sbGVjdGlvbicsIGlkOiB1bmRlZmluZWQsIC4uLn1cbiAgICAgKlxuICAgICAqIFRoZSBhY3R1YWwgYXBpIGJhc2Ugc2VnbWVudCB2YWx1ZXMgYXJlIGlnbm9yZWQuIE9ubHkgdGhlIG51bWJlciBvZiBzZWdtZW50cyBtYXR0ZXJzLlxuICAgICAqIFRoZSBmb2xsb3dpbmcgYXBpIGJhc2Ugc3RyaW5ncyBhcmUgY29uc2lkZXJlZCBpZGVudGljYWw6ICdhL2InIH4gJ3NvbWUvYXBpLycgfiBgdHdvL3NlZ21lbnRzJ1xuICAgICAqXG4gICAgICogVG8gcmVwbGFjZSB0aGlzIGRlZmF1bHQgbWV0aG9kLCBhc3NpZ24geW91ciBhbHRlcm5hdGl2ZSB0byB5b3VyIEluTWVtRGJTZXJ2aWNlWydwYXJzZVJlcXVlc3RVcmwnXVxuICAgICAqL1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5wYXJzZVJlcXVlc3RVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgbG9jID0gdGhpcy5nZXRMb2NhdGlvbih1cmwpO1xuICAgICAgICAgICAgdmFyIGRyb3AgPSB0aGlzLmNvbmZpZy5yb290UGF0aC5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgdXJsUm9vdCA9ICcnO1xuICAgICAgICAgICAgaWYgKGxvYy5ob3N0ICE9PSB0aGlzLmNvbmZpZy5ob3N0KSB7XG4gICAgICAgICAgICAgICAgLy8gdXJsIGZvciBhIHNlcnZlciBvbiBhIGRpZmZlcmVudCBob3N0IVxuICAgICAgICAgICAgICAgIC8vIGFzc3VtZSBpdCdzIGNvbGxlY3Rpb24gaXMgYWN0dWFsbHkgaGVyZSB0b28uXG4gICAgICAgICAgICAgICAgZHJvcCA9IDE7IC8vIHRoZSBsZWFkaW5nIHNsYXNoXG4gICAgICAgICAgICAgICAgdXJsUm9vdCA9IGxvYy5wcm90b2NvbCArICcvLycgKyBsb2MuaG9zdCArICcvJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwYXRoID0gbG9jLnBhdGguc3Vic3RyaW5nKGRyb3ApO1xuICAgICAgICAgICAgdmFyIHBhdGhTZWdtZW50cyA9IHBhdGguc3BsaXQoJy8nKTtcbiAgICAgICAgICAgIHZhciBzZWdtZW50SXggPSAwO1xuICAgICAgICAgICAgLy8gYXBpQmFzZTogdGhlIGZyb250IHBhcnQgb2YgdGhlIHBhdGggZGV2b3RlZCB0byBnZXR0aW5nIHRvIHRoZSBhcGkgcm91dGVcbiAgICAgICAgICAgIC8vIEFzc3VtZXMgZmlyc3QgcGF0aCBzZWdtZW50IGlmIG5vIGNvbmZpZy5hcGlCYXNlXG4gICAgICAgICAgICAvLyBlbHNlIGlnbm9yZXMgYXMgbWFueSBwYXRoIHNlZ21lbnRzIGFzIGFyZSBpbiBjb25maWcuYXBpQmFzZVxuICAgICAgICAgICAgLy8gRG9lcyBOT1QgY2FyZSB3aGF0IHRoZSBhcGkgYmFzZSBjaGFycyBhY3R1YWxseSBhcmUuXG4gICAgICAgICAgICB2YXIgYXBpQmFzZSA9IHZvaWQgMDtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzXG4gICAgICAgICAgICBpZiAodGhpcy5jb25maWcuYXBpQmFzZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBhcGlCYXNlID0gcGF0aFNlZ21lbnRzW3NlZ21lbnRJeCsrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFwaUJhc2UgPSByZW1vdmVUcmFpbGluZ1NsYXNoKHRoaXMuY29uZmlnLmFwaUJhc2UudHJpbSgpKTtcbiAgICAgICAgICAgICAgICBpZiAoYXBpQmFzZSkge1xuICAgICAgICAgICAgICAgICAgICBzZWdtZW50SXggPSBhcGlCYXNlLnNwbGl0KCcvJykubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudEl4ID0gMDsgLy8gbm8gYXBpIGJhc2UgYXQgYWxsOyB1bndpc2UgYnV0IGFsbG93ZWQuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXBpQmFzZSArPSAnLyc7XG4gICAgICAgICAgICB2YXIgY29sbGVjdGlvbk5hbWUgPSBwYXRoU2VnbWVudHNbc2VnbWVudEl4KytdO1xuICAgICAgICAgICAgLy8gaWdub3JlIGFueXRoaW5nIGFmdGVyIGEgJy4nIChlLmcuLHRoZSBcImpzb25cIiBpbiBcImN1c3RvbWVycy5qc29uXCIpXG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZSA9IGNvbGxlY3Rpb25OYW1lICYmIGNvbGxlY3Rpb25OYW1lLnNwbGl0KCcuJylbMF07XG4gICAgICAgICAgICB2YXIgaWQgPSBwYXRoU2VnbWVudHNbc2VnbWVudEl4KytdO1xuICAgICAgICAgICAgdmFyIHF1ZXJ5ID0gdGhpcy5jcmVhdGVRdWVyeU1hcChsb2MucXVlcnkpO1xuICAgICAgICAgICAgdmFyIHJlc291cmNlVXJsID0gdXJsUm9vdCArIGFwaUJhc2UgKyBjb2xsZWN0aW9uTmFtZSArICcvJztcbiAgICAgICAgICAgIHJldHVybiB7IGFwaUJhc2U6IGFwaUJhc2UsIGNvbGxlY3Rpb25OYW1lOiBjb2xsZWN0aW9uTmFtZSwgaWQ6IGlkLCBxdWVyeTogcXVlcnksIHJlc291cmNlVXJsOiByZXNvdXJjZVVybCB9O1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHZhciBtc2cgPSBcInVuYWJsZSB0byBwYXJzZSB1cmwgJ1wiICsgdXJsICsgXCInOyBvcmlnaW5hbCBlcnJvcjogXCIgKyBlcnIubWVzc2FnZTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBDcmVhdGUgZW50aXR5XG4gICAgLy8gQ2FuIHVwZGF0ZSBhbiBleGlzdGluZyBlbnRpdHkgdG9vIGlmIHBvc3Q0MDkgaXMgZmFsc2UuXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLnBvc3QgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSBfYS5jb2xsZWN0aW9uLCBjb2xsZWN0aW9uTmFtZSA9IF9hLmNvbGxlY3Rpb25OYW1lLCBoZWFkZXJzID0gX2EuaGVhZGVycywgaWQgPSBfYS5pZCwgcmVxID0gX2EucmVxLCByZXNvdXJjZVVybCA9IF9hLnJlc291cmNlVXJsLCB1cmwgPSBfYS51cmw7XG4gICAgICAgIHZhciBpdGVtID0gdGhpcy5jbG9uZSh0aGlzLmdldEpzb25Cb2R5KHJlcSkpO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xuICAgICAgICBpZiAoaXRlbS5pZCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaXRlbS5pZCA9IGlkIHx8IHRoaXMuZ2VuSWQoY29sbGVjdGlvbiwgY29sbGVjdGlvbk5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHZhciBlbXNnID0gZXJyLm1lc3NhZ2UgfHwgJyc7XG4gICAgICAgICAgICAgICAgaWYgKC9pZCB0eXBlIGlzIG5vbi1udW1lcmljLy50ZXN0KGVtc2cpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHVybCwgU1RBVFVTLlVOUFJPQ0VTU0FCTEVfRU5UUlksIGVtc2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsIFwiRmFpbGVkIHRvIGdlbmVyYXRlIG5ldyBpZCBmb3IgJ1wiICsgY29sbGVjdGlvbk5hbWUgKyBcIidcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpZCAmJiBpZCAhPT0gaXRlbS5pZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnModXJsLCBTVEFUVVMuQkFEX1JFUVVFU1QsIFwiUmVxdWVzdCBpZCBkb2VzIG5vdCBtYXRjaCBpdGVtLmlkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWQgPSBpdGVtLmlkO1xuICAgICAgICB9XG4gICAgICAgIHZhciBleGlzdGluZ0l4ID0gdGhpcy5pbmRleE9mKGNvbGxlY3Rpb24sIGlkKTtcbiAgICAgICAgdmFyIGJvZHkgPSB0aGlzLmJvZGlmeShpdGVtKTtcbiAgICAgICAgaWYgKGV4aXN0aW5nSXggPT09IC0xKSB7XG4gICAgICAgICAgICBjb2xsZWN0aW9uLnB1c2goaXRlbSk7XG4gICAgICAgICAgICBoZWFkZXJzLnNldCgnTG9jYXRpb24nLCByZXNvdXJjZVVybCArICcvJyArIGlkKTtcbiAgICAgICAgICAgIHJldHVybiB7IGhlYWRlcnM6IGhlYWRlcnMsIGJvZHk6IGJvZHksIHN0YXR1czogU1RBVFVTLkNSRUFURUQgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmNvbmZpZy5wb3N0NDA5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5DT05GTElDVCwgXCInXCIgKyBjb2xsZWN0aW9uTmFtZSArIFwiJyBpdGVtIHdpdGggaWQ9J1wiICsgaWQgKyBcIiBleGlzdHMgYW5kIG1heSBub3QgYmUgdXBkYXRlZCB3aXRoIFBPU1Q7IHVzZSBQVVQgaW5zdGVhZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb2xsZWN0aW9uW2V4aXN0aW5nSXhdID0gaXRlbTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5wb3N0MjA0ID9cbiAgICAgICAgICAgICAgICB7IGhlYWRlcnM6IGhlYWRlcnMsIHN0YXR1czogU1RBVFVTLk5PX0NPTlRFTlQgfSA6IC8vIHN1Y2Nlc3NmdWw7IG5vIGNvbnRlbnRcbiAgICAgICAgICAgICAgICB7IGhlYWRlcnM6IGhlYWRlcnMsIGJvZHk6IGJvZHksIHN0YXR1czogU1RBVFVTLk9LIH07IC8vIHN1Y2Nlc3NmdWw7IHJldHVybiBlbnRpdHlcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gVXBkYXRlIGV4aXN0aW5nIGVudGl0eVxuICAgIC8vIENhbiBjcmVhdGUgYW4gZW50aXR5IHRvbyBpZiBwdXQ0MDQgaXMgZmFsc2UuXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLnB1dCA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgY29sbGVjdGlvbiA9IF9hLmNvbGxlY3Rpb24sIGNvbGxlY3Rpb25OYW1lID0gX2EuY29sbGVjdGlvbk5hbWUsIGhlYWRlcnMgPSBfYS5oZWFkZXJzLCBpZCA9IF9hLmlkLCByZXEgPSBfYS5yZXEsIHVybCA9IF9hLnVybDtcbiAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmNsb25lKHRoaXMuZ2V0SnNvbkJvZHkocmVxKSk7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzXG4gICAgICAgIGlmIChpdGVtLmlkID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnModXJsLCBTVEFUVVMuTk9UX0ZPVU5ELCBcIk1pc3NpbmcgJ1wiICsgY29sbGVjdGlvbk5hbWUgKyBcIicgaWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlkICYmIGlkICE9PSBpdGVtLmlkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVFcnJvclJlc3BvbnNlT3B0aW9ucyh1cmwsIFNUQVRVUy5CQURfUkVRVUVTVCwgXCJSZXF1ZXN0IGZvciAnXCIgKyBjb2xsZWN0aW9uTmFtZSArIFwiJyBpZCBkb2VzIG5vdCBtYXRjaCBpdGVtLmlkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWQgPSBpdGVtLmlkO1xuICAgICAgICB9XG4gICAgICAgIHZhciBleGlzdGluZ0l4ID0gdGhpcy5pbmRleE9mKGNvbGxlY3Rpb24sIGlkKTtcbiAgICAgICAgdmFyIGJvZHkgPSB0aGlzLmJvZGlmeShpdGVtKTtcbiAgICAgICAgaWYgKGV4aXN0aW5nSXggPiAtMSkge1xuICAgICAgICAgICAgY29sbGVjdGlvbltleGlzdGluZ0l4XSA9IGl0ZW07XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25maWcucHV0MjA0ID9cbiAgICAgICAgICAgICAgICB7IGhlYWRlcnM6IGhlYWRlcnMsIHN0YXR1czogU1RBVFVTLk5PX0NPTlRFTlQgfSA6IC8vIHN1Y2Nlc3NmdWw7IG5vIGNvbnRlbnRcbiAgICAgICAgICAgICAgICB7IGhlYWRlcnM6IGhlYWRlcnMsIGJvZHk6IGJvZHksIHN0YXR1czogU1RBVFVTLk9LIH07IC8vIHN1Y2Nlc3NmdWw7IHJldHVybiBlbnRpdHlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmNvbmZpZy5wdXQ0MDQpIHtcbiAgICAgICAgICAgIC8vIGl0ZW0gdG8gdXBkYXRlIG5vdCBmb3VuZDsgdXNlIFBPU1QgdG8gY3JlYXRlIG5ldyBpdGVtIGZvciB0aGlzIGlkLlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnModXJsLCBTVEFUVVMuTk9UX0ZPVU5ELCBcIidcIiArIGNvbGxlY3Rpb25OYW1lICsgXCInIGl0ZW0gd2l0aCBpZD0nXCIgKyBpZCArIFwiIG5vdCBmb3VuZCBhbmQgbWF5IG5vdCBiZSBjcmVhdGVkIHdpdGggUFVUOyB1c2UgUE9TVCBpbnN0ZWFkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBuZXcgaXRlbSBmb3IgaWQgbm90IGZvdW5kXG4gICAgICAgICAgICBjb2xsZWN0aW9uLnB1c2goaXRlbSk7XG4gICAgICAgICAgICByZXR1cm4geyBoZWFkZXJzOiBoZWFkZXJzLCBib2R5OiBib2R5LCBzdGF0dXM6IFNUQVRVUy5DUkVBVEVEIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5yZW1vdmVCeUlkID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGlkKSB7XG4gICAgICAgIHZhciBpeCA9IHRoaXMuaW5kZXhPZihjb2xsZWN0aW9uLCBpZCk7XG4gICAgICAgIGlmIChpeCA+IC0xKSB7XG4gICAgICAgICAgICBjb2xsZWN0aW9uLnNwbGljZShpeCwgMSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUZWxsIHlvdXIgaW4tbWVtIFwiZGF0YWJhc2VcIiB0byByZXNldC5cbiAgICAgKiByZXR1cm5zIE9ic2VydmFibGUgb2YgdGhlIGRhdGFiYXNlIGJlY2F1c2UgcmVzZXR0aW5nIGl0IGNvdWxkIGJlIGFzeW5jXG4gICAgICovXG4gICAgQmFja2VuZFNlcnZpY2UucHJvdG90eXBlLnJlc2V0RGIgPSBmdW5jdGlvbiAocmVxSW5mbykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmRiUmVhZHlTdWJqZWN0Lm5leHQoZmFsc2UpO1xuICAgICAgICB2YXIgZGIgPSB0aGlzLmluTWVtRGJTZXJ2aWNlLmNyZWF0ZURiKHJlcUluZm8pO1xuICAgICAgICB2YXIgZGIkID0gZGIgaW5zdGFuY2VvZiBPYnNlcnZhYmxlID8gZGIgOlxuICAgICAgICAgICAgdHlwZW9mIGRiLnRoZW4gPT09ICdmdW5jdGlvbicgPyBmcm9tKGRiKSA6XG4gICAgICAgICAgICAgICAgb2YoZGIpO1xuICAgICAgICBkYiQucGlwZShmaXJzdCgpKS5zdWJzY3JpYmUoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIF90aGlzLmRiID0gZDtcbiAgICAgICAgICAgIF90aGlzLmRiUmVhZHlTdWJqZWN0Lm5leHQodHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5kYlJlYWR5O1xuICAgIH07XG4gICAgcmV0dXJuIEJhY2tlbmRTZXJ2aWNlO1xufSgpKTtcbmV4cG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iYWNrZW5kLnNlcnZpY2UuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG52YXIgX19wYXJhbSA9ICh0aGlzICYmIHRoaXMuX19wYXJhbSkgfHwgZnVuY3Rpb24gKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxufTtcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zLCBIdHRwUmVzcG9uc2UsIEh0dHBYaHJCYWNrZW5kLCBYaHJGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU1RBVFVTIH0gZnJvbSAnLi9odHRwLXN0YXR1cy1jb2Rlcyc7XG5pbXBvcnQgeyBJbk1lbW9yeUJhY2tlbmRDb25maWcsIEluTWVtb3J5QmFja2VuZENvbmZpZ0FyZ3MsIEluTWVtb3J5RGJTZXJ2aWNlIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSAnLi9iYWNrZW5kLnNlcnZpY2UnO1xuLyoqXG4gKiBGb3IgQW5ndWxhciBgSHR0cENsaWVudGAgc2ltdWxhdGUgdGhlIGJlaGF2aW9yIG9mIGEgUkVTVHkgd2ViIGFwaVxuICogYmFja2VkIGJ5IHRoZSBzaW1wbGUgaW4tbWVtb3J5IGRhdGEgc3RvcmUgcHJvdmlkZWQgYnkgdGhlIGluamVjdGVkIGBJbk1lbW9yeURiU2VydmljZWAuXG4gKiBDb25mb3JtcyBtb3N0bHkgdG8gYmVoYXZpb3IgZGVzY3JpYmVkIGhlcmU6XG4gKiBodHRwOi8vd3d3LnJlc3RhcGl0dXRvcmlhbC5jb20vbGVzc29ucy9odHRwbWV0aG9kcy5odG1sXG4gKlxuICogIyMjIFVzYWdlXG4gKlxuICogQ3JlYXRlIGFuIGluLW1lbW9yeSBkYXRhIHN0b3JlIGNsYXNzIHRoYXQgaW1wbGVtZW50cyBgSW5NZW1vcnlEYlNlcnZpY2VgLlxuICogQ2FsbCBgY29uZmlnYCBzdGF0aWMgbWV0aG9kIHdpdGggdGhpcyBzZXJ2aWNlIGNsYXNzIGFuZCBvcHRpb25hbCBjb25maWd1cmF0aW9uIG9iamVjdDpcbiAqIGBgYFxuICogLy8gb3RoZXIgaW1wb3J0c1xuICogaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbiAqIGltcG9ydCB7IEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZSB9IGZyb20gJ2FuZ3VsYXItaW4tbWVtb3J5LXdlYi1hcGknO1xuICpcbiAqIGltcG9ydCB7IEluTWVtSGVyb1NlcnZpY2UsIGluTWVtQ29uZmlnIH0gZnJvbSAnLi4vYXBpL2luLW1lbW9yeS1oZXJvLnNlcnZpY2UnO1xuICogQE5nTW9kdWxlKHtcbiAqICBpbXBvcnRzOiBbXG4gKiAgICBIdHRwTW9kdWxlLFxuICogICAgSHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlLmZvclJvb3QoSW5NZW1IZXJvU2VydmljZSwgaW5NZW1Db25maWcpLFxuICogICAgLi4uXG4gKiAgXSxcbiAqICAuLi5cbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgLi4uIH1cbiAqIGBgYFxuICovXG52YXIgSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlKGluTWVtRGJTZXJ2aWNlLCBjb25maWcsIHhockZhY3RvcnkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgaW5NZW1EYlNlcnZpY2UsIGNvbmZpZykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMueGhyRmFjdG9yeSA9IHhockZhY3Rvcnk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5oYW5kbGUgPSBmdW5jdGlvbiAocmVxKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSZXF1ZXN0KHJlcSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gZXJyb3IubWVzc2FnZSB8fCBlcnJvcjtcbiAgICAgICAgICAgIHZhciByZXNPcHRpb25zXzEgPSB0aGlzLmNyZWF0ZUVycm9yUmVzcG9uc2VPcHRpb25zKHJlcS51cmwsIFNUQVRVUy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsIFwiXCIgKyBlcnIpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUmVzcG9uc2UkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc09wdGlvbnNfMTsgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vLy8gIHByb3RlY3RlZCBvdmVycmlkZXMgLy8vLy9cbiAgICBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmdldEpzb25Cb2R5ID0gZnVuY3Rpb24gKHJlcSkge1xuICAgICAgICByZXR1cm4gcmVxLmJvZHk7XG4gICAgfTtcbiAgICBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmdldFJlcXVlc3RNZXRob2QgPSBmdW5jdGlvbiAocmVxKSB7XG4gICAgICAgIHJldHVybiAocmVxLm1ldGhvZCB8fCAnZ2V0JykudG9Mb3dlckNhc2UoKTtcbiAgICB9O1xuICAgIEh0dHBDbGllbnRCYWNrZW5kU2VydmljZS5wcm90b3R5cGUuY3JlYXRlSGVhZGVycyA9IGZ1bmN0aW9uIChoZWFkZXJzKSB7XG4gICAgICAgIHJldHVybiBuZXcgSHR0cEhlYWRlcnMoaGVhZGVycyk7XG4gICAgfTtcbiAgICBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmNyZWF0ZVF1ZXJ5TWFwID0gZnVuY3Rpb24gKHNlYXJjaCkge1xuICAgICAgICB2YXIgbWFwID0gbmV3IE1hcCgpO1xuICAgICAgICBpZiAoc2VhcmNoKSB7XG4gICAgICAgICAgICB2YXIgcGFyYW1zXzEgPSBuZXcgSHR0cFBhcmFtcyh7IGZyb21TdHJpbmc6IHNlYXJjaCB9KTtcbiAgICAgICAgICAgIHBhcmFtc18xLmtleXMoKS5mb3JFYWNoKGZ1bmN0aW9uIChwKSB7IHJldHVybiBtYXAuc2V0KHAsIHBhcmFtc18xLmdldEFsbChwKSk7IH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXA7XG4gICAgfTtcbiAgICBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UucHJvdG90eXBlLmNyZWF0ZVJlc3BvbnNlJGZyb21SZXNwb25zZU9wdGlvbnMkID0gZnVuY3Rpb24gKHJlc09wdGlvbnMkKSB7XG4gICAgICAgIHJldHVybiByZXNPcHRpb25zJC5waXBlKG1hcChmdW5jdGlvbiAob3B0cykgeyByZXR1cm4gbmV3IEh0dHBSZXNwb25zZShvcHRzKTsgfSkpO1xuICAgIH07XG4gICAgSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlLnByb3RvdHlwZS5jcmVhdGVQYXNzVGhydUJhY2tlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEh0dHBYaHJCYWNrZW5kKHRoaXMueGhyRmFjdG9yeSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICBleC5tZXNzYWdlID0gJ0Nhbm5vdCBjcmVhdGUgcGFzc1RocnU0MDQgYmFja2VuZDsgJyArIChleC5tZXNzYWdlIHx8ICcnKTtcbiAgICAgICAgICAgIHRocm93IGV4O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UgPSBfX2RlY29yYXRlKFtcbiAgICAgICAgSW5qZWN0YWJsZSgpLFxuICAgICAgICBfX3BhcmFtKDEsIEluamVjdChJbk1lbW9yeUJhY2tlbmRDb25maWcpKSwgX19wYXJhbSgxLCBPcHRpb25hbCgpKSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtJbk1lbW9yeURiU2VydmljZSxcbiAgICAgICAgICAgIEluTWVtb3J5QmFja2VuZENvbmZpZ0FyZ3MsXG4gICAgICAgICAgICBYaHJGYWN0b3J5XSlcbiAgICBdLCBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UpO1xuICAgIHJldHVybiBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2U7XG59KEJhY2tlbmRTZXJ2aWNlKSk7XG5leHBvcnQgeyBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0dHAtY2xpZW50LWJhY2tlbmQuc2VydmljZS5qcy5tYXAiLCIvLy8vLy8gSHR0cENsaWVudC1Pbmx5IHZlcnNpb24gLy8vL1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBCYWNrZW5kLCBYaHJGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5NZW1vcnlCYWNrZW5kQ29uZmlnLCBJbk1lbW9yeURiU2VydmljZSB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50QmFja2VuZFNlcnZpY2UgfSBmcm9tICcuL2h0dHAtY2xpZW50LWJhY2tlbmQuc2VydmljZSc7XG4vLyBJbnRlcm5hbCAtIENyZWF0ZXMgdGhlIGluLW1lbSBiYWNrZW5kIGZvciB0aGUgSHR0cENsaWVudCBtb2R1bGVcbi8vIEFvVCByZXF1aXJlcyBmYWN0b3J5IHRvIGJlIGV4cG9ydGVkXG5leHBvcnQgZnVuY3Rpb24gaHR0cENsaWVudEluTWVtQmFja2VuZFNlcnZpY2VGYWN0b3J5KGRiU2VydmljZSwgb3B0aW9ucywgeGhyRmFjdG9yeSkge1xuICAgIHZhciBiYWNrZW5kID0gbmV3IEh0dHBDbGllbnRCYWNrZW5kU2VydmljZShkYlNlcnZpY2UsIG9wdGlvbnMsIHhockZhY3RvcnkpO1xuICAgIHJldHVybiBiYWNrZW5kO1xufVxudmFyIEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUoKSB7XG4gICAgfVxuICAgIEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZV8xID0gSHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlO1xuICAgIC8qKlxuICAgICogIFJlZGlyZWN0IHRoZSBBbmd1bGFyIGBIdHRwQ2xpZW50YCBYSFIgY2FsbHNcbiAgICAqICB0byBpbi1tZW1vcnkgZGF0YSBzdG9yZSB0aGF0IGltcGxlbWVudHMgYEluTWVtb3J5RGJTZXJ2aWNlYC5cbiAgICAqICB3aXRoIGNsYXNzIHRoYXQgaW1wbGVtZW50cyBJbk1lbW9yeURiU2VydmljZSBhbmQgY3JlYXRlcyBhbiBpbi1tZW1vcnkgZGF0YWJhc2UuXG4gICAgKlxuICAgICogIFVzdWFsbHkgaW1wb3J0ZWQgaW4gdGhlIHJvb3QgYXBwbGljYXRpb24gbW9kdWxlLlxuICAgICogIENhbiBpbXBvcnQgaW4gYSBsYXp5IGZlYXR1cmUgbW9kdWxlIHRvbywgd2hpY2ggd2lsbCBzaGFkb3cgbW9kdWxlcyBsb2FkZWQgZWFybGllclxuICAgICpcbiAgICAqIEBwYXJhbSB7VHlwZX0gZGJDcmVhdG9yIC0gQ2xhc3MgdGhhdCBjcmVhdGVzIHNlZWQgZGF0YSBmb3IgaW4tbWVtb3J5IGRhdGFiYXNlLiBNdXN0IGltcGxlbWVudCBJbk1lbW9yeURiU2VydmljZS5cbiAgICAqIEBwYXJhbSB7SW5NZW1vcnlCYWNrZW5kQ29uZmlnQXJnc30gW29wdGlvbnNdXG4gICAgKlxuICAgICogQGV4YW1wbGVcbiAgICAqIEh0dHBJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290KGRiQ3JlYXRvcik7XG4gICAgKiBIdHRwSW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yUm9vdChkYkNyZWF0b3IsIHt1c2VWYWx1ZToge2RlbGF5OjYwMH19KTtcbiAgICAqL1xuICAgIEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZS5mb3JSb290ID0gZnVuY3Rpb24gKGRiQ3JlYXRvciwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZV8xLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBJbk1lbW9yeURiU2VydmljZSwgdXNlQ2xhc3M6IGRiQ3JlYXRvciB9LFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogSW5NZW1vcnlCYWNrZW5kQ29uZmlnLCB1c2VWYWx1ZTogb3B0aW9ucyB9LFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogSHR0cEJhY2tlbmQsXG4gICAgICAgICAgICAgICAgICAgIHVzZUZhY3Rvcnk6IGh0dHBDbGllbnRJbk1lbUJhY2tlbmRTZXJ2aWNlRmFjdG9yeSxcbiAgICAgICAgICAgICAgICAgICAgZGVwczogW0luTWVtb3J5RGJTZXJ2aWNlLCBJbk1lbW9yeUJhY2tlbmRDb25maWcsIFhockZhY3RvcnldIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgKlxuICAgKiBFbmFibGUgYW5kIGNvbmZpZ3VyZSB0aGUgaW4tbWVtb3J5IHdlYiBhcGkgaW4gYSBsYXp5LWxvYWRlZCBmZWF0dXJlIG1vZHVsZS5cbiAgICogU2FtZSBhcyBgZm9yUm9vdGAuXG4gICAqIFRoaXMgaXMgYSBmZWVsLWdvb2QgbWV0aG9kIHNvIHlvdSBjYW4gZm9sbG93IHRoZSBBbmd1bGFyIHN0eWxlIGd1aWRlIGZvciBsYXp5LWxvYWRlZCBtb2R1bGVzLlxuICAgKi9cbiAgICBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yRmVhdHVyZSA9IGZ1bmN0aW9uIChkYkNyZWF0b3IsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIEh0dHBDbGllbnRJbk1lbW9yeVdlYkFwaU1vZHVsZV8xLmZvclJvb3QoZGJDcmVhdG9yLCBvcHRpb25zKTtcbiAgICB9O1xuICAgIHZhciBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGVfMTtcbiAgICBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUgPSBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGVfMSA9IF9fZGVjb3JhdGUoW1xuICAgICAgICBOZ01vZHVsZSh7fSlcbiAgICBdLCBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUpO1xuICAgIHJldHVybiBIdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGU7XG59KCkpO1xuZXhwb3J0IHsgSHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1odHRwLWNsaWVudC1pbi1tZW1vcnktd2ViLWFwaS5tb2R1bGUuanMubWFwIiwiLy8vLy8vIEZvciBhcHBzIHdpdGggYm90aCBIdHRwIGFuZCBIdHRwQ2xpZW50IC8vLy9cbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQmFja2VuZCwgWGhyRmFjdG9yeSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluTWVtb3J5QmFja2VuZENvbmZpZywgSW5NZW1vcnlEYlNlcnZpY2UgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgaHR0cENsaWVudEluTWVtQmFja2VuZFNlcnZpY2VGYWN0b3J5IH0gZnJvbSAnLi9odHRwLWNsaWVudC1pbi1tZW1vcnktd2ViLWFwaS5tb2R1bGUnO1xudmFyIEluTWVtb3J5V2ViQXBpTW9kdWxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEluTWVtb3J5V2ViQXBpTW9kdWxlKCkge1xuICAgIH1cbiAgICBJbk1lbW9yeVdlYkFwaU1vZHVsZV8xID0gSW5NZW1vcnlXZWJBcGlNb2R1bGU7XG4gICAgLyoqXG4gICAgKiAgUmVkaXJlY3QgQk9USCBBbmd1bGFyIGBIdHRwYCBhbmQgYEh0dHBDbGllbnRgIFhIUiBjYWxsc1xuICAgICogIHRvIGluLW1lbW9yeSBkYXRhIHN0b3JlIHRoYXQgaW1wbGVtZW50cyBgSW5NZW1vcnlEYlNlcnZpY2VgLlxuICAgICogIHdpdGggY2xhc3MgdGhhdCBpbXBsZW1lbnRzIEluTWVtb3J5RGJTZXJ2aWNlIGFuZCBjcmVhdGVzIGFuIGluLW1lbW9yeSBkYXRhYmFzZS5cbiAgICAqXG4gICAgKiAgVXN1YWxseSBpbXBvcnRlZCBpbiB0aGUgcm9vdCBhcHBsaWNhdGlvbiBtb2R1bGUuXG4gICAgKiAgQ2FuIGltcG9ydCBpbiBhIGxhenkgZmVhdHVyZSBtb2R1bGUgdG9vLCB3aGljaCB3aWxsIHNoYWRvdyBtb2R1bGVzIGxvYWRlZCBlYXJsaWVyXG4gICAgKlxuICAgICogQHBhcmFtIHtUeXBlfSBkYkNyZWF0b3IgLSBDbGFzcyB0aGF0IGNyZWF0ZXMgc2VlZCBkYXRhIGZvciBpbi1tZW1vcnkgZGF0YWJhc2UuIE11c3QgaW1wbGVtZW50IEluTWVtb3J5RGJTZXJ2aWNlLlxuICAgICogQHBhcmFtIHtJbk1lbW9yeUJhY2tlbmRDb25maWdBcmdzfSBbb3B0aW9uc11cbiAgICAqXG4gICAgKiBAZXhhbXBsZVxuICAgICogSW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yUm9vdChkYkNyZWF0b3IpO1xuICAgICogSW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yUm9vdChkYkNyZWF0b3IsIHt1c2VWYWx1ZToge2RlbGF5OjYwMH19KTtcbiAgICAqL1xuICAgIEluTWVtb3J5V2ViQXBpTW9kdWxlLmZvclJvb3QgPSBmdW5jdGlvbiAoZGJDcmVhdG9yLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogSW5NZW1vcnlXZWJBcGlNb2R1bGVfMSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogSW5NZW1vcnlEYlNlcnZpY2UsIHVzZUNsYXNzOiBkYkNyZWF0b3IgfSxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IEluTWVtb3J5QmFja2VuZENvbmZpZywgdXNlVmFsdWU6IG9wdGlvbnMgfSxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IEh0dHBCYWNrZW5kLFxuICAgICAgICAgICAgICAgICAgICB1c2VGYWN0b3J5OiBodHRwQ2xpZW50SW5NZW1CYWNrZW5kU2VydmljZUZhY3RvcnksXG4gICAgICAgICAgICAgICAgICAgIGRlcHM6IFtJbk1lbW9yeURiU2VydmljZSwgSW5NZW1vcnlCYWNrZW5kQ29uZmlnLCBYaHJGYWN0b3J5XSB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEVuYWJsZSBhbmQgY29uZmlndXJlIHRoZSBpbi1tZW1vcnkgd2ViIGFwaSBpbiBhIGxhenktbG9hZGVkIGZlYXR1cmUgbW9kdWxlLlxuICAgICAqIFNhbWUgYXMgYGZvclJvb3RgLlxuICAgICAqIFRoaXMgaXMgYSBmZWVsLWdvb2QgbWV0aG9kIHNvIHlvdSBjYW4gZm9sbG93IHRoZSBBbmd1bGFyIHN0eWxlIGd1aWRlIGZvciBsYXp5LWxvYWRlZCBtb2R1bGVzLlxuICAgICAqL1xuICAgIEluTWVtb3J5V2ViQXBpTW9kdWxlLmZvckZlYXR1cmUgPSBmdW5jdGlvbiAoZGJDcmVhdG9yLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBJbk1lbW9yeVdlYkFwaU1vZHVsZV8xLmZvclJvb3QoZGJDcmVhdG9yLCBvcHRpb25zKTtcbiAgICB9O1xuICAgIHZhciBJbk1lbW9yeVdlYkFwaU1vZHVsZV8xO1xuICAgIEluTWVtb3J5V2ViQXBpTW9kdWxlID0gSW5NZW1vcnlXZWJBcGlNb2R1bGVfMSA9IF9fZGVjb3JhdGUoW1xuICAgICAgICBOZ01vZHVsZSh7fSlcbiAgICBdLCBJbk1lbW9yeVdlYkFwaU1vZHVsZSk7XG4gICAgcmV0dXJuIEluTWVtb3J5V2ViQXBpTW9kdWxlO1xufSgpKTtcbmV4cG9ydCB7IEluTWVtb3J5V2ViQXBpTW9kdWxlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbi1tZW1vcnktd2ViLWFwaS5tb2R1bGUuanMubWFwIl0sIm5hbWVzIjpbIk9ic2VydmFibGUiLCJ0aGlzIiwiSW5qZWN0YWJsZSIsIkJlaGF2aW9yU3ViamVjdCIsImZpcnN0IiwiY29uY2F0TWFwIiwiZnJvbSIsIm9mIiwiX19kZWNvcmF0ZSIsIl9fbWV0YWRhdGEiLCJIdHRwSGVhZGVycyIsIm1hcCIsIkh0dHBQYXJhbXMiLCJIdHRwUmVzcG9uc2UiLCJIdHRwWGhyQmFja2VuZCIsIkluamVjdCIsIk9wdGlvbmFsIiwiWGhyRmFjdG9yeSIsIkh0dHBCYWNrZW5kIiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLElBQUksTUFBTSxHQUFHO0lBQ2hCLFFBQVEsRUFBRSxHQUFHO0lBQ2IsbUJBQW1CLEVBQUUsR0FBRztJQUN4QixFQUFFLEVBQUUsR0FBRztJQUNQLE9BQU8sRUFBRSxHQUFHO0lBQ1osUUFBUSxFQUFFLEdBQUc7SUFDYiw2QkFBNkIsRUFBRSxHQUFHO0lBQ2xDLFVBQVUsRUFBRSxHQUFHO0lBQ2YsYUFBYSxFQUFFLEdBQUc7SUFDbEIsZUFBZSxFQUFFLEdBQUc7SUFDcEIsZ0JBQWdCLEVBQUUsR0FBRztJQUNyQixrQkFBa0IsRUFBRSxHQUFHO0lBQ3ZCLEtBQUssRUFBRSxHQUFHO0lBQ1YsU0FBUyxFQUFFLEdBQUc7SUFDZCxZQUFZLEVBQUUsR0FBRztJQUNqQixTQUFTLEVBQUUsR0FBRztJQUNkLGtCQUFrQixFQUFFLEdBQUc7SUFDdkIsV0FBVyxFQUFFLEdBQUc7SUFDaEIsWUFBWSxFQUFFLEdBQUc7SUFDakIsZ0JBQWdCLEVBQUUsR0FBRztJQUNyQixTQUFTLEVBQUUsR0FBRztJQUNkLFNBQVMsRUFBRSxHQUFHO0lBQ2Qsa0JBQWtCLEVBQUUsR0FBRztJQUN2QixjQUFjLEVBQUUsR0FBRztJQUNuQiw2QkFBNkIsRUFBRSxHQUFHO0lBQ2xDLGVBQWUsRUFBRSxHQUFHO0lBQ3BCLFFBQVEsRUFBRSxHQUFHO0lBQ2IsSUFBSSxFQUFFLEdBQUc7SUFDVCxlQUFlLEVBQUUsR0FBRztJQUNwQixtQkFBbUIsRUFBRSxHQUFHO0lBQ3hCLGdCQUFnQixFQUFFLEdBQUc7SUFDckIsWUFBWSxFQUFFLEdBQUc7SUFDakIsc0JBQXNCLEVBQUUsR0FBRztJQUMzQixxQkFBcUIsRUFBRSxHQUFHO0lBQzFCLGtCQUFrQixFQUFFLEdBQUc7SUFDdkIsV0FBVyxFQUFFLEdBQUc7SUFDaEIsZ0JBQWdCLEVBQUUsR0FBRztJQUNyQixxQkFBcUIsRUFBRSxHQUFHO0lBQzFCLGVBQWUsRUFBRSxHQUFHO0lBQ3BCLFdBQVcsRUFBRSxHQUFHO0lBQ2hCLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIsZUFBZSxFQUFFLEdBQUc7SUFDcEIsMEJBQTBCLEVBQUUsR0FBRztJQUMvQixVQUFVLEVBQUUsR0FBRztJQUNmLFlBQVksRUFBRSxHQUFHO0lBQ2pCLE9BQU8sRUFBRSxHQUFHO0lBQ1osa0JBQWtCLEVBQUUsR0FBRztJQUN2QixtQkFBbUIsRUFBRSxHQUFHO0lBQ3hCLE1BQU0sRUFBRSxHQUFHO0lBQ1gsaUJBQWlCLEVBQUUsR0FBRztJQUN0QixxQkFBcUIsRUFBRSxHQUFHO0lBQzFCLGlCQUFpQixFQUFFLEdBQUc7SUFDdEIsK0JBQStCLEVBQUUsR0FBRztJQUNwQyw2QkFBNkIsRUFBRSxHQUFHO0lBQ2xDLHVCQUF1QixFQUFFLEdBQUc7SUFDNUIsb0JBQW9CLEVBQUUsR0FBRztJQUN6QiwrQkFBK0IsRUFBRSxHQUFHO0NBQ3ZDLENBQUM7O0FBRUYsQUFBTyxJQUFJLGdCQUFnQixHQUFHO0lBQzFCLEtBQUssRUFBRTtRQUNILE1BQU0sRUFBRSxHQUFHO1FBQ1gsTUFBTSxFQUFFLFVBQVU7UUFDbEIsYUFBYSxFQUFFLGtHQUFrRztRQUNqSCxZQUFZLEVBQUUsZUFBZTtRQUM3QixXQUFXLEVBQUUsa0RBQWtEO0tBQ2xFO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsTUFBTSxFQUFFLEdBQUc7UUFDWCxNQUFNLEVBQUUscUJBQXFCO1FBQzdCLGFBQWEsRUFBRSx1TEFBdUw7UUFDdE0sWUFBWSxFQUFFLGVBQWU7UUFDN0IsV0FBVyxFQUFFLGtEQUFrRDtLQUNsRTtJQUNELEtBQUssRUFBRTtRQUNILE1BQU0sRUFBRSxHQUFHO1FBQ1gsTUFBTSxFQUFFLElBQUk7UUFDWixhQUFhLEVBQUUsZ0NBQWdDO1FBQy9DLFlBQVksRUFBRSxlQUFlO1FBQzdCLFdBQVcsRUFBRSxrREFBa0Q7S0FDbEU7SUFDRCxLQUFLLEVBQUU7UUFDSCxNQUFNLEVBQUUsR0FBRztRQUNYLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLGFBQWEsRUFBRSxpR0FBaUc7UUFDaEgsWUFBWSxFQUFFLGVBQWU7UUFDN0IsV0FBVyxFQUFFLGtEQUFrRDtLQUNsRTtJQUNELEtBQUssRUFBRTtRQUNILE1BQU0sRUFBRSxHQUFHO1FBQ1gsTUFBTSxFQUFFLFVBQVU7UUFDbEIsYUFBYSxFQUFFLDhGQUE4RjtRQUM3RyxZQUFZLEVBQUUsZUFBZTtRQUM3QixXQUFXLEVBQUUsa0RBQWtEO0tBQ2xFO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsTUFBTSxFQUFFLEdBQUc7UUFDWCxNQUFNLEVBQUUsK0JBQStCO1FBQ3ZDLGFBQWEsRUFBRSx3SkFBd0o7UUFDdkssWUFBWSxFQUFFLGVBQWU7UUFDN0IsV0FBVyxFQUFFLGtEQUFrRDtLQUNsRTtJQUNELEtBQUssRUFBRTtRQUNILE1BQU0sRUFBRSxHQUFHO1FBQ1gsTUFBTSxFQUFFLFlBQVk7UUFDcEIsYUFBYSxFQUFFLHFJQUFxSTtRQUNwSixZQUFZLEVBQUUsZUFBZTtRQUM3QixXQUFXLEVBQUUsa0RBQWtEO0tBQ2xFO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsTUFBTSxFQUFFLEdBQUc7UUFDWCxNQUFNLEVBQUUsZUFBZTtRQUN2QixhQUFhLEVBQUUsc01BQXNNO1FBQ3JOLFlBQVksRUFBRSxlQUFlO1FBQzdCLFdBQVcsRUFBRSxrREFBa0Q7S0FDbEU7SUFDRCxLQUFLLEVBQUU7UUFDSCxNQUFNLEVBQUUsR0FBRztRQUNYLE1BQU0sRUFBRSxpQkFBaUI7UUFDekIsYUFBYSxFQUFFLDJPQUEyTztRQUMxUCxZQUFZLEVBQUUsYUFBYTtRQUMzQixXQUFXLEVBQUUsZ0RBQWdEO0tBQ2hFO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsTUFBTSxFQUFFLEdBQUc7UUFDWCxNQUFNLEVBQUUsa0JBQWtCO1FBQzFCLGFBQWEsRUFBRSx1U0FBdVM7UUFDdFQsWUFBWSxFQUFFLGVBQWU7UUFDN0IsV0FBVyxFQUFFLGtEQUFrRDtLQUNsRTtJQUNELEtBQUssRUFBRTtRQUNILE1BQU0sRUFBRSxHQUFHO1FBQ1gsTUFBTSxFQUFFLG1CQUFtQjtRQUMzQixhQUFhLEVBQUUsaUpBQWlKO1FBQ2hLLFlBQVksRUFBRSxlQUFlO1FBQzdCLFdBQVcsRUFBRSxrREFBa0Q7S0FDbEU7SUFDRCxLQUFLLEVBQUU7UUFDSCxNQUFNLEVBQUUsR0FBRztRQUNYLE1BQU0sRUFBRSxPQUFPO1FBQ2YsYUFBYSxFQUFFLG9FQUFvRTtRQUNuRixZQUFZLEVBQUUsZUFBZTtRQUM3QixXQUFXLEVBQUUsa0RBQWtEO0tBQ2xFO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsTUFBTSxFQUFFLEdBQUc7UUFDWCxNQUFNLEVBQUUsV0FBVztRQUNuQixhQUFhLEVBQUUscU1BQXFNO1FBQ3BOLFlBQVksRUFBRSxlQUFlO1FBQzdCLFdBQVcsRUFBRSxrREFBa0Q7S0FDbEU7SUFDRCxLQUFLLEVBQUU7UUFDSCxNQUFNLEVBQUUsR0FBRztRQUNYLE1BQU0sRUFBRSxjQUFjO1FBQ3RCLGFBQWEsRUFBRSx1S0FBdUs7UUFDdEwsWUFBWSxFQUFFLGFBQWE7UUFDM0IsV0FBVyxFQUFFLGdEQUFnRDtLQUNoRTtJQUNELEtBQUssRUFBRTtRQUNILE1BQU0sRUFBRSxHQUFHO1FBQ1gsTUFBTSxFQUFFLFdBQVc7UUFDbkIsYUFBYSxFQUFFLGNBQWM7UUFDN0IsWUFBWSxFQUFFLGVBQWU7UUFDN0IsV0FBVyxFQUFFLGtEQUFrRDtLQUNsRTtJQUNELEtBQUssRUFBRTtRQUNILE1BQU0sRUFBRSxHQUFHO1FBQ1gsTUFBTSxFQUFFLG9CQUFvQjtRQUM1QixhQUFhLEVBQUUsOEtBQThLO1FBQzdMLFlBQVksRUFBRSxlQUFlO1FBQzdCLFdBQVcsRUFBRSxrREFBa0Q7S0FDbEU7SUFDRCxLQUFLLEVBQUU7UUFDSCxNQUFNLEVBQUUsR0FBRztRQUNYLE1BQU0sRUFBRSxhQUFhO1FBQ3JCLGFBQWEsRUFBRSxpTEFBaUw7UUFDaE0sWUFBWSxFQUFFLGVBQWU7UUFDN0IsV0FBVyxFQUFFLGtEQUFrRDtLQUNsRTtJQUNELEtBQUssRUFBRTtRQUNILE1BQU0sRUFBRSxHQUFHO1FBQ1gsTUFBTSxFQUFFLGNBQWM7UUFDdEIsYUFBYSxFQUFFLGlIQUFpSDtRQUNoSSxZQUFZLEVBQUUsZUFBZTtRQUM3QixXQUFXLEVBQUUsZ0RBQWdEO0tBQ2hFO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsTUFBTSxFQUFFLEdBQUc7UUFDWCxNQUFNLEVBQUUsa0JBQWtCO1FBQzFCLGFBQWEsRUFBRSxZQUFZO1FBQzNCLFlBQVksRUFBRSxlQUFlO1FBQzdCLFdBQVcsRUFBRSxrREFBa0Q7S0FDbEU7SUFDRCxLQUFLLEVBQUU7UUFDSCxNQUFNLEVBQUUsR0FBRztRQUNYLE1BQU0sRUFBRSxXQUFXO1FBQ25CLGFBQWEsRUFBRSxvRUFBb0U7UUFDbkYsWUFBWSxFQUFFLGVBQWU7UUFDN0IsV0FBVyxFQUFFLGtEQUFrRDtLQUNsRTtJQUNELEtBQUssRUFBRTtRQUNILE1BQU0sRUFBRSxHQUFHO1FBQ1gsTUFBTSxFQUFFLFdBQVc7UUFDbkIsYUFBYSxFQUFFLG9JQUFvSTtRQUNuSixZQUFZLEVBQUUsZUFBZTtRQUM3QixXQUFXLEVBQUUsa0RBQWtEO0tBQ2xFO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsTUFBTSxFQUFFLEdBQUc7UUFDWCxNQUFNLEVBQUUsb0JBQW9CO1FBQzVCLGFBQWEsRUFBRSxzSEFBc0g7UUFDckksWUFBWSxFQUFFLGVBQWU7UUFDN0IsV0FBVyxFQUFFLGtEQUFrRDtLQUNsRTtJQUNELEtBQUssRUFBRTtRQUNILE1BQU0sRUFBRSxHQUFHO1FBQ1gsTUFBTSxFQUFFLGdCQUFnQjtRQUN4QixhQUFhLEVBQUUsMFBBQTBQO1FBQ3pRLFlBQVksRUFBRSxlQUFlO1FBQzdCLFdBQVcsRUFBRSxrREFBa0Q7S0FDbEU7SUFDRCxLQUFLLEVBQUU7UUFDSCxNQUFNLEVBQUUsR0FBRztRQUNYLE1BQU0sRUFBRSwrQkFBK0I7UUFDdkMsYUFBYSxFQUFFLHNFQUFzRTtRQUNyRixZQUFZLEVBQUUsZUFBZTtRQUM3QixXQUFXLEVBQUUsa0RBQWtEO0tBQ2xFO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsTUFBTSxFQUFFLEdBQUc7UUFDWCxNQUFNLEVBQUUsaUJBQWlCO1FBQ3pCLGFBQWEsRUFBRSx5R0FBeUc7UUFDeEgsWUFBWSxFQUFFLGVBQWU7UUFDN0IsV0FBVyxFQUFFLGtEQUFrRDtLQUNsRTtJQUNELEtBQUssRUFBRTtRQUNILE1BQU0sRUFBRSxHQUFHO1FBQ1gsTUFBTSxFQUFFLFVBQVU7UUFDbEIsYUFBYSxFQUFFLGtHQUFrRztRQUNqSCxZQUFZLEVBQUUsZUFBZTtRQUM3QixXQUFXLEVBQUUsa0RBQWtEO0tBQ2xFO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsTUFBTSxFQUFFLEdBQUc7UUFDWCxNQUFNLEVBQUUsTUFBTTtRQUNkLGFBQWEsRUFBRSxrSUFBa0k7UUFDakosWUFBWSxFQUFFLGVBQWU7UUFDN0IsV0FBVyxFQUFFLGtEQUFrRDtLQUNsRTtJQUNELEtBQUssRUFBRTtRQUNILE1BQU0sRUFBRSxHQUFHO1FBQ1gsTUFBTSxFQUFFLGlCQUFpQjtRQUN6QixhQUFhLEVBQUUsZ0ZBQWdGO1FBQy9GLFlBQVksRUFBRSxnQkFBZ0I7UUFDOUIsV0FBVyxFQUFFLG1EQUFtRDtLQUNuRTtJQUNELEtBQUssRUFBRTtRQUNILE1BQU0sRUFBRSxHQUFHO1FBQ1gsTUFBTSxFQUFFLHFCQUFxQjtRQUM3QixhQUFhLEVBQUUsZ0hBQWdIO1FBQy9ILFlBQVksRUFBRSxhQUFhO1FBQzNCLFdBQVcsRUFBRSxnREFBZ0Q7S0FDaEU7SUFDRCxLQUFLLEVBQUU7UUFDSCxNQUFNLEVBQUUsR0FBRztRQUNYLE1BQU0sRUFBRSxtQkFBbUI7UUFDM0IsYUFBYSxFQUFFLHNJQUFzSTtRQUNySixZQUFZLEVBQUUsZ0JBQWdCO1FBQzlCLFdBQVcsRUFBRSxtREFBbUQ7S0FDbkU7SUFDRCxLQUFLLEVBQUU7UUFDSCxNQUFNLEVBQUUsR0FBRztRQUNYLE1BQU0sRUFBRSxjQUFjO1FBQ3RCLGFBQWEsRUFBRSxpSUFBaUk7UUFDaEosWUFBWSxFQUFFLGdCQUFnQjtRQUM5QixXQUFXLEVBQUUsbURBQW1EO0tBQ25FO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsTUFBTSxFQUFFLEdBQUc7UUFDWCxNQUFNLEVBQUUsd0JBQXdCO1FBQ2hDLGFBQWEsRUFBRSxtSkFBbUo7UUFDbEssWUFBWSxFQUFFLGdCQUFnQjtRQUM5QixXQUFXLEVBQUUsbURBQW1EO0tBQ25FO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsTUFBTSxFQUFFLEdBQUc7UUFDWCxNQUFNLEVBQUUsdUJBQXVCO1FBQy9CLGFBQWEsRUFBRSxxUEFBcVA7UUFDcFEsWUFBWSxFQUFFLGFBQWE7UUFDM0IsV0FBVyxFQUFFLGdEQUFnRDtLQUNoRTtJQUNELEtBQUssRUFBRTtRQUNILE1BQU0sRUFBRSxHQUFHO1FBQ1gsTUFBTSxFQUFFLG9CQUFvQjtRQUM1QixhQUFhLEVBQUUsMEhBQTBIO1FBQ3pJLFlBQVksRUFBRSxnQkFBZ0I7UUFDOUIsV0FBVyxFQUFFLG1EQUFtRDtLQUNuRTtJQUNELEtBQUssRUFBRTtRQUNILE1BQU0sRUFBRSxHQUFHO1FBQ1gsTUFBTSxFQUFFLGVBQWU7UUFDdkIsYUFBYSxFQUFFLDJFQUEyRTtRQUMxRixZQUFZLEVBQUUsVUFBVTtRQUN4QixXQUFXLEVBQUUscUNBQXFDO0tBQ3JEO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsTUFBTSxFQUFFLEdBQUc7UUFDWCxNQUFNLEVBQUUsa0JBQWtCO1FBQzFCLGFBQWEsRUFBRSwySkFBMko7UUFDMUssWUFBWSxFQUFFLGdCQUFnQjtRQUM5QixXQUFXLEVBQUUsbURBQW1EO0tBQ25FO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsTUFBTSxFQUFFLEdBQUc7UUFDWCxNQUFNLEVBQUUsdUJBQXVCO1FBQy9CLGFBQWEsRUFBRSxtR0FBbUc7UUFDbEgsWUFBWSxFQUFFLGVBQWU7UUFDN0IsV0FBVyxFQUFFLGtEQUFrRDtLQUNsRTtJQUNELEtBQUssRUFBRTtRQUNILE1BQU0sRUFBRSxHQUFHO1FBQ1gsTUFBTSxFQUFFLGlCQUFpQjtRQUN6QixhQUFhLEVBQUUsb0ZBQW9GO1FBQ25HLFlBQVksRUFBRSxlQUFlO1FBQzdCLFdBQVcsRUFBRSxrREFBa0Q7S0FDbEU7SUFDRCxLQUFLLEVBQUU7UUFDSCxNQUFNLEVBQUUsR0FBRztRQUNYLE1BQU0sRUFBRSxhQUFhO1FBQ3JCLGFBQWEsRUFBRSw4SkFBOEo7UUFDN0ssWUFBWSxFQUFFLGVBQWU7UUFDN0IsV0FBVyxFQUFFLGtEQUFrRDtLQUNsRTtJQUNELEtBQUssRUFBRTtRQUNILE1BQU0sRUFBRSxHQUFHO1FBQ1gsTUFBTSxFQUFFLHFCQUFxQjtRQUM3QixhQUFhLEVBQUUsa0tBQWtLO1FBQ2pMLFlBQVksRUFBRSxlQUFlO1FBQzdCLFdBQVcsRUFBRSxrREFBa0Q7S0FDbEU7SUFDRCxLQUFLLEVBQUU7UUFDSCxNQUFNLEVBQUUsR0FBRztRQUNYLE1BQU0sRUFBRSxrQkFBa0I7UUFDMUIsYUFBYSxFQUFFLHFLQUFxSztRQUNwTCxZQUFZLEVBQUUsZUFBZTtRQUM3QixXQUFXLEVBQUUsa0RBQWtEO0tBQ2xFO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsTUFBTSxFQUFFLEdBQUc7UUFDWCxNQUFNLEVBQUUsNEJBQTRCO1FBQ3BDLGFBQWEsRUFBRSxvSEFBb0g7UUFDbkksWUFBWSxFQUFFLGVBQWU7UUFDN0IsV0FBVyxFQUFFLGtEQUFrRDtLQUNsRTtJQUNELEtBQUssRUFBRTtRQUNILE1BQU0sRUFBRSxHQUFHO1FBQ1gsTUFBTSxFQUFFLFlBQVk7UUFDcEIsYUFBYSxFQUFFLCtIQUErSDtRQUM5SSxZQUFZLEVBQUUsY0FBYztRQUM1QixXQUFXLEVBQUUsaURBQWlEO0tBQ2pFO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsTUFBTSxFQUFFLEdBQUc7UUFDWCxNQUFNLEVBQUUsY0FBYztRQUN0QixhQUFhLEVBQUUsaURBQWlEO1FBQ2hFLFlBQVksRUFBRSxjQUFjO1FBQzVCLFdBQVcsRUFBRSxpREFBaUQ7S0FDakU7SUFDRCxLQUFLLEVBQUU7UUFDSCxNQUFNLEVBQUUsR0FBRztRQUNYLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLGFBQWEsRUFBRSx3TEFBd0w7UUFDdk0sWUFBWSxFQUFFLGdCQUFnQjtRQUM5QixXQUFXLEVBQUUsbURBQW1EO0tBQ25FO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsTUFBTSxFQUFFLEdBQUc7UUFDWCxNQUFNLEVBQUUsb0JBQW9CO1FBQzVCLGFBQWEsRUFBRSxtVEFBbVQ7UUFDbFUsWUFBWSxFQUFFLFNBQVM7UUFDdkIsV0FBVyxFQUFFLG9DQUFvQztLQUNwRDtJQUNELEtBQUssRUFBRTtRQUNILE1BQU0sRUFBRSxHQUFHO1FBQ1gsTUFBTSxFQUFFLHNCQUFzQjtRQUM5QixhQUFhLEVBQUUscVNBQXFTO1FBQ3BULFlBQVksRUFBRSxjQUFjO1FBQzVCLFdBQVcsRUFBRSxpREFBaUQ7S0FDakU7SUFDRCxLQUFLLEVBQUU7UUFDSCxNQUFNLEVBQUUsR0FBRztRQUNYLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLGFBQWEsRUFBRSwrREFBK0Q7UUFDOUUsWUFBWSxFQUFFLGNBQWM7UUFDNUIsV0FBVyxFQUFFLGlEQUFpRDtLQUNqRTtJQUNELEtBQUssRUFBRTtRQUNILE1BQU0sRUFBRSxHQUFHO1FBQ1gsTUFBTSxFQUFFLG1CQUFtQjtRQUMzQixhQUFhLEVBQUUsdUlBQXVJO1FBQ3RKLFlBQVksRUFBRSxjQUFjO1FBQzVCLFdBQVcsRUFBRSxpREFBaUQ7S0FDakU7SUFDRCxLQUFLLEVBQUU7UUFDSCxNQUFNLEVBQUUsR0FBRztRQUNYLE1BQU0sRUFBRSx1QkFBdUI7UUFDL0IsYUFBYSxFQUFFLCtEQUErRDtRQUM5RSxZQUFZLEVBQUUsV0FBVztRQUN6QixXQUFXLEVBQUUsOENBQThDO0tBQzlEO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsTUFBTSxFQUFFLEdBQUc7UUFDWCxNQUFNLEVBQUUsbUJBQW1CO1FBQzNCLGFBQWEsRUFBRSx3RkFBd0Y7UUFDdkcsWUFBWSxFQUFFLFdBQVc7UUFDekIsV0FBVyxFQUFFLDhDQUE4QztLQUM5RDtJQUNELEtBQUssRUFBRTtRQUNILE1BQU0sRUFBRSxHQUFHO1FBQ1gsTUFBTSxFQUFFLGlDQUFpQztRQUN6QyxhQUFhLEVBQUUsNkZBQTZGO1FBQzVHLFlBQVksRUFBRSxXQUFXO1FBQ3pCLFdBQVcsRUFBRSw4Q0FBOEM7S0FDOUQ7SUFDRCxLQUFLLEVBQUU7UUFDSCxNQUFNLEVBQUUsR0FBRztRQUNYLE1BQU0sRUFBRSwrQkFBK0I7UUFDdkMsYUFBYSxFQUFFLGlGQUFpRjtRQUNoRyxZQUFZLEVBQUUsOENBQThDO1FBQzVELFdBQVcsRUFBRSx5RUFBeUU7S0FDekY7SUFDRCxLQUFLLEVBQUU7UUFDSCxNQUFNLEVBQUUsR0FBRztRQUNYLE1BQU0sRUFBRSx5QkFBeUI7UUFDakMsYUFBYSxFQUFFLHdOQUF3TjtRQUN2TyxZQUFZLEVBQUUsYUFBYTtRQUMzQixXQUFXLEVBQUUsZ0RBQWdEO0tBQ2hFO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsTUFBTSxFQUFFLEdBQUc7UUFDWCxNQUFNLEVBQUUsc0JBQXNCO1FBQzlCLGFBQWEsRUFBRSw0SkFBNEo7UUFDM0ssWUFBWSxFQUFFLGNBQWM7UUFDNUIsV0FBVyxFQUFFLGlEQUFpRDtLQUNqRTtJQUNELEtBQUssRUFBRTtRQUNILE1BQU0sRUFBRSxHQUFHO1FBQ1gsTUFBTSxFQUFFLGlDQUFpQztRQUN6QyxhQUFhLEVBQUUsOERBQThEO1FBQzdFLFlBQVksRUFBRSxXQUFXO1FBQ3pCLFdBQVcsRUFBRSw4Q0FBOEM7S0FDOUQ7Q0FDSixDQUFDOzs7O0FBSUYsQUFBTyxTQUFTLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFDbEMsT0FBTyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLElBQUksZ0JBQWdCLENBQUM7Q0FDNUQ7Ozs7QUFJRCxBQUFPLFNBQVMsU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFFLE9BQU8sTUFBTSxJQUFJLEdBQUcsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLEVBQUU7O0FDN2MzRTs7QUFFQSxBQUFPLFNBQVMsYUFBYSxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUU7SUFDOUMsT0FBTyxJQUFJQSxlQUFVLENBQUMsVUFBVSxRQUFRLEVBQUU7UUFDdEMsSUFBSSxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLFlBQVksR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQVUsS0FBSyxFQUFFO1lBQ3BELFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDbkIsVUFBVSxDQUFDLFlBQVk7Z0JBQ25CLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JCLElBQUksZUFBZSxFQUFFO29CQUNqQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ3ZCO2FBQ0osRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNmLEVBQUUsVUFBVSxLQUFLLEVBQUUsRUFBRSxPQUFPLFVBQVUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsWUFBWTtZQUM1RyxlQUFlLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ2QsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3ZCO1NBQ0osQ0FBQyxDQUFDO1FBQ0gsT0FBTyxZQUFZO1lBQ2YsT0FBTyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDckMsQ0FBQztLQUNMLENBQUMsQ0FBQztDQUNOOztBQ3pCRCxJQUFJLFVBQVUsR0FBRyxDQUFDQyxTQUFJLElBQUlBLFNBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxVQUFVLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7SUFDbkYsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsSUFBSSxLQUFLLElBQUksR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzdILElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxJQUFJLE9BQU8sT0FBTyxDQUFDLFFBQVEsS0FBSyxVQUFVLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDMUgsS0FBSyxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xKLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztDQUNqRSxDQUFDO0FBQ0YsSUFBSSxVQUFVLEdBQUcsQ0FBQ0EsU0FBSSxJQUFJQSxTQUFJLENBQUMsVUFBVSxLQUFLLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtJQUMxRCxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxPQUFPLE9BQU8sQ0FBQyxRQUFRLEtBQUssVUFBVSxFQUFFLE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Q0FDNUcsQ0FBQztBQUNGLEFBQ0E7Ozs7Ozs7Ozs7QUFVQSxJQUFJLGlCQUFpQixrQkFBa0IsWUFBWTtJQUMvQyxTQUFTLGlCQUFpQixHQUFHO0tBQzVCO0lBQ0QsT0FBTyxpQkFBaUIsQ0FBQztDQUM1QixFQUFFLENBQUMsQ0FBQztBQUNMLEFBQ0E7OztBQUdBLElBQUkseUJBQXlCLGtCQUFrQixZQUFZO0lBQ3ZELFNBQVMseUJBQXlCLEdBQUc7S0FDcEM7SUFDRCxPQUFPLHlCQUF5QixDQUFDO0NBQ3BDLEVBQUUsQ0FBQyxDQUFDO0FBQ0wsQUFDQTs7Ozs7Ozs7O0FBU0EsSUFBSSxxQkFBcUIsa0JBQWtCLFlBQVk7SUFDbkQsU0FBUyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUU7UUFDbkMsSUFBSSxNQUFNLEtBQUssS0FBSyxDQUFDLEVBQUUsRUFBRSxNQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUU7UUFDdkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7O1lBRWhCLG1CQUFtQixFQUFFLEtBQUs7WUFDMUIsaUJBQWlCLEVBQUUsS0FBSztZQUN4QixLQUFLLEVBQUUsR0FBRztZQUNWLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLGtCQUFrQixFQUFFLEtBQUs7WUFDekIsT0FBTyxFQUFFLElBQUk7WUFDYixPQUFPLEVBQUUsS0FBSztZQUNkLE1BQU0sRUFBRSxJQUFJO1lBQ1osTUFBTSxFQUFFLEtBQUs7WUFDYixPQUFPLEVBQUUsU0FBUztZQUNsQixJQUFJLEVBQUUsU0FBUztZQUNmLFFBQVEsRUFBRSxTQUFTO1NBQ3RCLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDZDtJQUNELHFCQUFxQixHQUFHLFVBQVUsQ0FBQztRQUMvQkMsZUFBVSxFQUFFO1FBQ1osVUFBVSxDQUFDLG1CQUFtQixFQUFFLENBQUMseUJBQXlCLENBQUMsQ0FBQztLQUMvRCxFQUFFLHFCQUFxQixDQUFDLENBQUM7SUFDMUIsT0FBTyxxQkFBcUIsQ0FBQztDQUNoQyxFQUFFLENBQUMsQ0FBQztBQUNMLEFBQ0E7QUFDQSxBQUFPLFNBQVMsUUFBUSxDQUFDLEdBQUcsRUFBRTs7O0lBRzFCLElBQUksU0FBUyxHQUFHLGtNQUFrTSxDQUFDO0lBQ25OLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsSUFBSSxHQUFHLEdBQUc7UUFDTixNQUFNLEVBQUUsRUFBRTtRQUNWLFFBQVEsRUFBRSxFQUFFO1FBQ1osU0FBUyxFQUFFLEVBQUU7UUFDYixRQUFRLEVBQUUsRUFBRTtRQUNaLElBQUksRUFBRSxFQUFFO1FBQ1IsUUFBUSxFQUFFLEVBQUU7UUFDWixJQUFJLEVBQUUsRUFBRTtRQUNSLElBQUksRUFBRSxFQUFFO1FBQ1IsUUFBUSxFQUFFLEVBQUU7UUFDWixJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxFQUFFO1FBQ2IsSUFBSSxFQUFFLEVBQUU7UUFDUixLQUFLLEVBQUUsRUFBRTtRQUNULE1BQU0sRUFBRSxFQUFFO0tBQ2IsQ0FBQztJQUNGLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixPQUFPLENBQUMsRUFBRSxFQUFFO1FBQ1IsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDN0I7SUFDRCxPQUFPLEdBQUcsQ0FBQztDQUNkO0FBQ0QsQUFBTyxTQUFTLG1CQUFtQixDQUFDLElBQUksRUFBRTtJQUN0QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0NBQ2xDOztBQ2hHRDs7Ozs7OztBQU9BLElBQUksY0FBYyxrQkFBa0IsWUFBWTtJQUM1QyxTQUFTLGNBQWMsQ0FBQyxjQUFjLEVBQUUsTUFBTSxFQUFFO1FBQzVDLElBQUksTUFBTSxLQUFLLEtBQUssQ0FBQyxFQUFFLEVBQUUsTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxxQkFBcUIsRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNuRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNoQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDdEM7SUFDRCxNQUFNLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFOztRQUV2RCxHQUFHLEVBQUUsWUFBWTtZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFOztnQkFFdEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJQyxvQkFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqRCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDbEI7WUFDRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDQyxlQUFLLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3JGO1FBQ0QsVUFBVSxFQUFFLElBQUk7UUFDaEIsWUFBWSxFQUFFLElBQUk7S0FDckIsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBeUJILGNBQWMsQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLFVBQVUsR0FBRyxFQUFFO1FBQ3BELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQzs7UUFFakIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQ0MsbUJBQVMsQ0FBQyxZQUFZLEVBQUUsT0FBTyxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDMUYsQ0FBQztJQUNGLGNBQWMsQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLFVBQVUsR0FBRyxFQUFFO1FBQ3JELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQzs7O1FBRzFELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMxQyxJQUFJLE1BQU0sR0FBRyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUN0RCxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLElBQUksY0FBYyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7UUFDM0MsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN6QyxJQUFJLE9BQU8sR0FBRztZQUNWLEdBQUcsRUFBRSxHQUFHO1lBQ1IsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPO1lBQ3ZCLFVBQVUsRUFBRSxVQUFVO1lBQ3RCLGNBQWMsRUFBRSxjQUFjO1lBQzlCLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUM7WUFDbkUsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLGNBQWMsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQ3ZELE1BQU0sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO1lBQ2xDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixXQUFXLEVBQUUsTUFBTSxDQUFDLFdBQVc7WUFDL0IsR0FBRyxFQUFFLEdBQUc7WUFDUixLQUFLLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtTQUMvQixDQUFDO1FBQ0YsSUFBSSxVQUFVLENBQUM7UUFDZixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3ZDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNqQztRQUNELElBQUksaUJBQWlCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEQsSUFBSSxpQkFBaUIsRUFBRTs7OztZQUluQixJQUFJLG1CQUFtQixHQUFHLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JELElBQUksbUJBQW1CLEVBQUU7Z0JBQ3JCLE9BQU8sbUJBQW1CLENBQUM7YUFDOUI7WUFDRCxBQUFDO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLEVBQUU7O1lBRXpCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxLQUFLLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDekY7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUU7O1lBRWhDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2hEOztRQUVELFVBQVUsR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsY0FBYyxHQUFHLGNBQWMsR0FBRyxhQUFhLENBQUMsQ0FBQztRQUNySCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLE9BQU8sVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ25FLENBQUM7Ozs7SUFJRixjQUFjLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxVQUFVLFFBQVEsRUFBRTtRQUNwRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMxQixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxHQUFHLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0tBQ2pFLENBQUM7Ozs7OztJQU1GLGNBQWMsQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLFVBQVUsVUFBVSxFQUFFLEtBQUssRUFBRTs7UUFFL0QsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLEdBQUcsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUN0RSxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsS0FBSyxFQUFFLElBQUksRUFBRTtZQUNqQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN4SCxDQUFDLENBQUM7UUFDSCxJQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBQzVCLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDTixPQUFPLFVBQVUsQ0FBQztTQUNyQjs7UUFFRCxPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLEVBQUU7WUFDcEMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQ2QsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ1osT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFO2dCQUNaLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ1AsSUFBSSxJQUFJLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3JDO1lBQ0QsT0FBTyxFQUFFLENBQUM7U0FDYixDQUFDLENBQUM7S0FDTixDQUFDOzs7O0lBSUYsY0FBYyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsVUFBVSxVQUFVLEVBQUU7UUFDbEQsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6QyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxTQUFTLENBQUM7S0FDeEQsQ0FBQztJQUNGLGNBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFVBQVUsSUFBSSxFQUFFO1FBQzlDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7S0FDaEUsQ0FBQztJQUNGLGNBQWMsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLFVBQVUsSUFBSSxFQUFFO1FBQzdDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDM0MsQ0FBQztJQUNGLGNBQWMsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEdBQUcsVUFBVSxPQUFPLEVBQUU7O1FBRTVELElBQUksVUFBVSxDQUFDO1FBQ2YsUUFBUSxPQUFPLENBQUMsTUFBTTtZQUNsQixLQUFLLEtBQUs7Z0JBQ04sVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQy9CLE1BQU07WUFDVixLQUFLLE1BQU07Z0JBQ1AsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hDLE1BQU07WUFDVixLQUFLLEtBQUs7Z0JBQ04sVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQy9CLE1BQU07WUFDVixLQUFLLFFBQVE7Z0JBQ1QsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2xDLE1BQU07WUFDVjtnQkFDSSxVQUFVLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLGtCQUFrQixFQUFFLG9CQUFvQixDQUFDLENBQUM7Z0JBQzNHLE1BQU07U0FDYjs7UUFFRCxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDbkQsT0FBTyxXQUFXLEdBQUcsV0FBVyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsR0FBRyxVQUFVLENBQUM7S0FDdEUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBa0JGLGNBQWMsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLFVBQVUsT0FBTyxFQUFFO1FBQ25ELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25ELElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDNUIsSUFBSSxVQUFVLEdBQUc7WUFDYixHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUc7U0FDbkIsQ0FBQztRQUNGLFFBQVEsT0FBTztZQUNYLEtBQUssU0FBUztnQkFDVixVQUFVLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7Z0JBQ3RDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUNBLG1CQUFTLENBQUMsWUFBWSxFQUFFLE9BQU8sS0FBSyxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxVQUFVLENBQUMsRUFBRSxFQUFFLEtBQUssd0JBQXdCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNsSyxLQUFLLFFBQVE7Z0JBQ1QsSUFBSSxNQUFNLEtBQUssS0FBSyxFQUFFO29CQUNsQixVQUFVLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7b0JBQzlCLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7O2lCQUU3QztxQkFDSTtvQkFDRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDekMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUNqQyxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztvQkFDakMsVUFBVSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO2lCQUN6QztnQkFDRCxNQUFNO1lBQ1Y7Z0JBQ0ksVUFBVSxHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxvQkFBb0IsR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDdEk7UUFDRCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLE9BQU8sVUFBVSxDQUFDLEVBQUUsRUFBRSxLQUFLLHdCQUF3QixDQUFDO0tBQ2pHLENBQUM7SUFDRixjQUFjLENBQUMsU0FBUyxDQUFDLDBCQUEwQixHQUFHLFVBQVUsR0FBRyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUU7UUFDbEYsT0FBTztZQUNILElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQUcsT0FBTyxFQUFFO1lBQzdCLEdBQUcsRUFBRSxHQUFHO1lBQ1IsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztZQUNuRSxNQUFNLEVBQUUsTUFBTTtTQUNqQixDQUFDO0tBQ0wsQ0FBQzs7Ozs7O0lBTUYsY0FBYyxDQUFDLFNBQVMsQ0FBQyxlQUFlLEdBQUcsVUFBVSxpQkFBaUIsRUFBRSxTQUFTLEVBQUU7UUFDL0UsSUFBSSxTQUFTLEtBQUssS0FBSyxDQUFDLEVBQUUsRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUU7UUFDL0MsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDakUsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2xFLE9BQU8sU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO0tBQ25ELENBQUM7Ozs7O0lBS0YsY0FBYyxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsR0FBRyxVQUFVLGlCQUFpQixFQUFFO1FBQzNFLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixPQUFPLElBQUlMLGVBQVUsQ0FBQyxVQUFVLGdCQUFnQixFQUFFO1lBQzlDLElBQUksVUFBVSxDQUFDO1lBQ2YsSUFBSTtnQkFDQSxVQUFVLEdBQUcsaUJBQWlCLEVBQUUsQ0FBQzthQUNwQztZQUNELE9BQU8sS0FBSyxFQUFFO2dCQUNWLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDO2dCQUNqQyxVQUFVLEdBQUcsS0FBSyxDQUFDLDBCQUEwQixDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMscUJBQXFCLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO2FBQzdGO1lBQ0QsSUFBSSxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztZQUMvQixJQUFJO2dCQUNBLFVBQVUsQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2pEO1lBQ0QsT0FBTyxDQUFDLEVBQUUsd0JBQXdCO1lBQ2xDLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNuQixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ2xDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQy9CO2lCQUNJO2dCQUNELGdCQUFnQixDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUN0QztZQUNELE9BQU8sWUFBWSxHQUFHLENBQUM7U0FDMUIsQ0FBQyxDQUFDO0tBQ04sQ0FBQztJQUNGLGNBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFVBQVUsRUFBRSxFQUFFO1FBQzVDLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxVQUFVLEVBQUUsY0FBYyxHQUFHLEVBQUUsQ0FBQyxjQUFjLEVBQUUsT0FBTyxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7O1FBRW5ILElBQUksRUFBRSxJQUFJLFNBQVMsRUFBRTtZQUNqQixPQUFPLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLFNBQVMsRUFBRSxZQUFZLEdBQUcsY0FBYyxHQUFHLE9BQU8sQ0FBQyxDQUFDO1NBQzFHO1FBQ0QsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDN0MsT0FBTztZQUNILE9BQU8sRUFBRSxPQUFPO1lBQ2hCLE1BQU0sRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVM7U0FDcEYsQ0FBQztLQUNMLENBQUM7Ozs7OztJQU1GLGNBQWMsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLFVBQVUsVUFBVSxFQUFFLEVBQUUsRUFBRTtRQUMxRCxPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ3RFLENBQUM7Ozs7Ozs7SUFPRixjQUFjLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFVLFVBQVUsRUFBRSxjQUFjLEVBQUU7UUFDbkUsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQixJQUFJLEtBQUssRUFBRTtZQUNQLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUUsY0FBYyxDQUFDLENBQUM7O1lBRTNDLElBQUksRUFBRSxJQUFJLFNBQVMsRUFBRTtnQkFDakIsT0FBTyxFQUFFLENBQUM7YUFDYjtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxjQUFjLENBQUMsQ0FBQztLQUN4RCxDQUFDOzs7Ozs7O0lBT0YsY0FBYyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsVUFBVSxVQUFVLEVBQUUsY0FBYyxFQUFFO1FBQzFFLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxFQUFFLGNBQWMsQ0FBQyxFQUFFO1lBQ3pELE1BQU0sSUFBSSxLQUFLLENBQUMsY0FBYyxHQUFHLGNBQWMsR0FBRyxxRUFBcUUsQ0FBQyxDQUFDO1NBQzVIO1FBQ0QsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksRUFBRSxJQUFJLEVBQUU7WUFDcEMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sSUFBSSxDQUFDLEVBQUUsS0FBSyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQztTQUMxRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2QsT0FBTyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0tBQ3BCLENBQUM7SUFDRixjQUFjLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxVQUFVLEVBQUUsRUFBRTtRQUN6QyxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsVUFBVSxFQUFFLGNBQWMsR0FBRyxFQUFFLENBQUMsY0FBYyxFQUFFLE9BQU8sR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDO1FBQ3JJLElBQUksSUFBSSxHQUFHLFVBQVUsQ0FBQzs7UUFFdEIsSUFBSSxFQUFFLElBQUksU0FBUyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDOUIsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ3hDO2FBQ0ksSUFBSSxLQUFLLEVBQUU7WUFDWixJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDN0M7UUFDRCxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1AsT0FBTyxJQUFJLENBQUMsMEJBQTBCLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsR0FBRyxHQUFHLGNBQWMsR0FBRyxhQUFhLEdBQUcsRUFBRSxHQUFHLGFBQWEsQ0FBQyxDQUFDO1NBQzVIO1FBQ0QsT0FBTztZQUNILElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsT0FBTyxFQUFFLE9BQU87WUFDaEIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7S0FDTCxDQUFDOzs7O0lBSUYsY0FBYyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsVUFBVSxHQUFHLEVBQUU7UUFDbEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7O1lBRXpCLElBQUksR0FBRyxHQUFHLENBQUMsT0FBTyxRQUFRLEtBQUssV0FBVyxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUM7O1lBRW5FLElBQUksSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO1lBQ2xGLEdBQUcsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDN0Q7UUFDRCxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUN4QixDQUFDO0lBQ0YsQUFBQzs7Ozs7SUFLRCxjQUFjLENBQUMsU0FBUyxDQUFDLGtCQUFrQixHQUFHLFlBQVk7UUFDdEQsT0FBTyxJQUFJLENBQUMsZUFBZTtZQUN2QixJQUFJLENBQUMsZUFBZTtZQUNwQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0tBQzNELENBQUM7Ozs7O0lBS0YsY0FBYyxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsR0FBRyxZQUFZO1FBQ3ZELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixPQUFPO1lBQ0gsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNoRCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2xDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzVELFNBQVMsRUFBRSxZQUFZLEVBQUUsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDL0MsS0FBSyxFQUFFLFlBQVksRUFBRSxPQUFPLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUN2QyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3hDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDeEMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDdEQsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztTQUNuRCxDQUFDO0tBQ0wsQ0FBQztJQUNGLGNBQWMsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLFVBQVUsVUFBVSxFQUFFLEVBQUUsRUFBRTtRQUN6RCxPQUFPLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBVSxJQUFJLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQzNFLENBQUM7O0lBRUYsY0FBYyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsVUFBVSxVQUFVLEVBQUUsY0FBYyxFQUFFLEVBQUUsRUFBRTtRQUN6RSxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsRUFBRSxjQUFjLENBQUMsRUFBRTs7O1lBR3pELE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFDRCxJQUFJLEtBQUssR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0IsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQztLQUNwQyxDQUFDOzs7OztJQUtGLGNBQWMsQ0FBQyxTQUFTLENBQUMscUJBQXFCLEdBQUcsVUFBVSxVQUFVLEVBQUUsY0FBYyxFQUFFOzs7UUFHbkYsT0FBTyxDQUFDLEVBQUUsVUFBVSxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxRQUFRLENBQUM7S0FDbEYsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBa0JGLGNBQWMsQ0FBQyxTQUFTLENBQUMsZUFBZSxHQUFHLFVBQVUsR0FBRyxFQUFFO1FBQ3RELElBQUk7WUFDQSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUN2QyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDakIsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFOzs7Z0JBRy9CLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQ1QsT0FBTyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO2FBQ2xEO1lBQ0QsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEMsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQyxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7Ozs7O1lBS2xCLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDOztZQUVyQixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLFNBQVMsRUFBRTtnQkFDbEMsT0FBTyxHQUFHLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO2FBQ3ZDO2lCQUNJO2dCQUNELE9BQU8sR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUMxRCxJQUFJLE9BQU8sRUFBRTtvQkFDVCxTQUFTLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7aUJBQ3pDO3FCQUNJO29CQUNELFNBQVMsR0FBRyxDQUFDLENBQUM7aUJBQ2pCO2FBQ0o7WUFDRCxPQUFPLElBQUksR0FBRyxDQUFDO1lBQ2YsSUFBSSxjQUFjLEdBQUcsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7O1lBRS9DLGNBQWMsR0FBRyxjQUFjLElBQUksY0FBYyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRSxJQUFJLEVBQUUsR0FBRyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztZQUNuQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQyxJQUFJLFdBQVcsR0FBRyxPQUFPLEdBQUcsT0FBTyxHQUFHLGNBQWMsR0FBRyxHQUFHLENBQUM7WUFDM0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxDQUFDO1NBQy9HO1FBQ0QsT0FBTyxHQUFHLEVBQUU7WUFDUixJQUFJLEdBQUcsR0FBRyx1QkFBdUIsR0FBRyxHQUFHLEdBQUcscUJBQXFCLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUM5RSxNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3hCO0tBQ0osQ0FBQzs7O0lBR0YsY0FBYyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsVUFBVSxFQUFFLEVBQUU7UUFDMUMsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLFVBQVUsRUFBRSxjQUFjLEdBQUcsRUFBRSxDQUFDLGNBQWMsRUFBRSxPQUFPLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxXQUFXLEdBQUcsRUFBRSxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQztRQUMvSixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7UUFFN0MsSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLFNBQVMsRUFBRTtZQUN0QixJQUFJO2dCQUNBLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLGNBQWMsQ0FBQyxDQUFDO2FBQzFEO1lBQ0QsT0FBTyxHQUFHLEVBQUU7Z0JBQ1IsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7Z0JBQzdCLElBQUksd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNyQyxPQUFPLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUNqRjtxQkFDSTtvQkFDRCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNuQixPQUFPLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLHFCQUFxQixFQUFFLGlDQUFpQyxHQUFHLGNBQWMsR0FBRyxHQUFHLENBQUMsQ0FBQztpQkFDdkk7YUFDSjtTQUNKO1FBQ0QsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDdEIsT0FBTyxJQUFJLENBQUMsMEJBQTBCLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxXQUFXLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztTQUN4RzthQUNJO1lBQ0QsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7U0FDaEI7UUFDRCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM5QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksVUFBVSxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ25CLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsV0FBVyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNoRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDbkU7YUFDSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQzFCLE9BQU8sSUFBSSxDQUFDLDBCQUEwQixDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFLEdBQUcsR0FBRyxjQUFjLEdBQUcsa0JBQWtCLEdBQUcsRUFBRSxHQUFHLDREQUE0RCxDQUFDLENBQUM7U0FDL0s7YUFDSTtZQUNELFVBQVUsQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDOUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87Z0JBQ3RCLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLFVBQVUsRUFBRTtnQkFDL0MsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQztTQUMzRDtLQUNKLENBQUM7OztJQUdGLGNBQWMsQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLFVBQVUsRUFBRSxFQUFFO1FBQ3pDLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxVQUFVLEVBQUUsY0FBYyxHQUFHLEVBQUUsQ0FBQyxjQUFjLEVBQUUsT0FBTyxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFDakksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7O1FBRTdDLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxTQUFTLEVBQUU7WUFDdEIsT0FBTyxJQUFJLENBQUMsMEJBQTBCLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsV0FBVyxHQUFHLGNBQWMsR0FBRyxNQUFNLENBQUMsQ0FBQztTQUN4RztRQUNELElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ3RCLE9BQU8sSUFBSSxDQUFDLDBCQUEwQixDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsV0FBVyxFQUFFLGVBQWUsR0FBRyxjQUFjLEdBQUcsNkJBQTZCLENBQUMsQ0FBQztTQUNySTthQUNJO1lBQ0QsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7U0FDaEI7UUFDRCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM5QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ2pCLFVBQVUsQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDOUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07Z0JBQ3JCLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLFVBQVUsRUFBRTtnQkFDL0MsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQztTQUMzRDthQUNJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7O1lBRXpCLE9BQU8sSUFBSSxDQUFDLDBCQUEwQixDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsU0FBUyxFQUFFLEdBQUcsR0FBRyxjQUFjLEdBQUcsa0JBQWtCLEdBQUcsRUFBRSxHQUFHLCtEQUErRCxDQUFDLENBQUM7U0FDbkw7YUFDSTs7WUFFRCxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RCLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNuRTtLQUNKLENBQUM7SUFDRixjQUFjLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxVQUFVLFVBQVUsRUFBRSxFQUFFLEVBQUU7UUFDNUQsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDVCxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN6QixPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsT0FBTyxLQUFLLENBQUM7S0FDaEIsQ0FBQzs7Ozs7SUFLRixjQUFjLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxVQUFVLE9BQU8sRUFBRTtRQUNsRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0MsSUFBSSxHQUFHLEdBQUcsRUFBRSxZQUFZQSxlQUFVLEdBQUcsRUFBRTtZQUNuQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLEtBQUssVUFBVSxHQUFHTSxTQUFJLENBQUMsRUFBRSxDQUFDO2dCQUNwQ0MsT0FBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQ0gsZUFBSyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDckMsS0FBSyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDYixLQUFLLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQyxDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDdkIsQ0FBQztJQUNGLE9BQU8sY0FBYyxDQUFDO0NBQ3pCLEVBQUUsQ0FBQzs7QUN2a0JKLElBQUksU0FBUyxHQUFHLENBQUNILFNBQUksSUFBSUEsU0FBSSxDQUFDLFNBQVMsS0FBSyxDQUFDLFlBQVk7SUFDckQsSUFBSSxhQUFhLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQ2hDLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYzthQUNoQyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzVFLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMvRSxPQUFPLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7TUFDOUI7SUFDRCxPQUFPLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUNuQixhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRTtRQUN2QyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQ3hGLENBQUM7Q0FDTCxHQUFHLENBQUM7QUFDTCxJQUFJTyxZQUFVLEdBQUcsQ0FBQ1AsU0FBSSxJQUFJQSxTQUFJLENBQUMsVUFBVSxLQUFLLFVBQVUsVUFBVSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFO0lBQ25GLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLElBQUksS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM3SCxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxPQUFPLE9BQU8sQ0FBQyxRQUFRLEtBQUssVUFBVSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzFILEtBQUssSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsSixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDakUsQ0FBQztBQUNGLElBQUlRLFlBQVUsR0FBRyxDQUFDUixTQUFJLElBQUlBLFNBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0lBQzFELElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxJQUFJLE9BQU8sT0FBTyxDQUFDLFFBQVEsS0FBSyxVQUFVLEVBQUUsT0FBTyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztDQUM1RyxDQUFDO0FBQ0YsSUFBSSxPQUFPLEdBQUcsQ0FBQ0EsU0FBSSxJQUFJQSxTQUFJLENBQUMsT0FBTyxLQUFLLFVBQVUsVUFBVSxFQUFFLFNBQVMsRUFBRTtJQUNyRSxPQUFPLFVBQVUsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFLFNBQVMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDLEVBQUU7Q0FDeEUsQ0FBQztBQUNGLEFBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQSxJQUFJLHdCQUF3QixrQkFBa0IsVUFBVSxNQUFNLEVBQUU7SUFDNUQsU0FBUyxDQUFDLHdCQUF3QixFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLFNBQVMsd0JBQXdCLENBQUMsY0FBYyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUU7UUFDbEUsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQztRQUM5RCxLQUFLLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM5QixPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUNELHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsVUFBVSxHQUFHLEVBQUU7UUFDdkQsSUFBSTtZQUNBLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNsQztRQUNELE9BQU8sS0FBSyxFQUFFO1lBQ1YsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUM7WUFDakMsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLHFCQUFxQixFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNwRyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLE9BQU8sWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3JFO0tBQ0osQ0FBQzs7SUFFRix3QkFBd0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLFVBQVUsR0FBRyxFQUFFO1FBQzVELE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQztLQUNuQixDQUFDO0lBQ0Ysd0JBQXdCLENBQUMsU0FBUyxDQUFDLGdCQUFnQixHQUFHLFVBQVUsR0FBRyxFQUFFO1FBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLEtBQUssRUFBRSxXQUFXLEVBQUUsQ0FBQztLQUM5QyxDQUFDO0lBQ0Ysd0JBQXdCLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxVQUFVLE9BQU8sRUFBRTtRQUNsRSxPQUFPLElBQUlTLGdCQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDbkMsQ0FBQztJQUNGLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsVUFBVSxNQUFNLEVBQUU7UUFDbEUsSUFBSUMsTUFBRyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxNQUFNLEVBQUU7WUFDUixJQUFJLFFBQVEsR0FBRyxJQUFJQyxlQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUN0RCxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsT0FBT0QsTUFBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3BGO1FBQ0QsT0FBT0EsTUFBRyxDQUFDO0tBQ2QsQ0FBQztJQUNGLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxtQ0FBbUMsR0FBRyxVQUFVLFdBQVcsRUFBRTtRQUM1RixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUNBLGFBQUcsQ0FBQyxVQUFVLElBQUksRUFBRSxFQUFFLE9BQU8sSUFBSUUsaUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3BGLENBQUM7SUFDRix3QkFBd0IsQ0FBQyxTQUFTLENBQUMscUJBQXFCLEdBQUcsWUFBWTtRQUNuRSxJQUFJO1lBQ0EsT0FBTyxJQUFJQyxtQkFBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM5QztRQUNELE9BQU8sRUFBRSxFQUFFO1lBQ1AsRUFBRSxDQUFDLE9BQU8sR0FBRyxxQ0FBcUMsSUFBSSxFQUFFLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3hFLE1BQU0sRUFBRSxDQUFDO1NBQ1o7S0FDSixDQUFDO0lBQ0Ysd0JBQXdCLEdBQUdOLFlBQVUsQ0FBQztRQUNsQ04sZUFBVSxFQUFFO1FBQ1osT0FBTyxDQUFDLENBQUMsRUFBRWEsV0FBTSxDQUFDLHFCQUFxQixDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFFQyxhQUFRLEVBQUUsQ0FBQztRQUNqRVAsWUFBVSxDQUFDLG1CQUFtQixFQUFFLENBQUMsaUJBQWlCO1lBQzlDLHlCQUF5QjtZQUN6QlEsZUFBVSxDQUFDLENBQUM7S0FDbkIsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO0lBQzdCLE9BQU8sd0JBQXdCLENBQUM7Q0FDbkMsQ0FBQyxjQUFjLENBQUMsQ0FBQzs7QUNqSGxCO0FBQ0EsSUFBSVQsWUFBVSxHQUFHLENBQUNQLFNBQUksSUFBSUEsU0FBSSxDQUFDLFVBQVUsS0FBSyxVQUFVLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRTtJQUNuRixJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sR0FBRyxJQUFJLEtBQUssSUFBSSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUM7SUFDN0gsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLElBQUksT0FBTyxPQUFPLENBQUMsUUFBUSxLQUFLLFVBQVUsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUMxSCxLQUFLLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEosT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0NBQ2pFLENBQUM7QUFDRixBQUlBOztBQUVBLEFBQU8sU0FBUyxvQ0FBb0MsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRTtJQUNqRixJQUFJLE9BQU8sR0FBRyxJQUFJLHdCQUF3QixDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDM0UsT0FBTyxPQUFPLENBQUM7Q0FDbEI7QUFDRCxJQUFJLDhCQUE4QixrQkFBa0IsWUFBWTtJQUM1RCxTQUFTLDhCQUE4QixHQUFHO0tBQ3pDO0lBQ0QsZ0NBQWdDLEdBQUcsOEJBQThCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7SUFnQmxFLDhCQUE4QixDQUFDLE9BQU8sR0FBRyxVQUFVLFNBQVMsRUFBRSxPQUFPLEVBQUU7UUFDbkUsT0FBTztZQUNILFFBQVEsRUFBRSxnQ0FBZ0M7WUFDMUMsU0FBUyxFQUFFO2dCQUNQLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUU7Z0JBQ25ELEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUU7Z0JBQ3JELEVBQUUsT0FBTyxFQUFFaUIsZ0JBQVc7b0JBQ2xCLFVBQVUsRUFBRSxvQ0FBb0M7b0JBQ2hELElBQUksRUFBRSxDQUFDLGlCQUFpQixFQUFFLHFCQUFxQixFQUFFRCxlQUFVLENBQUMsRUFBRTthQUNyRTtTQUNKLENBQUM7S0FDTCxDQUFDOzs7Ozs7O0lBT0YsOEJBQThCLENBQUMsVUFBVSxHQUFHLFVBQVUsU0FBUyxFQUFFLE9BQU8sRUFBRTtRQUN0RSxPQUFPLGdDQUFnQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDdkUsQ0FBQztJQUNGLElBQUksZ0NBQWdDLENBQUM7SUFDckMsOEJBQThCLEdBQUcsZ0NBQWdDLEdBQUdULFlBQVUsQ0FBQztRQUMzRVcsYUFBUSxDQUFDLEVBQUUsQ0FBQztLQUNmLEVBQUUsOEJBQThCLENBQUMsQ0FBQztJQUNuQyxPQUFPLDhCQUE4QixDQUFDO0NBQ3pDLEVBQUUsQ0FBQzs7QUM5REo7QUFDQSxJQUFJWCxZQUFVLEdBQUcsQ0FBQ1AsU0FBSSxJQUFJQSxTQUFJLENBQUMsVUFBVSxLQUFLLFVBQVUsVUFBVSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFO0lBQ25GLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLElBQUksS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM3SCxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxPQUFPLE9BQU8sQ0FBQyxRQUFRLEtBQUssVUFBVSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzFILEtBQUssSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsSixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDakUsQ0FBQztBQUNGLEFBSUEsSUFBSSxvQkFBb0Isa0JBQWtCLFlBQVk7SUFDbEQsU0FBUyxvQkFBb0IsR0FBRztLQUMvQjtJQUNELHNCQUFzQixHQUFHLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0lBZ0I5QyxvQkFBb0IsQ0FBQyxPQUFPLEdBQUcsVUFBVSxTQUFTLEVBQUUsT0FBTyxFQUFFO1FBQ3pELE9BQU87WUFDSCxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFNBQVMsRUFBRTtnQkFDUCxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFO2dCQUNuRCxFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFO2dCQUNyRCxFQUFFLE9BQU8sRUFBRWlCLGdCQUFXO29CQUNsQixVQUFVLEVBQUUsb0NBQW9DO29CQUNoRCxJQUFJLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxxQkFBcUIsRUFBRUQsZUFBVSxDQUFDLEVBQUU7YUFDckU7U0FDSixDQUFDO0tBQ0wsQ0FBQzs7Ozs7OztJQU9GLG9CQUFvQixDQUFDLFVBQVUsR0FBRyxVQUFVLFNBQVMsRUFBRSxPQUFPLEVBQUU7UUFDNUQsT0FBTyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQzdELENBQUM7SUFDRixJQUFJLHNCQUFzQixDQUFDO0lBQzNCLG9CQUFvQixHQUFHLHNCQUFzQixHQUFHVCxZQUFVLENBQUM7UUFDdkRXLGFBQVEsQ0FBQyxFQUFFLENBQUM7S0FDZixFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDekIsT0FBTyxvQkFBb0IsQ0FBQztDQUMvQixFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=