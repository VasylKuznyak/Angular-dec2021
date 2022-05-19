import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TodoRoutingModule} from './todo-routing.module';
import {TodoComponent, TodoDetailsComponent, TodosComponent} from './components';
import {TodoService} from "./services";

@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent,
    TodoDetailsComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule
  ],
  providers: [
    TodoService
  ]
})
export class TodoModule {
}
