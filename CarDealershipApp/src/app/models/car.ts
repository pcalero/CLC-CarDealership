import { Brand } from './brand';
import { CarDealership } from './carDealership';

/**
 * Car model
 * 
 * @export
 * @class Car
 * @author pedro.calero
 */
export class Car {
  CarID: number;
  CarNumberPlate: String;
  CarDealershipID: number;
  BrandID: number;
  Kilometers: number;
  CarDealership: CarDealership;
  Brand: Brand;

  /**
   * Creates an instance of Car.
   * @memberof Car
   */
  constructor (){
  }

}