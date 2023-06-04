import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { NavbarModule } from '../navbar';
import { FooterModule } from '../footer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    NavbarModule,
    FooterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SignupComponent
  ]
})
export class SignupModule { }
