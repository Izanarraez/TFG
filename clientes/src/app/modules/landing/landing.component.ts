import { Component } from '@angular/core';
import { LandingService } from 'src/app/services/landing/landing.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  constructor(private LandingService: LandingService) {
    this.LandingService.loadScript();
  }
}
