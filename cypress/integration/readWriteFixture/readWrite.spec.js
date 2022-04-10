/// <reference types="cypress" />
const filePath = 'cypress/fixtures/readWrite/readWrite.json';

describe('Write/Read Fixture Demo', () => {
    it('Agregar la respuesta de una API a un JSON', () => {
        cy.request('GET', 'http://localhost:3000/todos')
        .then(response => {
            cy.log(response.body);
            cy.writeFile(filePath, response.body)
        });
    });
    it.only('Escribir en un archivo la respuesta de una API a un JSON', () => {
        cy.request('http://localhost:3000/todos')
        .its('body')
        .each( objeto => {
            cy.readFile(filePath).then(array => {
                array.push(objeto)

                cy.writeFile(filePath, array)
            })
        });
    });
});