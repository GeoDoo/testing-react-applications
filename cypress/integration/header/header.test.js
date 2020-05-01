import { Then } from 'cypress-cucumber-preprocessor/steps'

Then('I see a login and a register link in the header', () => {
  cy.get('header')
    .findByText('Login')
    .should('have.attr', 'href')
    .and('eq', '/login')

  cy.get('header')
    .findByText('Register')
    .should('have.attr', 'href')
    .and('eq', '/register')
})
