import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SignUpService } from './sign-up.service';
import { BaseUser, User } from '../sign-up.type';

const defaultMockUserData: BaseUser = {
    email: 'john@doe.ie',
    firstName: 'John',
    lastName: 'Doe',
};

const BASE_API_URL = 'https://demo-api.now.sh/users';

describe('SignUpService', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let signUpService: SignUpService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [SignUpService],
        });

        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
        signUpService = TestBed.inject(SignUpService);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it('should be created', () => {
        expect(signUpService).toBeTruthy();
    });

    it('should successfully hit the create users endpoint', (done: DoneFn) => {
        const mockUserResponse: User = {
            ...defaultMockUserData,
            _id: '123456789' 
        };

        signUpService.addUser(defaultMockUserData).subscribe({
            next: responseData => {
                expect(responseData).toEqual(mockUserResponse);
                done();
            },
            error: done.fail,
        });

        const request = httpTestingController.expectOne(BASE_API_URL);
        expect(request.request.method).toEqual('POST');
        request.flush(mockUserResponse);
    });

    it('should handle an error when creating a user', (done: DoneFn) => {
        const errorResponse = new HttpErrorResponse({
            error: 'Error occurred when creating a user',
            status: 500,
            statusText: 'Internal server error occurred',
        });

        signUpService.addUser(defaultMockUserData).subscribe({
            next: () => done.fail('Expected an error'),
            error: error => {
                expect(error).toBeTruthy();
                done();
            },
        });

        const request = httpTestingController.expectOne(BASE_API_URL);
        expect(request.request.method).toEqual('POST');
        request.flush(errorResponse, errorResponse);
    });
});
