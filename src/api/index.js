import { validateUserCredentials } from './../validation/login'
import auth from './../auth'

export const login = async (username, password) => {
  try {
    validateUserCredentials(username, password)
    const token = await auth.getToken(username, password)

    if (token) {
      return token
    }

    throw new Error('User credentials are wrong!')
  } catch (error) {
    throw error
  }
}

export const logout = async () => {
  try {
    window.localStorage.clear()
  } catch (error) {
    throw error
  }
}
