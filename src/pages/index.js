import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import Image from "../components/HeroImage"
import SEO from "../components/seo"

const HeroImageContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  padding: 0;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 3px 2px 7px #000;
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
  bottom: 50px;
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
    font-weight: 400;

    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroImageContainer>
      <Image />
      {/* <Names>
        <div>Tyler Murakami</div>
        <div>&</div>
        <div>Jenny Luu</div>
      </Names> */}
      <Date>
        <div className="date">September 19, 2020</div>
        <div className="location">Sonoma County, California</div>
      </Date>
    </HeroImageContainer>
  </Layout>
)

export default IndexPage
