import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios.component';
import { EditarUsuariosComponent } from './editar-usuarios';
import { CrearUsuariosComponent } from './crear-usuarios';

const routes: Routes = [
  { path: '', component: UsuariosComponent },
  { path: 'editar/:idUsuario', component: EditarUsuariosComponent },
  { path: 'crear', component: CrearUsuariosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }