import styled from 'styled-components'

export default styled.div`
max-width: 1200px;
display: grid;
margin: 2em auto;
grid-gap: 10px;
justify-items: stretch;
justify-content: center;	

grid-template-columns: repeat(auto-fill, 300px);
grid-template-rows: 1fr;


@media(max-width: 768px) {
     
max-width: 350px;
  }

`