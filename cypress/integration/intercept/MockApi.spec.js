/// <reference types="cypress" />

describe('Intercept Demo', () => {
    it('Validacion inicial', () => {
        cy.visit('http://localhost:3000/');
        cy.get('#todo-list li')
        .should('have.length', 3)
        .and('contain', 'buy milk')
        .and('contain', 'wash dishes')
        .and('contain', 'avanzar en la vida :v');
    });

    it('Mocked API Response', () => {
        cy.intercept('GET', '/todos', {
            fixture: 'interceptFixture/interceptFixture.json'
        }).as('getTdoso-Fixture');

        cy.visit('http://localhost:3000/');

        cy.get('#todo-list li')
        .should('have.length', 3)
        .and('contain', 'Comprar Tiempo')
        .and('contain', 'Lavar Dinero')
        .and('contain', 'avanzar en la vida ;)');
    });

    it('Item chequeado (check)', () => {
        
        // Se simula la info de un item checkado

        const stub = [{
            "title": "Mock Item Checkeado",
            "completed": true,
            "id": 9
        }]
        
        cy.visit('http://localhost:3000/');

        cy.intercept('GET', '/todos', {
            body: stub
        });
    });
});