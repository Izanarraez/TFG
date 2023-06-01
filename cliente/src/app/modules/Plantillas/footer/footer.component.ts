import { Component } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private MatIconRegistry: MatIconRegistry,private  DomSanitizer: DomSanitizer){
    this.MatIconRegistry.addSvgIcon('instagram',this.DomSanitizer.bypassSecurityTrustResourceUrl('assets/svg/instagram.svg'));
    this.MatIconRegistry.addSvgIcon('twitter',this.DomSanitizer.bypassSecurityTrustResourceUrl('assets/svg/twitter.svg'));
    this.MatIconRegistry.addSvgIcon('linkedin',this.DomSanitizer.bypassSecurityTrustResourceUrl('assets/svg/linkedin.svg'));
    this.MatIconRegistry.addSvgIcon('painterest',this.DomSanitizer.bypassSecurityTrustResourceUrl('assets/svg/painterest.svg'));
    this.MatIconRegistry.addSvgIcon('whatsapp',this.DomSanitizer.bypassSecurityTrustResourceUrl('assets/svg/whatsapp.svg'));
  }
}
