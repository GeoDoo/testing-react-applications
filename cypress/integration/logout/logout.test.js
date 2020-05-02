import { When } from 'cypress-cucumber-preprocessor/steps'

When('I click on the logout link', () => {
  cy.get('header').findByText('Logout').click()
})
