describe('Scénář', () => {
  
    beforeEach(() => {
        cy.visit('/dynamicid');
    })

    it.skip('#1 test', () => {
        // cy.get - výběr podle css selektorů
        // cy.contains - výběr podle textu
        // kombinace
        cy.get('.container h3');
        cy.contains('h3', 'Text Input');
        cy.get('.container h3').contains('Text Input');
    })

    it.skip('#2 dynamic ID', () => {
        cy.contains('Button with Dynamic ID'); // Podle textu
        cy.contains('button', 'Button with Dynamic ID'); // Prvek button + podle textu
    })

    it('#3 find', () => {
        cy.get('.container').find('h3');
        cy.get('.container').find('h3').contains('Dynamic ID');
        cy.get('.container').find('h3').should('have.text', 'Dynamic ID');
    })
})
  