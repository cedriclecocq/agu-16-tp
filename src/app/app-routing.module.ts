import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VelibComponent} from "./velib/velib.component";
import {DetailComponent} from "./velib/detail/detail.component";

const routes: Routes = [
  { path: 'liste', component: VelibComponent, title: 'Liste des stations Velib'},
  { path: 'detail/:id', component: DetailComponent, title: 'Détail de la station Velib' },
  { path: '', redirectTo: 'liste', pathMatch: 'full' },
  { path: 'autolib', loadChildren: () => import('./autolib/autolib.module').then(m => m.AutolibModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
