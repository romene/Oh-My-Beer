import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import HeroInternalPage from '../components/Layout/Hero/HeroInternalPage'
import BlogCard from '../components/Layout/Blog/BlogCard'
import { Col } from "antd"
import MenuBar from '../components/Layout/MenuBar/MenuBar'

const BlogPage = () => (
<StaticQuery 
query={QueryBlog}
render={data => {
  const Blogs = data.Blog.edges
  return (
    <Layout>
      <HeroInternalPage/>
      <div className="container">
        <div className="row">
          <Col xs={24} md={12} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: "0 auto" }} >
            {Blogs.map(blog => (
              <BlogCard key={blog.node.id} blogs={blog.node} />
            ))}
          </Col>
        </div>
      </div>
    </Layout>
  )
}}
/> 
)

export default BlogPage



const QueryBlog = graphql`
  {
    Blog: allContentfulBlogPost(sort: { fields: publishedData, order: DESC }) {
      totalCount
      edges {
        node {
          id
          title
          slug
          publishedData(formatString: "D / M /YYYY")
          body {
            json
          }
        }
      }
    }
  }
`



