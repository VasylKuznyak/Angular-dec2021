import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {IComment} from "../../interfaces";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()
  comment: IComment;
  @Output()
  commentEmit = new EventEmitter<IComment>();

  constructor() {
  }

  ngOnInit(): void {
  }

  emit(comment: IComment) {
    this.commentEmit.emit(comment);
  }
}
