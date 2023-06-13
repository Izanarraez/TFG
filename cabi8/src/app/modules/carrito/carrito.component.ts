import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  listaItems: any = [];

  constructor(private CarritoService : CarritoService){}

  ngOnInit(): void {
    return this.mostrarCarrito();
  }

  public mostrarCarrito() {

    const objetoCarrito = JSON.parse(this.CarritoService.get()!);

    //console.log(objetoCarrito);

    this.listaItems.push(objetoCarrito);

    console.log(this.listaItems);
    
  }

  // public eliminarItem(){

  //   this.listaItems.

  // }

}
