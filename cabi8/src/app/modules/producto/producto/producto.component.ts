import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit{

  listaProductos : any = [];
  codigoProducto: any;
  nombre : any;

  constructor(private ProductoService : ProductoService){}

  ngOnInit(): void {
      return this.getProductos();
  }

  getProductos(){
    this.ProductoService.getProducto().subscribe(respuesta => this.listaProductos = respuesta);
  }

  setSelectedItem() {
    this.codigoProducto = document.getElementById('codigo');
    //const codigo = HTMLElement = this.codigoProducto!;
    console.log(this.codigoProducto.textContent);
    return this.codigoProducto.textContent;
  }

  deleteProductos(){

    this.ProductoService.deleteProducto(this.setSelectedItem())
    .subscribe(
      () => {
        console.log('Elemento borrado exitosamente');
        window.location.reload();
      },
      error => {
        console.log('Error al borrar el elemento', error);
      }
    );
  }

  editProductos(){

    const nombre = (<HTMLInputElement>document.getElementById("editNombre")).value;
    const codigo = (<HTMLInputElement>document.getElementById("editCodigo")).value;
    const caracteristicasProducto = (<HTMLInputElement>document.getElementById("editCaracteristicas")).value;
    const precioProducto = (<HTMLInputElement>document.getElementById("editPrecio")).value;
    const stockProducto = (<HTMLInputElement>document.getElementById("editStock")).value;
    const tipoProducto = (<HTMLInputElement>document.getElementById("editTipo")).value;
    const fotoProducto = (<HTMLInputElement>document.getElementById("editFoto")).value;


    const updatedData = { 
      id: this.setSelectedItem(),
      codigo: codigo,
      nombre: nombre,
      precio: precioProducto,
      stock: stockProducto,
      tipo: tipoProducto,
      caracteristicas : caracteristicasProducto,
      foto: fotoProducto
     };

    this.ProductoService.editProductos(this.setSelectedItem(), updatedData)
      .subscribe(
        () => {
          console.log('Elemento editado exitosamente');
          window.location.reload();
        },
        error => {
          console.log('Error al editar el elemento', error);
        }
      );


  }

  anadirProductos(){

    const nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    const codigo = (<HTMLInputElement>document.getElementById("codigoProducto")).value;
    const caracteristicasProducto = (<HTMLInputElement>document.getElementById("caracteristicasProducto")).value;
    const precioProducto = (<HTMLInputElement>document.getElementById("precioProducto")).value;
    const stockProducto = (<HTMLInputElement>document.getElementById("stockProducto")).value;
    const tipoProducto = (<HTMLInputElement>document.getElementById("tipoProducto")).value;
    const fotoProducto = (<HTMLInputElement>document.getElementById("fotoProducto")).value;

    const newData = {
      id: this.listaProductos.length + 1,
      codigo: codigo,
      nombre: nombre,
      precio: precioProducto,
      stock: stockProducto,
      tipo: tipoProducto,
      caracteristicas : caracteristicasProducto,
      foto: fotoProducto
    };

    this.ProductoService.anadirProductos(newData)
      .subscribe(
        () => {
          console.log('Elemento añadido exitosamente');
          window.location.reload();
        },
        error => {
          console.log('Error al añadir el elemento', error);
        }
      );




  }

  
}