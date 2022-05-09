///<reference types="Cypress" />

import { expect } from "chai";
import { When, Given, And, Then } from "cypress-cucumber-preprocessor/steps";
import driverspage from "../../../../../page-object-model/fleet-admin/driverspage";
import addDriversPage from '../../../../../page-object-model/fleet-admin/addDriverPage'
import driverInfoPage from '../../../../../page-object-model/fleet-admin/driverinfopage';
import addNewUserPage from "../../../../../page-object-model/fleet-admin/addNewUserPage";
import loginPage from '../../../../../page-object-model/fleet-admin/loginpage'
import overviewPage from '../../../../../page-object-model/fleet-admin/overviewpage'
import usermanagementpage from "../../../../../page-object-model/fleet-admin/usermanagementpage";
import userinfopage from '../../../../../page-object-model/fleet-admin/userInfopage'
import Utilities from "../../../../../utilities/Utilities";

const configData = require('../../../../../fixtures/config.json');
const loginData = require('../../../../../fixtures/fleet_adminapp_data/operator_login.json');

Given(/^user click on Drivers link$/, () => {
    overviewPage.clickdrivers();
})

Then(/^user should able to view Drivers page$/, () => {
    driverspage.getDriversText().should('eq', "Drivers");
})

Then(/^user should able to view all the fields related to Drivers page$/, () => {
    driverspage.getDriversText().should('eq', "Drivers");
    driverspage.isAddNewDriverButtonVisible();
    driverspage.isDownloadIconVisible();
    driverspage.isFilterIconVisible();
    driverspage.getDriverNameHeaderText().should('eq', "Driver Name");
    driverspage.getEmailHeaderText().should('eq', "E-mail");
    driverspage.getPhoneNumberHeaderText().should('eq', "Phone Number");
    driverspage.getLicenseNumberHeaderText().should('eq', "License No");
    driverspage.getLicenseExpireHeaderText().should('eq', "License Expire");
    driverspage.getDriverStatusHeaderText().should('eq', "Driver Status");
})

And(/^user click on Add New Driver link$/, () => {
    driverspage.clickAddNewDriverButton();
})

Then(/^user should able to view Add New Driver page$/, () => {
    addDriversPage.getDriverBreadCrumbText().should('eq', 'Add New Driver');
})

Then(/^user should able to view all the fields related to New Driver page$/, () => {
    addDriversPage.isDownloadButtonVisible();
    addDriversPage.isDriverNameTextBoxVisible();
    addDriversPage.isDriverStatusButtonsVisible();
    addDriversPage.isEmailTextBoxVisible();
    addDriversPage.isAuthPasswordTextBoxVisible();
    addDriversPage.isPhoneTextBoxVisible();
    addDriversPage.isLicenseNoTextBoxVisible();
    addDriversPage.isLicenseExpiryTextBoxVisible();
    addDriversPage.isPhotoTextBoxVisible();
    addDriversPage.isSaveButtonVisible();
})

And(/^user select Driver status as (.*) radio button$/, (radiobutton) => {
    addDriversPage.clickRadioButton(radiobutton);
})

And(/^user click on save button in Add New Driver page$/, () => {
    addDriversPage.clickSave();
})

Then(/^user should able to view '(.*)' error message$/, (errormessage) => {
    addDriversPage.getEmailErrorMessage().should('eq', errormessage);
})

And(/^user enter (.*) in email field in Add New Driver page$/, (invalidEmailData) => {
    addDriversPage.typeEmail(invalidEmailData);
})

And(/^user click on back button in Add New Driver page$/, () => {
    addDriversPage.clickOnBackButton();
})

And(/^user click on Filter Panel hamburger icon in Drivers page$/, () => {
    driverspage.clickOnFilterIcon();
})

Then(/^user should able to view '(.*)' popup in Drivers page$/, (text) => {
    driverspage.getFilterText().should('eq', text);
})

When(/^user click on right arrow button on Filter popup$/, () => {
    driverspage.clickOnFilterArrow();
})

Then(/^applychanges button should not be visible in Drivers page$/, () => {
    driverspage.applyChangesShouldNotbeVisible();
})

describe('Driver creation ', () => {
    var drivername = Utilities.generateName();
    var driveremail = Utilities.generateEmail();

    When(/^user enter Driver Name in Driver Name field in Add New Driver page$/, () => {
        addDriversPage.typeDriverName(drivername);
    })

    When(/^user selects (.*) in Add New Driver page$/, (driverstatus) => {
        addDriversPage.clickRadioButton(driverstatus);
    })

    When(/^user enter Driver Email in email field in Add New Driver page for creating the new driver$/, () => {
        addDriversPage.typeEmail(driveremail);
    })

    When(/^user enter authpassword in password field in Add New Driver page$/, () => {
        addDriversPage.typeAuthPassword(Utilities.generatePassword());
    })

    When(/^user enter phone number in phone number field in Add New Driver page$/, () => {
        addDriversPage.typePhone(Utilities.generatePhoneNumber());
    })

    And(/^click on Save button in Add New Driver page$/, () => {
        addDriversPage.clickSave();
    })

    Then(/^user should land in Driver Info page$/, () => {
        driverInfoPage.driverInfobreadCrumb().should('eq', 'Driver Info');
    })

    When(/^user click on back button in Driver Info page$/, () => {
        driverInfoPage.clickBackButton();
    })

    Then(/^user should able to view created driver in Driver page$/, () => {
        driverspage.clickOnFilterIcon();
        driverspage.filterWithDriverName(drivername);
        driverspage.filterWithEmail(driveremail);
        driverspage.clickOnApplyFilter();
        driverspage.IsCreatedDriverDisplayed().should('eq', driveremail);
    })
});

And(/^user click on name of the first driver in drivers page$/, () => {
    driverspage.clickFirstRowDriverName();
})

And(/^user should able to view '(.*)' as Headers in Driver Info page$/, (headers) => {
    driverInfoPage.isBackButtonVisible();
    driverInfoPage.isEditButtonVisible();
    driverInfoPage.isBreadCrumbVisible();

    const headerNames = headers.split(',');

    driverInfoPage.getDriverNameHeader().should('eq', headerNames[0].trim());
    driverInfoPage.getEmailHeader().should('eq', headerNames[1].trim());
    driverInfoPage.getPhoneHeader().should('eq', headerNames[2].trim());
    driverInfoPage.getLicenseNoHeader().should('eq', headerNames[3].trim());
    driverInfoPage.getLicenseExpireHeader().should('eq', headerNames[4].trim());
    driverInfoPage.getDriverStatusHeader().should('eq', headerNames[5].trim());
})

And(/^user should not view any of the values empty in Drivers Info Page$/, () => {
    driverInfoPage.isDriverNameValueEmpty();
    driverInfoPage.isEmailValueEmpty();
    driverInfoPage.isPhoneValueEmpty();
    driverInfoPage.isLicenseNoValueEmpty();
    driverInfoPage.isLicenseExpiryValue();
    driverInfoPage.isDriverStatusValueEmpty();
})

When(/^user enter Driver Name, E-Mail, PhoneNumber in Filter popup in WDrivers page$/, () => {
    driverspage.elements.firstRowDriverName().invoke('text').then((dname) => {
        driverspage.filterWithDriverName(dname);
    });

    driverspage.elements.firstRowEmail().invoke('text').then((demail) => {
        driverspage.filterWithEmail(demail);
    });

    driverspage.elements.firstRowPhoneNumber().invoke('text').then((dphone) => {
        driverspage.filterWithPhoneNo(dphone);
    })
})

And(/^user click on Clear Filters in Filter popup in Drivers page$/, () => {
    driverspage.clickOnClearFilterButton();
})

Then(/^Driver Name, E-Mail, PhoneNumber fields should be empty$/, () => {
    driverspage.elements.filterDriverName().should('be.empty');
    driverspage.elements.filterEmail().should('be.empty');
    driverspage.elements.filterPhoneNumber().should('be.empty');
})



