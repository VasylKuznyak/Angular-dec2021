import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from "@angular/platform-browser";

import {MainLayoutComponent} from "../layouts";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', loadChildren: () => import('../home/home.module').then(module => module.HomeModule)},
      {path: 'users', loadChildren: () => import('../user/user.module').then(module => module.UserModule)},
      {path: 'posts', loadChildren: () => import('../post/post.module').then(module => module.PostModule)},
      {path: 'comments', loadChildren: () => import('../comment/comment.module').then(module => module.CommentModule)}
    ]
  }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
