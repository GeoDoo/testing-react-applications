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

Then('I see only the logout link in the header', () => {
  cy.get('header')
    .findByText('Logout')
    .should('have.attr', 'href')
    .and('eq', '/')

  cy.get('header').findByText('Login').should('not.exist')
  cy.get('header').findByText('Register').should('not.exist')
})

Then('I should go to {string}', url => {
  cy.location('pathname').should('eq', url)
})

Then('I am logged out', () => {
  if (window.localStorage.getItem('auth')) {
    throw new Error('user not logged out!')
  }
})
