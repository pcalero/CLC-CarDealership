import { Component, OnInit } from '@angular/core';
import { Audit } from '../../models/audit';
import { Brand } from '../../models/brand';
import { Car } from '../../models/car';
import { CarDealership } from '../../models/carDealership';
import { CarDealershipService } from '../../services/car-dealership.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  cars: Car[];
  carDealerships: CarDealership[];
  brands: Brand[];
  editCarLabel: String = 'Editar coche';
  addCarLabel: String = 'Añadir coche';

  constructor(private carDealershipService: CarDealershipService) {
    this.getCars();
  }

  public ngOnInit() {
  }

  public getCars(): void {
    this.carDealershipService.getCarDealerships()
      .subscribe(carDealerships => {
        this.carDealerships = carDealerships;
        this.carDealershipService.getBrands()
          .subscribe(brands => {
            this.brands = brands;
            this.carDealershipService.getCars()
              .subscribe(cars => {
                this.cars = cars;
                this.fillCarsArray();
              });
          });
      });
  }


  public addCar(newCar: Car){
    this.carDealershipService.addCar(newCar)
      .subscribe(car => 
      {
        this.fillCar(car);
        this.cars.push(car);
      });
  }

  public editCar(car: Car){
      this.carDealershipService.updateCar(car)
        .subscribe(editedCar => {
          this.fillCar(editedCar);
          // replace the car in the cars list with update from server
          const ix = editedCar ? this.cars.findIndex(c => c.CarID === editedCar.CarID) : -1;
          if (ix > -1) 
          { 
            this.cars[ix] = editedCar; 
          }
        });
  }

  public removeCar(car: Car){
    this.carDealershipService.deleteCar(car.CarID).subscribe( () =>
      this.cars = this.cars.filter(c => c.CarID !== car.CarID)
    );
  }

  public fillCarsArray(): void {
    this.cars.forEach(c => {
      this.fillCar(c);
    });
  }

  public fillCar(c: Car): void {
    this.brands.forEach(b => {
      if(c.BrandID === b.BrandID){
        c.Brand = b;
      }
    });
    this.carDealerships.forEach(cd => {
      if(c.CarDealershipID === cd.CarDealershipID){
        c.CarDealership = cd;
      }
    });
  }



}
