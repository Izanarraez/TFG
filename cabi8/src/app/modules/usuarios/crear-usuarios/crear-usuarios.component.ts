import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Usuario } from 'src/app/services/usuarios/usuario';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-crear-usuarios',
  templateUrl: './crear-usuarios.component.html',
  styleUrls: ['./crear-usuarios.component.css']
})
export class CrearUsuariosComponent{

  nombre!:string;
  correo!:string;
  contrase!:string;
  tipo_usuarios = 1;
  foto!:string | null;

  constructor(private UsuariosService : UsuariosService, private router: Router){}

  usuario : Usuario = {id : 0, nombre: this.nombre, correo: this.correo, tipo_usuario: this.tipo_usuarios, contraseña: this.contrase, foto : this.foto};

  submit(){
    this.UsuariosService.createUsuario(this.usuario).subscribe(res => {
         console.log('Person created successfully!');
         this.router.navigateByUrl('usuarios');
    })
  }
}
