/// <reference types="Cypress" />
import { user } from "../fixtures/user"
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const baseUrl = Cypress.env("baseUrl")
const loginURL = Cypress.env("APIURL") + Cypress.env("loginAPIURl");
const dataJson = require("../fixtures/user")

// API Request:User Token generation function
Cypress.Commands.add("userTokenApi", () => {
    let accesstoken
    // This will generate user token to access API Requests
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
        cy.writeFile("cypress/fixtures/example.json", {
            token: accesstoken,
        });
        cy.fixture('example.json').then(printToken => {
            cy.log(printToken.token)
        })
    })
})
