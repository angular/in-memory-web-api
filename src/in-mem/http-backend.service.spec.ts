import { async, TestBed } from '@angular/core/testing';
import { HttpModule, Http, XHRBackend } from '@angular/http';

import { zip } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';

import { failure } from '../testing';

import { HttpBackendService } from './http-backend.service';
import { HttpInMemoryWebApiModule } from './http-in-memory-web-api.module';

import { Hero } from '../app/hero';
import { HeroService } from '../app/hero.service';
import { HttpHeroService } from '../app/http-hero.service';

import { HeroInMemDataService } from '../app/hero-in-mem-data.service';
import { HeroInMemDataOverrideService } from '../app/hero-in-mem-data-override.service';
import { HeroInMemDataOverrideIdService } from '../app/hero-in-mem-data-override-id.service';
import { HeroServiceCoreSpec } from '../app/hero.service.spec';

class Nobody { id: string; name: string; }

describe('Http Backend Service', () => {

  const delay = 1; // some minimal simulated latency delay

  describe('raw Angular Http', () => {

    let http: Http;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpModule,
          HttpInMemoryWebApiModule.forRoot(HeroInMemDataService, { delay })
        ]
      });

      http = TestBed.get(Http);
    });

    it('can get heroes', async(() => {
      http.get('api/heroes').pipe(
        map(res => res.json() as Hero[])
      ).subscribe(
        heroes => {
          // console.log(heroes);
          expect(heroes.length).toBeGreaterThan(0, 'should have heroes');
        },
        failure
      );
    }));

    it('GET should be a "cold" observable', async(() => {
      const httpBackend = TestBed.get(XHRBackend);

      const spy = spyOn(httpBackend, 'collectionHandler').and.callThrough();

      const get$ = http.get('api/heroes');

      // spy on `collectionHandler` should not be called before subscribe
      expect(spy).not.toHaveBeenCalled();

      get$.pipe(map(res => res.json() as Hero[]))
      .subscribe(
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

      http.get('api/heroes').pipe(
        map(res => res.json() as Hero[]),
      ).subscribe(
        heroes => {
          gotResponse = true;
          expect(heroes.length).toBeGreaterThan(0, 'should have heroes');
        },
        failure
      );

      expect(gotResponse).toBe(false, 'should delay before response');
    }));

    it('can get heroes (w/ a different base path)', async(() => {
      http.get('some-base-path/heroes').pipe(
        map(res => res.json() as Hero[])
      ).subscribe(
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
      http.get(url)
      .subscribe(
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
      http.get('api/heroes/1').pipe(
        map(res => res.json() as Hero)
      ).subscribe(
        hero => {
          expect(hero).toBeDefined('should find hero with id=1');
        },
        failure
      );
    }));

    // test where id is string that looks like a number
    it('should return the stringer w/id="10" for GET app/stringers/10', async(() => {
      http.get('api/stringers/10').pipe(
        map(res => res.json() as { id: string, name: string })
      ).subscribe(
        hero => {
          expect(hero).toBeDefined('should find string with id="10"');
        },
        failure
      );
    }));

    it('should return 1-item array for GET app/heroes/?id=1', async(() => {
      http.get('api/heroes/?id=1').pipe(
        map(res => res.json() as Hero[])
      ).subscribe(
        heroes => {
          expect(heroes.length).toBe(1, 'should find one hero w/id=1');
        },
        failure
      );
    }));

    it('should return 1-item array for GET app/heroes?id=1', async(() => {
      http.get('api/heroes?id=1').pipe(
        map(res => res.json() as Hero[])
      ).subscribe(
        heroes => {
          expect(heroes.length).toBe(1, 'should find one hero w/id=1');
        },
        failure
      );
    }));

    it('should return undefined for GET app/heroes?id=not-found-id', async(() => {
      http.get('api/heroes?id=123456').pipe(
        map(res => res.json() as Hero[])
      ).subscribe(
        heroes => {
          expect(heroes.length).toBe(0);
        },
        failure
      );
    }));

    it('should return 404 for GET app/heroes/not-found-id', async(() => {
      const url = 'api/heroes/123456';
      http.get(url)
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
      http.post('api/heroes', hero).pipe(
          map(res => res.json())
      ).subscribe(
          replyHero => {
            expect(replyHero.id).toBeTruthy('added hero should have an id');
            expect(replyHero).not.toBe(hero,
              'reply hero should not be the request hero');
          },
          failure
        );
    }));

    it('can get nobodies (empty collection)', async(() => {
      http.get('api/nobodies').pipe(
        map(res => res.json())
      ).subscribe(
        nobodies => {
          expect(nobodies.length).toBe(0, 'should have no nobodies');
        },
        failure
      );
    }));

    it('can add a nobody with an id to empty nobodies collection', async(() => {

      const id = 'g-u-i-d';

      http.post('api/nobodies', { id, name: 'Noman' }).pipe(
          concatMap(() => http.get('api/nobodies')),
          map(res => res.json())
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

    it('can reset the database to empty (object db)', async(() => resetDatabaseTest('object')));

    it('can reset the database to empty (observable db)', async(() => resetDatabaseTest('observable')));

    it('can reset the database to empty (promise db)', async(() => resetDatabaseTest('promise')));

    function resetDatabaseTest(returnType: string) {
      // Observable of the number of heroes and nobodies
      const sizes$ = zip(
        http.get('api/heroes'),
        http.get('api/nobodies'),
        http.get('api/stringers'),
        (h, n, s) => ({
          heroes:    h.json().length as number,
          nobodies:  n.json().length as number,
          stringers: n.json().length as number
        }));

      // Add a nobody so that we have one
      http.post('api/nobodies', { id: 42, name: 'Noman' }).pipe(
        // Reset database with "clear" option
        concatMap(() => http.post('commands/resetDb', { clear: true })),
        // get the number of heroes and nobodies
        concatMap(() => sizes$),
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

  ////////////////
  describe('raw Angular Http w/ override service', () => {

    let http: Http;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpModule,
          HttpInMemoryWebApiModule.forRoot(HeroInMemDataOverrideService, { delay })
        ]
      });

      http = TestBed.get(Http);
    });

    it('can get heroes', async(() => {
      http.get('api/heroes').pipe(
        map(res => res.json() as Hero[])
      ).subscribe(
        heroes => {
          // console.log(heroes);
          expect(heroes.length).toBeGreaterThan(0, 'should have heroes');
        },
        failure
      );
    }));

    it('can translate `foo/heroes` to `heroes` via `parsedRequestUrl` override', async(() => {
      http.get('api/foo/heroes').pipe(
        map(res => res.json() as Hero[])
      ).subscribe(
        heroes => {
          // console.log(heroes);
          expect(heroes.length).toBeGreaterThan(0, 'should have heroes');
        },
        failure
      );
    }));

    it('can get villains', async(() => {
      http.get('api/villains').pipe(
        map(res => res.json() as Hero[])
      ).subscribe(
        villains => {
          // console.log(villains);
          expect(villains.length).toBeGreaterThan(0, 'should have villains');
        },
        failure
      );
    }));

    it('should 404 when POST to villains', async(() => {
      const url = 'api/villains';
      http.post(url, {id: 42, name: 'Dr. Evil'})
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
      http.get(url)
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
        concatMap(() => http.get('api/heroes?name=Maxi')),
        map(res => res.json())
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
        concatMap(() => http.get('api/nobodies')),
        map(res => res.json())
      ).subscribe(
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
        http.get('api/heroes'),
        http.get('api/nobodies'),
        http.get('api/stringers'),
        http.get('api/villains')
      ).pipe(map(results => {
        const [h, n, s, v] = results;
        return {
          heroes:    h.json().length as number,
          nobodies:  n.json().length as number,
          stringers: s.json().length as number,
          villains:  v.json().length as number
        }
      }));

      // Add a nobody so that we have one
      http.post('api/nobodies', { id: 42, name: 'Noman' }).pipe(
        // Reset database with "clear" option
        concatMap(() => http.post('commands/resetDb', { clear: true })),
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
    };
  });

  ////////////////
  describe('raw Angular Http w/ override id service', () => {

      let http: Http;

      beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [
            HttpModule,
            HttpInMemoryWebApiModule.forRoot(HeroInMemDataOverrideIdService, { delay })
          ]
        });

        http = TestBed.get(Http);
      });

      it('can get heroes', async(() => {
        http.get('api/heroes')
          .map(res => res.json() as Hero[])
          .subscribe(
          heroes => {
            // console.log(heroes);
            expect(heroes.length).toBeGreaterThan(0, 'should have heroes');
          },
          failure
          );
      }));

      it('can get heroes by uuid', async(() => {
        http.get('api/heroes/00000000-0000-0000-0000-000000000002')
          .map(res => res.json() as Hero)
          .subscribe(
          hero => {
            // console.log(heroes);
            expect(hero.name).toEqual('Bombasto', 'should find hero Bombasto');
          },
          failure
          );
      }));
    });

  ////////////////

  describe('Http HeroService', () => {

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpModule,
          HttpInMemoryWebApiModule.forRoot(HeroInMemDataService, { delay })
        ],
        providers: [
          { provide: HeroService, useClass: HttpHeroService }
        ]
      });

    });

    new HeroServiceCoreSpec().run();
  });

  ////////////////
  describe('Http passThru', () => {
    let http: Http;
    let httpBackend: HttpBackendService;
    let createPassThruBackend: jasmine.Spy;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpModule,
          HttpInMemoryWebApiModule.forRoot(HeroInMemDataService, { delay, passThruUnknownUrl: true })
        ]
      });

      http = TestBed.get(Http);
      httpBackend = TestBed.get(XHRBackend);
      createPassThruBackend = spyOn(<any>httpBackend, 'createPassThruBackend').and.callThrough();
    });

    beforeEach(function() {
      jasmine.Ajax.install();
    });

    afterEach(function() {
      jasmine.Ajax.uninstall();
    });

    it('can get heroes (no passthru)', async(() => {
      http.get('api/heroes').pipe(
        map(res => res.json() as Hero[])
      ).subscribe(
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
        'response': JSON.stringify([ {id: 42, name: 'Dude' }])
      });

      http.get('api/passthru').pipe(
          map(res => res.json() as any[])
      ).subscribe(
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

      http.post('api/passthru', { name: 'Dude' }).pipe(
        map(res => res.json() as any)
      ).subscribe(
          passthru => {
            console.log('POST passthru data', passthru);
            expect(passthru).toBeDefined('should have passthru data');
            expect(passthru.id).toBe(42, 'passthru object should have id 42');
          },
          failure
        );
    }));
  });

  ////////////////
  describe('Http dataEncapsulation = true', () => {
    let http: Http;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpModule,
          HttpInMemoryWebApiModule.forRoot(HeroInMemDataService, { delay, dataEncapsulation: true })
        ]
      });

      http = TestBed.get(Http);
    });

    it('can get heroes (encapsulated)', async(() => {
      http.get('api/heroes').pipe(
        map(res => res.json().data as Hero[])  // unwrap data object
      ).subscribe(
        heroes => {
          expect(heroes.length).toBeGreaterThan(0, 'should have data.heroes');
        },
        failure
      );
    }));

  });
});
