// Hooks -> Moch

/*
1. before() -> UNA VEZ, al principio
2. beforeEach() -> Antes de cada test
3. TEST EXECUTION
4. afterEach() -> Despues de cada test
5. beforeEach()
6. TEST EXECUTION
7. after() -> UNA VEZ, al final
*/

describe('Demo de Hooks', () => {

    before( () => {
        cy.log('before');
    });

    beforeEach( () => {
        cy.log('Before Each');
    });
    it('Should be test #1', () => {
        console.log('test #1');
    });
    it.only('Should be test #2', () => {
        console.log('test #2');
    });
    it('Should be test #3', () => {
        console.log('test #3');
    });

    afterEach( () => {
        cy.log('After Each');
    });

    after( () => {
        cy.log('After');
    });
});