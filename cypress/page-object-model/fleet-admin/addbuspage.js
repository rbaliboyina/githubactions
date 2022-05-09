///<reference types="Cypress"/>
import 'cypress-wait-until';

import Utilities from '../../utilities/Utilities';
import config from '../../fixtures/config.json'

class addbuspage {
    elements = {
        vehicleid: () => cy.get('input#plate'),
        seats: () => cy.get('input#availableSeats'),
        photo: () => cy.get('input#photo'),
        color: () => cy.get('input#color'),
        model: () => cy.get('input#model'),
        year: () => cy.get('input#year'),
        licenseexpiry: () => cy.get('input#licenseExpiryDate'),
        nextmontharrow: () => cy.get('div[class*="open"]>div[class="flatpickr-months"]>span[class*="flatpickr-next-month"]'),
        save: () => cy.get('button[type="submit"]'),
        vehicleidlabel: () => cy.get('div.showInfoView-inner>div:first-of-type>p'),
        addnewbusbreadcrumb: () => cy.get('nav.breadcrumbs__BreadcrumbsContainer-l5j25e-0>ul>li:nth-of-type(2)'),
        addnewbustitle: () => cy.get('section.action-header__HeaderWrapper-q7dhgh-0 > h1')
    }

    getAddNewBusTitle() {
        return this.elements.addnewbusbreadcrumb().invoke('text');
    }

    inputvehicleid(id) {
        this.elements.vehicleid().type(id);
    }

    inputseats(numberofseats) {
        this.elements.seats().type(numberofseats);
    }

    inputphoto(photolink) {
        this.elements.photo().type(photolink);
    }

    inputcolor(colorcode) {
        this.elements.color().type(colorcode);
    }

    inputmodel(modelnumber) {
        this.elements.model().type(modelnumber);
    }

    inputyear(value) {
        this.elements.year().type(value);
    }

    clicksave() {
        this.elements.save().click();
    }


    //add bus form filling
    fillAddBusForm(addBusData) {
        this.inputvehicleid(Utilities.generateVehicleId());
        this.inputseats(addBusData.numberofseats);
        this.inputphoto(addBusData.photolink);
        this.inputcolor(addBusData.color);
        this.inputmodel(addBusData.modelnumber);
        this.inputyear(addBusData.year);
        this.clicksave();
    }
}
module.exports = new addbuspage();