import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { faker } from "@faker-js/faker";
import HeaderPage from '../../pages/header_page';
import RegisterPage from '../../pages/register_page';
const headerPage = new HeaderPage();
const registerPage = new RegisterPage();

When('fill first name', () => {
  registerPage.fillFirstName()
});

When('fill last name', () => {
  registerPage.fillLastName()
});

When('fill email address', () => {
  registerPage.fillEmailAddress()
});

When('fill password', () => {
  registerPage.fillPassword()
});

When('fill password confirmation', () => {
  registerPage.fillPasswordConfirm()
});

When('click create account button', () => {
  registerPage.clickCreateAccountBtn()
});

Then('registration successful message appears', () => {
  registerPage.registrationSuccessMessage()
});

Given('open main page', () => {
  headerPage.openMainPage()
});

Given('open register', () => {
  registerPage.openRegistration()
});
