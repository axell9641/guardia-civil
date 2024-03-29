import { Component, OnInit } from '@angular/core';
// import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    // private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.registerIcons();
  }

  private registerIcons() {
    // this.matIconRegistry.addSvgIcon("icon-X",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/icons/X.svg"));
    
  }
}
