import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Usuario } from 'src/app/services/usuarios/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  url_laravel = 'http://127.0.0.1:8000/api/usuarios';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url_laravel);
  }

  /*getUsuario(id: number): Observable<Usuario> {
    const url = `${this.url_laravel}/${id}`;
    return this.http.get<Usuario>(url);
  }*/

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
}
