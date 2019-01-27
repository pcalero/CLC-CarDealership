import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDealershipsComponent } from './car-dealerships.component';

describe('CarDealershipsComponent', () => {
  let component: CarDealershipsComponent;
  let fixture: ComponentFixture<CarDealershipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarDealershipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDealershipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
