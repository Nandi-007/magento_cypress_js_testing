import { faker } from "@faker-js/faker";

export default class BuyPage {
    productItemInfo = '.product-item-info'
    sSize = '#option-label-size-143-item-167'
	colorOrange = '#option-label-color-93-item-56'
    addToCartBtn = '#product-addtocart-button'
    addToCartSuccessMsg = '[data-ui-id="message-success"]'
    miniCart = '[data-block="minicart"]'
    miniCartCounter = '[data-block="minicart"] .counter .counter-number'
    miniCartSubTotal = '.subtotal .price-container'
    miniCartDropDownProceedToCheckout = '[id="top-cart-btn-checkout"]'
    loadingSpinner = '[title="Loading..."]'
    stateSelect = '[name="shippingAddress.region_id"] > div > select'
    inputRadio = 'input.radio'
    nextBtn = '[data-role="opc-continue"]'
    placeOrderBtn = '[title="Place Order"]'
    createAccountAreaText = '[id="registration"] p'

    email = '#shipping #customer-email'
    firstName = '[name="firstname"]'
    lastName = '[name="lastname"]'
    streetAddress = '[name="street[0]"]'
    city = '[name="city"]'
    stateSelect = '[name="shippingAddress.region_id"] > div > select'
    country = '[name="country_id"]'
    phone = '[name="telephone"]'
    postalCode = '[name="postcode"]'

    randomFirstName = faker.person.firstName()
    randomLastName = faker.person.lastName()
    randomEmail = faker.internet.email()
    randomStreetAddress = faker.address.streetAddress()
    randomCity = faker.address.city()
    randomCountry = 'Hungary'
    randomPostalCode = faker.address.zipCode()
    randomState = 'Alaska'
    randomPhone = faker.phone.number()

    interceptAddToCart() {
        cy.intercept('GET', 'https://magento.softwaretestingboard.com/customer/section/load/**').as('addToCart')
    }

    openProductFromHomePage() {
        cy.get(this.productItemInfo).first().click()
    }

    clickSizeS(searchKeyword) {
        cy.get(this.sSize).click()
    }

    clickOrangeColor() {
        cy.get(this.colorOrange).click()
    }

    clickAddToCartButton() {
        cy.get(this.addToCartBtn).click()
    }

    addSuccessMsgVisible() {
        cy.get(this.addToCartSuccessMsg).should('be.visible')
    }

    miniCartNumberIs(number) {
        cy.get(this.miniCartCounter).invoke('text').then(function(cartNumber){
				expect(Number(cartNumber)).to.eq(number)
			})
    }

    checkBackendCallSummaryNumber(number) {
        cy.wait('@addToCart').then(function({response}){
				expect(response.body.cart.summary_count).to.eq(number)
			})
    }

    clickMiniCart() {
        cy.get(this.miniCart).click()
    }

    miniCartSubtotalVisible() {
        cy.get(this.miniCartSubTotal).should('be.visible')
    }

    clickProceedToCheckout() {
        cy.get(this.miniCartDropDownProceedToCheckout).click()
    }

    shippingPageOpened() {
        cy.wait(3500);
        cy.url().should('include', 'checkout/#shipping')
    }

    fillEmail() {
        cy.get(this.email).type(this.randomEmail)
    }

    fillFirstName() {
        cy.get(this.firstName).type(this.randomFirstName)
    }

    fillLastName() {
        cy.get(this.lastName).type(this.randomLastName)
    }

    fillStreet() {
        cy.get(this.streetAddress).type(this.randomStreetAddress)
    }

    fillCity() {
        cy.get(this.city).type(this.randomCity)
    }

    fillCountry() {
        cy.get(this.country).type(this.randomCountry)
    }

    fillPostalCode() {
        cy.get(this.postalCode).type(this.randomPostalCode)
    }

    fillPhone() {
        cy.get(this.phone).type(this.randomPhone)
    }

    clickInput() {
        cy.get(this.inputRadio).first().click()
    }

    clickNextButton() {
        cy.get(this.nextBtn).click()
        cy.wait(10000);
    }

    waitPageLoad() {
        cy.get(this.loadingSpinner).should('not.exist')
    }

    paymentPageOpened() {
        cy.url().should('include', '#payment')
    }

    selectState() {
        cy.get(this.stateSelect).select(this.randomState)
    }

    checkPaymentInfo() {
        cy.get(PAYMENT.shippingDetails).should('be.visible').then(function(addressDetails){
				expect(addressDetails[0].innerText).include(this.randomFirstName)
				expect(addressDetails[0].innerText).include(this.randomLastName)
				expect(addressDetails[0].innerText).include(this.randomStreetAddress)
				expect(addressDetails[0].innerText).include(this.randomCity)
				expect(addressDetails[0].innerText).include(this.randomCountry)
				expect(addressDetails[0].innerText).include(this.randomPostalCode)
				expect(addressDetails[0].innerText).include(this.randomState)
				expect(addressDetails[0].innerText).include(this.randomPhone)
			})
    }

    clickPlaceOrderButton() {
        cy.get(this.placeOrderBtn).should('be.visible').click()
    }

    successPageOpened() {
        cy.url().should('include', 'checkout/onepage/success/')
    }

    successPurchaseMessage() {
        cy.get(this.createAccountAreaText).invoke('text').should('include', testData.email)
    }

}