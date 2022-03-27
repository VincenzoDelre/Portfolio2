import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { css } from "@emotion/react";
import "../css/services.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation"


import { StaticImage } from "gatsby-plugin-image";

import SwiperCore, { EffectCube, Pagination, Navigation } from "swiper";
import Dado2 from "./dados/Dado2";

// install Swiper modules
SwiperCore.use([EffectCube,Pagination,Navigation]);

export const Services= () => {
  

  return (

    <>
      <div css={css`
                position: relative;
                height: 60vh;
                margin: 5rem auto;
                
                @media(min-width:767px){
                  margin: 10rem auto;
                }
                
                
                `}>

    <Swiper
        
        effect={'cube'} 
        grabCursor={true} 
        cubeEffect={{
              "shadow": true,
              "slideShadows": true,
              "shadowOffset": 20,
              "shadowScale": 0.99,
              
            }} 
        pagination={{"clickable": true}}
        modules={[EffectCube, Pagination]}
        // cubeShadow:before={{"background":white}}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        id='servicios'
        css={css`
                --swiper-pagination-color:#fff;
                --swiper-navigation-color:#fff;
                --swiper-pagination-bullet-inactive-color:#333;
                --swiper-pagination-bullet-inactive-opacity: 0.6;
                
                
                width: 300px;
                height: 300px;
                position: absolute;
                left: 50%;
                top: 50%;
                margin-left: -150px;
                margin-top: -150px;
                
                
                @media (min-width: 768px) {
                    width: 600px;
                    height: 600px;
                    margin-left: -300px;
                    margin-top: -300px;
                    padding:4rem;
                }
                
              
                
            `}>
      
    {/* <SwiperSlide
      css={css`
        display:flex;
        justify-content: center;
        align-items: center;
        `}>
      <StaticImage src='../images/dado1.png' alt='dado1'
        />
    </SwiperSlide>  */}
    <SwiperSlide>
      <Dado2/>
    </SwiperSlide>
    <SwiperSlide>  
      <StaticImage src='../images/logo1.webp' alt='dado1'/>
    </SwiperSlide>
    <SwiperSlide>
      <StaticImage src='../images/seo1.webp' alt='dado1'/>
    </SwiperSlide>
    
  </Swiper>
  </div>
  </>


  );
}

export default Services