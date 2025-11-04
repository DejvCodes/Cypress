// yield 

describe('Testovací scénář #1', () => {
    beforeEach('before', () => {
        cy.visit('/textinput');
    });

    it.skip('test #1 - title', () => {
        cy.url()
            .then(url => cy.log(`Zjištěna URL. ${url}`))
            .title().should('eq', 'Text Input')
    });     

    it('test #2 - btn', () => {
        cy.get('button#updatingButton')
            .then(btn => cy.log(btn.text()))
    });
})