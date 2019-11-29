import React from 'react'
import styled from 'styled-components'


const Footer = () => {
    return (
        <StyledFooter>
            <StyledFooterBox/>
            <StyledFooterBox/>
            <StyledFooterBox/>

        </StyledFooter>
    )
}

export default Footer

const StyledFooter = styled.div`
  background-color: #f4e7d2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 300px;
`

const StyledFooterBox = styled.div`
width: 25%;
height: 90%;
background-color: #fff;
`
