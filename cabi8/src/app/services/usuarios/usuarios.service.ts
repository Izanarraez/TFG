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

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
 
  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url_laravel)
  }

  findUsuario(id: any): Observable<Usuario> {
    return this.http.get<Usuario>(this.url_laravel + id)
  }

  createUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url_laravel, JSON.stringify(usuario), this.httpOptions);
  }

  updateUsuario(id: number, usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(this.url_laravel+id, JSON.stringify(usuario), this.httpOptions);
  }

  deleteUsuario(id: number): Observable<void> {
    return this.http.delete<void>(this.url_laravel+id, this.httpOptions);
  }
}
