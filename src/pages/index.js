import React from "react"
import Layout from "../components/layout"
import styled from 'styled-components'

import Featured from '../components/Featured'
// import CoderChoice from "../components/CoderChoice"
import VideoBeer from '../images/HeroVideo.mp4'
import FeaturedBlog from "../components/FeaturedBlog"

const IndexPage = (props) => {
  return (
    <Layout>
      <StyledHero>
        <video autoPlay loop={true}>
          <source src={VideoBeer} type="video/mp4"></source>
        </video>
        <div className="overlay"></div>
      </StyledHero>

      <Featured />
      {/* <CoderChoice /> */}
      <FeaturedBlog />
    </Layout>
  )
}

export const StyledHero = styled.div`
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
  overflow: hidden;

  video{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    
  }

  .overlay{
background-image: linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);
    width: 100%;
    height: 100%;
    opacity: .3;
    position: absolute;
    top: 0;
    bottom: 0;
  }
`

export default IndexPage
