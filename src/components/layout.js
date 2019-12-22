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
  &.our-story,
  &.photos {
    max-width: 950px;
    margin: 150px auto;

    @media (max-width: 1023px) {
      margin: 80px 20px;
    }
  }

  &.schedule,
  &.faq,
  &.travel,
  &.rsvp {
    display: flex;
    margin-top: 90px;

    @media (max-width: 1023px) {
      display: block;
      margin-top: 50px;
    }

    .page__image {
      width: 40%;
      min-width: 500px;
      max-width: 500px;
      height: calc(100vh - 90px);
      min-height: calc(100vh - 90px);

      @media (max-width: 1023px) {
        width: 100vw;
        min-width: unset;
        max-height: 70vh;
        height: 100%;
        min-height: unset;
      }
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

    return typeof window === "object"
      ? window.location.pathname.substring(1)
      : ""
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
