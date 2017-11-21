import { Injectable }from '@angular/core';
import { HttpClient, HttpHeaders }from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Hero }        from './hero';
import { HeroService } from './hero.service';

const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class HttpClientHeroService extends HeroService {

  constructor (private http: HttpClient) {
    super();
  }

  getHeroes (): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
   // .do(data => console.log(data)) // eyeball results in the console
      .catch(this.handleError);
  }

  // This get-by-id will 404 when id not found
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url)
      .catch(this.handleError);
  }

  // This get-by-id does not 404; returns undefined when id not found
  // getHero<Data>(id: number): Observable<Hero> {
  //   const url = `${this._heroesUrl}/?id=${id}`;
  //   return this.http.get<Hero[]>(url)
  //     .map(heroes => heroes[0] as Hero)
  //     .catch(this.handleError);
  // }

  addHero (name: string): Observable<Hero> {
    const hero = { name };

    return this.http.post<Hero>(this.heroesUrl, hero, cudOptions)
      .catch(this.handleError);
  }

  deleteHero (hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, cudOptions)
      .catch(this.handleError);
  }

  updateHero (hero: Hero): Observable<null> {
    return this.http.put(this.heroesUrl, hero, cudOptions)
      .catch(this.handleError);
  }

  private handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    // and reformat for user consumption
    console.error(error); // log to console instead
    return Observable.throw(error);
  }
}
