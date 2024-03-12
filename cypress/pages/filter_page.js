import HeaderPage from './header_page';
const headerPage = new HeaderPage();

export default class FilterPage {
    hoodies = '/women/tops-women/hoodies-and-sweatshirts-women.html'
    tanks = '/women/tops-women/tanks-women.html'
    productItem = '.product-item'
    filterItem = '.filter-options-item > div'
    filterItemActive = '.filter-options-item.active'
    item = '.item'
    priceContainer = '.price-container'
    sorter = '[id="sorter"]'
    category1 = 'Style'
    category2 = 'Price'
    styleOption = 'Hoodie'
    priceOption = '$60.00 and above'
    directionSwitcher = '[data-role="direction-switcher"]'

    valueBeforeSort = 0

    openHoodies() {
        cy.visit(headerPage.mainPage + this.hoodies)
    }

    openTanks() {
        cy.visit(headerPage.mainPage + this.tanks)
    }

    productItemLength(number) {
        cy.get(this.productItem).should('have.length', number)
    }

    clickStyle() {
        cy.get(this.filterItem).contains(this.category1).click()
    }

    clickPrice() {
        cy.get(this.filterItem).contains(this.category2).click()
    }

    clickChangeDirection() {
        cy.get(this.directionSwitcher).first().click();
        cy.wait(3500);
    }

    openStyleItem() {
        cy.get(this.filterItemActive).find(this.item).contains(this.styleOption).should('be.visible').click()
    }

    openPriceItem() {
        cy.get(this.filterItemActive).find(this.item).contains(this.priceOption).should('be.visible').click()
    }

    sortItemsByPrice() {
        cy.get(this.sorter).first().select('price')
    }

    getValueBeforeSort() {
        cy.get(this.priceContainer).first().then((element)=>{
				this.valueBeforeSort = Number(element.text().split('$')[1].split('.')[0])
			})
    }

    assertDataAfterSort() {
        cy.get(this.priceContainer).first().then((element)=>{
				let valueAfterSort = Number(element.text().split('$')[1].split('.')[0])
				expect(this.valueBeforeSort).to.be.greaterThan(valueAfterSort)
			})
    }
}
