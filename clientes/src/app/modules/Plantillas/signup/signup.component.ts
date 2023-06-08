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
    name: null,
    email: null,
    type_user: 'user',
    password: null,
    photo: null
  };

  constructor(private UsuariosService : UsuariosService, private router: Router){}

  public error: any = [];

  registrarUsuario() {

    console.log(this.usuarios);
    return this.UsuariosService.saveUsuario(this.usuarios).subscribe(
    datos => {
      console.log(datos)
      this.router.navigateByUrl('login')
    },
    error => this.handleError(error));

  }

  handleError(error:any){
    this.error = error.error.error;
  }

} 
