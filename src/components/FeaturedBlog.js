import React from 'react'
import styled from 'styled-components'
import { Col, Divider} from 'antd'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Foto1 from '../images/beerssasd.jpg'
import Foto2 from '../images/craftbeer.jpg'
import Foto3 from '../images/elevate-beer.jpg'

const getBlog = graphql`
{
  Blog:allContentfulFeaturedBlog {
    edges {
      node {
        id
        title
        image {
          fluid(maxHeight: 600, maxWidth:600){
            src
            ...GatsbyContentfulFluid_tracedSVG
          }
          }
          }
        }
      }
    }
  

`

const FeaturedBlog = ( ) => (
  <StaticQuery
    query={getBlog}
    render={data => {
      const Blog = data.Blog.edges
      return (
        <SectionWrapper>
          {Blog.map((item, i) => {
            const {id,  title, resize} = item.node
            const {fluid} = item.node.image
          console.table("From Featured", item.node.image.fluid.src)

            return(
              <StyledImage key={id} orderImage={`image${i+1}`}>
                <img
                  src={item.node.image.fluid.src}
                  className="FotoFit"
                  alt={title}
                />
               
              </StyledImage>
            )
          })}
          
        </SectionWrapper>
      )
    }}
  />
)

 

export default FeaturedBlog

const SectionWrapper = styled.div`
  width: 850px;
  max-height: auto;
  margin: 1em auto;
  display: grid;
  align-content: center;
  justify-items: center;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "image1 image2"
    "image1 image3";

`

const StyledImage = styled.div`
grid-area: ${props => props.orderImage || 'image1'};
overflow: hidden;

        .FotoFit {
            object-fit: cover;
            object-position: center;
            width: 100%;
            height: 100%;
          } 

img {
      transition: transform 1.0s;
      overflow: hidden;
    }

    img:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }

`






  

  


