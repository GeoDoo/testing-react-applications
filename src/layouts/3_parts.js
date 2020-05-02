import React from 'react'
import PropTypes from 'prop-types'
import Header from '../areas/Header'
import Main from '../areas/Main'
import Footer from '../areas/Footer'

const ThreePartsLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

ThreePartsLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ThreePartsLayout
