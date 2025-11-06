describe('Scénář', () => {
    beforeEach(() => {
        cy.visit('/mouseover');
    })

    it('hover', () => {
        cy.get('a.text-primary')
            .realHover();
    })
})