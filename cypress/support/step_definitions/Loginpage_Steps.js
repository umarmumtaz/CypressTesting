///<reference types ="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const url = "https://beta.jobtrain.co.uk/Home/";
// beforeEach(() => {
//   cy.window().then((win) => {
//     win.console.error = cy.stub(); // Suppress error logs
//  
  Given("I navigate to the login page", () => {
    cy.visit(url);
  });
  When("I click on the login button", () => {
 cy.get('[data-test="a-sign-in"]').click();
  });
  When("Allow Cookies", () => {
cy.get(".cc-allow").click();
  });
  When("I enter the Email address", () => {
    cy.get('[data-testid="txt-email"]').type("nanncykevin+2024@gmail.com");
  });
  When("I enter the Password", () => {
    cy.get('[data-testid="txt-password"]').type("Testing@123");
  });
  Then("User should be Login successfully", () => {
    cy.get( '[data-testid="btn-Please enter your username and password to sign in"]').click();
    cy.wait(500);
 //   cy.get('[data-testid="h1-jt-page-title"]').should('have.text','My Applieeecations');
 cy.get('[data-testid="h1-jt-page-title"]').should('have.text', 'My Applications');
//cy.get('h1.h3.jt-page-title').invoke('text').then((text) => {
//  console.log(text); // This will print the text to the console
//});

  });

  Then("User should be not be Login successfully", () => {
    cy.on('window:alert', (str) => {
        expect(str).to.equal('Invali');
      });
      
  });
