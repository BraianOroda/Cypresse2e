describe('Sesion de Retry-Ability', () => {
    beforeEach( () => {
        cy.visit('http://192.168.0.106:8888/#/');
        cy.get('.new-todo').type('todo-A{enter}').type('todo-B{enter}');
    });

    it('Debe crear dos items', () => {
        cy.get('.todo-list li').should('have.length', 2);
    });
    it('Debe contener el texto indicado', () => {
        cy.get('.todo-list li').should('have.length', 2)
        .and( $li => {
            expect($li.get(0).textContent, 'first-item').to.equal('todo-A');
            expect($li.get(1).textContent, 'second-item').to.equal('todo-B');
        });
    });
})