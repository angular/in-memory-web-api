import { Hero }       from './hero';
import { Observable } from 'rxjs/Observable';

export abstract class HeroService {
  heroesUrl = 'app/heroes';  // URL to web api

  abstract getHeroes (): Observable<Hero[]>;
  abstract getHero(id: number): Observable<Hero>;
  abstract addHero (name: string): Observable<Hero>;
  abstract deleteHero (hero: Hero | number): Observable<Hero>;
  abstract updateHero (hero: Hero): Observable<Hero>;
}
