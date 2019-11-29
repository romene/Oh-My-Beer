import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {Row, Col} from 'antd'
import styled from 'styled-components'

            

const CoderChoice = ({ data }) => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulFeaturedBlog {
          totalCount
          edges {
            node {
              id
              title
              featuredBlogImage:image {
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
      const featuredBlogs = data.allContentfulFeaturedBlog.edges.map(item => item)
      return (
        <Row type="flex" style={{ marginBottom: "2em" }} align="center">
          <Col xs={20} md={8}>
            <StyledCoderChoice>
              <Img
                fluid={featuredBlogs[0].node.featuredBlogImage.fluid}
                alt=""
              />
              <h1>
                Coder's <span>Choice</span>
              </h1>
            </StyledCoderChoice>
          </Col>
          <Col xs={20} md={8}>
            <StyledCoderChoiceSmall>
              <Img
                fluid={featuredBlogs[1].node.featuredBlogImage.fluid}
                alt=""
              />
              <h1>
                {" "}
                No <span>Limits</span>
              </h1>
            </StyledCoderChoiceSmall>
            <StyledCoderChoiceSmall>
              <Img
                fluid={featuredBlogs[2].node.featuredBlogImage.fluid}
                alt=""
              />
              <h1>
                {" "}
                No <span>Limits</span>
              </h1>
            </StyledCoderChoiceSmall>
          </Col>
        </Row>
      )
    }}
  />
)


const StyledCoderChoice = styled.div`
  height: 500px;
  width: 100%;
  overflow: hidden;
  
  img {
    transition: transform 0.2s;
      object-fit: cover;
      width: 100%;
      height: auto;
      object-position: top;
    
    :hover {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
      cursor: pointer;
    }
}

h1 {
    font-family: "Luckiest Guy";
    font-style: italic;
    color: white;
    margin: 0 1em;
    text-shadow: 2px 2px 2px black;
    position: absolute;
    bottom: 1em;
    right: 1em;
    background-color: ${props => props.color || 'red'};
    padding: 0 .5em;
  }


`
const StyledCoderChoiceSmall = styled(StyledCoderChoice)`
  height: 250px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`



export default CoderChoice
