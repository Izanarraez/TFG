import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productos } from "./productos";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public loadScript() {
    console.log('preparing to load...')
    let node = document.createElement('script');
    node.src = 'assets/js/productos.js';
    node.type = 'text/javascript';
    node.async = true;
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  url_json = 'http://localhost:3000/Productos';

  constructor(private http: HttpClient) { }

  lista_productos : any = [];
  
  getProducto(): Observable<Productos[]>{
    return this.http.get<Productos[]>(this.url_json);
  }
}
