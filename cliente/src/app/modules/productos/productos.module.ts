import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos.component';
import { FooterModule, NavbarModule } from '../Plantillas';


@NgModule({
  declarations: [
    ProductosComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    NavbarModule,
    FooterModule,
  ],
  exports:[
    ProductosComponent
  ]
})
export class ProductosModule { }
