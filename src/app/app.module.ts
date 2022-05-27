import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {
  CommentComponent,
  CommentsComponent,
  PostComponent,
  PostsComponent,
  UserComponent,
  UsersComponent
} from './components';
import {CommentService, PostService, UserService} from "./services";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserService, PostService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
