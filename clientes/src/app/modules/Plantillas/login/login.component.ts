import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { TokenService } from 'src/app/services/token/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
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

  constructor(private UsuariosService : UsuariosService, private TokenService: TokenService, private router: Router, private auth: AuthService){}
  
  ngOnInit(): void {
  }

  public error: any = [];
  
  acceso(){
    console.log(this.form);
    return this.UsuariosService.autentidicateUsuario(this.form).
    subscribe(
      datos => this.handleResponse(datos),
      error => this.handleError(error),
    );
  }

  handleResponse(data:any){
    console.log(data.access_token);
    this.TokenService.handle(data.access_token);
    this.auth.changeStatus(true);
    this.router.navigateByUrl('home');
  }

  handleError(error:any){
    this.error = error.error.error;
  }
}
