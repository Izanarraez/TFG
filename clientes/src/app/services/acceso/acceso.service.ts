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

  public loadScript() {
    console.log('preparing to load...')
    let node = document.createElement('script');
    node.src = 'assets/js/form_signup.js';
    node.type = 'text/javascript';
    node.async = true;
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
