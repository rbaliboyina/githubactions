///<reference types="cypress" />

import Utilities from '../../utilities/Utilities';

class addDriverPage {
    elements = {
        driverName: () => cy.get('#name'),
        addNewDriverBreadCrumb: () => cy.get('nav.breadcrumbs__BreadcrumbsContainer-l5j25e-0.breadcrumb.cDSMRp>ul>li:nth-of-type(2)'),
        drivernamelabel: () => cy.get('div.schedule__info>div:first-of-type>div.schedule__fields:first-of-type>p:last-of-type'),
        downloadButton: () => cy.get('div.action-header__HeaderButtons-q7dhgh-4>a'),
        registeredRadioButton: () => cy.get('#registered'),
        inactiveRadioButton: () => cy.get('#inactive'),
        activeRadioButton: () => cy.get('#active'),
        email: () => cy.get('#email'),
        authPassword: () => cy.xpath('//input[@id="auth.password"]'),
        phone: () => cy.get('#phone'),
        licenseno: () => cy.get('#licenceNo'),
        licenseExpiry: () => cy.get('#licenseDate'),
        photo: () => cy.get('#photo'),
        save: () => cy.get('.btn-text'),
        emailErrorMsg: () => cy.get('.is-danger'),
        backButton: () => cy.get('.icomoon-pagination-left')
    }

    clickOnBackButton() {
        this.elements.backButton().click();
    }

    getEmailErrorMessage() {
        return this.elements.emailErrorMsg().invoke('text');
    }

    isDownloadButtonVisible() {
        this.elements.downloadButton().should('be.visible');
    }

    isDriverNameTextBoxVisible() {
        this.elements.driverName().should('be.visible');
    }

    isDriverStatusButtonsVisible() {
        this.elements.registeredRadioButton().should('be.visible');
        this.elements.inactiveRadioButton().should('be.visible');
        this.elements.activeRadioButton().should('be.visible');
    }

    isEmailTextBoxVisible() {
        this.elements.email().should('be.visible');
    }

    isAuthPasswordTextBoxVisible() {
        this.elements.authPassword().should('be.visible');
    }

    isPhoneTextBoxVisible() {
        this.elements.phone().should('be.visible');
    }

    isLicenseNoTextBoxVisible() {
        this.elements.licenseno().should('be.visible');
    }

    isLicenseExpiryTextBoxVisible() {
        this.elements.licenseExpiry().should('be.visible');
    }

    isPhotoTextBoxVisible() {
        this.elements.photo().should('be.visible');
    }

    isSaveButtonVisible() {
        this.elements.save().should('be.visible');
    }

    getDriverBreadCrumbText() {
        return this.elements.addNewDriverBreadCrumb().invoke('text');
    }

    clickSave() {
        this.elements.save().click();
    }

    typeLicenseNo(value) {
        this.elements.licenseno().type(value);
    }

    typePhone(value) {
        this.elements.phone().type(value);
    }

    typeAuthPassword(value) {
        this.elements.authPassword().type(value);
    }

    typeEmail(value) {
        this.elements.email().type(value);
    }

    typeDriverName(value) {
        this.elements.driverName().type(value);
    }

    clickRadioButton(value) {
        if ("registered" == value)
            this.elements.registeredRadioButton().click();
        else if ("active" == value)
            this.elements.activeRadioButton().click();
        else if ("inactive" == value)
            this.elements.inactiveRadioButton().click();
    }

    fillAddDriverForm(drivertype) {
        this.typeDriverName(Utilities.generateName());
        this.clickRadioButton(drivertype);
        this.typeEmail(Utilities.generateEmail());
        this.typeAuthPassword(Utilities.generatePassword());
        this.typePhone(Utilities.generatePhoneNumber());
        this.clickSave();
    }
}
module.exports = new addDriverPage();