///<reference types="Cypress"/>

class routesinfopage {
    elements = {
        routesinfobreadcrumb: () => cy.get('li.is-active > a'),
        routesinfoheader: () => cy.get('section.action-header__HeaderWrapper-q7dhgh-0 > h1'),
        removebutton: () => cy.get('section.action-header__HeaderWrapper-q7dhgh-0 > div>a:nth-of-type(1)'),
        editbutton: () => cy.get('section.action-header__HeaderWrapper-q7dhgh-0 > div>a:nth-of-type(2)'),
        map: () => cy.get('div[aria-label=Map]')
    }

    isMapVisible() {
        this.elements.map().should('be.visible');
    }

    isEditButtonVisible() {
        this.elements.editbutton().should('be.visible');
    }

    isRemoveButtonVisible() {
        this.elements.removebutton().should('be.visible');
    }

    isRoutesInfoHeaderVisible() {
        this.elements.routesinfoheader().should('be.visible');
    }

    getRoutesInfoBreadCrumbText() {
        return this.elements.routesinfobreadcrumb().invoke('text');
    }
}
module.exports = new routesinfopage();