///<reference types="Cypress"/>
import config from '../../fixtures/config.json'

class editcitiespage {
    elements = {
        editbreadcrumb: () => cy.get('nav.breadcrumb>ul>li:nth-of-type(2)>a'),
        editheader: () => cy.get('section.action-header__HeaderWrapper-q7dhgh-0 > h1'),
        infobutton: () => cy.get('div.action-header__HeaderButtons-q7dhgh-4>a'),
        cityname: () => cy.get('#name'),
        timezone: () => cy.get('div.css-1uccc91-singleValue'),
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

    isCityNameEmpty() {
        cy.wait(config.actionstimeout);
        this.elements.cityname().should('not.be.empty');
    }

    isTimeZoneEmpty() {
        cy.wait(config.actionstimeout);
        this.elements.timezone().should('not.be.empty');
    }

    isSaveButtonIsVisible() {
        this.elements.savebutton().should('be.visible');
    }
}
module.exports = new editcitiespage();