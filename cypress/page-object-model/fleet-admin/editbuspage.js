///<reference types="Cypress"/>
import config from '../../fixtures/config.json'
class editbuspage {
    elements = {
        editbreadcrumb: () => cy.get('nav.breadcrumb>ul>li:nth-of-type(2)>a'),
        editheader: () => cy.get('section.action-header__HeaderWrapper-q7dhgh-0 > h1'),
        infobutton: () => cy.get('div.action-header__HeaderButtons-q7dhgh-4>a'),
        vehicleId: () => cy.get('#plate'),
        seats: () => cy.get('#availableSeats'),
        savebutton: () => cy.get('button.is-primary')
    }

    getBreadCrumbText() {
        cy.wait(config.actionstimeout);
        return this.elements.editbreadcrumb().invoke('text');
    }
    getEditHeaderText() {
        return this.elements.editheader().invoke('text');
    }

    isInfoButtonIsVisible() {
        this.elements.infobutton().should('be.visible');
    }

    isVehicleIdEmpty() {
        cy.wait(config.actionstimeout);
        this.elements.vehicleId().should('not.be.empty');
    }

    isSeatsEmpty() {
        cy.wait(config.actionstimeout);
        this.elements.seats().should('not.be.empty');
    }

    isSaveButtonIsVisible() {
        this.elements.savebutton().should('be.visible');
    }
}
module.exports = new editbuspage();