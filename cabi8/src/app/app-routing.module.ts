import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'home'},
  {path: 'home', loadChildren: ()=> import('./modules').then(m => m.HomeModule)},
  {path: 'landing', loadChildren: ()=> import('./modules').then(m => m.LandingModule)},
  {path: 'productos', loadChildren: ()=> import('./modules').then(m => m.ProductosModule)},
  {path: 'contacto', loadChildren: ()=>import('./modules').then(m => m.ContactoModule)},
  {path: 'usuarios', loadChildren: ()=>import('./modules').then(m => m.UsuariosModule)},
  {path: 'acceso', loadChildren: ()=>import('./modules/Plantillas').then(m => m.AccesoModule)},
  {path: 'registro', loadChildren: ()=>import('./modules/Plantillas').then(m => m.RegistroModule)},
  {path: 'ajustes', loadChildren: ()=>import('./modules/Plantillas').then(m => m.AjustesModule)},
  {path: 'carrito', loadChildren: ()=>import('./modules').then(m => m.CarritoModule)},
  {path: 'producto', loadChildren: ()=>import('./modules').then(m => m.ProductoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
