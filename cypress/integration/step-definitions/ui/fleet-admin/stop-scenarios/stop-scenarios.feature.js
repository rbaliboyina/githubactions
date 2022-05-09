/// <reference types="Cypress"/>

import { When, Given, And, Then } from "cypress-cucumber-preprocessor/steps";
import editstopspage from "../../../../../page-object-model/fleet-admin/editstopspage";
import stopspage from "../../../../../page-object-model/fleet-admin/stopspage";
import overviewpage from "../../../../../page-object-model/fleet-admin/overviewpage";
import addNewStopPage from "../../../../../page-object-model/fleet-admin/addNewStopPage";
import stopinfopage from "../../../../../page-object-model/fleet-admin/stopinfopage";

Given(/^user click on Stop link$/, () => {
    overviewpage.clickstops();
})

Then(/^user should land in Stops page$/, () => {
    stopspage.getStopsBreadCrumbText().should('eq', 'Stops');
    stopspage.isStopsHeaderVisible();
    stopspage.isAddNewStopButtonVisible();
})

And(/^user click on Add New Stop button in Stops page$/, () => {
    stopspage.clickOnAddNewStopButton();
})

Then(/^user able to view Add New Stop page$/, () => {
    addNewStopPage.getAddNewStopBreadCrumb().should('eq', 'Add New Stop');
    addNewStopPage.isAddNewStopHeaderVisible();
    addNewStopPage.isDownloadIconVisible();
})

When(/^user enter (.*) in stopname field in Add New Stop page$/, (stopname) => {
    addNewStopPage.typeStopName(stopname);
})

And(/^user click on (.*) radio button field in Add New Stop page$/, (status) => {
    addNewStopPage.selectStatus(status);
})

And(/^user enter (.*) in stops field in Add New Stop page$/, (stops) => {
    addNewStopPage.typeStop(stops);
})

And(/^user enter (.*) in cityname field in Add New Stop page$/, (cityname) => {
    addNewStopPage.typeCityName(cityname);
})

And(/^user enter (.*) in landmark field in Add New Stop page$/, (landmark) => {
    addNewStopPage.typeLandmark(landmark);
})

And(/^user enter (.*) in citycode field in Add New Stop page$/, (citycode) => {
    addNewStopPage.typeCityCode(citycode);
})

And(/^user click on Save button in Add New Stop page$/, () => {
    addNewStopPage.clickSaveButton();
})

Then(/^user able to view StopInfo page$/, () => {
    stopinfopage.getStopInfoBreadCrumbText('eq', "Stop Info");
    stopinfopage.isStopInfoHeaderVisible();
    stopinfopage.isEditButtonVisible();
    stopinfopage.isMapVisible();
    stopinfopage.getStopNameLabelText('eq', "STOP NAME");
})

When(/^user click on Edit button on first record in Stops page$/, () => {
    stopspage.clickOnFirstRowEditButton();
})

Then(/^user able to view Edit page for stop record$/, () => {
    editstopspage.getEditBreadCrumbText('eq', 'Edit');
    editstopspage.isEditHeaderVisible();
    editstopspage.isInfoButtonVisible();
    editstopspage.isStopNameEmpty();
})

When(/^user click on Stop Info button on first record in Stops page$/, () => {
    stopspage.clickOnFirstRowStopInfoButton();
})

When(/^user click on Filter button in Stops page$/, () => {
    stopspage.clickOnFilterIcon();
})

Then(/^user able to view Filter options in Stops page$/, () => {
    stopspage.getFilterPopupText().should('eq', 'Filter');
    stopspage.isClearFiltersVisible();
    stopspage.isFilterApplyChangesVisible();
})

let stopname = '';
And(/^user enter stopname in stopname filter$/, () => {
    stopspage.elements.firstRowStopName().invoke('text').then((data) => {
        stopname = data;
        stopspage.filterWithStopName(data);
    })
})

And(/^user click on Applychanges button on filter popup in Stops page$/, () => {
    stopspage.clickOnApplyChangesButton();
})

Then(/^stopname related information should display in Stops page$/, () => {
    stopspage.getFirstRowStopName().should('eq', stopname);
})

let cityname = '';
And(/^user enter city name in city name filter$/, () => {
    stopspage.elements.firstRowCityName().invoke('text').then((data) => {
        cityname = data;
        stopspage.filterWithCityName(data);
    })
})

Then(/^city name related information should display in Stops page$/, () => {
    stopspage.getFirstRowCityName().should('eq', cityname);
})

let address = '';
And(/^user enter Address in Address filter$/, () => {
    stopspage.elements.firstRowAddress().invoke('text').then((data) => {
        address = data;
        stopspage.filterWithAddress(data);
    })
})

Then(/^Address related information should display in Stops page$/, () => {
    stopspage.getFirstRowAddress().should('eq', address);
})

And(/^user enter the data in different filter options in Stops page$/, () => {
    stopspage.filterWithStopName('stop');
    stopspage.filterWithAddress('address');
})

And(/^user click on Clear Filter button on filter popup in Stops page$/, () => {
    stopspage.clickOnClearFilterButton();
})

Then(/^Filter popup should be clear all the entered data on filter popup$/, () => {
    stopspage.isFilterStopNameEmpty();
    stopspage.isFilterAddressEmpty();
})