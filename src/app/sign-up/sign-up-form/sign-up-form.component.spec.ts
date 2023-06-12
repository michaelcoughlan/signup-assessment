import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

import { SignUpFormComponent } from './sign-up-form.component';
import { SharedModule } from '../../shared/shared.module';
import { SignUpService } from '../services/sign-up.service';

class MockSignUpService {
    addUser() {
        return of(true);
    }
};

const defaultFormValues = {
    email: 'john@email.com',
    firstName: 'John',
    lastName: 'Doe',
    password: '1234567890Lk',
};

describe('SignUpFormComponent', () => {
    let component: SignUpFormComponent;
    let fixture: ComponentFixture<SignUpFormComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SignUpFormComponent],
            imports: [
                BrowserAnimationsModule,
                MatFormFieldModule,
                MatInputModule,
                ReactiveFormsModule,
                SharedModule,
            ],
            providers: [
                { provide: SignUpService, useClass: MockSignUpService },
            ],
        });
        fixture = TestBed.createComponent(SignUpFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should do nothing if the form is submitted without the right data', () => {
        const formValue = {
            ...defaultFormValues,
            email: '',
        };

        component.signUpForm.patchValue(formValue);
        component.sendFormData();

        expect(component.signUpForm.value).toEqual(formValue);
    });

    it('should submit when the user clicks the button', () => {
        component.signUpForm.patchValue(defaultFormValues);

        fixture.detectChanges();
        let button = fixture.debugElement.nativeElement.querySelector('button');
        button.click();

        expect(component.signUpForm.value).toEqual({
            email: null,
            firstName: null,
            lastName: null,
            password: null,
        });
    });

    it('should reset the form when the values are submitted', () => {
        component.signUpForm.patchValue(defaultFormValues);

        component.sendFormData();

        expect(component.signUpForm.value).toEqual({
            email: null,
            firstName: null,
            lastName: null,
            password: null,
        });
    });

    it('should reset the form', () => {
        component.signUpForm.patchValue(defaultFormValues);

        component.resetForm();

        expect(component.signUpForm.value).toEqual({
            email: null,
            firstName: null,
            lastName: null,
            password: null,
        });
    });

    it('should return a form error if the password contains the first name of the user', () => {
        component.signUpForm.patchValue({
            ...defaultFormValues,
            password: 'john',
        });

        fixture.detectChanges();
        let nameInPasswordErrorMessage = fixture.debugElement.nativeElement.querySelector('[data-testid="sa__password-name-in-password-error"]');

        expect(nameInPasswordErrorMessage).toBeTruthy();
    });

    it('should not return a form error for the name in the password if both the first and last name are empty', () => {
        component.signUpForm.patchValue({
            ...defaultFormValues,
            firstName: '',
            lastName: '',
            password: 'john',
        });

        fixture.detectChanges();
        let nameInPasswordErrorMessage = fixture.debugElement.nativeElement.querySelector('[data-testid="sa__password-name-in-password-error"]');

        expect(nameInPasswordErrorMessage).toBeFalsy();
    });
});
