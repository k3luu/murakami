import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import Image from "../components/HeroImage"
import SEO from "../components/seo"
import * as emotionStyles from "../styles/emotionStyles"
import MyCarousel from "../components/Carousel/MyCarousel"

const HeroImageContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  padding: 80px 0 0 0;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 3px 2px 7px #000;

  @media (max-width: 1024px) {
    padding: 0;
  }
`

const Names = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  font-size: 50px;
  font-weight: 300;
  padding: 50px 0;
  margin: 0 auto;

  div {
    padding: 5px 0;
  }
`

const Date = styled.div`
  position: absolute;
  bottom: 20%;
  right: 20px;
  font-size: 50px;
  font-weight: 300;
  margin: 0 auto;
  text-align: right;

  @media (max-width: 1024px) {
    font-size: 26px;
  }

  div.date {
    padding: 10px 0;
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  div.location {
    font-size: 20px;
    font-weight: 600;

    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }
`

const IndexPage = () => {
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
    <Layout>
      <SEO title="Home" />
      <HeroImageContainer>
        <Image />
        <Date>
          <div className="date">September 19, 2020</div>
          <div className="location">Sonoma, California</div>
        </Date>
      </HeroImageContainer>
      <emotionStyles.Section className="home">
        <emotionStyles.TextPhotoSection>
          <div>
            <h1>How We Met</h1>
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
          </div>

          <Img
            className="photo"
            fluid={photo.placeholderImage.childImageSharp.fluid}
          />
        </emotionStyles.TextPhotoSection>
      </emotionStyles.Section>

      <emotionStyles.Linebreak />

      <emotionStyles.Section>
        <h1>How He Asked</h1>
        <emotionStyles.Text className="center">
          On a mountain (Tyler was in charge of this section).
        </emotionStyles.Text>
        <emotionStyles.Text className="center">
          He wanted to tell the story visually:
        </emotionStyles.Text>
        <MyCarousel data={photo.howHeAsked.edges} showArrows />
      </emotionStyles.Section>

      <emotionStyles.Linebreak />

      <emotionStyles.Section>
        <h1>Fun Facts</h1>

        <ul>
          <li>
            <emotionStyles.TextPhotoSection>
              <div>
                <emotionStyles.Text>
                  Our first date was at the California Academy of Sciences. This
                  is exactly how the conversation went:
                </emotionStyles.Text>
                <emotionStyles.Text>
                  Jenny: Do you like sharks? (with absolutely no context)
                  <br />
                  Tyler: Are you talking about Shark Week at the California
                  Academy of Sciences?!
                </emotionStyles.Text>
                <emotionStyles.Text>
                  It's scary how much we think alike, but it goes back to even
                  the idea for our first date. And that's why this Jenga piece
                  exists - Tyler's friends cheering him on for Shark Week.
                </emotionStyles.Text>
              </div>

              <Img
                imgStyle={{ objectFit: "contain" }}
                className="photo"
                fluid={photo.jengaPhoto.childImageSharp.fluid}
              />
            </emotionStyles.TextPhotoSection>
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

export default IndexPage
