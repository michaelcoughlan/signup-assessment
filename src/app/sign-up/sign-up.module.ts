import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { SharedModule } from '../shared/shared.module';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

@NgModule({
    declarations: [
        SignUpFormComponent
    ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        SharedModule,
    ],
    exports: [
        SignUpFormComponent,
    ],
})
export class SignUpModule {}
