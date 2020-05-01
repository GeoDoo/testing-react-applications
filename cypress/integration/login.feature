Feature: Login page

  I want to login to the application

  Background: I visit the login page
    Given I go to "/login"
    And I see a greeting message "Sign In"
    And I see a link to create an account
    And I see a login form with a username and password fields and a login button

  Scenario: I can login successfully
    When I type in my username and password
    And I submit the form
    Then I successfully login
    And I should go to "/dashboard"

  Scenario: I cannot login without email
    When I submit the form
    Then I see the message "Email cannot be blank!"

  Scenario: I cannot login without a valid email
    When I type an invalid email
    And I submit the form
    Then I see the message "Email should be a valid email!"

  Scenario: I cannot login without password
    When I type in my username
    And I submit the form
    Then I see the message "Password cannot be blank!"

  Scenario: I cannot login without the correct credentials
    When I type the wrong username and password
    And I submit the form
    Then I see the message "User credentials are wrong!"
