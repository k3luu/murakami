import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import Drawer from "@material-ui/core/Drawer"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import { makeStyles } from "@material-ui/core/styles"

import * as palette from "../styles/palette"

const useStyles = makeStyles({
  button: {
    position: "absolute",
    right: 0,
    padding: "20px 10px",
  },
  paper: {
    background: palette.outerSpace,
  },
})

const HeaderContainer = styled.header`
  font-family: "Raleway";
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: #fff;
  width: 100%;
  box-shadow: #74a3b77a 1px 1px 8px -3px;
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
    font-weight: 300;
    padding: 10px;

    &:hover {
      text-decoration: none;
    }
  }
`

const Navigation = styled.nav`
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  padding: 15px;

  @media (max-width: 1023px) {
    display: none;
  }

  a {
    padding: 5px;
    margin: 0 15px;
    border-bottom: 2px solid transparent;
    color: ${palette.rollingStone};
    letter-spacing: 1px;
    transition: 500ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;

    &:hover,
    &.active {
      border-color: ${palette.primaryColor};
      text-decoration: none;
    }
  }
`

const MobileMenu = styled.div`
  position: absolute;
  top: 0;
  left: 20px;

  @media (min-width: 1024px) {
    display: none;
  }
`

const MobileNav = styled.div`
  width: auto;
  padding: 10px;

  > a {
    color: ${palette.white};
    width: auto;
    display: block;
    padding: 10px 50px 10px 10px;
    margin: 5px 30px 5px 0;
    border-left: 3px solid transparent;
    font-size: 12px;
    border-radius: 0 6px 6px 0;

    &:hover,
    &.active {
      color: ${palette.primaryColor};
      border-color: ${palette.primaryColor};
      font-size: 14px;
      font-weight: bold;
      background: #000;
      text-decoration: none;
    }
  }
`

const MobileNavTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${palette.white};
  margin: 5px 40px 20px 5px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-bottom: 1px solid ${palette.white};
  padding: 10px;
`

const Header = ({ siteTitle }) => {
  const [drawerOpen, setDrawer] = useState(false)
  const classes = useStyles()

  const isClient = typeof window === "object"

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (windowSize.width < 1024) {
      setDrawer(false)
    }
  }, [windowSize])

  function handleActiveTab(path) {
    const pathName = isClient ? window.location.pathname : ""

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
        <Link to="/">{siteTitle}</Link>
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
        {/* <Link to="/wedding-party" className={handleActiveTab("/wedding-party")}>
          Wedding Party
        </Link>
        <Link to="/registry" className={handleActiveTab("/registry")}>
          Registry
        </Link> */}
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

        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={hideDrawer}
          classes={{ paper: classes.paper }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={hideDrawer}
            edge="start"
            className={classes.button}
          >
            <ChevronLeftIcon style={{ color: palette.white }} />
          </IconButton>

          <MobileNav>
            <MobileNavTitle>{siteTitle}</MobileNavTitle>

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
            {/* <Link
              to="/wedding-party"
              className={handleActiveTab("/wedding-party")}
            >
              Wedding Party
          </Link>
            <Link to="/registry" className={handleActiveTab("/registry")}>
              Registry
          </Link> */}
            <Link to="/rsvp" className={handleActiveTab("/rsvp")}>
              RSVP
            </Link>
            <Link to="/photos" className={handleActiveTab("/photos")}>
              Photos
            </Link>
          </MobileNav>
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
