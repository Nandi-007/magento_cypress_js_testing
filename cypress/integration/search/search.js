import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { faker } from "@faker-js/faker";
import HeaderPage from '../../pages/header_page';
import SearchPage from '../../pages/search_page';
const headerPage = new HeaderPage();
const searchPage = new SearchPage();

Given('open main page', () => {
  headerPage.openMainPage()
});

Given('intercept suggestions', () => {
  searchPage.interceptSuggestions()
});

When('fill search input with {string}', (searchKeyword) => {
  searchPage.fillSearchInput(`${searchKeyword}`)
});

Then('suggestions contain search keyword {string}', (searchKeyword) => {
  searchPage.suggestionsContainSearchKeyword(`${searchKeyword}`)
});

When('click search button', () => {
  searchPage.clickSearchButton()
});

Then('found item contain search keyword {string}', (searchKeyword) => {
  searchPage.searchedItemContainsSearchKeyword(`${searchKeyword}`)
});

