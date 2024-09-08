import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { VelibComponent } from './velib.component';
import { RechercheComponent } from './recherche/recherche.component';
import { ListeComponent } from './liste/liste.component';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    VelibComponent,
    RechercheComponent,
    ListeComponent,
    DetailComponent
  ],
  exports: [
    VelibComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class VelibModule { }
