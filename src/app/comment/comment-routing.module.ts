import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import {CommentsComponent} from "./comments.component";
import {CommentDetailsComponent} from "./comment-details.component";

const routes: Routes = [
  {
    path: '', component: CommentsComponent, children: [
      {path: ':commentId', component: CommentDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class CommentRoutingModule {
}
