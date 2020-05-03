export const validateUserCredentials = (email, password) => {
  if (!email) {
    throw new Error('Email cannot be blank!')
  }

  const isEmailValid =
    (email.match(/\@/g) || []).length === 1 &&
    email.split('@')[1] &&
    email.split('@')[1].split('.').length > 1 &&
    (email.match(/\../g) || []).length > 0

  if (!isEmailValid) {
    throw new Error('Email should be a valid email!')
  }

  if (!password) {
    throw new Error('Password cannot be blank!')
  }
}
