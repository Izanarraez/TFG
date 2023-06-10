import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../../token/token.service';
import { NavbarComponent, UsersComponent } from 'src/app/modules';
import { UsuariosService } from '../../usuarios/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class UsersGuard implements CanActivate{

  constructor(private token: TokenService, private users : UsuariosService){}
  
  public usu: any = null;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let a = this.token.get();
    const decode = this.token.payload(a);
    var usu : any = this.users.findUsuario(decode.sub).subscribe(
      datos => {
        usu = datos
      }
    );
    return (this.token.loggedIn() && usu.type_user === 'user')?true:false;
  }

  getToken(){
    return this.token.get();
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
