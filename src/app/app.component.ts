import { Component } from '@angular/core';
import { Route } from '@angular/router';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public name = '2BIT Angular Demos';
  public navItems: Route[];

  constructor() {
    // this.navItems = appRoutes.filter((route) => route.data);
  }
}
