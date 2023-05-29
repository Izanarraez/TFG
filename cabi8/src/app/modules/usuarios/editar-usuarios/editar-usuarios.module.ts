import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarUsuariosRoutingModule } from './editar-usuarios-routing.module';
import { EditarUsuariosComponent } from './editar-usuarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    EditarUsuariosComponent
  ],
  imports: [
    CommonModule,
    EditarUsuariosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    EditarUsuariosComponent
  ]
})
export class EditarUsuariosModule { }
