import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/Gallery"

const PhotoPage = () => (
  <Layout>
    <SEO title="Photo Gallery" />
    <h1>Photos</h1>
    <Gallery />
  </Layout>
)

export default PhotoPage
