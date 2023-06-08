import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChildFn, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';
import { UsuariosService } from '../usuarios/usuarios.service';
import { AjustesComponent, NavbarComponent } from 'src/app/modules';

@Injectable({
  providedIn: 'root'
})

export class YloginService implements CanActivate{

  constructor(private token: TokenService, private users: UsuariosService, private navbar: NavbarComponent) { }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean | Observable<boolean>{
    return this.token.loggedIn();
  }
}
