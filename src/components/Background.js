import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

import styled from "@emotion/styled"
import '../css/services.css'


const BackgroundSection = ({children }) => {
  const { placeholderImage } = useStaticQuery(
    graphql`
    query MyQuery {
        placeholderImage:file(relativePath: {eq: "water1.png"}) {
          childImageSharp {
            gatsbyImageData(
              
              
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )
  const image = getImage(placeholderImage)
  // Set ImageData.
  
  const bgImage = convertToBgImage(image)

  return (
    
      <BackgroundImage
        Tag="section"
        
        {...bgImage}
        preserveStackingContext
      >
        
        {children}
        
      </BackgroundImage>  
  )
}

const BackgroundHero = styled(BackgroundSection)`
  width: 100%;  
  background-position: center center fixed;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: auto;
  
`
  
export default BackgroundHero