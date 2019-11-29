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

const HeroDetail = styled.div`
  font-family: "Sacramento";
  margin: 20px 0;
`

const HeroDate = styled.div`
  font-size: 14px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Save the date!" />
    <HeroImageContainer>
      <Image />
      <HeroContent>
        {/* <HeroDetail>Save the Date</HeroDetail>
        <HeroDetail>09.19.2020</HeroDetail>
        <HeroDate>More details to come!</HeroDate> */}
      </HeroContent>
    </HeroImageContainer>
  </Layout>
)

export default IndexPage
