import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    form = {
      email: null,
      password: null,
    };

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
