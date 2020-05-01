Feature: Header

  I want to see my header info

  Scenario: I can see the login and register links
    Given I go to "/"
    Then I see a login and a register link in the header
