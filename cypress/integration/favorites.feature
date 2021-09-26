Feature: Saving words to favorites

Scenario: Add a word to favorites
Given User is logged in
Then Go to Foods word list
Then Add a word to favorites
Then Go to favorites page
Then Validate favorite word visible