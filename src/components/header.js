import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import Drawer from "@material-ui/core/Drawer"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"

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

  @media (max-width: 1023px) {
    display: none;
  }

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

const MobileMenu = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  @media (min-width: 1024px) {
    display: none;
  }
`

const Header = ({ siteTitle }) => {
  const [drawerOpen, setDrawer] = useState(false)

  function handleActiveTab(path) {
    const pathName =
      typeof window !== `undefined` ? window.location.pathname : ""

    return pathName === path ? "active" : ""
  }

  function showDrawer() {
    setDrawer(true)
  }

  function hideDrawer() {
    setDrawer(false)
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
        <Link to="/" className={handleActiveTab("/")}>
          Home
        </Link>
        <Link to="/our-story" className={handleActiveTab("/our-story")}>
          Our Story
        </Link>
        <Link to="/schedule" className={handleActiveTab("/schedule")}>
          Schedule
        </Link>
        <Link to="/travel" className={handleActiveTab("/travel")}>
          Travel
        </Link>
        <Link to="/faq" className={handleActiveTab("/faq")}>
          FAQ
        </Link>
        <Link to="/wedding-party" className={handleActiveTab("/wedding-party")}>
          Wedding Party
        </Link>
        <Link to="/registry" className={handleActiveTab("/registry")}>
          Registry
        </Link>
        <Link to="/rsvp" className={handleActiveTab("/rsvp")}>
          RSVP
        </Link>
        <Link to="/photos" className={handleActiveTab("/photos")}>
          Photos
        </Link>
      </Navigation>

      <MobileMenu>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={showDrawer}
          edge="start"
        >
          <MenuIcon />
        </IconButton>

        <Drawer anchor="right" open={drawerOpen} onClose={hideDrawer}>
          <Link to="/" className={handleActiveTab("/")}>
            Home
          </Link>
          <Link to="/our-story" className={handleActiveTab("/our-story")}>
            Our Story
          </Link>
          <Link to="/schedule" className={handleActiveTab("/schedule")}>
            Schedule
          </Link>
          <Link to="/travel" className={handleActiveTab("/travel")}>
            Travel
          </Link>
          <Link to="/faq" className={handleActiveTab("/faq")}>
            FAQ
          </Link>
          <Link
            to="/wedding-party"
            className={handleActiveTab("/wedding-party")}
          >
            Wedding Party
          </Link>
          <Link to="/registry" className={handleActiveTab("/registry")}>
            Registry
          </Link>
          <Link to="/rsvp" className={handleActiveTab("/rsvp")}>
            RSVP
          </Link>
          <Link to="/photos" className={handleActiveTab("/photos")}>
            Photos
          </Link>
        </Drawer>
      </MobileMenu>
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
