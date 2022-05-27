import {Component} from '@angular/core';

import {DataService} from "./services";
import {IComment, IPost, IUser} from "./interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  user: IUser;
  post: IPost;
  comment: IComment;

  constructor(private dataService: DataService) {
    dataService.userStorage.subscribe(users => this.user = users);
    dataService.postStorage.subscribe(posts => this.post = posts);
    dataService.commentStorage.subscribe(comment => this.comment = comment);
  }
}
