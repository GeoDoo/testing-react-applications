import { validateUserCredentials } from './login'

describe('Login validation', () => {
  const email = 'user@user.com'
  const password = 'secure'

  it('should throw error on inserting a blank email', () => {
    let errorMessage

    try {
      validateUserCredentials('', password)
    } catch (error) {
      errorMessage = error.message
    }

    expect(errorMessage).toBe('Email cannot be blank!')
  })

  it('should throw error on inserting an email without @', () => {
    let errorMessage

    try {
      validateUserCredentials('user#user.com', password)
    } catch (error) {
      errorMessage = error.message
    }

    expect(errorMessage).toBe('Email should be a valid email!')
  })

  it('should throw error on inserting an email without a valid domain e.g user.com', () => {
    let errorMessage

    try {
      validateUserCredentials('user@usercom', password)
    } catch (error) {
      errorMessage = error.message
    }

    expect(errorMessage).toBe('Email should be a valid email!')

    try {
      validateUserCredentials('user@user..com', password)
    } catch (error) {
      errorMessage = error.message
    }

    expect(errorMessage).toBe('Email should be a valid email!')
  })

  it('should not throw error on inserting a valid email domain e.g user.co.uk', () => {
    let errorMessage

    try {
      validateUserCredentials('user@user.co.uk', password)
    } catch (error) {
      errorMessage = error.message
    }

    expect(errorMessage).toBe(undefined)
  })

  it('should throw error on inserting a blank password', () => {
    let errorMessage

    try {
      validateUserCredentials(email, '')
    } catch (error) {
      errorMessage = error.message
    }

    expect(errorMessage).toBe('Password cannot be blank!')
  })
})
