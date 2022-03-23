import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react'
import Navegacion from './nav';

const DivHeader = styled.div`
        position:fixed;
        background-color:transparent;
        display:flex;
        flex-direction:column;
        justify-content:end;
        align-items:center;
        

`

const Header = () => {
   
    return ( 
        <header
            css={css`
                padding: 1rem;
                position: relative;
                
                padding: 2rem;
                z-index: 5;
                @media (min-width: 768px){
                    padding:5rem}
            `}
        >
            <DivHeader  css={css`

                bottom: 0;
                left: 0;
                background-color: transparent;
                
                `}
                > 

                <div
                    css={css`
                        max-width: 1200px;
                        margin: 0;
                        display:flex;
                        align-items: center;
                        justify-content: space-between;
                        @media (min-width: 768px){
                            margin: 2rem;}
                    `}

                > 
                    <Navegacion />

                </div>
            </DivHeader>
        </header>
    );
}
 
export default Header;