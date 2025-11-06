import 'cypress-xpath'; 

describe('Scénář', () => {

    beforeEach(() => {
        cy.visit('/dynamicid');
    })

    it('test', () => {
        cy.xpath('//h3');
        cy.xpath('//h3').should('have.text', 'Dynamic ID');
        cy.xpath('//*'); // Vybírá všechny prvky
        cy.xpath('//*[text()="Scenario"]'); 
    })
})
