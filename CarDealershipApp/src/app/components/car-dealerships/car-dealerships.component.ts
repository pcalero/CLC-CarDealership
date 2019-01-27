import { Component, OnInit } from '@angular/core';
import { CarDealership } from '../../models/carDealership';
import { CarDealershipService } from '../../services/car-dealership.service';

@Component({
  selector: 'app-car-dealerships',
  templateUrl: './car-dealerships.component.html',
  styleUrls: ['./car-dealerships.component.scss']
})
export class CarDealershipsComponent implements OnInit {
  carDealerships: CarDealership[];

  constructor(private carDealershipService: CarDealershipService) { }

  ngOnInit() {
    this.getCarDealerships();
  }

  getCarDealerships(): void {
    this.carDealershipService.getCarDealerships()
      .subscribe(carDealerships => this.carDealerships = carDealerships);
  }

}
