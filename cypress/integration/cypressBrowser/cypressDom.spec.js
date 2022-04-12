/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});

// Porme dio de este comando podemos retornar true o false y saber si es visible el elemento

describe('Cypress Dom', () => {

    it('Acordion test', function() {

        cy.visit('https://demoqa.com/accordian');

        cy.get('.collapse').eq(6).then( $elemento => {
            cy.log(`El estado del elemento esta cargado en el website:
            ${Cypress.dom.isVisible($elemento)}`);

            // En este escenario se devuelve true debido a que al ingresar a la web el elemento
            // se encuentra visible en el DOM
        });
    });

    it('Acordion test N°2', function() {
    
        cy.visit('https://demoqa.com/accordian');

        cy.get('#section1Heading').click();

        cy.get('.collapse').eq(6).then( $elemento => {
            // En este escenario el resultado es un false debido a que el elemento es visible
            cy.log(`El estado del elemento esta cargado en el website:
            ${Cypress.dom.isVisible($elemento)}`);
        });
    });

});