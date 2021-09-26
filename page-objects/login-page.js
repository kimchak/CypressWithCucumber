export class LoginPage{

    // navigate(){
    //     cy.visit(Cypress.env('url'));
    // }

    chooseLoginWithEmail(){
    cy.get('[data-testid=EmailButton]').click();
    cy.get('[data-testid="EmaiSignup_Login"]').click();
    }
provideCorrectEmailCredentials(){
    cy.get('[data-testid=EmaiSignup_Email]').type(Cypress.env('username'));
    cy.get('[data-testid=EmaiSignup_Password]').type(Cypress.env('password'));
    cy.get('[data-testid=EmaiSignup_Submit]').click();
    // cy.get('data-testid="LoadingScreen"').should('be.visible')
}

provideWrongPassword(){
    cy.get('[data-testid=EmaiSignup_Email]').type(Cypress.env('username'));
    cy.get('[data-testid=EmaiSignup_Password]').type('idontknow');
    cy.get('[data-testid=EmaiSignup_Submit]').click();
}

validateLoginErrorMessage(){
    cy.contains('Incorrect username or password').should('be.visible');
    
    cy
    .get('[data-testid=EmaiSignup_Email]')
    .closest('div')
    .closest('div')
    .should('have.css', 'background-color', 'rgba(231, 76, 60, 0.5)');
    
    cy.get('[data-testid=EmaiSignup_Password]')
    .closest('div')
    .closest('div')
    .should('have.css', 'background-color', 'rgba(231, 76, 60, 0.5)');

}

}