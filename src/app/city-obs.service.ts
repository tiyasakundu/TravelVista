import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
// import { map } from 'rxjs/operators';
import { ICity } from './booking-details/booking-details.model';

@Injectable({
  providedIn: 'root',
})
export class CityObsService {
  private citiesUrl = '../api/cities.json';
  private citiesSubject = new BehaviorSubject<ICity[]>([]); // Observable data stream
  cities$ = this.citiesSubject.asObservable(); // Expose as observable

  constructor(private http: HttpClient) {
    // Load initial cities from `CityService`
    this.loadInitialCities();
  }

  private loadInitialCities() {
    this.http.get<ICity[]>(this.citiesUrl).subscribe(
      (cities: ICity[]) => {
        this.citiesSubject.next(cities);
      },
      error => console.error('Failed to load initial cities:', error)
    );
  }

  getCities(): Observable<ICity[]> {
    return this.cities$; // Return cities as observable
  }

  addCity(newCity: ICity): Observable<ICity[]> {
    const cities = this.citiesSubject.getValue();
    newCity.cityId = cities.length + 1; // Assign new ID
    this.citiesSubject.next([...cities, newCity]); // Update the subject with new city list
    return of(this.citiesSubject.getValue()); // Return updated cities list as observable
  }

  updateCity(updatedCity: ICity): Observable<ICity[]> {
    const cities = this.citiesSubject.getValue();
    const index = cities.findIndex(city => city.cityId === updatedCity.cityId);
    if (index !== -1) {
      cities[index] = updatedCity; // Update city
      this.citiesSubject.next([...cities]); // Trigger observable update
    }
    return of(this.citiesSubject.getValue());
  }

  deleteCity(cityId: number): Observable<ICity[]> {
    const cities = this.citiesSubject.getValue().filter(city => city.cityId !== cityId);
    this.citiesSubject.next(cities); // Update the cities list
    return of(cities); // Return the new cities list as observable
  }
}
