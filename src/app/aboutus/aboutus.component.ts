import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


declare var bootstrap: any;

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [],
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'] 
})
export class AboutusComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    
    if (isPlatformBrowser(this.platformId)) {
      
      const carouselElement = document.getElementById('carouselExampleInterval');
      if (carouselElement) {
        const carousel = new bootstrap.Carousel(carouselElement, {
          interval: 2000, 
          ride: 'carousel' 
        });
      }
    }
  }
}
