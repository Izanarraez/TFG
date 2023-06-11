import { Component, OnInit } from '@angular/core';

import Producto from 'src/app/json/products.json';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})

export class ProductoComponent implements OnInit{
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