import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: '404'},
  {path: 'home', loadChildren: ()=> import('./modules').then(m => m.HomeModule)},
  {path: '404', loadChildren: ()=> import('./modules').then(m => m.Error404Module)},
  {path: 'landing', loadChildren: ()=> import('./modules').then(m => m.LandingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
