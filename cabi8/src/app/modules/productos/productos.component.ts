import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { HttpClient } from '@angular/common/http';

interface Producto {

  "2":{
    "nombre":"",
    "precio": 0.0,
    "strock": 0,
    "descripción": [],
    "caracteristicas":[],
    "foto":"",
    "tipo":""

  }
}

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent {

  constructor(private ProductosService: ProductosService) {
    this.ProductosService.loadScript();
  }
}
 export class cargarProductos {

  "productos": Producto[];

  constructor(private http: HttpClient) { }
 }