///<reference types="Cypress" />

const configData = require('../../fixtures/config.json');

class usermanagement {
    elements = {
        emailFirstRow: () => cy.get('table.table__Table-elf6l1-0>tbody>tr:nth-of-type(1)>td:nth-of-type(1)>a', { timeout: configData.timeout }),
        addNewUserButton: () => cy.get('div.userManagement_user__management__header__2pomB>button'),
        usermanagementlabel: () => cy.get('div#main-content >div>div>p'),
        firstUser: () => cy.get('div.cardSection_card__section__left__3spRy>div:nth-of-type(3) div div:first-of-type'),
    }

    clickOnFirstUser() {
        this.elements.firstUser().click();
    }

    userInfoIsVisible() {
        this.elements.userInfoButtonInEdit().should('be.visible');
    }

    clickUserInfo() {
        this.elements.moreinfoFirstRow().trigger('onmouseover')
        this.elements.userInfo().click({ force: true })
    }

    getUserManagementLabel() {
        return this.elements.usermanagementlabel().invoke('text');
    }

    getEmailAddress() {
        return this.elements.emailFirstRow().invoke('text');
    }

    clickAddNewUserButton() {
        this.elements.addNewUserButton().scrollIntoView().click();
    }
}
module.exports = new usermanagement();