import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { faker } from "@faker-js/faker";
import HeaderPage from '../../pages/header_page';
import HomePage from '../../pages/home_page';
const headerPage = new HeaderPage();
const homePage = new HomePage();

Given('open main page', () => {
  headerPage.openMainPage()
});

Then('promo link number should be {int}', (Number) => {
  homePage.numberOfPromoLinks(`${Number}`)
});

Then('promo links are callable', () => {
  homePage.promoLinksCallable()
});

Then('product number should be {int}', (Number) => {
  homePage.numberOfProducts(`${Number}`)
});

Then('product links are callable', () => {
  homePage.productLinksWorking()
});

Then('footer link is callable', () => {
    homePage.footerLinksWorking()
});

Then('navigation bar links are callable', () => {
    homePage.navigationBarLinksWorking()
});
