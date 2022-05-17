import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from "@angular/platform-browser";

import {MainLayoutComponent} from "./layouts";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: 'users', loadChildren: () => import('./user/user.module').then(module => module.UserModule)}

    ]
  }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
