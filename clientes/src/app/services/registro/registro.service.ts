import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Usuario } from '../usuarios/usuario';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  url_registro = 'http://127.0.0.1:8000/api/registro';

  url_usuarios = 'http://127.0.0.1:8000/api/usuarios';

  constructor(private http:HttpClient) { }

  registro(nombre:string,correo:string,contraseña:string,foto:string | null){
    this.http.post(this.url_registro,{nombre,correo,contraseña,foto});
  }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url_usuarios);
  }

  createUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url_usuarios, usuario);
  }
}
