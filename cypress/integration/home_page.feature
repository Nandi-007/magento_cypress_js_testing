Feature: Home page

  Scenario: Verify basic components of home page are loaded and links are working
    Given open main page
    Then promo link number should be 6
    And promo links are callable
    And product number should be 6
    And product links are callable

  Scenario: Navigation and Footer links
    Given open main page
    Then footer link is callable
    And navigation bar links are callable
