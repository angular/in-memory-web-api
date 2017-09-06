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
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/zip';

import { failure } from '../testing';

import { HttpClientBackendService } from '../in-mem/http-client-backend.service';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HttpClientHeroService } from './http-client-hero.service';

import { HeroInMemDataService } from './hero-in-mem-data.service';
import { HeroInMemDataOverrideService } from './hero-in-mem-data-override.service';
import { HereServiceCoreSpec } from './hero-service-core.spec';

import { InMemoryWebApiModule } from '../in-mem/in-memory-web-api.module';

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

describe('HttpClient: in-mem-data.service', () => {

  const delay = 1; // some minimal simulated latency delay

  describe('raw Angular HttpClient', () => {

    let http: HttpClient;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientModule,
          InMemoryWebApiModule.forRoot(HeroInMemDataService, { delay })
        ]
      });

      http = TestBed.get(HttpClient);
    });

    it('can get heroes', async(() => {
      http.get<Data>('app/heroes')
      .map(data => data.data as Hero[])
      .subscribe(
        heroes => {
          // console.log(heroes);
          expect(heroes.length).toBeGreaterThan(0, 'should have heroes');
        },
        failure
      );
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
      const url = 'app/unknown-collection';
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

    it('should return 1-item array for GET app/heroes/?id=1', async(() => {
      http.get<Data>('app/heroes/?id=1')
      .map(data => data.data as Hero[])
      .subscribe(
        heroes => {
          expect(heroes.length).toBe(1, 'should find one hero w/id=1');
        },
        failure
      );
    }));

    it('should return 1-item array for GET app/heroes?id=1', async(() => {
      http.get<Data>('app/heroes?id=1')
      .map(data => data.data as Hero[])
      .subscribe(
        heroes => {
          expect(heroes.length).toBe(1, 'should find one hero w/id=1');
        },
        failure
      );
    }));

    it('should return undefined for GET app/heroes?id=not-found-id', async(() => {
      http.get<Data>('app/heroes?id=123456')
      .map(data => data.data[0] as Hero)
      .subscribe(
        hero => {
          expect(hero).toBeUndefined();
        },
        failure
      );
    }));

    it('should return 404 for GET app/heroes/not-found-id', async(() => {
      const url = 'app/heroes/123456';
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
      http.get<Data>('app/nobodies')
      .map(data => data.data as any[])
      .subscribe(
        nobodies => {
          expect(nobodies.length).toBe(0, 'should have no nobodies');
        },
        failure
      );
    }));

    it('can add to nobodies (empty collection)', async(() => {
      http.post('app/nobodies', { id: 42, name: 'Noman' })
      .switchMap(() => http.get<Data>('app/nobodies'))
      .map(data => data.data as Hero[])
      .subscribe(
        nobodies => {
          expect(nobodies.length).toBe(1, 'should a nobody');
          expect(nobodies[0].name).toBe('Noman', 'should be "Noman"');
          expect(nobodies[0].id).toBe(42, 'should preserve the submitted id');
        },
        failure
      );
    }));

    it('can reset the database to empty', async(() => {
      // Add a nobody so that we have one
      http.post('app/nobodies', { id: 42, name: 'Noman' })
      .switchMap(
        // Reset database with "clear" option
        () => http.post('commands/resetDb', { clear: true })
        // then count the collections
        .switchMap(() => http.get<Data>('app/heroes'))
        .zip(
          http.get<Data>('app/nobodies'),
          (h, n) => ({
            heroes:   h.data.length,
            nobodies: n.data.length
          })
        )
      )
      .subscribe(
        sizes => {
          expect(sizes.nobodies).toBe(0, 'reset should have cleared the nobodies');
          expect(sizes.heroes).toBe(0, 'reset should have cleared the heroes');
        },
        failure
      );
    }));
  });

  ////////////////

  describe('raw Angular HttpClient w/ override service', () => {

    let http: HttpClient;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientModule,
          InMemoryWebApiModule.forRoot(HeroInMemDataOverrideService, { delay })
        ]
      });

      http = TestBed.get(HttpClient);
    });

    it('can get heroes', async(() => {
      http.get<Data>('app/heroes')
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
      http.get<Data>('app/villains')
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
      const url = 'app/villains';
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
      const url = 'app/unknown-collection';
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

    it('can add new hero, "Maxinius", using genId override', async(() => {
      http.post('app/heroes', { name: 'Maxinius' })
      .switchMap(() => http.get<Data>('app/heroes?name=Maxi'))
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

    it('can reset the database to empty', async(() => {
      // Add a nobody so that we have one
      http.post('app/nobodies', { id: 42, name: 'Noman' })
      .switchMap(
        // Reset database with "clear" option
        () => http.post('commands/resetDb', { clear: true })
        // then count the collections
        .switchMap(() => http.get<Data>('app/heroes'))
        .zip(
          http.get<Data>('app/nobodies'),
          http.get<Data>('app/villains'),
          (h, n, v) => ({
            heroes:   h.data.length,
            nobodies: n.data.length,
            villains: v.data.length
          })
        )
      )
      .subscribe(
        sizes => {
          expect(sizes.heroes).toBe(0, 'reset should have cleared the heroes');
          expect(sizes.nobodies).toBe(0, 'reset should have cleared the nobodies');
          expect(sizes.villains).toBeGreaterThan(0, 'reset should have NOT clear villains');
        },
        failure
      );
    }));
  });

  ////////////////

  describe('HttpClient HeroService', () => {

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientModule,
          InMemoryWebApiModule.forRoot(HeroInMemDataService, { delay })
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
          InMemoryWebApiModule.forRoot(HeroInMemDataService, { delay })
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

      http.get<Data>('app/heroes')
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
      const req = new HttpRequest<any>('GET', 'app/heroes');
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
  describe('Http passThru (TODO)', () => {
    // Todo: test passthru.
    // probably have to let Jasmine intercept the Http call
    // because HttpClient's own testing support leans on the backend that we're replacing.

    it('should pass request for unknown collection thru to the "real" backend');
  });
});
