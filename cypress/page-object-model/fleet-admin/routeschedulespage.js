///<reference types="Cypress"/>

class Routeschedules {
    elements = {
        routeschedulesbreadcrumb: () => cy.get('li.is-active>a'),
        routeschedulesheader: () => cy.get('section.action-header__HeaderWrapper-q7dhgh-0 > h1'),
        addnewrouteschedulesbutton: () => cy.get('section.action-header__HeaderWrapper-q7dhgh-0 > div > a:first-of-type'),
        downloadIcon: () => cy.get('section.action-header__HeaderWrapper-q7dhgh-0 > div > a:nth-of-type(2)'),
        filterButton: () => cy.get('section.action-header__HeaderWrapper-q7dhgh-0 > div > a:nth-of-type(3)'),
    }

    clickOnAddNewRouteSchedulesButton() {
        this.elements.addnewrouteschedulesbutton().click();
    }

    getRouteSchedulesBreadCrumbText() {
        return this.elements.routeschedulesbreadcrumb().invoke('text');
    }

    isRouteSchedulesHeaderVisible() {
        this.elements.routeschedulesheader().should('be.visible');
    }

    isAddNewRouteSchedulesButtonVisible() {
        this.elements.addnewrouteschedulesbutton().should('be.visible');
    }

    isDownloadIconVisible() {
        this.elements.downloadIcon().should('be.visible');
    }

    isFilterButtonVisible() {
        this.elements.filterButton().scrollIntoView().should('be.visible');
    }
}
module.exports = new Routeschedules();