import React from 'react'

import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import './test.css'

const Test = (props) => {
  return (
    <div className="test-container">
      <Helmet>
        <title>test - nordevlab.github.io</title>
        <meta property="og:title" content="test - nordevlab.github.io" />
      </Helmet>
      <div className="test-container1 back"></div>
      <NavbarInteractive rootClassName="navbar-interactive-root-class-name2"></NavbarInteractive>
    </div>
  )
}

export default Test
