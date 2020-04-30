import { user } from './../__test-data__/db.json'

export const login = (username, password) => {
  if (username === user.email && password === user.password) {
    window.history.pushState({}, document.title, '/dashboard')
    document.write('You have successfully logged in')
  }
}
