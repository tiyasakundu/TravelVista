import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService } from './city.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-details',
  standalone: true,
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css'],
  imports: [CommonModule]
})
export class BookingDetailsComponent implements OnInit {

  cityName: string | undefined;   
  selectedCity: any | undefined;  
  cityImage: string | undefined;  

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private cityService: CityService  
  ) {}

  ngOnInit(): void {
    
    this.cityName = this.route.snapshot.params['id'];

    
    this.selectedCity = this.cityService.getCityByName(this.cityName!);

    
    if (this.selectedCity) {
      this.cityImage = this.selectedCity.image;
    }
  }

  onBack() {
    this.router.navigate(['/booking']);
  }
}
