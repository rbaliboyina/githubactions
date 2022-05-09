///<reference types="Cypress" />

import { expect } from "chai";
import { When, Given, And, Then } from "cypress-cucumber-preprocessor/steps";
import edituserspage from "../../../../../page-object-model/fleet-admin/edituserspage";
import addNewUserPage from "../../../../../page-object-model/fleet-admin/addNewUserPage";
import loginPage from '../../../../../page-object-model/fleet-admin/loginpage'
import overviewPage from '../../../../../page-object-model/fleet-admin/overviewpage'
import usermanagementpage from "../../../../../page-object-model/fleet-admin/usermanagementpage";
import userinfopage from '../../../../../page-object-model/fleet-admin/userInfopage'

const configData = require('../../../../../fixtures/config.json');
const loginData = require('../../../../../fixtures/fleet_adminapp_data/operator_login.json');

Given(/^user navigates to login page$/, () => {
  cy.visit(configData.fleet_login_url)
})

Given(/^user enter Email in email field$/, () => {
  loginPage.typeEmailAddress(loginData.email)
})

Given(/^user enter Password in password field$/, () => {
  loginPage.typePassword(loginData.password);
})

Given(/^user click on Sign In button$/, () => {
  loginPage.clickSignIn();
})

Then(/^user should land in overview page$/, () => {
  overviewPage.isOverviewLabelVisible();
})

Given(/^user should able to view User Administration$/, () => {
  overviewPage.isUserAdministrationVisible();
})

Given(/^user should able to view User Management under User Administration$/, () => {
  overviewPage.isUserManagementVisible();
})

Then(/^user should able to view Drivers under User Administration$/, () => {
  overviewPage.isDriversVisible();
});

describe('Validate user management', () => {
  Given(/^user click on User Management$/, () => {
    overviewPage.clickusermanagement();
  })

  Then(/^user able to view respective login details in User Management page$/, () => {
    cy.log('Logged in with ' + loginData.email);
    usermanagementpage.getEmailAddress().should('equal', loginData.email);

    expect(usermanagementpage.getAccessLevel()).not.to.be.null;
    expect(usermanagementpage.getAccessLevel()).not.to.be.empty;

    expect(usermanagementpage.getCreatedAt()).not.to.be.null;
    expect(usermanagementpage.getCreatedAt()).not.to.be.empty;

    expect(usermanagementpage.getUpdatedAt()).not.to.be.null;
    expect(usermanagementpage.getUpdatedAt()).not.to.be.empty;
  })

  And(/^user click on Add New User button in User Management page$/, () => {
    usermanagementpage.clickAddNewUserButton();
  })

  Then(/^user is able to view Add New User Form$/, () => {
    addNewUserPage.getAddNewUserLabelText().should('eq', 'Add New User');
  })

  And(/^user is able to view User Role dropdown field in Add New User form$/, () => {
    addNewUserPage.isUserRoleVisible();
  })

  And(/^user is able to view Full Name input field in Add New User form$/, () => {
    addNewUserPage.isFullNameVisible();
  })

  And(/^user is able to view Email Address input field in Add New User form$/, () => {
    addNewUserPage.isEmailAddressVisible();
  })

  And(/^user is able to view Auth Password input field in Add New User form$/, () => {
    addNewUserPage.isAuthPasswordVisible();
  })

  And(/^user is able to view Phone input field in Add New User form$/, () => {
    addNewUserPage.isPhoneVisible();
  })

  And(/^user is able to view License No input field in Add New User form$/, () => {
    addNewUserPage.isLicenseNoVisible();
  })

  And(/^user is able to view License Expire field in Add New User form$/, () => {
    addNewUserPage.isLicenseExpiryDateVisible();
  })

  And(/^user is able to view Status with Active and Inactive buttons in Add New User form$/, () => {
    addNewUserPage.isActiveStatusVisible();
    addNewUserPage.isInactiveStatusVisible();
  })

  And(/^user is able to view Cancel and Add User buttons in Add New User form$/, () => {
    addNewUserPage.isCancelVisible();
    addNewUserPage.isAddUserVisible();
  })

  And(/^user click on Cancel button in Add New User Form$/, () => {
    addNewUserPage.clickOnCancelButton();
  })

  And(/^user is able to view Operator ID input field$/, () => {
    addNewUserPage.isOperatorIdVisible();
  })

  And(/^user click on Save button without entering the data$/, () => {
    addNewUserPage.clickSaveButton();
  })

  Then(/^user able to get '(.*)' mandatory messages$/, (size) => {
    addNewUserPage.errorMessageCount(size)
  })

  Then(/^user able to view '(.*)'$/, (errormessage) => {
    addNewUserPage.errorMessageIsDispalyed(errormessage);
  })

  And(/^user click on back button$/, () => {
    addNewUserPage.clickBackButton();
  })

  Then(/^user should land in User Management page$/, () => {
    usermanagementpage.getUserManagementLabel().should('eq', "User Management");
  })

})

When(/^user fill the New User Form with random data and User_Role as (.*) (.*)$/, (userrole, status) => {
  addNewUserPage.fillAddNewUserForm(userrole, status);
})

And(/^user click on save button$/, () => {
  addNewUserPage.clickSaveButton();
})

Then(/^user should able to view given email address in User Info page$/, () => {
  userinfopage.isEmailMatching(email);
})

And(/^user should able to view Edit button$/, () => {
  userinfopage.isEditButtonVisible();
})

When(/^user click on back button in User Info page$/, () => {
  userinfopage.clickBackArrowButton();
})

And(/^saved user should be displayed$/, () => {
  usermanagementpage.clickFilterIcon();
  usermanagementpage.typeFilterEmail(email);
  usermanagementpage.clickFilterApplyChanges();
  cy.wait(configData.actionstimeout)
  usermanagementpage.getFirstRowEmailID().should('eq', email);
})

And(/^user click on User Information link by clicking on ...$/, () => {
  usermanagementpage.clickUserInfo();
})

Then(/^user navigates to User Information page$/, () => {
  userinfopage.getUserInfoLabel().should('eq', 'User Information');
})

And(/^user able to view Email, Access Level, Mobile Number, isActive, Craeted At and Updated At fields$/, () => {
  userinfopage.eamilLabelIsVisible();
  userinfopage.emailValueIsNonEmpty();
  userinfopage.accessLevelLabelIsVisible();
  userinfopage.accessLevelValueIsNonEmpty();
  userinfopage.mobileNumberLabelIsVisible();
  userinfopage.mobileNumberValueIsNonEmpty();
  userinfopage.isActiveLabelVisible();
  userinfopage.isActiveValueNonEmpty();
  userinfopage.createdAtLabelIsVisible();
  userinfopage.createdAtValueIsNonEmpty();
  userinfopage.updatedAtLabelIsVisible();
  userinfopage.updatedAtValueIsNonEmpty();
})

And(/^user click on Edit button in User Information page$/, () => {
  userinfopage.clickEditButton();
})

And(/^user should able to view User Information button$/, () => {
  usermanagementpage.userInfoIsVisible();
})

And(/^user should able to view Save button$/, () => {
  addNewUserPage.isSaveButtonVisible();
})

And(/^all the fields should be in Edit mode$/, () => {
  addNewUserPage.isEmailAddressVisible();
  addNewUserPage.isAuthPasswordVisible();
  addNewUserPage.isAccessLevelVisible();
  addNewUserPage.isUserNameVisible();
  addNewUserPage.isMobileNumberVisible();
})

And(/^user click on Filter Panel hamburger icon$/, () => {
  usermanagementpage.clickFilterIcon();
})

Then(/^user should able to view Filter popup$/, () => {
  usermanagementpage.isFilterEmailVisible();
})

And(/^user click on Add User button in Add New User Form$/, () => {
  addNewUserPage.clickOnAddUserButton();
})

And(/^user click on first element of the user in User Management page$/, () => {
  usermanagementpage.clickOnFirstUser();
})

Then(/^user info popup should open in the user Management page$/, () => {
  userinfopage.getUserInfoLabel().should('eq', 'User Info');
})

And(/^user should able to view Edit button in User Info popup$/, () => {
  userinfopage.isEditButtonVisible();
})

And(/^user able to view Create On, Last Updated on, Phone, License No, Email, License Expire fields in User Info popup$/, () => {
  userinfopage.isCloseButtonVisible();
  userinfopage.isCreateOnVisible();
  userinfopage.isLastUpdateOnVisible();
  userinfopage.isPhoneVisible();
  userinfopage.isLicenseNoVisible();
  userinfopage.isEmailVisible();
  userinfopage.isLicenseExpireVisible();
})

And(/^user click on close button in User Info popup in User Management page$/, () => {
  userinfopage.clickOnCloseButton();
})

Then(/^user info popup should close in User Management page$/, () => {
  userinfopage.userInfoLabelShouldNotExist();
  userinfopage.editButtonShouldNotExist();
})

And(/^user click on Edit button in User Info popup$/, () => {
  userinfopage.clickOnEditButton();
})

And(/^user should able to view Update button$/, () => {
  edituserspage.isUpdateButtonVisible();
})

And(/^user should able to view Edit popup window$/, () => {
  edituserspage.getPopupLabelText().should('eq', 'Edit User Data');
})