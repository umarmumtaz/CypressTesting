Feature: Login into the application at Beta
Scenario: Login with valid credentials
Given I navigate to the login page 
When I click on the login button
When Allow Cookies
And I enter the Email address
And I enter the Password
Then User should be Login successfully

Scenario: Login with invalid login credentials
Given I navigate to the login page 
When I click on the login button
When Allow Cookies
Then User should be not be Login successfully