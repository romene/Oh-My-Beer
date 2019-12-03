import React from 'react'
import styled from "styled-components"
import { FaHeart, FaShoppingCart } from "react-icons/fa"
import {Link} from 'gatsby'
import { Badge, Icon } from 'antd';

const Icons = () => {
    return (
      <StyledIcons>
        <Link style={{margin: '0 1em'}} to="">
         
            <Icon style={{ fontSize: 30 }} type="heart" />
          
        </Link>
        <Link className="snipcart-checkout" to="">
          
            <Icon style={{ fontSize: 30 }} type="shopping-cart" />
          
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

