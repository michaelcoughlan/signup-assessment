import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NavbarComponent } from './navbar/navbar.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
    declarations: [
        ButtonComponent,
        NavbarComponent,
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatToolbarModule,
        ReactiveFormsModule,
    ],
    exports: [
        ButtonComponent,
        NavbarComponent,
    ],
})
export class SharedModule {}
