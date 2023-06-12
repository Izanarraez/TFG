import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { RestService } from './rest.service';

import Producto from 'src/app/json/products.json';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {
  title = 'Productos';

  listaProductos : any = [];

  constructor(private ProductoService : ProductosService){}

  ngOnInit(): void {
      return this.getProductos();
  }

  getProductos(){
    this.ProductoService.getProducto().subscribe(respuesta => this.listaProductos = respuesta);
  }


    


}

/*import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit{

  listaProductos : any = [];

  constructor(private ProductoService : ProductoService){}

  ngOnInit(): void {
      return this.getProductos();
  }

  getProductos(){
    this.ProductoService.getProducto().subscribe(respuesta => this.listaProductos = respuesta);
  }

  
}*/ 