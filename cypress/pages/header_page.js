export default class HeaderPage{

    mainPage = "https://magento.softwaretestingboard.com/"

    openMainPage() {
            cy.visit(this.mainPage);
        }
}