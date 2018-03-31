import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SearchService } from "../services/search.service";

@Component({
  selector: 'app-search',
  template: `<form class="form-inline">
  <div class="form-group">
    <input type="search"
           class="form-control"
           placeholder="Enter search string"
           #search>
  </div>
  <button type="button"
          class="btn btn-primary"
          (click)="onSearch(search.value)">
    Search
  </button>
</form>

<hr />

<div class="text-center">
  <p class="lead"
     *ngIf="loading">Loading...</p>
</div>
<div class="list-group">
  <a [routerLink]="['/artist', track.artistId]"
     class="list-group-item list-group-item-action"
     *ngFor="let track of itunes.results">
    <img src="{{track.thumbnail}}">
    {{ track.name }} <span class="text-muted">by</span> {{ track.artist }}
  </a>
  
</div>
 `
})
export class SearchComponent {
  private loading: boolean = false;
  private param:any;

  constructor(private itunes: SearchService,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe(params => {
      console.log('params--->'+params);
      this.param=params['term'];
      if (params['term']) {
        this.doSearch(params['term'])
      }
    });
  }

  doSearch(term: string) {
    this.loading = true;
    this.itunes.search(term).then(_ => this.loading = false)
  }

  onSearch(term: string) {
    this.router.navigate(['search', {term: term}]);
  }

  canDeactivate() {
    return this.itunes.results.length > 0;
  }
}
