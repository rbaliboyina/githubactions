/// <reference types="Cypress"/>

class stopspage {
    elements = {
        stopsbreadcrumb: () => cy.get('li.is-active>a'),
        stopsheader: () => cy.get('section.action-header__HeaderWrapper-q7dhgh-0 > h1'),
        addnewstopbutton: () => cy.get('section.action-header__HeaderWrapper-q7dhgh-0 > div > a:first-of-type'),
        downloadIcon: () => cy.get('section.action-header__HeaderWrapper-q7dhgh-0 > div > a:nth-of-type(2)'),
        filterIcon: () => cy.get('section.action-header__HeaderWrapper-q7dhgh-0 > div > a:nth-of-type(3)'),
        firstRowEditButton: () => cy.get('.table__Table-elf6l1-0>tbody>tr:first-of-type>td:nth-of-type(6)>div>div:nth-of-type(2)>div>a:nth-of-type(2)'),
        firstRowMoreInfo: () => cy.get('.table__Table-elf6l1-0>tbody>tr:first-of-type>td:nth-of-type(6)>div'),
        firstRowStopInfoButton: () => cy.get('.table__Table-elf6l1-0>tbody>tr:first-of-type>td:nth-of-type(6)>div>div:nth-of-type(2)>div>a:nth-of-type(1)'),
        filterPopupText: () => cy.get('section.filter__FilterWrapper-sc-4bke42-0 > section > a'),
        filterApplyChanges: () => cy.get('section.filter__FilterWrapper-sc-4bke42-0 > section > form > button'),
        clearFilters: () => cy.get('section.filter__FilterWrapper-sc-4bke42-0 > section > form > a'),
        filterStopName: () => cy.get('input[name=filter-name]'),
        filterCityName: () => cy.get('#cityId'),
        filterAddress: () => cy.get('input[name=filter-address]'),
        filterLandmark: () => cy.get('filter-hint'),
        filterStatus: () => cy.get('div.css-mknk1a-control'),
        filterTerminalCode: () => cy.get('input[name=filter-terminalCode]'),
        filterCityCode: () => cy.get('input[name=filter-cityCode]'),
        firstRowStopName: () => cy.get('.table__Table-elf6l1-0>tbody>tr:first-of-type>td:nth-of-type(1)>a'),
        firstRowCityName: () => cy.get('.table__Table-elf6l1-0>tbody>tr:first-of-type>td:nth-of-type(2)>a'),
        firstRowAddress: () => cy.get('.table__Table-elf6l1-0>tbody>tr:first-of-type>td:nth-of-type(3)>span')
    }

    isFilterAddressEmpty(){
        this.elements.filterAddress().should('be.empty');
    }

    isFilterStopNameEmpty(){
        this.elements.filterStopName().should('be.empty');
    }

    clickOnClearFilterButton() {
        this.elements.clearFilters().click();
    }

    getFirstRowAddress() {
        return this.elements.firstRowAddress().invoke('text');
    }

    filterWithAddress(data) {
        this.elements.filterAddress().type(data);
    }

    getFirstRowCityName() {
        return this.elements.firstRowCityName().invoke('text');
    }

    filterWithCityName(data) {
        this.elements.filterCityName().type(data + '{enter}');
    }

    getFirstRowStopName() {
        return this.elements.firstRowStopName().invoke('text');
    }

    filterWithStopName(data) {
        this.elements.filterStopName().type(data);
    }

    getFilterPopupText() {
        return this.elements.filterPopupText().invoke('text');
    }

    clickOnApplyChangesButton() {
        this.elements.filterApplyChanges().click();
    }

    isFilterApplyChangesVisible() {
        this.elements.filterApplyChanges().should('be.visible');
    }

    isClearFiltersVisible() {
        this.elements.clearFilters().scrollIntoView().should('be.visible');
    }

    getStopsBreadCrumbText() {
        return this.elements.stopsbreadcrumb().invoke('text');
    }

    isStopsHeaderVisible() {
        this.elements.stopsheader().should('be.visible');
    }

    isAddNewStopButtonVisible() {
        this.elements.addnewstopbutton().should('be.visible');
    }

    clickOnAddNewStopButton() {
        this.elements.addnewstopbutton().click();
    }

    clickOnFirstRowEditButton() {
        this.elements.firstRowMoreInfo().trigger('onmouseover')
        this.elements.firstRowEditButton().click({ force: true });
    }

    clickOnFirstRowStopInfoButton() {
        this.elements.firstRowMoreInfo().trigger('onmouseover')
        this.elements.firstRowStopInfoButton().click({ force: true });
    }

    clickOnFilterIcon() {
        this.elements.filterIcon().click();
    }
}
module.exports = new stopspage();