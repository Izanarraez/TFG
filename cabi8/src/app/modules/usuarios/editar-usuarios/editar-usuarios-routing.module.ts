import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarUsuariosComponent } from './editar-usuarios.component';
import { UsuariosComponent } from '../usuarios.component';

const routes: Routes = [
    {path: '', component: EditarUsuariosComponent},
    /*{path: 'usuarios', component: UsuariosComponent}*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarUsuariosRoutingModule { }
