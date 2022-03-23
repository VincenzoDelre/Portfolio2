import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';


const Nav = styled.nav`
    display: flex;
    justify-content: center;
    padding-bottom: 0.5rem;
    @media (min-width: 768px) {
        padding-bottom: 0;
    }
`;

const Icono = styled.i`
    margin:1rem;
    color:white;
    @media (min-width: 768px) {
        margin:2rem;
    }

`

const Navegacion = () => {
    return ( 
        <Nav>
            <Link 
                className="navbar__link" 
                href="https://www.instagram.com/pizze_da_vincenzo/">
                    <Icono
                        className="fab fa-instagram fa-lg"
                        >
                    </Icono>
                    
            </Link>
            <Link 
                className="navbar__link" 
                href="https://twitter.com/delrevincenzo30">
                    <Icono 
                        className="fab fa-twitter fa-lg"
                        >
                    </Icono>
                    
            </Link>
            <Link 
                className="navbar__link" 
                href="https://www.linkedin.com/in/vincenzo-delre-107a33112/">
                    <Icono
                        className="icono fab fa-linkedin-in fa-lg"
                        >
                    </Icono>
                    
            </Link>
            
        </Nav>
     );
}
 
export default Navegacion;