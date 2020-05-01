import { Given } from 'cypress-cucumber-preprocessor/steps'

Given('I go to {string}', url => {
  cy.visit(url)
})

Given('I am not logged in', () => {
  cy.logout()
})

Given('I am logged in', () => {
  cy.login()
})
