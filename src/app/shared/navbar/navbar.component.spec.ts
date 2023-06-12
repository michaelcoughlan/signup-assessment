import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { SharedModule } from '../shared.module';

describe('NavbarComponent', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [NavbarComponent],
            imports: [SharedModule],
        });
        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should validate the value of title is correct', () => {
        expect(component.title).toEqual('SignUp Assessment');
    });
});
