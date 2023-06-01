import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from 'src/app/services/usuarios/usuario';
import { Observable, catchError } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  private url_laravel = 'http://127.0.0.1:8000/api/usuarios/';

  constructor(private http: HttpClient) {}

  
    headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
  
 
  getUsuarios(): Observable<Usuario> {
    return this.http.get<Usuario>(this.url_laravel)
  }

  /*findUsuario(id: any): Observable<Usuario> {
    return this.http.get<Usuario>(this.url_laravel + id)
  }*/

  createUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url_laravel, usuario, {headers:this.headers})
  }

  updateUsuario(id: number, usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(this.url_laravel+id, usuario, {headers: this.headers})
  }

  deleteUsuario(id: number){
    return this.http.delete(this.url_laravel+id, {headers: this.headers})
  }

  ascendUsuarios(id: number, tipo_usuario : number){
    const body = { tipo_usuario: tipo_usuario };
    return this.http.put(this.url_laravel+id, body, {headers: this.headers});
  }

}
