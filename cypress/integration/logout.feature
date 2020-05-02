Feature: Logout

  I want to logout of my application

  Background: I am already logged in to my Dashboard
    Given I am logged in
    And I go to "/dashboard"
    And I see only the logout link in the header

  Scenario: I can see only the logout link when I am logged in
    When I click on the logout link
    Then I am logged out
    And I should go to "/"