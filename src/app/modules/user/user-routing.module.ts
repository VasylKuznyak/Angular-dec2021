import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserDetailsComponent, UsersComponent} from "./components";
import {UserService} from "./services";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {
    path: '', component: UsersComponent, children: [
      {path: ':id', component: UserDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [UserService],
})
export class UserRoutingModule {
}
