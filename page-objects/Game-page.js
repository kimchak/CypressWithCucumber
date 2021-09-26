
export class GamePage{


    validateGamePageDisplayed(){
        cy.get('[data-testid^=wordImage]').should('be.visible');
    }
}