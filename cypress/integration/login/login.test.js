import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I do not see login and register links in the header', () => {
  cy.get('header').findByText('Login').should('not.exist')
  cy.get('header').findByText('Register').should('not.exist')
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
    cy.get('form').findByLabelText('Username').should('exist')
    cy.get('form').findByLabelText('Password').should('exist')
    cy.get('form').findByText('Submit').should('exist')
  },
)

When('I type in my username and password', () => {
  cy.get('form').findByLabelText('Username').type(Cypress.env('username'))
  cy.get('form').findByLabelText('Password').type(Cypress.env('password'))
})

When('I type the wrong username and password', () => {
  cy.get('form').findByLabelText('Username').type('yo@yo.com')
  cy.get('form').findByLabelText('Password').type('hohoho')
})

When('I type in my username', () => {
  cy.get('form').findByLabelText('Username').type(Cypress.env('username'))
})

When('I type an invalid email', () => {
  cy.get('form').findByLabelText('Username').type('hjdajdhkajdhasd')
})

When('I submit the form', () => {
  cy.get('form').findByText('Submit').click()
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
