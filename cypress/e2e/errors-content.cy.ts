describe('Error Messages', () => {
    it('verifies the first name is required error appears', () => {
        cy.visit('/');

        cy.get('[data-testid="sa__first-name-label"]').click();
        cy.get('[data-testid="sa__first-name-input"]').blur();

        cy.get('[data-testid="sa__first-name-error"]').contains('First Name is required');
    });

    it('verifies the last name is required error appears', () => {
        cy.visit('/');

        cy.get('[data-testid="sa__last-name-label"]').click();
        cy.get('[data-testid="sa__last-name-input"]').blur();

        cy.get('[data-testid="sa__last-name-error"]').contains('Last Name is required');
    });

    it('verifies the email is required error appears', () => {
        cy.visit('/');

        cy.get('[data-testid="sa__email-label"]').click();
        cy.get('[data-testid="sa__email-input"]').blur();

        cy.get('[data-testid="sa__email-error"]').contains('Email is required');
    });

    it('verifies the email correct format error appears', () => {
        cy.visit('/');

        cy.get('[data-testid="sa__email-label"]').click();
        cy.get('[data-testid="sa__email-input"]').type('test@email');
        cy.get('[data-testid="sa__email-input"]').blur();

        cy.get('[data-testid="sa__email-pattern-error"]').contains('Please enter a valid email (e.g. test@email.com)');
    });

    it('verifies the password is required error appears', () => {
        cy.visit('/');

        cy.get('[data-testid="sa__password-label"]').click();
        cy.get('[data-testid="sa__password-input"]').blur();

        cy.get('[data-testid="sa__password-required-error"]').contains('Password is required');
    });

    it('verifies the password length error appears', () => {
        cy.visit('/');

        cy.get('[data-testid="sa__password-label"]').click();
        cy.get('[data-testid="sa__password-input"]').type('a');

        cy.get('[data-testid="sa__password-length-error"]').contains('Password must be at least 8 characters');
    });

    it('verifies the password contains upper and lower case error appears', () => {
        cy.visit('/');

        cy.get('[data-testid="sa__password-label"]').click();
        cy.get('[data-testid="sa__password-input"]').type('11111111');

        cy.get('[data-testid="sa__password-case-error"]').contains('Password must contain a mix of upper and lower case characters');
    });

    it('verifies the first or last name in password error appears', () => {
        cy.visit('/');

        cy.get('[data-testid="sa__first-name-label"]').type('john');
        cy.get('[data-testid="sa__password-label"]').click();
        cy.get('[data-testid="sa__password-input"]').type('11111111John');

        cy.get('[data-testid="sa__password-name-in-password-error"]').contains('You cannot have your first or last name in your password');
    });
});
