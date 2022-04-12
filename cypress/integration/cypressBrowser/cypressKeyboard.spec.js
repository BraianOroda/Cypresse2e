/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});

// Esto nos permite setear como este comando va a funcionar porm edio del valor de type

describe('cypress Keyboard', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    });

    it('slow Speed Typing', {keystrokeDelay: 150} , () => {
        cy.get('#user-name').type('test demo for typing');
    });

    it('standard Speed Typing',() => {
        cy.get('#user-name').type('test demo for typing');
    });

    it('fastest Speed Typing', {keystrokeDelay: 0} , () => {
        cy.get('#user-name').type('test demo for typing');
    });

});