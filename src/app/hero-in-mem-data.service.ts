/**
 * This is an example of a Hero-oriented InMemoryDbService.
 *
 * Add the following line to `AppModule.imports`
 *   InMemoryWebApiModule.forRoot(HeroInMemDataService) // or HeroInMemDataOverrideService
 */
import { Injectable } from '@angular/core';
import { Request } from '@angular/http';
import { InMemoryDbService } from '../in-mem/interfaces';

@Injectable()
export class HeroInMemDataService implements InMemoryDbService {
  createDb(req?: Request) {
    const heroes = [
      { id: 1, name: 'Windstorm' },
      { id: 2, name: 'Bombasto' },
      { id: 3, name: 'Magneta' },
      { id: 4, name: 'Tornado' }
    ];

    // demonstrate POST commands/resetDb with options
    if (req instanceof Request) {
      const body = JSON.parse(req.getBody() || '{}');
      if (body.clear === true) { heroes.length = 0; }
    }

    return {heroes};
  }
}
