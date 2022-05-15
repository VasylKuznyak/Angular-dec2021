import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {CommentService} from "../../services";
import {ICommentDetails} from "../../interfaces";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})

export class CommentDetailsComponent implements OnInit {
  commentDetails: ICommentDetails;

  constructor(private activatedRoute: ActivatedRoute, private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({commentId}) => {
      const {state: {comment}} = history;
      if (comment) {
        return this.commentDetails = comment;
      }
      this.commentService.getById(commentId).subscribe(comment => this.commentDetails = comment);
    })
  }

}
