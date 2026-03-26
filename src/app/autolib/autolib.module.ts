import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutolibRoutingModule } from './autolib-routing.module';
import { AutolibComponent } from './autolib.component';


@NgModule({
  declarations: [
    AutolibComponent
  ],
  imports: [
    CommonModule,
    AutolibRoutingModule
  ]
})
export class AutolibModule { }
