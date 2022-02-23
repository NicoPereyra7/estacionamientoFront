import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarPatenteComponent } from './editar-patente.component';

const routes: Routes = [{ path: '', component: EditarPatenteComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EditarPatenteRoutingModule { }
