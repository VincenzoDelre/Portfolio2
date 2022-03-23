import React from 'react';
import { css } from '@emotion/react'
import Navegacion from './Nav'

import scrollTo from 'gatsby-plugin-smoothscroll';
import { StaticImage } from 'gatsby-plugin-image';




const Footer = ({title, children}) => {


    const year = new Date().getFullYear();
    return ( 
        <>
        <footer css={css`
                
                position: relative;
                padding-top: 3rem;
                z-index: 5;
                
                @media (min-width: 768px){
                    margin-top:5rem;
                }
            `}>
        <nav css={css`
            
            top: 0;
            left: 0;
            background-color: #000;
            width: 100%; 
            
                
            `}>
            
            <div
                css={css`
                    max-width: 1200px;
                    margin: 0 auto;
                    display:flex;
                    align-items: center;
                    justify-content: space-between;
                    
                    
                `}
            
            >
                
                <Navegacion />

                <p
            css={css`
                text-align:center;
                color: #fff;
                
                margin: 0;
                padding: 1rem;
            `}
        >{title}. All rights reserved {year} &copy;</p>
                
                
                <div
                    onClick={() => scrollTo('#hero', 'center')}
                    css={css`
                    max-width: 200px;
                    margin: 1rem;
                    `}
                    >
                    <StaticImage 
                        src="../images/logo.webp" 
                        alt="logo"
                        
                     />                    
                </div>
                
            </div>
        </nav>
          
        </footer>
        
        </>
    );
}
 
export default Footer;
