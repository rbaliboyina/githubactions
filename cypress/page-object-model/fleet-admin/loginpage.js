/// <reference types="Cypress"/>

class loginPage{

    elements={
        emailaddress:()=> cy.get('input[name="userId"]'),
        password:()=> cy.get('input[name="password"]'),
        signIn:()=> cy.get('button[type="submit"]'),
        userNameVerification:()=> cy.get('#root > div > div > div > header > div > div:nth-of-type(2) > button > span')
    }

    typeEmailAddress(emailid){
        this.elements.emailaddress().type(emailid);
    }

    typePassword(pwd){
        this.elements.password().type(pwd);
    }

    clickSignIn(){
        this.elements.signIn().click();
    }
}
module.exports = new loginPage();