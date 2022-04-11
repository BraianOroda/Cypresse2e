/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});

describe('ASSERTIONS TDD/BDD', () => {
    
    beforeEach( () => {
        cy.visit('https://demoqa.com/radio-button');
    });

    it('TDD ASSERTIONS', () => {
        cy.log('CHECK LENGTH');
        cy.get('input[type="radio"]').should('have.length', 3);

        // cy.get('input[type="radio"]') => toma todos los input que cumplen esa descripcion
        // cy.get('input[type="radio"]').eq(2) => toma el input que ocupa la 2 posicion (inica en cero = 0)
        // valida la clase del 2do input 'disabled'
        cy.log('CLASS CHECK');
        cy.get('input[type="radio"]').eq(2).should('have.class', 'disabled'); 

        // Valida la inexistencia de la clse .mt-3 al iniciar la web
        cy.log('EXIST CHECK');
        cy.get('.mt-3').should('not.exist');

        cy.log('TEXT CHECK');
        cy.get('input[type="radio"]').eq(0).click({force: true}); // {force: true} fuerxa la accion
        cy.get('.mt-3')
        .should('have.text', 'You have selected Yes')
        .and('include.text', 'Yes')
        .and('not.contain', 'NO'); // es case sensitive

        cy.get('.text-success').should('have.css', 'color', 'rgb(40, 167, 69)');

    });

    it.only('BDD ASSERTIONS', () => {
        
        cy.log('CLASS & LENGTH');
        cy.get('input[type="radio"]').should($inputs => {
            expect($inputs).to.have.lengthOf(3)
            expect($inputs).to.have.class('disabled')
        });

        cy.get('input[type="radio"]').eq(1).click({force: true});

        cy.get('.mt-3').should($element => {
            expect($element).to.have.text('You have selected Impressive')
            expect($element).to.include.text('Impressive')
            expect($element).to.not.include.text('NO')
        });

    });

});