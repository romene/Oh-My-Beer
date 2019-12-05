import React from 'react'
import {graphql, Link}from 'gatsby'
import Layout from '../components/layout'
import { StyledHero } from '../pages/index'
import StyledBeersGrid from '../styledComponents/StyledBeersGrid'
import Img from 'gatsby-image'
import VideoBeer from '../images/HeroVideo.mp4'
import {
    StyledCard, CardHeader, CardBody, CardTitle, CardTagline, CardPrice} from '../styledComponents/StyledCard'   
import StyledButton from '../styledComponents/StyledButton'
import StyledOverlay  from "../styledComponents/StyledOverlay";
import {Icon} from 'antd'


export const query = graphql`
{
  beers:allContentfulBeers{
    edges{
      node{
        contentful_id
        name
        tagline
        price
        description{
          description
        }
        imageBeer{
          fixed(width: 300  ){
            src
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}`

const beers = (props) => {
  const beers = props.data.beers.edges
  return (
    <Layout>
            <StyledHero>
                <video autoPlay loop={true}>
                    <source src={VideoBeer} type="video/mp4"></source>
                </video>
                <div className="overlay"></div>
            </StyledHero>
            
                    <StyledBeersGrid>
                   
                {beers.map(beer => {
                
                const {contentful_id, name, tagline, price} = beer.node
                const {fixed} = beer.node.imageBeer

                  return (
                  <Link to={`/beer/${beer.node.contentful_id}`}>
                      <StyledCard key={contentful_id}>
                        <CardHeader>
                          <StyledOverlay>
                            <Icon style={{color: '#fff', fontSize: 50, zIndex: 999, position: 'absolute' }}  type="zoom-in"  />
                            </StyledOverlay>
                          <Img fixed={fixed}
                            alt="Image_beer">
                            
                            </Img>
                        </CardHeader>
                        <CardBody>
                          <CardTitle>{name}</CardTitle>
                          <CardTagline>{tagline}</CardTagline>
                          <CardPrice>{price}</CardPrice>
                          <StyledButton className="snipcart-add-item"
                            data-item-id={contentful_id}
                            data-item-price={price}
                            data-item-url="/paintings/starry-night"
                            data-item-image={beer.node.imageBeer.fixed.src}
                            data-item-name={name}>Add to Cart</StyledButton>
                        </CardBody>
                      </StyledCard>
                  </Link>
                  )
                })}
              

                    </StyledBeersGrid>
                

        </Layout>
    )
}

export default beers


