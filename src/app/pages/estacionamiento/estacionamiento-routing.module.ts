import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstacionamientoComponent } from './estacionamiento.component';

const routes: Routes = [{ path: '', component: EstacionamientoComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EstacionamientoRoutingModule { }
