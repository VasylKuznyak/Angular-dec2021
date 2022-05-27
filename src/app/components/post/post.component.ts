import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {IPost} from "../../interfaces";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: IPost;
  @Output()
  postEmitter = new EventEmitter<IPost>();

  constructor() {
  }

  ngOnInit(): void {
  }

  emit(post: IPost) {
    this.postEmitter.emit(post);
  }
}
