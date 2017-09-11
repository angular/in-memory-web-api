/**
 * This is an example of a Hero-oriented InMemoryDbService.
 *
 * For demonstration purposes, it can return the database
 * synchronously as an object (default),
 * as an observable, or as a promise.
 *
 * Add the following line to `AppModule.imports`
 *   InMemoryWebApiModule.forRoot(HeroInMemDataService) // or HeroInMemDataOverrideService
 */
import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from '../in-mem/interfaces';

// tslint:disable:no-unused-variable
import { Observable }  from 'rxjs/Observable';
import { of }          from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
// tslint:enable:no-unused-variable

@Injectable()
export class HeroInMemDataService implements InMemoryDbService {
  createDb(reqInfo?: RequestInfo) {

    const heroes = [
      { id: 1, name: 'Windstorm' },
      { id: 2, name: 'Bombasto' },
      { id: 3, name: 'Magneta' },
      { id: 4, name: 'Tornado' }
    ];

    const nobodies: any[] = [ ];

    let returnType  = 'object';

    // demonstrate POST commands/resetDb
    // this example clears the collections if the request body tells it to do so
    if (reqInfo) {
      const body = reqInfo.utils.getJsonBody(reqInfo.req) || {};
      if (body.clear === true) {
        heroes.length = 0;
        nobodies.length = 0;
      }

      // 'returnType` can be 'object' | 'observable' | 'promise'
      returnType = body.returnType || 'object';
    }
    const db = {heroes, nobodies};

    switch (returnType) {
      case ('observable'):
        return of(db).delay(10);
      case ('promise'):
        return new Promise(resolve => {
          setTimeout(() => resolve(db), 10);
        });
      default:
        return db;
    }
  }
}
