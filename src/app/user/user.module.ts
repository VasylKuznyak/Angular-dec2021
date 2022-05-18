import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UsersComponent} from './users.component';
import {UserComponent} from './user.component';
import {UserService} from "./user.service";
import {UserDetailsComponent} from './user-details.component';

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
