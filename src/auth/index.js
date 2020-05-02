import testAuth from './test-auth.js'

const getToken = async (username, password) => {
  if (process.env.NODE_ENV === 'development') {
    return await testAuth.getTestToken(username, password)
  }
}

export default {
  getToken,
}
