import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, useHistory } from 'react-router-dom'
import { login } from '../api'

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [validationErrorMessage, setValidationErrorMessage] = useState('')
  const history = useHistory()

  const onSubmit = async event => {
    event.preventDefault()

    try {
      const token = await login(username, password)
      window.localStorage.setItem('auth', token)
      setToken(token)
    } catch (error) {
      return setValidationErrorMessage(error.message)
    }

    history.replace('/dashboard')
  }

  const onChange = event => {
    if (event.target.name === 'username') {
      setUsername(event.target.value)
    }

    if (event.target.name === 'password') {
      setPassword(event.target.value)
    }
  }

  return (
    <>
      <h1>Sign In</h1>
      <p>
        <Link to="/register">Need to create an account?</Link>
      </p>
      <form onSubmit={onSubmit}>
        {validationErrorMessage && (
          <p style={{ color: '#cc0000' }}>{validationErrorMessage}</p>
        )}
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            aria-labelledby="username"
            value={username}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            aria-labelledby="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
}

export default Login
