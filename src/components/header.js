import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"

const HeaderContainer = styled.header`
  font-family: "Raleway";
  position: absolute;
  z-index: 1;
  background-color: #fff;
  width: 100%;
  border-bottom: 2px solid #eee;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;

  a {
    text-decoration: none;
    color: #000;
  }
`

const SiteName = styled.div`
  font-size: 24px;
  font-weight: 300;
  color: #000;
  margin: 10px auto;
  text-align: center;
  text-transform: uppercase;

  a {
    color: #000;
    padding: 10px;
  }
`

const Navigation = styled.nav`
  font-size: 14px;
  text-align: center;
  padding: 10px;

  a {
    padding: 5px;
    margin: 0 10px;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <SiteName>
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </SiteName>
    <Navigation>
      <Link to="/the-proposal">How He Asked</Link>
      <Link to="/photos">Photos</Link>
      <Link to="/registry">Registry</Link>
      <Link to="/faq">FAQ</Link>
      <Link to="/rsvp">RSVP</Link>
    </Navigation>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
