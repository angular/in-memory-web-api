import { async, TestBed } from '@angular/core/testing';
import { HttpModule, Http, XHRBackend } from '@angular/http';

import { zip } from 'rxjs/observable/zip';

import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/zip';

import { failure } from '../testing';

import { HttpBackendService } from './http-backend.service';
import { InMemoryWebApiModule } from './in-memory-web-api.module';

import { Hero } from '../app/hero';
import { HeroService } from '../app/hero.service';
import { HttpHeroService } from '../app/http-hero.service';

import { HeroInMemDataService } from '../app/hero-in-mem-data.service';
import { HeroInMemDataOverrideService } from '../app/hero-in-mem-data-override.service';
import { HereServiceCoreSpec } from '../app/hero.service.spec';

describe('Http Backend Service', () => {

  const delay = 1; // some minimal simulated latency delay

  describe('raw Angular Http', () => {

    let http: Http;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpModule,
          InMemoryWebApiModule.forRoot(HeroInMemDataService, { delay })
        ]
      });

      http = TestBed.get(Http);
    });

    it('can get heroes', async(() => {
      http.get('api/heroes')
      .map(res => res.json().data as Hero[])
      .subscribe(
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

      get$.map(res => res.json().data as Hero[])
      .subscribe(
        heroes => {
          expect(spy).toHaveBeenCalled();
          expect(heroes.length).toBeGreaterThan(0, 'should have heroes');
        },
        failure
      );
    }));

    it('can get heroes (w/ a different base path)', async(() => {
      http.get('some-base-path/heroes')
      .map(res => res.json().data as Hero[])
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

    it('should return 1-item array for GET app/heroes/?id=1', async(() => {
      http.get('api/heroes/?id=1')
      .map(res => res.json().data as Hero[])
      .subscribe(
        heroes => {
          expect(heroes.length).toBe(1, 'should find one hero w/id=1');
        },
        failure
      );
    }));

    it('should return 1-item array for GET app/heroes?id=1', async(() => {
      http.get('api/heroes?id=1')
      .map(res => res.json().data as Hero[])
      .subscribe(
        heroes => {
          expect(heroes.length).toBe(1, 'should find one hero w/id=1');
        },
        failure
      );
    }));

    it('should return undefined for GET app/heroes?id=not-found-id', async(() => {
      http.get('api/heroes?id=123456')
      .map(res => res.json().data[0] as Hero)
      .subscribe(
        hero => {
          expect(hero).toBeUndefined();
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

    it('can get nobodies (empty collection)', async(() => {
      http.get('api/nobodies')
      .map(res => res.json().data)
      .subscribe(
        nobodies => {
          expect(nobodies.length).toBe(0, 'should have no nobodies');
        },
        failure
      );
    }));

    it('can add to nobodies (empty collection)', async(() => {
      http.post('api/nobodies', { id: 42, name: 'Noman' })
      .concatMap(() => http.get('api/nobodies'))
      .map(res => res.json().data)
      .subscribe(
        nobodies => {
          expect(nobodies.length).toBe(1, 'should a nobody');
          expect(nobodies[0].name).toBe('Noman', 'should be "Noman"');
          expect(nobodies[0].id).toBe(42, 'should preserve the submitted id');
        },
        failure
      );
    }));

    it('can reset the database to empty (object db)', async(() => resetDatabaseTest('object')));

    it('can reset the database to empty (observable db)', async(() => resetDatabaseTest('observable')));

    it('can reset the database to empty (promise db)', async(() => resetDatabaseTest('promise')));

    function resetDatabaseTest(returnType: string) {
      // Observable of the number of heroes and nobodies
      const sizes$ = zip(
        http.get('api/heroes'),
        http.get('api/nobodies'),
        (h, n) => ({
          heroes:   h.json().data.length as number,
          nobodies: n.json().data.length as number
        }));

      // Add a nobody so that we have one
      http.post('api/nobodies', { id: 42, name: 'Noman' })
      // Reset database with "clear" option
      .concatMap(() => http.post('commands/resetDb', { clear: true }))
      // get the number of heroes and nobodies
      .concatMap(() => sizes$)
      .subscribe(
        sizes => {
          expect(sizes.nobodies).toBe(0, 'reset should have cleared the nobodies');
          expect(sizes.heroes).toBe(0, 'reset should have cleared the heroes');
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
          InMemoryWebApiModule.forRoot(HeroInMemDataOverrideService, { delay })
        ]
      });

      http = TestBed.get(Http);
    });

    it('can get heroes', async(() => {
      http.get('api/heroes')
      .map(res => res.json().data as Hero[])
      .subscribe(
        heroes => {
          // console.log(heroes);
          expect(heroes.length).toBeGreaterThan(0, 'should have heroes');
        },
        failure
      );
    }));

    it('can get villains', async(() => {
      http.get('api/villains')
      .map(res => res.json().data as Hero[])
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

    it('can add new hero, "Maxinius", using genId override', async(() => {
      http.post('api/heroes', { name: 'Maxinius' })
      .concatMap(() => http.get('api/heroes?name=Maxi'))
      .map(res => res.json().data)
      .subscribe(
        heroes => {
          expect(heroes.length).toBe(1, 'should have found "Maxinius"');
          expect(heroes[0].name).toBe('Maxinius');
          expect(heroes[0].id).toBeGreaterThan(1000);
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
        http.get('api/villains'),
        (h, n, v) => ({
          heroes:   h.json().data.length as number,
          nobodies: n.json().data.length as number,
          villains: v.json().data.length as number
        }));

      // Add a nobody so that we have one
      http.post('api/nobodies', { id: 42, name: 'Noman' })
      // Reset database with "clear" option
      .concatMap(() => http.post('commands/resetDb', { clear: true }))
      // count all the collections
      .concatMap(() => sizes$)
      .subscribe(
        sizes => {
          expect(sizes.heroes).toBe(0, 'reset should have cleared the heroes');
          expect(sizes.nobodies).toBe(0, 'reset should have cleared the nobodies');
          expect(sizes.villains).toBeGreaterThan(0, 'reset should have NOT clear villains');
        },
        failure
      );
    };
  });

  ////////////////

  describe('Http HeroService', () => {

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpModule,
          InMemoryWebApiModule.forRoot(HeroInMemDataService, { delay })
        ],
        providers: [
          { provide: HeroService, useClass: HttpHeroService }
        ]
      });

    });

    new HereServiceCoreSpec().run();
  });

  ////////////////
  ////////////////
  describe('Http passThru', () => {
    let http: Http;
    let httpBackend: HttpBackendService;
    let createPassThruBackend: jasmine.Spy;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpModule,
          InMemoryWebApiModule.forRoot(HeroInMemDataService, { delay, passThruUnknownUrl: true })
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
      http.get('api/heroes')
      .map(res => res.json().data as Hero[])
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
        'response': JSON.stringify({ data: [ {id: 42, name: 'Dude' }] })
      });

      http.get('api/passthru')
        .map(res => res.json().data as any[])
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

      http.post('api/passthru', { name: 'Dude' })
        .map(res => res.json().data as any[])
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
