import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccesoComponent } from './acceso.component';
import { AccesoRoutingModule } from './acceso-routing.module';
import { NavbarModule } from '../navbar';
import { FooterModule } from '../footer';



@NgModule({
  declarations: [
    AccesoComponent
  ],
  imports: [
    CommonModule,
    AccesoRoutingModule,
    NavbarModule,
    FooterModule
  ],
  exports: [
    AccesoComponent
  ]
})
export class AccesoModule { }
