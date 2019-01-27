import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarDealershipsComponent } from './components/car-dealerships/car-dealerships.component';
import { NavComponent } from './components/nav/nav.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarModalComponent } from './components/car-modal/car-modal.component';
import { CarDealershipService } from './services/car-dealership.service';

@NgModule({
  declarations: [
    AppComponent,
    CarDealershipsComponent,
    NavComponent,
    CarsComponent,
    CarModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    CarDealershipService,
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
