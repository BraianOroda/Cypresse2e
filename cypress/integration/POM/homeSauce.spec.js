import homeSaucePage from "../../../pages/sauceDemo/homeSaucePage";
import inventoryPage from "../../../pages/sauceDemo/inventoryPage";

describe('POM Implementacion', () => {
    
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    })

    it('Loguearse en la pagina SauceDemo', () => {
        homeSaucePage.typeUsername('standard_user')
        homeSaucePage.typePassword('secret_sauce')
        homeSaucePage.clickLogin();

        inventoryPage.elements.titleSpan().should('have.text', 'Products')
    });

    it('Loguearse con un usuario bloqueado en la pagina SauceDemo', () => {
        homeSaucePage.typeUsername('locked_out_user')
        homeSaucePage.typePassword('secret_sauce')
        homeSaucePage.clickLogin();

        homeSaucePage.elements.errorMesage().should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
    });

    it('Loguearse con un usuario incorrecto en la pagina SauceDemo', () => {
        homeSaucePage.typeUsername('dummyUser')
        homeSaucePage.typePassword('secret_sauce')
        homeSaucePage.clickLogin();

        homeSaucePage.elements.errorMesage().should('have.text', 'Epic sadface: Username and password do not match any user in this service');
    });

    it('Loguearse con un contraseña incorrecta en la pagina SauceDemo', () => {
        homeSaucePage.typeUsername('standard_user')
        homeSaucePage.typePassword('dummyPassword')
        homeSaucePage.clickLogin();

        homeSaucePage.elements.errorMesage().should('have.text', 'Epic sadface: Username and password do not match any user in this service');
    });

})