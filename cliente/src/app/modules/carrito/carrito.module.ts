import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarritoRoutingModule } from './carrito-routing.module';
import { CarritoComponent } from './carrito.component';
import { FooterModule, NavbarModule } from '../Plantillas';


@NgModule({
  declarations: [
    CarritoComponent
  ],
  imports: [
    CommonModule,
    CarritoRoutingModule,
    NavbarModule,
    FooterModule
  ],
  exports: [
    CarritoComponent
  ]
})
export class CarritoModule { }
