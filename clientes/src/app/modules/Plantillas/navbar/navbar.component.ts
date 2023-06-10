import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenService } from 'src/app/services/token/token.service';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService, private users : UsuariosService, private token : TokenService, private router : Router) {}

  public loggedIn: boolean = false;

  public usu: any = null;

  ngOnInit(): void {
    this.encontrar();
    this.auth.authStatus.subscribe(
      value => {
        this.loggedIn = value;
      }
    );
  }

  logout(event: MouseEvent){
    event.preventDefault();
    this.token.remove();
    this.auth.changeStatus(false);
    this.router.navigateByUrl('login');
  }

  isAdmin(){
    if(this.loggedIn && this.usu.type_user === 'admin'){
      return true;
    }
    else{
      return false;
    }
  }

  isUser(){
    if(this.loggedIn && this.usu.type_user === 'user'){
      return true;
    }
    else{
      return false;
    }
  }

  getToken(){
    return this.token.get();
  }

  type(){
    return this.usu.type_user;
  }

  encontrar(){
    const decode = this.token.payload(this.getToken());
    this.usu = this.users.findUsuario(decode.sub).subscribe(
      datos => {
        this.usu = datos
      }
    );
  }
}
