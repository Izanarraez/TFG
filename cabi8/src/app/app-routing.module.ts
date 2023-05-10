import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'home'},
  {path: 'home', loadChildren: ()=> import('./modules').then(m => m.HomeModule)},
  {path: 'landing', loadChildren: ()=> import('./modules').then(m => m.LandingModule)},
  {path: 'productos', loadChildren: ()=> import('./modules').then(m => m.ProductosModule)},
  {path: 'contacto', loadChildren: ()=>import('./modules').then(m => m.ContactoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
