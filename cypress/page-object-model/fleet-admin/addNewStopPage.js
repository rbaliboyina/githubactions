/// <reference types="Cypress"/>

import config from "../../fixtures/config.json";

class addNewStopPage {
    elements = {
        addnewstopbreadcrumb: () => cy.get('.is-active'),
        addnewstopheader: () => cy.get('h1.action-header__HeaderTitle-q7dhgh-3'),
        downloadIcon: () => cy.get('div.action-header__HeaderButtons-q7dhgh-4>a>svg'),
        stopname: () => cy.get('#name'),
        disabledStatus: () => cy.get('#Disabled'),
        activeStatus: () => cy.get('#Active'),
        stopssearch: () => cy.get('#search'),
        area: () => cy.get('#area'),
        cityname: () => cy.get('div.css-yk16xz-control'),
        address: () => cy.get('#address'),
        landmark: () => cy.get('#hint'),
        cityCode: () => cy.get('#cityCode'),
        terminalCode: () => cy.get('#terminalCode'),
        saveButton: () => cy.get('button.is-primary')
    }

    clickSaveButton() {
        this.elements.saveButton().click();
    }

    typeCityCode(data) {
        this.elements.cityCode().type(data);
    }

    typeLandmark(data) {
        this.elements.landmark().focus().type(data);
    }

    typeCityName(data) {
        this.elements.cityname().type(data+'{enter}');
    }

    typeStop(data) {
        this.elements.stopssearch().type(data).wait(config.actionstimeout).type('{downArrow}').tab();
    }

    selectStatus(data) {
        if ("Active" == data) {
            this.elements.activeStatus().click();
        }
    }

    typeStopName(data) {
        this.elements.stopname().type(data);
    }

    getAddNewStopBreadCrumb() {
        return this.elements.addnewstopbreadcrumb().invoke('text');
    }

    isAddNewStopHeaderVisible() {
        this.elements.addnewstopheader().should('be.visible');
    }

    isDownloadIconVisible() {
        this.elements.downloadIcon().should('be.visible');
    }
}
module.exports = new addNewStopPage();