/// <reference types="cypress" />

class homeSaucePage {
    elements = {
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginBtn: () => cy.get('#login-button'),
        errorMesage: () => cy.get('h3[data-test="error"]')
    }

    // Metodos

    typeUsername(username) {
        this.elements.usernameInput().type(username)
    }

   typePassword(password) {
        this.elements.passwordInput().type(password)
    }

    clickLogin() {
        this.elements.loginBtn().click();
    }

    errorMensaje() {
        this.elements.errorMesage();
    }
}

module.exports = new homeSaucePage();