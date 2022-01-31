/// <reference types="Cypress" />
import { userLogin } from "../../support/FunctionalTestLocators/userLogin";
let userlogin = new userLogin();

/** User login validations for valid & Invalid user credentials */ 
describe("Verify User Login for Swimlane", () => {
  it("Login to Swimlane with Valid User Credentials", () => {
    userlogin.userLogin();
  });
  it("Login to Swimlane with Invalid User Credentials", () => {
    userlogin.visit();
    cy.fixture("user.json").then((users) => {
      cy.get(userlogin.userNameInputLocator).clear().type(users[1].username);
      cy.get(userlogin.passwordInputLocator).clear().type(users[1].password);
      cy.get(userlogin.loginButtonLocator).click();
      cy.contains("Login failed.").should("be.visible");
    });
  });
});
