import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {TodoService} from "../../services";
import {ITodo} from "../../interfaces";

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  todoDetails: ITodo;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['todo'];
      if (state) {
        this.todoDetails = state;
      } else {
        this.todoService.getById(id).subscribe(todo => this.todoDetails = todo);
      }
    });
  }
}
