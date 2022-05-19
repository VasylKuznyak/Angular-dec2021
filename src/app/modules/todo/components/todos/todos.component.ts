import {Component, OnInit} from '@angular/core';

import {ITodo} from "../../interfaces";
import {TodoService} from "../../services";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: ITodo[];

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.todoService.getAll().subscribe(todos => this.todos = todos);
  }
}
