import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AgregarEmpleadoComponent } from './componentes/agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './componentes/editar-empleado/editar-empleado.component';
import { ListarEmpleadoComponent } from './componentes/listar-empleado/listar-empleado.component';
import { LandingComponent } from './componentes/landing/landing.component';
import { Error404Component } from './componentes/error404/error404.component';
//import { Route } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'error404'},
  {path: 'home', loadChildren: ()=> import('./modules').then(m => m.HomeModule)},
  {path: 'agregar-empleado', component: AgregarEmpleadoComponent},
  {path: 'listar-empleado', component: ListarEmpleadoComponent},
  {path: 'editar-empleado', component: EditarEmpleadoComponent},
  {path: 'landing', component: LandingComponent},
  {path: 'error404', component: Error404Component},
];

@NgModule({
  declarations: [
    AppComponent,
    AgregarEmpleadoComponent,
    EditarEmpleadoComponent,
    ListarEmpleadoComponent,
    LandingComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
