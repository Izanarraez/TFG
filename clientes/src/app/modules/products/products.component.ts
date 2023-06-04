import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private ProductosService: ProductosService) {
    this.ProductosService.loadScript();
  }
}
