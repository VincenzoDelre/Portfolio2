import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
// import { css } from '@emotion/react';

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
            <a 
                className="navbar__link" 
                href="https://www.instagram.com/mi_cro_mon_di">
                    <Icono
                        className="fab fa-instagram fa-lg"
                        >
                    </Icono>
                    
            </a>
            <a 
                className="navbar__link" 
                href="#">
                    <Icono 
                        className="fab fa-twitter fa-lg"
                        >
                    </Icono>
                    
            </a>
            <a 
                className="navbar__link" 
                href="#">
                    <Icono
                        className="icono fab fa-linkedin-in fa-lg"
                        >
                    </Icono>
                    
            </a>
            
        </Nav>
     );
}
 
export default Navegacion;