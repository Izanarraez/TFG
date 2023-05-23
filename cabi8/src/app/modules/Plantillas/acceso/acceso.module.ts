import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccesoComponent } from './acceso.component';
import { AccesoRoutingModule } from './acceso-routing.module';



@NgModule({
  declarations: [
    AccesoComponent
  ],
  imports: [
    CommonModule,
    AccesoRoutingModule
  ],
  exports: [
    AccesoComponent
  ]
})
export class AccesoModule { }
