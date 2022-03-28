/// <reference types="cypress" />

let username = "standard_user";
let password = "secret_sauce";

describe('Locators en Cypress', () => {
    
    beforeEach( () => {
        cy.visit('https://www.saucedemo.com/');
    });

    it('GET method', () => {
        cy.get('#user-name').type(username);
        cy.get('input#password').type(password);
        cy.get('[data-test="login-button"]').click();
    });

    it('EQ|First|Last', () => {
        cy.get('input').first().type(username);
        cy.get('input').eq(1).type(password);
        cy.get('input').last().click();
    });

});