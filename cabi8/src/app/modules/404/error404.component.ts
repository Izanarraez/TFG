import { Component } from '@angular/core';
import { servicescriptService } from 'src/app/services/services.service';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css']
})
export class Error404Component {
  constructor(private servicescriptService: servicescriptService) {
    this.servicescriptService.loadScript();
  }
}
