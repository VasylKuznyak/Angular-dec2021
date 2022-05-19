import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {ITodo} from "../../interfaces";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input()
  todo: ITodo;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
  }

  getDetails(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.router.navigate([this.todo.id], {
        relativeTo: this.activatedRoute,
        state: {todo: this.todo}
      }).then();
    });
  }
}
