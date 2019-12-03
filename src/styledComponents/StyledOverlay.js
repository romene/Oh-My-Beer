import styled from 'styled-components'

export default styled.div` 
    position: absolute;
    background-color: black;
    width: 250px;
    height: inherit;
    opacity: 0;
    z-index: 1;
    grid-area: CardHeader;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
   transition: opacity .25s ease-in-out;
    
    :hover{
        opacity: .6;
    }
`