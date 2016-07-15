# Angular 2 in-memory-web-api

>**UPDATE NOTICE**
>
>This is the last of the npm packages under the name `angular2-in-memory-web-api`. 
The new package name is (or soon will be) `angular-in-memory-web-api`. 
All versions after 0.0.21 are (or soon will be) shipped under this new name.
**Be sure to update your `package.json` and import statements accordingly**.

An in-memory web api for Angular demos and tests.

It will intercept HTTP requests that would otherwise go to the remote server
via the Angular `XHRBackend` service

This in-memory web api service processes an HTTP request and 
returns an `Observable` of HTTP `Response` object
in the manner of a RESTy web api.
It natively handles URI patterns in the form :base/:collectionName/:id?

Examples:
```
  // for store with a 'heroes' collection
  GET api/heroes          // all heroes
  GET api/heroes/42       // the character with id=42
  GET api/heroes?name=^j  // 'j' is a regex; returns heroes whose name contains 'j' or 'J'
  GET api/heroes.json/42  // ignores the ".json"
```
Also accepts
  "commands":
  ```
    POST "resetDb",
    GET/POST "config"" - get or (re)set the config
  ```

## Basic usage
Create an `InMemoryDataService` class that implements `InMemoryDataService`.

At minimum it must implement `createDb` which 
creates a "database" hash whose keys are collection names
and whose values are arrays of collection objects to return or update.
For example:
```
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemHeroService implements InMemoryDbService {
  createDb() {
    let heroes = [
      { id: '1', name: 'Windstorm' },
      { id: '2', name: 'Bombasto' },
      { id: '3', name: 'Magneta' },
      { id: '4', name: 'Tornado' }
    ];
    return {heroes};
  }
}
```

Register this module and your service implementation in `AppModule.imports`
calling the `forRoot` static method with this service class and optional configuration object:
```
// other imports
import { HttpModule }           from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemHeroService }     from '../app/hero-data';
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

See examples in the Angular.io such as the
[Server Communication](https://angular.io/docs/ts/latest/guide/server-communication.html) and
[Tour of Heroes](https://angular.io/docs/ts/latest/tutorial/toh-pt6.html) chapters.

# Bonus Features
Some features are not readily apparent in the basic usage example.

The `InMemoryBackendConfigArgs` defines a set of options. Add them as the second `forRoot` argument:
```
   InMemoryWebApiModule.forRoot(InMemHeroService, { delay: 500 }),
```

## Simple query strings
Pass custom filters as a regex pattern via query string. 
The query string defines which property and value to match.

Format: `/app/heroes/?propertyName=regexPattern`

The following example matches all names containing the letter 'j' in the heroes collection.

`/app/heroes/?name=j+`

# To Do
* add tests (shameful omission!)

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
  `npm run typings -- install packagename --ambient --save`

   **NB: Do not add to `npm postinstall` as that screws up consumers!**

- `npm run typings install`

- `npm run tsc` to confirm the project compiles w/o error (sanity check)

 -- NO TESTS YET ... BAD --

- `gulp build`
- commit and push

- `npm publish`

- Fix and validate angular.io docs samples

- Add two tags to the release commit with for unpkg
  - the version number
  - 'latest'
