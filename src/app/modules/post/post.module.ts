import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostRoutingModule} from './post-routing.module';
import {PostComponent, PostDetailsComponent, PostsComponent} from './components';
import {
  PostActivateGuard,
  PostDeactivateGuard,
  PostResolver,
  PostService,
  PostsResolver
} from "./services";

@NgModule({
  declarations: [
    PostComponent,
    PostsComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ],
  providers: [
    PostActivateGuard,
    PostDeactivateGuard,
    PostsResolver,
    PostResolver,
    PostService
  ]
})
export class PostModule {
}
