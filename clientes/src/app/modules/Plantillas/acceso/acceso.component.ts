import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent implements OnInit{

    /*correo!: string;
    contrasena!: string;*/

    form = {
      correo: '',
      contrasena: '',
    };

    user !: any;
    isAdmin !: any;

  constructor(private UsuariosService : UsuariosService){}
  
  ngOnInit(): void {
  }

  acceso(): void{
    this.UsuariosService.autentidicateUsuario(this.form).
    subscribe(datos => {
      console.log(datos)
    })
  }
}
