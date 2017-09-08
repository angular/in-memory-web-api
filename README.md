# Angular in-memory-web-api
[![Build Status][travis-badge]][travis-badge-url]

An in-memory web api for Angular demos and tests
that emulates CRUD operations over a RESTy API.

It intercepts Angular `Http` and `HttpClient` requests that would otherwise go to the remote server and redirects them to an in-memory data store that you control.

---
## **v0.4.0 supports `HttpClient`!**
>Release v0.4.0  (8 Sept 2017) is a major overhaul of this library.
>
>You don't have to change your existing application _code_ if your app uses this library without customizations. 
>
>
>This v0.4.0 release has *breaking changes* that affect developers who used the customization features.
>We're pretty sure you'll think these changes are worthwhile.
>
>**Read this README** and the CHANGELOG to learn what's new.
>The new unit tests are worth a look as well.
>
---
>If you’re loading application files with **SystemJS**, you’ll have to configure it to load Angular’s `umd.js` for `HttpModule`.
>To see how, look for the following line in the 
>`src/systemjs.config.js` of this project:
>
>`'angular/common/http': 'npm:@angular/common/bundles/common-http.umd.js'`
>
>You've already made this change if you are using `HttpClient` today.
>
>If you’re sticking with the original Angular `Http` module, you _must make this change anyway!_ Your app will break as soon as you run `npm install` and it installs v0.4.0.
>
>If you're using webpack (as CLI devs do), you don't have to worry about this stuff because webpack bundles the dependencies for you.

---

## Use cases

* Demo apps that need to simulate CRUD data persistence operations without a real server.
You won't have to build and start a test server.

* Whip up prototypes and proofs of concept.

* Share examples with the community in a web coding environment such as Plunker or CodePen.
Create Angular issues and StackOverflow answers supported by live code.

* Simulate operations against data collections that aren't yet implemented on your dev/test server. 
You can pass requests thru to the dev/test server for collections that are supported.

* Write unit test apps that read and write data.
Avoid the hassle of intercepting multiple http calls and manufacturing sequences of responses.
The in-memory data store resets for each test so there is no cross-test data pollution.

* End-to-end tests. If you can toggle the app into test mode
using the in-mem web api, you won't disturb the real database.
This can be especially useful for CI (continuous integration) builds.


>**LIMITATIONS**
>
>The _in-memory-web-api_ exists primarily to support the 
[Angular documentation](https://angular.io/docs/ts/latest/ "Angular documentation web site").
It is not supposed to emulate every possible real world web API and is not intended for production use.
>
>Most importantly, it is ***always experimental***. 
We will make breaking changes and we won't feel bad about it 
because this is a development tool, not a production product. 
We do try to tell you about such changes in the `CHANGELOG.md`
and we fix bugs as fast as we can.

## HTTP request handling
This in-memory web api service processes an HTTP request and 
returns an `Observable` of HTTP `Response` object
in the manner of a RESTy web api.
It natively handles URI patterns in the form `:base/:collectionName/:id?`

Examples:
```
  // for requests to an `api` base URL that gets heroes from a 'heroes' collection 
  GET api/heroes          // all heroes
  GET api/heroes/42       // the hero with id=42
  GET api/heroes?name=^j  // 'j' is a regex; returns heroes whose name starting with 'j' or 'J'
  GET api/heroes.json/42  // ignores the ".json"
```
<a id="commands"></a>
## Commands

The service also accepts "commands" that can, for example, reconfigure the service and reset the database.

When the last segment of the _api base path_ is "commands", the `collectionName` is treated as the _command_.
Example URLs:
```
  commands/resetdb   // Reset the "database" to its original state
  commands/config    // Get or update this service's config object
```

Commands are "hot", meaning they are always executed immediately
whether or not someone subscribes to the returned observable.

Usage:
```
  http.post('commands/resetdb', undefined);
  http.get('commands/config');
  http.post('commands/config', '{"delay":1000}');
```

## Basic usage
Create an `InMemoryDataService` class that implements `InMemoryDbService`.

At minimum it must implement `createDb` which 
creates a "database" hash whose keys are collection names
and whose values are arrays of collection objects to return or update.
For example:
```ts
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemHeroService implements InMemoryDbService {
  createDb() {
    let heroes = [
      { id: 1, name: 'Windstorm' },
      { id: 2, name: 'Bombasto' },
      { id: 3, name: 'Magneta' },
      { id: 4, name: 'Tornado' }
    ];
    return {heroes};
  }
}
```

>This library _currently_ assumes that every collection has a primary key called `id`.

Register this module and your data store service implementation in `AppModule.imports`
calling the `forRoot` static method with this service class and optional configuration object:
```ts
import { HttpClientModule }     from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemHeroService }     from '../app/hero.service';
@NgModule({
 imports: [
   HttpClientModule,
   InMemoryWebApiModule.forRoot(InMemHeroService),
   ...
 ],
 ...
})
export class AppModule { ... }
```

**_Notes_**

* Always import the `InMemoryWebApiModule` _after_ the `HttpClientModule` to ensure that 
the in-memory backed provider supersedes the Angular version.

* You can setup the in-memory web api within a lazy loaded feature module by calling the `.forFeature` method as you would `.forRoot`.

* You can still use the in-memory web api with the older `Http` module.

  ```ts
  import { HttpModule }           from '@angular/http';
  import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

  import { InMemHeroService }     from '../app/hero.service';
  @NgModule({
  imports: [
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemHeroService),
    ...
  ],
  ...
  })
  export class AppModule { ... }
  ```

### Examples
The tests (`src/app/*.spec.ts` files) in the [github repo](https://github.com/angular/in-memory-web-api/tree/master/src/app) are a good place to learn how to setup and use this in-memory web api library.

See also the example source code in the official Angular.io documentation such as the
[HttpClient](https://angular.io/guide/http) guide and the
[Tour of Heroes](https://angular.io/tutorial/toh-pt6). 

# Bonus Features
Some features are not readily apparent in the basic usage example.

The `InMemoryBackendConfigArgs` defines a set of options. Add them as the second `forRoot` argument:
```ts
  InMemoryWebApiModule.forRoot(InMemHeroService, { delay: 500 }),
```

**Read the `InMemoryBackendConfigArgs` interface to learn about these options**.


## Request evaluation order
This service can evaluate requests in multiple ways depending upon the configuration.
Here's how it reasons:
1. If it looks like a [command](#commands), process as a command
2. If the [HTTP method is overridden](#method-override) 
3. If the resource name (after the api base path) matches one of the configured collections, process that
4. If not but the `Config.passThruUnknownUrl` flag is `true`, try to [pass the request along to a real _XHR_](#passthru).
5. Return a 404.

See the `handleRequest` method implementation for details.

## Default delayed response

By default this service adds a 500ms delay (see `InMemoryBackendConfig.delay`) 
to all requests to simulate round-trip latency.
You can eliminate that or extend it by setting a different value:
```ts
  InMemoryWebApiModule.forRoot(InMemHeroService, { delay: 0 }),    // no delay
  InMemoryWebApiModule.forRoot(InMemHeroService, { delay: 1500 }), // 1.5 second delay
```

## Simple query strings
Pass custom filters as a regex pattern via query string. 
The query string defines which property and value to match.

Format: `/app/heroes/?propertyName=regexPattern`

The following example matches all names start with the letter 'j'  or 'J' in the heroes collection.

`/app/heroes/?name=^j`

>Search pattern matches are case insensitive by default. 
Set `config.caseSensitiveSearch = true` if needed.

<a id="passthru"></a>
## Pass thru to a live server

If an existing, running remote server should handle requests for collections 
that are not in the in-memory database, set `Config.passThruUnknownUrl: true`.
Then this service will forward unrecognized requests to the remote server
via the Angular default `XHR` backend (it depends on whether your using `Http` or `HttpClient`).

## _parseRequestUrl_ and your override

The `parseRequestUrl` parses the request URL into a `ParsedRequestUrl` object.
`ParsedRequestUrl` is a public interface whose properties guide the in-memory web api
as it processes the request.

### Default _parseRequestUrl_

Default parsing depends upon certain values of `config`: `apiBase`, `host`, and `urlRoot`.
Read the source code for the complete story.

Configuring the `apiBase` yields the most interesting changes to `parseRequestUrl` behavior:

* For `apiBase=undefined` and `url='http://localhost/api/customers/42'`
    ```
    {apiBase: 'api/', collectionName: 'customers', id: '42', ...}
    ```

*  For `apiBase='some/api/root/'` and `url='http://localhost/some/api/root/customers'`
    ```
    { apiBase: 'some/api/root/', collectionName: 'customers', id: undefined, ... }
    ```

*  For `apiBase='/'` and `url='http://localhost/customers'`
    ```
    { apiBase: '/', collectionName: 'customers', id: undefined, ... }
    ```

**The actual api base segment values are ignored**. Only the number of segments matters.
The following api base strings are considered identical: 'a/b' ~ 'some/api/' ~ `two/segments'

This means that URLs that work with the in-memory web api may be rejected by the real server.

### Custom _parseRequestUrl_

You can override the default parser by implementing a `parseRequestUrl` method in your `InMemoryDbService`.

The service calls your method with two arguments.
1. `url` - the request URL string
1. `requestInfoUtils` - utility methods in a `RequestInfoUtilities` object, including the default parser.
Note that some values have not yet been set as they depend on the outcome of parsing.

Your method must either return a `ParsedRequestUrl` object or null|undefined,
in which case the service uses the default parser.
In this way you can intercept and parse some URLs and leave the others to the default parser.

### Custom _genId_

Collection items are presumed to have a primary key property called `id`.
When you can specify the id when you add a new item; 
the service does not check for uniqueness.

If you do not specify the `id`, the service generates one via the `genId` method.
You can override the default generator with a `genId` method in your `InMemoryDbService`.
Your method receives the new item's collection and should return the generated id.
If your generator returns null|undefined, the service uses the default generator. 

## _responseInterceptor_

You can morph the response returned by the services default HTTP methods.
A typical reason to intercept is to add a header that your application is expecting.

To intercept responses, add a `responseInterceptor` method to your `InMemoryDbService` class. 
The service calls your interceptor like this:
```ts
responseOptions = this.responseInterceptor(responseOptions, requestInfo);
```

<a id="method-override"></a>
## HTTP method interceptors

If you make requests this service can't handle but still want an in-memory database to hold values,
override the way this service handles any HTTP method by implementing a method in
your `InMemoryDbService` that does the job.

The `InMemoryDbService` method name must be the same as the HTTP method name but **all lowercase**.
This service calls it with an `HttpMethodInterceptorArgs` object.
For example, your HTTP GET interceptor would be called like this:
e.g., `yourInMemDbService["get"](interceptorArgs)`.

Your method must return either:

* `Observable<Response>` - your code has handled the request and the response is available from this
observable.  It _should be "cold"_.

* `null`/`undefined` - your code decided not to intervene, 
perhaps because you wish to intercept only certain paths for the given HTTP method.
The service continues with its default processing of the HTTP request.

The `HttpMethodInterceptorArgs` (as of this writing) are:
```ts
requestInfo: RequestInfo;           // parsed request
db: Object;                         // the current in-mem database collections
config: InMemoryBackendConfigArgs;  // the current config
passThruBackend: ConnectionBackend; // pass through backend, if it exists

/**
  * Create a cold response Observable from a factory for ResponseOptions
  * the same way that the in-mem backend service does.
  * @param resOptionsFactory - creates ResponseOptions when observable is subscribed
  * @param withDelay - if true (default), add simulated latency delay from configuration
  */
createResponse$: (resOptionsFactory: () => ResponseOptions) => Observable<any>;
```
## In-memory Web Api Examples

The file `src/app/hero-in-mem-data.service.ts` is an example of a Hero-oriented `InMemoryDbService`,
such as you might see in an HTTP sample in the Angular documentation.

To try it, add the following line to `AppModule.imports`
```ts
InMemoryWebApiModule.forRoot(HeroInMemDataService)
```
  
For examples of overriding service methods,
see the `src/app/hero-in-mem-data-override.service.ts` class.

Add the following line to `AppModule.imports` to see this version of the data service in action:
```ts
InMemoryWebApiModule.forRoot(HeroInMemDataOverrideService)
```

The tests (see below) exercise these examples.

# Build Instructions

Mostly gulp driven.

The following describes steps for updating from one Angular version to the next

>This is essential even when there are no changes of real consequence.
Neglecting to synchronize Angular 2 versions
triggers typescript definition duplication error messages when
compiling your application project.

- `gulp bump` - up the package version number

- update `CHANGELOG.MD` to record the change

- update the dependent version(s) in `package.json`

- `npm install` the new package(s) (make sure they really do install!)<br>
   `npm list --depth=0`

- consider updating typings, install individually/several:
```
  npm install @types/jasmine @types/node --save-dev
```

- `gulp clean` - clear out all generated `text`

- `npm run build` to confirm the project compiles w/o error (sanity check)

- `npm test`  to build and run tests (see ["Testing"](#testing) below)

- `gulp build`
- commit and push

- `npm publish`

- Fix and validate angular.io docs samples

- Add two tags to the release commit with for unpkg
  - the version number
  - 'latest'

[travis-badge]: https://travis-ci.org/angular/in-memory-web-api.svg?branch=master
[travis-badge-url]: https://travis-ci.org/angular/in-memory-web-api

## Testing

The "app" for this repo is not a real app.
It's an Angular data service (`HeroService`) and a bunch of tests.

>Note that the `tsconfig.json` produces a `commonjs` module.
That's what _Angular specs require_.
But when building for an app, it should be a `es2015` module,
as is the `tsconfig-ngc.json` for AOT-ready version of this library.

These tests are a work-in-progress, as tests often are.

The `src/` folder is divided into 
- `app/` - the test "app" and its tests
- `in-mem/` - the source code for the in-memory web api library

>A real app would reference the in-memory web api node module;
these tests reference the library source files.

The `karma-test-shim.js` add `in-mem` to the list of app folders that SystemJS should resolve.


