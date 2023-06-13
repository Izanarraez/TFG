import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() { }

  listaItems: any = [];
  arrayCarrito: any = [];

  public set(carrito: any) {

    const objetoLocal = JSON.stringify(carrito);

    this.listaItems.push(objetoLocal);

    console.log(this.listaItems);

    return localStorage.setItem('carrito', this.listaItems);

  }

  // public actualizarCarrito(carrito: any){

  //   console.log(JSON.parse(this.get()!));

  //   let objetosGuardados: any = [];

  //   // Añadir el nuevo objeto al array existente
  //   objetosGuardados.push(carrito);

  //   // Guardar el array actualizado en el almacenamiento local
  //   localStorage.setItem('carrito', JSON.stringify(objetosGuardados));



  // }

  public get(){
    return localStorage.getItem('carrito');
  }

}
