import { Component, OnInit } from '@angular/core';
import { AccederService } from 'src/app/services/acceder/acceder.service';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent{

    correo!: string;
    contraseña!: string;

  constructor(private AccederService : AccederService){}

  acceso(): void{
    this.AccederService.acceder(this.correo,this.contraseña);
  }
}
