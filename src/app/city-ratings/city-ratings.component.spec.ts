import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityRatingsComponent } from './city-ratings.component';

describe('CityRatingsComponent', () => {
  let component: CityRatingsComponent;
  let fixture: ComponentFixture<CityRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityRatingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
