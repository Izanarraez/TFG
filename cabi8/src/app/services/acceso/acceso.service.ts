import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccesoService {

  url_acceso = "http://127.0.0.1:8000/api/acceso";

  constructor(private http: HttpClient) { }

  acceso(correo: string, contraseña: string) {
    return this.http.post(this.url_acceso,{correo,contraseña});
  }
}
