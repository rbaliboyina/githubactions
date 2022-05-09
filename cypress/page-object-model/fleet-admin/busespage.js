///<reference types="Cypress"/>

class buspage {
    elements = {
        busesbreadcrumb: () => cy.get('li.is-active > a'),
        busesheader: () => cy.get('section.action-header__HeaderWrapper-q7dhgh-0 > h1'),
        addnewbusbutton: () => cy.get('section.action-header__HeaderWrapper-q7dhgh-0 > div > a:first-of-type'),
        downloadIcon: () => cy.get('section.action-header__HeaderWrapper-q7dhgh-0 > div > a:nth-of-type(2)'),
        filterIcon: () => cy.get('section.action-header__HeaderWrapper-q7dhgh-0 > div > a:nth-of-type(3)'),
        vehicleIdHeader: () => cy.get('table.table__Table-elf6l1-0 > thead > tr> th:first-of-type'),
        seatsHeader: () => cy.get('table.table__Table-elf6l1-0 > thead > tr> th:nth-of-type(2)'),
        colorHeader: () => cy.get('table.table__Table-elf6l1-0 > thead > tr> th:nth-of-type(3)'),
        modelHeader: () => cy.get('table.table__Table-elf6l1-0 > thead > tr> th:nth-of-type(4)'),
        yearHeader: () => cy.get('table.table__Table-elf6l1-0 > thead > tr> th:nth-of-type(5)'),
        vehicleLicenseExpiryHeader: () => cy.get('table.table__Table-elf6l1-0 > thead > tr> th:nth-of-type(6)'),
        firstRowEditButton: () => cy.get('.table__Table-elf6l1-0>tbody>tr:first-of-type>td:nth-of-type(7)>div>div:nth-of-type(2)>div>a:nth-of-type(2)'),
        firstRowMoreInfo: () => cy.get('.table__Table-elf6l1-0>tbody>tr:first-of-type>td:nth-of-type(7)>div'),
        firstRowInofButton: () => cy.get('.table__Table-elf6l1-0>tbody>tr:first-of-type>td:nth-of-type(7)>div>div:nth-of-type(2)>div>a:nth-of-type(1)'),
        filterPopupText: () => cy.get('section.filter__FilterWrapper-sc-4bke42-0 > section > a'),
        filterApplyChanges: () => cy.get('section.filter__FilterWrapper-sc-4bke42-0 > section > form > button'),
        clearFilters: () => cy.get('section.filter__FilterWrapper-sc-4bke42-0 > section > form > a'),
        firstRowVehicleID: () => cy.get('table.table__Table-elf6l1-0 > tbody>tr:first-of-type>td:first-of-type'),
        firstRowSeats: () => cy.get('table.table__Table-elf6l1-0 > tbody>tr:first-of-type>td:nth-of-type(2)'),
        firstRowColor: () => cy.get('table.table__Table-elf6l1-0 > tbody>tr:first-of-type>td:nth-of-type(3)'),
        firstRowModel: () => cy.get('table.table__Table-elf6l1-0 > tbody>tr:first-of-type>td:nth-of-type(4)'),
        firstRowYear: () => cy.get('table.table__Table-elf6l1-0 > tbody>tr:first-of-type>td:nth-of-type(5)'),
        firstRowVehicleExpiry: () => cy.get('table.table__Table-elf6l1-0 > tbody>tr:first-of-type>td:nth-of-type(6)'),
        filterVehicleID: () => cy.get('input[name="filter-plate"]'),
        filterAvailableSeats: () => cy.get('input[name="filter-availableSeats"]'),
        filterColor: () => cy.get('input[name="filter-color"]'),
        filterModel: () => cy.get('input[name="filter-model"]'),
        filterYear: () => cy.get('input[name="filter-year"]')
    }

    filterWithYear(data) {
        this.elements.filterYear(data);
    }

    filterWithModel(data) {
        this.elements.filterModel(data);
    }

    filterWithColor(data) {
        this.elements.filterColor().type(data);
    }

    filterWithSeats(data) {
        this.elements.filterAvailableSeats().type(data);
    }

    filterWithVehicleID(data) {
        this.elements.filterVehicleID().type(data);
    }

    getFirstRowVehicleExpiry() {
        return this.elements.firstRowVehicleExpiry().invoke('text');
    }

    getFirstRowYear() {
        return this.elements.firstRowYear().invoke('text');
    }

    getFirstRowModel() {
        return this.elements.firstRowModel().invoke('text');
    }

    getFirstRowColor() {
        return this.elements.firstRowColor().invoke('text');
    }

    getFirstRowSeats() {
        return this.elements.firstRowSeats().invoke('text');
    }

    getFirstRowVehicleID() {
        return this.elements.firstRowVehicleID().invoke('text');
    }

    filterApplyChangesVisible() {
        this.elements.filterApplyChanges().scrollIntoView().should('be.visible');
    }

    clickOnApplyChanges() {
        this.elements.filterApplyChanges().click();
    }

    clearFiltersVisible() {
        this.elements.clearFilters().scrollIntoView().should('be.visible');
    }

    clickOnClearFilters() {
        this.elements.clearFilters().click();
    }

    getFilterTextFromPopup() {
        return this.elements.filterPopupText().invoke('text');
    }

    clickOnFilterIcon() {
        this.elements.filterIcon().click();
    }

    getBusesTitle() {
        return this.elements.busesbreadcrumb().invoke('text');
    }

    clickOnAddNewBusButton() {
        this.elements.addnewbusbutton().click();
    }

    clickOnFirstRowEditButton() {
        this.elements.firstRowMoreInfo().trigger('onmouseover')
        this.elements.firstRowEditButton().click({ force: true });
    }

    clickOnFirstRowInfoButton() {
        this.elements.firstRowMoreInfo().trigger('onmouseover');
        this.elements.firstRowInofButton().click({ force: true });
    }
}
module.exports = new buspage();