# Swimlane

How to setup cypress on your computer
--------------------------------------
Installation :
>Download this project and type below commands in the terminal:

npm install

>How to run the bundled tests from Cypress Test Runner:

npx cypress open

Some notes about the cypress.json configuration file
-----------------------------------------------------
All environment related url's are stores in this file.
To turn off video recording, you can pass in argument --config video=false 
You can also set this in cypress.json (which I have done already)

How the cypress repo is organized
---------------------------------
Classes represent the different sections of the app (A 'section' is defined as any page or group of pages that is accessible via the same url route):
-These classes will contain the links to various parts of the app (User login, New Employee Record etc.)
-These classes will contain the locators to various elements in the app
-These classes will contain any text that we need to check against (like the page titles)
-These classes will contain helper functions

In essence, a class will contain locators, text, links and helper functions all in one file. 

Avoid throwing every locator and helper function into the common class

The commands.js file in support folder contains custom cypress functions. To keep things organized, only include functions here if they are useful functions for 
cypress testing in general. 
app-spefific urls or locators should not go into the commands.js file - these should go into one of the classes. 

How to run cypress on CircleCI
------------------------------
To do this, the cypress repo needs a config.yml file, which I have already added.

This file makes use of Cypress's 'orb' that handles most the configuration that circleci needs to be able to run the tests.

Refer to these links for how to configure the config.yml file (how to change the browser version etc):

https://github.com/cypress-io/cypress-realworld-app/blob/develop/.circleci/config.yml
https://github.com/cypress-io/cypress-docker-images/tree/master/browsers#cypressbrowsers
https://circleci.com/orbs/registry/orb/cypress-io/cypress

You can sign up for a free personal circleci account. Create a clone of the cypress repo in your own github, and connect it to circleci.

With every commit to this repo, circleci will automatically detect that and re-run the entire test suite. To avoid this, you must manually stop the build.
There is no way to prevent an automatic run with each commit. 

How to run modules in parallel on circleci
------------------------------------------
Here's an example config.yml file: 

version: 2.1
orbs:
  cypress: cypress-io/cypress@1
executors:
  latest-chrome:
    docker:
      - image: "cypress/browsers:node14.7.0-chrome84"
workflows:
  build:
    jobs:
      - cypress/run:
          executor: latest-chrome
          browser: chrome
          spec: "cypress/integration/APITests/apiRequests.spec.js"
      - cypress/run:
          executor: latest-chrome
          browser: chrome
          spec: "cypress/integration/FunctionalTests/userLogin.spec.js"

Each "cypress/run" is run in parallel. Simply specify in "spec" what folders to run for that module 

