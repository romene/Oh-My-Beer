import React from 'react'
import styled from "styled-components"
import { FaHeart, FaShoppingCart } from "react-icons/fa"
import {Link} from 'gatsby'

const Icons = () => {
    return (
      <StyledIcons>
        <FaHeart style={{ margin: "0 .3em" }} size={25} />
        <Link className>
          <FaShoppingCart
            className="snipcart-checkout"
            style={{ margin: "0 .3em" }}
            size={25}
          />
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

