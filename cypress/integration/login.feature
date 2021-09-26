Feature: Logging into Drops App
 
Scenario: Failed login attempt
    Given I choose to log in with email
    Then I provide wrong password
    Then Login error messsage is thrown

    Scenario: Log in with email
    Given I choose to log in with email
    Then I provide valid login and password
    Then I see the landing page

    
