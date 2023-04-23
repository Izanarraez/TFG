import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { FooterRoutingModule } from './footer-routing.module';

import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    FooterRoutingModule,
    MatIconModule,
    HttpClientModule
  ],
  exports:[
    FooterComponent
  ]
})
export class FooterModule { }
