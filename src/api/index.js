export const login = () => {
  window.history.pushState({}, document.title, '/dashboard')
  document.write('You have successfully logged in')
}
