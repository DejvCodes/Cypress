describe('Scénář', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('globalsqa'));
    })

    it('test', () => {
        // cy.viewport('iphone-8');
        cy.viewport(400, 600); // šířka ,výška
        cy.get('#mobile_menu_toggler').should('be.visible');
    })
})