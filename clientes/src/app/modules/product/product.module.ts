import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { FooterModule, NavbarModule } from '../Plantillas';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NavbarModule,
    FooterModule
  ],
  exports:[
    ProductComponent
  ]
})
export class ProductModule { }
