import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Masonry from "react-masonry-component"
import styled from "@emotion/styled"

const Container = styled.div``

const ImageItem = styled.div`
  margin-right: 10px;
  margin-bottom: 10px;
  width: 450px;

  @media (max-width: 1023px) {
    width: 100%;
    margin-right: 0;
  }

  > div {
    width: 450px;

    @media (max-width: 1023px) {
      width: 100%;
    }
  }
`

const masonryOptions = {
  transitionDuration: 0,
}

const imagesLoadedOptions = {}

function Gallery() {
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          filter: { relativeDirectory: { eq: "slides" } }
          sort: { fields: [name], order: ASC }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  )

  const childElements = allFile.edges.map(elem => {
    const src = elem.node.childImageSharp ? elem.node.childImageSharp.fluid : ""

    return (
      <ImageItem>
        <Img
          fluid={src}
          key={elem.node.id}
          alt={elem.node.name.replace(/-/g, " ").substring(2)}
        />
      </ImageItem>
    )
  })

  return (
    <Masonry
      className=""
      elementType={Container}
      options={masonryOptions}
      disableImagesLoaded={false} // default false
      updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
      imagesLoadedOptions={imagesLoadedOptions}
    >
      {childElements}
    </Masonry>
  )
}

export default Gallery
