import { Before, Given } from "cypress-cucumber-preprocessor/steps";
import { LandingPage } from "../../../page-objects/Landing-page";
import { LoginPage } from "../../../page-objects/login-page";


const login = new LoginPage;
const landing = new LandingPage;

Before(()=>
{
    cy.clearCookies();
    // cy.clearLocalStorage();
    cy.visit(Cypress.env('url'))
}
)


Given('User is logged in',()=>
{
    login.chooseLoginWithEmail();
    login.provideCorrectEmailCredentials();
    landing.validateLandingPageDisplayed();

}


)