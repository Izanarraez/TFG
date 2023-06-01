import { Component } from '@angular/core';
import { RegistroService } from 'src/app/services/registro/registro.service';
import { Usuario } from 'src/app/services/usuarios/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent{

    nombre!: string;
    correo!: string;
    contrasena!: string;
    foto! : string;

    usuario: Usuario[] = [];

    currentUsuario: Usuario = { id: 0, nombre: this.nombre, correo: this.correo, tipo_usuario: 1, foto: this.foto};

    constructor(private RegistroService : RegistroService){}

    /*registro(): void{
      this.RegistroService.registro(this.nombre,this.correo,this.contrase,this.foto);
    }*/
  
    getUsuarios(): void {
      this.RegistroService.getUsuarios()
        .subscribe(usuarios => this.usuario = usuarios);
    }

    createUsuario(): void {
      this.RegistroService.createUsuario(this.currentUsuario)
        .subscribe(us => {
          this.usuario.push(us);
          this.currentUsuario = { id: 0, nombre:  this.nombre, correo: this.correo, tipo_usuario: 1, foto: this.foto};
        });
    }
}
