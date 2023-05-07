import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NavbarRoutingModule } from './navbar-routing.module';

import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    MatIconModule,
    HttpClientModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
