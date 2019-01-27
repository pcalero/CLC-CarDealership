import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbModalConfig, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Brand } from '../../models/brand';
import { Car } from '../../models/car';
import { CarDealership } from '../../models/carDealership';

@Component({
  selector: 'app-car-modal',
  templateUrl: './car-modal.component.html',
  styleUrls: ['./car-modal.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class CarModalComponent {

  @Input() carDealerships: CarDealership[];
  @Input() brands: Brand[];
  @Input() car: Car;
  @Input() titleText: String;
  @Output() newCar: EventEmitter<Car> = new EventEmitter<Car>();
  resultCar: Car;
  modalRef: NgbModalRef;

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  
  public open(content){
    this.resultCar = new Car();

    // initialize form fields only in edit mode
    if (this.car != undefined){
      this.resultCar.CarID = this.car.CarID;
      this.resultCar.CarNumberPlate = this.car.CarNumberPlate;
      this.resultCar.CarDealershipID = this.car.CarDealershipID;
      this.resultCar.BrandID = this.car.BrandID;
      this.resultCar.Kilometers = this.car.Kilometers;
    }
    this.modalRef = this.modalService.open(content);
  }

  public save(){
    this.modalRef.close();
    this.newCar.emit(this.resultCar);
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

}
