import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled.div`
  display: flex;
  > div {
    flex-grow: 1;
  }
`

const ProposalPage = () => {
  const photo = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "DSC08409.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 6000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="The Proposal" />
      <Container>
        <div>
          <h1>How He Asked</h1>
          <p>On a mountain.</p>
        </div>
        <Img
          style={{ width: "30%", maxHeight: 600 }}
          fluid={photo.placeholderImage.childImageSharp.fluid}
        />
      </Container>
    </Layout>
  )
}

export default ProposalPage
