import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstacionamientoComponent } from './estacionamiento.component';
import { EstacionamientoRoutingModule } from './estacionamiento-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EstacionamientoComponent],
  imports: [CommonModule, EstacionamientoRoutingModule, FormsModule],
})
export class EstacionamientoModule { }
