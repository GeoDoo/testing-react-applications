import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const isAuthenticated = !!window.localStorage.getItem('auth')

  return (
    <header className="center-align">
      <nav role="navigation" id="user-menu">
        <ul className=" menu">
          {isAuthenticated && (
            <>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </>
          )}
          {!isAuthenticated && (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header
