///<reference types="Cypress"/>

class addRoutesPage {
    elements = {
        addNewRoute: () => cy.get('#app > section > section > div > section:first-of-type > section:first-of-type > div > a:first-of-type > div'),
        routeName: () => cy.get('#name'),
        disabled: () => cy.get('#Disabled'),
        active: () => cy.get('#Active'),
        bookingCloseHRs: () => cy.get('input#react-select-2-input'),
        bookingCloseMins: () => cy.get('react-select-3-input'),
        bookingTktPrice: () => cy.get('react-select-4-input'),
        bookingValue: () => cy.get('//input[@name="price.value"]'),
        addStop: () => cy.get('//a[text()="Add Stop"]'),
        timeFrom: () => cy.get('#timeFromStartInMinutes'),
        busStop: () => cy.get('input#react-select-5-input'),
        pauseTime: () => cy.get('#pauseInMinutes'),
        save: () => cy.get('.btn-text')
    }



    typePauseTime(value){
        this.elements.pauseTime().type(value);
    }

    clickSave(){
        this.elements.save().click();
    }
}
module.exports = new addRoutesPage();