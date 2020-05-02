import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const isAuthenticated = !!window.localStorage.getItem('auth')

  return (
    <header>
      {isAuthenticated && (
        <div>
          <Link to="/logout">Logout</Link>
        </div>
      )}
      {!isAuthenticated && (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      )}
    </header>
  )
}

export default Header
