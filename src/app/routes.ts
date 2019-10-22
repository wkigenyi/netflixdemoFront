import { Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { FavlistComponent } from './favlist/favlist.component';
import { ActorListComponent } from './actor-list/actor-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

export const appRoutes: Routes = [
  {path: 'movies', component: MovieListComponent},
  {path: 'favmovies', component: FavlistComponent},
  {path: 'actors', component: ActorListComponent},
  {path: 'detail/:id', component: MovieDetailComponent},
  {path: '', redirectTo: '/movies', pathMatch: 'full'}
];
