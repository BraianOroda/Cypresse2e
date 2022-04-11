/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});

describe('', () => {

    beforeEach( function() {
        cy.visit('https://demoqa.com/modal-dialogs');
    });

    it('Closures & Variables', () => {
        cy.get('#showSmallModal').then($modalbutton => {
            const smallModalText = $modalbutton.text();
            cy.log(smallModalText);

            $modalbutton.click();
            cy.get('#example-modal-sizes-title-sm').contains(smallModalText, { matchCase: false });
            // { matchCase: false } evita que la comparacion sea case sensitive
            cy.wait(400);
            cy.get('#closeSmallModal').click();
        });
    });

    it('Alias Share Context 1er metodo', function() {
        cy.get('#showSmallModal').invoke('text').as('invonkeText');
    });

    it('Share Context 1er metodo', function() { // 1er metodo
        cy.log('INVOKE: ' + this.invonkeText);
    });

    it('Alias Share Context 2er metodo', function() {
        cy.get('#showSmallModal').then($modalbutton => {
            const smallModalText = $modalbutton.text();
            cy.log(smallModalText);

            cy.wrap(smallModalText).as('rapText');
        });
    });

    it('Share Context 2er metodo', function() {
        cy.log('WRAP:' + this.rapText);
    });

});