Feature: Login page

  I want to login to the application

  Scenario: Login successfully
    Given I go to "/login"
    And I see a greeting message "Sign In"
    And I see a link to create an account
    And I see a login form with a username and password fields and a login button
    When I type in my username and password
    And I submit the form
    Then I successfully login
    And I should go to "/dashboard"
