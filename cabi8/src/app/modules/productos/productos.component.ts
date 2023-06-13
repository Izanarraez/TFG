import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { CarritoService } from 'src/app/services/carrito/carrito.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers: [CarritoService]
})

export class ProductosComponent implements OnInit {
  title = 'Productos';

  listaProductos : any = [];

  constructor(private ProductoService : ProductosService, private CarritoService : CarritoService){}

  ngOnInit(): void {
      return this.getProductos();

  }

  getProductos(){
    this.ProductoService.getProducto().subscribe(respuesta => this.listaProductos = respuesta);
  }

  public anadirItem(producto: any){

    this.CarritoService.set(producto);
    
  }

}