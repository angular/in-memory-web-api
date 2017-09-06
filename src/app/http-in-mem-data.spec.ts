import { async, TestBed } from '@angular/core/testing';
import { HttpModule, Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { failure } from '../testing';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HttpHeroService } from './http-hero.service';

import { HeroInMemDataService } from './hero-in-mem-data.service';
import { HereServiceCoreSpec } from './hero-service-core.spec';

import { InMemoryWebApiModule } from '../in-mem/in-memory-web-api.module';

describe('Http: http-in-mem-data.service', () => {

  const delay = 1; // some minimal simulated latency delay

  describe('raw Angular http', () => {

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
      http.get('app/heroes')
      .map((res: Response) => res.json().data as Hero[])
      .subscribe(
        heroes => {
          // console.log(heroes);
          expect(heroes.length).toBeGreaterThan(0, 'should have heroes');
        },
        failure
      );
    }));

    it('can get heroes (w/ a different base path)', async(() => {
      http.get('some-base-path/heroes')
      .map((res: Response) => res.json().data as Hero[])
      .subscribe(
        heroes => {
          // console.log(heroes);
          expect(heroes.length).toBeGreaterThan(0, 'should have heroes');
        },
        failure
      );
    }));

    it('should 404 when ask for unknown collection', async(() => {
      const url = 'app/villains';
      http.get(url)
      .map((res: Response) => res.json().data as Hero[])
      .subscribe(
        (_: any) => {
          console.log(_);
          fail(`should not have found data for '${url}'`);
        },
        err => {
          expect(err.status).toBe(404, 'should have 404 status');
        }
      );
    }));

    it('should return undefined for GET app/heroes?id=not-found-id', async(() => {
      http.get('app/heroes?id=123456')
      .map((res: Response) => res.json().data[0] as Hero)
      .subscribe(
        hero => {
          expect(hero).toBeUndefined();
        },
        failure
      );
    }));

    it('should return 404 for GET app/heroes/not-found-id', async(() => {
      const url = 'app/heroes/123456';
      http.get(url)
      .map((res: Response) => res.json().data[0] as Hero)
      .subscribe(
        (_: any) => {
          console.log(_);
          fail(`should not have found data for '${url}'`);
        },
        err => {
          expect(err.status).toBe(404, 'should have 404 status');
        }
      );
    }));

    it('can reset the database to empty heroes', async(() => {
      http.post('commands/resetDb', { clear: true })
      .switchMap(() =>  http.get('app/heroes'))
      .map((res: Response) => res.json().data as Hero[])
      .subscribe(
        heroes => {
          expect(heroes.length).toBe(0, 'reset should have cleared the heroes');
        },
        failure
      );
    }));
  });

  ////////////////

  describe('HttpHeroService', () => {

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

});
