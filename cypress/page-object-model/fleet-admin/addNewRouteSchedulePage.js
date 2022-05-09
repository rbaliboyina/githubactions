///<reference types="Cypress"/>

class AddNewRouteSchedulePage {
    elements = {
        addNewRouteScheduleBreadCrumb: () => cy.get('li.is-active'),
        addNewRouteScheduleHeader: () => cy.get('section.action-header__HeaderWrapper-q7dhgh-0 > h1'),
        downloadIcon: () => cy.get('section.action-header__HeaderWrapper-q7dhgh-0 > div > a:nth-of-type(1)'),
        routeScheduleName: () => cy.get('input#name'),
        startTimeHrs: () => cy.get('div.booking__hour div.css-g1d714-ValueContainer'),
        startTimeMins: () => cy.get('div.booking__min div.css-g1d714-ValueContainer'),
        nonRefundable: () => cy.get('#non_refundable'),
        partiallyRefundable: () => cy.get('#partial_refundable'),
        fullyRefundable: () => cy.get('#fully_refundable'),
        driverName: () => cy.get('div.FZcUx:nth-of-type(4) div.control div.css-g1d714-ValueContainer'),
        busID: () => cy.get('div.FZcUx:nth-of-type(5) div.control div.css-g1d714-ValueContainer')
    }

    isRouteScheduleNameVisible() {
        this.elements.routeScheduleName().should('be.visible');
    }

    isDownloadIconVisible() {
        this.elements.downloadIcon().should('be.visible');
    }

    getAddNewRouteScheduleBreadCrumbText() {
        return this.elements.addNewRouteScheduleBreadCrumb().invoke('text');
    }

    isAddNewRouteScheduleHeaderVisible() {
        this.elements.addNewRouteScheduleHeader().should('be.visible');
    }
}
module.exports = new AddNewRouteSchedulePage();