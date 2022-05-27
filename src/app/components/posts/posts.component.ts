import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {PostService} from "../../services";
import {IPost} from "../../interfaces";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: IPost[];
  @Output()
  postEmitter = new EventEmitter<IPost>();

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getAll().subscribe(posts => this.posts = posts);
  }

  catchPost(post: IPost) {
    this.postEmitter.emit(post);
  }
}
