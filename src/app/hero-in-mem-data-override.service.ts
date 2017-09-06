/**
 * This is an example of a Hero-oriented InMemoryDbService with method overrides.
 */
import { Injectable } from '@angular/core';

import { URLSearchParams } from '@angular/http';

// tslint:disable-next-line:no-unused-variable
import { Observable } from 'rxjs/Observable';

import { ParsedRequestUrl, RequestInfo, RequestInfoUtilities, ResponseOptions } from '../in-mem/interfaces';

import { getStatusText, STATUS } from '../in-mem/http-status-codes';

import { HeroInMemDataService } from './hero-in-mem-data.service';

const villains = [
  {id: 100, name: 'Snidley Wipsnatch'},
  {id: 101, name: 'Boris Badenov'},
  {id: 103, name: 'Natasha Fatale'}
];

@Injectable()
export class HeroInMemDataOverrideService extends HeroInMemDataService {

  // Overrides id generator and delivers next available `id`, starting with 1001.
  genId<T extends { id: any }>(collection: T[]): any {
    console.log('genId override');
    if (collection) {
      return 1 + collection.reduce((prev, curr) => Math.max(prev, curr.id || 0), 1000);
    }
  }

  // HTTP GET interceptor
  get(reqInfo: RequestInfo) {
    const collectionName = reqInfo.collectionName;
    if (collectionName === 'villains') {
      return this.getVillains(reqInfo);
    }
    return undefined; // let the default GET handle all others
  }

  // HTTP GET interceptor handles requests for villains
  private getVillains(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      console.log('HTTP GET override');

      const collection = villains.slice();
      const id = reqInfo.id;

      // tslint:disable-next-line:triple-equals
      const data = id == undefined ? collection : reqInfo.utils.findById(collection, id);

      const options: ResponseOptions = data ?
        {
          body: { data },
          status: STATUS.OK
        } :
        {
          body: { error: `'Villains' with id='${id}' not found` },
          status: STATUS.NOT_FOUND
        };
      return this.finishOptions(options, reqInfo);
    });
  }

  // parseRequestUrl override that logs the result
  // a more interesting example would give special treatment to some URLs
  // while leaving the others for the default parser.
  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    const parsed = utils.parseRequestUrl(url);
    console.log('parseRequestUrl override:', parsed);
    return parsed;
  }

  // intercept ResponseOptions from default HTTP method handlers
  // add a response header and report interception to console.log
  responseInterceptor(resOptions: ResponseOptions, reqInfo: RequestInfo) {

    resOptions.headers.set('x-test', 'test-header');
    const method = reqInfo.method.toUpperCase();
    const body = JSON.stringify(resOptions);
    console.log(`responseInterceptor: ${method} ${reqInfo.req.url}: \n${body}`);

    return resOptions;
  }

  /////////// helpers ///////////////

  private finishOptions(options: ResponseOptions, {headers, url}: RequestInfo) {
    options.statusText = getStatusText(options.status);
    options.headers = headers;
    options.url = url;
    return options;
  }
}
