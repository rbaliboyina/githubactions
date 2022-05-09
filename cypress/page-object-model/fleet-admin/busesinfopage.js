///<reference types="cypress" />

import config from '../../fixtures/config.json'

class busesinfopage {
    elements = {
        infobreadcrumb: () => cy.get('nav.breadcrumb>ul>li:nth-of-type(2)>a'),
        editButton: () => cy.get('a.button > div'),
        backButton: () => cy.get('i.icomoon-pagination-left'),
        busInfoTitle: () => cy.get('h1.action-header__HeaderTitle-q7dhgh-3'),
        vehicleIDHeader: () => cy.get('div.info:first-of-type > label'),
        vehicleIDValue: () => cy.get('div.info:first-of-type > p'),
        updatedAtValue: () => cy.get('div.info:nth-of-type(3) > p'),
        createdAtValue: () => cy.get('div.info:nth-of-type(6) > p')
    }

    getInfoTitle() {
        cy.wait(config.actionstimeout)
        return this.elements.infobreadcrumb().invoke('text');
    }

    getVehicleIDHeader() {
        return this.elements.vehicleIDHeader().invoke('text');
    }

    getvehicleIDValue() {
        return this.elements.vehicleIDValue().invoke('text');
    }

    isEditButtonVisible() {
        this.elements.editButton().should('be.visible');
    }

    vehicleIDShouldNotbeEmpty() {
        this.elements.vehicleIDValue().should('not.be.empty');
    }

    updatedAtValueShouldNotbeEmpty() {
        this.elements.updatedAtValue().should('not.be.empty');
    }

    createdAtValueShouldNotbeEmpty() {
        this.elements.createdAtValue().should('not.be.empty');
    }
}
module.exports = new busesinfopage();