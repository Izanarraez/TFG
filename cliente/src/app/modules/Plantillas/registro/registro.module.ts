import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro.component';
import { RegistroRoutingModule } from './registro-routing.module';
import { NavbarModule } from '../navbar';
import { FooterModule } from '../footer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    NavbarModule,
    FooterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RegistroComponent
  ]
})
export class RegistroModule { }
