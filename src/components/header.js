import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"

const HeaderContainer = styled.header`
  font-family: "Raleway";
  position: absolute;
  top: 0;
  z-index: 1;
  background-color: #fff;
  width: 100%;
  border-bottom: 2px solid #eee;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;

  a {
    text-decoration: none;
  }
`

const SiteName = styled.div`
  font-size: 24px;
  font-weight: 300;
  color: #000;
  margin: 10px auto;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;

  a {
    color: #000;
    padding: 10px;
  }
`

const Navigation = styled.nav`
  font-size: 14px;
  text-align: center;
  padding: 20px;

  a {
    padding: 5px;
    margin: 0 20px;
    border-bottom: 2px solid transparent;
    color: #000;
    letter-spacing: 1px;
    transition: 500ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;

    &:hover,
    &.active {
      border-color: #000;
    }
  }
`

const Header = ({ siteTitle }) => {
  function handleActiveTab(path) {
    const pathName =
      typeof window !== `undefined` ? window.location.pathname : ""

    return pathName === path ? "active" : ""
  }

  return (
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
        <Link to="/how-he-asked" className={handleActiveTab("/how-he-asked")}>
          How He Asked
        </Link>
        <Link to="/photos" className={handleActiveTab("/photos")}>
          Photos
        </Link>
        <Link to="/registry" className={handleActiveTab("/registry")}>
          Registry
        </Link>
        <Link to="/faq" className={handleActiveTab("/faq")}>
          FAQ
        </Link>
        <Link to="/rsvp" className={handleActiveTab("/rsvp")}>
          RSVP
        </Link>
      </Navigation>
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
