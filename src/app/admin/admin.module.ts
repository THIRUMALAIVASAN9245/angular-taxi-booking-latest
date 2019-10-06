import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { BsDatepickerModule } from 'ngx-bootstrap';

import { AdminRouting } from './admin.routing';
import { AdminComponent } from './admin.component';

import { HeaderComponent } from './../common/header/header.component';
import { FooterComponent } from './../common/footer/footer.component';

import { UserDetailsComponent } from './user-details/user-details.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { RideDetailsComponent } from './ride-details/ride-details.component';

@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    UserDetailsComponent,
    DriverDetailsComponent,
    RideDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng4LoadingSpinnerModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    AdminRouting
  ],
  providers: [],
})
export class AdminModule { }
