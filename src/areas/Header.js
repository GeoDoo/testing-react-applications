import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { logout } from '../api'

const Header = ({ type }) => {
  const isAuthenticated = !!window.localStorage.getItem('auth')
  const shouldShowUserMenu = type !== 'login'
  const onLogout = async event => {
    event.stopPropagation()

    await logout()
  }

  return (
    <header className="center-align">
      {shouldShowUserMenu && (
        <nav role="navigation" id="user-menu">
          <ul className=" menu">
            {isAuthenticated && (
              <>
                <li>
                  <Link to="/" onClick={onLogout}>
                    Logout
                  </Link>
                </li>
              </>
            )}
            {!isAuthenticated && (
              <>
                <li>
                  <Link to="/">Login</Link>
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
