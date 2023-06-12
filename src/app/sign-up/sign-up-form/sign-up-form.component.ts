import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { isLowerAndUpperCasePresentValidator, nameInPasswordValidator } from '../validators/password.validator';
import { SignUpService } from '../services/sign-up.service';

@Component({
    selector: 'app-sign-up-form',
    templateUrl: './sign-up-form.component.html',
    styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnDestroy {
    addUserSubscription$ = new Subscription();
    signUpForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]+[a-zA-Z0-9\.-_]*@[a-zA-Z0-9\.-_]+\.[a-zA-Z]+/i)]),
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(8), isLowerAndUpperCasePresentValidator()]),
    }, { validators: nameInPasswordValidator() });

    constructor(private signupService: SignUpService) {}

    ngOnDestroy(): void {
        this.addUserSubscription$.unsubscribe();
    }

    get email() {
        return this.signUpForm.get('email');
    }

    get firstName() {
        return this.signUpForm.get('firstName');
    }

    get lastName() {
        return this.signUpForm.get('lastName');
    }

    get password() {
        return this.signUpForm.get('password');
    }

    sendFormData() {
        const { email, firstName, lastName } = this.signUpForm.value;

        // We first ensure the values are definitely present before sending the request
        if (!email || !firstName || !lastName) {
            return;
        }

        this.addUserSubscription$ = this.signupService.addUser({ email, firstName, lastName })
            .subscribe(() => this.signUpForm.reset());
    }

    resetForm() {
        this.signUpForm.reset();
    }
}
