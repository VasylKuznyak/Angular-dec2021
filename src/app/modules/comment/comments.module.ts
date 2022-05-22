import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CommentsRoutingModule} from './comments-routing.module';
import {CommentComponent, CommentDetailsComponent, CommentsComponent} from './components';
import {
  CommentActivateGuard,
  CommentDeactivateGuard,
  CommentResolver,
  CommentService,
  CommentsResolver
} from "./services";

@NgModule({
  declarations: [
    CommentComponent,
    CommentDetailsComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule
  ],
  providers: [
    CommentService,
    CommentResolver,
    CommentsResolver,
    CommentActivateGuard,
    CommentDeactivateGuard
  ]
})
export class CommentsModule {
}
