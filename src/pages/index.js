import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import scrollTo from "gatsby-plugin-smoothscroll"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive"

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

  > svg {
    height: 50px;
    width: 50px;
    position: absolute;
    bottom: 40px;
    left: 0;
    right: 0;
    margin: 0 auto;
    animation: bounce 3s 1s infinite;
    cursor: pointer;

    &:hover {
      animation: none;
    }
  }

  @-webkit-keyframes bounce {
    0%,
    10%,
    25%,
    40%,
    50% {
      -webkit-transform: translateY(0) rotate(0deg);
      transform: translateY(0) rotate(0deg);
    }

    20% {
      -webkit-transform: translateY(-20px) rotate(0deg);
      transform: translateY(-20px) rotate(0deg);
    }

    30% {
      -webkit-transform: translateY(-5px) rotate(0deg);
      transform: translateY(-5px) rotate(0deg);
    }
  }

  @keyframes bounce {
    0%,
    10%,
    25%,
    40%,
    50% {
      -webkit-transform: translateY(0) rotate(0deg);
      transform: translateY(0) rotate(0deg);
    }

    20% {
      -webkit-transform: translateY(-20px) rotate(0deg);
      transform: translateY(-20px) rotate(0deg);
    }

    30% {
      -webkit-transform: translateY(-5px) rotate(0deg);
      transform: translateY(-5px) rotate(0deg);
    }
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
          <div className="date">December 12, 2020</div>
          <div className="location">Sonoma, California</div>
        </Date>
        <KeyboardArrowDownIcon onClick={() => scrollTo("#home-content")} />
      </HeroImageContainer>
      <emotionStyles.Section id="home-content" className="home">
        <div className="notice">
          <div>
            <div className="notice__header">
              <NotificationsActiveIcon />
              <h3>Announcement: September 28, 2020</h3>
            </div>

            <emotionStyles.Text>Family and friends,</emotionStyles.Text>
            <emotionStyles.Text>
              We are sorry to share that we are canceling our large wedding
              reception and instead having a small, intimate celebration with a
              limited number of guests. We're sad that we can't have everyone we
              love there, but we hope you understand given the circumstances.
            </emotionStyles.Text>
            <emotionStyles.Text>
              All our love,
              <br />
              Tyler & Jenny
            </emotionStyles.Text>
          </div>
        </div>
      </emotionStyles.Section>

      <emotionStyles.Section>
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
            style={{ maxHeight: 400 }}
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

        <emotionStyles.TextPhotoSection>
          <Img
            imgStyle={{ objectFit: "contain" }}
            className="photo first"
            fluid={photo.jengaPhoto.childImageSharp.fluid}
          />

          <div>
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
          </div>
        </emotionStyles.TextPhotoSection>

        <emotionStyles.TextPhotoSection>
          <emotionStyles.Text>
            Our sisters live together! This is always a tidbit that confuses
            everyone. They think we met through our sisters, but really they met
            through us. We were nervous about it, but it's worked out better
            than we expected. They even hosted the first dinner gathering
            between the Luu's and the Murakami's (home-cooked meal included).
          </emotionStyles.Text>
          <Img
            style={{ maxHeight: 300 }}
            className="photo"
            fluid={photo.sistersPhoto.childImageSharp.fluid}
          />
        </emotionStyles.TextPhotoSection>

        <emotionStyles.Text>
          Tyler has made Jenny a "punctual" person. Although showing up to a
          movie an hour early sounds more "compulsive" than it does "punctual".
        </emotionStyles.Text>
      </emotionStyles.Section>
    </Layout>
  )
}

export default IndexPage
