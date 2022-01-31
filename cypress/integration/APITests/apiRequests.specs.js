/// <reference types="Cypress" />
const recordURL = Cypress.env("APIURL") + Cypress.env("createRecordURI");
const applicationId = Cypress.env("applicationId");
const dataJson = require('../../fixtures/example')

const newRecordFields = {
    a8rki: "APIFirstName",
    a75lt: "APILastName",
    adwok: "APITestCity"
};
let recordId
let recordName
describe('Before Hook To generate API Token', function() {
  
    before('Generate API Token for this test', function(){
        cy.userTokenApi()
    })
})
describe("POST: Create New Employee Record", () => {
    it("Create New Employee Record", () => {
        cy.request({
            method: 'POST',
            url: recordURL,
            body: {
                applicationId: applicationId,
                values: newRecordFields,
            },
            headers: {
                Authorization: "Bearer " + dataJson.token
            },

        }).then((response) => {
            recordId = response.body.id;
            recordName = response.body.name;
            cy.log(recordId)
            cy.log(recordName)
        })
    })
})
describe("GET: Fetch New Employee Record details", () => {
    it("Fetch New Employee Record", () => {
        cy.request({
            method: 'GET',
            url: recordURL + "/" + recordId,
            headers: {
                Authorization: "Bearer " + dataJson.token
            },

        }).then((response) => {
            if (response.body?.name)
          expect(response.body.name).to.eq(recordName);
          cy.log(recordName)
        })
    })
})
describe("DELETE: Delete created Employee Record", () => {
    it("Delete Employee Record", () => {
        cy.request({
            method: 'DELETE',
            url: recordURL + "/" + recordId,
            headers: {
                Authorization: "Bearer " + dataJson.token
            },

        })
    })
})