import styled from 'styled-components'

export default styled.button`
 grid-area: ${props => props.grid_Area || undefined};
 width: 150px;
  height: 40px;
  align-self: center;
  color: white;
  background-color: ${props => props.color || 'green'};
  border: none;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow, transform;
  transition-property: box-shadow, transform;
  :hover{
 box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  }
  
`