// /// <reference types="Cypress"/> 

// import { When, Given, And, Then } from "cypress-cucumber-preprocessor/steps";
// import Utilities from "../../../../utilities/Utilities";
// import overviewPage from '../../../../page-object-model/fleet-admin/overviewpage';
// import registrationPage from '../../../../../page-object-model/fleet-admin/registration_page';
// import addDriverPage from '../../../../page-object-model/fleet-admin/addDriverPage';
// import configData from '../../../../fixtures/config.json';

//     var email = Utilities.generateEmail();

//     When(/^Signup the user for Feetadmin portal$/, () => {
//         cy.visit(configData.bussr_reg_url);
//         registrationPage.typeEmailAddress(email);
//         registrationPage.typePassword(Utilities.generatePassword());
//         registrationPage.typeOperatorName(Utilities.generateName());
//         registrationPage.clickStartNowButton();
//         registrationPage.selectCountry(Utilities.getCountries());
//         registrationPage.clickProceedButton();
//         overviewPage.usernamelabel();
//         overviewPage.usernamelabel().should('have.text', email.toLowerCase());
//     })

//     Then(/^User successfully launch in Overview page$/, () => {
//         overviewPage.usernamelabel().should('have.text', email.toLowerCase());
//     })

//     Then(/^User Create the Driver with (.*) by navigating to Drivers$/, (drivertype) => {
//         overviewPage.clickdrivers();
//         addDriverPage.clickAddNewDriver();
//         addDriverPage.fillAddDriverForm(drivertype);
//     })

//     Then(/^User Create the Buses by navigating to Buses$/, () => {
//         overviewPage.clickbuses();
//         addBusPage.clickaddnewbus();
//         addBusPage.fillAddBusForm(addBusData);
//     })

//     Then(/^User Create the Cities by navigating to Cities$/, () => {

//     })

//     Then(/^User Create the Stops by navigating to Stop$/, () => {

//     })

//     Then(/^User Create the Routes by navigating to Routes$/, () => {

//     })

//     Then(/^User Create the RouteSchedules by navigating to RouteSchedules$/, () => {

//     })
