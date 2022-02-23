import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarPatenteComponent } from './editar-patente.component';
import { EditarPatenteRoutingModule } from './editar-patente-rounting';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [EditarPatenteComponent],
    imports: [CommonModule, EditarPatenteRoutingModule, FormsModule],
})
export class EditarPatenteModule { }
