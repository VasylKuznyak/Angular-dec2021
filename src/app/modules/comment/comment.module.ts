import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CommentRoutingModule} from './comment-routing.module';
import {CommentComponent, CommentDetailsComponent, CommentsComponent} from './components';
import {CommentService} from "./services";

@NgModule({
  declarations: [
    CommentComponent,
    CommentsComponent,
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
