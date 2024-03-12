Feature: Filter

  Scenario: Filter by style and price
    Given open main page
    When open hoodie product
    Then filtered item number is 12
    When filter for style
    And open style filtered item
    Then filtered item number is 9
    When filter for price
    And open price filtered item
    Then filtered item number is 1

  Scenario: Sorting products by Price
    Given open main page
    When open tanks product
    When get value before sorting
    And change sorting direction
    And sort items by price
    Then data after sort is less then before
