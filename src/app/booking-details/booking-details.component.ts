import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CityObsService } from '../city-obs.service';
import { CommonModule } from '@angular/common';
import { CityRatingComponent } from '../city-ratings/city-ratings.component';
import { ICity } from './booking-details.model';
import { FormsModule } from '@angular/forms';  
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-booking-details',
  standalone: true,
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css'],
  imports: [CommonModule, FormsModule, CityRatingComponent] 
})
export class BookingDetailsComponent implements OnInit {
  selectedCity: ICity | undefined;  
  editableCity: ICity = { 
    cityId: 0, 
    name: '', 
    country: '', 
    description: '', 
    image: '', 
    cost: 0, 
    rating: 0 
  };
  cityImage: string | undefined;  
  id: number | undefined;
  showEditCityModal: boolean = false;

  private subscription: Subscription = new Subscription();

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private cityObsService: CityObsService // Using CityObsService instead of CityService
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.route.paramMap.subscribe((map) => {
        this.id = +map.get('id')!;
        if (this.id) {
          this.cityObsService.getCities().subscribe((cities) => {
            this.selectedCity = cities.find(city => city.cityId === this.id);

            if (this.selectedCity) {
              // Initialize editableCity as a copy of selectedCity
              this.editableCity = { ...this.selectedCity };
              this.cityImage = this.selectedCity.image;
            }
          });
        }
      })
    );
  }

  openEditCityModal() {
    if (this.selectedCity) {
      this.editableCity = { ...this.selectedCity }; 
    }
    this.showEditCityModal = true; 
  }

  closeEditCityModal() {
    this.showEditCityModal = false; 
  }

  updateCity(cityForm: any) {
    if (cityForm.valid && this.editableCity) {
      this.cityObsService.updateCity(this.editableCity).subscribe((updatedCities) => {
        this.selectedCity = updatedCities.find(city => city.cityId === this.editableCity.cityId);
        this.closeEditCityModal();
      });
    } else {
      cityForm.form.markAllAsTouched();
    }
  }

  deleteCity() {
    if (this.id !== undefined) {
      this.cityObsService.deleteCity(this.id).subscribe(() => {
        this.router.navigate(['/booking']);
      });
    }
  }

  onBack() {
    this.router.navigate(['/booking']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // Clean up to avoid memory leaks
  }
}
