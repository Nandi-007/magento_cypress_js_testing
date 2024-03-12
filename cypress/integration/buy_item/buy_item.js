import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { faker } from "@faker-js/faker";
import HeaderPage from '../../pages/header_page';
import BuyPage from '../../pages/buy_page';
const headerPage = new HeaderPage();
const buyPage = new BuyPage();

Given('open main page', () => {
  headerPage.openMainPage()
});

Given('intercept add to cart msg', () => {
  buyPage.interceptAddToCart()
});

When('open a product from home page', () => {
  buyPage.openProductFromHomePage()
});

When('click S size', () => {
  buyPage.clickSizeS()
});

When('click orange Color', () => {
  buyPage.clickOrangeColor()
});

When('add item to cart', () => {
  buyPage.clickAddToCartButton()
});

Then('item added successfully message appears', () => {
  buyPage.addSuccessMsgVisible()
});

Then('mini cart number should be {int}', (number) => {
  buyPage.miniCartNumberIs(number)
});

Then('check number in backend call {int}', (number) => {
  buyPage.checkBackendCallSummaryNumber(number)
});

When('open mini cart', () => {
  buyPage.clickMiniCart()
});

Then('mini cart subtotal is visible', () => {
  buyPage.miniCartSubtotalVisible()
});

When('proceed to checkout', () => {
  buyPage.clickProceedToCheckout()
});

Then('shipping page is opened', () => {
  buyPage.shippingPageOpened()
});

When('fill buyer data', () => {
  buyPage.fillEmail()
  buyPage.fillFirstName()
  buyPage.fillLastName()
  buyPage.fillStreet()
  buyPage.fillCity()
  buyPage.fillCountry()
  buyPage.waitPageLoad()
  buyPage.fillPostalCode()
  buyPage.waitPageLoad()
  buyPage.selectState()
  buyPage.fillPhone()
  buyPage.clickInput()
});

When('go to next page', () => {
  buyPage.clickNextButton()
});

When('wait page loading', () => {
  buyPage.waitPageLoad
});

Then('payment page is opened', () => {
  buyPage.paymentPageOpened
});

Then('buyer data is correct', () => {
  buyPage.checkPaymentInfo
});

When('click place order button', () => {
  buyPage.clickPlaceOrderButton
});

Then('success page opens', () => {
  buyPage.successPageOpened
});

Then('success message is visible', () => {
  buyPage.successPurchaseMessage
});
