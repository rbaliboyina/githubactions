///<reference types="Cypress" />

class EditUsersPage {
    elements = {
        editUserDataLabel: () => cy.get('div.modal--title'),
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
        update: () => cy.get('button[type=submit]')
    }

    isUpdateButtonVisible() {
        this.elements.update().should('be.visible');
    }

    isPhoneNonEmpty() {
        this.elements.phone().should('not.be.empty');
    }

    isEmailAddressNonEmpty() {
        this.elements.emailAddress().should('not.be.empty');
    }

    getPopupLabelText() {
        return this.elements.editUserDataLabel().invoke('text');
    }

}
module.exports = new EditUsersPage();