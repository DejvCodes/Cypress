describe('Testovací scénář #1', () => {

    beforeEach('Návštěva stránky',() => {
        cy.visit('/textinput');
    })

    it('test#1', () => cy.log('TEST #1'));
  
    it('test#2', () => cy.log('TEST #2'));

    it('test#3', () => cy.log('TEST #3'));
})