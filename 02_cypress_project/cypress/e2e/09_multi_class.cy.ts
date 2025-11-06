describe('Scénář', () => {
  
    beforeEach(() => {
        cy.visit('/dynamicid');
    })

    it('button', () => {
        cy.get('.btn.btn-primary'); 
        cy.get('button.btn.btn-primary'); 
        cy.get('button[class="btn btn-primary"]');
        // cy.get('button[class="btn-primary btn"]'); // Error
        // cy.get('button[class="btn btn-primary test"]'); // Error
        cy.get('button.btn.btn-primary').should('have.text', 'Button with Dynamic ID');
    })
})
