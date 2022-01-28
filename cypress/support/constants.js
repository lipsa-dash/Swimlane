
export const constants = {
    TEST_ENV: Cypress.env('TEST_ENV'),
    envName: {
        qa: "qa"
    },
    domain: {
        swimlane: {
            qa: "qa.swimlane.io",
        }
    },
    baseUrl: {
        'qa-practical': {
            name: 'qa-practical',
            userName: 'lipsa.dash',
            userPassword: "u5IkPY6m5Y02",
            get defaultUser() {
                return this.userName;
            },
            get defaultUserPassword(){
                return this.userPassword;
            }
        },
    }
}