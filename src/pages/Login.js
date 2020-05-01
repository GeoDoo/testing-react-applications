import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { login } from '../api'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const onSubmit = async event => {
    event.preventDefault()

    try {
      await login(username, password)
    } catch (error) {
      throw error
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

export default Login
