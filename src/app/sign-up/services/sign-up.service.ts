import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

import { BaseUser, User } from '../sign-up.type';

const API_BASE_URL = 'https://demo-api.now.sh';

@Injectable({
    providedIn: 'root'
})
export class SignUpService {
    constructor(private http: HttpClient) {}

    addUser(userData: BaseUser): Observable<User> {
        return this.http.post<User>(`${API_BASE_URL}/users`, userData).pipe(catchError(this.handleError))
    }

    handleError(error: HttpErrorResponse) {
        console.error(`The error code ${error.status} was returned, data is:`, error.error);

        return throwError(() => new Error('An error occurred while communicating with the API. Please try again or contact support.'));
    }
}
