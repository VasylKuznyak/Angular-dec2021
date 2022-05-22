import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import {UserDetailsComponent, UsersComponent} from "./components";
import {
  UserActivateGuard,
  UserDeactivateGuard,
  UserResolver,
  UsersResolver
} from "./services";

const routes: Routes = [
  {
    path: '', component: UsersComponent,
    resolve: {usersData: UsersResolver},
    canActivate: [UserActivateGuard],
    canDeactivate: [UserDeactivateGuard],

    children: [
      {path: ':id', component: UserDetailsComponent,
        resolve: {userData: UserResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
})
export class UserRoutingModule {
}
