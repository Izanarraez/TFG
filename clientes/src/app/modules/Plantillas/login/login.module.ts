import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { NavbarModule } from '../navbar';
import { FooterModule } from '../footer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    NavbarModule,
    FooterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
