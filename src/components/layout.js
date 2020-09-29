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
  min-height: calc(100vh - 94px);

  &.secondary__page {
    display: flex;
    margin-top: 40px;

    @media (max-width: 1023px) {
      display: block;
      margin-top: 50px;
    }

    .page__image {
      position: fixed !important;
      width: 40%;
      min-width: 500px;
      max-width: 500px;
      height: calc(100vh - 40px);
      min-height: calc(100vh - 40px);

      @media (max-width: 1023px) {
        position: relative !important;
        width: 100vw;
        min-width: unset;
        max-width: unset;
        max-height: 70vh;
        height: 100%;
        min-height: unset;
      }
    }
  }

  &.tertiary__page {
    max-width: 950px;
    margin: 110px auto;

    @media (max-width: 1023px) {
      margin: 80px 20px;
    }
  }
`

const Footer = styled.footer`
  font-size: 12px;
  text-transform: uppercase;
  box-shadow: #74a3b77a 1px 1px 8px -3px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px;
  line-height: 12px;

  span {
    font-size: 10px;
  }

  &.secondary__page {
    margin-left: 500px;

    @media (max-width: 1023px) {
      margin-left: 0;
    }
  }
`

const Layout = ({ children, className, id }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main id={id} className={className}>
        {children}
      </Main>
      <Footer className={className}>
        © <span>Luu</span> 2020
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
