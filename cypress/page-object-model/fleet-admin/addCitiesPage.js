///<reference types="Cypress" />

class addCitiesPage {
    elements = {
        addnewcitybreadcrumb: () => cy.get('li.is-active > a:first-of-type'),
        addnewcityheader: () => cy.get('section.action-header__HeaderWrapper-q7dhgh-0 > h1'),
        cityname: () => cy.get('#name'),
        timezone: () => cy.get('section.wrapper-box__StyledWrapperBox-sc-11k69cb-0 > form >div:nth-of-type(2)>div.control>div>div>div:first-of-type'),
        saveButton: () => cy.get('span.btn-text')
    }

    clickSaveButton(){
        this.elements.saveButton().click();
    }

    selectTimezone() {
        this.elements.timezone().click().type('{downArrow}{enter}');
    }

    typeCityName(cityname) {
        this.elements.cityname().type(cityname)
    }

    getAddNewCityBreadCrumbText() {
        return this.elements.addnewcitybreadcrumb().invoke('text');
    }

    isAddNewCityHeaderVisible() {
        this.elements.addnewcityheader().should('be.visible');
    }

    isCityNameVisible() {
        this.elements.cityname().should('be.visible');
    }

    isTimeZoneVisible() {
        this.elements.timezone().should('be.visible');
    }

    isSaveButtonVisible() {
        this.elements.saveButton().should('be.visible');
    }

    fillAddCitiesForm(addCitiesData) {
    }
}
module.exports = new addCitiesPage();