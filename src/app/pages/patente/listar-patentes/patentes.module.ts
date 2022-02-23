import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatentesRoutingModule } from './patentes-routing.module';
import { PatentesComponent } from './patentes.component';

@NgModule({
  declarations: [PatentesComponent],
  imports: [CommonModule, PatentesRoutingModule],
})
export class PatentesModule { }
