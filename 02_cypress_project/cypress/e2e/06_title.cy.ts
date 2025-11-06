describe('Test scénář', () => {

    beforeEach(() => {
        cy.visit('/textinput');
    })

    it('title test', () => {
        cy.title().should('eq', 'Text Input');
        cy.title().then(title => {
            expect(title).to.be.equal('Text Input'); // OK
            expect(title).to.contain('Input'); // OK
            expect(title).to.contain('I'); // OK
            expect(title).not.to.be.empty; // OK
        }); 
    })  
})