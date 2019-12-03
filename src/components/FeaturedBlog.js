import React from 'react'
import styled from 'styled-components'
import { Divider } from 'antd'
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"


const getBlog = graphql`
{
  Blog:allContentfulFeaturedBlogs (
    sort:{
      fields: title,
      order: ASC
    }
  ){
    edges{
      node{
        id
        title
        textOverlay
         slug{
          slug
        }
       	imageBlog{
          fluid{
            src
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
}
  
`

const FeaturedBlog = () => (
  <StaticQuery
    query={getBlog}
    render={data => {
      const Blog = data.Blog.edges
      return (
        <div styled={{marginTop: 300}} className="container">
          <Divider>
            {" "}
            <h2 style={{ fontFamily: "Luckiest Guy" }}>Blogs</h2>
          </Divider>
          <SectionWrapper>
            {Blog.map((item, i) => {
              const { id, title, textOverlay } = item.node
              const image = item.node.imageBlog.fluid
              const {slug} = item.node.slug
              console.log(slug)
              return (
                <StyledImage key={id} orderImage={`image${i + 1}`}>
                  <div className="text--overlay">{textOverlay}</div>
                  <Link to={`/blog/${slug}`}>
                    <Img
                      imgStyle={{
                        transition: "transform 1.0s",
                        overflow: "hidden",
                        backgroundColor: "#FF7D01",
                        loading: "lazy",
                      }}
                      fluid={image}
                      className="FotoFit"
                      alt={title}
                    >
                    </Img>
                  </Link>
                  
                </StyledImage>
              
              )
            })}
          </SectionWrapper>
        </div>
      )
    }}
  />
)



export default FeaturedBlog

const SectionWrapper = styled.div`
position: relative; 
  max-width: 850px;
  max-height: auto;
  margin: 1em auto;
  display: grid;
  grid-gap: 10px;
  align-content: center;
  justify-items: center;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "image1 image2"
    "image1 image3";
    @media (max-width: 768px) {
    
      margin: 0  3em;
     grid-template-columns: 1fr;
  grid-template-rows: 1.5fr 1fr 1fr;
  grid-template-areas:
    "image1"
    "image2"
    "image3";
    overflow: hidden;
  }
`

const StyledImage = styled.div`
grid-area: ${props => props.orderImage || 'image1'};
overflow: hidden;
width: 100%;
        .FotoFit {
            object-fit: cover;
            object-position: center;
            width: 100%;
            height: 100%;
          } 
          .text--overlay{
            grid-area: ${props => props.orderImage || 'image1'};
            font-family: "Luckiest Guy";
            font-style: italic;
            color: white;
            text-shadow: 2px 2px 2px black;
            position: absolute;
            bottom: 20px;
            right: 20px;
            background-color: red;
            padding-left: 20px;
            padding-right: 20px;
            font-size: 25px;
            z-index: 999; 
          }
        
          
    img:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`


