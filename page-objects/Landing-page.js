export class LandingPage{


    waitForEvent(){
        cy.intercept('https://api.indicative.com/service/event',
                'POST')
            .as('eventComplete');
            cy.wait('@eventComplete');
    }

    validateLandingPageDisplayed(){
        // cy.intercept('https://api.indicative.com/service/event',
        //     'POST')
        // .as('pageLoaded');
        // cy.wait('@pageLoaded');
        // cy.wait(6000);
        cy.get('[data-testid=DebugMenu]').should('be.visible');
        cy.get('[data-testid*=Topic_').should('be.visible');
        cy.get('[data-testid=Topic_5').should('have.text','Food');

        cy.contains('Food').should('be.visible')

    }
    openTopic(number){
        cy.get(`[data-testid=Topic_${number}]`).click({force:true});
    }


}