Cypress.config('defaultCommandTimeout', 16000);

describe('Scénář 1', () => {

    it.skip('timeout', () => {
        // cypress v základu čeká 60 vteřin
        cy.visit('/loaddelay');

        // nastavuje timeout na 7 vteřin
        // cy.visit('/loaddelay', {timeout: 7000});
    })

    it('timeout 2', () => {
        cy.visit('clientdelay');
        cy.get('button#ajaxButton').click();

        cy.get('p.bg-success')
            .should('have.text', 'Data calculated on the client side.');
    })
})
