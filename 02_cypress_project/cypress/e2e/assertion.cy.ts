describe('Scénář #1', () => {

    beforeEach('visit web', () => {
        cy.visit('/textinput');
    });
    
    // Implicitní - sould, and
    it.skip('test #1', () => { 
        cy.get('button#updatingButton')
            .should('be.visible')
            .and('have.text', "Button That Should Change it's Name Based on Input Value")
            .and('contain.text', "Button That Should"
        );
    });

    // Explicitní, knihovna Chai
    it.skip('test #2', () => {
        cy.get('button#updatingButton')
            .then((btn) => {
                expect(btn).to.have.text("Button That Should Change it's Name Based on Input Value");
                expect(btn).to.be.visible;
                expect(btn).to.contain('Button That');

                cy.url().should('contain', '/textinput');
            })
    });

    // stránky #1 – používá `cy.url().should()` -> Cypress chain (má retry mechanismus)
    it('stránky #1', () => {
        cy.url() // zavolá Cypress command, který získá aktuální URL stránky
            .then((webUrl) => { // počká, až bude URL k dispozici, a spustí callback
                cy.log(webUrl); // vypíše URL do Cypress logu pro kontrolu
                cy.url() // znovu získá aktuální URL (může se změnit po redirectu)
                    .should('contain', '/textinput'); // Cypress bude opakovaně čekat (retry), dokud URL nebude obsahovat "/textinput"
            });
    });

    // stránky #2 – používá `expect()` v `.then()` -> běžný JS assert (bez retry mechanismu)
    it('stránky #2', () => {
        cy.url() // získá aktuální URL z prohlížeče
            .then(webUrl => { // callback se spustí hned, jakmile Cypress získá URL
                cy.log(webUrl); // vypíše URL do logu
                expect(webUrl).to.contain('/textinput'); // okamžitá kontrola (bez čekání) – pokud se URL mění pomaleji, test může selhat
            });
    });
})