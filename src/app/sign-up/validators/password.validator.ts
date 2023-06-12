import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function nameInPasswordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const firstName = control.get('firstName')?.value?.toLowerCase();
        const lastName = control.get('lastName')?.value?.toLowerCase();
        const password = control.get('password')?.value?.toLowerCase();

        // The password cannot contain the first or last name if it is empty
        if (!password) {
            return null;
        }

        // The first and last name cannot be in the password if they are empty
        if (!firstName && !lastName) {
            return null;
        }

        // The password is valid if the first and last name are not in it
        if (!password.includes(firstName) && !password.includes(lastName)) {
            return null;
        }

        return { nameInPassword: true };
    };
}

export function isLowerAndUpperCasePresentValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const { value: passwordValue } = control;

        if (!passwordValue) {
            return null;
        }

        const isLowerCasePresent = /[a-z]/.test(passwordValue);
        const isUpperCasePresent = /[A-Z]/.test(passwordValue);

        if (isLowerCasePresent && isUpperCasePresent) {
            return null;
        }

        return { isLowerAndUpperCasePresent: true };
    };
}