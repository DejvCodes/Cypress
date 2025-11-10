describe('Scénář', () => {

    beforeEach(() => {
        cy.visit('http://www.uitestingplayground.com/textinput');
    })

    it('test #1', () => {
        // Podle HTML tagu
        cy.get('input');  

        // Podle class
        cy.get('.form-control'); 
        
        // Podle ID
        cy.get('#newButtonName'); 

        // Kombinace
        cy.get('input#newButtonName.form-control');
        
        // Podle atributu bez hodnoty
        cy.get('[fullwidth]'); 

        // Podle atributu s hodnotou 
        cy.get('[placeholder="MyButton"]');  

        // Podle atributut s více hodnotami
        cy.get('.btn.btn-primary'); 
    })

    it('test #2', () => {
        // get - najde element(y) podle selektoru (např. třídy, ID, atributy)
        // contains - najde elementy podle textu, case sensitive
        // find - hledá element(y) uvnitř už nalezeného elementu

        // Contains - najde první výskyt na stránce
        //          - hlídat malá a velká písmena
        //          - zapnutí a vypnutí case sensitive
        
        // cy.contains("Button That Should Change it's Name Based on Input Value");
        // cy.contains("Button That Should Change it's Name Based on Input value"); // Error
        // cy.contains("button that should change it's name based on input value", {matchCase: false});

        // Najdi prvek, který je type button a ma text 'Button...'
        cy.contains('[type="button"]', "Button That Should Change it's Name Based on Input Value");

        // Vyber prvek .form-group, nekdě uvnitř má text 'Set New Button Name'
        cy.contains('.form-group', "Set New Button Name"); 

    })

    it('test #3', () => {
        // Find - nejdříve cy.get | cy.contains
        cy.contains('.form-group', 'Set New Button Name').find('input');
        cy.contains('.form-group', 'Set New Button Name').find('button');
    })

    it('practice', () => {
        cy.get('.container li').contains('Record setting text into the input');
        cy.get('.container li').contains('Then execute your tes');
        cy.get('.form-group').find('button');
        cy.get('input');
        cy.get('form').find('.form-group').get('input');
    })

    it('parents element', () => {
    // parent – vybere přímého rodiče aktuálního prvku
    // parents – vybere všechny nadřazené prvky až ke kořeni DOMu
    // parentsUntil – vybere všechny nadřazené prvky až po zadaný selektor (bez něj samotného)

    cy.get('#updatingButton').parent();
    cy.get('#updatingButton').parent().parent();

    cy.get('#updatingButton').parents();
    cy.get('#updatingButton').parents('.container');

    cy.get('#updatingButton').parentsUntil('.container');
    cy.get('#updatingButton').parentsUntil('section');
    cy.get('#updatingButton').parentsUntil('body');
    })

    // Chaining
    it('chaining', () => {
        cy.get('form')
            .find('.form-group')
            .find('button')
            .click()
            .parent()
            .find('label')
            .should('have.text', 'Set New Button Name');
    })

    it('variable', () => {
        // Vypadá, jako že funguje, ale. nefunguje
        // const button = cy.get('#updatingButton');
        // button.parent().get('label');
        // button.parent().get('input');

        // 1. Cypress alias
        cy.get('#updatingButton').as('blueButton');
        cy.get('@blueButton').parent().get('label');

        // 2. then
        cy.get('#updatingButton').then(btn => {
            // btn je jQuery element a proto chaining nefunguje
            // btn.parent().get('label');

            // musíme ho převést na chaining object, pomocí cy.wrap()
            cy.wrap(btn).parent().get('label');

            // Příklad s textem - také je zapotřebí převést na chaining object
            cy.wrap('David').should('equal', 'David');

            // return v then()
            // return 'test'; // Error
            cy.wrap('David').should('equal', 'David').then(name => {
                return name;
            }).should('equal', 'David');
        });
    })

    it('text', () => {
        // 1. jQuery metoda
        cy.get('#updatingButton')
            .parent()
            .find('label')
            .then(label => {
                const inputLabel = label.text();
                cy.log(inputLabel);
            })

        // 2. invoke příkaz
        cy.get('#updatingButton')
            .parent()
            .find('label')
            .invoke('text')
            .then(text => {
                cy.log(text);
                console.log(text);
            });

        cy.get('#updatingButton')
            .parent()
            .find('label')
            .invoke('text')
            .as('inputLabel');
        
        cy.get('@inputLabel')
            .then(text => {
                cy.log(String(text));
                cy.log(`Obsah proměnné: ${text}`);
            })
    })

    it('attributes', () => {
        cy.get('#updatingButton')
            .invoke('attr', 'class')
            .then(classValue => {
                cy.log(classValue);
                console.log(classValue);
            });
    })

    it('input value', () => {
        cy.get('#newButtonName')
            .type('David')
            .invoke('prop', 'value')
            .then(value => {
                cy.log(value);
            })
    })

    it.only('assertions', () => {
        cy.get('#updatingButton')
            .parent()
            .find('label')
            .should('have.text', 'Set New Button Name')
            .should('contain', 'Set New');

        cy.get('#updatingButton')
            .parent()
            .find('label')
            .invoke('text')
            .then(labelText => {
                expect(labelText).to.equal('Set New Button Name');
            });
    })
})

// "http://www.uitestingplayground.com"
// "https://www.globalsqa.com"
// "https://the-internet.herokuapp.com"
// "https://www.playground.bondaracademy.com/pages/iot-dashboard"