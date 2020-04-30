import React, { useState } from 'react'
import { login } from './api'

const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = async event => {
    event.preventDefault()

    await login(username, password)
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
  )
}

export default App
