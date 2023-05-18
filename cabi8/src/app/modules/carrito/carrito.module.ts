import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoComponent } from './carrito.component';
import { CarritoRoutingModule } from './carrito-routing.module';
import { FooterModule, NavbarModule } from '../Plantillas';

import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CarritoComponent
  ],
  imports: [
    CommonModule,
    CarritoRoutingModule,
    FooterModule,
    NavbarModule,
    MatIconModule,
    HttpClientModule
  ],
  exports: [
    CarritoComponent
  ]
})
export class CarritoModule { }
