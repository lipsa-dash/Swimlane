# Swimlane

How to setup cypress on your computer
--------------------------------------
Refer to https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements

Then download the repo. There's hardly any setup required. 

Cypress has excellent documentation for how to setup, cypress api's, and general principles for testing with cypress. 

This readme is just a running log of useful tidbits of information to help you get started. 


How to run tests on cypress
----------------------------

To open the test-runner, which is used for debugging, navigate to the Cypress folder (or just open terminal in Visual Code), then type into command line: 

npx cypress open 

or

node_modules/.bin/cypress open

Then, from the window that opens, click the file you want to run.

Some notes about the cypress.json configuration file
-----------------------------------------------------
All environment related url's are stores in this file.
To turn off video recording, you can pass in argument --config video=false 
You can also set this in cypress.json (which I have done already)

How the cypress repo is organized
---------------------------------
Integrated Cypress with BDD Framework and followed a page object model

Classes represent the different sections of the app (A 'section' is defined as any page or group of pages that is accessible via the same url route):
-These classes will contain the links to various parts of the app (content library, settings, target etc)
-These classes will contain the locators to various elements in the app
-These classes will contain any text that we need to check against (like the page titles)
-These classes will contain helper functions

In essence, a class will contain locators, text, links and helper functions all in one file. 

Avoid throwing every locator and helper function into the common class

The commands.js file in support folder contains custom cypress functions. To keep things organized, only include functions here if they are useful functions for 
cypress testing in general. 
app-spefific urls or locators should not go into the commands.js file - these should go into one of the classes. 

