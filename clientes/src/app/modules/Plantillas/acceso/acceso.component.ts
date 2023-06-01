import { Component, OnInit } from '@angular/core';
import { AccesoService } from 'src/app/services/acceso/acceso.service';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent{

    correo!: string;
    contrasena!: string;

  constructor(private AccesoService : AccesoService){}

  acceso(): void{
    this.AccesoService.acceso(this.correo,this.contrasena);
  }
}
