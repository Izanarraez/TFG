import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './producto.component';
import { FooterModule, NavbarModule } from '../Plantillas';


@NgModule({
  declarations: [
    ProductoComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    NavbarModule,
    FooterModule
  ],
  exports: [
    ProductoComponent
  ]
})
export class ProductoModule { }
