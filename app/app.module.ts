import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule,JsonpModule, Jsonp, Response } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AlwaysAuthGuard } from './guards/always-auth-guard'
import { OnlyLoggedInUsersGuard } from './guards/only-logged-in-users-guard';
import { ArtistComponent } from './artist/artist.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ArtistTrackListComponent } from './artist-track-list/artist-track-list.component';
import { ArtistAlbumListComponent } from './artist-album-list/artist-album-list.component';
import { HeaderComponent } from './header/header.component';
import { UnsearchedTermGuard } from './guards/unsearched-term-guard';
import { AlwaysAuthChildrenGuard } from './guards/always-auth-children-guard';
import { SearchService } from './services/search.service';
import { UserService } from './services/user-service.service';
import { GmcComponent } from './gmc/gmc.component';
import { FilterPipe } from './filter.pipe';

// Routes

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'find', redirectTo: 'search'},
  {path: 'home', component: HomeComponent},
  {path:'gmc',component:GmcComponent},
  {path: 'search', component: SearchComponent, canDeactivate: [UnsearchedTermGuard]},
  {
    path: 'artist/:artistId',
    component: ArtistComponent,
    canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard],
    canActivateChild: [AlwaysAuthChildrenGuard],
    children: [
      {path: '', redirectTo: 'tracks', pathMatch: 'full'},
      {path: 'tracks', component: ArtistTrackListComponent},
      {path: 'albums', component: ArtistAlbumListComponent},
    ]
  },
  {path: '**', component: HomeComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    HomeComponent,
    SearchComponent,
    ArtistTrackListComponent,
    ArtistAlbumListComponent,
    HeaderComponent,
    GmcComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    JsonpModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [
    SearchService,
    UserService,
    OnlyLoggedInUsersGuard,
    AlwaysAuthGuard,
    AlwaysAuthChildrenGuard,
    UnsearchedTermGuard,
    FilterPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
