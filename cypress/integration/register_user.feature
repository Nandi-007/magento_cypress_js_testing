Feature: Register user

  Scenario: Register with valid creds positive
    Given open main page
    And open register
    When fill first name
    And fill last name
    And fill email address
    And fill password
    And fill password confirmation
    And click create account button
    Then registration successful message appears
