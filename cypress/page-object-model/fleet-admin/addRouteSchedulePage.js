///<reference types="Cypress"/>

class addRouteSchedulePage{
    elements={
        addNewRouteSchedule:()=> cy.get('#app > section > section > div > section:first-of-type > section:first-of-type > div > a:first-of-type > div'),
        routeScheduleName:()=> cy.get('#name'),
        startTimeHrs:()=> cy.get('#react-select-8-input'),
        startTimeMins:()=> cy.get('#react-select-9-input'),
        nonRefundable:()=> cy.get('#non_refundable'),
        partiallyRefundable:()=> cy.get('#partial_refundable'),
        fullyRefundable:()=> cy.get('#fully_refundable'),
        driverName:()=> cy.get('#react-select-10-input'),
        busID:()=> cy.get('#react-select-11-input')
    }


}
module.exports = new addRouteSchedulePage();

