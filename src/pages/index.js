import React from "react"
import Layout from "../components/layout"

import Featured from '../components/Featured'
import CoderChoice from "../components/CoderChoice"

import styled from 'styled-components'
import HeroBeer from '../images/beerHero.jpg'
import VideoBeer from '../images/Beer - 26845 (1).mp4'
import Menu from '../styledComponents/StyledMenu'

import Logo from '../images/logo.png'
import { FaHeart, FaShoppingCart  } from "react-icons/fa"


const IndexPage = () => (
  <Layout>
    <Hero>
      <video autoplay="true" loop="true">
        <source src={VideoBeer} type="video/mp4"></source>
      </video>
      <div className="overlay"></div>
      <Menu>
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="menu">
          <ul>
            <li>Home</li>
            <li>IPA</li>
            <li>Larger</li>
            <li>Beers</li>
          </ul>
        </div>
        <div className="cart">
          <FaHeart style={{ margin: "0 .3em" }} size={25} />
          <FaShoppingCart style={{ margin: "0 .3em" }} size={25} />
        </div>
      </Menu>
    </Hero>
    <Featured />
    <CoderChoice />
  </Layout>
)

const Hero = styled.div`
  /* background-image: url(${HeroBeer}); */
  background-color: black;
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

  video{
    width: 100%;
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
