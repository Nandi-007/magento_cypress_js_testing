export default class SearchPage {
    productItemName = '.product-item-name'
    suggestions = '@suggestions'
    searchInput = '[id="search"]'
    searchBtn = 'button.action.search'

    interceptSuggestions() {
        cy.intercept('GET', '/search/ajax/suggest/**').as('suggestions')
    }

    fillSearchInput(searchKeyword) {
        cy.get(this.searchInput).type(searchKeyword);
    }

    suggestionsContainSearchKeyword(searchKeyword) {
        cy.wait('@suggestions').then(function ({ response }) {
            cy.wrap(response.body).each(function (suggestion) {
                expect(suggestion.title.toLowerCase()).to.contain(searchKeyword);
            });
        });
    }

    clickSearchButton() {
        cy.get(this.searchBtn).click();
    }

    searchedItemContainsSearchKeyword(searchKeyword) {
        cy.get(this.productItemName).first().invoke('text').then(function (text) {
            expect(text.toLowerCase()).to.contain(searchKeyword);
        });
    }
}
