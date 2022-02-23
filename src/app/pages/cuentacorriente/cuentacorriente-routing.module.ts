import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuentacorrienteComponent } from './cuentacorriente.component';

const routes: Routes = [{ path: '', component: CuentacorrienteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuentacorrienteRoutingModule { }
