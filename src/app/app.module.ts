import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VelibModule } from "./velib/velib.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VelibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
