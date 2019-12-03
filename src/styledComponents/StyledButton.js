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

  
`