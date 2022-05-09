/// <reference types="Cypress"/>

class editstopspage {
    elements = {
        editbreadcrumb: () => cy.get('nav.breadcrumb>ul>li:nth-of-type(2)>a'),
        editheader: () => cy.get('section.action-header__HeaderWrapper-q7dhgh-0 > h1'),
        infobutton: () => cy.get('div.action-header__HeaderButtons-q7dhgh-4>a'),
        savebutton: () => cy.get('button.is-primary'),
        stopname: () => cy.get('#name')
    }

    getEditBreadCrumbText() {
        return this.elements.editbreadcrumb().invoke('text');
    }

    isEditHeaderVisible() {
        this.elements.editheader().should('be.visible');
    }

    isInfoButtonVisible() {
        this.elements.infobutton().should('be.visible');
    }

    isStopNameEmpty() {
        this.elements.stopname().should('not.be.null');
    }
}
module.exports = new editstopspage();