Feature: Search

  Scenario: Search from home page
    Given open main page
    And intercept suggestions
    When fill search input with "hero"
    Then suggestions contain search keyword "hero"
    When click search button
    Then found item contain search keyword "hero"
