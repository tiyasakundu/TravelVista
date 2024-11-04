import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookingDetailsComponent } from '../booking-details/booking-details.component';
import { CityRatingComponent } from "../city-ratings/city-ratings.component";
import { CityObsService } from '../city-obs.service'; 
import { ICity } from '../booking-details/booking-details.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [FormsModule, CommonModule, BookingDetailsComponent, RouterModule, CityRatingComponent], 
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit, OnDestroy {
  searchTerm: string = ''; 
  cities: ICity[] = []; 
  filteredCities: ICity[] = []; 
  showAddCityModal: boolean = false; 
  newCity: ICity = {
    cityId: 0, 
    name: '',
    country: '',
    description: '',
    image: '',
    cost: 0,
    rating: 0
  };

  private subscription: Subscription = new Subscription();

  constructor(private cityObsService: CityObsService) {} 

  ngOnInit(): void {
    this.subscription.add(
      this.cityObsService.getCities().subscribe((cities: ICity[]) => {
        this.cities = cities;
        this.filteredCities = cities;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  filterCities() {
    if (this.searchTerm.trim()) {
      this.filteredCities = this.cities.filter(city =>
        city.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredCities = this.cities;
    }
  }

  onRatingClicked(message: string): void {
    alert(message); 
  }

  openAddCityModal() {
    this.showAddCityModal = true;
  }

  closeAddCityModal() {
    this.showAddCityModal = false;
  }

  addNewCity() {
    this.cityObsService.addCity(this.newCity).subscribe((cities: ICity[]) => {
      this.cities = cities;
      this.filterCities();
    });
    this.resetNewCity();
    this.closeAddCityModal();
  }
  

  resetNewCity() {
    this.newCity = { cityId: 0, name: '', country: '', description: '', image: '', cost: 0, rating: 0 };
  }
}
