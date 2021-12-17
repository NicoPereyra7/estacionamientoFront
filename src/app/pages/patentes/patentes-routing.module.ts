import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatentesComponent } from './patentes.component';

const routes: Routes = [{ path: '', component: PatentesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatentesRoutingModule { }
