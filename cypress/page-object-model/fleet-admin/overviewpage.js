///<reference types="Cypress" />

const configData = require('../../fixtures/config.json');

class overview {
    elements = {
        userNamelabel: () => cy.get('div.account-menu>div.menu_icon>span'),
        userAdministration: () => cy.xpath('//*[text()="USER ADMINISTRATION"]'),
        usermanagement: () => cy.xpath('//a[text()="User Management"]'),
        drivers: () => cy.xpath('//a[text()="Drivers"]'),
        buses: () => cy.xpath('//a[text()="Buses"]'),
        cities: () => cy.xpath('//a[text()="Cities"]'),
        stops: () => cy.xpath('//a[text()="Stop"]'),
        routes: () => cy.xpath('//a[text()="Routes"]'),
        routeschedules: () => cy.xpath('//a[text()="Route Schedules"]'),
        trips: () => cy.xpath('//a[text()="Trips"]'),
        overview: () => cy.xpath('//a[text()="Overview"]'),
        reservations: () => cy.xpath('//a[text()="Reservations"]'),
        rentalenquiry: () => cy.xpath('//a[text()="Rental Enquiry"]'),
        listofservices: () => cy.xpath('//a[text()="List of Services"]'),
        analytics: () => cy.xpath('//a[text()="Analytics"]'),
        customers: () => cy.xpath('//a[text()="Customers"]'),
        contactus: () => cy.xpath('//a[text()="Contact Us"]'),
        termsconditions: () => cy.xpath('//a[text()="Terms & Conditions"]'),
        home: () => cy.xpath('//p[text()="HOME"]')
    }

    homelabel() {
        this.elements.home().should('be.visible');
    }

    isUserAdministrationVisible() {
        this.elements.userAdministration().should('have.text', 'USER ADMINISTRATION')
    }

    isDriversVisible() {
        this.elements.drivers().should('be.visible');
    }

    isOverviewLabelVisible() {
        cy.intercept('https://qa-operator.bussr.app/*/overview');

        this.elements.overview().should('be.visible');
    }

    isUserManagementVisible() {
        this.elements.usermanagement().should('be.visible');
        return this.elements.usermanagement();
    }

    usernamelabel() {
        this.elements.userNamelabel().should('be.visible');
        return this.elements.userNamelabel();
    }

    clicktermsconditions() {
        this.elements.termsconditions().click();
    }

    clickcontactus() {
        this.elements.contactus.click();
    }

    clickcustomers() {
        this.elements.customers().click();
    }

    clicklistofservices() {
        this.elements.listofservices().click();
    }

    clickrentalenquiry() {
        this.elements.rentalenquiry().click();
    }

    clickbuses() {
        this.elements.buses().click();
    }

    clickcities() {
        this.elements.cities().click();
    }

    clickstops() {
        this.elements.stops().click();
    }

    clickroutes() {
        this.elements.routes().click();
    }

    clickrouteschedules() {
        this.elements.routeschedules().click();
    }

    clicktrips() {
        this.elements.trips().click();
    }

    clickdrivers() {
        this.elements.drivers().click();
    }

    clickusermanagement() {
        this.elements.usermanagement().click();
    }

    usermanagementhighlighted() {
        this.elements.usermanagement().should('have.css', 'color').and('equals', 'rgb(113, 138, 244)')
    }

    drivershighlighted() {
        this.elements.drivers().should('have.css', 'color').and('equals', 'rgb(113, 138, 244)')
    }

    clickoverview() {
        this.elements.overview().click();
    }

    clickreservations() {
        this.elements.reservations().click();
    }
}
module.exports = new overview();