import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { UsuariosRoutingModule } from './usuario-routing.module';
import { FooterModule, NavbarModule } from '../Plantillas';



@NgModule({
  declarations: [
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsuariosRoutingModule,
    NavbarModule,
    FooterModule
  ],
  providers: [
    UsuariosService
  ],
  exports: [
    UsuariosComponent
  ]
})

export class UsuariosModule {}
