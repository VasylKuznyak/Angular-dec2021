import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {PostService} from "../../services";
import {IPostDetails} from "../../interfaces";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: IPostDetails;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({postId}) => {
      const {state: {post}} = history;
      if (post) {
        return this.post = post;
      }
      this.postService.getById(postId).subscribe(post => this.post = post);
    })
  }

}
