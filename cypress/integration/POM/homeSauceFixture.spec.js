import homeSaucePage from "../../../pages/sauceDemo/homeSaucePage";
import inventoryPage from "../../../pages/sauceDemo/inventoryPage";

// Array de jsons
const tests = require('../../fixtures/dataDriven/sauceUsers.json')

describe('Home Sauce Demo', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    })

    tests.forEach( test => {
        
        it(test.name, () => {
            homeSaucePage.typeUsername(test.username)
            homeSaucePage.typePassword(test.password)
            homeSaucePage.clickLogin();

            if( test.name === "Loguearse en la pagina SauceDemo" ) {
                inventoryPage.elements.titleSpan().should('have.text', 'Products')
            } else {
                homeSaucePage.elements.errorMesage().should('have.text', test.expected);
            }
        });

    });

});