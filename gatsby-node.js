const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/Blog.js') 
  const beerItem = path.resolve('./src/templates/BeerItem.js')
  const res = await graphql(`
    {
      allContentfulBlogPost(sort: { fields: publishedData, order: DESC }) {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulBeers{
    edges{
      node{
        contentful_id
      }
    }
  }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  }) 
  res.data.allContentfulBeers.edges.forEach(edge =>{
    createPage({
      component: beerItem,
      path: `/beer/${edge.node.contentful_id}`,
      context: {
        contentful_id: edge.node.contentful_id
      }
      
    })
  })
}


