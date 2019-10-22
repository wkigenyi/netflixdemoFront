import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FavlistComponent } from './favlist/favlist.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { MovieThumbnailComponent } from './movie-thumbnail/movie-thumbnail.component';
import { ActorListComponent } from './actor-list/actor-list.component';
import { DBService } from './db-service.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { JQ_TOKEN } from './j-query.service';
import { ModaltriggerDirective } from './modaltrigger.directive';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    NavbarComponent,
    FavlistComponent,
    MovieDetailComponent,
    MovieThumbnailComponent,
    ActorListComponent,
    SearchMovieComponent,
    ModaltriggerDirective
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {provide: JQ_TOKEN, useValue: 'jQuery'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
