/**
 * This is an example of a Hero-oriented InMemoryDbService.
 *
 * Add the following line to `AppModule.imports`
 *   InMemoryWebApiModule.forRoot(HeroInMemDataService) // or HeroInMemDataOverrideService
 */
import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from '../in-mem/interfaces';

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

    // demonstrate POST commands/resetDb
    // this example clears the collections if the request body tells it to do so
    if (reqInfo) {
      const body = reqInfo.utils.getJsonBody(reqInfo.req) || {};
      if (body.clear === true) {
        heroes.length = 0;
        nobodies.length = 0;
      }
    }

    return {heroes, nobodies};
  }
}
