import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardsGuard } from './services/guards/guards.guard';
import { UsersGuard } from './services/guards/users/users.guard';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'home'},
  {path: 'home', loadChildren: ()=> import('./modules').then(m => m.HomeModule)},
  {path: 'products', loadChildren: ()=> import('./modules').then(m => m.ProductsModule)},
  {path: 'contact', loadChildren: ()=>import('./modules').then(m => m.ContactModule)},
  {path: 'users', loadChildren: ()=>import('./modules').then(m => m.UsersModule), },
  {path: 'login', loadChildren: ()=>import('./modules/Plantillas').then(m => m.LoginModule)},
  {path: 'signup', loadChildren: ()=>import('./modules/Plantillas').then(m => m.SignupModule)},
  {path: 'ajustes', loadChildren: ()=>import('./modules/Plantillas').then(m => m.AjustesModule)},
  {path: 'carrito', loadChildren: ()=>import('./modules').then(m => m.CarritoModule),canActivate: [UsersGuard]},
  {path: 'product', loadChildren: ()=>import('./modules').then(m => m.ProductModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
