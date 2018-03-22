import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Hero } from './hero';
import { HeroService } from './hero.service';

const cudOptions = {
  headers: new Headers({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HttpHeroService extends HeroService {
  constructor(private http: Http) {
    super();
  }

  getHeroes(): Observable<Hero[]> {
    return (
      this.http
        .get(this.heroesUrl)
        // .do(data => console.log(data)) // eyeball results in the console
        .map(res => res.json())
        .catch(this.handleError)
    );
  }

  // This get-by-id will 404 when id not found
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http
      .get(url)
      .map((r: Response) => r.json() as Hero)
      .catch(this.handleError);
  }

  // This get-by-id does not 404; returns empty array when id not found
  // getHero(id: number) {
  //   const url = `${this._heroesUrl}/?id=${id}`;
  //   return this.http
  //     .get(url)
  //     .map((r: Response) => r.json()[0] as Hero);
  //     .catch(this.handleError);
  // }

  addHero(name: string): Observable<Hero> {
    const hero = { name };

    return this.http
      .post(this.heroesUrl, hero, cudOptions)
      .map(res => res.json())
      .catch(this.handleError);
  }

  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete(url, cudOptions).catch(this.handleError);
  }

  searchHeroes(term: string): Observable<Hero[]> {
    term = term.trim();
    // NB: not a safe encoded search parameter
    const search = term ? '/?name=' + term : '';
    return this.http
      .get(this.heroesUrl + search)
      .map(res => res.json())
      .catch(this.handleError);
  }

  updateHero(hero: Hero): Observable<Hero> {
    return this.http
      .put(this.heroesUrl, hero, cudOptions)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    // and reformat for user consumption
    console.error(error); // log to console instead
    return Observable.throw(error);
  }
}
