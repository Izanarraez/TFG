import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { AgregarEmpleadoComponent } from './componentes/agregar-empleado/agregar-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentesComponent,
    AgregarEmpleadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
