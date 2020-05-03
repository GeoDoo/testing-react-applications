Feature: Login page

  I want to login to the application

  Background: I visit the login page
    Given I go to "/"
    And I do not see login and register links in the header
    And I see a greeting message "Sign In"
    And I see a link to create an account
    And I see a login form with a username and password fields and a login button

  Scenario: I can login successfully
    When I type in my username and password
    And I submit the form
    Then I successfully login
    And I should go to "/dashboard"

  Scenario: I cannot login without the correct credentials
    When I submit the form
    Then I see the message "Email cannot be blank!"
    And I type an invalid email
    And the error message "Email cannot be blank!" is gone
    And I submit the form
    And I am logged out
    And I see the message "Email should be a valid email!"
    And I type in my username
    And the error message "Email should be a valid email!" is gone
    And I submit the form
    And I am logged out
    And I see the message "Password cannot be blank!"
    And I type the wrong username
    And the error message "Password cannot be blank!" is gone
    And I submit the form
    And I am logged out
    And I see the message "User credentials are wrong!"
    And I type the wrong password
    And the error message "User credentials are wrong!" is gone
    And I submit the form
    And I am logged out