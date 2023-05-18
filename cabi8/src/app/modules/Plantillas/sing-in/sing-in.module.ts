import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingInRoutingModule } from './sing-in-routing.module';
import { SingInComponent } from './sing-in.component';



@NgModule({
  declarations: [
    SingInComponent
  ],
  imports: [
    CommonModule,
    SingInRoutingModule
  ],
  exports: [
    SingInComponent
  ]
})
export class SingInModule { }
