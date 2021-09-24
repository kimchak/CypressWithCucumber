import { Given, Then } from "cypress-cucumber-preprocessor/steps";


Given('I go to Drops page',()=>
{
    cy.visit(Cypress.env('url'));
})

Then('I log in with valid email credentials',()=>
{
    cy.get('[data-testid=EmailButton]').click();
    cy.get('[data-testid="EmaiSignup_Login"]').click();
    cy.get('[data-testid=EmaiSignup_Email]').type(Cypress.env('username'));
    cy.get('[data-testid=EmaiSignup_Password]').type(Cypress.env('password'));
    cy.get('[data-testid=EmaiSignup_Submit]').click();
    cy.get('[data-testid="appNavigator"]').should('be.visible')


})