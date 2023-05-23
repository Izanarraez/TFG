import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios.component';
import { UsuariosRoutingModule } from './usuario-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';



@NgModule({
  declarations: [
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UsuariosService
  ],
  exports: [
    UsuariosComponent
  ]
})

export class UsuariosModule { }
