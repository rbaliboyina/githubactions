///<reference types="Cypress" />

import { When, Given, And, Then } from "cypress-cucumber-preprocessor/steps";
import addbuspage from "../../../../../page-object-model/fleet-admin/addbuspage";
import editbuspage from "../../../../../page-object-model/fleet-admin/editbuspage";
import busesinfopage from "../../../../../page-object-model/fleet-admin/busesinfopage";
import busespage from "../../../../../page-object-model/fleet-admin/busespage";
import overviewPage from '../../../../../page-object-model/fleet-admin/overviewpage'
import Utilities from "../../../../../utilities/Utilities";
import config from '../../../../../fixtures/config.json'

Given(/^user click on Buses link$/, () => {
    overviewPage.clickbuses();
})

Then(/^user should land in Buses page$/, () => {
    busespage.getBusesTitle().should('eq', 'Buses')
})

When(/^user click on Add New Bus button in Buses page$/, () => {
    busespage.clickOnAddNewBusButton();
})

Then(/^user should able to view Add New Bus page$/, () => {
    addbuspage.getAddNewBusTitle().should('eq', 'Add New Bus')
    cy.log(Utilities.getRandomInt(1, 100));
})

describe('To verify adding new bus', () => {
    let vehicleId = Utilities.generateVehicleId();
    let seats = Utilities.generateSeats();
    let colorcode = Utilities.generateColors();
    let busModel = Utilities.generateBusModels();
    let year = Utilities.generateYear();

    When(/^user enter vehicle id in Add New Bus page$/, () => {
        addbuspage.inputvehicleid(vehicleId);
    })

    And(/^user enter seats in Add New Bus page$/, () => {
        addbuspage.inputseats(seats);
    })

    And(/^user enter color in Add New Bus page$/, () => {
        cy.log('color code' + colorcode);
        addbuspage.inputcolor(colorcode);
    })

    And(/^user enter model in Add New Bus page$/, () => {
        addbuspage.inputmodel(busModel);
    })

    And(/^user enter year in Add New Bus page$/, () => {
        addbuspage.inputyear(year);
    })

    And(/^user click on Save button in Add New Bus page$/, () => {
        addbuspage.clicksave();
    })

    Then(/^user should able to view Bus Info page$/, () => {
        busesinfopage.getInfoTitle().should('eq', 'Info');
        busesinfopage.isEditButtonVisible();
        busesinfopage.vehicleIDShouldNotbeEmpty();
        busesinfopage.updatedAtValueShouldNotbeEmpty();
        busesinfopage.createdAtValueShouldNotbeEmpty();
    })

    And(/^user should able to view vehicleid in Bus Info page$/, () => {
        busesinfopage.getvehicleIDValue().should('eq', vehicleId);
    })
})

When(/^user click on Edit button for first record$/, () => {
    busespage.clickOnFirstRowEditButton();
})

Then(/^user should able to view Bus Edit page$/, () => {
    editbuspage.getBreadCrumbText().should('eq', 'Edit')
    editbuspage.getEditHeaderText().should('eq', 'Edit');
    editbuspage.isInfoButtonIsVisible();
    editbuspage.isSaveButtonIsVisible();
})

When(/^user click on info button for first record$/, () => {
    busespage.clickOnFirstRowInfoButton();
})

When(/^user click on Filter button in Buses page$/, () => {
    busespage.clickOnFilterIcon();
})

Then(/^user able to view Filter option in Buses page$/, () => {
    busespage.getFilterTextFromPopup().should('eq', 'Filter');
    busespage.clearFiltersVisible();
    busespage.filterApplyChangesVisible();
})

describe('To verify filter with vehicle id option', () => {
    let vid = ''

    And(/^user enter vehicleid in vehicleid filter$/, () => {
        busespage.elements.firstRowVehicleID().invoke('text').then((data) => {
            vid = data;
            busespage.filterWithVehicleID(data);
        })
    })

    Then(/^vehicleid related information should display in Buses page$/, () => {
        busespage.getFirstRowVehicleID().should('eq', vid);
    })
})

And(/^user click on Applychanges button on filter popup in Buses page$/, () => {
    busespage.clickOnApplyChanges();
})

describe('To verify filter with seats option', () => {
    let seats = ''

    And(/^user enter seats in seats filter$/, () => {
        busespage.elements.firstRowSeats().invoke('text').then((data) => {
            seats = data;
            busespage.filterWithSeats(seats);
        })
    })

    Then(/^seats related information should display in Buses page$/, () => {
        busespage.getFirstRowSeats().should('eq', seats);
    })
})

let color = ''
And(/^user enter color in color filter$/, () => {
    busespage.elements.firstRowColor().invoke('text').then((data) => {
        color = data;
        busespage.filterWithColor(color);
    })
})

Then(/^color related information should display in Buses page$/, () => {
    busespage.getFirstRowColor().should('eq', color);
})

describe('To verify filter with model option', () => {
    let model = ''

    And(/^user enter model in model filter$/, () => {
        busespage.elements.firstRowModel().invoke('text').then((data) => {
            model = data;
            busespage.filterWithModel(model);
        })
    })

    Then(/^model related information should display in Buses page$/, () => {
        busespage.getFirstRowModel().should('eq', model);
    })
})

describe('To verify filter with year option', () => {
    let year = ''

    And(/^user enter year in year filter$/, () => {
        busespage.elements.firstRowYear().invoke('text').then((data) => {
            year = data;
            busespage.filterWithYear(year);
        })
    })

    Then(/^year related information should display in Buses page$/, () => {
        busespage.getFirstRowYear().should('eq', year);
    })
})

And(/^user click on clearfilter option in filters$/, () => {
    busespage.clickOnClearFilters();
})

Then(/^all the fields in filter should be cleared$/, () => {
    busespage.elements.filterVehicleID().should('be.empty');
    busespage.elements.filterAvailableSeats().should('be.empty');
    busespage.elements.filterColor().should('be.empty');
    busespage.elements.filterModel().should('be.empty');
    busespage.elements.filterYear().should('be.empty');
})