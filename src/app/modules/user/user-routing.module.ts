import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import {UserDetailsComponent, UsersComponent} from "./components";

const routes: Routes = [
  {
    path: '', component: UsersComponent, children: [
      {path: ':id', component: UserDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
