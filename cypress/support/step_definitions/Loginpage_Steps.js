///<reference types ="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const url ="https://beta.jobtrain.co.uk/Home/";

Given("I navigate to the login page", () =>{
 cy.visit(url);  
});
When("I click on the login button", ()=>{
    cy.get('[data-test="a-sign-in"]').click();
   

});
When("Allow Cookies", ()=>{
    cy.get('.cc-allow').click();

});


When("I enter the Email address", ()=>{
    cy.get('[data-testid="txt-email"]').type("nanncykevin+2024@gmail.com");

});

When("I enter the Password", ()=>{
    cy.get('[data-testid="txt-password"]').type("Testing@123");

});

Then("User should be Login successfully", ()=>{
   
    cy.get('[data-testid="btn-Please enter your username and password to sign in"]').click();
    cy.wait(500); 
   
});


