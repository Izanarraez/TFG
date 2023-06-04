import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { FooterModule, NavbarModule } from '../Plantillas';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    NavbarModule,
    FooterModule
  ],
  exports:[
    ContactComponent
  ]
})
export class ContactModule { }
