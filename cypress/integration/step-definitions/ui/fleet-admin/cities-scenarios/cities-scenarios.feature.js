///<reference types="Cypress" />

import { When, Given, And, Then } from "cypress-cucumber-preprocessor/steps";
import citiespage from "../../../../../page-object-model/fleet-admin/citiespage";
import addCitiesPage from "../../../../../page-object-model/fleet-admin/addCitiesPage";
import cityinfopage from "../../../../../page-object-model/fleet-admin/cityinfopage";
import overviewPage from '../../../../../page-object-model/fleet-admin/overviewpage';
import editcitiespage from '../../../../../page-object-model/fleet-admin/editcitiespage'

Given(/^user click on Cities link$/, () => {
    overviewPage.clickcities();
})

Then(/^user should able to view cities page$/, () => {
    citiespage.getCitiesBreadCrumbText().should('eq', 'Cities');
    citiespage.isCitiesHeaderVisible();
    citiespage.isAddNewCityButtonVisible();
    citiespage.isFilterButtonVisible();
})

And(/^click on Add New City button in cities page$/, () => {
    citiespage.clickOnAddNewCityButton();
})

Then(/^user should able to view Add New City page$/, () => {
    addCitiesPage.getAddNewCityBreadCrumbText().should('eq', 'Add New City');
    addCitiesPage.isAddNewCityHeaderVisible();
    addCitiesPage.isCityNameVisible();
    addCitiesPage.isTimeZoneVisible();
    addCitiesPage.isSaveButtonVisible();
})

When(/^user enter (.*) in cityname filed in Add New City page$/, (cityname) => {
    addCitiesPage.typeCityName(cityname);
})

And(/^user selects timezone in Add New City page$/, () => {
    addCitiesPage.selectTimezone();
})

And(/^user click on Save button in Add New City page$/, () => {
    addCitiesPage.clickSaveButton();
})

Then(/^user should able to view City Info page$/, () => {
    cityinfopage.isEditButtonVisible();
    cityinfopage.getCityInfoBreadCrumbText('eq', 'City Info');
    cityinfopage.isCityInfoHeaderVisible();
})

When(/^user click on Edit button for first record in Cities page$/, () => {
    citiespage.clickOnFirstRecordEditButton();
})

Then(/^user should able to view Cities Edit page$/, () => {
    editcitiespage.getBreadCrumbText().should('eq', 'Edit');
    editcitiespage.getEditHeaderText().should('eq', 'Edit');
    editcitiespage.isInfoButtonIsVisible();
    editcitiespage.isSaveButtonIsVisible();
})

When(/^user click on City Info button for first record in Cities page$/, () => {
    citiespage.clickOnFirstRecordCityInfoButton();
})

When(/^user click on Filter button in cities page$/, () => {
    citiespage.clickOnFilterButton();
})

Then(/^user should able to view Filter popup in citie spage$/, () => {
    citiespage.getFilterHeaderText().should('eq', 'Filter');
    citiespage.isApplyChangesFilterVisible();
    citiespage.isClearFiltersVisible();
})

describe('To verify filter with city name option', ()=>{
    let cityname = '';
And(/^user type cityname in Filter popup in cities page$/, () => {
    citiespage.elements.firstRowCityName().invoke('text').then((data) => {
        cityname = data;
        citiespage.filterWithCityName(cityname);
    })
})

And(/^user click on ApplyChanges in Filter button in cities page$/, () => {
    citiespage.elements.applyChangesFilter().click();
})

Then(/^user should able to view the filtered results in cities page$/, () => {
    citiespage.getFirstRowCityName().should('eq', cityname);
})
})

And(/^user click on ClearFilters in Filter button in cities page$/, ()=>{
    citiespage.clickOnClearFilters();
})

Then(/^cityname filed in Filters should be empty in cities page$/, ()=>{
    citiespage.isFilterCityNameEmpty();
})