import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Ingatlan } from '../models/ingatlan';

@Injectable({
  providedIn: 'root'
})
export class IngatlanService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<[Ingatlan]>("http://localhost:5000/api/ingatlan").pipe(
      catchError((err) => this.handleError(err))
    );
  }

  add(item: Ingatlan): Observable<Ingatlan> {
    return this.http.post<Ingatlan>("http://localhost:5000/api/ujingatlan", item).pipe(
      catchError((err) => this.handleError(err))
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
