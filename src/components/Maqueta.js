import React, { Children } from 'react'
import styled from "@emotion/styled"
import BackgroundHero from './Background';
import { css } from "@emotion/react"


const DiagonalBox = styled.div`

  position: relative;
  transform: skewY(-5deg);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media(min-width:768px){
    
  }

  &:before{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
`;

const Content = styled.div`

  position: relative;
  transform: skewY(6deg);
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem auto;

  @media(min-width:767px){
    margin: 10rem auto;
    height: 80vh;
  }
`; 

export const Maqueta = ({children}) => {
  return (
   
    <BackgroundHero>
      <DiagonalBox>
        <Content>
          {children}
        </Content>
      </DiagonalBox>
    </BackgroundHero>
   
  )
}

export default Maqueta