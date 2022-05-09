///<reference types="Cypress" />


class driversPage {
    elements = {
        driversbreadcrumb: () => cy.get('nav.breadcrumbs__BreadcrumbsContainer-l5j25e-0>ul>li:nth-of-type(2)>a'),
        addNewDriver: () => cy.get('div.action-header__HeaderButtons-q7dhgh-4>a:nth-of-type(1)'),
        downloadIcon: () => cy.get('div.action-header__HeaderButtons-q7dhgh-4>a:nth-of-type(2)'),
        filterIcon: () => cy.get('div.action-header__HeaderButtons-q7dhgh-4>a:nth-of-type(3)'),
        driverNameHeader: () => cy.get('table.table__Table-elf6l1-0>thead>tr>th:nth-of-type(1)>a'),
        emailHeader: () => cy.get('table.table__Table-elf6l1-0>thead>tr>th:nth-of-type(2)>a'),
        phoneNumberHeader: () => cy.get('table.table__Table-elf6l1-0>thead>tr>th:nth-of-type(3)>a'),
        licenseNumberHeader: () => cy.get('table.table__Table-elf6l1-0>thead>tr>th:nth-of-type(4)>a'),
        licenseExpireHeader: () => cy.get('table.table__Table-elf6l1-0>thead>tr>th:nth-of-type(5)>a'),
        driverStatusHeader: () => cy.get('table.table__Table-elf6l1-0>thead>tr>th:nth-of-type(6)>a'),
        moreInfoforFirstRow: () => cy.get('table.table__Table-elf6l1-0.table.is-fullwidth.dJiseM > tbody > tr:first-of-type > td:nth-of-type(7)'),
        filterIcon: () => cy.get('span.icon>svg[data-icon="sliders-h"]'),
        filterArrowIcon: () => cy.get('svg[data-icon="arrow-right"]'),
        applyChangesButtonFilterPanel: () => cy.get('button.is-primary'),
        filterDriverName: () => cy.get('input[name="filter-name"]'),
        filterEmail: () => cy.get('input[name="filter-email"]'),
        filterPhoneNumber: () => cy.get('input[name="filter-phone"]'),
        firstRowPhoneNumber: () => cy.get('table[class*=table__Table-elf6l1-0] > tbody > tr:first-of-type > td:nth-of-type(3) > span'),
        firstRowEmail: () => cy.get('table[class*=table__Table-elf6l1-0] > tbody > tr:first-of-type > td:nth-of-type(2) > span'),
        firstRowDriverName: () => cy.get('table[class*=table__Table-elf6l1-0] > tbody > tr:first-of-type > td:nth-of-type(1) > a'),
        clearFiltersButton: () => cy.get('section.filter__FilterContent-sc-4bke42-2>form>a')
    }

    clickOnClearFilterButton() {
        this.elements.clearFiltersButton().click();
    }

    getFirstRowDriverName() {
        this.elements.firstRowDriverName().invoke('text').then((text) => {
            return text;
        });
    }

    getFirstRowEmail() {
        return this.elements.firstRowEmail().invoke('text');
    }

    getFirstRowPhoneNo() {
        return this.elements.firstRowPhoneNumber().invoke('text');
    }

    clickFirstRowDriverName() {
        this.elements.firstRowDriverName().click();
    }

    IsCreatedDriverDisplayed() {
        return this.elements.firstRowEmail().invoke('text');
    }

    filterWithDriverName(drivername) {
        this.elements.filterDriverName().type(drivername);
    }

    filterWithEmail(driveremail) {
        this.elements.filterEmail().type(driveremail);
    }

    filterWithPhoneNo(phonno) {
        this.elements.filterPhoneNumber().type(phonno);
    }

    clickOnApplyFilter() {
        this.elements.applyChangesButtonFilterPanel().focus().click();
    }

    applyChangesShouldNotbeVisible() {
        this.elements.applyChangesButtonFilterPanel().should('not.be.visible');
    }

    clickOnFilterArrow() {
        this.elements.filterArrowIcon().click();
    }

    clickOnFilterIcon() {
        this.elements.filterIcon().click();
    }

    getFilterText() {
        return this.elements.filterArrowIcon().closest('a').invoke('text');
    }

    getDriversText() {
        return this.elements.driversbreadcrumb().invoke('text');
    }

    isAddNewDriverButtonVisible() {
        this.elements.addNewDriver().should('be.visible');
    }

    isDownloadIconVisible() {
        this.elements.downloadIcon().should('be.visible');
    }

    isFilterIconVisible() {
        this.elements.filterIcon().should('be.visible');
    }

    getDriverNameHeaderText() {
        return this.elements.driverNameHeader().invoke('text');
    }

    getEmailHeaderText() {
        return this.elements.emailHeader().invoke('text');
    }

    getPhoneNumberHeaderText() {
        return this.elements.phoneNumberHeader().invoke('text');
    }

    getLicenseNumberHeaderText() {
        return this.elements.licenseNumberHeader().invoke('text');
    }

    getLicenseExpireHeaderText() {
        return this.elements.licenseExpireHeader().invoke('text');
    }

    getDriverStatusHeaderText() {
        return this.elements.driverStatusHeader().invoke('text');
    }

    clickAddNewDriverButton() {
        this.elements.addNewDriver().click();
    }
}
module.exports = new driversPage();