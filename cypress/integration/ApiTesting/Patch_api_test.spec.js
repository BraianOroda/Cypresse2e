/// <reference types="cypress" />

const endpoint = 'http://localhost:3000/todos';

// PATCH
const patchObject = {
    "title": "NewTodoObjectFromPost",
    "completed": true,
    "id": 4
}

const todoObj = {
    "title": "NewTodoObjectFromPost",
    "completed": false,
    "id": 4
}

// PATCH - se setea el metodo, la URL a actualizar, y el objeto a actualizar
const updateTarea = patchObject => {
    cy.request('PATCH', `${endpoint}/${patchObject.id}`, patchObject);
}

describe('API TESTING DEMO . PATCH', () => {
    it('Update a item - PATCH', () => {
        updateTarea(patchObject);

        // Validacion de body / Validacion de la ctualizacion
        cy.request('GET', `${endpoint}/${todoObj.id}`)
        .its('body')
        .should('deep.eq', patchObject) 
        // Basicamente al validar la estrectura del body en ese objetoversus del obj enviado estos deben ser
        // iguales
    });
});