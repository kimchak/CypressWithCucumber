import { Before, Given, Then } from "cypress-cucumber-preprocessor/steps";
import { LandingPage } from "../../../page-objects/Landing-page";
import { LoginPage } from "../../../page-objects/login-page";

const login = new LoginPage;
const landing = new LandingPage;

Before(()=>
{
    cy.clearCookies();
    cy.clearLocalStorage();
}
)

// Given('I go to Drops page',()=>
// {
// login.navigate()
// })

// Then('I log in with valid email credentials',()=>
// {
//     cy.get('[data-testid=EmailButton]').click();
//     cy.get('[data-testid="EmaiSignup_Login"]').click();
//     cy.get('[data-testid=EmaiSignup_Email]').type(Cypress.env('username'));
//     cy.get('[data-testid=EmaiSignup_Password]').type(Cypress.env('password'));
//     cy.get('[data-testid=EmaiSignup_Submit]').click();
//     cy.get('[data-testid="appNavigator"]').should('be.visible')


// })

Given('I choose to log in with email',()=>
{
login.chooseLoginWithEmail()
})

Then('I provide valid login and password',()=>
{
login.provideCorrectEmailCredentials()
})

Then('I see the landing page', ()=>
{
landing.validateLandingPageDisplayed();
})

Then('I provide wrong password', ()=>{
    login.provideWrongPassword();
})

Then('Login error messsage is thrown', ()=>{
    login.validateLoginErrorMessage();
})
