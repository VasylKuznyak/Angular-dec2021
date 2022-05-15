import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

import {MainLayoutComponent} from './layouts';
import {
  AppComponent,
  CommentComponent,
  CommentDetailsComponent,
  CommentsComponent,
  HomeComponent,
  PostComponent,
  PostDetailsComponent,
  PostsComponent,
  UserComponent,
  UserDetailsComponent,
  UsersComponent
} from './components';

const roots = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: 'home', component: HomeComponent},
      {
        path: 'users', component: UsersComponent, children: [
          {path: 'user-details/:userId', component: UserDetailsComponent}
        ]
      },
      {
        path: 'posts', component: PostsComponent, children: [
          {path: 'post-details/:postId', component: PostDetailsComponent}
        ]
      },
      {
        path: 'comments', component: CommentsComponent, children: [
          {path: 'comment-details/:commentId', component: CommentDetailsComponent}
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    UsersComponent,
    UserComponent,
    HomeComponent,
    UserDetailsComponent,
    PostComponent,
    PostsComponent,
    PostDetailsComponent,
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(roots)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
