import { TestBed } from '@angular/core/testing';

import { CarDealershipService } from './car-dealership.service';

describe('CarDealershipService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarDealershipService = TestBed.get(CarDealershipService);
    expect(service).toBeTruthy();
  });
});
