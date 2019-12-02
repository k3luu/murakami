import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import Image from "../components/HeroImage"
import SEO from "../components/seo"

const HeroImageContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  padding: 0;
`

const HeroContent = styled.div`
  position: absolute;
  top: 40%;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;

  color: #fff;
  font-size: 2.4rem;
`

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`

const Names = styled.div`
  font-size: 50px;
  font-weight: 300;
  padding: 50px 0;
  border-bottom: 2px solid #eee;
  margin: 0 auto;
  text-transform: uppercase;
  letter-spacing: 3px;

  div {
    width: 500px;
    padding: 5px 0;
  }
`

const Date = styled.div`
  font-size: 50px;
  font-weight: 300;
  padding: 50px 0;
  margin: 0 auto;
  border-bottom: 2px solid #eee;
  text-align: right;

  div.date {
    padding: 10px 0;
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  div.location {
    font-size: 20px;
    font-weight: 400;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroImageContainer>
      <Image />
      <HeroContent />
    </HeroImageContainer>
    <Container>
      <Names>
        <div>Tyler Murakami</div>
        <div>&</div>
        <div>Jenny Luu</div>
      </Names>
      <Date>
        <div className="location">#JennyTyesTheKnot</div>
        <div className="date">September 19, 2020</div>
        <div className="location">Sonoma County, California</div>
      </Date>
    </Container>
  </Layout>
)

export default IndexPage
