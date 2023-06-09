import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

@NgModule({
  declarations: [
    SignUpFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SignUpFormComponent,
  ],
})
export class SignUpModule { }
