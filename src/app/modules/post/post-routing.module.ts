import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import {PostDetailsComponent, PostsComponent} from "./components";

const routes: Routes = [
  {
    path: '', component: PostsComponent, children: [
      {path: ':id', component: PostDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
