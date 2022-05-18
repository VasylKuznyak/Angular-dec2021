import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CommentRoutingModule} from './comment-routing.module';
import {CommentsComponent} from './comments.component';
import {CommentComponent} from './comment.component';
import {CommentDetailsComponent} from './comment-details.component';
import {CommentService} from "./comment.service";

@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule
  ],
  providers: [
    CommentService
  ]
})
export class CommentModule {
}
