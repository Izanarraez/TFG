import { Component } from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent {

  constructor(private RestService:RestService) { }
}