export default class HomePage {
    promo_links = '.blocks-promo a'
    product = '.product-item'
    product_item_photo = '.product-item .product-item-photo'
    footer = '.footer li a'
    navbar = '.navigation .level-top > a'

    numberOfPromoLinks(number) {
        cy.get(this.promo_links).should('have.length', number);
    }

    promoLinksCallable() {
        cy.get(this.promo_links).each(function (item) {
            cy.request(item[0].href).its('status').should('eq', 200);
            cy.wait(3500);
        });
    }

    numberOfProducts(number) {
        cy.get(this.product).should('have.length', number);
    }

    productLinksWorking() {
        cy.get(this.product_item_photo).each(function (item) {
            cy.request(item[0].href).its('status').should('eq', 200);
            cy.wait(3500);
        });
    }

    footerLinksWorking() {
        cy.get(this.footer).each(function (item) {
            cy.request(item[0].href).its('status').should('eq', 200);
            cy.wait(3500);
        });
    }

    navigationBarLinksWorking() {
        cy.get(this.navbar).each(function (item) {
            cy.request(item[0].href).its('status').should('eq', 200);
            cy.wait(3500);
        });
    }
}