import {Component, OnInit} from '@angular/core';

import {IPost} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../post.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
})
export class PostDetailsComponent implements OnInit {
  postDetails: IPost;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({postId}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['post'];
      if (state) {
        this.postDetails = state;
      } else {
        this.postService.getById(postId).subscribe(post => this.postDetails = post);
      }
    });
  }
}

