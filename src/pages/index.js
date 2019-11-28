import React from "react"
import Layout from "../components/layout"

import Featured from '../components/Featured'

import styled from 'styled-components'
import HeroBeer from '../images/beerHero.jpg'
const IndexPage = () => (
  <Layout>
    <Hero />
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
