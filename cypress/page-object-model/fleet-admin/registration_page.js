///<reference types="Cypress" />

const configData = require('../../fixtures/config.json');
const errorMessages = require('../../fixtures/fleet_adminapp_data/errormessages.json');

class registrationPage {
    elements = {
        //operator signup related webelements
        emailaddress: () => cy.get('#email'),
        password: () => cy.get('#password'),
        operatorname: () => cy.get('#operatorName'),
        country: () => cy.get('select#country', { timeout: configData.intervaltimeout }),
        startNowButton: () => cy.get('span.MuiButton-label', { timeout: configData.intervaltimeout }),
        proceed: () => cy.get('span.MuiButton-label'),
        erroremail: () => cy.get('div[data-testid="error-email"]', { timeout: configData.intervaltimeout }),
        passwordminlabel: () => cy.xpath('//li[text()="Atleast 9 and atmost 15 characters"]'),
        passwordupperlabel: () => cy.xpath('//li[contains(text(),"Upper and lower case")]'),
        passwordnumberlabel: () => cy.xpath('//li[contains(text(),"Numbers")]'),
        passwordspecialchars: () => cy.xpath('(//li[contains(text(),"Special characters")])[1]'),
        errorpwd: () => cy.get('div[data-testid="error-password"]'),
        erroroperator: () => cy.get('div[data-testid="error-operatorName"]')
    }

    pwdlengtherrorlabelcolor(color) {
        if ("red" == color) {
            this.elements.passwordminlabel().should('have.css', 'color').and('equals', 'rgb(255, 56, 96)')
        }
        if ("green" == color) {
            this.elements.passwordminlabel().should('have.css', 'color').and('equals', 'rgb(101, 177, 104)')
        }
    }

    pwdalphaerrorlabelcolor(color) {
        if ("red" == color) {
            this.elements.passwordupperlabel().should('have.css', 'color').and('equals', 'rgb(255, 56, 96)')
        }
        if ("green" == color) {
            this.elements.passwordupperlabel().should('have.css', 'color').and('equals', 'rgb(101, 177, 104)')
        }
    }

    pwddigiterrorlabelcolor(color) {
        if ("red" == color) {
            this.elements.passwordnumberlabel().should('have.css', 'color').and('equals', 'rgb(255, 56, 96)')
        }
        if ("green" == color) {
            this.elements.passwordnumberlabel().should('have.css', 'color').and('equals', 'rgb(101, 177, 104)')
        }
    }

    pwdspecialcharerrorlabelcolor(color) {
        if ("red" == color) {
            this.elements.passwordspecialchars().should('have.css', 'color').and('equals', 'rgb(255, 56, 96)')
        }
        if ("green" == color) {
            this.elements.passwordspecialchars().should('have.css', 'color').and('equals', 'rgb(101, 177, 104)')
        }
    }

    errorEmailMessageNotbeVisisble() {
        cy.contains(errorMessages.signup.emailerrormsg).should('not.exist');
    }

    registeredEmailErrorVerification(alert_msg){
        cy.contains(alert_msg).should('be.visible');
    }

    getEmailErrorMsg() {
        return this.elements.erroremail().invoke("text");
    }

    getPwdErrorMsg() {
        return this.elements.errorpwd().invoke("text");
    }

    typeEmailAddress(emailid) {
        this.elements.emailaddress().type(emailid);
    }

    typeEmailAddressWithTabAction(emailid) {
        this.elements.emailaddress().type(emailid).tab().click({ multiple: true });
    }

    typePassword(pwd) {
        this.elements.password().type(pwd);
    }

    typePasswordWithTabAction(pwd) {
        this.elements.password().type(pwd).tab().click({ multiple: true });
    }

    typeOperatorName(operatorname) {
        this.elements.operatorname().wait(configData.intervaltimeout).type(operatorname);
    }

    selectCountry(countryname) {
        this.elements.country().wait(configData.intervaltimeout).select(countryname);
    }

    countryVisible() {
        this.elements.country().wait(configData.intervaltimeout).should('be.visible')
    }
    
    clickStartNowButton() {
        this.elements.startNowButton().click();
    }

    clickProceedButton() {
        this.elements.proceed().click();
    }
}
module.exports = new registrationPage();