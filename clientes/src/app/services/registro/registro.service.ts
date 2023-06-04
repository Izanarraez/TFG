import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Usuario } from '../usuarios/usuario';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  url_registro = 'http://127.0.0.1:8000/api/registro';

  constructor(private http:HttpClient) { }

  headers = {
    headers : new HttpHeaders({
      "Content-Type" : "application/json"
    })
  }

  getUsuarios() {
    return this.http.get(this.url_registro);
  }

  saveUsuario(usuario: any): Observable<any> {
    return this.http.post<any>(this.url_registro, usuario, this.headers);
  }
}
