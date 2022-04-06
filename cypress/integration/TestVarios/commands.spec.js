/// <reference types="cypress" />

describe('Ejemplo de comandos', function() {
    
    beforeEach( function() {
        cy.visit('https://www.saucedemo.com/');
    });

    it('Succest Login Test', function() {
        cy.typeLogin('standard_user', 'secret_sauce');
        cy.get('.title').should('contain.text', 'Products');
        cy.LogOut();
        cy.url().should('eq', 'https://www.saucedemo.com/');
    });

    it('Fail Login Test', function() {
        cy.typeLogin('standard_user', 'Dummy');
        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service');
    });
});