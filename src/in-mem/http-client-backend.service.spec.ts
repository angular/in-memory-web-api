import { Injectable } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import {
  HttpBackend,
  HttpEvent, HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { zip } from 'rxjs/observable/zip';

import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/zip';

import { failure } from '../testing';

import { HttpClientBackendService } from './http-client-backend.service';
import { HttpClientInMemoryWebApiModule } from './http-client-in-memory-web-api.module';

import { Hero } from '../app/hero';
import { HeroService } from '../app/hero.service';
import { HttpClientHeroService } from '../app/http-client-hero.service';

import { HeroInMemDataService } from '../app/hero-in-mem-data.service';
import { HeroInMemDataOverrideService } from '../app/hero-in-mem-data-override.service';
import { HereServiceCoreSpec } from '../app/hero.service.spec';

/**
 * Test interceptor adds a request header and a response header
 */
@Injectable()
export class TestHeaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const reqClone = req.clone({setHeaders: {'x-test-req': 'req-test-header'}});

    return next.handle(reqClone)
      .map(event => {
        if (event instanceof HttpResponse) {
          event = event.clone({
            headers: event.headers.set('x-test-res', 'res-test-header')
          });
        }
        return event;
      });
  }
}

type Data = { data: any }

describe('HttpClient Backend Service', () => {

  const delay = 1; // some minimal simulated latency delay

  describe('raw Angular HttpClient', () => {

    let http: HttpClient;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientModule,
          HttpClientInMemoryWebApiModule.forRoot(HeroInMemDataService, { delay })
        ]
      });

      http = TestBed.get(HttpClient);
    });

    it('can get heroes', async(() => {
      http.get<Data>('api/heroes')
      .map(data => data.data as Hero[])
      .subscribe(
        heroes => {
          // console.log(heroes);
          expect(heroes.length).toBeGreaterThan(0, 'should have heroes');
        },
        failure
      );
    }));

    it('GET should be a "cold" observable', async(() => {
      const httpBackend = TestBed.get(HttpBackend);

      const spy = spyOn(httpBackend, 'collectionHandler').and.callThrough();

      const get$ = http.get<Data>('api/heroes');

      // spy on `collectionHandler` should not be called before subscribe
      expect(spy).not.toHaveBeenCalled();

      get$.map(data => data.data as Hero[])
      .subscribe(
        heroes => {
          expect(spy).toHaveBeenCalled();
          expect(heroes.length).toBeGreaterThan(0, 'should have heroes');
        },
        failure
      );
    }));

    it('Should only initialize the db once', async(() => {
      const httpBackend = TestBed.get(HttpBackend);

      const spy = spyOn(httpBackend, 'resetDb').and.callThrough();

      // Simultaneous backend.handler calls
      // Only the first should initialize by calling `resetDb`
      // All should wait until the db is "ready"
      // then they share the same db instance.
      http.get<Data>('api/heroes').subscribe();
      http.get<Data>('api/heroes').subscribe();
      http.get<Data>('api/heroes').subscribe();
      http.get<Data>('api/heroes').subscribe();

      expect(spy.calls.count()).toBe(1);
    }));

    it('can get heroes (w/ a different base path)', async(() => {
      http.get<Data>('some-base-path/heroes')
      .map(data => data.data as Hero[])
      .subscribe(
        heroes => {
          // console.log(heroes);
          expect(heroes.length).toBeGreaterThan(0, 'should have heroes');
        },
        failure
      );
    }));

    it('should 404 when GET unknown collection', async(() => {
      const url = 'api/unknown-collection';
      http.get<Data>(url)
      .subscribe(
        _ => {
          console.log(_);
          fail(`should not have found data for '${url}'`);
        },
        err => {
          expect(err.status).toBe(404, 'should have 404 status');
        }
      );
    }));

    it('should return the hero w/id=1 for GET app/heroes/1', async(() => {
      http.get<Data>('api/heroes/1')
      .map(data => data.data as Hero)
      .subscribe(
        hero => {
          expect(hero).toBeDefined('should find hero with id=1');
        },
        failure
      );
    }));

    // test where id is string that looks like a number
    it('should return the stringer w/id="10" for GET app/stringers/10', async(() => {
      http.get<Data>('api/stringers/10')
      .map(data => data.data as { id: string, name: string })
      .subscribe(
        hero => {
          expect(hero).toBeDefined('should find string with id="10"');
        },
        failure
      );
    }));

    it('should return 1-item array for GET app/heroes/?id=1', async(() => {
      http.get<Data>('api/heroes/?id=1')
      .map(data => data.data as Hero[])
      .subscribe(
        heroes => {
          expect(heroes.length).toBe(1, 'should find one hero w/id=1');
        },
        failure
      );
    }));

    it('should return 1-item array for GET app/heroes?id=1', async(() => {
      http.get<Data>('api/heroes?id=1')
      .map(data => data.data as Hero[])
      .subscribe(
        heroes => {
          expect(heroes.length).toBe(1, 'should find one hero w/id=1');
        },
        failure
      );
    }));

    it('should return undefined for GET app/heroes?id=not-found-id', async(() => {
      http.get<Data>('api/heroes?id=123456')
      .map(data => data.data[0] as Hero)
      .subscribe(
        hero => {
          expect(hero).toBeUndefined();
        },
        failure
      );
    }));

    it('should return 404 for GET app/heroes/not-found-id', async(() => {
      const url = 'api/heroes/123456';
      http.get<Data>(url)
      .subscribe(
        _ => {
          console.log(_);
          fail(`should not have found data for '${url}'`);
        },
        err => {
          expect(err.status).toBe(404, 'should have 404 status');
        }
      );
    }));

    it('can get nobodies (empty collection)', async(() => {
      http.get<Data>('api/nobodies')
      .map(data => data.data as any[])
      .subscribe(
        nobodies => {
          expect(nobodies.length).toBe(0, 'should have no nobodies');
        },
        failure
      );
    }));

    it('can add a nobody with an id to empty nobodies collection', async(() => {

      const id = 'g-u-i-d';

      http.post('api/nobodies', { id, name: 'Noman' })
        .concatMap(() => http.get<Data>('api/nobodies'))
        .map(data => data.data as any[])
        .subscribe(
          nobodies => {
            expect(nobodies.length).toBe(1, 'should a nobody');
            expect(nobodies[0].name).toBe('Noman', 'should be "Noman"');
            expect(nobodies[0].id).toBe(id, 'should preserve the submitted, ' + id);
          },
          failure
        );
    }));

    it('should fail when add a nobody without an id to empty nobodies collection', async(() => {
      http.post('api/nobodies', { name: 'Noman' })
        .subscribe(
        _ => {
          console.log(_);
          fail(`should not have been able to add 'Norman' to 'nobodies'`);
        },
        err => {
          expect(err.status).toBe(422, 'should have 422 status');
          expect(err.body.error).toContain('id type is non-numeric');
        });
    }));

    it('can reset the database to empty (object db)', async(() => resetDatabaseTest('object')));

    it('can reset the database to empty (observable db)', async(() => resetDatabaseTest('observable')));

    it('can reset the database to empty (promise db)', async(() => resetDatabaseTest('promise')));

    function resetDatabaseTest(returnType: string) {
      // Observable of the number of heroes and nobodies
      const sizes$ = zip(
        http.get<Data>('api/heroes'),
        http.get<Data>('api/nobodies'),
        http.get<Data>('api/stringers'),
        (h, n, s) => ({
          heroes:   h.data.length as number,
          nobodies: n.data.length as number,
          stringers: s.data.length as number
        }));

      // Add a nobody so that we have one
      http.post('api/nobodies', { id: 42, name: 'Noman' })
      // Reset database with "clear" option
      .concatMap(() => http.post('commands/resetDb',
        { clear: true, returnType }))
      // get the number of heroes and nobodies
      .concatMap(() => sizes$)
      .subscribe(
        sizes => {
          expect(sizes.heroes).toBe(0, 'reset should have cleared the heroes');
          expect(sizes.nobodies).toBe(0, 'reset should have cleared the nobodies');
          expect(sizes.stringers).toBe(0, 'reset should have cleared the stringers');
        },
        failure
      );
    }
  });

  ////////////////

  describe('raw Angular HttpClient w/ override service', () => {

    let http: HttpClient;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientModule,
          HttpClientInMemoryWebApiModule.forRoot(HeroInMemDataOverrideService, { delay })
        ]
      });

      http = TestBed.get(HttpClient);
    });

    it('can get heroes', async(() => {
      http.get<Data>('api/heroes')
      .map(data => data.data as Hero[])
      .subscribe(
        heroes => {
          // console.log(heroes);
          expect(heroes.length).toBeGreaterThan(0, 'should have heroes');
        },
        failure
      );
    }));

    it('can translate `foo/heroes` to `heroes` via `parsedRequestUrl` override', async(() => {
      http.get<Data>('api/foo/heroes')
      .map(data => data.data as Hero[])
      .subscribe(
        heroes => {
          // console.log(heroes);
          expect(heroes.length).toBeGreaterThan(0, 'should have heroes');
        },
        failure
      );
    }));

    it('can get villains', async(() => {
      http.get<Data>('api/villains')
      .map(data => data.data as Hero[])
      .subscribe(
        villains => {
          // console.log(villains);
          expect(villains.length).toBeGreaterThan(0, 'should have villains');
        },
        failure
      );
    }));

    it('should 404 when POST to villains', async(() => {
      const url = 'api/villains';
      http.post<Data>(url, {id: 42, name: 'Dr. Evil'})
      .subscribe(
        _ => {
          console.log(_);
          fail(`should not have POSTed data for '${url}'`);
        },
        err => {
          expect(err.status).toBe(404, 'should have 404 status');
        }
      );
    }));
    it('should 404 when GET unknown collection', async(() => {
      const url = 'api/unknown-collection';
      http.get<Data>(url)
      .subscribe(
        _ => {
          console.log(_);
          fail(`should not have found data for '${url}'`);
        },
        err => {
          expect(err.status).toBe(404, 'should have 404 status');
        }
      );
    }));

    it('should use genId override to add new hero, "Maxinius"', async(() => {
      http.post('api/heroes', { name: 'Maxinius' })
      .concatMap(() => http.get<Data>('api/heroes?name=Maxi'))
      .map(data => data.data as Hero[])
      .subscribe(
        heroes => {
          expect(heroes.length).toBe(1, 'should have found "Maxinius"');
          expect(heroes[0].name).toBe('Maxinius');
          expect(heroes[0].id).toBeGreaterThan(1000);
        },
        failure
      );
    }));

    it('should use genId override guid generator for a new nobody without an id', async(() => {
      http.post('api/nobodies', { name: 'Noman' })
        .concatMap(() => http.get<Data>('api/nobodies'))
        .map(data => data.data as any[])
        .subscribe(
          nobodies => {
            expect(nobodies.length).toBe(1, 'should a nobody');
            expect(nobodies[0].name).toBe('Noman', 'should be "Noman"');
            expect(typeof nobodies[0].id).toBe('string', 'should create a string (guid) id');
          },
          failure
        );
    }));

    it('can reset the database to empty (object db)', async(() => resetDatabaseTest('object')));

    it('can reset the database to empty (observable db)', async(() => resetDatabaseTest('observable')));

    it('can reset the database to empty (promise db)', async(() => resetDatabaseTest('promise')));

    function resetDatabaseTest(returnType: string) {
      // Observable of the number of heroes, nobodies and villains
      const sizes$ = zip(
        http.get<Data>('api/heroes'),
        http.get<Data>('api/nobodies'),
        http.get<Data>('api/stringers'),
        http.get<Data>('api/villains'),
        (h, n, s, v) => ({
          heroes:   h.data.length as number,
          nobodies: n.data.length as number,
          stringers: s.data.length as number,
          villains: v.data.length as number
        }));

      // Add a nobody so that we have one
      http.post('api/nobodies', { id: 42, name: 'Noman' })
      // Reset database with "clear" option
      .concatMap(() => http.post('commands/resetDb',
        { clear: true, returnType }))
      // count all the collections
      .concatMap(() => sizes$)
      .subscribe(
        sizes => {
          expect(sizes.heroes).toBe(0, 'reset should have cleared the heroes');
          expect(sizes.nobodies).toBe(0, 'reset should have cleared the nobodies');
          expect(sizes.stringers).toBe(0, 'reset should have cleared the stringers');
          expect(sizes.villains).toBeGreaterThan(0, 'reset should have NOT clear villains');
        },
        failure
      );
    }
  });

  ////////////////

  describe('HttpClient HeroService', () => {

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientModule,
          HttpClientInMemoryWebApiModule.forRoot(HeroInMemDataService, { delay })
        ],
        providers: [
          { provide: HeroService, useClass: HttpClientHeroService }
        ]
      });

    });

    new HereServiceCoreSpec().run();
  });

  ///////////////

  describe('HttpClient interceptor', () => {

    let http: HttpClient;
    let interceptors: HttpInterceptor[];
    let httpBackend: HttpClientBackendService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientModule,
          HttpClientInMemoryWebApiModule.forRoot(HeroInMemDataService, { delay })
        ],
        providers: [
          // Add test interceptor just for this test suite
          { provide: HTTP_INTERCEPTORS, useClass: TestHeaderInterceptor, multi: true }
        ]
      });

      http = TestBed.get(HttpClient);
      httpBackend = TestBed.get(HttpBackend);
      interceptors = TestBed.get(HTTP_INTERCEPTORS);
    });

    // sanity test
    it('TestingModule should provide the test interceptor', () => {
      const ti = interceptors.find(i => i instanceof TestHeaderInterceptor);
      expect(ti).toBeDefined();
    });

    it('should have GET request header from test interceptor', async(() => {
      const handle = spyOn(httpBackend, 'handle').and.callThrough();

      http.get<Data>('api/heroes')
        .map(data => data.data as Hero[])
        .subscribe(
          heroes => {
            // HttpRequest is first arg of the first call to in-mem backend `handle`
            const req: HttpRequest<Data> = handle.calls.argsFor(0)[0];
            const reqHeader = req.headers.get('x-test-req');
            expect(reqHeader).toBe('req-test-header');

            expect(heroes.length).toBeGreaterThan(0, 'should have heroes');
          },
          failure
        );
    }));

    it('should have GET response header from test interceptor', async(() => {
      let gotResponse = false;
      const req = new HttpRequest<any>('GET', 'api/heroes');
      http.request<Data>(req)
        .subscribe(
          event => {
            if (event.type === HttpEventType.Response) {
              gotResponse = true;

              const resHeader = event.headers.get('x-test-res');
              expect(resHeader).toBe('res-test-header');

              const heroes = event.body.data as Hero[];
              expect(heroes.length).toBeGreaterThan(0, 'should have heroes');
            }
          },
          failure,
          () => expect(gotResponse).toBe(true, 'should have seen Response event')
        );
    }));
  });

  //////////////


  ////////////////
  describe('HttpClient passThru', () => {
    let http: HttpClient;
    let httpBackend: HttpClientBackendService;
    let createPassThruBackend: jasmine.Spy;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientModule,
          HttpClientInMemoryWebApiModule.forRoot(HeroInMemDataService, { delay, passThruUnknownUrl: true })
        ]
      });

      http = TestBed.get(HttpClient);
      httpBackend = TestBed.get(HttpBackend);
      createPassThruBackend = spyOn(<any>httpBackend, 'createPassThruBackend').and.callThrough();
    });

    beforeEach(function() {
      jasmine.Ajax.install();
    });

    afterEach(function() {
      jasmine.Ajax.uninstall();
    });

    it('can get heroes (no passthru)', async(() => {
      http.get<Data>('api/heroes')
        .map(data => data.data as Hero[])
        .subscribe(
          heroes => {
            expect(createPassThruBackend).not.toHaveBeenCalled();
            expect(heroes.length).toBeGreaterThan(0, 'should have heroes');
          },
          failure
        );
    }));

    // `passthru` is NOT a collection in the data store
    // so requests for it should pass thru to the "real" server

    it('can GET passthru', async(() => {

      jasmine.Ajax.stubRequest('api/passthru').andReturn({
        'status': 200,
        'contentType': 'application/json',
        'response': JSON.stringify({ data: [{ id: 42, name: 'Dude' }] })
      });

      http.get<Data>('api/passthru')
        .map(data => data.data as any[])
        .subscribe(
          passthru => {
            console.log('passthru data', passthru);
            expect(passthru.length).toBeGreaterThan(0, 'should have passthru data');
          },
          failure
        );
    }));

    it('can ADD to passthru', async(() => {
      jasmine.Ajax.stubRequest('api/passthru').andReturn({
        'status': 200,
        'contentType': 'application/json',
        'response': JSON.stringify({ data: [{ id: 42, name: 'Dude' }] })
      });

      http.post<Data>('api/passthru', { name: 'Dude' })
        .map(data => data.data as any[])
        .subscribe(
          passthru => {
            console.log('passthru data', passthru);
            expect(passthru.length).toBeGreaterThan(0, 'should have passthru data');
          },
          failure
        );
    }));
  });
});

