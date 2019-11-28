import React from 'react'
import styled from 'styled-components'
import VideoBeer from "../images/HeroVideo.mp4"


const Hero = () => {
    return (
      <StyledHero>
        <video autoplay="true" loop="true">
          <source src={VideoBeer} type="video/mp4"></source>
        </video>
        <div className="overlay"></div>
      </StyledHero>
    )
}


const StyledHero = styled.div`
  position: relative;
  top: 0;
  opacity: 1;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: left center;
  height: 80vh;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  z-index: 999;
  overflow: hidden;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: cover;
  }

  .overlay {
    background-image: linear-gradient(
      to right,
      #ff8177 0%,
      #ff867a 0%,
      #ff8c7f 21%,
      #f99185 52%,
      #cf556c 78%,
      #b12a5b 100%
    );
    width: 100%;
    height: 100%;
    opacity: 0.3;
    position: absolute;
    top: 0;
    bottom: 0;
  }
`

export default Hero

