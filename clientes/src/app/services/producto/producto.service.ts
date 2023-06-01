import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url_json = ' http://localhost:3000/motores';

  constructor(private http: HttpClient) { }

  lista_productos : any = [];
  
  getProducto(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url_json);
  }
 

  tipProd(id : number){
    let resultado ="";
    switch (id) {
        case 0: 
        resultado = "motores";
            break;
        case 1: 
        resultado = "frenado";
            break;
        case 2:
        resultado = "embrague";
            break;
        case 3:
        resultado = "escape";
            break;
        case 4:
        resultado = "ruedas"; 
            break;
        case 5:
        resultado = "carroceria"; 
            break;
        case 6:
        resultado = "accesorios"; 
            break;
        case 7:
        resultado = "climatizacion";
            break;
    }
    return resultado;
}

}
