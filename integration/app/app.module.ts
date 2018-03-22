import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from '@xmlking/angular-in-memory-web-api';
import { HeroInMemDataService } from './hero/hero-in-mem-data.service';

import { AppComponent } from './app.component';
import {HeroService} from './hero/hero.service';
import {HttpClientHeroService} from './hero/http-client-hero.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(HeroInMemDataService, {
      passThruUnknownUrl: true
      // delay: 500,
      // apiBase: 'api'
    })
  ],
  providers: [
    { provide: HeroService, useClass: HttpClientHeroService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
