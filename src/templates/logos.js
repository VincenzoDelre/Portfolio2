import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { css } from '@emotion/react';

import styled from '@emotion/styled';
import { Layout } from '../components/Layout';

export const query = graphql`

query ($slug: String!) {
    allDatoCmsLogo(filter: {slug: {eq: $slug}}) {
      nodes {
        titulo
        contenido
        link
        imagen {
          gatsbyImageData(height: 450)
        }
      }
    }
  }
  
`;


const Contenido = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      vertical-align: center;
    `;

const H2 = styled.h2`
font-size: 1.5rem;
margin: 1.5rem auto;  
text-align: center;
color: #000000;
@media (min-width: 768px) {
  font-size: 2.5rem;
  margin: 2.5rem auto;    
}  
`
const LogoTemplate = ({data: { allDatoCmsLogo: {nodes}}}) => {
    
    const { titulo, contenido, imagen, link } = nodes[0];
    const image = getImage(imagen);
    return ( 

      <div
      css={css`
          display: flex;
          min-height: 100vh;
          flex-direction: column;
          justify-content: space-between;

          `}>
      <Layout>
      <Contenido>
            <main
                css={css`
                    margin: 0 auto;
                    max-width: 1200px;
                    width: 95%;
                `}>
                <h1
                    css={css`
                      text-align:center;
                      margin-top: 4rem;
                      font-size: 3rem;
                      @media(min-width:768px){
                    
                        font-size: 5rem;
                      }
                        
                `}>{titulo}</h1>


              <H2>{link}</H2>  
              <div css={css`
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                gap: 6rem;
                @media(min-width:768px){
                  flex-direction: row;
                }
                
              `}>
                
                <GatsbyImage 
                  image={image} 
                  alt='logo' 
                  objectFit='cover'
                  />
                <p css={css`
                  text-align:center;
                  font-size: 1.4rem;
                  color: black;
                  @media(min-width:768px){
                    width: 50%;
                    font-size: 2rem;
                    
                  
                }
                `}>{contenido}</p>
              </div>
            </main>
      </Contenido>
      </Layout>
      </div>
     );
}
 
export default LogoTemplate;