import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IComment} from "../../interfaces";
import {CommentService} from "../comment.service";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
})
export class CommentDetailsComponent implements OnInit {
  commentDetails: IComment;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private commentService: CommentService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({commentId}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['comment'];
      if (state) {
        this.commentDetails = state;
      } else {
        this.commentService.getById(commentId).subscribe(comment => this.commentDetails = comment);
      }
    })
  }

}
