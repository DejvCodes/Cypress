/* 
Spustíme pomocí npm run test

! Důležitá část package.json: !
  "scripts": {
    "test": "cypress open" // Zadáváme do terminálu při instalaci
  },
*/

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})