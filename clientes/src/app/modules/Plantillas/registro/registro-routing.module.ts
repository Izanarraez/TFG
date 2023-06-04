import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro.component';
import { HomeComponent } from '../../home';

const routes: Routes = [
  {path: '', component: RegistroComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroRoutingModule { }
