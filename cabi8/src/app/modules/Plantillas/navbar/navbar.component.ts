import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  constructor(private ProductosService : ProductosService){}
  ngOnInit(): void {
    this.getProductos();
  }

  resultados: any;
  arrayProductos: any;

  public buscarProductos(){

    const nombreProducto = (<HTMLInputElement>document.getElementById("buscarProducto")).value;

    if(nombreProducto == "" || nombreProducto == " "){

      console.log("El campo no puede estar vacío!");

    }else{

      this.arrayProductos.forEach(producto => {

        if(producto.nombre == nombreProducto){

          console.log("Producto encontrado!");

          let productoNombre = (<HTMLInputElement>document.createElement("p"));

          productoNombre.textContent = "¡Producto encontrado! --> " + producto.nombre;
          productoNombre.className = "col-12 text-center m-5";

          <HTMLInputElement>document.getElementById("divInfo")?.appendChild(productoNombre);

        }else{

          console.log("Error, el producto está agotado o no está incluido en la BBDD");

          let productoNombre = (<HTMLInputElement>document.createElement("p"));

          productoNombre.textContent = "Este producto no está disponible";
          productoNombre.className = "col-12 text-center m-5";

          <HTMLInputElement>document.getElementById("divInfo")?.appendChild(productoNombre);



        }
      });

    }

  }

  getProductos(){

    this.ProductosService.getProducto().subscribe(respuesta => this.arrayProductos = respuesta);

  }




}

