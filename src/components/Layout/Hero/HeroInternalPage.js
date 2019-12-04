import React from 'react'
import { graphql, StaticQuery } from "gatsby";
import styled from 'styled-components'
import BeerHero from '../../../images/beerHero.jpg'
import Logo from '../../../images/logo.png'
import Img from 'gatsby-image'


export const queryBeerHero = graphql`
{
  allFile (filter: {relativePath: {eq: "beerHero.jpg"}}) {
    edges{
      node{
        childImageSharp{
          fluid{
            src
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
}
`

const HeroInternalPage = () => (
  <StaticQuery
  query={queryBeerHero}
  render={data => {
    console.log(data.allFile.edges[0].node.childImageSharp)
    const {fluid} = data.allFile.edges[0].node.childImageSharp
    return(
      <React.Fragment>
        <StyledHeroInternalPage height="70vh">
          <Img style={{width: '100%', height: '100%'}} imgStyle={{width: '100%', height: '100%'}} fluid={fluid} alt="Hero"/>
        </StyledHeroInternalPage>
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "5em",
            }}
            className="row">

          </div>
        </div>
      </React.Fragment>
    )
  }}
   />
)

export default HeroInternalPage

export const StyledHeroInternalPage = styled.div`
  top: 0;
  opacity: 1;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: bottom;
  height: ${props => props.height || "50vh" };
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledLogo = styled.div`
  max-width: 200px;
  height: 200px;
  overflow: hidden;
  img {
    width: inherit;
    height: inherit;  
  }
`