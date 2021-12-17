import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';
import { NuevaPatenteComponent } from './pages/nueva-patente/nueva-patente.component';
import { EditarPatenteComponent } from './pages/editar-patente/editar-patente.component';

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
        loadChildren: () => import('./pages/patentes/patentes.module').then(m => m.PatentesModule) 
      },

      { 
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) 
      },
    ],
  },
  {
    path: 'patentes/nuevaPatente',component:NuevaPatenteComponent
  },
  {
    path: 'patentes/editarPatente', component:EditarPatenteComponent
  }
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponents = [LayoutComponent, NuevaPatenteComponent, EditarPatenteComponent]
