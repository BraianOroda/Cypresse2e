// Topics:
// -> Describe and Context
// -> It and Specify
// -> Unit testing Demo

let add = ( a, b) => a + b;
let subtract = ( a, b) => a - b;
let divide = ( a, b) => a / b;
let multiply = ( a, b) => a * b;

// Describe o context(alias de Describe) -> 

describe('Unit testing for our dummy aplication', () => {
    context('Math with POSITIVE numbers', () => {
        // It - Specify
        it('Should add positive numbers', () => {
            expect(add(1,2)).to.eq(3);
        });
        it('Should subtract positive numbers', () => {
            expect(subtract(4,2)).to.eq(2);
        });
        it('Should divide positive numbers', () => {
            expect(divide(4,2)).to.eq(2);
        });
        it('Should multiply positive numbers', () => {
            expect(multiply(5,2)).to.eq(10);
        });
    });

    describe('Mach with DECIMAL numbers', () => {
        it('Should add decimal numers', () => {
            expect(add(2.2, 2.2)).to.eq(4.4);
        });
        it('Should subtract decimal numers', () => {
            expect(subtract(4.4, 2.2)).to.eq(2.2);
        });
    });
});