import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import Logo from '../../../images/logo.png'

const BlogCard = ({blogs}) => {
  const { title, slug, publishedData} = blogs
    return (
      <React.Fragment>
        <Link to={`/blog/${slug}`}>
          <StyledBlogDiv>
            <StyledImageCarWrapper>
            <img src={Logo} alt={title} />
            </StyledImageCarWrapper>
            <StyledCardBody>
            <h1>{title}</h1>
            <p>Lorem ipsum dolor sit amet consectetur...</p>
              <span>Published:  {publishedData} </span>
            </StyledCardBody>
          </StyledBlogDiv>
        </Link>
      </React.Fragment>
    )
}

export default BlogCard


const StyledBlogDiv = styled.div`
  max-width: 600px;
  height: 120px;
  background-color: #ededed;
  margin: 1em;
  display: grid;
  justify-items: center;
  grid-template-columns: 20% 80%;
  grid-template-areas: "image chamada";

  :hover {
    background-color: #e5e5e5;
  }


 
`
const StyledCardBody = styled.div`
grid-area: chamada;
width: 100%;
height: 120px;
display: grid;
justify-items: center;
grid-template-rows: 1fr 1fr .5fr;
grid-template-areas: 
"CardTitle"
"CardTagline"
"CardPublished";

    h1{
      grid-area: CardTitle;
      place-self: center;
    }
    p{
      grid-area: CardTagline;
      color: gray;
      word-wrap: break-word;
      word-break: break-all;
      place-self: center;
    }

    span{
      grid-area: CardPublished;
      font-style: italic;
      place-self: end;
      margin: 0 1em .5 0;
    }



`
const StyledImageCarWrapper = styled.div`
 grid-area: image;
 width: 100%;
 background-color: blue;
 
  img{
    height: 120px;
    width: auto;
  }

`

