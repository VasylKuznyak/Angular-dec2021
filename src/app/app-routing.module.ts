import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule, Routes} from "@angular/router";

import {MainLayoutComponent} from "./layouts";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', loadChildren: () => import('./modules').then(module => module.HomeModule)},
      {path: 'users', loadChildren: () => import('./modules').then(module => module.UserModule)},
      {path: 'posts', loadChildren: () => import('./modules').then(module => module.PostModule)},
      {path: 'comments', loadChildren: () => import('./modules').then(module => module.CommentModule)},
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
