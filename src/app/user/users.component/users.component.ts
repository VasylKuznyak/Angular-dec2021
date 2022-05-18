import {Component, OnInit} from '@angular/core';

import {IUser} from "../../interfaces";
import {UserService} from "../user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  users: IUser[];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(users => this.users = users);
  }
}
