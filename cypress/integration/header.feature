Feature: Header

  I want to see my header info

  Scenario: I can see the login and register links when I am not logged in
    Given I am not logged in
    And I go to "/dashboard"
    Then I see a login and a register link in the header

  Scenario: I can see only the logout link when I am logged in
    Given I am logged in
    And I go to "/dashboard"
    Then I see only the logout link in the header
