import auth from './../auth'

export const login = async (username, password) => {
  const token = await auth.getToken(username, password)

  if (token) {
    // do nothing
    return
  }

  throw new Error('User credentials are not valid')
}
