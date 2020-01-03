import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RsvpCoctail from "../components/RsvpCoctail"
import * as emotionStyles from "../styles/emotionStyles"

const ProposalPage = () => {
  const photo = useStaticQuery(graphql`
    query {
      pagePhoto: file(relativePath: { eq: "rsvp.jpg" }) {
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
      <SEO title="RSVP" />
      <Img
        className="page__image"
        fluid={photo.pagePhoto.childImageSharp.fluid}
      />
      <emotionStyles.pageContainer>
        <RsvpCoctail />
      </emotionStyles.pageContainer>
    </Layout>
  )
}

export default ProposalPage
