import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'
import {StyledCard, CardHeader, CardBody, CardTitle, CardTagline, CardPrice} from '../styledComponents/StyledCard'
import StyledButton from '../styledComponents/StyledButton'
import StyledOverlay from '../styledComponents/StyledOverlay'
import {Icon} from 'antd'




const Card = ({beers}) => {
  const { name, tagline, contentful_id ,price} = beers
  const {fixed} = beers.imageBeer

    return (
      <Link to={`/beer/${contentful_id}`}>
        <StyledCard>
          <CardHeader>
            <Img fixed={fixed}
             alt="Image_beer" />

            <StyledOverlay>
              <Icon style={{ color: '#fff', fontSize: 50, zIndex: 999, position: 'absolute' }} type="zoom-in" />
            </StyledOverlay>
          </CardHeader>
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardTagline>{tagline}</CardTagline>
            <CardPrice>{price}</CardPrice>
            <StyledButton className="snipcart-checkout">Add to Cart</StyledButton>
          </CardBody>
        </StyledCard>
      </Link>
    )
}

export default Card





