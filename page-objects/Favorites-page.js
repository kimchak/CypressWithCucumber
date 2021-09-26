export class FavoritesPage{

    validateWordAdded(word){
        cy.contains(word).should('be.visible')
    }

    waitForEvent(){
        cy.intercept('https://api.indicative.com/service/event',
                'POST')
            .as('eventComplete');
            cy.wait('@eventComplete');
    }

}