// import { Injectable } from '@angular/core';
// import { ICity } from './booking-details/booking-details.model';

// @Injectable({
// providedIn: 'root'  
// })
// export class CityService {

// cities:ICity[] = [
//     { cityId: 1, name: 'Paris', country: 'France', description: "Paris, known as the 'City of Light,' is celebrated for its art, fashion, and culture, featuring landmarks like the Eiffel Tower and the Louvre.", image: '/assets/images/paris.jpg', cost: 4500, rating: 4.8 },
//     { cityId: 2, name: 'New York', country: 'USA', description: "New York, the 'Big Apple,' is renowned for its iconic skyline, bustling streets, and attractions like Times Square and Central Park.", image: '/assets/images/new york.jpg', cost: 4564, rating: 4.7 },
//     { cityId: 3, name: 'London', country: 'UK', description: "London is a vibrant city steeped in history, with landmarks such as Buckingham Palace and the Tower of London.", image: '/assets/images/london.jpg', cost: 4600, rating: 4.6 },
//     { cityId: 4, name: 'Sydney', country: 'Australia', description: "Sydney is famous for its stunning harbor, the Sydney Opera House, and beautiful beaches like Bondi Beach.", image: '/assets/images/sydney.jpg', cost: 2722, rating: 4.5 },
//     { cityId: 5, name: 'Amsterdam', country: 'Netherlands', description: "Amsterdam is known for its picturesque canals, artistic heritage, and vibrant nightlife, making it a favorite for travelers.", image: '/assets/images/amsterdam.jpg', cost: 2677, rating: 4.9 },
//     { cityId: 6, name: 'Dubai', country: 'UAE', description: "Dubai is a luxurious destination known for its modern architecture, shopping malls, and exciting nightlife.", image: '/assets/images/dubai.jpg', cost: 3472, rating: 4.7 },
//     { cityId: 7, name: 'Tokyo', country: 'Japan', description: "Tokyo combines the ultramodern and the traditional, from neon-lit skyscrapers to historic temples, offering a unique cultural experience.", image: '/assets/images/tokyo.jpg', cost: 5000, rating: 4.8 },
//     { cityId: 8, name: 'Rome', country: 'Italy', description: "Rome is a historic city famous for its ancient ruins, vibrant culture, and delicious cuisine, attracting millions of visitors each year.", image: '/assets/images/rome.jpg', cost: 4200, rating: 4.6 },
//     { cityId: 9, name: 'Barcelona', country: 'Spain', description: "Barcelona is celebrated for its unique architecture, particularly Gaudí's Sagrada Família, and its lively beach atmosphere.", image: '/assets/images/barcelona.webp', cost: 3800, rating: 4.7 },
//     { cityId: 10, name: 'Bangkok', country: 'Thailand', description: "Bangkok is known for its ornate temples, bustling street markets, and vibrant nightlife, offering a rich cultural experience.", image: '/assets/images/bankok.jpg', cost: 1800, rating: 4.5 },
//     { cityId: 11, name: 'Singapore', country: 'Singapore', description: "Singapore is a modern city-state known for its cleanliness, lush gardens, and diverse culinary scene, attracting tourists from around the world.", image: '/assets/images/singapore.jpeg', cost: 3500, rating: 4.7 },
//     { cityId: 12, name: 'Istanbul', country: 'Turkey', description: "Istanbul is a transcontinental city famous for its historic sites, bustling bazaars, and rich cultural heritage, bridging Europe and Asia.", image: '/assets/images/istanbul.webp', cost: 2200, rating: 4.6 }
// ];

// getCities()
// {
//     return this.cities;
// }

// // name:string
// getCityById(id: number) {
//     // return this.cities.find(city => city.name.toLowerCase() === name.toLowerCase());
//     return this.cities.find(selectedCity => selectedCity.cityId === id 
//     );
// }

// addCity(newCity: ICity) {
//     newCity.cityId = this.cities.length + 1; 
//     this.cities.push(newCity);
// }

// updateCity(updatedCity: ICity) {
//     const index = this.cities.findIndex(city => city.cityId === updatedCity.cityId);
//     if (index !== -1) {
//         this.cities[index] = updatedCity; 
//     }
// }

// deleteCity(id: number) {
//     this.cities = this.cities.filter(city => city.cityId !== id); 
// }

// }
