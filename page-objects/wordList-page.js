
export class WordListPage{

    toggleFavorite(wrd){   
        cy.contains(wrd)
        .closest('div[data-testid=WordRowMain]')
        .find('[data-testid=ToggleFavoriteWord]')
        .click()
cy.get('[data-testid=ToastMessage]').should('be.visible');
    }

    closeWordList(){
        cy.get('[data-testid=CloseButton]').click()
    }
}