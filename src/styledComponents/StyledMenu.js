import styled from 'styled-components'

export default styled.div`

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

      .menu{
          min-width: auto;
         ul{
             width: 100%;
             display: flex;
             flex-direction: row;
             flex-wrap: wrap;
             margin: 0 .5em;
             list-style: none;
             justify-content: space-evenly;
             align-items: center;

             li{
                 margin: 0 1em;
                 font-weight: bold;
             }
         }
      }

      .logo{
        height: 100px;
        opacity: 1;
        overflow: hidden;
        
        img{
            height: 100%;
            min-width: auto;
            z-index: 1;

            }
      }

      .cart {
          min-width: 100px;
          display: flex;
          flex-direction: row;
          margin: 0 1em;
          padding: 0 1em;
          align-items: center;
      }
`