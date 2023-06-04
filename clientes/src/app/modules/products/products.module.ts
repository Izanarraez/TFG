import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { FooterModule, NavbarModule } from '../Plantillas';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NavbarModule,
    FooterModule
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
