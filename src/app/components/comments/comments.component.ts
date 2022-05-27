import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {CommentService} from "../../services";
import {IComment} from "../../interfaces";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: IComment[];
  @Output()
  commentEmitter = new EventEmitter<IComment>();

  constructor(private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.commentService.getAll().subscribe(comments => this.comments = comments);
  }

  getComment(comment: IComment) {
    this.commentEmitter.emit(comment);
  }
}
