import auth from './../auth'

export const login = async (username, password) => {
  const token = await auth.getToken(username, password)

  if (token) {
    window.history.pushState({}, document.title, '/dashboard')
    document.write('You have successfully logged in')
  }
}
