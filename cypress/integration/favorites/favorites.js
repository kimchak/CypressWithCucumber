
import { Then } from "cypress-cucumber-preprocessor/steps";
import { FavoritesPage } from "../../../page-objects/Favorites-page";
import { LandingPage } from "../../../page-objects/Landing-page";
import { WordListPage } from "../../../page-objects/wordList-page";

const wordList = new WordListPage;
const landing = new LandingPage;
const favorites = new FavoritesPage
let favWord;

Then('Go to Foods word list',()=>
{
    landing.openWordList(5)
})

Then('Add a word to favorites',()=>
{
wordList.toggleFavorite('egg');
})

Then('Go to favorites page',()=>
{
    wordList.closeWordList();
    landing.openFavorites();
})

Then('Validate favorite word visible',()=>
{
    favorites.validateWordAdded('egg')
})
