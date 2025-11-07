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
    
• cy.get - výběr podle css selektorů
• cy.contains - výběr podle textu
• kombinace

xPath 
• zkratka pro XML Path Language – dotazovací jazyk pro výběr elementů v XML/HTML dokumentu
• umožňuje vybírat prvky podle jejich hierarchie nebo atributů, podobně jako CSS selektory, ale s větší přesností

Cypress ho standardně nepodporuje, je potřeba doinstalovat plugin:
• npm install -D cypress-xpath

a přidat do support/commands.ts:
• import 'cypress-xpath'; // TS
• require("cypress-xpath") // JS

poté lze používat:
• cy.xpath('//button[text()="Uložit"]') –> najde <button> s textem "Uložit"
• cy.xpath('//div[@id="container"]/span') –> najde <span> uvnitř <div id="container">
• výhodou je možnost přesně cílit složitější struktury
• nevýhodou je menší čitelnost a pomalejší výkon oproti CSS selektorům

pageLoadTimeout: 60000 
• nastavení maximálního času (v milisekundách), po který Cypress čeká na kompletní načtení stránky
• výchozí hodnota je 60000 ms (tedy 60 sekund)
• pokud se stránka nenačte do tohoto času, test selže

Cypress.config('defaultCommandTimeout', 16000)
• nastaví výchozí maximální čas (v milisekundách), po který Cypress čeká na dokončení příkazů
• týká se většiny příkazů jako cy.get(), cy.contains(), cy.click(), cy.type() atd.
• pokud se prvek nebo akce neprovede do 16 sekund, test selže

npm install cypress-real-events 
• nainstaluje balíček "cypress-real-events" jako vývojovou závislost
• pozor: správný název balíčku je "cypress-real-event" (v jednotném čísle)
• pokud použiješ "cypress-real-events" (v množném), tento balíček buď neexistuje,
• nebo není oficiálně podporovaný plugin pro Cypress

správný postup instalace:
• npm install -D cypress-real-event

a poté do support/e2e.ts přidat:
• import 'cypress-real-event/support'

plugin umožňuje realistické interakce jako:
• cy.realClick()      -> skutečný klik myší
• cy.realHover()      -> skutečný hover
• cy.realPress('Tab') -> simulace stisku klávesy
• cy.realType('text') -> realistické psaní

• within – omezí hledání prvků jen na vybraný kontejner
• parents – vybere nadřazené elementy aktuálního prvku
• as – vytvoří alias pro prvek nebo hodnotu, kterou lze znovu použít 
     - cy.wrap(value).as('cpuValue') -> vypsání cy.get('@cpuValue');
*/ 