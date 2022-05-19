import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import {TodoDetailsComponent, TodosComponent} from "./components";

const routes: Routes = [
  {
    path: '', component: TodosComponent, children: [
      {path: ':id', component: TodoDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class TodoRoutingModule {
}
