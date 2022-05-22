import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import {CommentDetailsComponent, CommentsComponent} from "./components";
import {
  CommentActivateGuard,
  CommentDeactivateGuard,
  CommentResolver,
  CommentsResolver
} from "./services";

const routes: Routes = [
  {
    path: '', component: CommentsComponent,
    resolve: {commentsData: CommentsResolver},
    canActivate: [CommentActivateGuard],
    canDeactivate: [CommentDeactivateGuard],

    children: [
      {
        path: ':id', component: CommentDetailsComponent,
        resolve: {commentData: CommentResolver}
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class CommentsRoutingModule {
}
