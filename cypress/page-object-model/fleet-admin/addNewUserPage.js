///<reference types="Cypress" />
import Utilities from '../../utilities/Utilities';

class addNewUser {
    elements = {
        //addNewUserLabel: () => cy.get('h1.action-header__HeaderTitle-q7dhgh-3'),,
        addNewUserLabel: () => cy.get('div.modal--title'),
        //downloadButton: () => cy.get('div.action-header__HeaderButtons-q7dhgh-4>a>svg'),
        userRole: () => cy.get('select#userRole'),
        fullName: () => cy.get('input[name=name]'),
        emailAddress: () => cy.get('input[name=email]'),
        authPassword: () => cy.get('input[name=password]'),
        phone: () => cy.get('input[name=phone]'),
        licenseNo: () => cy.get('input[name=licence]'),
        licenseExpiry: () => cy.get('input[name=licenceExpiry]'),
        statusActive: () => cy.get('input[value=true]'),
        statusInactive: () => cy.get('input[value=false]'),
        cancel: () => cy.get('div.modal--form--footer button:nth-of-type(1)'),
        addUser: () => cy.get('button[type=submit]')
    }

    clickOnAddUserButton() {
        this.elements.addUser().click();
    }

    isPhoneVisible() {
        this.elements.phone().should('be.visible');
    }

    isAuthPasswordVisible() {
        this.elements.authPassword().should('be.visible');
    }

    isEmailAddressVisible() {
        this.elements.emailAddress().should('be.visible');
    }

    clickOnCancelButton() {
        this.elements.cancel().click();
    }


    setStatus(data) {
        if (!data) {
            this.elements.statusInactive().click();
        }
    }

    isAddUserVisible() {
        this.elements.addUser().should('be.visible');
    }

    isCancelVisible() {
        this.elements.cancel().should('be.visible');
    }

    isInactiveStatusVisible() {
        this.elements.statusInactive().should('be.visible');
    }

    isActiveStatusVisible() {
        this.elements.statusActive().should('be.visible');
    }

    isFullNameVisible() {
        this.elements.emailAddress().should('be.visible');
    }

    isUserRoleVisible() {
        this.elements.userRole().should('be.visible');
    }

    getAddNewUserLabelText() {
        return this.elements.addNewUserLabel().invoke('text');
    }

    isActiveCheckBoxVisible() {
        this.elements.activeCheckbox().should('be.visible');
    }

    isLicenseNoVisible() {
        this.elements.licenseNo().should('be.visible');
    }

    isLicenseExpiryDateVisible() {
        this.elements.licenseExpiry().should('be.visible');
    }

    fillAddNewUserForm(userRole, status) {
        this.elements.userRole().select(userRole);
        this.elements.fullName().type(Utilities.generateName());
        this.elements.emailAddress().type(Utilities.generateEmail());
        this.elements.authPassword().type(Utilities.generatePassword());
        this.elements.phone().type(Utilities.generatePhoneNumber());
        this.elements.licenseNo().type(Utilities.generateLicenseNo());
        this.setStatus(status);
    }
}
module.exports = new addNewUser();