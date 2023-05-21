import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';


@NgModule({
  declarations: [
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    UsuariosService
  ],
  exports: [
    UsuarioComponent
  ]
})
export class UsuarioModule { }
