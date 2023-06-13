import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() { }

  listaItems: any = [];

  public set(carrito: any) {

    this.listaItems.push(carrito);

    return localStorage.setItem('carrito', JSON.stringify(carrito));

  }

  public get(){
    return localStorage.getItem('carrito');
  }

}
