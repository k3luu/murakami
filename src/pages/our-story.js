import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"
import * as emotionStyles from "../styles/emotionStyles"

const Container = styled.div`
  display: flex;

  > div {
    flex-grow: 1;
    max-width: 50%;

    &:first-child {
      padding-right: 20px;
    }
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
          <emotionStyles.Section>
            <emotionStyles.Title>How We Met</emotionStyles.Title>
            <emotionStyles.Text>
              Where all amazing love stories begin. At work! Though we never
              worked on any projects together. We met through mutual friends and
              at social events years before anything ever happened. But if you
              ask Tyler's friends, they'd say he's always had something for
              Jenny. <br /> <br />
              Funny enough, Jenny tried to recruit Tyler (top performing
              Deloitte associate) to one of her teams and he turned her down!
              Imagine what could have or (wouldn't have) happened if he agreed.
            </emotionStyles.Text>
          </emotionStyles.Section>
          <emotionStyles.Section>
            <emotionStyles.Title>How He Asked</emotionStyles.Title>
            <emotionStyles.Text>On a mountain.</emotionStyles.Text>
          </emotionStyles.Section>
          <emotionStyles.Section>
            <emotionStyles.Title>Fun Facts</emotionStyles.Title>
            <emotionStyles.Text>
              - Our first date was at the California Academy of Sciences. This
              is exactly how the conversation went:
              <br />
              <br />
              Jenny: Do you like sharks? (with absolutely no context)
              <br />
              Tyler: Are you talking about Shark Week at the California Academy
              of Sciences?!
              <br />
              <br />
              It's scary how much we think alike, but it goes back to even the
              idea for our first date. And that's why this Jenga piece exists -
              Tyler's friends cheering him on for Shark Week.
              <br />
              <br />
              - Our sisters live together! This is always a tidbit that confuses
              everyone. They think we met through our sisters, but really they
              met through us. We were nervous about it, but it's worked out
              better than we expected. They even hosted the first dinner
              gathering between the Luu's and the Murakami's (home-cooked meal
              included).
              <br />
              <br />- Tyler has made Jenny a "punctual" person. Although showing
              up to a movie an hour early sounds more "compulsive" than it does
              "punctual".
            </emotionStyles.Text>
          </emotionStyles.Section>
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
