import React from 'react'
import { css } from "@emotion/react"
import styled from "@emotion/styled"

import useProyecto from '../hooks/useProyecto'
import useHerramientas from '../hooks/useHerramientas'
import useLogo from '../hooks/useLogo'

import { Layout } from '../components/Layout'
import Maqueta from '../components/Maqueta'
import ContenidoInicio from '../components/Inicio'
import { Services } from '../components/Services'

import ProyectoPreview from '../components/ProyectoPreview'
import LogoPreview from '../components/LogoPreview'
import HerramientaPreview from '../components/HerramientaPreview'

import "../css/services.css"
import Contacto from '../components/Contacto'
import Hero from '../components/Hero'


const ListadoProyectos = styled.ul`

  width: 95%;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns:repeat(3,1fr);
    grid-template-rows: 1fr;
    gap: 4rem;
    align-items: flex-start;
  }

`;

const H2 = styled.h2`

  font-size: 3.5rem;
  margin: 3.5rem auto;  
  text-align: center;

  @media (min-width: 768px) {
    font-size: 5rem;
    margin: 5rem auto;    
  }          
`;

const ListadoHerramientas = styled.ul`
  
  height: 100%;
  width: 95%;
  margin: auto;
  display: grid;
  grid-template-columns:repeat(3,1fr);
  margin: 8rem;
  gap: 0.5rem;
  align-items: flex-start;

  @media (min-width: 768px) {
    max-width: 1200px;
    display: grid;
    grid-template-columns:repeat(4,1fr);
    
    gap: 3rem;
    align-items: flex-start;
  }
`;





export const Index = () => {

  const proyectos = useProyecto();
  const logos = useLogo();
  const herramientas = useHerramientas();
  return (
    <>

      <Hero />
    
      <Layout>

      <H2 
        css={css`
          @media(min-width:768px){
          margin-top:5vh;}
          `}>
            Hi! I'm Vin
      </H2>

      <Maqueta>
        <ContenidoInicio/>
      </Maqueta>

      {/* SERVICIOS */}
      <H2>
            Services
      </H2> 
      <Services/>
      
      {/* PROYECTOS */}       
      <H2>
        Proyects
      </H2>

      <Maqueta>
        <ListadoProyectos 
        id='proyectos'
        css={css`
          @media (max-width:768px){
            margin-top:3rem;
          }
        `}>

        { proyectos.map( proyecto =>(
          <ProyectoPreview
        
            key={ proyecto.id }
            proyecto={proyecto}

          />
        )) }
        </ListadoProyectos> 
      </Maqueta>

      {/* LOGOS */}
      <H2>
            Logos
      </H2>
      <Maqueta>
      <ListadoProyectos 
      
      id='logos'
      css={css`
        width: 95%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction:column;
        
        @media(min-width:767px){
          gap:25rem;
          flex-direction: row;
        }
      `}>
      
        { logos.map( logo =>(
          <LogoPreview
            key={ logo.id }
            logo={logo}
          />
        ))}
      </ListadoProyectos> 

      </Maqueta>
      

      <H2>  
          Tools
      </H2>  

      <Maqueta>

      <ListadoHerramientas
       
      id='tools'
      >
         
           { herramientas.map( herramienta =>(
             <HerramientaPreview
                key={ herramienta.slug }
                herramienta={herramienta}
             />
             ))}
      </ListadoHerramientas> 
      </Maqueta>
      
      {/* CONTACTO */}
      <H2>Contact</H2>

      <Maqueta>
        <Contacto/>
      </Maqueta>
      
      

      </Layout>
    </>
    
  )
}

export default Index
