import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private http: HttpClient) { }

  getBySearch(search: string): Observable<any> {
    return this.http.get<any>(environment.apiUrl + '/find?q=' + search + '&units=metric&appid=' + environment.apiKey )
      .pipe(
        tap(_ => console.log('')),
        catchError(this.handleError([]))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
