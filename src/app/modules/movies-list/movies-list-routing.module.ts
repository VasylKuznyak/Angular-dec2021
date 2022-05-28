import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import {MovieInfoComponent, MoviesListComponent} from "./components";

const routes: Routes = [
  {path: '', component: MoviesListComponent},
  {path: ':id', component: MovieInfoComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HttpClientModule
  ],

  exports: [RouterModule]
})
export class MoviesListRoutingModule {
}
