import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { HeroInMemDataService } from './hero/hero-in-mem-data.service';
import { InMemHeroService } from './hero/in-mem-hero.service';

import { AppComponent } from './app.component';
import { HeroService } from './hero/hero.service';
import { HttpClientHeroService } from './hero/http-client-hero.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemHeroService)
    // HttpClientInMemoryWebApiModule.forRoot(HeroInMemDataService, {
    //   passThruUnknownUrl: true
    // })
  ],
  providers: [{ provide: HeroService, useClass: HttpClientHeroService }],
  bootstrap: [AppComponent]
})
export class AppModule {}
