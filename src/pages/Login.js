import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import ThreePartsLayout from '../layouts/3_parts'
import { login } from '../api'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [validationErrorMessage, setValidationErrorMessage] = useState('')
  const history = useHistory()

  const onSubmit = async event => {
    event.preventDefault()

    try {
      const token = await login(username, password)
      window.localStorage.setItem('auth', token)
    } catch (error) {
      return setValidationErrorMessage(error.message)
    }

    history.replace('/dashboard')
  }

  const onChange = event => {
    setValidationErrorMessage('')

    if (event.target.name === 'username') {
      setUsername(event.target.value)
    }

    if (event.target.name === 'password') {
      setPassword(event.target.value)
    }
  }

  return (
    <ThreePartsLayout type="login">
      <section className="text-center">
        <h1>Sign In</h1>
        <p>
          <Link to="/register">Need to create an account?</Link>
        </p>
      </section>
      <form className="form" onSubmit={onSubmit}>
        <section className="form-group">
          {validationErrorMessage && (
            <p className="error">{validationErrorMessage}</p>
          )}
          <section className="form-group-item">
            <label className="form-label" htmlFor="username">
              Username
            </label>
            <input
              className="form-input"
              type="text"
              id="username"
              name="username"
              aria-labelledby="username"
              value={username}
              onChange={onChange}
            />
          </section>
          <section className="form-group-item">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              className="form-input"
              type="password"
              id="password"
              name="password"
              aria-labelledby="password"
              value={password}
              onChange={onChange}
            />
          </section>
          <section className="form-group-item">
            <input className="button" type="submit" value="Submit" />
          </section>
        </section>
      </form>
    </ThreePartsLayout>
  )
}

export default Login
