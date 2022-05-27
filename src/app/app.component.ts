import {Component} from '@angular/core';

import {IComment, IPost, IUser} from "./interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  user: IUser;
  post: IPost;
  comment: IComment;

  userEmitter(user: IUser) {
    this.user = user;
  }

  postEmitter(post: IPost) {
    this.post = post;
  }

  commentEmitter(comment: IComment) {
    this.comment = comment;
  }
}
