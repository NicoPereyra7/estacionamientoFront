import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevaPatenteComponent } from './nueva-patente.component';
import { NuevaPatenteRoutingModule } from './nueva-patente-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [NuevaPatenteComponent],
    imports: [CommonModule, NuevaPatenteRoutingModule, FormsModule],
})
export class NuevaPatenteModule { }
