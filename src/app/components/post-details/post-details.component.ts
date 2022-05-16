import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {PostService} from "../../services";
import {IPostDetails} from "../../interfaces";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  postDetails: IPostDetails;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({postId}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['post'] as IPostDetails;
      if (state) {
        this.postDetails = state;
      } else {
        this.postService.getById(postId).subscribe(post => this.postDetails = post);
      }
    });
  }
}
