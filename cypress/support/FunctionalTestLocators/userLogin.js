/// <reference types="Cypress" />

export class userLogin {
    constructor() {
        this.pageUrl = "login"
        this.userNameInputLocator = 'ngx-input[label=Username]';
        this.passwordInputLocator = 'ngx-input[label=Password]';
        this.loginButtonLocator = '.btn-signin';
    }
    visit() {
        cy.visit("/" + this.pageUrl);
        cy.contains("Welcome to Swimlane").should("be.visible")
    }
    userLogin() {
        this.visit()
        cy.fixture('user.json').then(users => {
            cy.get(this.userNameInputLocator).clear().type(users[0].username)
            cy.get(this.passwordInputLocator).clear().type(users[0].password)
            cy.get(this.loginButtonLocator).click()
            cy.contains("Complete Your Profile").should("be.visible")
        })
    }
}

