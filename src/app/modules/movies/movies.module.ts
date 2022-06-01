import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {
  GenreComponent,
  GenresListComponent,
  MovieComponent,
  MovieInfoComponent,
  MoviesListComponent,
} from './components';
import {MoviesRoutingModule} from './movies-routing.module';
import {GenresService, MoviesService} from "./services";
import {HttpModule} from "../../http.module";

@NgModule({
  declarations: [
    MoviesListComponent,
    MovieInfoComponent,
    MovieComponent,
    GenresListComponent,
    GenreComponent,
  ],
  imports: [
    MoviesRoutingModule,
    CommonModule,
    HttpModule
  ],
  providers: [
    MoviesService,
    GenresService
  ]
})
export class MoviesModule {
}
