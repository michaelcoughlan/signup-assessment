import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SignUpModule } from './sign-up/sign-up.module';

describe('AppComponent', () => {
    beforeEach(() => TestBed.configureTestingModule({
        declarations: [AppComponent],
        imports: [
            HttpClientModule,
            SharedModule,
            SignUpModule,
        ],
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;

        expect(app).toBeTruthy();
    });
});
