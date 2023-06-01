import { Component, OnInit } from '@angular/core';
import { RegistroService } from 'src/app/services/registro/registro.service';
import { Usuario } from 'src/app/services/usuarios/usuario';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent{

    /*nombre!: string;
    correo!: string;
    contrasena!: string;
    foto! : string;

    usuario: Usuario[] = [];

    currentUsuario: Usuario = { id: 0, nombre: this.nombre, correo: this.correo, tipo_usuario: 1,contrasena: this.contrasena, foto: this.foto};

    constructor(private RegistroService : RegistroService){}*/

    /*registro(): void{
      this.RegistroService.registro(this.nombre,this.correo,this.contrase,this.foto);
    }*/
  
    /*getUsuarios(): void {
      this.RegistroService.getUsuarios()
        .subscribe(usuarios => this.usuario = usuarios);
    }

    createUsuario(): void {
      this.RegistroService.createUsuario(this.currentUsuario)
        .subscribe(us => {
          this.usuario.push(us);
        });
    }*/

  usuario: any = {};
  tipo_usuario !: 1;
  fotoSeleccionada: File | null = null;

  constructor(private UsuariosService: UsuariosService) { }

  onSubmit(): void {
    const formData = new FormData();
    formData.append('nombre', this.usuario.nombre);
    formData.append('correo', this.usuario.correo);
    formData.append('contrasena', this.usuario.contrasena);
    if (this.fotoSeleccionada) {
      formData.append('foto', this.fotoSeleccionada, this.fotoSeleccionada.name);
    }

    this.UsuariosService.createUsuario(formData);
  }

  onFileSelected(event: any): void {
    this.fotoSeleccionada = event.target.files[0];
  }
}
