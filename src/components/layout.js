/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "typeface-sacramento"
import "typeface-raleway"
import styled from "@emotion/styled"

import Header from "./header"
import "./layout.css"

const Main = styled.main`
  &:not(.home) {
    max-width: 950px;
    margin: 150px auto;

    @media (max-width: 1023px) {
      margin: 80px 20px;
    }
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  function handleClassName() {
    if (typeof window === "object" && window.location.pathname === "/") {
      return "home"
    }

    return ""
  }

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main className={handleClassName()}>{children}</Main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
