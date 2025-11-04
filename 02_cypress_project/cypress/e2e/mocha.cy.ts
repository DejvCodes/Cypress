describe('Testovací scénář', () => {
    // before(() => cy.log('Before')); // Co se má stát před spuštěním
    // beforeEach(() => cy.log('BeforeEach')); // Před každým testem

    it('Test #1', () => { 
        cy.log('Zde se nachází: Test #1'); 
    });

    it('Test #2', () => {
        cy.log('Zde se nachází: Test #2');
    });

    it.only ('Test #3', () => {
        cy.log('Zde se nachází: Test #3');
    });

    // afterEach(() => cy.log('AfterEach'));
    // after(() => cy.log('After'));
})

/*
• before() -> spustí se jednou před všemi testy ve skupině – používá se pro globální inicializaci
• beforeEach() -> spustí se před každým jednotlivým testem – používá se pro přípravu prostředí testu
• afterEach() -> spustí se po každém jednotlivém testu – používá se pro úklid po testu
• after() -> spustí se jednou po všech testech ve skupině – používá se pro globální úklid nebo uzavření prostředí

• it.skip() -> přeskočí tento konkrétní test – test se nespustí, ale zůstane v reportu jako "skipped"
• it.only() -> spustí pouze tento test – ostatní testy ve skupině se přeskočí
• describe.skip() -> přeskočí celou skupinu testů – nic z této skupiny se nespustí
• describe.only() -> spustí pouze tuto skupinu testů – všechny ostatní skupiny se přeskočí

• yield -> klíčové slovo v JS používané uvnitř generator funkcí (function*)
        -> umožňuje pozastavit a znovu spustit vykonávání funkce
        -> při každém zavolání .next() se vrátí hodnota po yield a funkce pokračuje dál
        -> používá se pro řízený asynchronní průběh nebo generování sekvencí hodnot
        -> v Cypressu se přímo nepoužívá (Cypress používá vlastní chainovací API místo generatorů)


Mocha (open source) 
• pro psaní a spouštění E2E testů
• poskytuje cypressu -> describe a it

Cypress API
• příkazy pro interakci s prohlížečem, stránkou nebo prvky na stránce

Pro testování -> http://www.uitestingplayground.com/
*/