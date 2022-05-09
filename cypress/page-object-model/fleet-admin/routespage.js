///<reference types="Cypress"/>

class routespage {
    elements = {
        routesbreadcrumb: () => cy.get('li.is-active>a'),
        routesheader: () => cy.get('section.action-header__HeaderWrapper-q7dhgh-0 > h1'),
        addnewroutebutton: () => cy.get('section.action-header__HeaderWrapper-q7dhgh-0 > div > a:first-of-type'),
        downloadIcon: () => cy.get('section.action-header__HeaderWrapper-q7dhgh-0 > div > a:nth-of-type(2)'),
        filterButton: () => cy.get('section.action-header__HeaderWrapper-q7dhgh-0 > div > a:nth-of-type(3)'),
        routeNametableHeader: () => cy.get('table.table__Table-elf6l1-0>thead>tr>th:first-of-type>a'),
        stopstableHeader: () => cy.get('table.table__Table-elf6l1-0>thead>tr>th:nth-of-type(2)'),
        startingpointtableHeader: () => cy.get('table.table__Table-elf6l1-0>thead>tr>th:nth-of-type(3)'),
        endingpointtableHeader: () => cy.get('table.table__Table-elf6l1-0>thead>tr>th:nth-of-type(4)'),
        pricevaluetableHeader: () => cy.get('table.table__Table-elf6l1-0>thead>tr>th:nth-of-type(5)>a'),
        statustableHeader: () => cy.get('table.table__Table-elf6l1-0>thead>tr>th:nth-of-type(6)>a'),
        firstRowMoreInfo: () => cy.get('table.table__Table-elf6l1-0>tbody>tr:first-of-type>td:nth-of-type(7)>div'),
        firstRowRemoveButton: () => cy.get('a.in-dropdown:nth-of-type(1)'),
        firstRowRouteInfoButton: () => cy.get('a.in-dropdown:nth-of-type(2)'),
        firstRowEditButton: () => cy.get('a.in-dropdown:nth-of-type(3)'),
        filterPopupText: () => cy.get('section.filter__FilterWrapper-sc-4bke42-0 > section > a'),
        filterApplyChanges: () => cy.get('section.filter__FilterWrapper-sc-4bke42-0 > section > form > button'),
        clearFilters: () => cy.get('section.filter__FilterWrapper-sc-4bke42-0 > section > form > a'),
        filterStatus: () => cy.get('div.css-151xaom-placeholder'),
        filterRouteName: () => cy.get('input[name=filter-name]'),
        filterStartingPoint: () => cy.get('input[name=filter-startingPoint]'),
        filterEndingPoint: () => cy.get('input[name=filter-endingPoint]'),
        firstRecordRouteName: () => cy.get('table.table__Table-elf6l1-0>tbody>tr:first-of-type>td:nth-of-type(1)>a'),
        firstRecordStartingPoint: () => cy.get('table.table__Table-elf6l1-0>tbody>tr:first-of-type>td:nth-of-type(3)>a'),
        firstRecordEndingPoint: () => cy.get('table.table__Table-elf6l1-0>tbody>tr:first-of-type>td:nth-of-type(4)>a'),
        firstRecordStatus: () => cy.get('table.table__Table-elf6l1-0>tbody>tr:first-of-type>td:nth-of-type(6)>p')
    }

    isFilterEndingPointEmpty() {
        this.elements.filterEndingPoint().should('be.empty');
    }

    isFilterStartingPointEmpty() {
        this.elements.filterStartingPoint().should('be.empty');
    }

    isFilterRouteNameFieldEmpty() {
        this.elements.filterRouteName().should('be.empty');
    }

    clickOnClearFilters() {
        this.elements.clearFilters().click();
    }

    getFirstRecordStatus() {
        return this.elements.firstRecordStatus().invoke('text');
    }

    filterWithStatus(data) {
        this.elements.filterStatus().type(data + '{downArrow}{enter}');
    }

    filterWithEndingPoint(data) {
        this.elements.filterEndingPoint().type(data);
    }

    filterWithStartingPoint(data) {
        this.elements.filterStartingPoint().type(data);
    }

    clickOnFilterApplyChanges() {
        this.elements.filterApplyChanges().click();
    }

    filterWithRouteName(data) {
        this.elements.filterRouteName().type(data);
    }

    isFilterEndingPointVisible() {
        this.elements.filterEndingPoint().should('be.visible');
    }

    isFilterStartingPointVisible() {
        this.elements.filterStartingPoint().should('be.visible');
    }

    isFilterRouteNameVisible() {
        this.elements.filterRouteName().should('be.visible');
    }

    isClearFiltersVisible() {
        this.elements.clearFilters().scrollIntoView().should('be.visible');
    }

    isFilterApplyChangesVisible() {
        this.elements.filterApplyChanges().scrollIntoView().should('be.visible');
    }

    getFilterPopupText() {
        return this.elements.filterPopupText().invoke('text');
    }

    clickOnFilterIcon() {
        this.elements.filterButton().click();
    }

    clickOnFirstRowRouteInfoButton() {
        this.elements.firstRowMoreInfo().trigger('onmouseover');
        this.elements.firstRowRouteInfoButton().click({ force: true });
    }

    clickOnFirstRowEditButton() {
        this.elements.firstRowMoreInfo().trigger('onmouseover');
        this.elements.firstRowEditButton().click({ force: true });
    }

    clickOnFirstRecordRemoveButton() {
        this.elements.firstRowMoreInfo().trigger('onmouseover');
        this.elements.firstRowRemoveButton().click({ force: true });
    }

    clickOnAddNewRoutesButton() {
        this.elements.addnewroutebutton().click();
    }

    getRoutesBreadCrumbText() {
        return this.elements.routesbreadcrumb().invoke('text');
    }

    isRoutesHeaderVisible() {
        this.elements.routesheader().should('be.visible');
    }

    getRouteNameTableHeaderText() {
        return this.elements.routeNametableHeader().invoke('text');
    }

    getStopsTableHeaderText() {
        return this.elements.stopstableHeader().invoke('text');
    }

    getStartingPointTableHeaderText() {
        return this.elements.startingpointtableHeader().invoke('text');
    }

    getEndingPointTableHeaderText() {
        return this.elements.endingpointtableHeader().invoke('text');
    }

    getPriceValueTableHeaderText() {
        return this.elements.pricevaluetableHeader().invoke('text');
    }

    getStatusTableHeaderText() {
        return this.elements.statustableHeader().invoke('text');
    }


}
module.exports = new routespage();