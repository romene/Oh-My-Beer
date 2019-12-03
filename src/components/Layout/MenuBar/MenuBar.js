import React from 'react'
import {Link}from 'gatsby'
import styled from "styled-components"
import LogoBeer from '../MenuBar/LogoBeer'
import Icons from './Icons'


const MenuBar = () => {
    return (
      <StyledMenuBar>
        <LogoBeer />
        <StyledMenuList>
          <ul>
            <li><Link to='/'> Home </Link></li>
            <li>Beers</li>
            <li><Link to='/blog'> Blog </Link></li>
          </ul>
        </StyledMenuList>
        <Icons />
      </StyledMenuBar>
    )
}

const StyledMenuBar = styled.div`
  width: 100%;
  background-color: white;
  opacity: 1;
  min-height: 100px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 999;

  @media (max-width: 768px) {
  display: none;
  }
`

const StyledMenuList = styled.div`
  min-width: auto;
  ul {

    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 0.5em;
    list-style: none;
    justify-content: space-evenly;
    align-items: center;
  }

  li {
    margin: 0 1em;
    font-weight: bold;
    font-family: "Luckiest Guy";
    font-size: 1.5em;
    :hover {
      color: #d6bbaf;
      cursor: pointer;
    }
  }
`

export default MenuBar
