import { Hero }       from './hero';
import { Observable } from 'rxjs';

export abstract class HeroService {
  heroesUrl = 'api/heroes';  // URL to web api

  abstract getHeroes (): Observable<Hero[]>;
  abstract getHero(id: number): Observable<Hero>;
  abstract addHero (name: string): Observable<Hero>;
  abstract deleteHero (hero: Hero | number): Observable<Hero>;
  abstract searchHeroes(term: string): Observable<Hero[]>;
  abstract updateHero (hero: Hero): Observable<Hero>;
}
