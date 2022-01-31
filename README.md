# Swimlane

How to setup cypress on your computer
--------------------------------------
Installation :
>Download this project and type below commands in the terminal:

npm install

>How to run the bundled tests from CLI:

npm run cy:scripts

>How to run the bundled tests from Cypress Test Runner:

npm run cy:open

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

