import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"
import * as emotionStyles from "../styles/emotionStyles"
import MyCarousel from "../components/Carousel/MyCarousel"

const ProposalPage = () => {
  const photo = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "first-photo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 6000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jengaPhoto: file(relativePath: { eq: "jenga.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 6000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sistersPhoto: file(relativePath: { eq: "sisters.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 6000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      howHeAsked: allFile(
        filter: { relativeDirectory: { eq: "how-he-asked" } }
        sort: { fields: [name], order: ASC }
      ) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(maxWidth: 6000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout className="tertiary__page">
      <SEO title="The Proposal" />
      <emotionStyles.Section>
        <h1>How We Met</h1>
        <emotionStyles.TextPhotoSection>
          <emotionStyles.Text>
            Where all amazing love stories begin. At work! Though we never
            worked on any projects together. We met through mutual friends and
            at social events years before anything ever happened. But if you ask
            Tyler's friends, they'd say he's always had something for Jenny.{" "}
            <br /> <br />
            Funny enough, Jenny tried to recruit Tyler (top performing Deloitte
            associate) to one of her teams and he turned her down! Imagine what
            could have or (wouldn't have) happened if he agreed.
          </emotionStyles.Text>
          <Img
            className="photo"
            fluid={photo.placeholderImage.childImageSharp.fluid}
          />
        </emotionStyles.TextPhotoSection>
      </emotionStyles.Section>

      <emotionStyles.Section>
        <h1>How He Asked</h1>
        <emotionStyles.Text>
          On a mountain (Tyler was in charge of this section).
        </emotionStyles.Text>
        <emotionStyles.Text>
          He wanted to tell the story visually:
        </emotionStyles.Text>
        <MyCarousel data={photo.howHeAsked.edges} showArrows />
      </emotionStyles.Section>

      <emotionStyles.Section>
        <h1>Fun Facts</h1>

        <Img
          style={{ maxWidth: 300 }}
          fluid={photo.jengaPhoto.childImageSharp.fluid}
        />
        <ul>
          <li>
            <emotionStyles.Text>
              Our first date was at the California Academy of Sciences. This is
              exactly how the conversation went:
            </emotionStyles.Text>
            <emotionStyles.Text>
              Jenny: Do you like sharks? (with absolutely no context)
              <br />
              Tyler: Are you talking about Shark Week at the California Academy
              of Sciences?!
            </emotionStyles.Text>
            <emotionStyles.Text>
              It's scary how much we think alike, but it goes back to even the
              idea for our first date. And that's why this Jenga piece exists -
              Tyler's friends cheering him on for Shark Week.
            </emotionStyles.Text>
          </li>
          <li>
            <emotionStyles.TextPhotoSection>
              <emotionStyles.Text>
                Our sisters live together! This is always a tidbit that confuses
                everyone. They think we met through our sisters, but really they
                met through us. We were nervous about it, but it's worked out
                better than we expected. They even hosted the first dinner
                gathering between the Luu's and the Murakami's (home-cooked meal
                included).
              </emotionStyles.Text>
              <Img
                className="photo"
                fluid={photo.sistersPhoto.childImageSharp.fluid}
              />
            </emotionStyles.TextPhotoSection>
          </li>
          <li>
            <emotionStyles.Text>
              Tyler has made Jenny a "punctual" person. Although showing up to a
              movie an hour early sounds more "compulsive" than it does
              "punctual".
            </emotionStyles.Text>
          </li>
        </ul>
      </emotionStyles.Section>
    </Layout>
  )
}

export default ProposalPage
