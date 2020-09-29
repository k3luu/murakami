import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/Gallery"

const PhotoPage = () => (
  <Layout className="tertiary__page">
    <SEO title="Photo Gallery" />
    <h1>Photos</h1>
    <Gallery />
  </Layout>
)

export default PhotoPage
