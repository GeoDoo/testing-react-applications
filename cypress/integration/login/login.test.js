import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I go to {string}', url => {
  cy.visit(url)
})

Given('I see a greeting message {string}', message => {
  cy.findByText(message).should('exist')
})

Given('I see a link to create an account', () => {
  cy.findByText('Need to create an account?')
    .should('have.attr', 'href')
    .and('eq', '/register')
})

Given(
  'I see a login form with a username and password fields and a login button',
  () => {
    cy.get('form').findAllByLabelText('Username').should('exist')
    cy.get('form').findAllByLabelText('Password').should('exist')
    cy.get('form').findAllByText('Submit').should('exist')
  },
)

When('I type in my username and password', () => {
  cy.get('form').findAllByLabelText('Username').type(Cypress.env('username'))
  cy.get('form').findAllByLabelText('Password').type(Cypress.env('password'))
})

When('I type the wrong username and password', () => {
  cy.get('form').findAllByLabelText('Username').type('yo@yo.com')
  cy.get('form').findAllByLabelText('Password').type('hohoho')
})

When('I type in my username', () => {
  cy.get('form').findAllByLabelText('Username').type(Cypress.env('username'))
})

When('I type an invalid email', () => {
  cy.get('form').findAllByLabelText('Username').type('hjdajdhkajdhasd')
})

When('I submit the form', () => {
  cy.get('form').findAllByText('Submit').click()
})

Then('I successfully login', () => {
  cy.findByText('You have successfully logged in')
})

Then('I should go to {string}', url => {
  cy.location('pathname').should('eq', url)
})

Then('I see the message {string}', message => {
  cy.findByText(message).should('exist')
})
