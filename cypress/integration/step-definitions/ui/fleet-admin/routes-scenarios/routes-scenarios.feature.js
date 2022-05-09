///<reference types="Cypress"/>

import { When, Given, And, Then } from "cypress-cucumber-preprocessor/steps";
import editroutepage from "../../../../../page-object-model/fleet-admin/editroutepage";
import routesinfopage from "../../../../../page-object-model/fleet-admin/routesinfopage";
import addNewRoutesPage from "../../../../../page-object-model/fleet-admin/addNewRoutesPage";
import overviewpage from "../../../../../page-object-model/fleet-admin/overviewpage";
import routespage from "../../../../../page-object-model/fleet-admin/routespage";


Given(/^user click on Routes link$/, () => {
    overviewpage.clickroutes();
})

Then(/^user should land in Routes page$/, () => {
    routespage.getRoutesBreadCrumbText().should('eq', 'Routes');
    routespage.isRoutesHeaderVisible();
    // routespage.getRouteNameTableHeaderText().should('eq', 'Route Name');
    //routespage.getStopsTableHeaderText().should('eq', 'Stops');
    //routespage.getStartingPointTableHeaderText().should('eq', 'Starting Point');
    //routespage.getEndingPointTableHeaderText().should('eq', 'Ending Point');
    //routespage.getPriceValueTableHeaderText().should('eq', 'Price Value');
    //routespage.getStatusTableHeaderText().should('eq', 'Status');
})

When(/^user click on Add New Route button in Routes page$/, () => {
    routespage.clickOnAddNewRoutesButton();
})

Then(/^user should able to view Add New Route page$/, () => {
    addNewRoutesPage.getAddNewRouteBreadCrumbText().should('eq', 'Add New Route');
    addNewRoutesPage.isAddNewRouteHeaderVisible();
    addNewRoutesPage.isRouteNameInputBoxVisible();
})

And(/^user enter (.*) in Route Name field in Add New Route page$/, (routename) => {
    addNewRoutesPage.typeRouteName(routename);
})

And(/^user click on (.*) in Add New Route page$/, (status) => {
    addNewRoutesPage.selectStatus(status);
})

And(/^user set the Booking close time as (.*) (.*) in Add New Route page$/, (hrs, mins) => {
    addNewRoutesPage.setBookingCloseTime(hrs, mins);
})

And(/^user set the (.*) (.*) in Add New Route page$/, (pricef, pricev) => {
    addNewRoutesPage.setPriceAndValue(pricef, pricev);
})

And(/^user set (.*) (.*) (.*) for Stop1 in Add New Route page$/, (starttime, busstop, pausetime) => {
    addNewRoutesPage.setStop1Details(starttime, busstop, pausetime);
})

And(/^user click on Add Stop button in Add New Route page for adding Stops$/, () => {
    addNewRoutesPage.clickOnAddNewStopButton();
})

And(/^user set (.*) (.*) (.*) for Stop2 in Add New Route page$/, (starttime, busstop, pausetime) => {
    addNewRoutesPage.setStop2Details(starttime, busstop, pausetime);
})

And(/^user click on Save Button in Add New Route page for saving stop$/, () => {
    addNewRoutesPage.clickOnSaveButton();
})

Then(/^user able to view Route Info page$/, () => {
    routesinfopage.getRoutesInfoBreadCrumbText().should('eq', 'Route Info');
    routesinfopage.isRoutesInfoHeaderVisible();
    routesinfopage.isEditButtonVisible();
    routesinfopage.isRemoveButtonVisible();
    //routesinfopage.isMapVisible();
})

When(/^user click on Edit button for first record of route in Routes page$/, () => {
    routespage.clickOnFirstRowEditButton();
})

Then(/^user able to view Route Edit page$/, () => {
    editroutepage.getEditBreadCrumbText().should('eq', 'Edit');
    editroutepage.isEditHeaderVisible();
    editroutepage.isRemoveButtonVisible();
    editroutepage.isRouteInfoButtonVisible();
    editroutepage.isSaveButtonVisible();
})

When(/^user click on Route Info button for first record of route in Routes page$/, () => {
    routespage.clickOnFirstRowRouteInfoButton();
})

When(/^user click on Filter icon in Routes page$/, () => {
    routespage.clickOnFilterIcon();
})

Then(/^Filter options should display in Routes page$/, () => {
    routespage.getFilterPopupText('eq', 'Filter');
    routespage.isFilterRouteNameVisible();
    routespage.isFilterStartingPointVisible();
    routespage.isFilterEndingPointVisible();
    routespage.isFilterApplyChangesVisible();
    routespage.isClearFiltersVisible();
})

let routename = '';
And(/^user enter Route Name in Filter popup in Routes page$/, () => {
    routespage.elements.firstRecordRouteName().invoke('text').then((data) => {
        routename = data;
        routespage.filterWithRouteName(routename);
    })
})

And(/^user click on Apply Changes in Filter popup in Routes page$/, () => {
    routespage.clickOnFilterApplyChanges();
})

Then(/^Route Name related information should display in Routes page$/, () => {
    routespage.elements.firstRecordRouteName().invoke('text').should('eq', routename);
})

let startingpoint = '';
And(/^user enter Starting Point in Filter popup in Routes page$/, () => {
    routespage.elements.firstRecordStartingPoint().invoke('text').then((data) => {
        startingpoint = data;
        routespage.filterWithStartingPoint(data);
    })
})

Then(/^Starting Point related information should display in Routes page$/, () => {
    routespage.elements.firstRecordStartingPoint().invoke('text').should('eq', startingpoint);
})

let endingpoint = '';
And(/^user enter Ending Point in Filter popup in Routes page$/, () => {
    routespage.elements.firstRecordEndingPoint().invoke('text').then((data) => {
        endingpoint = data;
        routespage.filterWithEndingPoint(data);
    })
})

Then(/^Ending Point related information should display in Routes page$/, () => {
    routespage.elements.firstRecordEndingPoint().invoke('text').should('eq', endingpoint);
})

And(/^user enter Status in Filter popup in Routes page$/, () => {
    routespage.filterWithStatus('Yes');
})

Then(/^Status related information should display in Routes page$/, () => {
    routespage.getFirstRecordStatus().should('eq', 'Active');
})

And(/^user click on Clear Filter popup in Routes page$/, () => {
    routespage.clickOnClearFilters();
})

Then(/^all the fields on Popup should be empty in Routes page$/, () => {
    routespage.isFilterRouteNameFieldEmpty();
    routespage.isFilterStartingPointEmpty();
    routespage.isFilterEndingPointEmpty();
})

Then(/^user can able to view the stop related fields in Add New Route page$/, () => {
    addNewRoutesPage.isStop1TimeIsVisible();
    addNewRoutesPage.isStop1BusstopVisible();
    addNewRoutesPage.isStop1PauseTimeVisible();
    addNewRoutesPage.isStop1DeleteButtonVisible();
})

When(/^user click on Remove stop button in Add New Route page for removing stop$/, () => {
    addNewRoutesPage.clickOnRemoveStopButton();
})

Then(/^user should not able to view the stop related fields in Add New Route page$/, () => {
    addNewRoutesPage.isStop1TimeIsNotVisible();
    addNewRoutesPage.isStop1BusstopNotVisibile();
    addNewRoutesPage.isStop1PauseTimeNotVisible();
})