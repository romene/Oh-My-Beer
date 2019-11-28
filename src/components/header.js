import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header
    style={{
      background: `rebeccapurple`,
      
    }}
  >
    <div
      style={{
        
        maxWidth: 960,
        minHeight: 80,
        position: 'sticky',
        top: 0
      }}
    >
     
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
