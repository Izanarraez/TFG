import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from 'src/app/services/usuarios/usuario';
import { Observable, catchError } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  private url_usuarios = 'http://127.0.0.1:8000/api/users/';

  private url_registro = 'http://127.0.0.1:8000/api/signup';

  /*private url_acceso = '';*/

  constructor(private http: HttpClient) {}

  
  headers = {
    headers : new HttpHeaders({
      "Content-Type" : "application/json"
    })
  }
  
 
  getUsuarios(){
    return this.http.get<any>(this.url_usuarios)
  }

  findUsuario(id: any){
    return this.http.get(this.url_usuarios+id)
  }

  createUsuario(usuario: any): Observable<any>{
    return this.http.post<any>(this.url_usuarios, usuario, this.headers)
  }

  updateUsuario(id: number, usuario: any){
    return this.http.put(this.url_usuarios+id, usuario, this.headers)
  }

  deleteUsuario(id: number): Observable<any>{
    return this.http.delete<any>(this.url_usuarios+id, this.headers)
  }

  saveUsuario(usuario: any): Observable<any> {
    return this.http.post<any>(this.url_registro, usuario, this.headers);
  }

  autentidicateUsuario(usuario:any): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/login',usuario, this.headers);
  }

  ascendUsuarios(id: number, user : any){
    return this.http.put(this.url_usuarios+id, user, this.headers);
  }

}
