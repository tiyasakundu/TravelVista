import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService } from '../city.service';
import { CommonModule } from '@angular/common';
import { CityRatingComponent } from '../city-ratings/city-ratings.component';
import { ICity } from './booking-details.model';
import { FormsModule } from '@angular/forms';  

@Component({
  selector: 'app-booking-details',
  standalone: true,
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css'],
  imports: [CommonModule, FormsModule, CityRatingComponent] 
})
export class BookingDetailsComponent implements OnInit {
  selectedCity: ICity | undefined;  
  cityImage: string | undefined;  
  id: number | undefined;
  showEditCityModal: boolean = false;

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private cityService: CityService //Dependency Injection  
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((map) => {
      this.id = +map.get('id')!;
      this.selectedCity = this.cityService.getCityById(this.id);
    });

    if (this.selectedCity) {
      this.cityImage = this.selectedCity.image;
    }
  }

  openEditCityModal() {
    this.showEditCityModal = true; 
  }

  closeEditCityModal() {
    this.showEditCityModal = false; 
  }

  
  updateCity() {
    this.cityService.updateCity(this.selectedCity!); 
    this.closeEditCityModal(); 
  }

  
  deleteCity() {
    this.cityService.deleteCity(this.id!); 
    this.router.navigate(['/booking']); 
  }

  onBack() {
    this.router.navigate(['/booking']);
  }
}
