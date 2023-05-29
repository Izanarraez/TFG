import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearUsuariosRoutingModule } from './crear-usuarios-routing.module';
import { CrearUsuariosComponent } from './crear-usuarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearUsuariosComponent
  ],
  imports: [
    CommonModule,
    CrearUsuariosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CrearUsuariosComponent
  ]
})
export class CrearUsuariosModule { }
