/// <reference types="Cypress" />
import { newEmployeeRecord } from "../../support/FunctionalTestLocators/newEmployeeRecord";
let employeeRecord = new newEmployeeRecord();

const employeeRecordDetails = {
  firstName: Math.random().toString(36).substr(2, 7),
  lastName: Math.random().toString(36).substr(2, 7),
  city: Math.random().toString(36).substr(2, 7),
};

/** Create new employee records */ 
describe("Verify Employee Record Submission", () => {
  it("Create new Employee record", () => {
    employeeRecord.createNewEmployeeRecord(employeeRecordDetails);
  });
});
