import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

const url = 'http://localhost:3000';
const endpoint = '/sobre'

Given('I kinda open Jobs page', () => {
  cy.visit(url+endpoint);
});

// When I go to contact pages - think this kind test

Then('I am very happy', () => {
  cy.contains('h2')
  cy.title().should('include', 'Jobs');
});
