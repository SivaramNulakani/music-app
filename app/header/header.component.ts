import { Router } from "@angular/router";
import { Component } from "@angular/core";

@Component({
  selector: 'app-header',
  template: `<nav class="navbar  bg-primary navbar-fixed-top navbar-toggleable-md navbar-inverse">
  <div class="container" style="color:  white;">
  <a class="navbar-brand"
     [routerLink]="['home']">Upoint
  </a>
  <ul class="nav navbar-nav">
    <li class="nav-item"
        [routerLinkActive]="['active']">
      <a class="nav-link"
         [routerLink]="['home']">Home
      </a>
    </li>
    <li class="nav-item"
        [routerLinkActive]="['active']">
      <a class="nav-link"
         [routerLink]="['search']">Search
      </a>
      <li class="nav-item"
        [routerLinkActive]="['active']">
      <a class="nav-link"
         [routerLink]="['gmc']">Help Requests
      </a>
    </li>
  </ul>
  </div>
</nav>
 `
})
export class HeaderComponent {
  constructor(private router: Router) {
  }

  goHome() {
    this.router.navigate(['']);
  }

  goSearch() {
    this.router.navigate(['search']);
  }
}
