import React from 'react'
import styled from "styled-components"
import LogoBeer from "../../../images/logo.png"
import {Link} from 'gatsby'


const Logo = () => {
    return (
      <LogoStyled>
        <Link to="/">
        <img src={LogoBeer} alt="Logo" />
        </Link>
      </LogoStyled>
    )
}

const LogoStyled = styled.div`
  height: 100px;
  opacity: 1;
  overflow: hidden;
  cursor: pointer;

  img {
    height: 100%;
    min-width: auto;
    z-index: 1;
  }
`

export default Logo
