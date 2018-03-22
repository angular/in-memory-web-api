import { InMemoryDbService } from '@xmlking/angular-in-memory-web-api';

export class InMemHeroService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Windstorm' },
      { id: 2, name: 'Bombasto' },
      { id: 3, name: 'Magneta' },
      { id: 4, name: 'Tornado' }
    ];
    return { heroes };
  }
}
