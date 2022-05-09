/// <reference types="Cypress"/>

class stopinfopage {
    elements = {
        stopinfobreadcrumb: () => cy.get('li.is-active > a'),
        stopinfoheader: () => cy.get('section.action-header__HeaderWrapper-q7dhgh-0 > h1'),
        editButton: () => cy.get('section.action-header__HeaderWrapper-q7dhgh-0 > div >a.is-primary'),
        map: () => cy.get('.schedule__map'),
        stopnamelabel: () => cy.get('.showInfoView>.showInfoView-inner>.info:first-of-type>label'),
        stopnamevalue: () => cy.get('.showInfoView>.showInfoView-inner>.info:first-of-type>p'),
        arealabel: () => cy.get('.showInfoView>.showInfoView-inner>.info:nth-of-type(2)>label'),
        arevalue: () => cy.get('.showInfoView>.showInfoView-inner>.info:nth-of-type(2)>p'),
        createdatlabel: () => cy.get('.showInfoView>.showInfoView-inner>.info:nth-of-type(3)>label'),
        createdatvalue: () => cy.get('.showInfoView>.showInfoView-inner>.info:nth-of-type(3)>p'),
        citynamelabel: () => cy.get('.showInfoView>.showInfoView-inner>.info:nth-of-type(4)>label'),
        citynamevalue: () => cy.get('.showInfoView>.showInfoView-inner>.info:nth-of-type(4)>p'),
        addresslabel: () => cy.get('.showInfoView>.showInfoView-inner>.info:nth-of-type(5)>label'),
        addressvalue: () => cy.get('.showInfoView>.showInfoView-inner>.info:nth-of-type(5)>p'),
        updatedatlabel: () => cy.get('.showInfoView>.showInfoView-inner>.info:nth-of-type(6)>label'),
        updatedatvalue: () => cy.get('.showInfoView>.showInfoView-inner>.info:nth-of-type(6)>p'),
        statuslabel: () => cy.get('.showInfoView>.showInfoView-inner>.info:nth-of-type(7)>label'),
        statusvalue: () => cy.get('.showInfoView>.showInfoView-inner>.info:nth-of-type(7)>p'),
        landmarkheader: () => cy.get('.showInfoView>.showInfoView-inner>.info:nth-of-type(8)>label'),
        landmarkvalue: () => cy.get('.showInfoView>.showInfoView-inner>.info:nth-of-type(8)>p')
    }

    getStopNameLabelText() {
        return this.elements.stopnamelabel().invoke('text');
    }

    isMapVisible() {
        this.elements.map().should('be.visible');
    }

    isEditButtonVisible() {
        this.elements.editButton().should('be.visible');
    }

    getStopInfoBreadCrumbText() {
        return this.elements.stopinfobreadcrumb().invoke('text');
    }

    isStopInfoHeaderVisible() {
        this.elements.stopinfoheader().should('be.visible');
    }
}
module.exports = new stopinfopage();