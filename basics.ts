/*
Cypress - základy testování

Testovací soubor 'název' (test suite file)

• describe -> testovací scénář, testovací skupina (test suite, test group)
• it -> jednotlivý test (test case)

• () => {} // popisuje sadu testů s názvem 'Moje druhá sada testů'

• before() -> spustí se jednou před všemi testy ve skupině – používá se pro globální inicializaci
• beforeEach() -> spustí se před každým jednotlivým testem – používá se pro přípravu prostředí testu
• afterEach() -> spustí se po každém jednotlivém testu – používá se pro úklid po testu
• after() -> spustí se jednou po všech testech ve skupině – používá se pro globální úklid nebo uzavření prostředí
• it.skip() -> přeskočí tento konkrétní test – test se nespustí, ale zůstane v reportu jako 'skipped'
• it.only() -> spustí pouze tento test – ostatní testy ve skupině se přeskočí
• describe.skip() -> přeskočí celou skupinu testů – nic z této skupiny se nespustí
• describe.only() -> spustí pouze tuto skupinu testů – všechny ostatní skupiny se přeskočí

Mocha (open source) 
• pro psaní a spouštění E2E testů
• poskytuje cypressu -> describe a it

Cypress API
• příkazy pro interakci s prohlížečem, stránkou nebo prvky na stránce

URL pro testování -> http://www.uitestingplayground.com/

Yield
• klíčové slovo v JS používané uvnitř generator funkcí (function*)
• umožňuje pozastavit a znovu spustit vykonávání funkce
• při každém zavolání .next() se vrátí hodnota po yield a funkce pokračuje dál
• používá se pro řízený asynchronní průběh nebo generování sekvencí hodnot
• v Cypressu se přímo nepoužívá (Cypress používá vlastní chainovací API místo generatorů)

příkaz -> .title().should('eq', 'Text Input'); ověř, že aktuální stránka má přesně tento title: 'Text Input'
• .title() příkaz Cypressu, který získá aktuální title (název) stránky z <title> elementu v <head>
• .should('eq', 'Text Input') aserce – ověřuje, že získaný title se přesně rovná hodnotě 'Text Input'

• eq -> zkratka pro 'equal' – porovnává, zda se dvě hodnoty přesně rovnají (===)
• get –> příkaz Cypressu pro výběr elementů z DOM pomocí CSS selektoru

Assertion
• ověření nebo kontrola stavu
• znamená "aserca" – ověření, že nějaká hodnota nebo stav odpovídá očekávání
• v Cypressu se používá k testování výsledků, textů, tříd, URL, viditelnosti apod.
• pokud aserce selže, test je označen jako neúspěšný

existují dva hlavní způsoby:

1. Implicitní (Cypress příkaz):  
    • kontrola stavu
    • cy.get('button').should('be.visible')
    • cy.url().should('include', '/dashboard')
    • should, and

2. Explicitní (Chai expect syntax):
    • expect(5).to.equal(5)
    • expect('text').to.contain('te')
    • expect($el).to.have.class('active')    
*/  