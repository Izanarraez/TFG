import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit{

  listaProductos : any = [];
  codigoProducto: number | undefined;

  constructor(private ProductoService : ProductoService){}

  ngOnInit(): void {
      return this.getProductos();
  }

  getProductos(){
    this.ProductoService.getProducto().subscribe(respuesta => this.listaProductos = respuesta);
  }

  setSelectedItem(id: number) {
    this.codigoProducto = id;
  }

  deleteProductos(id: number){
    this.ProductoService.deleteProducto(1)
    .subscribe(
      () => {
        console.log('Elemento borrado exitosamente');
        // Realiza cualquier acción adicional después del borrado exitoso.
      },
      error => {
        console.log('Error al borrar el elemento', error);
        // Maneja el error en caso de que ocurra.
      }
    );
  }

  editProductos(id: number){

    const updatedData = { /* objeto con los nuevos datos para el elemento */ };

    this.ProductoService.editProductos(id, updatedData)
      .subscribe(
        () => {
          console.log('Elemento editado exitosamente');
        },
        error => {
          console.log('Error al editar el elemento', error);
        }
      );


  }

  anadirProductos(){

    const newData = { /* objeto con los datos del nuevo elemento */ };

    this.ProductoService.anadirProductos(newData)
      .subscribe(
        () => {
          console.log('Elemento añadido exitosamente');
        },
        error => {
          console.log('Error al añadir el elemento', error);
          // Maneja el error en caso de que ocurra.
        }
      );




  }

  
}