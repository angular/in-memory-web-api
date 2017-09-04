import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Hero }           from './hero';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { HeroService } from './hero.service';

@Injectable()
export class HttpHeroService extends HeroService {

  constructor (private http: Http) {
    super();
  }

  getHeroes (): Observable<Hero[]> {
    return this.http.get(this.heroesUrl)
                    .map(this.extractData)
                    // .do(data => console.log(data)) // eyeball results in the console
                    .catch(this.handleError);
  }

  // This get-by-id will 404 when id not found
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http
            .get(url)
            .map((r: Response) => r.json().data as Hero);
  }

  // This get-by-id does not 404; returns undefined when id not found
  // getHero(id: number) {
  //   const url = `${this._heroesUrl}/?id=${id}`;

  //   return this.http
  //           .get(url)
  //           .map((r: Response) => r.json().data[0] as Hero);
  // }

  addHero (name: string): Observable<Hero> {
    const hero = { name };
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.heroesUrl, hero, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  deleteHero (hero: Hero | number): Observable<Hero> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete(url, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  updateHero (hero: Hero): Observable<Hero> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.put(this.heroesUrl, hero, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();
    return (body && body.data) || { };
  }

  private handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    const errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
