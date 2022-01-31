/// <reference types="Cypress" />
const loginURL = Cypress.env("APIURL") + Cypress.env("loginAPIURl");
const dataJson = require("../fixtures/user")

/** API Request:User Token generation function */ 
Cypress.Commands.add("userTokenApi", () => {
    let accesstoken
    cy.request({
        method: 'POST',
        url: loginURL,
        body: {
            "username": dataJson[0].username,
            "password": dataJson[0].password,
        },
    }).then((response) => {
        accesstoken = response.body.token;
        cy.log(accesstoken)
        cy.writeFile("cypress/fixtures/userApiToken", {
            token: accesstoken,
        });
    })
})
