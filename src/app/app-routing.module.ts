import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VelibComponent} from "./velib/velib.component";
import {DetailComponent} from "./velib/detail/detail.component";

const routes: Routes = [
  { path: 'liste', component: VelibComponent, title: 'Liste des stations Velib'},
  { path: 'detail/:id', component: DetailComponent, title: 'Détail de la station Velib' },
  { path: '', redirectTo: 'liste', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
