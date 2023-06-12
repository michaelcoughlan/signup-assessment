describe('Content', () => {
    it('verifies the Navbar component displays the correct content', () => {
        cy.visit('/');
        cy.get('[data-testid="sa__navbar"]').contains('SignUp Assessment');
    });

    it('verifies the Sign Up form displays the correct content', () => {
        cy.visit('/');
        cy.get('[data-testid="sa__form-title"]').contains('Please enter your details below');
    });
});
