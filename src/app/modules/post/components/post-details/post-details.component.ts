import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {PostService} from "../../services";
import {IPost} from "../../interfaces";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  postDetails: IPost;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private postService: PostService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['post'];
      if (state) {
        this.postDetails = state;
      } else {
        this.postService.getById(id).subscribe(post => this.postDetails = post);
      }
    });
  }
}
