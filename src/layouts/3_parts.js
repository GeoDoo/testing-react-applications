import React from 'react'
import PropTypes from 'prop-types'
import Header from '../areas/Header'
import Main from '../areas/Main'
import Footer from '../areas/Footer'

const ThreePartsLayout = ({ type = 'public', children }) => {
  return (
    <>
      <Header type={type} />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

ThreePartsLayout.propTypes = {
  type: PropTypes.node,
  children: PropTypes.node.isRequired,
}

export default ThreePartsLayout
