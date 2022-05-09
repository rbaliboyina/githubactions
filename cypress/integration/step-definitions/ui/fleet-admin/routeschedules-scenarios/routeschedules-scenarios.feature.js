///<reference types="Cypress"/>

import { When, Given, And, Then } from "cypress-cucumber-preprocessor/steps";
import addNewRouteSchedulePage from "../../../../../page-object-model/fleet-admin/addNewRouteSchedulePage";
import routeschedulespage from "../../../../../page-object-model/fleet-admin/routeschedulespage";
import overviewpage from "../../../../../page-object-model/fleet-admin/overviewpage";

Given(/^user click on Routeschedules link$/, () => {
    overviewpage.clickrouteschedules();
})

Then(/^user should land in Routeschedules page$/, () => {
    routeschedulespage.getRouteSchedulesBreadCrumbText().should('eq', 'Route Schedules');
    routeschedulespage.isRouteSchedulesHeaderVisible();
    routeschedulespage.isAddNewRouteSchedulesButtonVisible();
    routeschedulespage.isDownloadIconVisible();
    routeschedulespage.isFilterButtonVisible();
})

When(/^user click on Add New Route Schedule button in Route Schedules page$/, () => {
    routeschedulespage.clickOnAddNewRouteSchedulesButton();
})

Then(/^user should able to view Add New Route Schedule page$/, () => {
    addNewRouteSchedulePage.getAddNewRouteScheduleBreadCrumbText().should('eq', 'Add New Route Schedule');
    addNewRouteSchedulePage.isAddNewRouteScheduleHeaderVisible();
    addNewRouteSchedulePage.isDownloadIconVisible();
    addNewRouteSchedulePage.isRouteScheduleNameVisible();
})