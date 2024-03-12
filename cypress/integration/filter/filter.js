import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { faker } from "@faker-js/faker";
import HeaderPage from '../../pages/header_page';
import FilterPage from '../../pages/filter_page';
const headerPage = new HeaderPage();
const filterPage = new FilterPage();

Given('open main page', () => {
  headerPage.openMainPage()
});

When('open hoodie product', () => {
  filterPage.openHoodies()
});

When('open tanks product', () => {
  filterPage.openTanks()
});

Then('filtered item number is {int}', (number) => {
  filterPage.productItemLength(`${number}`)
});

When('filter for style', () => {
  filterPage.clickStyle()
});

When('filter for price', () => {
  filterPage.clickPrice()
});

When('open style filtered item', () => {
  filterPage.openStyleItem()
});

When('open price filtered item', () => {
  filterPage.openPriceItem()
});

When('get value before sorting', () => {
  filterPage.getValueBeforeSort()
});

When('sort items by price', () => {
  filterPage.sortItemsByPrice()
});

Then('data after sort is less then before', () => {
  filterPage.assertDataAfterSort()
});

When('change sorting direction', () => {
  filterPage.clickChangeDirection()
});

