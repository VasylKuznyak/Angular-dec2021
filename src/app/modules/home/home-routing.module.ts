import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import {HomeComponent} from "./components";

const routes: Routes = [
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
