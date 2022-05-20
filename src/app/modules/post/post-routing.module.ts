import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import {PostDetailsComponent, PostsComponent} from "./components";
import {PostActivateGuard, PostDeactivateGuard, PostResolver, PostsResolver} from "./services";

const routes: Routes = [
  {
    path: '', component: PostsComponent,
    resolve: {postsData: PostsResolver},
    canActivate: [PostActivateGuard],
    canDeactivate: [PostDeactivateGuard],

    children: [
      {
        path: ':id', component: PostDetailsComponent,
        resolve: {postData: PostResolver}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
