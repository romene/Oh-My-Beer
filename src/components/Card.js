import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import Img from 'gatsby-image'

import StyledButton from '../styledComponents/StyledButton'

const Card = ({beers}) => {
  const { name, tagline, contentful_id ,price} = beers
  const {fixed} = beers.imageBeer

    return (
      <Link to={`/beer/${contentful_id}`}>
        <StyledCard>
          <CardHeader>
            <Img fixed={fixed}
             alt="Image_beer" />
          </CardHeader>
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardTagline>{tagline}</CardTagline>
            <CardPrice>{price}</CardPrice>
            <StyledButton>Buy</StyledButton>
          </CardBody>
        </StyledCard>
      </Link>
    )
}

export default Card


const StyledCard = styled.div`
  max-width: 300px;
  height: 450px;
  margin: 1em;
  box-sizing: border-box;
  border: 1px solid rgba(211, 211, 211, 1);
  overflow: hidden;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "CardHeader"
    "CardBody";
  :hover {
    -webkit-box-shadow: 10px 17px 73px 5px rgba(0, 0, 0, 0.21);
    -moz-box-shadow: 10px 17px 73px 5px rgba(0, 0, 0, 0.21);
    box-shadow: 10px 17px 73px 5px rgba(0, 0, 0, 0.21);
  }
  cursor: pointer;
`

const CardHeader = styled.div`
grid-area: CardHeader;
width: 100px !important;
height: 250px !important;
overflow: hidden;
display: flex;
justify-content: center;
margin: 0 auto;
    
    img{
      object-fit: cover;
      object-position: center;
      width: auto !important;
      max-height: 250px !important;
      padding: 1em;
      margin: .5 auto !important;

  }
`

const CardBody = styled.div`
  grid-area: CardBody;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1em;
`

const CardTitle = styled.h3`
color: black;
align-self: center;
`

const CardTagline = styled.p`
  color: gray;
  align-self: center;
`

const CardPrice = styled.p`
  color: gray;
  font-size: 1.8em;
  font-weight: bold;
  align-self: center;

  ::before {
    content: "$";
    margin-right: 5px;
  }
  ::after {
    content: "NZD";
    margin-left: 5px;
    font-size: .5em;
  }
`




