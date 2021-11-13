# Readme
Lukasz Bartkowiak

## Overview

The repository contains a custom-made BDD automation framework made with Cypress.io and Cucumber. It is a complete test suite, utilizing BDD methodologies as well as Page Object Model concept. It could be used as a baseline for extensive regression test suite for the AUT (Aplication Under Test) app.languagedrops.com (react-native language learning game) or become a boilerplate for test automation of any other web application. 



## Used concepts

### BDD
The tests utilize Cucuber BDD framework. Each feature group containing tests is kept in a feature file. The features can be run separately or in a bulk, by running all.features file. The javascript implementatnion of those tests is kept in relevan folders in ./implementation, which is a standard practice for Cucumber with Cypress.

### Page Object Model

Methods in javascript implementation classes are pulled from Page Object classes, which are kept in ./page-objects folder. This is not a standard practice in Cypress as it introduces additional challenges with handling the classes and objects. This however provides better tests suite maintainability, as changes in locators etc. need to be done in only one place. An alternative for this would be keeping such methods in modules and importing them to test implementation modules.for the test suite once the tests have been writted and 
Methods in javascript implementation classes are pulled from Page Object classes, which are kept in ./page-objects folder. This is not a standard practice in Cypress as it introduces additional challenges with handling the classes and objects. This however provides better tests suite maintainability, as changes in locators etc. need to be done in only one place. An alternative for this would be keeping such methods in modules and importing them to test implementation modules.

## Impressions and challenges
The Aplication Under Tests stands out with design for testablity. Having a variety of html attributes that's sole purpose is to use in automated tests solves a lot of potential issues and makes writing the tests easier. 

For the test example's simplicity it is assumed that test user will use English as the main app language. This of course if prone to change in real-use situation and would require the tests to be language-agnostic or/and the app to be tested agains various main/learned language pairs. 

As the data in AUT is pulled with api requests waiting for elements is more complex and requires additional effort. 

The variety of user languages and settings, and the method of loading them provides another layer of complexity with providing initial state of application, that would ensure that the tests are state agnostic.

Having access to a test enviornment where each game could be easily accessed and tested in isolation could make the automation process less complex.

## How to install
- clone repo
- run `npm install`
- create a cypress.env.json file and provide the username and password for your account in the following format:

 `{
        "username": "**********",
        "password": "**********"
    }`


