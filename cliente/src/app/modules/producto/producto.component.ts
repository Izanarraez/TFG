import { Component, OnInit } from '@angular/core';
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

  
}
