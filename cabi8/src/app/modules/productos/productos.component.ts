import { Component } from '@angular/core';
import { RestService } from './rest.service';

import Producto from 'src/app/json/products.json';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent {
  title = 'Productos';

  Productos:any = Producto;

  ngOnInit(): void{
    this.comprobarOferta();
  }

  public comprobarOferta(){

    this.Productos.forEach(producto => {

      if(producto.ofertas === true){

        let divProducto = document.getElementById("infoProducto") as HTMLElement;

        let divOferta = document.createElement("div");
        let oferta = document.createElement("p");

        oferta.textContent = "¡Este producto está de oferta!";

        oferta.appendChild(divOferta);

        divOferta.appendChild(divProducto);


        console.log(producto.nombre + " está de oferta");
      }

    });

    

  }
    


}