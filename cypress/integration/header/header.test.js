import { Then } from 'cypress-cucumber-preprocessor/steps'

Then('I see a login and a register link in the header', () => {
  cy.get('header')
    .findByText('Login')
    .should('have.attr', 'href')
    .and('eq', '/')

  cy.get('header')
    .findByText('Register')
    .should('have.attr', 'href')
    .and('eq', '/register')
})

Then('I see only the logout link in the header', () => {
  cy.get('header')
    .findByText('Logout')
    .should('have.attr', 'href')
    .and('eq', '/logout')

  cy.get('header').findByText('Login').should('not.exist')
  cy.get('header').findByText('Register').should('not.exist')
})
