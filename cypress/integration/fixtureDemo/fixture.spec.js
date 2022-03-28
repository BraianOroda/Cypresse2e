/// <reference types="cypress" />

describe('Fixtures Demo', () => {
    beforeEach( function () {
        cy.visit('https://www.saucedemo.com/');
        cy.fixture('sauceCredenciales')
        .then( (credenciales) => {
            this.credenciales = credenciales;
        });
    });

    it('Usuario standard', function() {
        cy.get('[data-test="username"]').type(this.credenciales.standardUser);
        cy.get('[data-test="password"]').type(this.credenciales.systemPassword);
        cy.get('[data-test="login-button"]').click();

        cy.get('.title').should('contain.text', 'Products');
    });

    it('Incorrect Username', function() {
        cy.get('[data-test="username"]').type(this.credenciales.dymmyUsername);
        cy.get('[data-test="password"]').type(this.credenciales.systemPassword);
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service');
    });

    it('Incorrect Password', function() {
        cy.get('[data-test="username"]').type(this.credenciales.standardUser);
        cy.get('[data-test="password"]').type(this.credenciales.dummyPassword);
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service');
    });

    it('Locked out user', function() {
        cy.get('[data-test="username"]').type(this.credenciales.lockedUsername);
        cy.get('[data-test="password"]').type(this.credenciales.systemPassword);
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Sorry, this user has been locked out.');
    });
});