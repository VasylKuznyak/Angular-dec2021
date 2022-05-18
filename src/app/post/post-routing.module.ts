import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import {PostsComponent} from "./posts.component";
import {PostDetailsComponent} from "./post-details.component";

const routes: Routes = [
  {
    path: '', component: PostsComponent, children: [
      {path: ':postId', component: PostDetailsComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
