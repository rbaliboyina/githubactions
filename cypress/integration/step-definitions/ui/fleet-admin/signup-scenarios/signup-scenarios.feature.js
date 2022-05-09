/// <reference types="Cypress"/>

import { When, Given, And, Then } from "cypress-cucumber-preprocessor/steps";
import registrationPage from '../../../../../page-object-model/fleet-admin/registration_page';
import overviewPage from '../../../../../page-object-model/fleet-admin/overviewpage';
import configData from '../../../../../fixtures/config.json';
import Utilities from "../../../../../utilities/Utilities";

Given(/^user navigates to Signup page$/, () => {
    cy.visit(configData.bussr_reg_url);
})

When(/^user enter valid email on Email Address field$/, () => {
    registrationPage.typeEmailAddressWithTabAction(Utilities.generateEmail());
})

When(/^user enter (.*) on Email Address field$/, (email) => {
    registrationPage.typeEmailAddressWithTabAction(email);
})

Then(/^user should get invalid email (.*)$/, (message) => {
    registrationPage.getEmailErrorMsg().should('eq', message);
})

Then(/^user should not get any error message$/, () => {
    registrationPage.errorEmailMessageNotbeVisisble();
})

When(/^user enter password (.*) on Password field$/, (password) => {
    registrationPage.typePasswordWithTabAction(password);
})

Then(/^user should get password error msg (.*)$/, (message) => {
    registrationPage.getPwdErrorMsg().should('eq', message);
})

And(/^color of password length error message should be in (.*)$/, (color) => {
    registrationPage.pwdlengtherrorlabelcolor(color);
})

And(/^color of password alphabetics error message should be in (.*)$/, (color) => {
    registrationPage.pwdalphaerrorlabelcolor(color);
})

And(/^color of password numbers error message should be in (.*)$/, (color) => {
    registrationPage.pwddigiterrorlabelcolor(color);
})

And(/^color of password special error message should be in (.*)$/, (color) => {
    registrationPage.pwdspecialcharerrorlabelcolor(color)
})

Then(/^user should get (.*)$/, (alert_msg) => {
    registrationPage.registeredEmailErrorVerification(alert_msg);
})

describe('Signup fleet admin', () => {
    var email = Utilities.generateEmail();
    When(/^User enter email in the email field$/, () => {
        registrationPage.typeEmailAddress(email);
    })

    When(/^User enter password in the password field$/, () => {
        registrationPage.typePassword(Utilities.generatePassword());
    })

    When(/^User enter operator name in the name field$/, () => {
        registrationPage.typeOperatorName(Utilities.generateName());
    })

    When(/^User click on the start now button$/, () => {
        registrationPage.clickStartNowButton();
    });

    Then(/^User should land in Country selection page$/, () => {
        registrationPage.countryVisible();
    });

    When(/^User selects given Country$/, () => {
        registrationPage.selectCountry(Utilities.getCountries());
    });

    When(/^User click on Proceed button$/, () => {
        registrationPage.clickProceedButton();
    });

    Then(/^User lands into over view page$/, () => {
        overviewPage.usernamelabel();
        overviewPage.usernamelabel().should('have.text', email.toLowerCase());
    });
})