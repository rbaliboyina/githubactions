///<reference types="Cypress" />

import configData from '../../fixtures/config.json'

class driverinfopage {
    elements = {
        driverInfobreadcurmb: () => cy.get('nav.breadcrumb>ul>li.is-active'),
        editButton: () => cy.get('div.btn-text'),
        backButton: () => cy.get('i.icomoon-pagination-left'),
        driverInfoTitle: () => cy.get('h1.action-header__HeaderTitle-q7dhgh-3'),
        driverNameHeader: () => cy.get('div.schedule__left>div.schedule__fields:first-of-type>.schedule__head'),
        driverNameValue: () => cy.get('div.schedule__left>div.schedule__fields:first-of-type>.schedule__value'),
        emailHeader: () => cy.get('div.schedule__left>div.schedule__fields:nth-of-type(2)>.schedule__head'),
        emailValue: () => cy.get('div.schedule__left>div.schedule__fields:nth-of-type(2)>.schedule__value'),
        phoneHeader: () => cy.get('div.schedule__left>div.schedule__fields:nth-of-type(3)>.schedule__head'),
        phoneValue: () => cy.get('div.schedule__left>div.schedule__fields:nth-of-type(3)>.schedule__value'),
        licenseNoHeader: () => cy.get('div.schedule__right>div.schedule__fields:nth-of-type(1)>.schedule__head'),
        licenseNoValue: () => cy.get('div.schedule__right>div.schedule__fields:nth-of-type(1)>.schedule__value'),
        licenseExpireHeader: () => cy.get('div.schedule__right>div.schedule__fields:nth-of-type(2)>.schedule__head'),
        licenseExpireValue: () => cy.get('div.schedule__right>div.schedule__fields:nth-of-type(2)>.schedule__value'),
        driverStatusHeader: () => cy.get('div.schedule__right>div.schedule__fields:nth-of-type(3)>.schedule__head'),
        driverStatusValue: () => cy.get('div.schedule__right>div.schedule__fields:nth-of-type(3)>.schedule__value')
    }

    isBreadCrumbVisible() {
        this.elements.driverInfobreadcurmb().should('be.visible');
    }

    isBackButtonVisible() {
        this.elements.backButton().should('be.visible');
    }

    isEditButtonVisible() {
        this.elements.editButton().should('be.visible');
    }

    getDriverNameHeader() {
        return this.elements.driverNameHeader().invoke('text');
    }

    isDriverNameValueEmpty() {
        this.elements.driverNameValue().should('not.be.empty');
    }

    getEmailHeader() {
        return this.elements.emailHeader().invoke('text');
    }

    isEmailValueEmpty() {
        this.elements.emailValue().should('not.be.empty');
    }

    getPhoneHeader() {
        return this.elements.phoneHeader().invoke('text');
    }

    isPhoneValueEmpty() {
        this.elements.phoneValue().should('not.be.empty');
    }

    getLicenseNoHeader() {
        return this.elements.licenseNoHeader().invoke('text');
    }

    isLicenseNoValueEmpty() {
        this.elements.licenseNoValue().should('not.be.empty');
    }

    getLicenseExpireHeader() {
        return this.elements.licenseExpireHeader().invoke('text');
    }

    isLicenseExpiryValue() {
        this.elements.licenseExpireValue().should('not.be.empty');
    }

    getDriverStatusHeader() {
        return this.elements.driverStatusHeader().invoke('text');
    }

    isDriverStatusValueEmpty() {
        return this.elements.driverStatusValue().should('not.be.empty');
    }

    driverInfobreadCrumb() {
        // cy.wait(configData.actionstimeout);
        return this.elements.driverInfobreadcurmb().invoke('text');
    }

    clickBackButton() {
        this.elements.backButton().click();
    }
}
module.exports = new driverinfopage();