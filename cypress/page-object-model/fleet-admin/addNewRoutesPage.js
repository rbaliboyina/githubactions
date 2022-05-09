///<reference types="Cypress" />

import config from "../../fixtures/config.json";

class addnewroutepage {
    elements = {
        addnewroutebreadcrumb: () => cy.get('li.is-active>a'),
        addnewrouteheader: () => cy.get('section.action-header__HeaderWrapper-q7dhgh-0 > h1'),
        routenametextbox: () => cy.get('#name'),
        disabledStatus: () => cy.get('input#Disabled'),
        activeStatus: () => cy.get('input#Active'),
        hrsbefore: () => cy.get('div.booking__hour > div>div>div>div.css-1wa3eu0-placeholder'),
        minsbefore: () => cy.get('div.booking__min > div>div>div>div.css-1wa3eu0-placeholder'),
        price: () => cy.get('div.control>div.bookingCloseTime>div.booking__hour>div.css-2b097c-container>div.css-yk16xz-control>div.css-g1d714-ValueContainer'),
        value: () => cy.get('input[name="price.value"]'),
        addStopButton: () => cy.get('div.control>p>a'),
        stop1timeFromStart: () => cy.get('div.control>div.editRoute__stops:nth-of-type(1)>div:nth-of-type(1)>div>div>input'),
        stop1busstop: () => cy.get('div.control>div.editRoute__stops:nth-of-type(1)>div:nth-of-type(2)>div>div>div>div>div:nth-of-type(1)'),
        stop1pauseTime: () => cy.get('div.control>div.editRoute__stops:nth-of-type(1)>div:nth-of-type(3)>div>div>input#pauseInMinutes'),
        stop1Delete: () => cy.get('div.control>div.editRoute__stops:nth-of-type(1)>div:nth-of-type(4)>a'),
        stop2timeFromStart: () => cy.get('div.control>div.editRoute__stops:nth-of-type(2)>div:nth-of-type(1)>div>div>input'),
        stop2busstop: () => cy.get('div.control>div.editRoute__stops:nth-of-type(2)>div:nth-of-type(2)>div>div>div>div>div:nth-of-type(1)'),
        stop2pauseTime: () => cy.get('div.control>div.editRoute__stops:nth-of-type(2)>div:nth-of-type(3)>div>div>input#pauseInMinutes'),
        stop2Delete: () => cy.get('div.control>div.editRoute__stops:nth-of-type(2)>div:nth-of-type(4)>a'),
        saveButton: () => cy.get('span.btn-text')
    }

    isStop1PauseTimeNotVisible() {
        this.elements.stop1pauseTime().should('not.exist');
    }

    isStop1BusstopNotVisibile() {
        this.elements.stop1busstop().should('not.exist');
    }

    isStop1TimeIsNotVisible() {
        this.elements.stop1timeFromStart().should('not.exist');
    }

    clickOnRemoveStopButton() {
        this.elements.stop1Delete().click();
    }

    isStop1DeleteButtonVisible() {
        this.elements.stop1Delete().should('be.visible');
    }

    isStop1PauseTimeVisible() {
        this.elements.stop1pauseTime().should('be.visible');
    }

    isStop1BusstopVisible() {
        this.elements.stop1busstop().should('be.visible');
    }

    isStop1TimeIsVisible() {
        this.elements.stop1timeFromStart().should('be.visible');
    }

    clickOnSaveButton() {
        this.elements.saveButton().click();
        cy.wait(config.actionstimeout);
    }

    setStop1Details(starttime, stopname, pausetime) {
        this.elements.stop1timeFromStart().type(starttime);
        this.elements.stop1busstop().type(stopname + '{downArrow}{enter}');
        this.elements.stop1pauseTime().type(pausetime);
    }

    setStop2Details(starttime, stopname, pausetime) {
        this.elements.stop2timeFromStart().type(starttime);
        this.elements.stop2busstop().type(stopname + '{downArrow}{enter}');
        this.elements.stop2pauseTime().type(pausetime);
    }

    clickOnAddNewStopButton() {
        this.elements.addStopButton().click();
    }

    setPriceAndValue(pf, pv) {
        this.elements.price().click().type(pf + '{downArrow}{enter}');
        this.elements.value().type(pv);
        //  this.elements.addStopButton().click();
    }

    setBookingCloseTime(hrs, mins) {
        this.elements.hrsbefore().click();
        var dynamictime = parseInt(hrs) + 1;
        cy.get('div.css-26l3qy-menu>div.css-4ljt47-MenuList>div:nth-of-type(' + dynamictime + '').scrollIntoView().click();
        this.elements.minsbefore().click().type('{downArrow}{enter}');
    }

    selectStatus(data) {
        if ("Active" == data) {
            this.elements.activeStatus().click();
        }
    }

    typeRouteName(routename) {
        this.elements.routenametextbox().type(routename);
    }

    getAddNewRouteBreadCrumbText() {
        return this.elements.addnewroutebreadcrumb().invoke('text');
    }

    isAddNewRouteHeaderVisible() {
        this.elements.addnewrouteheader().should('be.visible');
    }

    isRouteNameInputBoxVisible() {
        this.elements.routenametextbox().should('be.visible');
    }
}
module.exports = new addnewroutepage();