import React from 'react'
import styled from "styled-components"
import LogoBeer from '../MenuBar/LogoBeer'
import Icons from './Icons'


const MenuBar = () => {
    return (
      <StyledMenuBar>
        <LogoBeer />
        <StyledMenuList>
          <ul>
            <li>Home</li>
            <li>IPA</li>
            <li>Larger</li>
            <li>Beers</li>
          </ul>
        </StyledMenuList>
        <Icons />
      </StyledMenuBar>
    )
}

const StyledMenuBar = styled.div`
  width: 60%;
  background-color: white;
  opacity: 1;
  min-height: 100px;
  position: absolute;
  top: 8em;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

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
