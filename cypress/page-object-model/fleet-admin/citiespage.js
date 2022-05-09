///<reference types="Cypress"/>

class citiespage {
    elements = {
        citiesbreadcrumb: () => cy.get('li.is-active>a'),
        citiesheader: () => cy.get('section.action-header__HeaderWrapper-q7dhgh-0 > h1'),
        addnewcitybutton: () => cy.get('section.action-header__HeaderWrapper-q7dhgh-0 > div > a:first-of-type'),
        filterbutton: () => cy.get('section.action-header__HeaderWrapper-q7dhgh-0 > div > a:nth-of-type(2) > span:first-of-type'),
        firstrecordMoreInfo: () => cy.get('table.table__Table-elf6l1-0>tbody>tr:first-of-type>td:nth-of-type(4)>div'),
        firstrecordEditButton: () => cy.get('table.table__Table-elf6l1-0>tbody>tr:first-of-type>td:nth-of-type(4)>div>div:nth-of-type(2)>div>a:nth-of-type(2)'),
        firstrecordCityInfoButton: () => cy.get('table.table__Table-elf6l1-0>tbody>tr:first-of-type>td:nth-of-type(4)>div>div:nth-of-type(2)>div>a:nth-of-type(1)'),
        filterHeader: () => cy.get('section.filter__FilterWrapper-sc-4bke42-0>section>a'),
        applyChangesFilter: () => cy.get('button.is-primary'),
        clearFilters: () => cy.get('a.is-text'),
        firstRowCityName: () => cy.get('.table__Table-elf6l1-0>tbody>tr:first-of-type>td:first-of-type>a'),
        firstRowTimezone: () => cy.get('.table__Table-elf6l1-0>tbody>tr:first-of-type>td:nth-of-type(3)>span'),
        filterCityName: () => cy.get('input[name=filter-name]')
    }

    isFilterCityNameEmpty() {
        this.elements.filterCityName().should('be.empty')
    }

    clickOnClearFilters() {
        this.elements.clearFilters().click();
    }

    filterWithCityName(data) {
        this.elements.filterCityName().type(data);
    }

    getFirstRowTimezone() {
        return this.elements.firstRowTimezone().invoke('text');
    }

    getFirstRowCityName() {
        return this.elements.firstRowCityName().invoke('text');
    }

    isClearFiltersVisible() {
        this.elements.clearFilters().should('be.visible');
    }

    isApplyChangesFilterVisible() {
        this.elements.applyChangesFilter().should('be.visible');
    }

    getFilterHeaderText() {
        return this.elements.filterHeader().invoke('text');
    }

    clickOnFilterButton() {
        this.elements.filterbutton().click();
    }

    clickOnFirstRecordEditButton() {
        this.elements.firstrecordMoreInfo().trigger('onmouseover');
        this.elements.firstrecordEditButton().click({ force: true });
    }

    clickOnFirstRecordCityInfoButton() {
        this.elements.firstrecordMoreInfo().trigger('onmouseover');
        this.elements.firstrecordCityInfoButton().click({ force: true });
    }

    clickOnAddNewCityButton() {
        this.elements.addnewcitybutton().click();
    }

    getCitiesBreadCrumbText() {
        return this.elements.citiesbreadcrumb().invoke('text');
    }

    isCitiesHeaderVisible() {
        this.elements.citiesheader().should('be.visible');
    }

    isAddNewCityButtonVisible() {
        this.elements.addnewcitybutton().should('be.visible');
    }

    isFilterButtonVisible() {
        this.elements.filterbutton().should('be.visible');
    }
}
module.exports = new citiespage();