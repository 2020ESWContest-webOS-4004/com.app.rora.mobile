import { Injectable } from '@angular/core';
import { JarvisMember } from '../model/JarvisMember';

import { catchError, retry, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const endpoint = "http://localhost:3000/list";


@Injectable({
  providedIn: 'root'
})
export class JarvisMemberService {
  

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  getData(): Observable<any>{
    /*
    return this.http
      .get<jarvisMember[]>("http://localhost:3000/list")
      .pipe(map(data => _.values(data)))
      .subscribe(result => {
        console.log(result);
      })
    */    
   
    //return this.http.get('http://localhost:3000/list');

    return this.http.get<JarvisMember>(endpoint).pipe(catchError(this.handleError));

  }
}
