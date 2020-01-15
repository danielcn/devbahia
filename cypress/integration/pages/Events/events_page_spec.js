import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

const url = 'http://localhost:3000';

Given('I kinda open Events page', () => {
  cy.visit(url);
});

Then('I am very happy', () => {
  cy.title().should('include', 'Events');
});

// beforeEach(() => {
//   Given(`I open page`, () => {
//       cy.visit('/')
//     })
//   })

//   Then(`I see {string} in the title`, title => {
//     cy.title().should('include', title)
//   })

//   When(`I search for {string}`, text => {
//     cy.get('input[placeholder*="Faça sua busca..."]')
//       .type(text+'{enter}')
//   })

//   Then(`I see the survey completed {string}`, text => {
//     cy.get('a[title*="Como anexar ao report"] h3 div').then(el => {
//     expect(el.text()).to.eq(text)
//   })
// })