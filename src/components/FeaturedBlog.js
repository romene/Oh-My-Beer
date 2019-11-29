import React from 'react'
import styled from 'styled-components'
import { Col, Divider} from 'antd'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const FeaturedBlog = ({data}) => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulFeaturedBlog {
          totalCount
          edges {
            node {
              id
              title
              featuredBlogImage {
                fluid {
                  ...GatsbyContentfulFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
       const FeaturedBlog = data.allContentfulFeaturedBlog.edges
      return (
        <div classname="container">
          <div className="row">
            <Divider>
              {" "}
              <h2 style={{ fontFamily: "Luckiest Guy" }}>Blog</h2>
            </Divider>

            <Col>
              <RowA>
                <Tenta>
                  {FeaturedBlog.map(item => {
                    console.log(item.node.featuredBlogImage.fluid)
                    return (
                      <div>
                        <Img fluid={item.node.featuredBlogImage.fluid} alt="" />
                        <FeaturedBlogTitle>
                          Coder's <span>Choice</span>
                        </FeaturedBlogTitle>
                      </div>
                    )
                  })}
                  
                  
                </Tenta>
              </RowA>
            </Col>
          </div>
        </div>
      )
    }}
  />
)

export default FeaturedBlog

const RowA = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;

  img:nth-last-child(3) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;
    background-color: black;
    overflow: hidden;

    img {
      object-fit: cover;
      object-position: top center;
      width: 100%;
      height: 100%;
    }
  }

  img:nth-last-child(2) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    background-color: red;
    overflow: hidden;

    img {
      object-fit: cover;
      object-position: top center;
      width: 100%;
      height: 100%;
    }
  }

  img:nth-last-child(1) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    background-color: green;
    overflow: hidden;

    img {
      object-fit: cover;
      object-position: top center;
      width: 100%;
      height: 100%;
    }
    
  }
` 

const Tenta = styled.div`
  background-color: blue;
  margin-right: auto;
  margin-left: auto;
  width: 70%;
  height: 650px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  
  
`

const FeaturedBlogTitle = styled.h1`
  font-family: "Luckiest Guy";
  font-style: italic;
  color: white;
  text-shadow: 2px 2px 2px black;
  position: relative;
  right: -7em;
  bottom: 3em;
  width: 250px;
  background-color: red;


  background-color: ${props => props.color || "red"};
`




