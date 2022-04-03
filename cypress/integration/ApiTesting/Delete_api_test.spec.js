/// <reference types="cypress" />

const endpoint = 'http://localhost:3000/todos';

const deletehObject = {
    "title": "NewTodoObjectFromPost",
    "completed": true,
    "id": 9614555558
}

const DeleteTarea = deletehObject => {
    cy.request('DELETE', `${endpoint}/${deletehObject.id}`);
}

describe('API TESTING DEMO - DELETE', () => {
    it('Update a item - DELETE', () => {
        DeleteTarea(deletehObject);

        cy.request('GET',`${endpoint}`)
        .its('body')
        .should('have.length', 1)
    });
});