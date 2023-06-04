import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/services/registro/registro.service';
import { Usuario } from 'src/app/services/usuarios/usuario';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent{

  usuarios = {
    nombre: '',
    correo: '',
    tipo_usuario: 'usuario',
    contrasena: '',
    foto: ''
  };

  constructor(private UsuariosService : UsuariosService, private router: Router){}

  registrarUsuario(nombre:string,correo:string,contrasena:string,foto:string) {
    this.usuarios = {
        nombre: nombre,
        correo: correo,
        tipo_usuario: 'usuario',
        contrasena: contrasena,
        foto: foto
    }
    console.log(this.usuarios);
    this.UsuariosService.saveUsuario(this.usuarios as any).subscribe(datos => {
      console.log('Person created successfully!');
      this.router.navigateByUrl('home');
    });
    console.log(this.usuarios);
  }

  /*onFotoSeleccionada(event: any) {
    this.usuario.foto = event.target.files[0];
  }*/

}
