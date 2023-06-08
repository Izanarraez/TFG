import { Injectable } from '@angular/core';
import { UsuariosService } from '../usuarios/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private url_login = 'http://127.0.0.1:8000/api/login';

  constructor(private users: UsuariosService) { }

  handle(token:any){
    this.set(token);
    console.log(this.isValid());
  }

  set(token:any){
    return localStorage.setItem('token',token);
  }

  get(){
    return localStorage.getItem('token');
  }

  remove(){
    console.log('borrado');
    return localStorage.removeItem('token');
  }

  isValid(){
    const token = this.get();

    if(token){
      const pld = this.payload(token);
      if(pld){
        return (pld.iss === this.url_login)?true:false;
      }
    }
    return false;
  }

  payload(token:any){
    const pld = token.split('.')[1];
    return this.decode(pld);
  }

  decode(pld:any){
    return JSON.parse(atob(pld));
  }

  loggedIn(){
    return this.isValid();
  }

}


