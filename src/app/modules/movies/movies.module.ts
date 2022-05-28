import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MoviesRoutingModule} from './movies-routing.module';
import {MovieComponent, MovieInfoComponent, MoviesListComponent} from './components';
import {MoviesService} from "./services";

@NgModule({
  declarations: [
    MoviesListComponent,
    MovieComponent,
    MovieInfoComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
  ],
  providers: [
    MoviesService
  ]
})
export class MoviesModule {
}
