/// <reference types="cypress" />

const endpoint = 'http://localhost:3000/todos';

// bjeto a validar en el request
const todoObj = {
    "title": "NewTodoObjectFromPost",
    "completed": false,
    "id": 4
}

// datos enviados al endpoint => todoObj
const addTarea = todoObj => {
    cy.request('POST', endpoint, todoObj);
}

// validacion del item consultando su URL + su ID
// NOTA IMPORTANTE: Luego de repetidos intentos el servicio devuelve un erro 500 devido a que es imposible
// insertar un id repetido
describe('API TESTING DEMO - POST', () => {
    it('Add a todo - POST', () => {
        addTarea(todoObj);
        cy.request('GET', `${endpoint}/${todoObj.id}`)
        .its('body')
        .should('deep.eq', todoObj)
    })
});