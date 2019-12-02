import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Masonry from "react-masonry-component"
import styled from "@emotion/styled"

const ImageItem = styled.li`
  list-style: none;
  max-height: 300px;
  width: 30%;
  height: 100%;
`

const masonryOptions = {
  transitionDuration: 0,
}

const imagesLoadedOptions = {}

function Gallery() {
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(filter: { relativeDirectory: { eq: "slides" } }) {
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
          style={{
            height: "100%",
            width: "100%",
            maxWidth: 300,
            maxHeight: 300,
          }}
        />
      </ImageItem>
    )
  })

  return (
    <Masonry
      className=""
      elementType="ul"
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
