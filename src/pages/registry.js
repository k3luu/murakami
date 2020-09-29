import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import * as emotionStyles from "../styles/emotionStyles"

const SubList = styled.ul`
  li {
    border-bottom: 0;
  }
`

const RegistryPage = () => {
  const photo = useStaticQuery(graphql`
    query {
      pagePhoto: file(relativePath: { eq: "registry.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 6000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout className="secondary__page">
      <SEO title="Registry" />
      <Img
        className="page__image"
        fluid={photo.pagePhoto.childImageSharp.fluid}
      />
      <emotionStyles.pageContainer>
        <h1>Registry</h1>
        <SubList>
          <li>
            <a
              href="https://www.zola.com/registry/tylerandjenny1212"
              target="_blank"
              rel="noreferrer noopener"
            >
              Zola Registry
            </a>
          </li>
          <li>
            <a
              href="https://www.crateandbarrel.com/gift-registry/jenny-luu-and-tyler-murakami/r6061972"
              target="_blank"
              rel="noreferrer noopener"
            >
              Crate & Barrel
            </a>
          </li>
        </SubList>
      </emotionStyles.pageContainer>
    </Layout>
  )
}

export default RegistryPage
