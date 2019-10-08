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

}
