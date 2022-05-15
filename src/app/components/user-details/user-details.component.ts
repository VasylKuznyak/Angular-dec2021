import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {UserService} from "../../services";
import {IUserDetails} from "../../interfaces";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userDetails: IUserDetails;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(({userId}) => {
      const {state: {user}} = history;
      if (user) {
        return this.userDetails = user;
      }
      this.userService.getById(userId).subscribe(user => this.userDetails = user);
    });
  }
}

