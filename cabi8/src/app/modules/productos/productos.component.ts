import { Component } from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent {
  title = 'Productos';

  public listaProductos:any = [];

  constructor(private RestService:RestService) { }

  ngOnInit(): void{
    this.loadData();
  }

  /**
   * loadData
   * Método que muestra los productos de la galería
   */

  public loadData() {
    
    this.RestService.get('http://localhost:3000/Productos')
    .subscribe(response => {
      this.listaProductos = response;
      console.log(this.listaProductos[1].nombre);
    })

  }
}