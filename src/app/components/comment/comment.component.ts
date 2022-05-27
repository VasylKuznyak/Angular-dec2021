import {Component, Input, OnInit} from '@angular/core';

import {IComment} from "../../interfaces";
import {DataService} from "../../services";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()
  comment: IComment

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  saveToStorage() {
    this.dataService.commentStorage.next(this.comment);
  }
}
