import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UserComponent, UserDetailsComponent, UsersComponent} from './components';
import {UserActivateGuard, UserDeactivateGuard, UserResolver, UserService, UsersResolver} from "./services";

@NgModule({
  declarations: [
    UserComponent,
    UsersComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers: [
    UserService,
    UsersResolver,
    UserResolver,
    UserDeactivateGuard,
    UserActivateGuard
  ]
})
export class UserModule {
}
