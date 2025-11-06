describe('Scénář', () => {
    
    beforeEach(() => {
        cy.visit('/textinput');
    })

    it('input btn', () => {
        cy.get('input.form-control');
        cy.get('#newButtonName');
        cy.get('input#newButtonName');
    })
})