describe('Scénář', () => {
     
    it('Progress bar', () => {
        cy.visit('/progressbar');
        cy.get('button#startButton').click();
        cy.get('div#progressBar', {timeout: 30000} ).should('have.text', '100%');
    })
})  