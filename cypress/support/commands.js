import '@testing-library/cypress/add-commands'

export const login = () => {
  window.localStorage.setItem('auth', 'token')
}

export const logout = () => {
  window.localStorage.clear
}

Cypress.Commands.add('login', login)
Cypress.Commands.add('logout', logout)
