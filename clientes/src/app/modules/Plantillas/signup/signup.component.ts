import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  usuarios = {
    name: '',
    email: '',
    type_user: 'usuario',
    password: '',
    photo: ''
  };

  constructor(private UsuariosService : UsuariosService, private router: Router){}

  registrarUsuario(name:string,email:string,password:string,photo:string) {
    this.usuarios = {
        name: name,
        email: email,
        type_user: 'user',
        password: password,
        photo: photo
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
