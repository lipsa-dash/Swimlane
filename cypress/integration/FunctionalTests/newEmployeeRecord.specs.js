/// <reference types="Cypress" />
import { newEmployeeRecord } from "../../support/FunctionalTestLocators/newEmployeeRecord"
let employeeRecord = new newEmployeeRecord()

  const employeeRecordDetails={
    firstName : "lipsa",
    lastName : "Dash",
    city : "Hyderabad"
  }

describe("Verify Employee Record Submission", () => {
    it("Create new Employee record", () => {
        employeeRecord.createNewEmployeeRecord(employeeRecordDetails)
    })
})

