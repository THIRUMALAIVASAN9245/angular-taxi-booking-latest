import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError, of } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

export const TokenName: string = "jwt_Token";
export const UserId: string = "userId";

import { User } from '../models/user.model';

@Injectable()
export class AuthService {

  baseUrl: string = "http://localhost:51380/api/AuthService/";
  helper = new JwtHelperService();
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.loggedIn.next(this.getToken() != null);
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  getToken(): string {
    return localStorage.getItem(TokenName);
  }

  setToken(token: string): void {
    localStorage.setItem(TokenName, token);
  }

  setUserId(userId: string) {
    localStorage.setItem(UserId, userId);
  }

  getUserId() {
    return localStorage.getItem(UserId);
  }

  isTokenExpired() {
    return this.helper.isTokenExpired(this.getToken());
  }

  getTokenExpirationDate() {
    return this.helper.getTokenExpirationDate(this.getToken());
  }

  deleteToken(): void {
    localStorage.removeItem(TokenName);
    localStorage.removeItem(UserId);
    this.loggedIn.next(false);
  }

  login(userId: string, password: string): Observable<string> {
    var bodyData = JSON.stringify({ userId: userId, password: password });
    let url = `${this.baseUrl}` + "User";
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(url, bodyData, httpOptions)
      .pipe(map((response: Response) => {
        let body = response.json();
        var responseData = body || {};
        return responseData;
      }), catchError(this.handleError('login', null)));
  }

  register(userData: User): Observable<boolean> {
    var bodyData = JSON.stringify(userData);
    let url = `${this.baseUrl}`  + "User";
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(url, bodyData, httpOptions).pipe(map((response: Response) => {
      let body = response.json();
      var responseData = body || {};
      return responseData;
    }), catchError(this.handleError('Register', null)));
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