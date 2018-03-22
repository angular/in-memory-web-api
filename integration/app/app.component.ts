import { Component, ViewEncapsulation } from '@angular/core';
import {HeroService} from './hero/hero.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Test</h1>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor(private heroService: HeroService) {
   this.heroService.getHeroes().subscribe( (heros) => {
     console.log(heros);
    });
  }

  addTodo(todo: string) {
  }

  removeTodo(index: number) {
  }
}
