import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I go to {string}', url => {
  cy.visit(url)
})

Then('I see a login form with a username and password fields', () => {
  cy.get('form')
    .findAllByLabelText('Username')
    .findAllByLabelText('Password')
    .should('exist')
})
