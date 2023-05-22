import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/modules/usuarios/usuario';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  url_laravel = 'http://127.0.0.1:8000/api/usuarios/';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url_laravel);
  }

  getUsuario(id: number): Observable<Usuario> {
    const url = `${this.url_laravel}/${id}`;
    return this.http.get<Usuario>(url);
  }

  createUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url_laravel, usuario);
  }

  updateUsuario(id: number, usuario: Usuario): Observable<Usuario> {
    const url = `${this.url_laravel}/${id}`;
    return this.http.put<Usuario>(url, usuario);
  }

  deleteUsuario(id: number): Observable<void> {
    const url = `${this.url_laravel}/${id}`;
    return this.http.delete<void>(url);
  }

  /*getUsuario(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.url_laravel}`);
  }

  crear(usuario: any): Observable<Usuario> {
    return this.http.post<Usuario>(this.url_laravel, JSON.stringify(usuario),this.httpOptions)
  }

  encontrar(id : any): Observable<Usuario> {
    return this.http.get<Usuario>(this.url_laravel + id)
  }
 
  actualizar(id : any, usuario : any): Observable<Usuario> {
    return this.http.put<Usuario>(this.url_laravel + id, JSON.stringify(usuario),this.httpOptions)
  }
 
  borrar(id : any){
    return this.http.delete<Usuario>(this.url_laravel + id,this.httpOptions)
  }*/
 
}
