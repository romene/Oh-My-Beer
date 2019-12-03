import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { StyledHeroInternalPage} from '../components/Layout/Hero/HeroInternalPage'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {Row, Col } from 'antd'
import MenuBar from '../components/Layout/MenuBar/MenuBar'

import StyledButton from '../styledComponents/StyledButton'

export const query = graphql`
query ($contentful_id: String!){
  contentfulBeers(contentful_id: {eq: $contentful_id}){
    name
    price
    contentful_id
    description{
        description
    }
    imageBeer{
        fluid(maxWidth: 500){
            src
            ...GatsbyContentfulFluid_tracedSVG
        }
    }
  }
}
`


const BeerItem = (props) => {
    console.log("Prrrrrrr", props.data.contentfulBeers.imageBeer.fluid)
    const {name, price} = props.data.contentfulBeers
    const {description} = props.data.contentfulBeers.description
    const {fluid} = props.data.contentfulBeers.imageBeer
    return (
        <Layout>
            <StyledHeroInternalPage height="30vh">
                <MenuBar/>
            </StyledHeroInternalPage>
            <div className="container">
                <Row justify="center">
                    <Col xs={24} >
                        <StyledBeerItemWrapper>
                            <BeerItemImage>
                                <Img fluid={fluid} alt={name} />
                            </BeerItemImage>
                            <StyledBeerDesc>
                                <StyledBeerDescTitle>{name}</StyledBeerDescTitle>
                                <StyledBeerDescDesc>{description}</StyledBeerDescDesc>
                                <StyledBeerDescDescPrice>{`$ ${price}`}</StyledBeerDescDescPrice>
                                <StyledButton grid_Area="Beer_Desc--Button"> Add To Cart</StyledButton>
                            </StyledBeerDesc>
                        </StyledBeerItemWrapper>
                    </Col>
                </Row>
            </div>
        </Layout>
    )
}

export default BeerItem

const StyledBeerItemWrapper = styled.div`
max-width: 1000px;
min-height: 300px;
margin: 1em auto ;
border: 2px solid #F5F5F5;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr;
grid-template-areas: 
"BeerImage BeerDesc";

@media(max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr .5fr;
    grid-template-areas: 
"BeerImage"
"BeerDesc";
  }
`

const StyledBeerDesc = styled.div`
grid-area: BeerDesc;
width: 100%;
display: grid;
justify-items: center;
grid-template-rows: repeat(auto);
grid-template-areas:
"Beer_Desc--Title"
"Beer_Desc--Desc"
"Beer_Desc--Price"
"Beer_Desc--Button";

`
const StyledBeerDescTitle = styled.h1`
        grid-area: Beer_Desc--Title;
        align-self: center;
        color: green;
`
const StyledBeerDescDesc = styled.p`
        grid-area: Beer_Desc--Desc;
                padding: 0 3em;

`
const StyledBeerDescDescPrice = styled.span`
        grid-area: Beer_Desc--Price;
        padding: 0 3em;
        font-weight: bold;
        font-size: 2em;
        color: green;

`



const BeerItemImage = styled.div`
max-height: 500px;
width: 100px;
grid-area: BeerImage;
place-self: center;

    img{
        
        width: auto !important;
        max-height: 500px !important;
        object-fit: cover;
        object-position: center;
        padding: .5em 0 ;
        margin: .5 auto;
    }
`
