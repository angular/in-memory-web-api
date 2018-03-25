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

import { Observable, zip} from 'rxjs';
import { concatMap, map } from 'rxjs/operators';

import { failure } from '../testing';

import { HttpClientBackendService } from './http-client-backend.service';
import { HttpClientInMemoryWebApiModule } from './http-client-in-memory-web-api.module';

import { Hero } from '../app/hero';
import { HeroService } from '../app/hero.service';
import { HttpClientHeroService } from '../app/http-client-hero.service';

import { HeroInMemDataService } from '../app/hero-in-mem-data.service';
import { HeroInMemDataOverrideService } from '../app/hero-in-mem-data-override.service';
import { HeroServiceCoreSpec } from '../app/hero.service.spec';

class Nobody { id: string; name: string; }

/**
 * Test interceptor adds a request header and a response header
 */
@Injectable()
export class TestHeaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const reqClone = req.clone({setHeaders: {'x-test-req': 'req-test-header'}});

    return next.handle(reqClone).pipe(
      map(event => {
        if (event instanceof HttpResponse) {
          event = event.clone({
            headers: event.headers.set('x-test-res', 'res-test-header')
          });
        }
        return event;
      })
    );
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
      http.get<Hero[]>('api/heroes')
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

      const get$ = http.get<Hero[]>('api/heroes');

      // spy on `collectionHandler` should not be called before subscribe
      expect(spy).not.toHaveBeenCalled();

      get$.subscribe(
        heroes => {
          expect(spy).toHaveBeenCalled();
          expect(heroes.length).toBeGreaterThan(0, 'should have heroes');
        },
        failure
      );
    }));

    it('GET should wait until after delay to respond', async(() => {
      // to make test fail, set `delay=0` above
      let gotResponse = false;

      http.get<Hero[]>('api/heroes').subscribe(
        heroes => {
          gotResponse = true;
          expect(heroes.length).toBeGreaterThan(0, 'should have heroes');
        },
        failure
      );

      expect(gotResponse).toBe(false, 'should delay before response');
    }));

    it('Should only initialize the db once', async(() => {
      const httpBackend = TestBed.get(HttpBackend);

      const spy = spyOn(httpBackend, 'resetDb').and.callThrough();

      // Simultaneous backend.handler calls
      // Only the first should initialize by calling `resetDb`
      // All should wait until the db is "ready"
      // then they share the same db instance.
      http.get<Hero[]>('api/heroes').subscribe();
      http.get<Hero[]>('api/heroes').subscribe();
      http.get<Hero[]>('api/heroes').subscribe();
      http.get<Hero[]>('api/heroes').subscribe();

      expect(spy.calls.count()).toBe(1);
    }));

    it('can get heroes (w/ a different base path)', async(() => {
      http.get<Hero[]>('some-base-path/heroes')
      .subscribe(
        heroes => {
          // console.log(heroes);
          expect(heroes.length).toBeGreaterThan(0, 'should have heroes');
        },
        failure
      );
    }));

    it('should 404 when GET unknown collection (after delay)', async(() => {
      let gotError = false;
      const url = 'api/unknown-collection';
      http.get<Hero[]>(url).subscribe(
        _ => {
          console.log(_);
          fail(`should not have found data for '${url}'`);
        },
        err => {
          gotError = true;
          expect(err.status).toBe(404, 'should have 404 status');
        }
      );

      expect(gotError).toBe(false, 'should not get error until after delay');
    }));

    it('should return the hero w/id=1 for GET app/heroes/1', async(() => {
      http.get<Hero>('api/heroes/1')
      .subscribe(
        hero => {
          expect(hero).toBeDefined('should find hero with id=1');
        },
        failure
      );
    }));

    // test where id is string that looks like a number
    it('should return the stringer w/id="10" for GET app/stringers/10', async(() => {
      http.get<Hero>('api/stringers/10')
      .subscribe(
        hero => {
          expect(hero).toBeDefined('should find string with id="10"');
        },
        failure
      );
    }));

    it('should return 1-item array for GET app/heroes/?id=1', async(() => {
      http.get<Hero[]>('api/heroes/?id=1')
      .subscribe(
        heroes => {
          expect(heroes.length).toBe(1, 'should find one hero w/id=1');
        },
        failure
      );
    }));

    it('should return 1-item array for GET app/heroes?id=1', async(() => {
      http.get<Hero[]>('api/heroes?id=1')
      .subscribe(
        heroes => {
          expect(heroes.length).toBe(1, 'should find one hero w/id=1');
        },
        failure
      );
    }));

    it('should return undefined for GET app/heroes?id=not-found-id', async(() => {
      http.get<Hero[]>('api/heroes?id=123456')
      .subscribe(
        heroes => {
          expect(heroes.length).toBe(0);
        },
        failure
      );
    }));

    it('should return 404 for GET app/heroes/not-found-id', async(() => {
      const url = 'api/heroes/123456';
      http.get<Hero[]>(url)
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

    it('can generate the id when add a hero with no id', async(() => {
      const hero = new Hero(null, 'SuperDooper');
      http.post<Hero>('api/heroes', hero)
        .subscribe(
          replyHero => {
            expect(replyHero.id).toBeTruthy('added hero should have an id');
            expect(replyHero).not.toBe(hero,
              'reply hero should not be the request hero');
          },
          failure
        );
    }));

    it('can get nobodies (empty collection)', async(() => {
      http.get<Hero[]>('api/nobodies')
      .subscribe(
        nobodies => {
          expect(nobodies.length).toBe(0, 'should have no nobodies');
        },
        failure
      );
    }));

    it('can add a nobody with an id to empty nobodies collection', async(() => {

      const id = 'g-u-i-d';

      http.post('api/nobodies', { id, name: 'Noman' }).pipe(
        concatMap(() => http.get<Nobody[]>('api/nobodies'))
      ).subscribe(
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

    describe('can reset the database', () => {
      it('to empty (object db)', async(() => resetDatabaseTest('object')));

      it('to empty (observable db)', async(() => resetDatabaseTest('observable')));

      it('to empty (promise db)', async(() => resetDatabaseTest('promise')));

      function resetDatabaseTest(returnType: string) {
        // Observable of the number of heroes and nobodies
        const sizes$ = zip(
          http.get<Hero[]>('api/heroes'),
          http.get<Hero[]>('api/nobodies'),
          http.get<Hero[]>('api/stringers')
        ).pipe(
          map(([h, n, s]) => {
            return {
              heroes:    h.length as number,
              nobodies:  n.length as number,
              stringers: s.length as number
            };
          })
        );

        // Add a nobody so that we have one
        http.post('api/nobodies', { id: 42, name: 'Noman' }).pipe(
          // Reset database with "clear" option
          concatMap(() => http.post('commands/resetDb',
            { clear: true, returnType })),
          // get the number of heroes and nobodies
          concatMap(() => sizes$)
        ).subscribe(
          sizes => {
            expect(sizes.heroes).toBe(0, 'reset should have cleared the heroes');
            expect(sizes.nobodies).toBe(0, 'reset should have cleared the nobodies');
            expect(sizes.stringers).toBe(0, 'reset should have cleared the stringers');
          },
          failure
        );
      }
    });
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
      http.get<Hero[]>('api/heroes')
      .subscribe(
        heroes => {
          // console.log(heroes);
          expect(heroes.length).toBeGreaterThan(0, 'should have heroes');
        },
        failure
      );
    }));

    it('can translate `foo/heroes` to `heroes` via `parsedRequestUrl` override', async(() => {
      http.get<Hero[]>('api/foo/heroes')
      .subscribe(
        heroes => {
          // console.log(heroes);
          expect(heroes.length).toBeGreaterThan(0, 'should have heroes');
        },
        failure
      );
    }));

    it('can get villains', async(() => {
      http.get<Hero[]>('api/villains')
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
      http.post<Hero[]>(url, {id: 42, name: 'Dr. Evil'})
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
      http.get<Hero[]>(url)
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
      http.post('api/heroes', { name: 'Maxinius' }).pipe(
        concatMap(() => http.get<Hero[]>('api/heroes?name=Maxi'))
      ).subscribe(
        heroes => {
          expect(heroes.length).toBe(1, 'should have found "Maxinius"');
          expect(heroes[0].name).toBe('Maxinius');
          expect(heroes[0].id).toBeGreaterThan(1000);
        },
        failure
      );
    }));

    it('should use genId override guid generator for a new nobody without an id', async(() => {
      http.post('api/nobodies', { name: 'Noman' }).pipe(
        concatMap(() => http.get<Nobody[]>('api/nobodies'))
      ).subscribe(
          nobodies => {
            expect(nobodies.length).toBe(1, 'should a nobody');
            expect(nobodies[0].name).toBe('Noman', 'should be "Noman"');
            expect(typeof nobodies[0].id).toBe('string', 'should create a string (guid) id');
          },
          failure
        );
    }));

    describe('can reset the database', () => {
      it('to empty (object db)', async(() => resetDatabaseTest('object')));

      it('to empty (observable db)', async(() => resetDatabaseTest('observable')));

      it('to empty (promise db)', async(() => resetDatabaseTest('promise')));

      function resetDatabaseTest(returnType: string) {
        // Observable of the number of heroes, nobodies and villains
        const sizes$ = zip(
          http.get<Hero[]>('api/heroes'),
          http.get<Hero[]>('api/nobodies'),
          http.get<Hero[]>('api/stringers'),
          http.get<Hero[]>('api/villains')
        ).pipe(
            map(([h, n, s, v]) => {
              return {
                heroes:    h.length as number,
                nobodies:  n.length as number,
                stringers: s.length as number,
                villains:  v.length as number
              };
            })
          );

        // Add a nobody so that we have one
        http.post('api/nobodies', { id: 42, name: 'Noman' }).pipe(
        // Reset database with "clear" option
          concatMap(() => http.post('commands/resetDb', { clear: true, returnType })),
          // count all the collections
          concatMap(() => sizes$)
        ).subscribe(
          sizes => {
            expect(sizes.heroes).toBe(0, 'reset should have cleared the heroes');
            expect(sizes.nobodies).toBe(0, 'reset should have cleared the nobodies');
            expect(sizes.stringers).toBe(0, 'reset should have cleared the stringers');
            expect(sizes.villains).toBeGreaterThan(0, 'reset should NOT clear villains');
          },
          failure
        );
      }
    });
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

    new HeroServiceCoreSpec().run();
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

      http.get<Hero[]>('api/heroes')
        .subscribe(
          heroes => {
            // HttpRequest is first arg of the first call to in-mem backend `handle`
            const req: HttpRequest<Hero[]> = handle.calls.argsFor(0)[0];
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
      http.request<Hero[]>(req)
        .subscribe(
          event => {
            if (event.type === HttpEventType.Response) {
              gotResponse = true;

              const resHeader = event.headers.get('x-test-res');
              expect(resHeader).toBe('res-test-header');

              const heroes = event.body as Hero[];
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
      http.get<Hero[]>('api/heroes')
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
        'response': JSON.stringify([{ id: 42, name: 'Dude' }])
      });

      http.get<any[]>('api/passthru')
        .subscribe(
          passthru => {
            console.log('GET passthru data', passthru);
            expect(passthru.length).toBeGreaterThan(0, 'should have passthru data');
          },
          failure
        );
    }));

    it('can ADD to passthru', async(() => {
      jasmine.Ajax.stubRequest('api/passthru').andReturn({
        'status': 200,
        'contentType': 'application/json',
        'response': JSON.stringify({ id: 42, name: 'Dude' })
      });

      http.post<any>('api/passthru', { name: 'Dude' })
        .subscribe(
          passthru => {
            console.log('POST passthru data', passthru);
            expect(passthru).toBeDefined('should have passthru data');
            expect(passthru.id).toBe(42, 'passthru object should have id 42');          },
          failure
        );
    }));
  });

  ////////////////
  describe('Http dataEncapsulation = true', () => {
    let http: HttpClient;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientModule,
          HttpClientInMemoryWebApiModule.forRoot(HeroInMemDataService, { delay, dataEncapsulation: true })
        ]
      });

      http = TestBed.get(HttpClient);
    });

    it('can get heroes (encapsulated)', async(() => {
      http.get<Data>('api/heroes').pipe(
        map(data => data.data as Hero[]) // unwrap data object
      ).subscribe(
        heroes => {
          expect(heroes.length).toBeGreaterThan(0, 'should have data.heroes');
        },
        failure
      );
    }));

  });
});

