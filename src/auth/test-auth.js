import { user } from './../__test-data__/db.json'

const getTestToken = async (username, password) => {
  if (username === user.email && password === user.password) {
    return btoa(JSON.stringify({ email: user.email }))
  }

  return ''
}

export default {
  getTestToken,
}
