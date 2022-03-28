/// <reference types="Cypress" />

describe('Location Demo', () => {
    
    beforeEach( () => {
        cy.visit('https://www.saucedemo.com/');
    });

    it('Debe tener el titulo Swag Labs', () => {
        cy.title().should('eq', 'Swag Labs');
    });

    it('La URL debe ser https://www.saucedemo.com/', () => {
        cy.url().should('eq', 'https://www.saucedemo.com/');
    });

    it('Debe usar el protocolo HTTPS', () => {
        cy.location('protocol').should('contains', 'https');
    });

    it('Validar hostname www.saucedemo.com', () => {
        cy.location('hostname').should('eq', 'www.saucedemo.com');
    });

    it('Debe redireccionar a to /inventory', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        cy.location('pathname').should('eq', '/inventory.html');
    });

});