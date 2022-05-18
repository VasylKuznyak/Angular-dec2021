import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostComponent} from './post.component';
import {PostsComponent} from './posts.component';
import {PostRoutingModule} from './post-routing.module';
import {PostService} from "./post.service";

@NgModule({
  declarations: [
    PostComponent,
    PostsComponent,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
  ],
  providers: [
    PostService
  ]
})
export class PostModule {
}