import styled from 'styled-components'


export const StyledCard = styled.div`
  width: 250px;
  height: 450px;
  margin: 1em .5em;
  box-sizing: border-box;
  border: 1px solid rgba(211, 211, 211, 1);
  overflow: hidden;
  display: grid;
  grid-gap: 4px;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "CardHeader"
    "CardBody";
  :hover {
    -webkit-box-shadow: 10px 17px 73px 5px rgba(0, 0, 0, 0.21);
    -moz-box-shadow: 10px 17px 73px 5px rgba(0, 0, 0, 0.21);
    box-shadow: 10px 17px 73px 5px rgba(0, 0, 0, 0.21);
    cursor: pointer;
  }
   @media(max-width: 768px) {
      margin: 1em auto;

  }
`

export const CardHeader = styled.div`
grid-area: CardHeader;
width: 100px !important;
height: 250px !important;
overflow: hidden;
display: flex;
justify-content: center;
margin: 0 auto;
    
    img{
      object-fit: cover;
      object-position: center;
      width: auto !important;
      max-height: 250px !important;
      padding: 1em;
      margin: .5 auto !important;

  }

   
   
`

export const CardBody = styled.div`
  grid-area: CardBody;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1em;
`

export const CardTitle = styled.h3`
color: black;
align-self: center;
`

export const CardTagline = styled.p`
  color: gray;
  align-self: center;
`

export const CardPrice = styled.p`
  color: gray;
  font-size: 1.8em;
  font-weight: bold;
  align-self: center;

  ::before {
    content: "$";
    margin-right: 5px;
  }
  ::after {
    content: "NZD";
    margin-left: 5px;
    font-size: .5em;
  }
`

