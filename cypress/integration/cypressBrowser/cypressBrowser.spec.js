/// <reference types="cypress" />

describe('Cypress Browser Demo', () => {

    it('Browser Properties', () => {
        // cy.log(Cypress.browser);

        cy.visit('https://www.whatismybrowser.com/es/');

        if(Cypress.browser.name === 'chrome') {
            cy.get('.string-major > a').should('have.text', 'Chrome 99 on Windows 10');
        } else if(Cypress.browser.name === 'firefox') {
            cy.get('.string-major > a').should('have.text', 'Chrome 90 on Windows 10');
        }

    });

});