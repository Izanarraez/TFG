import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'home'},
  {path: 'home', loadChildren: ()=> import('./modules').then(m => m.HomeModule)},
  {path: 'landing', loadChildren: ()=> import('./modules').then(m => m.LandingModule)},
  {path: 'productos', loadChildren: ()=> import('./modules').then(m => m.ProductosModule)},
  {path: 'producto', loadChildren: ()=>import('./modules').then(m => m.ProductoModule)},
  {path: 'contacto', loadChildren: ()=>import('./modules').then(m => m.ContactoModule)},
  {path: 'usuarios', loadChildren: ()=>import('./modules').then(m => m.UsuariosModule)},
  {path: 'carrito', loadChildren: ()=>import('./modules').then(m => m.CarritoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
