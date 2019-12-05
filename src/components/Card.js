import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { StyledCard, CardHeader, CardBody, CardTitle, CardTagline, CardPrice } from '../styledComponents/StyledCard'
import StyledButton from '../styledComponents/StyledButton'
import StyledOverlay from '../styledComponents/StyledOverlay'
import { Icon } from 'antd'




const Card = ({ beers }) => {
  const { name, tagline, contentful_id, price } = beers
  const { fixed } = beers.imageBeer
  const thumbmail = beers.imageBeer.fixed.src

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
          <StyledButton className="snipcart-add-item"
            data-item-id={contentful_id}
            data-item-price={price}
            data-item-url="/paintings/starry-night"
            data-item-image={thumbmail}
            data-item-name={name}>Add to Cart
                            </StyledButton>
        </CardBody>
      </StyledCard>
    </Link>
  )
}

export default Card





