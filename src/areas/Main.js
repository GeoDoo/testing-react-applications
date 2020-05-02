import React from 'react'
import PropTypes from 'prop-types'

const Main = ({ children }) => <main className="center-align">{children}</main>

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main
