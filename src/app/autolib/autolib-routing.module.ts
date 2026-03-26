import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutolibComponent } from './autolib.component';

const routes: Routes = [{ path: '', component: AutolibComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutolibRoutingModule { }
