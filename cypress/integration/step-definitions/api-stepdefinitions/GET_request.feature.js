/// <reference types="Cypress"/> 

import { When, Given, And, Then } from "cypress-cucumber-preprocessor/steps";
import configData from '../../../fixtures/config.json';

let response;

When(/^User Initiate a GET request with data ([^"]*)?/, (uri) => {
    cy.request({
        method: 'GET',
        url: configData.api_url + uri, failOnStatusCode: false,
        headers: {

        }
    }).then((res) => {
        response = res;
    });
})


Then(/^request response should be (.*)?/, (statuscode) => {
    expect(parseInt(statuscode)).to.eq(response.status);
    expect(response.body).not.to.be.null;
    expect(response.body).to.not.be.empty;
})

Then(/^response should be with ([^"]*) (.*)?/, (statuscode, inputresponse) => {
    cy.log("input reponse " + inputresponse)
    cy.log("api response " + JSON.stringify(response.body))

    expect(parseInt(statuscode)).to.eq(response.status)
    expect(response.body).not.to.be.null
    expect(response.body).to.not.be.empty

    if (String(inputresponse).charAt(0) == "{") {
        const res = (JSON.stringify(response.body)).toString();
        const ires = inputresponse;

        expect(res).to.eq(ires);
    }
    else {
        expect(response.body).to.eq(inputresponse);
    }
})