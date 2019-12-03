import React from 'react'
import styled from 'styled-components'
import BeerHero from '../../../images/beerHero.jpg'
import Logo from '../../../images/logo.png'

const HeroInternalPage = () => {
  
      return (
        <React.Fragment>
          <StyledHeroInternalPage>

          <StyledLogo>
            <img src={Logo} alt="Rogerio" />
          </StyledLogo>
          </StyledHeroInternalPage>

            
          <div className="container">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "5em",
              }}
              className="row">
              
            </div>
          </div>
        </React.Fragment>
      )
  
  
            }

export default HeroInternalPage

export const StyledHeroInternalPage = styled.div`
  background-image: url(${BeerHero});
  top: 0;
  opacity: 1;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: bottom;
  height: ${props => props.height || "50vh" };
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledLogo = styled.div`
  max-width: 200px;
  height: 200px;
  overflow: hidden;
  img {
    width: inherit;
    height: inherit;  
  }
`