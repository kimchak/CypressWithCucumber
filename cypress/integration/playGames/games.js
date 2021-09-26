import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import { GamePage } from "../../../page-objects/Game-page";
import { LandingPage } from "../../../page-objects/Landing-page";

const game = new GamePage;
const landing = new LandingPage;

Given('Landing page is displayed',()=>
{
    landing.validateLandingPageDisplayed()
})

Then('Click on a topic',()=>
{
    landing.openTopic(5);
})

Then('Game is started',()=>
{
game.validateGamePageDisplayed()
})

Then ('Drag the picture to save',()=>
{
game.memorizeWord();
})