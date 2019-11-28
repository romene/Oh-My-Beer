import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Card, Divider, Col } from "antd"
const { Meta } = Card

const Cards = ({ data }) => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulProduct {
          totalCount
          edges {
            node {
              contentfulid
              title
              description
              createdAt
              productImage {
                fixed(width: 300) {
                  ...GatsbyContentfulFixed_tracedSVG
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const products = data.allContentfulProduct.edges

      return (
        <div className="container">
          <div className="row">
            <Divider>
              {" "}
              <h2 style={{ fontFamily: "Luckiest Guy" }}>Featured</h2>
            </Divider>
            {products.map(beer => {
              const { contentfulid, title, description, createdAt } = beer.node
              const productImage = beer.node.productImage.fixed
              console.log(Image)
              return (
                <Col key={contentfulid} xs={24} md={8}>
                  <Card
                    hoverable
                    style={{ maxWidth: 300, margin: "1em auto" }}
                    cover={<Img alt="example" fixed={productImage} />}
                  >
                    <Meta title={title} description={description} />
                  </Card>
                </Col>
              )
            })}
          </div>
        </div>
      )
    }}
  />
)

export default Cards
