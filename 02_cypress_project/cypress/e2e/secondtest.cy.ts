/*
Testovací soubor secondtest.cy.ts (test suite file)
• describe -> testovací scénář, testovací skupina (test suite, test group)
• it -> jednotlivý test (test case)

• () => {} // popisuje sadu testů s názvem 'Moje druhá sada testů'
*/

describe('první sada testů', () => { // describe() definuje sadu testů s názvem 'první sada testů'

  it('test #1', () => {
    cy.log('Zde je test #1'); // cy.log() vypíše zprávu do konzole Cypress
  }) // it() definuje jednotlivý test s názvem 'test #1'

  it('test #2', () => {
    cy.log('Zde je test #2'); // cy.log() vypíše zprávu do konzole Cypress    
  }) // it() definuje jednotlivý test s názvem 'test #2'

  it('test #3', () => {
    cy.log('Zde je test #3'); // cy.log() vypíše zprávu do konzole Cypress
  }) // it() definuje jednotlivý test s názvem 'test #3'
}) 