import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      // Here we will add our application pages
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
      },

      {
        path: 'patentes',
        loadChildren: () => import('./pages/patente/listar-patentes/patentes.module').then(m => m.PatentesModule)
      },

      {
        path: 'login',
        loadChildren: () => import('./pages/User/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'nuevaPatente', loadChildren: () => import('./pages/patente/nueva-patente/nueva-patente.module').then(m => m.NuevaPatenteModule),
      },
      {
        path: 'editarPatente/:id', loadChildren: () => import('./pages/patente/editar-patente/editar-patente.module').then(m => m.EditarPatenteModule),
      },
      {
        path: 'estacionamiento', loadChildren: () => import('./pages/estacionamiento/estacionamiento.module').then(m => m.EstacionamientoModule),
      },
      {
        path: 'registrarse', loadChildren: () => import('./pages/User/registro/registro.module').then(m => m.RegistroModule)
      },
      {
        path: 'cuentacorriente', loadChildren: () => import('./pages/cuentacorriente/cuentacorriente.module').then(m => m.CuentaCorrienteModule)
      },

    ],
  },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponents = [LayoutComponent, NuevaPatenteComponent, EditarPatenteComponent]
