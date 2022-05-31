import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {MovieComponent, MovieInfoComponent, MoviesListComponent,} from './components';
import {MoviesRoutingModule} from './movies-routing.module';
import {HttpModule} from "../../http.module";
import {MoviesService} from "./services";

@NgModule({
  declarations: [
    MoviesListComponent,
    MovieInfoComponent,
    MovieComponent,
  ],
  imports: [
    MoviesRoutingModule,
    CommonModule,
    HttpModule
  ],
  providers: [
    MoviesService
  ]
})
export class MoviesModule {
}
