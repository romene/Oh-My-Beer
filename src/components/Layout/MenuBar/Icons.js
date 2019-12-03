import React from 'react'
import styled from "styled-components"
import { FaHeart, FaShoppingCart } from "react-icons/fa"
import {Link} from 'gatsby'
import { Badge, Icon } from 'antd';

const Icons = () => {
    return (
      <StyledIcons>
        <Link style={{margin: '0 1em'}} to="">
          <Badge count={0} showZero>
            <Icon style={{ fontSize: 30 }} type="heart" />
          </Badge>
        </Link>
        <Link className="snipcart-checkout" to="">
          <Badge count={0} showZero>
            <Icon style={{ fontSize: 30 }} type="shopping-cart" />
          </Badge>
        </Link>
      </StyledIcons>
    )
}

const StyledIcons = styled.div`
  min-width: 100px;
  display: flex;
  flex-direction: row;
  margin: 0 1em;
  padding: 0 1em;
  align-items: center;
`

export default Icons

