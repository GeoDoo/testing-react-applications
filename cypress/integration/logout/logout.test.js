import { When, Then } from 'cypress-cucumber-preprocessor/steps'

When('I click on the logout link', () => {
  cy.get('header').findByText('Logout').click()
})

Then('I am logged out', () => {
  if (window.localStorage.getItem('auth')) {
    throw new Error('user not logged out!')
  }
})
