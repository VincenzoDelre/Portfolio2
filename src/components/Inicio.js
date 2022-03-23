import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from '@emotion/styled';
import { css } from '@emotion/react'




const TextoInicio = styled.div`
    padding-top: 4rem;
    
    width: 95%;
    margin: 0 auto;
    text-align: center;

    @media (min-width:768px) {
        display: grid;
        grid-template-columns: repeat(2,1fr);
        column-gap: 4rem;
        text-align: start;
        padding: 4rem 3rem 0rem 3rem;
    }

    p{
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 2;
    }
`;



const ContenidoInicio = () => {

    const informacion = useStaticQuery(graphql`
    query{
        allDatoCmsPagina(filter: {slug: {eq: "inicio"}}) {
          nodes {
            titulo
            contenido
            imagen {
              gatsbyImageData
                  (layout: CONSTRAINED)
              
            }
          }
        }
      }
        `);

     
    const { contenido, imagen } = informacion.allDatoCmsPagina.nodes[0];
    const image = getImage(imagen);
    //console.log(imagen.fluid)

    
    
    

    return ( 
        <div css={css`
            
            width: 90%;
            text-align: center;

            @media(min-width:768px){
            margin-bottom: 10rem;
            margin:5rem;
            }
            `}>
            
            <TextoInicio>
                <div css={css`
                    display:flex;                    
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                    
                    width: 70%;
                    margin: auto;
                    filter: grayscale(0.7);
                `}>
                    <GatsbyImage 
                        image={image} 
                        alt='alt per favor'
                        css={css`
                            /* filter:opacity(0.2); */
                            border-radius: 90%;
                        `}/>
                </div>

                
                    
                    

                <p css={css`
                    text-align:center;
                    color: #fff;
                    `}>{contenido}
                </p>
            
            </TextoInicio>



        </div>
     );
}
 
export default ContenidoInicio;