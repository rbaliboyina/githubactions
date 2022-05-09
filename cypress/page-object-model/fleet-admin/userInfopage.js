///<reference types="Cypress" />
const configData = require('../../fixtures/config.json');

class userinfopage {
    elements = {
        userinfolabel: () => cy.get('div.cardSection_card__section__right__1wNWs > div > div:nth-of-type(1)>p:nth-of-type(1)'),
        close: () => cy.get('div.cardSection_card__section__right__1wNWs > div > div:nth-of-type(1)>p:nth-of-type(2)'),
        createOn: () => cy.get('div.cardSection_card__section__right__1wNWs > div > div:nth-of-type(5)>div:nth-of-type(1)'),
        lastUpdatedOn: () => cy.get('div.cardSection_card__section__right__1wNWs > div > div:nth-of-type(5)>div:nth-of-type(2)'),
        phone: () => cy.get('div.cardSection_card__section__right__1wNWs > div > div:nth-of-type(6)>div:nth-of-type(1)>div:nth-of-type(1)'),
        licenseno: () => cy.get('div.cardSection_card__section__right__1wNWs > div > div:nth-of-type(6)>div:nth-of-type(1)>div:nth-of-type(2)'),
        email: () => cy.get('div.cardSection_card__section__right__1wNWs > div > div:nth-of-type(6)>div:nth-of-type(2)>div:nth-of-type(1)'),
        licenseExpire: () => cy.get('div.cardSection_card__section__right__1wNWs > div > div:nth-of-type(6)>div:nth-of-type(2)>div:nth-of-type(2)'),
        editButton: () => cy.get('div.userInfo_user__info__footer__U73jk button')
    }

    clickOnEditButton() {
        this.elements.editButton().scrollIntoView().click();
    }

    editButtonShouldNotExist() {
        this.elements.editButton().should('not.exist');
    }

    userInfoLabelShouldNotExist() {
        this.elements.userinfolabel().should('not.exist');
    }

    clickOnCloseButton() {
        this.elements.close().click();
    }

    isEditButtonVisible() {
        this.elements.editButton().should('be.visible');
    }

    isLicenseExpireVisible() {
        this.elements.licenseExpire().should('be.visible');
    }

    isEmailVisible() {
        this.elements.email().should('be.visible');
    }

    isLicenseNoVisible() {
        this.elements.licenseno().should('be.visible');
    }

    isPhoneVisible() {
        this.elements.phone().should('be.visible');
    }

    isLastUpdateOnVisible() {
        this.elements.lastUpdatedOn().should('be.visible');
    }

    isCreateOnVisible() {
        this.elements.createOn().should('be.visible');
    }

    isCloseButtonVisible() {
        this.elements.close().should('be.visible');
    }

    getUserInfoLabel() {
        return this.elements.userinfolabel().invoke('text');
    }
}
module.exports = new userinfopage();