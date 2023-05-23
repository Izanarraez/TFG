import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios.component';
import { UsuariosRoutingModule } from './usuario-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsuariosRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    UsuariosComponent
  ]
})

export class UsuariosModule { }
