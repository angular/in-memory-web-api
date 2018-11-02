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
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
// tslint:enable:no-unused-variable

@Injectable()
export class HeroInMemDataOverrideIdService implements InMemoryDbService {
  defineId(collectionName: string) {
    return 'uuid';
  }
  createDb(reqInfo?: RequestInfo) {

    const heroes = [
      { uuid: '00000000-0000-0000-0000-000000000001', name: 'Windstorm' },
      { uuid: '00000000-0000-0000-0000-000000000002', name: 'Bombasto' },
      { uuid: '00000000-0000-0000-0000-000000000003', name: 'Magneta' },
      { uuid: '00000000-0000-0000-0000-000000000004', name: 'Tornado' }
    ];

    const nobodies: any[] = [];

    // entities with string ids that look like numbers
    const stringers = [
      { uuid: '00000000-0000-0000-0000-000000000010', name: 'Bob String' },
      { uuid: '00000000-0000-0000-0000-000000000020', name: 'Jill String' }
    ];

    // default returnType
    let returnType = 'object';
    // let returnType  = 'observable';
    // let returnType  = 'promise';

    // demonstrate POST commands/resetDb
    // this example clears the collections if the request body tells it to do so
    if (reqInfo) {
      const body = reqInfo.utils.getJsonBody(reqInfo.req) || {};
      if (body.clear === true) {
        heroes.length = 0;
        nobodies.length = 0;
        stringers.length = 0;
      }

      // 'returnType` can be 'object' | 'observable' | 'promise'
      returnType = body.returnType || 'object';
    }
    const db = { heroes, nobodies, stringers };

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
