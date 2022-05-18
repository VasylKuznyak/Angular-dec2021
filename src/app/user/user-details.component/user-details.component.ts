import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IUser} from "../../interfaces";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
})
export class UserDetailsComponent implements OnInit {
  userDetails: IUser;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({userId}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['user'] as IUser;
      if (state) {
        this.userDetails = state;
      } else {
        this.userService.getById(userId).subscribe(users => this.userDetails = users);
      }
    });
  }
}
