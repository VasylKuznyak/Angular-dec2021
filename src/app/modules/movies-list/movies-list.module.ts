import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MoviesListRoutingModule} from './movies-list-routing.module';
import {MovieComponent, MoviesListComponent, PosterPreviewComponent} from './components';
import {MoviesService} from "./services";

@NgModule({
  declarations: [
    MoviesListComponent,
    MovieComponent,
    PosterPreviewComponent
  ],
  imports: [
    CommonModule,
    MoviesListRoutingModule
  ],
  providers: [
    MoviesService
  ]
})
export class MoviesListModule {
}
