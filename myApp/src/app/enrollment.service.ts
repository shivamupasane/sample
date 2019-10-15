import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';
import {catchError} from 'rxjs/operators';
import { throwError} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
_url = 'http://localhost:3000/enroll';
_urlReg = 'http://localhost:3000/userRegistration';
_urlGetDtl = 'http://localhost:3000/';
  constructor(private _http: HttpClient) { }
  enroll(user: User) {
    return this._http.post<any>(this._url, user)
    .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }

// user registration post using reactive form form builder

registerUser(userData) {
  return this._http.post<any>(this._urlReg, userData)
  .pipe(catchError(this.errorHandler));
}
getUserDetails(userName) {
  console.log('http://localhost:3000/' + userName);
  return this._http.get<any>(`http://localhost:3000/${userName}`)
  .pipe(catchError(this.errorHandler));
}
}
