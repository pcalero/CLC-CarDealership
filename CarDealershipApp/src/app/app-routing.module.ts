import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarDealershipsComponent } from './components/car-dealerships/car-dealerships.component';
import { CarsComponent } from './components/cars/cars.component';

const routes: Routes = [
  { path: '', component: CarDealershipsComponent },
  { path: 'cars', component: CarsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
