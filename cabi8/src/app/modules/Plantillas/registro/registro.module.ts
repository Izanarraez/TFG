import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro.component';
import { RegistroRoutingModule } from './registro-routing.module';
import { NavbarModule } from '../navbar';
import { FooterModule } from '../footer';



@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    NavbarModule,
    FooterModule
  ],
  exports: [
    RegistroComponent
  ]
})
export class RegistroModule { }
