import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";
import {AppRoutingModule} from './app-routing.module';
import {MainLayoutComponent} from './layouts';
import {HeaderComponent} from './components';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
