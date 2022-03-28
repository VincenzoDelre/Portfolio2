import React from "react";
import Background from "../images/water4.webp";

import styled from '@emotion/styled';

import { StaticImage } from "gatsby-plugin-image"

import scrollTo from 'gatsby-plugin-smoothscroll';
import { css } from "@emotion/react";

import Header from "./Header";
import {AwesomeButton} from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css'



const Content = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    display:flex;
    justify-content: left;
    align-items: center;
    width: 100%;
    
    
`;

const TextoImagen = styled.div`

    position: absolute;
    bottom: 7%;
    border-radius: 2rem;
    color: transparent;
    /* border: 1px solid #f00; */
    padding: 2rem 2rem;
    background: transparent;
    /* opacity: 0.6; */
    z-index: 2;
    
    width: 95%;
    
    @media (min-width: 768px) {
            width: auto;
            bottom: auto;
        }
    
    h1{
        font-size: 3.5rem;
        margin: 0 1rem;

        @media (min-width: 768px) {
            font-size: 7rem;
        }
    }
    p {
        font-size: 2rem;

        @media (min-width: 768px) {
            font-size: 3rem;
        }
    }
    
`;

const LateralDiv = styled.div`

    color: #000;   
    /* position: relative; */
    display: flex;
    flex-direction:column !important;
    justify-content: left;
    align-items: center;
    padding:3rem;
    
    font-family: 'Montserrat', sans-serif;
    @media (min-width: 768px){
        
        flex-direction: row;
    }  
    
`;

const LinkBoton = styled.button`
    -webkit-border-radius: 28;
    -moz-border-radius: 28;
    border-radius: 28px;
    border:none;
    color: #fff;
    background: transparent;
    padding: 0.2rem 0.5rem;
    text-decoration: none;
    font-size: 1.8rem;
    /* filter: blur(1px); */
    font-weight: 200;
    @media(min-width:768px){
        font-size: 3rem;
        padding:3rem 3rem;
    }


&:hover {
  /* filter: blur(0); */
  color: #fff;
  /* text-decoration: none; */
}

`;

const Boton = styled.nav`
    position: relative;
    margin: 0.1rem;
    padding: 0.2rem;
    border-radius: 10px;
    /* text-decoration: none; */

`;


const UniqueWeb = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    margin-top: auto;
    margin-bottom: auto;
    left: 0;
    right: 0;
    top:5%;
    text-align: center;
    width:15%;
    font-size: 2.3rem;
    font-family: 'Montserrat', sans-serif;
    
    
    
    
    
    @media(min-width:768px){
        top:7%;
        width:5%;
        font-size: 3.3rem;
        
    }

`
const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:99;
    height: 15vh;
    width: 80%;
    
    @media(min-width:768px){
    height: 25vh;
    width: 60vh;
    }
    `;

  const Titulo = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    margin-top: auto;

    left: 0;
    right: 0;
    bottom: 0;
    top:0;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    /* margin-bottom: 20vh; */
      @media (min-width: 768px){
          /* margin-bottom: 20vh;}   */}
      `
    


const Hero = () =>  {

    return (
      <>
      <div
        
        css={css`
        width: 100%;
        height: 120vh;
        background-size: cover !important;
        background: url(${Background});
        background-repeat: repeat-y;

        clip-path: polygon(
          0 0, /* left top */
          100% 0, /* right top */ 
          100% 96.5%, /* right bottom */
          0 100% /* left bottom */
              
        );
        @media(min-width:768px){
          clip-path: polygon(
          0 0, /* left top */
          100% 0, /* right top */ 
          100% 86%, /* right bottom */
          0 100% /* left bottom */
          
        );
        }
      `}
       
      >
          <>
            <Content id='hero'>
            <Header />

            <UniqueWeb>
            <h4>Unique webs</h4>
            </UniqueWeb>
            
            <Titulo>
            

            <Logo>
              <StaticImage 
                src="../images/logo.webp" 
                alt="logo"
                css={css`
                  
                  -webkit-animation: slide-in-bck-center 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s both;
	                        animation: slide-in-bck-center 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s both;

                          @-webkit-keyframes slide-in-bck-center {
                          0% {
                            -webkit-transform: translateZ(600px);
                                    transform: translateZ(600px);
                            opacity: 0;
                          }
                          100% {
                            -webkit-transform: translateZ(0);
                                    transform: translateZ(0);
                            opacity: 1;
                          }
                        }
                        @keyframes slide-in-bck-center {
                          0% {
                            -webkit-transform: translateZ(600px);
                                    transform: translateZ(600px);
                            opacity: 0;
                          }
                          100% {
                            -webkit-transform: translateZ(0);
                                    transform: translateZ(0);
                            opacity: 1;
                          }
                        }

                `}/>
            </Logo>
            
            <p>Front-end Developer</p> 


            
            <AwesomeButton 
            
              type="primary"
              size="large"
              css={css`
              
              --button-default-font-size:12px;
              --button-default-border-radius:22px;
              --button-horizontal-padding:10px;
              --button-primary-color:white;
              --button-primary-color-dark:#000;
              --button-primary-color-hover:#000;
              /* --button-primary-color-light:'#808008';
              --button-primary-color-hover:'black'; */
              
              
              `} 
              
                
            
              
              > 
                <LinkBoton 
                  css={css`
                    color:#666;
                    font-size: 1.5rem;
                    font-weight: 900;
                    @media(min-width:768px){
                        font-size:1.5rem;
                    }
                    &.hover{
                      color:#fff;
                    }
                  `}
                  onClick={() => scrollTo('#contacto', 'start')}>
                    CONTACT ME
                </LinkBoton>
            </AwesomeButton>
            
            </Titulo>


            <TextoImagen>
            <LateralDiv>
              <Boton>
                  <LinkBoton onClick={() => scrollTo('#servicios', 'start')}>
                      Services
                  </LinkBoton>
              </Boton>
              <Boton>
                  <LinkBoton onClick={() => scrollTo('#proyectos', 'start')}>
                      Works
                  </LinkBoton>
              </Boton>
              <Boton>
                  <LinkBoton onClick={() => scrollTo('#tools', 'start')}>
                      Tools
                  </LinkBoton>
              </Boton>


            </LateralDiv>
            </TextoImagen>
            </Content>
          </>
        
        </div>
      </>
        
    );
  };
  
 
export default Hero;