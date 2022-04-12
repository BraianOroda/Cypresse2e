/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});

// En test se devuelve la arquitectura del micro procesador

it('ARCH', function() {
    cy.log(Cypress.arch);
});