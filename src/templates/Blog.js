import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import HeroInternalPage from '../components/Layout/Hero/HeroInternalPage'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import MenuBar from '../components/Layout/MenuBar/MenuBar'

export const queryBlog = graphql`
  query($slug: String!){
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedData(formatString: "D/M/Y" )
      body{
        json
      }
    }
  }
`

const Blog = (props) => {
  const options = {
    renderNode:  {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img style={{maxWidth: '100%'}} alt={alt} src={url} />
      }
    }
  }
  const { title } = props.data.contentfulBlogPost

    return (
        <Layout>
            <HeroInternalPage>
              <MenuBar />
            </HeroInternalPage>
        <div className="container" style={{ padding: '0 2em'}}>
            <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>{title}</h1>
          <div style={{ textAlign: 'center'}}>{documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}</div>
              </div>
        </Layout>
    )
}

export default Blog
