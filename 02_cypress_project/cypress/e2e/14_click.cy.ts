describe('Scénář', () => {

    before(() => {
        cy.visit('/click');
    })

    it.skip('class', () => {
        cy.get('button#badButton')
            .click()
            .should('have.class', 'btn-success');
    })

    it('background color', () => {
        cy.get('button#badButton') 
            .click()
            .should("have.css", "background-color", "rgb(40, 167, 69)");
    })
}) 