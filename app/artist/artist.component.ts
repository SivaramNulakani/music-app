import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jsonp } from '@angular/http';

@Component({
  selector: 'app-artist',
  template: `<div class="card">
  <div class="card-block">
    <h4>{{artist?.artistName}} <span class="tag tag-default">{{artist?.primaryGenreName}}</span></h4>
    <hr />
    <footer>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link"
             [routerLinkActive]="['active']"
             [routerLink]="['./tracks']">Tracks
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link"
             [routerLinkActive]="['active']"
             [routerLink]="['./albums']">Albums
          </a>
        </li>
      </ul>
    </footer>
  </div>
</div>

<div class="m-t-1">
  <router-outlet></router-outlet>
</div>
 `
})
export class ArtistComponent {

  private artist: any;

  constructor(private jsonp: Jsonp,
    private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.jsonp.request(`https://itunes.apple.com/lookup?id=${params['artistId']}&callback=JSONP_CALLBACK`)
        .toPromise()
        .then(res => {
          console.log(res.json());
          this.artist = res.json().results[0];
          console.log(this.artist);
        });
    });
  }

}
