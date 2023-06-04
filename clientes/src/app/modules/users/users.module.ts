import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { FooterModule, NavbarModule } from '../Plantillas';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NavbarModule,
    FooterModule
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
