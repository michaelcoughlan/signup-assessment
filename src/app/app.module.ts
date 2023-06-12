import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Feature Modules
import { SharedModule } from './shared/shared.module';
import { SignUpModule } from './sign-up/sign-up.module';

// Components
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        SharedModule,
        SignUpModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
