import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError, of } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

import { Booking } from '../models/booking.model';

@Injectable()
export class BookingService {

  baseUrl: string = "http://localhost:51380/api/BookingService/";

  constructor(private http: HttpClient) {
  }

  booking(bookingData: any): Observable<any> {
    var bodyData = JSON.stringify(bookingData);
    let url = `${this.baseUrl}` + "booking";
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    if (bookingData.pickupLocation === "admin" || bookingData.pickupLocation === "test") {
      return of("Validbooking");
    }
    let errObj = {
      title: "Invalidbooking",
      message: "An server error occurred"
    };
    return throwError(errObj);
    // return this.http.post(url, bodyData, httpOptions).pipe(map((response: Response) => {
    //   let body = response.json();
    //   var responseData = body || {};
    //   return responseData;
    // }), catchError(this.handleError('Register', null)));
  }

  getAll(): Observable<any> {
    let url = `${this.baseUrl}` + "Booking";
    return this.http.get(url)
      .pipe(map((response: Response) => {
        let body = response.json();
        var responseData = body || {};
        return responseData;
      }), catchError(this.handleError('get all booking', null)));
  }

  getById(id: string): Observable<any> {
    let url = `${this.baseUrl}` + "Booking/" + id;
    return this.http.get(url)
      .pipe(map((response: Response) => {
        let body = response.json();
        var responseData = body || {};
        return responseData;
      }), catchError(this.handleError('getbyid booking', null)));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'An server error occurred';
      console.log(`${operation} failed: ${error.message}`);
      let body = error.json();
      let errObj = {
        title: errMsg,
        message: errMsg === "An server error occurred" ? errMsg : body
      };
      return of(error);
    };
  }
}