///<reference types="Cypress" />

class editroutepage {
    elements = {
        editbreadcrumb: () => cy.get('nav.breadcrumb>ul>li:nth-of-type(2)>a'),
        editheader: () => cy.get('section.action-header__HeaderWrapper-q7dhgh-0 > h1'),
        removeButton: () => cy.get('div.action-header__HeaderButtons-q7dhgh-4>a:nth-of-type(1)'),
        routeInfoButton: () => cy.get('div.action-header__HeaderButtons-q7dhgh-4>a:nth-of-type(2)'),
        saveButton: () => cy.get('button[type=submit]')
    }

    isSaveButtonVisible() {
        this.elements.saveButton().should('be.visible');
    }

    isRouteInfoButtonVisible() {
        this.elements.routeInfoButton().should('be.visible');
    }

    isRemoveButtonVisible() {
        this.elements.removeButton().should('be.visible');
    }

    isEditHeaderVisible() {
        this.elements.editheader().should('be.visible');
    }

    getEditBreadCrumbText() {
        return this.elements.editbreadcrumb().invoke('text');
    }
}
module.exports = new editroutepage();