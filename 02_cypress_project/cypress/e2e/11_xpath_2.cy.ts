import 'cypress-xpath'; 

describe('Scénář', () => {

    beforeEach(() => {
        cy.visit('/classattr');
    })

    it.skip('test', () => {
        cy.xpath('//pre[@class=" language-html"]');
        cy.xpath('//pre[@class=" language-html"]')
            .should('contain.text', 'btn-test');
    })

    it.skip('button', () => {
        cy.xpath("//button[contains(concat(' ', normalize-space(@class), ' '), ' btn-primary ')]")
        .should('have.css', 'background-color', 'rgb(0, 123, 255)');
    })

    it('button 2', () => {
        cy.get('button.btn-primary')
        .should('have.css', 'background-color', 'rgb(0, 123, 255)');
    })
})