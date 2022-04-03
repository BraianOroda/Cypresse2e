/// <reference types="cypress" />

describe('Testing API', () => {

    beforeEach( function() {
        cy.request('GET', 'http://localhost:3000/todos').as('getTareas')
    });

    it('Body Length - Test', () => {
        cy.request('http://localhost:3000/todos')
        .its('body')
        .should('have.length', 2)
    });

    it('Request status', () => {
        cy.request('http://localhost:3000/todos')
        .its('status')
        .should('eq', 200)
    })

    it('Request - test en headers y content type', () => {
        cy.request('http://localhost:3000/todos')
        .its('headers')
        .its('content-type')
        .should('eq', 'application/json; charset=utf-8')
    })

    const itemsesperados = [
        {
            "title": "buy milk",
            "completed": false,
            "id": "1"
          },
          {
            "title": "wash dishes",
            "completed": false,
            "id": "2"
          }
    ]

    it('Testing en los items esperados', () => {
        cy.request('http://localhost:3000/todos')
        .its('body')
        .should('deep.eq', itemsesperados)
    });

    it('JSON validar atributos', () => {
        cy.request('http://localhost:3000/todos')
        .its('body')
        .each( atributo => {
            expect(atributo).to.have.all.keys('title', 'completed', 'id')
        })
    });

    it('Usando alias en el Request', function() {
        cy.get('@getTareas').should( response => {
            expect(response.body).to.have.length(2);
            expect(response).to.have.property('headers');
            expect(response).to.have.property('duration');
        })
    });
});