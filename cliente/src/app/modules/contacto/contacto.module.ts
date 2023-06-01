import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './contacto.component';
import { ContactoRoutingModule } from './contacto-routing.module';
import { FooterModule, NavbarModule } from '../Plantillas';



@NgModule({
  declarations: [
    ContactoComponent
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    FooterModule,
    NavbarModule
  ],
  exports:[
    ContactoComponent
  ]
})
export class ContactoModule { }
