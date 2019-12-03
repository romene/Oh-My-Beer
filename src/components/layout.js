/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import MenuBar from '../components/Layout/MenuBar/MenuBar'
import "./layout.css"

const Layout = ({ children }) => {
    return (
    <>
        <MenuBar />
        <main>{children}</main>
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
