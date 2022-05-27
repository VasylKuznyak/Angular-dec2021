import {Component, Input, OnInit} from '@angular/core';

import {IPost} from "../../interfaces";
import {DataService} from "../../services";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: IPost;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  saveToStorage() {
    this.dataService.postStorage.next(this.post);
  }
}
