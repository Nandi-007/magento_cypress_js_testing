import { faker } from "@faker-js/faker";

export default class RegisterPage {

    registration_Button = "a[href='https://magento.softwaretestingboard.com/customer/account/create/']"

    firstName_input = "#firstname"
    lastName_input = "#lastname"
    email_input = "#email_address"
    password_input = "#password"
    passwordConfirm_input = "#password-confirmation"
    create_Button = "button"
    popup_message = "div.message-success.success.message"

    randomFirstName = faker.person.firstName();
    randomLastName = faker.person.lastName();
    randomEmail = faker.internet.email();
    randomPassword = faker.internet.password();
    passConfirmation = this.randomPassword;

    fillFirstName() {
            cy.get(this.firstName_input).type(this.randomFirstName);
        }

    fillLastName() {
            cy.get(this.lastName_input).type(this.randomLastName);
        }

    fillEmailAddress() {
            cy.get(this.email_input).type(this.randomEmail);
        }

    fillPassword() {
            cy.get(this.password_input).type(this.randomPassword);
        }

    fillPasswordConfirm() {
            cy.get(this.passwordConfirm_input).type(this.passConfirmation);
        }

    clickCreateAccountBtn() {
            cy.get(this.create_Button)
            .contains("Create an Account")
            .click();
        }

    openRegistration() {
        cy.get(this.registration_Button)
          .contains("Create an Account")
          .click();
        }

    registrationSuccessMessage() {
        cy.get(this.popup_message)
          .contains("Thank you for registering with Main Website Store.")
          .should("be.visible");
        }

}
