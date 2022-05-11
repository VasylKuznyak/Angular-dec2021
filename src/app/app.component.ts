import {Component} from '@angular/core';
import {User} from "./models/User";

import {UserService} from "./services/user.service";
import {PostService} from "./services/post.service";
import {Post} from "./models/Post";
import {Comments} from "./models/Comments";
import {CommentsService} from "./services/comments.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  users: User[];
  posts: Post[];
  comments: Comments[];

  constructor(
    private UserService: UserService,
    private PostService: PostService,
    private CommentsService: CommentsService) {

    UserService.getAll().subscribe(users => this.users = users);
    PostService.getAll().subscribe(posts => this.posts = posts);
    CommentsService.getAll().subscribe(comments => this.comments = comments);
  }
}

