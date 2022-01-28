/// <reference types="Cypress" />
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

// const userNameInputLocator = 'ngx-input[label=Username]';
// const passwordInputLocator = 'ngx-input[label=Password]';
// const loginButtonLocator = '.btn-signin'; 
// const createRecordUrl = '/app/aaUiorxB5O4lm4Cye/record';
// const newEmployeeSubmissionLabel ='New Employee Submission';

Cypress.Commands.add("launchUrl", () => {
    cy.visit("/")
})
