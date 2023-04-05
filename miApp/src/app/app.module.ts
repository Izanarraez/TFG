import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AgregarEmpleadoComponent } from './componentes/agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './componentes/editar-empleado/editar-empleado.component';
import { ListarEmpleadoComponent } from './componentes/listar-empleado/listar-empleado.component';
import { LandingComponent } from './componentes/landing/landing.component';
//import { Route } from '@angular/router';

const router: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'landing'},
  {path: 'agregar-empleado', component: AgregarEmpleadoComponent},
  {path: 'listar-empleado', component: ListarEmpleadoComponent},
  {path: 'editar-empleado', component: EditarEmpleadoComponent},
  {path: 'landing', component: LandingComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AgregarEmpleadoComponent,
    EditarEmpleadoComponent,
    ListarEmpleadoComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router)
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
