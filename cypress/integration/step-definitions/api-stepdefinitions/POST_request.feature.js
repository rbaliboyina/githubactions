/// <reference types="Cypress"/> 

import { When, Given, And, Then } from "cypress-cucumber-preprocessor/steps";
import configData from '../../../fixtures/config.json';
import postServiceData from '../../../fixtures/services-data/post-request.json';

let response;
const jsonData = JSON.parse(JSON.stringify(postServiceData))

function payload(key) {
    let jsonobject
    for (let attributename in jsonData) {
        if (attributename == key)
            jsonobject = jsonData[key];
    }
    return jsonobject;
}

Given(/^User initiate a POST request with (.*) and load the body from fixtures with the (.*)?/, (uri, key) => {
    let json = payload(key);

    cy.log(json);

    cy.request({
        method: 'POST',
        url: configData.api_url + uri, failOnStatusCode: false,
        headers: {
        },
        body: {
            json
        }
    }).then((res) => {
        response = res;
    })
})

Given(/^POST request with admin-key and ([^"]*) and load the body from fixtures with the (.*)?/, (uri, key) => {
    let json = payload(key)
    cy.request({
        method: 'POST',
        url: configData.api_url + uri, failOnStatusCode: false,
        headers: {
            'admin-token': configData.admin_token
        },
        body: {
            json
        }
    }).then((res) => {
        response = res;
    })
})

Then(/^POST response should be with ([^"]*)?/, (statuscode) => {
    expect(parseInt(statuscode)).to.eq(response.status)
    expect(response.body).not.to.be.null
    expect(response.body).to.not.be.empty
})