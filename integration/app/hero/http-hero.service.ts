import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Hero } from './hero';
import { HeroService } from './hero.service';

const cudOptions = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class HttpHeroService extends HeroService {
  constructor(private http: Http) {
    super();
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get(this.heroesUrl).pipe(
      // tap(data => console.log(data)), // eyeball results in the console
      map(res => res.json()),
      catchError(this.handleError)
    );
  }

  // This get-by-id will 404 when id not found
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url).pipe(
      map((r: Response) => r.json() as Hero),
      catchError(this.handleError)
    );
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

    return this.http.post(this.heroesUrl, hero, cudOptions).pipe(
      map(res => res.json()),
      catchError(this.handleError)
    );
  }

  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete(url, cudOptions).pipe(
      map(_ => (_ as any) as Hero), // TODO: this is wrong, but I don't know what the right thing is
      catchError(this.handleError)
    );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    term = term.trim();
    // NB: not a safe encoded search parameter
    const search = term ? '/?name=' + term : '';
    return this.http.get(this.heroesUrl + search).pipe(
      map(res => res.json()),
      catchError(this.handleError)
    );
  }

  updateHero(hero: Hero): Observable<null | Hero> {
    return this.http.put(this.heroesUrl, hero, cudOptions).pipe(map(res => res.json()), catchError(this.handleError));
  }

  private handleError(error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    // and reformat for user consumption
    console.error(error); // log to console instead
    return throwError(error);
  }
}
