///<reference types="Cypress" />

import 'cypress-wait-until';
const configData = require('../../fixtures/config.json');

class addStopsPage {
    elements = {
        addnewstop: () => cy.get('#app > section > section > div > section:first-of-type > section:first-of-type > div > a:first-of-type > div'),
        stopname: () => cy.get('#name'),
        disabled: () => cy.get('#Disabled'),
        active: () => cy.get('#Active'),
        stops: () => cy.get('#search'),
        area: () => cy.get('#area'),
        cityname: () => cy.get('input[id*=react-select]'),
        address: () => cy.get('#address'),
        landmark: () => cy.get('#hint'),
        citycode: () => cy.get('#cityCode'),
        terminalcode: () => cy.get('#terminalCode'),
        save: () => cy.get('#app > section > section > div > section > section:nth-of-type(2) > form > button > span'),
        stopnamelabel:()=> cy.get('div.showInfoView-inner>div:first-of-type>p')
    }


    clickAddNewStop(){
        cy.waitUntil(()=> this.elements.addnewstop().should('be.visible'),{
            errorMsg:'stops page is still loading... not able to view the add new stop button',
            timeout:configData.timeout,
            interval:configData.intervaltimeout
        });
        
        this.elements.addnewstop().click();
    }


    fillAddNewStopForm(stopData) {
        this.inputStopName(stopData.stopname);
        this.clickStatus(stopData.status);
        this.inputStops(stopData.stops);
        this.selectCityName(stopData.cityname);
        this.inputAddress(stopData.address);
        this.clickSave();
    }

    inputStopName(value) {
        cy.waitUntil(()=>this.elements.stopname().should('be.visible'),{
            errorMsg:'new stop form is still loading... not able to view the the stop name input field.',
            timeout:configData.timeout,
            interval:configData.intervaltimeout
        });
        this.elements.stopname().type(value);
    }

    clickStatus(value) {
        if ("disabled" == value) {
            this.elements.disabled().click();
        }

        else if ("active" == value) {
            this.elements.active().click();
        }
    }

    inputStops(value) {
        this.elements.stops().type(value);
    }

    inputArea(value) {
        this.elements.area().type(value);
    }

    clickCityName() {
        this.elements.cityname().click();
    }

    selectCityName(value) {
        this.elements.cityname().type(value).wait(1000).type('{enter}');
    }

    inputAddress(value) {
        this.elements.address().type(value)
    }

    inputLandMark(value) {
        this.elements.landmark().type(value);
    }

    inputCityCode(value) {
        this.elements.citycode().type(value);
    }

    inputTerminalCode(value) {
        this.elements.terminalcode().type(value);
    }

    clickSave() {
        this.elements.save().click();

        cy.waitUntil(()=>this.elements.stopnamelabel().should('be.visible'),{
            errorMsg:'saving stop form is still loading... not able to view the the stop name label.',
            timeout:configData.timeout,
            interval:configData.intervaltimeout
        });
    }
}
module.exports = new addStopsPage();