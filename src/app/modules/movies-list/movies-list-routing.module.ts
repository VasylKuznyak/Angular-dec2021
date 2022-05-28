import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import {MoviesListComponent} from "./components";

const routes: Routes = [
  {path: '', component: MoviesListComponent}
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
