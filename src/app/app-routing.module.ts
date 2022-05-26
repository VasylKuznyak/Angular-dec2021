import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {CarsComponent, LoginComponent, RegisterComponent} from "./components";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'cars', component: CarsComponent},
    ]
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
