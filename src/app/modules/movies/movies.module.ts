import {MatIconModule} from "@angular/material/icon";
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {GenresService, MoviesService} from "./services";
import {MoviesRoutingModule} from './movies-routing.module';
import {HttpModule} from "../../http.module";
import {
  GenreComponent,
  GenresListComponent,
  MovieComponent,
  MovieInfoComponent,
  MoviesListComponent,
  StarRatingComponent,
} from './components';

@NgModule({
  declarations: [
    MoviesListComponent,
    MovieInfoComponent,
    MovieComponent,
    GenresListComponent,
    GenreComponent,
    StarRatingComponent,
  ],
  imports: [
    MoviesRoutingModule,
    CommonModule,
    HttpModule,
    MatIconModule,
  ],
  providers: [
    MoviesService,
    GenresService,
  ],
})

export class MoviesModule {
}
