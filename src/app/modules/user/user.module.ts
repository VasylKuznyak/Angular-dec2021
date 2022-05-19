import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UserComponent, UserDetailsComponent, UsersComponent} from './components';
import {UserService} from "./services";

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
  ],
  providers: [
    UserService
  ]
})
export class UserModule {
}
