import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjustesRoutingModule } from './ajustes-routing.module';
import { AjustesComponent } from './ajustes.component';
import { NavbarModule } from '../navbar';
import { FooterModule } from '../footer';


@NgModule({
  declarations: [
    AjustesComponent
  ],
  imports: [
    CommonModule,
    AjustesRoutingModule,
    NavbarModule,
    FooterModule
  ],
  exports: [
    AjustesComponent
  ]
})
export class AjustesModule { }
