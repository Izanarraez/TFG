import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccederService {

  private login_laravel = 'http://127.0.0.1:8000/api/acceder';

  constructor(private http : HttpClient) { }

  acceder(correo: string, contraseña: string){
      const contenido = {correo, contraseña}; 
      this.http.post(this.login_laravel, contenido);
  }
}
