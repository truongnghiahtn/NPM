import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

let headers = new HttpHeaders({
  'Content-Type': 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class DataService {
  static get(arg0: string) {
    throw new Error("Method not implemented.");
  }

  constructor(private http: HttpClient) {

  }

  get(uri: string): Observable<any> {
    return this.http.get(uri).pipe(
      tap(() => {
        // loading
      }),
      catchError(err => {
        return this.handleErr(err)
      })
    )

  }
  post(uri: string, data?: any): Observable<any> {
    return this.http.post(uri, data, httpOptions).pipe(
      tap(() => {
        // loading
      }),
      catchError(err => {
        return this.handleErr(err)
      })
    )
  }
  put(uri: string, data?: any): Observable<any> {
    return this.http.put(uri, data, httpOptions).pipe(
      tap(() => {
        // loading
      }),
      catchError(err => {
        return this.handleErr(err)
      })
    )
  }
  postDatVe(uri: string, data?: any): Observable<any> {
    return this.http.post(uri, data, { headers: headers, responseType: 'text' }).pipe(
      tap(() => {
        // loading
      }),
      catchError(err => {
        return this.handleErr(err)
      })
    )
  }

  handleErr(err) {
    console.log(err);
    switch (err.status) {
      case 500:
        console.log(err.error);
        break;
      default:
        break;
    }
    return throwError(err);
  }
}
