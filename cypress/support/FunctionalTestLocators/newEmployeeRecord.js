/// <reference types="Cypress" />
import { userLogin } from "./userLogin";
let userlogin = new userLogin();
export class newEmployeeRecord {
  constructor() {
    this.pageUrl = "/record/aaUiorxB5O4lm4Cye/";
    this.createEmployeeButton = "div.app-buttons";
    this.newEmployeeSubmissionLabel = "New Employee Submission";
    this.firstName = 'input[name="a75lt"] ';
    this.lastName = 'input[name="a8rki"]';
    this.city = 'input[name="adwok"]';
    this.saveButton = "span.ngx-check";
    this.confirmSave = ".modal-footer>button";
    this.recordTitle = ".titlebar-icon+span>span";
  }

  createNewEmployeeRecord(config) {
    const firstName = config.firstName;
    const lastName = config.lastName;
    const city = config.city;
    userlogin.userLogin();
    cy.get(this.createEmployeeButton).click();
    cy.contains("New Record").should("be.visible");
    cy.url().should("include", this.pageUrl);
    cy.get(this.firstName).clear().type(firstName);
    cy.get(this.lastName).clear().type(lastName);
    cy.get(this.city).clear().type(city);
    cy.get(this.saveButton).click();
    cy.get(this.confirmSave).click();
    this.getNewlyCreatedRecordId();
  }
  
  getNewlyCreatedRecordId() {
    cy.get(this.recordTitle)
      .invoke("text")
      .then((empRecordId) => cy.log(empRecordId));
  }
}