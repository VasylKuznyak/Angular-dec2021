import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {CommentService} from "../../services";
import {ICommentDetails} from "../../interfaces";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})

export class CommentDetailsComponent implements OnInit {
  commentDetails: ICommentDetails;

  constructor(private activatedRoute: ActivatedRoute, private commentService: CommentService, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({commentId}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['comment'] as ICommentDetails;
      if (state) {
        this.commentDetails = state;
      } else {
        this.commentService.getById(commentId).subscribe(comment => this.commentDetails = comment);
      }
    });
  }
}

