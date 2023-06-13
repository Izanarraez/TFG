import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuariosRoutingModule } from './modules/usuarios/usuario-routing.module';
import { ProductoComponent } from './modules/producto/producto/producto.component';
import { CarritoService } from "./services/carrito/carrito.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    UsuariosRoutingModule
  ],
  exports:[],
  providers: [CarritoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
