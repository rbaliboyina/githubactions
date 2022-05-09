///<reference types="Cypress" />

class cityinfopage {
    elements = {
        cityinfobreadcrumb: () => cy.get('li.is-active > a'),
        editButton: () => cy.get('section.action-header__HeaderWrapper-q7dhgh-0 > div >a.is-primary'),
        cityinfoheader: () => cy.get('section.action-header__HeaderWrapper-q7dhgh-0 > h1')
    }

    isEditButtonVisible() {
        this.elements.editButton().should('be.visible');
    }

    getCityInfoBreadCrumbText() {
        return this.elements.cityinfobreadcrumb().invoke('text');
    }

    isCityInfoHeaderVisible() {
        this.elements.cityinfoheader().should('be.visible');
    } 
}
module.exports = new cityinfopage();