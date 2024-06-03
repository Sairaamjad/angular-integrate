import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { JwtDecoder } from 'src/jwt.decoder';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private apiUrl = environment.apiAuth;
  private token: string | null = null; // Declare token here

  constructor(private http: HttpClient, private jwtDecoder: JwtDecoder) {
    // Retrieve token from local storage on initialization
    this.token = localStorage.getItem('token');
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }

  private getHeaders(): HttpHeaders {
    if (!this.token) {
      console.warn('Token not set!');
    } else {
      console.log('Using token:', this.token);
    }

    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token || ''}` // Use token here
    });
  }

  // public setToken(token: string): void {
  //   this.token = token;
  //   localStorage.setItem('token', token);
  // }

  // public removeToken(): void {
  //   this.token = null;
  //   localStorage.removeItem('token'); // Remove token from local storage
  // }

  public get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${endpoint}`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }


  

  public post<T>(endpoint: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${endpoint}`, data, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  public put<T>(endpoint: string, data: any): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${endpoint}`, data, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  public delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}/${endpoint}`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }
}
