export const validateUserCredentials = (email, password) => {
  if (!email) {
    throw new Error('Email cannot be blank!')
  }

  const isInvalidEmail = !email.includes('@') || !email.includes('.')
  if (isInvalidEmail) {
    throw new Error('Email should be a valid email!')
  }

  if (!password) {
    throw new Error('Password cannot be blank!')
  }
}
