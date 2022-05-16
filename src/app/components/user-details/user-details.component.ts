import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {UserService} from "../../services";
import {IUserDetails} from "../../interfaces";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userDetails: IUserDetails;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({userId}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['user'] as IUserDetails;
      if (state) {
        this.userDetails = state;
      } else {
        this.userService.getById(userId).subscribe(user => this.userDetails = user);
      }
    });
  }
}

