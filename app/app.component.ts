import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
  <div class="m-t-1" style="margin-top: 100px;">
    <router-outlet></router-outlet>
  </div>
 `
})
export class AppComponent {
}
