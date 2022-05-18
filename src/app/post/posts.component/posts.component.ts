import {Component, OnInit} from '@angular/core';

import {IPost} from "../../interfaces";
import {PostService} from "../post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit {
  posts: IPost[];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getAll().subscribe(posts => this.posts = posts);
  }

}
