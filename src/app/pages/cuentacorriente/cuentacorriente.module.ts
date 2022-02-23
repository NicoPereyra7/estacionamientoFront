import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuentacorrienteRoutingModule } from './cuentacorriente-routing.module';
import { CuentacorrienteComponent } from './cuentacorriente.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CuentacorrienteComponent],
  imports: [CommonModule, CuentacorrienteRoutingModule, FormsModule],
})
export class CuentaCorrienteModule { }
