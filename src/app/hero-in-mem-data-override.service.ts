/**
 * This is an example of a Hero-oriented InMemoryDbService with method overrides.
 */
import { Injectable } from '@angular/core';

import { Headers, Response,
  ResponseOptions, ResponseOptionsArgs, URLSearchParams
} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Observer }   from 'rxjs/Observer';

import { HttpMethodInterceptorArgs, ParsedUrl, RequestInfo } from '../in-mem/interfaces';

import { getStatusText, isSuccess, STATUS } from '../in-mem/http-status-codes';

import { HeroInMemDataService } from './hero-in-mem-data.service';

const villains = [
  {id: 100, name: 'Snidley Wipsnatch'},
  {id: 101, name: 'Boris Badenov'},
  {id: 103, name: 'Natasha Fatale'}
];

@Injectable()
export class HeroInMemDataOverrideService extends HeroInMemDataService {

  // parseUrl override
  parseUrl(url: string): ParsedUrl {
    try {
      const loc = this.getLocation(url);
      let drop = 0;
      let urlRoot = '';
      if (loc.host !== undefined) {
        // url for a server on a different host!
        // assume its collection is actually here too.
        drop = 1; // the leading slash
        urlRoot = loc.protocol + '//' + loc.host + '/';
      }
      const path = loc.pathname.substring(drop);
      let [base, collectionName, id] = path.split('/');
      const resourceUrl = urlRoot + base + '/' + collectionName + '/';
      [collectionName] = collectionName.split('.'); // ignore anything after the '.', e.g., '.json'
      const search = loc.search && loc.search.substr(1);
      const query = search ? new URLSearchParams(search).paramsMap : new Map<string, string[]>();

      const result = { base, collectionName, id, query, resourceUrl };
      console.log('override parseUrl:');
      console.log(result);
      return result;

    } catch (err) {
      const msg = `unable to parse url '${url}'; original error: ${err.message}`;
      throw new Error(msg);
    }
  }

  // intercept ResponseOptions from default HTTP method handlers to log them
  responseInterceptor(response: ResponseOptions, reqInfo: RequestInfo) {

    const method = reqInfo.method.toUpperCase();
    const body = JSON.stringify(response.body || {});
    console.log(`responseInterceptor: ${method} ${reqInfo.req.url}: \n${body}`);

    return response;
  }

  // HTTP GET interceptor handles requests for villains
  protected get(interceptorArgs: HttpMethodInterceptorArgs) {

    const collectionName = interceptorArgs.requestInfo.collectionName;

    if (collectionName !== 'villains') {
      return undefined; // let the default GET handle it.
    }

    const {id, headers, url} = interceptorArgs.requestInfo;

    return this.createResponse$(() => {
      console.log('HTTP GET override');

      const collection = villains.slice();

      // tslint:disable-next-line:triple-equals
      const data = id == undefined ? collection : this.findById(collection, id);

      const options: ResponseOptionsArgs = data ?
        {
          body: { data },
          status: STATUS.OK
        } :
        {
          body: { error: `'${collectionName}' with id='${id}' not found` },
          status: STATUS.NOT_FOUND
        };

      return this.createResponse(options, headers as Headers, url);
    });
  }

  /////////// private ///////////////

  private createResponse(options: ResponseOptionsArgs, headers: Headers, url: string) {
    options.statusText = getStatusText(options.status);
    options.headers = headers as Headers;
    options.url = url;
    return new Response(new ResponseOptions(options));
  }

  // Return a "cold" observable that won't be executed until something subscribes.
  private createResponse$(responseFactory: () => Response) {
    return new Observable<Response>((observer: Observer<Response>) => {
      const response = responseFactory();
      if (isSuccess(response.status)) {
        observer.next(response);
        observer.complete();
      } else {
        observer.error(response);
      }
      return () => { }; // unsubscribe function
    });
  };

  private findById<T extends { id: number }>(collection: T[], id: number): T {
    return collection.find((item: T) => item.id === id);
  }

  private getLocation(href: string) {
    const l = document.createElement('a');
    l.href = href;
    return l;
  };
}
