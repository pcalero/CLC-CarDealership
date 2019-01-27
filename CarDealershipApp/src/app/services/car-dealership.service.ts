import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }from '@angular/common/http';
import { Observable, of, throwError} from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Audit } from '../models/audit';
import { Brand } from '../models/brand';
import { Car } from '../models/car';
import { CarDealership } from '../models/carDealership';
import { Constants } from '../common/constants';


const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable({
  providedIn: 'root'
})
export class CarDealershipService {

  constructor (private http: HttpClient) { }
  
  /**
   * Returns a function that handles Http operation failures.
   * This error handler lets the app continue to run as if no error occurred.
   * @param serviceName = name of the data service that attempted the operation
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (serviceName = '',operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error); // log to console

      const message = (error.error instanceof ErrorEvent) ?
        error.error.message :
       `server returned code ${error.status} with body "${error.error}"`;
  
      console.log(`${serviceName}: ${operation} failed: ${message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getCarDealerships (): Observable<CarDealership[]> {
    return this.http.get<CarDealership[]>(Constants.CARDEALERSHIPS_URL).pipe(
      catchError(this.handleError('CarDealershipService', 'getCarDealerships', []))
    );
  }

  getBrands (): Observable<Brand[]> {
    return this.http.get<Brand[]>(Constants.BRANDS_URL).pipe(
      catchError(this.handleError('CarDealershipService', 'getBrands', []))
    );
  }
  
  getCars (): Observable<Car[]> {
    return this.http.get<Car[]>(Constants.CARS_URL).pipe(
      catchError(this.handleError('CarDealershipService', 'getCars', []))
    );
  }

  addCar (car: Car): Observable<Car> {
    return this.http.post<Car>(Constants.CARS_URL, car, httpOptions).pipe(
      catchError(this.handleError('CarDealershipService', 'addCar', car))
    );
  }

  deleteCar (id: number): Observable<{}> {
    const url = `${Constants.CARS_URL}/${id}`; // DELETE api/cars/5
    return this.http.delete(url, httpOptions).pipe(
      catchError(this.handleError('CarDealershipService', 'deleteCar'))
    );
  }

  updateCar (car: Car): Observable<Car> {
    const url = `${Constants.CARS_URL}/${car.CarID}`; // PUT api/cars/5
    return this.http.put<Car>(url, car, httpOptions).pipe(
      catchError(this.handleError('CarDealershipService', 'updateCar', car))
    );
  }
  
}
