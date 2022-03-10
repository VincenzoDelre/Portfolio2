import React from 'react'
import { css } from "@emotion/react"
import { StaticImage } from "gatsby-plugin-image"


export const Dado2 = () => {
  return (
    <div 
      css={css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      
    `}>

      
      
      <StaticImage src="../../images/icon.png" alt="testimage"/>
  
  
    </div>
  )
}
export default Dado2