import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-city-ratings',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './city-ratings.component.html',
  styleUrl: './city-ratings.component.css'
})

  export class CityRatingComponent implements OnChanges {

    faStar = faStar;
    @Input() rating!: number; 
    starWidth!: number; 
  
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  
    // stars: number[] = [1, 2, 3, 4, 5]; 
  
    ngOnChanges(): void {
      this.starWidth = (this.rating * 90) / 5; 
    }
  
    onClick(): void {
      this.ratingClicked.emit(`This city is rated ${this.rating} stars`);
    }
  }
