import {Component, Input, OnInit} from '@angular/core';

import {IUser} from "../../interfaces";
import {DataService} from "../../services";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: IUser

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  saveToStorage() {
    this.dataService.userStorage.next(this.user);
  }
}
