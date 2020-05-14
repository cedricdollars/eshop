import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        display: 'flex',
        flex: "1",
        justifyContent: "space-between",
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <nav 
        style={{
          color: 'white',
          marginBottom: 0,
          marginLeft: 20
        }
        }
      >
        <Link to="/">Home</Link>

        <Link to="/">Contact</Link>

        <Link to="/">Catalog</Link>

        <Link to="/">Checkout</Link>

        <Link to="/">Account</Link>

        <Link to="/">Blog</Link>

        <Link to="/">Cart</Link>
      </nav>
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
