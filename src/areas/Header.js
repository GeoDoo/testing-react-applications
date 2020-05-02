import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Header = ({ type }) => {
  const isAuthenticated = !!window.localStorage.getItem('auth')
  const shouldShowUserMenu = type !== 'login'

  return (
    <header className="center-align">
      {shouldShowUserMenu && (
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
      )}
    </header>
  )
}

Header.propTypes = {
  type: PropTypes.string,
}

export default Header
