import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SwipeableViews from "react-swipeable-views"
import { withStyles } from "@material-ui/core/styles"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RsvpCoctail from "../components/RsvpCoctail"
import RsvpWedding from "../components/RsvpWedding"
import * as emotionStyles from "../styles/emotionStyles"

const StyledTabs = withStyles({
  indicator: {
    background: "#74a3b7",
  },
})(Tabs)

const RsvpPage = () => {
  const [currIndex, setCurrIndex] = useState(0)

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

  function handleTabChange(event, newValue) {
    setCurrIndex(newValue)
  }

  function handleChangeIndex(index) {
    setCurrIndex(index)
  }

  return (
    <Layout className="rsvp">
      <SEO title="RSVP" />
      <Img
        className="page__image"
        fluid={photo.pagePhoto.childImageSharp.fluid}
      />
      <emotionStyles.pageContainer className="rsvp">
        <StyledTabs
          onChange={handleTabChange}
          value={currIndex}
          variant="fullWidth"
        >
          <Tab label="Cocktail Reception" value={0}></Tab>
          <Tab label="Wedding Ceremony & Reception" value={1}></Tab>
        </StyledTabs>

        <SwipeableViews index={currIndex} onChangeIndex={handleChangeIndex}>
          <RsvpCoctail />
          <RsvpWedding />
        </SwipeableViews>
      </emotionStyles.pageContainer>
    </Layout>
  )
}

export default RsvpPage
