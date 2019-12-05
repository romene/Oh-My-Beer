import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Divider } from "antd"
import StyledBeersGrid from '../styledComponents/StyledBeersGrid'

import Card from "./Card"

const Cards = () => (
  <StaticQuery
    query={QueryBeer}
    render={data => {
      const Beers = data.Beers.edges

      return (
        <div className="container">
          <div className="row">
            <Divider>
              {" "}
              <h2 style={{ fontFamily: "Luckiest Guy" }}>Featured</h2>
            </Divider>
              <StyledBeersGrid>
            {Beers.map(beer => (
                  <Card key={beer.node.id} beers={beer.node} />
            ))}
              </StyledBeersGrid>
          </div>
        </div>
      )
    }}
  />
)

export default Cards


const QueryBeer = graphql`
  {
    Beers: allContentfulBeers(limit: 3, sort: { fields: name, order: ASC }) {
      totalCount
      edges {
        node {
          id
          contentful_id
          name
          tagline
          price
          description {
            description
          }
          imageBeer {
            fixed(width: 300) {
              src
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`



