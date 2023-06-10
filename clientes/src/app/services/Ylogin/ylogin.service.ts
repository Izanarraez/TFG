import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChildFn, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})

export class YloginService implements CanActivate{

  constructor(private token: TokenService) { }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean | Observable<boolean>{
    return true;
  }
}
