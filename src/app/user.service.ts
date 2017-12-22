import {Observable} from 'rxjs/Observable';
import {Injectable, ViewContainerRef} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User, Performance} from './user';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserService {

  constructor(public http: HttpClient) {
  }

  /**
   * Get all user form the server (here as json file)
   *
   * @returns {Observable < User[] >}
   * @memberof UserService
   */
  public getUsers(): Observable < User[] > {
    return this.http.get< User[] > ('../assets/user.json')
    .pipe(catchError((this.handleError('couldn\'t load initial users', []))));
  }

/**
 * Get all performances form the server (here as json file)
 *
 * @returns {Observable < UsPerformance[] >}
 * @memberof UserService
 */
public getPerformances(): Observable < Performance[] > {
    return this.http.get< Performance[] > ('../assets/performance.json')
    .pipe(catchError((this.handleError('couldn\'t load initial performances', []))));
  }


    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param message - The error sessage
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (message, result?: T) {
    return (error: any): Observable<T> => {
      console.log(message);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
