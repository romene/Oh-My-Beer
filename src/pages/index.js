import React from "react"
import Layout from "../components/layout"

import Featured from '../components/Featured'

import styled from 'styled-components'
import HeroBeer from '../images/beerHero.jpg'
import Menu from '../styledComponents/StyledMenu'

import Logo from '../images/logo.png'
import { FaHeart, FaShoppingCart  } from "react-icons/fa"

const IndexPage = () => (
  <Layout>
    <Hero>
      <Menu>
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="menu">
          <ul>
            <li>Menu 1</li>
            <li>Menu 1</li>
            <li>Menu 1</li>
            <li>Menu 1</li>
          </ul>
        </div>
        <div className="cart">
          <FaHeart style={{ margin: "0 .3em" }} size={25} />
          <FaShoppingCart style={{ margin: "0 .3em" }} size={25} />
        </div>
      </Menu>
    </Hero>
    <Featured />
  </Layout>
)

const Hero = styled.div`
  background-image: url(${HeroBeer});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: left center;
  height: 80vh;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`

export default IndexPage
