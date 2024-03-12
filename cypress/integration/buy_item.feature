Feature: Buy Item

  Scenario: Add one item to cart and complete the order
    Given open main page
    And intercept add to cart msg
    When open a product from home page
    And click S size
    And click orange Color
    And add item to cart
    Then item added successfully message appears
    And mini cart number should be 1
    And check number in backend call 1
    When open mini cart
    Then mini cart subtotal is visible
    When proceed to checkout
    Then shipping page is opened
    When fill buyer data
    And go to next page
    Then payment page is opened
    And buyer data is correct
    When click place order button
    Then success page opens
    And success message is visible
