import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS} from "@angular/common/http";

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {AuthComponent, CarsComponent, HeaderComponent, LoginComponent, RegisterComponent} from './components';
import {MainInterceptor} from "./main.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    AuthComponent,
    HeaderComponent,
    CarsComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: MainInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
